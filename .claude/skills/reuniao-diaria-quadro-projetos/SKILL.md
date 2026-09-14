---
name: reuniao-diaria-quadro-projetos
description: Use todos os dias às 8h, acionada pela automação agendada, para ler o Quadro de Projetos (Notion) e conduzir a reunião diária com a Mallu. Ative também em "roda a reunião do quadro", "faz o standup de hoje", "o que eu preciso te mandar hoje". Não use para registrar uma pendência nova (isso é `tarefa-avulsa-quadro-projetos`), nem para virar material em nota do Segundo Cérebro (isso é `adiciona-ao-cerebro`).
---

# Reunião diária do Quadro de Projetos

## O que causou esta skill (RED)

Sem ela, o comportamento observado nesta própria sessão foi: ler o Quadro de Projetos,
propor avançar sozinho numa lista de tarefas ("Faixa 1") sem antes perguntar o que a
Mallu tinha pra trazer no dia, e planejar criar uma nota nova no Segundo Cérebro pra
cada fonte processada, sem nenhum critério de quando isso vale a pena. Ela cortou os
dois pontos na hora: "não crie nota pro segundo cérebro sem critério" e "você não deve
seguir pela faixa 1". A skill existe pra esses dois desvios nunca se repetirem sozinhos,
sem ela no comando.

## Lei central

**Nunca mexe no Status nem em qualquer outra propriedade do card no Notion.** A única
escrita permitida ali é um comentário de no máximo uma linha por tarefa: o que foi
feito, o que falta, e o que se precisa dela, podendo usar ✅ ou ❌. Nunca inventa
tarefa nem conteúdo: quando não há o que fazer sem ela, a reunião para.

## Gate explícito

Nenhuma tarefa é executada antes de classificada numa das três faixas abaixo. Tarefa
sem classificação não é tocada.

- **Autônoma**: o material pra fazer já existe (arquivo lido, fato verificado, fonte
  disponível), e fazer não depende de julgamento que só ela tem.
- **Decisão pontual**: dá pra avançar, mas falta uma escolha rápida dela (uma palavra,
  uma opção entre alternativas concretas).
- **Bloqueada**: só ela tem o material (uma história vivida, um acesso, uma aprovação
  de publicação, uma conta de terceiro).

## O ciclo, toda vez que a reunião roda

1. Lê a database inteira do Quadro Estratégico de Projetos (Tarefas avulsas, Fazendo,
   Radar). Compara com o snapshot da rodada anterior (`automacoes/quadro-projetos/
   snapshot-anterior.json`) pra achar o que ela mudou ou acrescentou desde ontem: a
   descrição do card é o canal de comunicação dela, então o que foi editado importa
   mais do que o que ficou parado.
2. Classifica cada tarefa ativa (`Fazendo`, `Tarefas avulsas`, `Estão no Radar`) nas
   três faixas.
3. **Primeira pergunta do dia, sempre**, via `AskUserQuestion`: pede a lista dela pro
   dia, o que ela tem pra mandar ou decidir. Pergunta aberta, sem alternativa forçada:
   é ela quem traz a pauta primeiro.
4. Escuta a resposta antes de seguir.
5. **Da segunda pergunta em diante**, a pauta parte sempre do Quadro de Projetos: o
   que falta dela, um item por vez, sempre com caminho concreto e alternativas prontas
   pra escolher, nunca uma pergunta aberta de novo. Se a tarefa precisa de uma sessão
   separada (ex.: ela aprovar e submeter um formulário pelo Chrome), a pergunta já
   propõe isso como opção.
6. Executa o que está na faixa autônoma e o que ela acabou de destravar na faixa de
   decisão pontual. Nunca executa o que está na faixa bloqueada.
7. Depois de executar (ou de tentar e não conseguir), escreve a linha de status no
   card: ✅ o que foi feito, ❌ o que não foi e por quê, ou o que ainda falta dela.
8. Atualiza `automacoes/quadro-projetos/progresso.md` (sobrescrito a cada rodada, não
   acumulado) e o snapshot da rodada.
9. Sem mais nada pra fazer sem ela: a reunião termina. Não se inventa tarefa pra
   preencher o horário.

## A régua de quando vira nota do Segundo Cérebro

Processar uma fonte (documento, gravação, export) **não gera nota automaticamente**.
Só vira nota quando o conteúdo em si é conhecimento reaproveitável depois, num setor
que já existe, com resumo específico que não duplica o que uma constituição já diz.
"Processei o arquivo X" nunca é motivo pra nota; "o arquivo X revela uma decisão, um
dado ou uma história que outra tarefa vai precisar buscar de novo" é.

## Onde vive o placar de progresso

Não no Segundo Cérebro: progresso de execução é operacional, não conhecimento da PAAPS
(mesma régua de `feedback_pendencia_nunca_no_segundo_cerebro`). Vive em
`automacoes/quadro-projetos/progresso.md`, reescrito inteiro a cada rodada, respondendo
por projeto: o que fechou essa semana, o que falta pra puder arrastar pra "Feito", o
que está travado nela. É visualização interna, não uma peça pra ninguém de fora ver.

## Tabela de racionalizações

| Pensamento | O que está acontecendo |
|---|---|
| "Já sei o que ela vai responder, vou adiantar" | Não. Espera a resposta antes de agir no que depende dela. |
| "É só uma nota pequena, não faz mal" | Nota sem critério é o crescimento descontrolado que ela pediu pra impedir. |
| "Vou marcar como Feito pra ela ver mais rápido" | Nunca mexe no Status. Só o comentário de uma linha. |
| "Não tenho nada bloqueado, vou inventar uma tarefa nova" | Parar é a resposta certa quando não há o que fazer sem ela. |
| "Ela não respondeu essa pergunta ainda, insisto nela" | Registra o que falta e segue pro resto da pauta; a reunião não trava numa pergunta só. |
| "Isso é rápido, já publico/envio direto" | Publicar, enviar mensagem real ou submeter formulário sempre passa pelo gate dela, mesmo dentro da faixa autônoma. |

## Onde essa reunião nunca decide sozinha

Aprovar ou publicar peça pública, enviar e-mail ou mensagem real a alguém, mexer em
configuração de conta (LinkedIn, site em produção, DNS), e qualquer contradição de
conteúdo achada no Segundo Cérebro: sobem pra ela na pauta, nunca se resolvem sozinhas.
