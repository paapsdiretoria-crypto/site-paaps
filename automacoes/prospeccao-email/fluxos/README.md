# Fluxos n8n

> Rascunho de trabalho, a co-construir com a fundadora.

Esta pasta guarda os fluxos do n8n que orquestram o pipeline semanal de prospecção fria,
exportados como arquivos JSON e commitados aqui. Cada fluxo é a receita da automação, não
os dados das pessoas.

## O pipeline que estes fluxos executam

1. Início segunda-feira 8h.
2. Captura de organizações com base no ICP, até fechar a meta da semana (15, ver `../cadencia.md`).
3. Escolha do molde e da estratégia de personalização.
4. Pesquisa individual de cada lead pelo Claude Code, com nota 0 a 100.
5. Montagem estética do e-mail personalizado.
6. Gate de aprovação da Mallu: nenhum e-mail segue sem ela ver (ver `../regras-prospeccao.md`).
7. Envio dos e-mails aprovados ao longo do dia (ver `../cadencia.md`).
8. Retorno de eventos (entregue, aberto, respondido) para o CRM (ver `../metricas.md`).

> Divisão de trabalho: o Claude Code faz os passos 3 a 5 (personalização, em sessão), a
> Mallu faz o passo 6 (aprovação) e o n8n faz os passos 2, 7 e 8 (captura, disparo via
> Resend e retorno de eventos). O Claude Code entrega os e-mails; a Mallu aprova; o n8n
> dispara só os aprovados e devolve os eventos ao CRM.

## Regra de segredos (obrigatória antes de commitar)

- Nenhuma credencial no JSON. O n8n separa credenciais do fluxo por padrão; a conferência
  antes do commit é obrigatória.
- Nenhum dado pessoal embutido: listas de leads, e-mails de servidores e respostas ficam
  no CRM e em planilha privada, nunca no JSON.
- Chave de API da ferramenta de disparo (Resend provável) vive só no `.env` local.

## Convenção

- Um arquivo JSON por fluxo, com nome descritivo (ex.: `captura-semanal.json`,
  `envio-resend.json`, `retorno-eventos.json`). A personalização (passos 3 a 5) é feita
  pelo Claude Code em sessão, fora do n8n, então não vira arquivo de fluxo.
- Ao exportar, conferir o JSON e mascarar qualquer valor sensível remanescente como
  `[removido]`.

Status: a construir. Os JSON entram aqui quando os fluxos forem montados no n8n.
