#!/usr/bin/env python3
"""
Responde, pela caixa relacionamento@paaps.com.br, um lead que respondeu ao e-mail frio.
É a ferramenta de envio da Fase 2 (skill `fase2-aquecimento`).

O que ela faz, e por que cada passo existe:

1. Acha na INBOX a mensagem original do lead e copia dela o Message-ID e as References.
   Sem isso a resposta chega como e-mail novo e a conversa se parte em duas na caixa dele.
2. Monta o e-mail no molde real (template-email.html) com a assinatura da montanha
   embutida por cid, do mesmo jeito que a prospecção fria envia.
3. Dispara por SMTP do Titan.
4. **Grava a cópia na pasta Enviados por IMAP.** SMTP só entrega ao destinatário: quem
   manda por fora do webmail não aparece em "Enviados" a não ser que alguém escreva a
   cópia lá. Era por isso que a caixa do Titan parecia vazia de enviados.
5. Relê a mensagem gravada e imprime a prova (data, destinatário, assunto, Message-ID).

Uso:
  python3 responder-lead.py --para saude@x.mg.gov.br --assunto "Re: ..." \
      --corpo respostas/arquivo.html [--enviar]

Sem --enviar, faz tudo menos disparar: monta, salva a prévia e mostra o que sairia.
"""

import argparse, imaplib, smtplib, ssl, time, email, sys
from email.message import EmailMessage
from email.utils import formatdate, make_msgid, parseaddr
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
USUARIO = "relacionamento@paaps.com.br"
REMETENTE = "PAAPS Brasil <relacionamento@paaps.com.br>"
IMAP_HOST, IMAP_PORTA = "imap.titan.email", 993
SMTP_HOST, SMTP_PORTA = "smtp.titan.email", 465
TEMPLATE = RAIZ / "automacoes/prospeccao-email/template-email.html"
ASSINATURA = RAIZ / "insumos-compartilhados/assinatura-email/assinatura-paaps-a-montanha.jpg"


def senha():
    for linha in (RAIZ / "automacoes/.env").read_text(encoding="utf-8").splitlines():
        if linha.startswith("TITAN_SENHA="):
            return linha.split("=", 1)[1].strip()
    sys.exit("TITAN_SENHA não está em automacoes/.env")


def corpo_html(fragmento: str, sem_descadastro: bool) -> str:
    molde = TEMPLATE.read_text(encoding="utf-8")
    if molde.count("{{CORPO}}") != 1:
        sys.exit("template-email.html precisa ter {{CORPO}} exatamente uma vez")
    html = molde.replace("{{CORPO}}", fragmento)
    if sem_descadastro:
        # O rodapé de descadastro é do primeiro toque frio. Numa resposta a quem já
        # escreveu de volta, ele soa como se a gente não tivesse lido a conversa.
        i = html.find("<!-- saída honesta -->")
        f = html.find("</tr>", i)
        if i != -1 and f != -1:
            html = html[:i] + html[f + len("</tr>"):]
    return html


def achar_original(imap, remetente_lead):
    """Message-ID e References da última mensagem do lead na INBOX."""
    imap.select("INBOX")
    dominio = remetente_lead.split("@")[-1]
    ok, dados = imap.search(None, 'FROM', f'"{remetente_lead}"')
    ids = dados[0].split() if ok == "OK" else []
    if not ids:
        ok, dados = imap.search(None, 'FROM', f'"{dominio}"')
        ids = dados[0].split() if ok == "OK" else []
    if not ids:
        return None, None, None
    ok, dados = imap.fetch(ids[-1], "(BODY.PEEK[HEADER])")
    cab = email.message_from_bytes(dados[0][1])
    return cab.get("Message-ID"), cab.get("References"), cab.get("Subject")


