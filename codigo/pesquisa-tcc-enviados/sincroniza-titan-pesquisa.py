#!/usr/bin/env python3
"""
Põe na pasta Enviados do Titan (relacionamento@paaps.com.br) toda carta da leva da
pesquisa de TCC que o n8n confirmou ter enviado de verdade. Mesmo problema, mesmo remédio
de codigo/prospeccao-enviados/sincroniza-enviados.py: SMTP entrega ao destinatário e não
grava cópia, e o n8n dispara por SMTP puro, então "Enviados" ficaria vazio para esta
campanha também.

Diferença de propósito em relação ao serviço da prospecção: aqui não existe Notion. A
fonte da verdade do que saiu é a EXECUÇÃO do workflow no n8n (workflow "Pesquisa TCC -
Leva <data> (<hora>)", id em WORKFLOW_ID abaixo). O script lê a última execução, olha o nó
"Enviar (SMTP)" e separa quem passou pela saída de sucesso (enviado) de quem caiu na saída
de erro (não enviado, tratado à parte pelo aviso "FALHOU TCC"). Só o que teve sucesso vira
cópia em Enviados.

O TEXTO de cada carta não vem da execução do n8n: vem de recriar localmente, com
`exportar-cartas-json.mjs`, que chama a MESMA função (`montarCartas`) que gerou o e-mail
que saiu de verdade. É o mesmo princípio do sincroniza-enviados.py: a cópia é honesta
porque nasce do mesmo molde, não porque é o objeto exato que passou pelo SMTP.

## Por que isto NUNCA pode duplicar o envio real

Este script fala com o Titan só por IMAP, e só usa o comando APPEND, que escreve uma
mensagem direto numa pasta da própria caixa. IMAP APPEND não entrega e-mail a ninguém: não
existe SMTP aqui, não existe relay, não existe destinatário sendo tocado. Rodar este
script cem vezes seguidas nunca manda um e-mail a mais para nenhuma prefeitura ou unidade;
na pior hipótese, grava a mesma cópia duas vezes na SUA PRÓPRIA pasta Enviados, e nem isso
acontece, por causa do cabeçalho de dedup abaixo.

## Por que não duplica nem a cópia

Cada mensagem gravada leva o cabeçalho `X-PAAPS-Carta`, com uma chave determinística
(campanha + unidade + data do disparo). Antes de gravar, o script lê esse cabeçalho em
tudo que já está na pasta Enviados e pula o que já tem cópia. Rodar dez vezes seguidas dá
o mesmo resultado de rodar uma.

Rodar na mão:   python3 sincroniza-titan-pesquisa.py
Ver o que faria: python3 sincroniza-titan-pesquisa.py --ensaio
"""

import imaplib
import json
import re
import ssl
import subprocess
import sys
import time
from datetime import datetime, timezone
from email.message import EmailMessage
from email.utils import formatdate, make_msgid
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
ESTADO = Path.home() / ".paaps"
USUARIO = "relacionamento@paaps.com.br"
IMAP_HOST, IMAP_PORTA = "imap.titan.email", 993
PASTA_ENVIADOS = "Sent"

# Workflow "Pesquisa TCC - Leva 2026-08-28 (07:20)", 5 unidades, criado em 27/08/2026.
# Se uma nova leva for montada (data ou hora diferente), atualizar aqui.
WORKFLOW_ID = "RcGxbk8co4RuhbtT"
CAMPANHA = "tcc-bh-2026-08-28"

EXPORTADOR = RAIZ / "automacoes/pesquisa-tcc-bh/n8n/exportar-cartas-json.mjs"
ASSINATURA = RAIZ / "insumos-compartilhados/assinatura-email/assinatura-pesquisa-mallu.jpg"
ANUENCIA = RAIZ / "automacoes/pesquisa-tcc-bh/anuencia-suas.pdf"
ENSAIO = "--ensaio" in sys.argv


