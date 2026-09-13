#!/bin/bash
# Apaga log de sessão antigo, e SÓ depois de confirmar que ele está no GitHub.
# Roda sozinho pelo hook de fim de conversa, no máximo uma vez a cada 14 dias.
# Decidido pela Mallu em 13/09/2026.
cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/..}" || exit 0

DIAS_ENTRE_LIMPEZAS=14
DIAS_QUE_FICAM=14
CARIMBO=".claude/.ultima-limpeza-sessoes"

# 1) já limpou faz pouco tempo? sai sem fazer nada
if [ -f "$CARIMBO" ]; then
  ULTIMA=$(cat "$CARIMBO" 2>/dev/null || echo 0)
  AGORA=$(date +%s)
  [ $(( (AGORA - ULTIMA) / 86400 )) -lt $DIAS_ENTRE_LIMPEZAS ] && exit 0
fi

[ -d sessoes ] || exit 0

# 2) trava de segurança: nada é apagado se não estiver no GitHub
git fetch -q origin main 2>/dev/null || { echo "limpa-sessoes: sem acesso ao GitHub, nada apagado"; exit 0; }
if [ -n "$(git log --oneline origin/main..HEAD 2>/dev/null)" ]; then
  echo "limpa-sessoes: existe commit que ainda não foi pro GitHub. Nada apagado."
  exit 0
fi
if [ -n "$(git status --porcelain sessoes/ 2>/dev/null)" ]; then
  echo "limpa-sessoes: há sessão não commitada. Nada apagado."
  exit 0
fi

# 3) apaga o que é mais velho que a janela, um arquivo por vez, só se estiver versionado
APAGADOS=0
for f in sessoes/sessao-*.md; do
  [ -e "$f" ] || continue
  DATA=$(basename "$f" .md | sed 's/sessao-//')
  SEG=$(date -j -f "%Y-%m-%d" "$DATA" +%s 2>/dev/null) || continue
  IDADE=$(( ( $(date +%s) - SEG ) / 86400 ))
  [ "$IDADE" -le "$DIAS_QUE_FICAM" ] && continue
  git ls-files --error-unmatch "$f" >/dev/null 2>&1 || continue
  git rm -q "$f" && APAGADOS=$((APAGADOS+1))
done

date +%s > "$CARIMBO"

if [ "$APAGADOS" -gt 0 ]; then
  git commit -q -m "auto: limpeza quinzenal, $APAGADOS logs de sessão já salvos no GitHub" \
    -m "Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>" && git push -q
  echo "limpa-sessoes: $APAGADOS arquivos apagados, tudo já estava no GitHub."
fi
exit 0
