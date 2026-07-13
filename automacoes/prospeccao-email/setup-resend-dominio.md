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

## Passo 3: colar os registros no painel do domínio

Aqui é onde você entra no painel de quem administra o DNS do `paaps.com.br` (o registrador
ou serviço de DNS). Para cada registro que o Resend mostrou:

1. Crie um novo registro no painel do domínio.
2. Copie **Type**, **Name/Host** e **Value** exatamente como o Resend mostra.
3. Salve.

> Cuidado comum: alguns painéis já acrescentam o `paaps.com.br` no fim do nome sozinhos. Se
> o registro não validar, é quase sempre isso: nome duplicado ou um espaço a mais.

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

## O que ainda falta decidir aqui

- Onde o DNS do `paaps.com.br` é administrado (registrador ou serviço de DNS), para o Passo 3
  ficar exato.
- Confirmar `relacionamento@paaps.com.br` como remetente verificado no Resend.

## Status

Em andamento. Repositório preparado (`RESEND_API_KEY` no `.env.example`). Próximo movimento:
Mallu cria a conta e informa o administrador de DNS do domínio.
