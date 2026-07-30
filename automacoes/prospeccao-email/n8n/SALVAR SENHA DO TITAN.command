#!/bin/bash
# Pergunta a senha do relacionamento@paaps.com.br numa janelinha, guarda no .env e
# liga o workflow de Retorno no n8n. A senha nunca aparece na tela nem fica no histórico.

cd "$(dirname "$0")/../../.." || exit 1
ENV="automacoes/.env"

if [ ! -f "$ENV" ]; then
  osascript -e 'display alert "Não achei o arquivo .env" message "Era para ele estar em automacoes/.env dentro da pasta SITE PAAPS." as critical'
  exit 1
fi

SENHA=$(osascript -e 'try
  set r to display dialog "Senha do e-mail relacionamento@paaps.com.br no Titan:" & return & return & "É a mesma que o envio já usa. Se o Titan estiver com verificação em duas etapas, use a senha de aplicativo." default answer "" with hidden answer with title "PAAPS: senha do Titan" buttons {"Cancelar","Salvar"} default button "Salvar"
  if button returned of r is "Cancelar" then error number -128
  return text returned of r
on error number -128
  return "__CANCELADO__"
end try')

if [ "$SENHA" = "__CANCELADO__" ] || [ -z "$SENHA" ]; then
  osascript -e 'display alert "Cancelado" message "Nada foi salvo."'
  exit 0
fi

# Tira uma linha TITAN_SENHA antiga, se existir, para não ficar duplicada.
if grep -q '^TITAN_SENHA=' "$ENV"; then
  grep -v '^TITAN_SENHA=' "$ENV" > "$ENV.tmp" && mv "$ENV.tmp" "$ENV"
fi

# Garante quebra de linha no fim do arquivo antes de acrescentar.
[ -n "$(tail -c 1 "$ENV")" ] && printf '\n' >> "$ENV"

printf '\n# Senha do relacionamento@paaps.com.br no Titan (leitura da caixa por IMAP)\n' >> "$ENV"
printf 'TITAN_SENHA=%s\n' "$SENHA" >> "$ENV"
unset SENHA

osascript -e 'display notification "Senha guardada. Testando a conexão com a caixa..." with title "PAAPS"'

SAIDA=$(node automacoes/prospeccao-email/n8n/criar-credencial-imap.mjs 2>&1)
echo "$SAIDA"

if echo "$SAIDA" | grep -q "LIGADO"; then
  osascript -e 'display alert "Pronto" message "A caixa foi conectada e o workflow de Retorno está ligado. Agora você é avisada quando alguém responder."'
else
  MSG=$(echo "$SAIDA" | tail -12 | sed 's/"/\\"/g')
  osascript -e "display alert \"Não deu certo\" message \"$MSG\" as critical"
fi

echo
echo "Pode fechar esta janela."