def pasta_enviados(imap):
    ok, pastas = imap.list()
    nomes = [p.decode(errors="replace") for p in (pastas or [])]
    for alvo in ("\\Sent", '"Sent"', "Enviados", "INBOX.Sent"):
        for linha in nomes:
            if alvo in linha:
                return linha.split(' "/" ')[-1].strip('"')
    return "Sent"


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--para", required=True)
    p.add_argument("--assunto", required=True)
    p.add_argument("--corpo", required=True, help="arquivo HTML com o corpo (fragmento)")
    p.add_argument("--enviar", action="store_true")
    p.add_argument("--com-descadastro", action="store_true")
    p.add_argument("--previa", default="previa-envio.html")
    a = p.parse_args()

    fragmento = Path(a.corpo).read_text(encoding="utf-8")
    html = corpo_html(fragmento, sem_descadastro=not a.com_descadastro)

    # prévia navegável: mesma peça, com a assinatura embutida como data URI
    import base64
    b64 = base64.b64encode(ASSINATURA.read_bytes()).decode()
    # o <meta> só existe na prévia: o e-mail declara utf-8 no próprio cabeçalho MIME,
    # mas o arquivo aberto no navegador precisa dizer o charset ou vira mojibake
    Path(a.previa).write_text(
        '<meta charset="utf-8">\n'
        + html.replace("cid:assinatura", f"data:image/jpeg;base64,{b64}"),
        encoding="utf-8",
    )
    print(f"prévia: {a.previa}")

    pw = senha()
    ctx = ssl.create_default_context()

    with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORTA, ssl_context=ctx) as imap:
        imap.login(USUARIO, pw)
        mid_orig, refs_orig, assunto_orig = achar_original(imap, a.para)
    print(f"original do lead: {'achada, Message-ID ' + mid_orig if mid_orig else 'NÃO achada na INBOX'}")
    if assunto_orig:
        print(f"assunto original: {assunto_orig}")

    msg = EmailMessage()
    msg["From"] = REMETENTE
    msg["To"] = a.para
    msg["Subject"] = a.assunto
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain="paaps.com.br")
    if mid_orig:
        msg["In-Reply-To"] = mid_orig
        msg["References"] = f"{refs_orig} {mid_orig}".strip() if refs_orig else mid_orig
    msg.set_content(
        "Esta mensagem foi escrita em HTML. Se você está lendo esta linha, o seu leitor "
        "de e-mail não exibiu a versão formatada. Escreva para relacionamento@paaps.com.br."
    )
    msg.add_alternative(html, subtype="html")
    msg.get_payload()[1].add_related(
        ASSINATURA.read_bytes(), maintype="image", subtype="jpeg",
        cid="<assinatura>", filename="assinatura-paaps.jpg",
    )

    if not a.enviar:
        print("\n[ENSAIO] nada foi enviado. Rode de novo com --enviar para disparar.")
        return

    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORTA, context=ctx) as s:
        s.login(USUARIO, pw)
        s.send_message(msg)
    print(f"\nENVIADO por SMTP {SMTP_HOST} para {a.para}")

    with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORTA, ssl_context=ctx) as imap:
        imap.login(USUARIO, pw)
        pasta = pasta_enviados(imap)
        imap.append(pasta, "\\Seen", imaplib.Time2Internaldate(time.time()), msg.as_bytes())
        print(f"cópia gravada em: {pasta}")
        imap.select(pasta)
        # O SEARCH por Message-ID do Titan não indexa na hora e devolve vazio para uma
        # mensagem recém-gravada. Isso deu um falso "não achei" no primeiro envio real
        # (20/08/2026), com a cópia já gravada. Por isso a leitura de volta é pela
        # última mensagem da pasta, com o Message-ID conferido depois.
        ok, dados = imap.search(None, "ALL")
        ids = dados[0].split() if ok == "OK" else []
        if ids:
            ok, d = imap.fetch(ids[-1], "(BODY.PEEK[HEADER.FIELDS (DATE FROM TO SUBJECT MESSAGE-ID IN-REPLY-TO)])")
            cabecalho = d[0][1].decode(errors="replace").strip()
            print("\n=== PROVA: mensagem lida de volta da pasta Enviados ===")
            print(cabecalho)
            if msg["Message-ID"] not in cabecalho:
                print("AVISO: a última mensagem da pasta não é a que acabou de sair")
        else:
            print("AVISO: não reencontrei a cópia na pasta de enviados")


if __name__ == "__main__":
    main()
