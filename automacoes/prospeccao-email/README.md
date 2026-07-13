# Frente 5: Prospecção fria por e-mail

E-mails personalizados para prefeituras do Brasil inteiro.

## O que precisa existir aqui

- `moldes/` : os moldes de e-mail com lacunas, tipo `{cidade}`,
  `{nome_da_secretaria}`, `{nome_do_gestor}`.
- `fluxos/` : o JSON do n8n que preenche as lacunas e envia.
- `cadencia.md` : quantos e-mails por dia, intervalo entre eles, quando parar a
  sequência, texto de descadastro.

## Onde ficam os dados

A lista de prefeituras com nomes e e-mails de servidores é dado pessoal sob LGPD: fica em
planilha privada, nunca no repositório. O repo guarda só os moldes e os fluxos.

## Cuidados grandes

1. **Domínio.** E-mail em massa sem preparo cai em spam e queima o domínio da PAAPS.
   Antes do primeiro envio, o domínio precisa de autenticação: SPF, DKIM e DMARC (três
   selos técnicos que provam ao Gmail que o e-mail é seu mesmo, configurados uma vez no
   painel do domínio). O volume cresce devagar, e todo envio leva link de descadastro.
2. **Domínio irmão.** O ideal é enviar por um subdomínio ou domínio irmão, para que, se
   algo der errado, o e-mail principal da PAAPS não seja punido junto.

## Decisão pendente

Ferramenta de disparo (Gmail atual, serviço de envio dedicado) e qual domínio ou
subdomínio usar. Envolve custo mensal e marca.

Status: a construir.
