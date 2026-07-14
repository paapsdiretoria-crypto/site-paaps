# CLAUDE.md - Agente de WhatsApp da PAAPS

Frente do ecossistema PAAPS: assistente de primeiro contato no WhatsApp.
Baseado no starter `dandgsf/agno-whatsapp-starter` (Agno + AgentOS), adaptado
para a voz e as regras da PAAPS.

## O que este agente faz

Acolhe quem chega no WhatsApp da PAAPS, situa o que a PAAPS faz, responde
duvidas de gestores publicos, RH e psicologas de rede, e encaminha interesse
real para o time humano. Ele e a porta de entrada, nao o fechamento de
contrato. Entende texto, imagem, documento e audio (transcrito antes de
responder).

## Onde mexer

- **Persona e regras de voz:** `agents/prompts.py`. E o coracao. Reflete a voz
  PAAPS, os projetos, as proibicoes ativas e o cuidado com saude mental. Ao
  alterar, manter alinhado com `insumos-compartilhados/nucleo-comum/voz-paaps.md`.
- **O agente em si (modelo, memoria, hooks):** `agents/agente_paaps.py`.
- **Seguranca (anti prompt-injection e fragmentacao):** `agents/guardrails/`.
- **Mensagens que chegam (audio/imagem/doc):** `agents/hooks/media.py`.
- **Ligar/desligar o canal WhatsApp:** `app/interfaces.py` + variaveis no `.env`.

## Proibicoes ativas (herdadas do CLAUDE.md raiz)

Valem para o prompt do agente e para qualquer resposta dele: sem travessao
grande, sem "nao e X, e Y", sem linguagem coachesca, sem metafora de guerra,
sem promessa de resultado, sem numero sem fonte, olhar sempre estrutural e
sistemico. Nunca escrever segredo real em arquivo commitado: chaves so no
`.env` (ignorado pelo git).

## Stack

Agno + AgentOS (Python), OpenAI (gpt-5-mini) para texto/visao e transcricao de
audio, Postgres com pgvector, WhatsApp Business API da Meta. Local via Docker
Compose + NGrok; producao na Railway. Passo a passo completo no `README.md`.
