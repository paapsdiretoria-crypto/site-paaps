#!/bin/bash
# Pergunta um token de API do Cloudflare numa janelinha, guarda no .env e usa ele pra
# adicionar (ou corrigir) os 3 registros de DNS que o Resend precisa pra autenticar o
# e-mail de relacionamento@paaps.com.br (DKIM + SPF). Sem isso, o e-mail sai mas cai em
# spam ou é rejeitado, porque o servidor de quem recebe não confirma que é legítimo.
# O token nunca aparece na tela nem fica no histórico do chat.

cd "$(dirname "$0")/../../.." || exit 1
ENV="automacoes/.env"

if [ ! -f "$ENV" ]; then
  osascript -e 'display alert "Não achei o arquivo .env" message "Era para ele estar em automacoes/.env dentro da pasta SITE PAAPS." as critical'
  exit 1
fi

TOKEN=$(osascript -e 'try
  set r to display dialog "Token de API do Cloudflare, com permissão de editar DNS da zona paaps.com.br:" & return & return & "Crie em dash.cloudflare.com → seu ícone (canto superior direito) → My Profile → API Tokens → Create Token → modelo \"Edit zone DNS\", e restrinja ao domínio paaps.com.br." default answer "" with hidden answer with title "PAAPS: token do Cloudflare" buttons {"Cancelar","Salvar"} default button "Salvar"
  if button returned of r is "Cancelar" then error number -128
  return text returned of r
on error number -128
  return "__CANCELADO__"
end try')

if [ "$TOKEN" = "__CANCELADO__" ] || [ -z "$TOKEN" ]; then
  osascript -e 'display alert "Cancelado" message "Nada foi salvo, nenhum DNS foi alterado."'
  exit 0
fi

if grep -q '^CLOUDFLARE_API_TOKEN=' "$ENV"; then
  grep -v '^CLOUDFLARE_API_TOKEN=' "$ENV" > "$ENV.tmp" && mv "$ENV.tmp" "$ENV"
fi
[ -n "$(tail -c 1 "$ENV")" ] && printf '\n' >> "$ENV"
printf '\n# Token do Cloudflare (edição de DNS da zona paaps.com.br, conserto do DKIM/SPF)\n' >> "$ENV"
printf 'CLOUDFLARE_API_TOKEN=%s\n' "$TOKEN" >> "$ENV"

osascript -e 'display notification "Token guardado. Consertando o DNS..." with title "PAAPS"'

SAIDA=$(node automacoes/prospeccao-email/n8n/consertar-dns-resend.mjs 2>&1)
echo "$SAIDA"

if echo "$SAIDA" | grep -q "DNS_OK"; then
  osascript -e 'display alert "Pronto" message "Os 3 registros de DNS foram criados ou corrigidos no Cloudflare, e pedi pro Resend reverificar. A verificação de DNS pode levar de alguns minutos até algumas horas pra propagar. Te aviso quando confirmar que ficou tudo verde."'
else
  MSG=$(echo "$SAIDA" | tail -15 | sed 's/"/\\"/g')
  osascript -e "display alert \"Não deu certo\" message \"$MSG\" as critical"
fi

echo
echo "Pode fechar esta janela."
