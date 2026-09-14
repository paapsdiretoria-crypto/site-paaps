#!/bin/bash
# Pergunta a chave de API do Resend numa janelinha, guarda no .env e testa se ela
# funciona de verdade, consultando a conta. A chave nunca aparece na tela nem fica
# no histórico do chat.

cd "$(dirname "$0")/../../.." || exit 1
ENV="automacoes/.env"

if [ ! -f "$ENV" ]; then
  osascript -e 'display alert "Não achei o arquivo .env" message "Era para ele estar em automacoes/.env dentro da pasta SITE PAAPS." as critical'
  exit 1
fi

CHAVE=$(osascript -e 'try
  set r to display dialog "Chave de API do Resend (resend.com/api-keys):" & return & return & "Pode ser uma chave só de leitura. É pra eu checar o plano e quantos e-mails já saíram, antes do disparo de amanhã." default answer "" with hidden answer with title "PAAPS: chave do Resend" buttons {"Cancelar","Salvar"} default button "Salvar"
  if button returned of r is "Cancelar" then error number -128
  return text returned of r
on error number -128
  return "__CANCELADO__"
end try')

if [ "$CHAVE" = "__CANCELADO__" ] || [ -z "$CHAVE" ]; then
  osascript -e 'display alert "Cancelado" message "Nada foi salvo."'
  exit 0
fi

# Tira uma linha RESEND_API_KEY antiga, se existir, para não ficar duplicada.
if grep -q '^RESEND_API_KEY=' "$ENV"; then
  grep -v '^RESEND_API_KEY=' "$ENV" > "$ENV.tmp" && mv "$ENV.tmp" "$ENV"
fi

# Garante quebra de linha no fim do arquivo antes de acrescentar.
[ -n "$(tail -c 1 "$ENV")" ] && printf '\n' >> "$ENV"

printf '\n# Chave de API do Resend (checagem de plano e uso, disparo de prospecção)\n' >> "$ENV"
printf 'RESEND_API_KEY=%s\n' "$CHAVE" >> "$ENV"

osascript -e 'display notification "Chave guardada. Testando a conexão com o Resend..." with title "PAAPS"'

RESP=$(curl -s -o /tmp/paaps-resend-check.json -w "%{http_code}" \
  -H "Authorization: Bearer $CHAVE" \
  https://api.resend.com/domains)

unset CHAVE

if [ "$RESP" = "200" ]; then
  DOMINIOS=$(node -e "const d=require('/tmp/paaps-resend-check.json'); console.log((d.data||[]).map(x=>x.name+': '+x.status).join('\n') || 'nenhum domínio encontrado')")
  MSG="Chave válida, conexão OK.

Domínios na conta:
$DOMINIOS

O Resend não expõe o limite do plano (100/dia no gratuito) nem o quanto já foi\nenviado hoje por essa API. Pra ver o número exato antes do disparo de amanhã,\nabra resend.com, entre em Settings > Billing (plano) e em Emails (quantos\nsaíram hoje). Me diga os dois números que eu ajusto o intervalo do disparo."
  osascript -e "display alert \"Resend conectado\" message \"$MSG\""
else
  MSG=$(cat /tmp/paaps-resend-check.json 2>/dev/null | head -c 300 | sed 's/"/\\"/g')
  osascript -e "display alert \"Não deu certo (HTTP $RESP)\" message \"$MSG\" as critical"
fi

rm -f /tmp/paaps-resend-check.json

echo
echo "Pode fechar esta janela."
