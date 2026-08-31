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

CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CH" ] || { echo "Chrome nao encontrado em $CH"; exit 1; }
[ -f "$PASTA/index.html" ] || { echo "Nao achei $PASTA/index.html"; exit 1; }

PORT=$(python3 -c "import socket;s=socket.socket();s.bind(('',0));print(s.getsockname()[1]);s.close()")
( cd "$PASTA" && python3 -m http.server "$PORT" >/dev/null 2>&1 ) &
SRV=$!
trap 'kill $SRV 2>/dev/null; wait $SRV 2>/dev/null' EXIT
sleep 1

mkdir -p "$PASTA/export"
echo "Fotografando ${#IDS[@]} slide(s) de $PASTA em 1080x1350..."
for id in "${IDS[@]}"; do
  padded=$(printf "%02d" "$id" 2>/dev/null || echo "$id")
  "$CH" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --virtual-time-budget=12000 --window-size=1080,1350 \
    --screenshot="$PASTA/export/slide-${padded}.png" \
    "http://localhost:$PORT/index.html?solo=${id}" >/dev/null 2>&1
  echo "  slide-${padded}.png"
done

echo "Pronto: $PASTA/export/"
echo "Confira as imagens (não só o CSS) antes de entregar — texto pode estourar borda ou quebrar em 2 linhas de um jeito que só aparece na foto renderizada."