def env(chave):
    for linha in (RAIZ / "automacoes/.env").read_text(encoding="utf-8").splitlines():
        if linha.startswith(chave + "="):
            return linha.split("=", 1)[1].strip()
    sys.exit(f"{chave} não está em automacoes/.env")


def n8n(caminho):
    req = __import__("urllib.request", fromlist=["Request"]).Request(
        f"{env('N8N_API_URL')}/api/v1/{caminho}",
        headers={"X-N8N-API-KEY": env("N8N_API_KEY")},
    )
    import urllib.request
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read())


def slug(texto):
    texto = re.sub(r"[̀-ͯ]", "", __import__("unicodedata").normalize("NFD", texto))
    return re.sub(r"[^a-zA-Z0-9]+", "-", texto).strip("-").lower()


def enviados_com_sucesso():
    """
    Lê a última execução do workflow da leva e devolve, por e-mail de destino, se o
    "Enviar (SMTP)" teve sucesso, em que instante, e com qual Message-ID real.

    O nó "Enviar (SMTP)" SUBSTITUI o item pela resposta do próprio SMTP (envelope,
    messageId, accepted/rejected): ele não repassa o campo "unidade" que entrou. Por isso
    a chave aqui é o e-mail do envelope, não o nome da unidade — a ligação com a unidade
    é feita depois, cruzando com o "para" das cartas locais.

    Uma unidade sem registro no nó (execução ainda não rodou, ou nem chegou nela) não
    entra no resultado: nada é assumido como enviado.
    """
    execucoes = n8n(f"executions?workflowId={WORKFLOW_ID}&limit=5")
    if not execucoes.get("data"):
        return None, "nenhuma execução do workflow ainda"

    ultima = max(execucoes["data"], key=lambda e: e["startedAt"])
    detalhe = n8n(f"executions/{ultima['id']}?includeData=true")

    run_data = (
        detalhe.get("data", {})
        .get("resultData", {})
        .get("runData", {})
    )
    execucoes_envio = run_data.get("Enviar (SMTP)", [])

    resultado = {}
    for run in execucoes_envio:
        # saída 0 = sucesso, saída 1 = erro (onError: continueErrorOutput)
        itens_sucesso = (run.get("data", {}) or {}).get("main", [[]])[0] or []
        quando_ms = run.get("startTime")
        quando = (
            datetime.fromtimestamp(quando_ms / 1000, tz=timezone.utc)
            if quando_ms
            else datetime.now(timezone.utc)
        )
        for item in itens_sucesso:
            j = item.get("json", {})
            destinos = j.get("envelope", {}).get("to") or j.get("accepted") or []
            for email in destinos:
                resultado[email.lower()] = {
                    "quando": quando,
                    "message_id_real": j.get("messageId"),
                }
    return resultado, f"execução {ultima['id']} de {ultima['startedAt']}"


def cartas_locais():
    """As 5 cartas, remontadas localmente pela mesma função que gerou o envio real."""
    saida = subprocess.run(
        ["node", str(EXPORTADOR)], cwd=RAIZ, capture_output=True, text=True, check=True
    )
    return {c["unidade"]: c for c in json.loads(saida.stdout)}


def ja_na_pasta(imap):
    imap.select(PASTA_ENVIADOS)
    ok, dados = imap.search(None, "ALL")
    marcadas = set()
    import email as email_mod
    for i in (dados[0].split() if ok == "OK" else []):
        ok, d = imap.fetch(i, "(BODY.PEEK[HEADER.FIELDS (X-PAAPS-CARTA)])")
        cab = email_mod.message_from_bytes(d[0][1]).get("X-PAAPS-Carta")
        if cab:
            marcadas.add(cab.strip())
    return marcadas


