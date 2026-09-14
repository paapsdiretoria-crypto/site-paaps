#!/bin/bash
# Guarda do contrato de caminhos do Segundo Cérebro.
# Regra: agente, skill, hook e CLAUDE.md citam CAPA, nunca nota.
# Documentação: "Segundo Cérebro/Mapa/Contrato de caminhos.md"
cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/..}" || exit 1
V="Segundo Cérebro"
falhas=0

# 1) ninguém pode citar a estrutura antiga
antigos=$(grep -rl "Conhecimento/" --include="*.md" --include="*.json" .claude CLAUDE.md */CLAUDE.md 2>/dev/null)
if [ -n "$antigos" ]; then
  echo "ERRO: ainda citam a pasta antiga Conhecimento/:"; echo "$antigos" | sed 's/^/   /'
  falhas=1
fi

# 2) fora do cofre, só capa pode ser citada
capas=$(printf '%s\n' "$V/Mapa/Índice.md" "$V/Mapa/Visão Geral.md" "$V/Mapa/Log.md" \
  "$V/Mapa/Legenda de cores.md" "$V/Mapa/O que falta.md" "$V/Mapa/Contrato de caminhos.md" \
  "$V/Mapa/mapa-do-ecossistema.md" "$V/Voz/Voz.md" "$V/Conceitos/Conceitos.md" \
  "$V/Método/Método.md" "$V/Entidades/Entidades.md" "$V/Histórias/Histórias.md" \
  "$V/Fontes/Fontes.md" "$V/Ideias/Ideias.md" "$V/Projetos/Projetos.md")
while read -r p; do
  [ -z "$p" ] && continue
  # capa de projeto: Projetos/<x>/<x>.md é sempre válida
  base=$(basename "$p" .md); dir=$(basename "$(dirname "$p")")
  [ "$base" = "$dir" ] && continue
  echo "$capas" | grep -qxF "$p" && continue
  echo "ERRO: caminho de NOTA citado fora do cofre: $p"
  falhas=1
done < <(grep -rho "$V/[A-Za-zÀ-ÿ0-9._/ -]*\.md" --include="*.md" --include="*.json" .claude CLAUDE.md */CLAUDE.md 2>/dev/null | sed 's/[.,;:)`]*$//' | sort -u)

# 3) todo caminho citado tem que existir
while read -r p; do
  [ -z "$p" ] && continue
  [ -e "$p" ] || { echo "ERRO: caminho citado não existe: $p"; falhas=1; }
done < <(grep -rho "$V/[A-Za-zÀ-ÿ0-9._/ -]*\.md" --include="*.md" --include="*.json" .claude CLAUDE.md */CLAUDE.md 2>/dev/null | sed 's/[.,;:)`]*$//' | sort -u)

# 4) toda capa de setor tem que declarar o caminho da pasta
for s in Voz Conceitos Entidades Método Fontes Histórias Ideias Projetos; do
  f="$V/$s/$s.md"
  [ -f "$f" ] || { echo "ERRO: setor $s está sem capa"; falhas=1; continue; }
  grep -q "Caminho desta pasta" "$f" || { echo "ERRO: capa de $s não declara o caminho da pasta"; falhas=1; }
done

[ $falhas -eq 0 ] && echo "OK: contrato de caminhos respeitado." 
exit $falhas
