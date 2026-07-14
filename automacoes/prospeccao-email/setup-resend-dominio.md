# Fase A: conta Resend e autenticação do domínio

> Passo a passo para deixar o envio de e-mail pronto. Nenhum e-mail de prospecção sai antes
> de tudo aqui ficar verde. É a fundação da Frente 5.

## O que é cada coisa (em uma linha)

- **Resend:** o serviço que envia os e-mails a partir de `relacionamento@paaps.com.br`.
- **SPF, DKIM, DMARC:** três selos que você cola no painel do domínio para o Gmail confiar
  que o e-mail é mesmo da PAAPS. Sem eles, e-mail bom cai no spam.

## Divisão de trabalho

- **Só a Mallu faz:** criar a conta Resend e colar os registros no painel do domínio (exige
  login nessas contas).
- **O Claude faz:** preparar o repositório, guiar cada clique e, depois, montar o fluxo de
  envio no n8n.

---

## Passo 1: criar a conta no Resend

1. Entre em `https://resend.com` e clique em **Sign up**.
2. Crie a conta com o e-mail da PAAPS.
3. O plano gratuito basta por enquanto: envia até 100 e-mails por dia, que cobre a meta de
   100 por semana com folga.

## Passo 2: adicionar o domínio

1. No Resend, vá em **Domains** e clique em **Add Domain**.
2. Digite `paaps.com.br` e confirme.
3. O Resend vai mostrar uma lista de **registros DNS** (uns 3 a 4): um de SPF, um ou dois de
   DKIM e um de DMARC. Cada um tem três campos: **Type** (tipo), **Name/Host** (nome) e
   **Value** (valor).

## Passo 3: colar os registros no painel do domínio (DNS na Cloudflare)

O DNS do `paaps.com.br` está na **Cloudflare** (nameservers `nena` e `derek` .ns.cloudflare.com).
Hoje o domínio não tem SPF nem DMARC, então começamos do zero, sem risco de conflito.

Há dois caminhos:

- **Caminho automático (recomendado):** na tela do domínio no Resend, clique em
  **Connect to Cloudflare** (ou "Add records automatically"), autorize com o login da
  Cloudflare, e o Resend cria os registros sozinho.
- **Caminho manual:** entre em `dash.cloudflare.com` > domínio `paaps.com.br` > **DNS** >
  **Add record**. Para cada registro que o Resend mostrou, copie **Type**, **Name** e
  **Value** exatamente. Deixe o Proxy como **DNS only** (nuvem cinza), nunca laranja, para
  registros de e-mail.

> Cuidado comum na Cloudflare: no campo **Name**, se o Resend pede algo como
> `resend._domainkey`, digite só isso; a Cloudflare completa o `paaps.com.br` sozinha. Se
> você digitar o nome inteiro, vira duplicado e não valida.

## Passo 4: verificar

1. Volte ao Resend, na página do domínio, e clique em **Verify**.
2. Pode levar de alguns minutos até algumas horas para o DNS propagar.
3. Quando os três selos ficarem **verdes**, o domínio está autenticado.

## Passo 5: gerar a chave e guardar

1. No Resend, vá em **API Keys** e clique em **Create API Key**.
2. Copie a chave (começa com `re_`).
3. Cole no arquivo `automacoes/.env` (nunca no `.env.example`), na linha
   `RESEND_API_KEY=`. O `.env` fica só no computador e não sobe para o GitHub.

---

## Passo 6: receber as respostas (caixa de entrada do remetente)

Hoje o `paaps.com.br` não recebe e-mail (sem registro MX). Enviar pelo Resend não depende
disso, mas as **respostas dos leads precisam cair numa caixa que a Mallu leia**, senão o
retorno se perde e o CRM não registra quem respondeu.

Opção recomendada, gratuita e simples, já que o DNS está na Cloudflare:

- **Cloudflare Email Routing:** em `dash.cloudflare.com` > `paaps.com.br` > **Email** >
  **Email Routing**, crie o endereço `relacionamento@paaps.com.br` e aponte para
  **paapsdiretoria@gmail.com** (Gmail que a Mallu abre todo dia). A Cloudflare adiciona os
  registros MX sozinha. Assim: o Resend **envia**, a Cloudflare **recebe** e encaminha as
  respostas para o Gmail dela.

Alternativas, se um dia quiser caixa própria com envio manual também: Zoho Mail (tem plano
gratuito) ou Google Workspace (pago).

---

## O que ainda falta decidir aqui

- Respostas de `relacionamento@paaps.com.br` vão para **paapsdiretoria@gmail.com** (definido).
- Confirmar `relacionamento@paaps.com.br` como remetente verificado no Resend.

## Status

Em andamento. Repositório preparado (`RESEND_API_KEY` no `.env.example`); DNS identificado
(Cloudflare, sem SPF/DMARC/MX hoje). Próximo movimento: Mallu cria a conta Resend, conecta à
Cloudflare e liga o Email Routing para receber as respostas.