def main():
    ESTADO.mkdir(exist_ok=True)
    log = open(ESTADO / "sincroniza-titan-pesquisa.log", "a", encoding="utf-8")

    def diz(msg):
        linha = f"[{datetime.now(timezone.utc).astimezone().isoformat(timespec='seconds')}] {msg}"
        print(linha)
        log.write(linha + "\n")

    enviados, origem = enviados_com_sucesso()
    if enviados is None:
        diz(f"nada a fazer: {origem}")
        return
    diz(f"fonte: {origem} — {len(enviados)} envio(s) confirmado(s) pelo SMTP")

    if not enviados:
        diz("execução encontrada, mas nenhum envio teve sucesso no nó Enviar (SMTP) ainda")
        return

    cartas = cartas_locais()
    # A carta local é a fonte da unidade certa; o envio confirmado é a fonte do que
    # realmente saiu. Junta os dois pelo e-mail, que é o único campo que sobrevive nos
    # dois lados.
    cartas_por_email = {c["para"].lower(): c for c in cartas.values()}

    ctx = ssl.create_default_context()
    with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORTA, ssl_context=ctx) as imap:
        imap.login(USUARIO, env("TITAN_SENHA"))
        gravadas = ja_na_pasta(imap)
        diz(f"já gravadas em {PASTA_ENVIADOS}: {len(gravadas)}")

        assinatura_bytes = ASSINATURA.read_bytes()
        anuencia_bytes = ANUENCIA.read_bytes() if ANUENCIA.exists() else None

        for email_destino, info in sorted(enviados.items(), key=lambda kv: kv[1]["quando"]):
            carta = cartas_por_email.get(email_destino)
            if not carta:
                diz(f"  PULEI {email_destino}: SMTP confirmou envio, mas não achei carta local com esse destinatário")
                continue

            unidade = carta["unidade"]
            quando = info["quando"]
            chave = f"{CAMPANHA}::{slug(unidade)}"
            if chave in gravadas:
                diz(f"  já tinha cópia: {unidade}")
                continue

            msg = EmailMessage()
            msg["From"] = "Maria Luiza Vasconcellos Barbosa <relacionamento@paaps.com.br>"
            msg["To"] = carta["para"]
            msg["Subject"] = carta["assunto"]
            # Usa o Message-ID REAL que o SMTP do n8n gerou no envio de verdade, não um
            # sintético: assim, se a unidade responder, a resposta chega com In-Reply-To
            # apontando para este mesmo id, e o Titan tem chance de encadear a conversa.
            msg["Message-ID"] = info["message_id_real"] or make_msgid(domain="paaps.com.br")
            msg["X-PAAPS-Carta"] = chave
            msg["X-PAAPS-Origem"] = "cópia gravada a partir da execução do n8n + molde local, pesquisa de TCC"
            msg["Date"] = formatdate(quando.timestamp(), localtime=True)

            html = carta["html"].replace("cid:assinatura", "cid:assinatura")
            msg.set_content(
                "Esta mensagem foi escrita em HTML. Se você está lendo esta linha, o seu "
                "leitor de e-mail não exibiu a versão formatada."
            )
            msg.add_alternative(html, subtype="html")
            msg.get_payload()[1].add_related(
                assinatura_bytes, maintype="image", subtype="jpeg",
                cid="<assinatura>", filename="assinatura-pesquisa.jpg",
            )
            if anuencia_bytes:
                msg.add_attachment(
                    anuencia_bytes, maintype="application", subtype="pdf",
                    filename="Carta de Anuencia - SUAS BH.pdf",
                )

            if ENSAIO:
                diz(f"  [ENSAIO] gravaria: {carta['para']} · {msg['Subject']} · {quando.isoformat()}")
                continue

            carimbo = imaplib.Time2Internaldate(quando.timestamp())
            imap.append(PASTA_ENVIADOS, "\\Seen", carimbo, msg.as_bytes())
            diz(f"  gravada: {carta['para']} · {msg['Subject']} · {quando.isoformat()}")

    log.close()


if __name__ == "__main__":
    main()
