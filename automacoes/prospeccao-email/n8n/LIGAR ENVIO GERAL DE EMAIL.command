#!/bin/bash
# Fecha a última lacuna do envio geral de e-mail avulso pelo Titan (workflow
# "Prospecção - Disparo (SMTP)"): cria a credencial do webhook com o nome de header
# certo e liga o workflow. Não pede nenhuma senha nova, só usa o que já está em
# automacoes/.env. Passo de dois cliques porque essa escrita fica bloqueada quando o
# Claude Code tenta rodar sozinho (classificador de sandbox trata como "escrita em
# cofre de segredo"); rodando você mesma, direto no Terminal, isso não se aplica.

cd "$(dirname "$0")/../../.." || exit 1

if [ ! -f "automacoes/.env" ]; then
  osascript -e 'display alert "Não achei o arquivo .env" message "Era para ele estar em automacoes/.env dentro da pasta SITE PAAPS." as critical'
  exit 1
fi

SAIDA=$(node automacoes/prospeccao-email/n8n/criar-credencial-envio-geral.mjs 2>&1)
STATUS=$?

echo "$SAIDA"
echo
echo "Pode fechar esta janela."

if [ $STATUS -eq 0 ]; then
  MSG=$(echo "$SAIDA" | tail -3 | sed 's/"/\\"/g')
  osascript -e "display alert \"Envio geral de e-mail: pronto\" message \"$MSG\""
else
  MSG=$(echo "$SAIDA" | tail -5 | sed 's/"/\\"/g')
  osascript -e "display alert \"Não deu certo\" message \"$MSG\" as critical"
fi
