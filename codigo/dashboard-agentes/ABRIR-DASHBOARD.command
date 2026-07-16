#!/bin/bash
# Duplo clique neste arquivo abre a Constelação PAAPS no navegador.
#
# Ele sobe o servidor-ponte (só na sua máquina, ninguém de fora acessa). O
# servidor serve o dashboard E executa os agentes de verdade, SE existir uma
# chave de API em ponte/.env. Sem a chave, o dashboard abre igual, em simulação.
#
# Para fechar: feche esta janela do Terminal.

cd "$(dirname "$0")/ponte" || exit 1

PORTA=8777

# Instala as dependências na primeira vez (precisa de internet só nessa vez).
if [ ! -d node_modules ]; then
  echo "  Primeira execução: instalando dependências..."
  npm install --silent || { echo "  Falha no npm install. Verifique a internet."; exit 1; }
fi

# Deriva o .env do exemplo, se ainda não existe, para você ter onde colar a chave.
if [ ! -f .env ]; then
  cp .env.example .env
  echo "  Criei ponte/.env. Para execução real, cole sua chave de API nele."
fi

# Se a porta já estiver ocupada por uma sessão anterior, derruba a antiga.
lsof -ti tcp:$PORTA | xargs kill -9 2>/dev/null

echo ""
echo "  CONSTELAÇÃO PAAPS"
echo "  Abrindo http://localhost:$PORTA"
echo ""

sleep 1 && open "http://localhost:$PORTA/index.html" &

node servidor.mjs
