#!/usr/bin/env python3
"""
Põe na pasta Enviados do Titan toda carta de prospecção que saiu de verdade.

O problema que isto resolve: o n8n dispara por SMTP, e SMTP só entrega ao destinatário.
Quem grava a cópia em "Enviados" é o programa que envia, e o webmail faz isso sozinho;
o n8n não faz. Por isso a caixa de relacionamento@paaps.com.br parecia sem enviados,
mesmo com dezenas de cartas tendo saído. Descoberto em 20/08/2026: a pasta tinha uma
única mensagem, escrita à mão pelo webmail.

Como funciona: a fonte da verdade do que saiu é a base (EMP) Cartas de Prospecção no
Notion, onde cada carta enviada guarda destinatário, assunto, hora do envio e o texto
integral. Este script lê de lá, remonta a carta no mesmo molde, com a mesma assinatura,
e grava na pasta Enviados por IMAP, com a data original do disparo.

Cada cópia leva o cabeçalho `X-PAAPS-Carta` com o id da página no Notion. É por ele que
o script sabe o que já gravou, então rodar duas vezes não duplica nada.

Rodar na mão:   python3 sincroniza-enviados.py
Ver o que faria: python3 sincroniza-enviados.py --ensaio
"""

import imaplib, json, ssl, sys, time, urllib.request, email
from datetime import datetime, timezone
from email.message import EmailMessage
from email.utils import formatdate, make_msgid, parsedate_to_datetime
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
ESTADO = Path.home() / ".paaps"
USUARIO = "relacionamento@paaps.com.br"
REMETENTE = "PAAPS Brasil <relacionamento@paaps.com.br>"
IMAP_HOST, IMAP_PORTA = "imap.titan.email", 993
PASTA_ENVIADOS = "Sent"
BASE_CARTAS = "c531c0c866a241ffa0a44559888c19dc"   # (EMP) Cartas de Prospecção
TEMPLATE = RAIZ / "automacoes/prospeccao-email/template-email.html"
ASSINATURA = RAIZ / "insumos-compartilhados/assinatura-email/assinatura-paaps-a-montanha.jpg"
ENSAIO = "--ensaio" in sys.argv


def env(chave):
    for linha in (RAIZ / "automacoes/.env").read_text(encoding="utf-8").splitlines():
        if linha.startswith(chave + "="):
            return linha.split("=", 1)[1].strip()
    sys.exit(f"{chave} não está em automacoes/.env")


