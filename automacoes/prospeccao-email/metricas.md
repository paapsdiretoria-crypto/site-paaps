# Métricas de controle

> Rascunho de trabalho, a co-construir com a fundadora. Define o que o dashboard de
> controle da prospecção fria vai acompanhar e de onde cada número vem.

## Métricas do funil

| Métrica | O que mede | Leitura |
|---|---|---|
| Enviados | E-mails que saíram no ciclo | Base do funil (meta: 100/semana) |
| Entregues | Chegaram na caixa (não bounce) | Saúde de entrega e reputação do domínio |
| Abertos | Foram abertos pelo destinatário | Interesse inicial e qualidade do assunto |
| Respondidos | Geraram resposta humana | Sinal real de conversa iniciada |
| Reuniões marcadas | Viraram agenda com a PAAPS | Conversão que importa para o negócio |
| Descadastros | Pediram remoção | Sinal de ajuste de ICP ou de tom |

Taxas derivadas (entrega, abertura, resposta, reunião por enviado) e a relação com a nota
de personalização do Claude Code entram na segunda rodada de definição.

## De onde vêm os dados

Fluxo proposto:

`webhooks da ferramenta de disparo (Resend provável) -> n8n -> CRM Notion (base Leads)`

- A ferramenta de disparo emite eventos (entregue, aberto, respondido, bounce,
  descadastro) via webhook.
- O n8n recebe o webhook, trata o evento e atualiza o registro do lead no CRM do Notion,
  que é a fonte única da verdade.
- O dashboard de controle lê do CRM, não da ferramenta de disparo, para manter uma única
  fonte.

## Cuidado com dados

O dashboard trabalha com números agregados. Dado pessoal de lead (nome, e-mail) fica no
CRM e em planilha privada, nunca em arquivo commitado nem em log de sessão.

## Pendências a co-construir

- Confirmar a ferramenta de disparo e o conjunto exato de eventos de webhook disponíveis.
- Definir metas por métrica e o período de leitura (semanal, mensal).
- Desenhar a visão do dashboard (onde vive, quem acessa).
