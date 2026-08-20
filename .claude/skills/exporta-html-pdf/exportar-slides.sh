#!/usr/bin/env bash
# Exporta peça HTML de slides para PDF fotografando tela a tela.
# Não usa @media print, então o PDF sai idêntico ao que se vê no navegador.
#
#   ./exportar-slides.sh <url-base> <n-telas> <arquivo-saida.pdf> [largura] [altura]
#
# Exemplo:
#   ./exportar-slides.sh "http://localhost:8099/pitch-serasa/index-v4.html" 16 pitch.pdf
#
# A peça precisa entender ?solo=N (uma tela por vez). Ver SKILL.md.

set -euo pipefail

URL="${1:?informe a url base}"
N="${2:?informe quantas telas}"
OUT="${3:?informe o arquivo .pdf de saida}"
W="${4:-1920}"
H="${5:-1080}"

CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CH" ] || { echo "Chrome nao encontrado em $CH"; exit 1; }

# Captura em alta para nitidez, mas a PÁGINA usa a largura padrão de slide
# (338,7 mm, a mesma do PowerPoint 16:9). A altura vem da proporção da captura,
# então a imagem nunca é cortada pelo object-fit.
MM_W=338.7
MM_H=$(python3 -c "print(round(338.7/($W/$H),2))")

TMP=".export-$$"
mkdir -p "$TMP"
trap 'rm -rf "$TMP"' EXIT

echo "Fotografando $N telas em ${W}x${H}..."
for i in $(seq 1 "$N"); do
  sep="?"; case "$URL" in *\?*) sep="&";; esac
  "$CH" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --virtual-time-budget=12000 --window-size="$W,$H" \
    --screenshot="$TMP/p$(printf %03d "$i").png" \
    "${URL}${sep}solo=$i" >/dev/null 2>&1
  printf "  %d/%d\r" "$i" "$N"
done
echo

echo "Convertendo para JPEG..."
( cd "$TMP" && for f in p*.png; do
    sips -s format jpeg -s formatOptions 88 "$f" --out "${f%.png}.jpg" >/dev/null
  done && rm -f p*.png )

echo "Montando o PDF..."
{
  echo '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>'
  echo "@page{size:${MM_W}mm ${MM_H}mm;margin:0}"
  echo '*{margin:0;padding:0}html,body{background:#251305}'
  echo ".pg{width:${MM_W}mm;height:${MM_H}mm;page-break-after:always;overflow:hidden}"
  echo '.pg:last-child{page-break-after:auto}'
  echo ".pg img{width:${MM_W}mm;height:${MM_H}mm;object-fit:cover;display:block}"
  echo '</style></head><body>'
  for f in "$TMP"/p*.jpg; do echo "<div class=\"pg\"><img src=\"$(basename "$f")\"></div>"; done
  echo '</body></html>'
} > "$TMP/montagem.html"

# O Chrome precisa servir por HTTP para achar as imagens relativas.
PORT=$(python3 -c "import socket;s=socket.socket();s.bind(('',0));print(s.getsockname()[1]);s.close()")
( cd "$TMP" && python3 -m http.server "$PORT" >/dev/null 2>&1 ) &
SRV=$!
trap 'kill $SRV 2>/dev/null; wait $SRV 2>/dev/null; rm -rf "$TMP"' EXIT
sleep 2

"$CH" --headless=new --disable-gpu --no-sandbox --virtual-time-budget=25000 \
  --run-all-compositor-stages-before-draw --no-pdf-header-footer \
  --print-to-pdf="$OUT" "http://localhost:$PORT/montagem.html" >/dev/null 2>&1

python3 - "$OUT" <<'PY'
import re,io,sys
d=io.open(sys.argv[1],'rb').read()
mb=[float(x) for x in re.search(rb'/MediaBox\s*\[([^\]]+)\]',d).group(1).split()]
print('paginas :',len(re.findall(rb'/Type\s*/Page[^s]',d)))
print('pagina  :',round(mb[2]/72*25.4,1),'x',round(mb[3]/72*25.4,1),'mm | proporcao',round(mb[2]/mb[3],3))
print('tamanho :',round(len(d)/1048576,1),'MB')
PY
echo "Pronto: $OUT"
echo "ABRA O ARQUIVO. Conferencia por numero nao pega foto faltando nem texto cortado."
