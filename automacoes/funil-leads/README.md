# Frente 4: Funil de leads

Formulário de pesquisa no site para captar leads, ligado ao funil de captação. Sugestão
de começar por esta frente: é a mais simples e destrava as frentes 1 e 5.

## O que precisa existir

- No site (`site/paaps-site/`): o HTML do formulário de pesquisa. Hoje a página de
  contato só tem links de WhatsApp; o formulário ainda vai ser construído.
- Aqui em `funil-leads/`:
  - `fluxos/` : o JSON do n8n que recebe cada resposta do formulário e grava no destino
    escolhido (planilha Google, Notion ou CRM).
  - `mapa-do-funil.md` : o que acontece depois que o lead chega (mensagem de boas-vindas,
    encaminhamento, etiqueta).

## Cuidado principal (absoluto)

As RESPOSTAS do formulário (nomes, e-mails, cidades) nunca, em hipótese alguma, entram no
repositório. Elas vivem no CRM ou na planilha privada. O repo guarda o formulário vazio,
jamais o formulário respondido.

O formulário precisa de um texto de consentimento (LGPD): a pessoa autoriza o uso dos
dados dela antes de enviar.

## Decisão pendente

Onde os leads moram: planilha Google, Notion ou CRM. O fluxo se adapta a qualquer um; a
escolha define a rotina de quem for atender esses leads.

Status: a construir.
