# Fluxos n8n

> Rascunho de trabalho, a co-construir com a fundadora.

Esta pasta guarda os fluxos do n8n que orquestram o pipeline semanal de prospecção fria,
exportados como arquivos JSON e commitados aqui. Cada fluxo é a receita da automação, não
os dados das pessoas.

## O pipeline que estes fluxos executam

1. Início segunda-feira 8h.
2. Captura de 100 organizações com base no ICP.
3. Escolha do molde e da estratégia de personalização.
4. Pesquisa individual de cada lead pelo Hermes, com nota 0 a 100.
5. Montagem estética do e-mail personalizado.
6. Envio dos 100 e-mails ao longo do dia (ver `../cadencia.md`).
7. Retorno de eventos (entregue, aberto, respondido) para o CRM (ver `../metricas.md`).

## Regra de segredos (obrigatória antes de commitar)

- Nenhuma credencial no JSON. O n8n separa credenciais do fluxo por padrão; a conferência
  antes do commit é obrigatória.
- Nenhum dado pessoal embutido: listas de leads, e-mails de servidores e respostas ficam
  no CRM e em planilha privada, nunca no JSON.
- Chave de API da ferramenta de disparo (Resend provável) e do Hermes vivem só no `.env`
  local.

## Convenção

- Um arquivo JSON por fluxo, com nome descritivo (ex.: `captura-semanal.json`,
  `personalizacao-hermes.json`, `envio-resend.json`).
- Ao exportar, conferir o JSON e mascarar qualquer valor sensível remanescente como
  `[removido]`.

Status: a construir. Os JSON entram aqui quando os fluxos forem montados no n8n.
