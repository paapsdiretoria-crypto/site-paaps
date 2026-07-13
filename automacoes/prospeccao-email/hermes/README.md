# Hermes: o personalizador

> Rascunho de trabalho, a co-construir com a fundadora.

O Hermes Agent (Nous Research) é o cérebro de personalização da prospecção fria. Para cada
lead capturado que passa no ICP, o Hermes pesquisa a organização, pontua a profundidade da
personalização possível (0 a 100) e preenche as lacunas do molde com um gancho local
honesto e verificável, no tom de voz da PAAPS.

## Papel no pipeline

1. Recebe o lead vindo da captura semanal (segunda 8h), já filtrado pelo ICP.
2. Faz a pesquisa individual da organização (fato local, edital, dado público).
3. Aplica a rubrica 0 a 100 e registra a nota no CRM.
4. Gera o texto personalizado a partir do molde-âncora (Carta-Mallu) ou do molde escolhido.
5. Devolve o e-mail montado para o fluxo n8n disparar.

## Melhoria contínua

O Hermes não é estático: prompt e rubrica evoluem com o resultado real. E-mails que
geraram resposta e reunião realimentam o ajuste do prompt e dos pesos da rubrica. Cada
mudança relevante fica registrada com data e motivo, para não se perder o histórico do
que funcionou.

## Onde ficam as peças

| Arquivo | O que é |
|---|---|
| `prompt-personalizacao.md` | O prompt que o Hermes usa ao personalizar cada e-mail |
| `rubrica-score-0-100.md` | Como pontuar de 0 a 100 a profundidade da personalização |

## Cuidado com segredos

Chave de API e credencial do Hermes vivem só no `.env` local (ignorado pelo git). Nenhum
dado pessoal de lead entra em prompt versionado: aqui ficam a instrução e as regras, os
dados reais entram em tempo de execução, vindos do CRM.
