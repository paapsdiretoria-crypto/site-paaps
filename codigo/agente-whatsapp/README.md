# Agente de WhatsApp da PAAPS

Assistente de primeiro contato da PAAPS no WhatsApp. Ele acolhe quem chega,
explica o que a PAAPS faz, responde duvidas de gestores publicos, RH e
psicologas de rede, e encaminha quem tem interesse real para uma conversa com o
time humano. Entende texto, imagem, documento e audio (o audio e transcrito
antes de o agente responder).

Feito em cima do starter `dandgsf/agno-whatsapp-starter` (Agno + AgentOS),
adaptado para a voz e as regras da PAAPS.

> Este projeto tem partes tecnicas. Voce nao precisa saber programar para
> coloca-lo no ar: e so seguir os passos abaixo na ordem, copiando e colando os
> comandos. Onde precisar de uma decisao sua, esta escrito em negrito.

---

## O que voce vai precisar

1. Uma conta na **OpenAI** com credito e uma chave de API.
   Link: https://platform.openai.com/api-keys
2. Uma conta na **Meta for Developers** com um App de WhatsApp.
   Link: https://developers.facebook.com
3. Para rodar no seu computador (opcional, so para testar): o **Docker Desktop**
   instalado. Link: https://www.docker.com/products/docker-desktop
4. Para colocar no ar de verdade: uma conta na **Railway**.
   Link: https://railway.app

---

## Como funciona por dentro (visao rapida)

- **Agno** e o framework que monta o agente (modelo, instrucoes, memoria,
  seguranca).
- **AgentOS** e a camada que serve o agente: expoe uma API, uma tela de teste e
  o webhook do WhatsApp.
- O **WhatsApp da Meta** manda cada mensagem recebida para o nosso webhook. O
  agente le, pensa e responde. Audio e transcrito antes.
- O **Postgres com pgvector** guarda historico e memoria das conversas.

A persona do agente (o jeito de falar da PAAPS) fica em
`agents/prompts.py`. E o arquivo mais importante para ajustar o tom.

---

## Caminho A - Testar no seu computador

Serve para ver o agente conversando antes de conectar o WhatsApp de verdade.

### 1. Preparar o arquivo de segredos

Na pasta do projeto, copie o modelo de configuracao:

```bash
cp .env.example .env
```

Abra o arquivo `.env` num editor de texto e preencha ao menos:

```
OPENAI_API_KEY=coloque-aqui-sua-chave-da-openai
```

Deixe `WHATSAPP_ENABLED=false` por enquanto. O restante ja vem pronto para o
modo local.

> O `.env` guarda seus segredos e nunca vai para o GitHub (ele esta na lista do
> `.gitignore`). Nunca cole chave real em outro arquivo.

### 2. Subir o agente

```bash
docker compose up -d --build
```

Espere aparecer que subiu. Isso liga dois servicos: o agente e o banco de dados.

### 3. Abrir a tela de teste

No navegador, acesse:

```
http://localhost:8000
```

Voce vai ver a interface do AgentOS com o agente **Assistente PAAPS**. Mande uma
mensagem como "O que e a PAAPS?" e veja a resposta. Da para testar imagem,
documento e audio por ali.

### 4. Desligar quando terminar

```bash
docker compose down
```

---

## Caminho B - Conectar o WhatsApp de verdade (teste local com NGrok)

O WhatsApp da Meta precisa de um endereco publico na internet para mandar as
mensagens. O NGrok cria um tunel do seu computador para a internet.

### 1. Abrir o tunel

Com o agente rodando (Caminho A), abra outro terminal e rode o NGrok apontando
para a porta 8000. Ele vai te dar um endereco parecido com
`https://algo-aleatorio.ngrok-free.app`. Guarde esse endereco.

### 2. Pegar as credenciais no Meta

Em https://developers.facebook.com, entre no seu App, va em **WhatsApp ->
API Setup** e pegue:

- **Access token** (use um token permanente de System User; o de 24h so serve
  para teste rapido)
