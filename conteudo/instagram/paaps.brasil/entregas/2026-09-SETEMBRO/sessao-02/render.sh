#!/usr/bin/env bash
# Fotografa cada slide de um carrossel PAAPS em PNG separado (1080×1350), um arquivo por
# slide, prontos para postar ou enviar pra aprovação.
#
# Mesma convenção de `.claude/skills/exporta-html-pdf/exportar-slides.sh` (Chrome headless,
# ?solo=N, servido por HTTP porque file:// quebra caminho relativo de imagem) — só que a
# saída aqui é PNG por slide, não PDF montado. Use este quando o destino é Instagram; use o
# outro quando o destino é PDF de apresentação/anexo.
#
#   ./render.sh <pasta-da-peca> <n-slides> [ids...]
#
# <pasta-da-peca> precisa ter um index.html com as seções <section class="slide" id="sN">
# (copie template.html pra lá e renomeie, ajuste texto/fotos). Se passar [ids...], fotografa
# só esses ids (útil pra re-renderizar 1 slide depois de um ajuste, ex.: "3 3b 7"). Sem
# ids, fotografa "1 2 3 ... N" na sequência.
#
# Exemplo:
#   ./render.sh "conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01" 8
#   ./render.sh "conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01" 8 3 6

set -euo pipefail

PASTA="${1:?informe a pasta da peça, com o index.html dela}"
N="${2:?informe quantos slides (sem contar variantes tipo 3b)}"
shift 2
IDS=("$@")
if [ "${#IDS[@]}" -eq 0 ]; then
  IDS=()
  for i in $(seq 1 "$N"); do IDS+=("$i"); done
fi

# Acha um Chromium headless utilizável: Chrome de macOS local primeiro, senão qualquer
# Chromium/Chrome de Linux no PATH, senão o Chromium que o Playwright já traz pré-instalado
# nos sandboxes de nuvem (achado em 01/09/2026, sem precisar instalar nada).
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CH" ]; then
  CH="$(command -v google-chrome || command -v chromium || command -v chromium-browser || true)"
fi
if [ -z "$CH" ] || [ ! -x "$CH" ]; then
  for cand in "${PLAYWRIGHT_BROWSERS_PATH:-/opt/pw-browsers}/chromium" "$HOME/.cache/ms-playwright/chromium"*/chrome-linux/chrome; do
    if [ -x "$cand" ]; then CH="$cand"; break; fi
  done
fi
[ -n "$CH" ] && [ -x "$CH" ] || { echo "Nenhum Chromium/Chrome headless encontrado (nem macOS, nem Linux, nem Playwright)"; exit 1; }
[ -f "$PASTA/index.html" ] || { echo "Nao achei $PASTA/index.html"; exit 1; }

PORT=$(python3 -c "import socket;s=socket.socket();s.bind(('',0));print(s.getsockname()[1]);s.close()")
( cd "$PASTA" && python3 -m http.server "$PORT" >/dev/null 2>&1 ) &
SRV=$!
trap 'kill $SRV 2>/dev/null; wait $SRV 2>/dev/null' EXIT
sleep 1

# Largura/altura reais do slide (o CSS do template usa 1080x1350; não mude sem checar lá).
W=1080
H=1350
# Folga vertical no --window-size pedido ao Chrome (achado em 02/09/2026, sandbox de nuvem
# com o Chromium do Playwright): o headless reserva ~87px de altura de "moldura" mesmo sem
# UI nenhuma, e a página só recebe H-87px de viewport de verdade — cortando o rodapé/logo
# do slide sem erro nenhum no console. Pedimos H+PAD de janela e recortamos a imagem final
# de volta para HxW exatos com PIL. Testado: com PAD=100 a página some inteira até a última
# linha (y=1349) sem sobra nem corte. Se algum ambiente não tiver esse offset, o crop ainda
# funciona (pega o canto superior esquerdo exato, que é sempre onde o slide começa).
PAD=100

mkdir -p "$PASTA/export"
echo "Fotografando ${#IDS[@]} slide(s) de $PASTA em ${W}x${H}..."
for id in "${IDS[@]}"; do
  padded=$(printf "%02d" "$id" 2>/dev/null || echo "$id")
  RAW="$PASTA/export/.raw-slide-${padded}.png"
  "$CH" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --virtual-time-budget=12000 --window-size=${W},$((H+PAD)) \
    --screenshot="$RAW" \
    "http://localhost:$PORT/index.html?solo=${id}" >/dev/null 2>&1
  python3 -c "
from PIL import Image
im = Image.open('$RAW')
im.crop((0,0,$W,$H)).save('$PASTA/export/slide-${padded}.png')
"
  rm -f "$RAW"
  echo "  slide-${padded}.png"
done

echo "Pronto: $PASTA/export/"
echo "Confira as imagens (não só o CSS) antes de entregar — texto pode estourar borda ou quebrar em 2 linhas de um jeito que só aparece na foto renderizada."