def notion(caminho, metodo="GET", corpo=None):
    req = urllib.request.Request(
        f"https://api.notion.com/v1/{caminho}",
        method=metodo,
        data=json.dumps(corpo).encode() if corpo is not None else None,
        headers={
            "Authorization": f"Bearer {env('NOTION_TOKEN')}",
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read())


def texto(prop):
    """Extrai texto de qualquer tipo de propriedade do Notion sem quebrar."""
    if not prop:
        return ""
    t = prop.get("type")
    if t in ("title", "rich_text"):
        return "".join(p["plain_text"] for p in prop[t])
    if t in ("select", "status"):
        return (prop[t] or {}).get("name", "")
    if t == "email":
        return prop[t] or ""
    if t == "date":
        return (prop[t] or {}).get("start", "")
    return ""


def paragrafos(page_id):
    """O corpo da carta, como está escrito na página do Notion."""
    saida, cursor = [], None
    while True:
        q = f"blocks/{page_id}/children?page_size=100" + (f"&start_cursor={cursor}" if cursor else "")
        r = notion(q)
        for b in r["results"]:
            if b["type"] == "paragraph":
                linha = "".join(p["plain_text"] for p in b["paragraph"]["rich_text"]).strip()
                if linha:
                    saida.append(linha)
        if not r.get("has_more"):
            return saida
        cursor = r["next_cursor"]


def escapa(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def monta_html(linhas):
    corpo = "\n".join(
        f'<p style="margin:0 0 16px 0;">{escapa(l)}</p>' for l in linhas
    )
    molde = TEMPLATE.read_text(encoding="utf-8")
    return molde.replace("{{CORPO}}", corpo)


def cartas_enviadas():
    saida, cursor = [], None
    while True:
        corpo = {"page_size": 100}
        if cursor:
            corpo["start_cursor"] = cursor
        r = notion(f"databases/{BASE_CARTAS}/query", "POST", corpo)
        for p in r["results"]:
            props = p["properties"]
            if texto(props.get("Estado")) != "Enviada":
                continue
            saida.append({
                "id": p["id"],
                "assunto": texto(props.get("Assunto")),
                "para": texto(props.get("Para")),
                # Enviada em é o certo; carta antiga que ficou sem a data cai para a
                # data em que foi escrita, e nunca para a hora de hoje, que seria mentira
                # sobre quando a prefeitura recebeu.
                "quando": texto(props.get("Enviada em")) or texto(props.get("Escrita em")) or p["created_time"],
                "titulo": texto(props.get("Carta")),
            })
        if not r.get("has_more"):
            return saida
        cursor = r["next_cursor"]


def ja_na_pasta(imap):
    """Ids de carta que já estão gravados em Enviados, lidos do próprio cabeçalho."""
    imap.select(PASTA_ENVIADOS)
    ok, dados = imap.search(None, "ALL")
    marcados = set()
    for i in (dados[0].split() if ok == "OK" else []):
        ok, d = imap.fetch(i, "(BODY.PEEK[HEADER.FIELDS (X-PAAPS-CARTA)])")
        cab = email.message_from_bytes(d[0][1]).get("X-PAAPS-Carta")
        if cab:
            marcados.add(cab.strip())
    return marcados


def main():
    ESTADO.mkdir(exist_ok=True)
    log = open(ESTADO / "sincroniza-enviados.log", "a", encoding="utf-8")

    def diz(msg):
        linha = f"[{datetime.now(timezone.utc).astimezone().isoformat(timespec='seconds')}] {msg}"
        print(linha)
        log.write(linha + "\n")

    cartas = cartas_enviadas()
    diz(f"cartas com Estado=Enviada no Notion: {len(cartas)}")

    ctx = ssl.create_default_context()
    with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORTA, ssl_context=ctx) as imap:
        imap.login(USUARIO, env("TITAN_SENHA"))
        gravadas = ja_na_pasta(imap)
        diz(f"já gravadas em {PASTA_ENVIADOS}: {len(gravadas)}")

        novas = [c for c in cartas if c["id"] not in gravadas]
        if not novas:
            diz("nada novo para gravar")
            return
        diz(f"a gravar: {len(novas)}")

        assinatura = ASSINATURA.read_bytes()
        for c in sorted(novas, key=lambda x: x["quando"] or ""):
            linhas = paragrafos(c["id"])
            if not linhas or not c["para"]:
                diz(f"  PULEI {c['titulo']}: sem texto ou sem destinatário no Notion")
                continue

            msg = EmailMessage()
            msg["From"] = REMETENTE
            msg["To"] = c["para"]
            msg["Subject"] = c["assunto"] or c["titulo"]
            msg["Message-ID"] = make_msgid(domain="paaps.com.br")
            msg["X-PAAPS-Carta"] = c["id"]
            msg["X-PAAPS-Origem"] = "copia gravada a partir do registro do Notion"
            quando = c["quando"]
            try:
                dt = datetime.fromisoformat(quando.replace("Z", "+00:00"))
                msg["Date"] = formatdate(dt.timestamp(), localtime=True)
            except Exception:
                dt = None
                msg["Date"] = formatdate(localtime=True)

            msg.set_content(
                "Esta mensagem foi escrita em HTML. Se você está lendo esta linha, o seu "
                "leitor de e-mail não exibiu a versão formatada."
            )
            msg.add_alternative(monta_html(linhas), subtype="html")
            msg.get_payload()[1].add_related(
                assinatura, maintype="image", subtype="jpeg",
                cid="<assinatura>", filename="assinatura-paaps.jpg",
            )

            if ENSAIO:
                diz(f"  [ENSAIO] gravaria: {c['para']} · {msg['Subject']} · {quando}")
                continue

            carimbo = imaplib.Time2Internaldate(dt.timestamp() if dt else time.time())
            imap.append(PASTA_ENVIADOS, "\\Seen", carimbo, msg.as_bytes())
            diz(f"  gravada: {c['para']} · {msg['Subject']} · {quando}")

    log.close()


if __name__ == "__main__":
    main()
