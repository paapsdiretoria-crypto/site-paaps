#!/bin/bash
# Duplo clique neste arquivo abre a Constelação PAAPS no navegador.
# Ele sobe um servidor local (só na sua máquina, ninguém de fora acessa)
# porque o dashboard usa módulos JavaScript, que não funcionam abrindo
# o index.html direto pelo Finder.
#
# Para fechar: feche esta janela do Terminal.

cd "$(dirname "$0")" || exit 1

PORTA=8777

# Se a porta já estiver ocupada por uma sessão anterior, derruba a antiga.
lsof -ti tcp:$PORTA | xargs kill -9 2>/dev/null

echo ""
echo "  CONSTELAÇÃO PAAPS · Controle dos Agentes"
echo "  Servidor local em http://localhost:$PORTA"
echo "  Para encerrar: feche esta janela."
echo ""

sleep 1 && open "http://localhost:$PORTA/index.html" &

python3 -m http.server $PORTA