- **Phone number ID**
- Em **App -> Configuracoes -> Basico**, o **App Secret**

Escolha tambem uma senha qualquer inventada por voce para ser o **Verify token**
(voce vai usar o mesmo valor nos dois lados).

### 3. Preencher o `.env`

No arquivo `.env`, mude para:

```
WHATSAPP_ENABLED=true
WHATSAPP_ACCESS_TOKEN=seu-access-token
WHATSAPP_PHONE_NUMBER_ID=seu-phone-number-id
WHATSAPP_VERIFY_TOKEN=a-senha-que-voce-inventou
WHATSAPP_APP_SECRET=seu-app-secret
```

Reinicie o agente para valer:

```bash
docker compose up -d --build
```

### 4. Cadastrar o webhook no Meta

Ainda no painel do WhatsApp no Meta, na parte de **Webhook / Configuration**:

- **Callback URL:** o endereco do NGrok mais `/whatsapp/webhook`.
  Exemplo: `https://algo-aleatorio.ngrok-free.app/whatsapp/webhook`
- **Verify token:** o mesmo valor que voce pos em `WHATSAPP_VERIFY_TOKEN`.
- Clique em verificar e salve. Depois, em **Webhook fields**, assine o campo
  `messages`.

Pronto: mande uma mensagem para o numero de teste do WhatsApp e o agente
responde.

---

## Caminho C - Colocar no ar de verdade (Railway)

Para o agente ficar online sem depender do seu computador.

1. Suba este projeto para um repositorio no GitHub (se ainda nao estiver).
2. Na Railway, crie um projeto novo a partir desse repositorio. Ela le o
   `railway.json` e o `Dockerfile` sozinha.
3. No mesmo projeto da Railway, adicione um banco **Postgres**.
4. No servico do agente, va em **Variables** e configure:
   - `OPENAI_API_KEY` com sua chave.
   - `DATABASE_URL` apontando para o Postgres da Railway, usando a reference
     variable: `${{Postgres.DATABASE_URL}}`.
   - As quatro variaveis de WhatsApp e `WHATSAPP_ENABLED=true`.
5. Gere um dominio publico para o servico (**Settings -> Networking -> Generate
   Domain**).
6. No Meta, aponte o webhook para
   `https://SEU-APP.up.railway.app/whatsapp/webhook`, com o mesmo Verify token.

A Railway checa a saude do agente pelo endereco `/health`.

---

## Ajustar o jeito de falar do agente

Abra `agents/prompts.py`. Tudo que esta ali dentro de `instructions` e a persona
da PAAPS: quem ela e, os projetos, o tom, as proibicoes e o cuidado com saude
mental. Edite o texto, salve e reinicie o agente. Mantenha alinhado com
`insumos-compartilhados/nucleo-comum/voz-paaps.md`.

As perguntas de atalho que aparecem na tela de teste ficam em `app/config.yaml`.

---

## Regras da casa (importante)

- **Nenhum segredo em arquivo commitado.** Chave de API, token e senha ficam so
  no `.env`, que nunca vai para o GitHub. Nunca cole dado pessoal de servidor ou
  de lead (CPF, e-mail) em codigo, log ou README.
- O agente **nao faz atendimento clinico**. Diante de sinal de crise, ele acolhe
  e orienta procurar apoio imediato (CVV 188, CAPS, ou 192 em caso de risco a
  vida).
- Toda resposta do agente segue as proibicoes ativas da PAAPS: sem travessao
  grande, sem "nao e X, e Y", sem linguagem coachesca, sem promessa de
  resultado, sem numero sem fonte, sempre com olhar estrutural e sistemico.

---

## Rodar os testes (opcional)

Com as dependencias instaladas:

```bash
pytest -q
```

Os testes checam a fragmentacao de mensagens longas para o WhatsApp.

---

## Referencias

- Starter de origem: https://github.com/dandgsf/agno-whatsapp-starter
- Documentacao Agno / AgentOS: https://docs.agno.com
- WhatsApp Business API (Meta): https://developers.facebook.com/docs/whatsapp
