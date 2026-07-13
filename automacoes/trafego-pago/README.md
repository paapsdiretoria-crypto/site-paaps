# Frente 1: Tráfego pago

Campanhas automatizadas em LinkedIn Ads, Google Ads e Meta Ads (Facebook + Instagram
saem juntos pelo gerenciador da Meta). YouTube Ads fica para o futuro.

## O que precisa existir aqui

- `fluxos/` : os JSONs dos fluxos do n8n, um arquivo por fluxo. Exemplos de fluxo:
  criar campanha, pausar campanha com desempenho ruim, relatório semanal de gasto.
- `regras-de-verba.md` : documento em português com limite diário de gasto, quem
  aprova cada campanha, e quando pausar automaticamente.

## Onde ficam as chaves

Só no `.env` (ver `automacoes/.env.example`) e dentro do cofre de credenciais do próprio
n8n. Nunca no repositório.

## Cuidado principal

Esta é a frente onde uma chave vazada vira prejuízo em dinheiro no mesmo dia. Toda
mudança em campanha que já esteja gastando verba deve passar por um rascunho (branch)
antes de valer na conta real.

## Atalho possível

O Windsor AI, já usado no dashboard, tem escrita em Meta, Google e LinkedIn Ads. Parte
desta frente talvez não precise de ferramenta nova; avaliar antes de montar do zero.

Status: a construir.
