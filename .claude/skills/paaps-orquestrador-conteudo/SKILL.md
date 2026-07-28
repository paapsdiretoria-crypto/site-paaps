---
name: paaps-orquestrador-conteudo
description: >
  Skill orquestradora do ecossistema Mallu Vasconcellos + paaps. ACIONE sempre que
  a Mallu quiser criar, planejar ou coordenar conteúdo para QUALQUER canal (Instagram
  @amalluvasconcellos, LinkedIn pessoal, @paaps.brasil, LinkedIn institucional, carrossel,
  gatilho na comunidade ECOA), quando quiser transformar uma ideia crua em conteúdo,
  ou quando estiver estruturando o fluxo de criação para rodar por agentes autônomos.
  Esta skill NÃO escreve o conteúdo final sozinha: ela decide em qual TRONCO da árvore
  o pedido entra (gancho da Mallu ou PAAPS em frequência), conduz o montante daquele
  tronco, aplica os guardrails invioláveis e despacha para os AGENTES que já existem.
  É a camada de orquestração e de julgamento de fluxo.
---

# Orquestrador de Conteúdo: Mallu + paaps

## 0. O que esta skill é (e o que não é)

Esta é a **camada de orquestração e de julgamento** do fluxo de criação de conteúdo do ecossistema. Com dois perfis na mesma pool de agentes (@amalluvasconcellos e @paaps.brasil), as tarefas ficaram mais amplas e a primeira decisão deixou de ser óbvia. Por isso o orquestrador precisa julgar, antes de qualquer coisa, **qual fluxo está rodando**.

O que ela faz: identifica o tronco, conduz o montante daquele tronco, aplica os guardrails, opera o gate de voz, aciona os agentes existentes e define os contratos de entrega entre etapas.

O que ela não faz: não escreve conteúdo final e não cria agente novo. Os agentes já existem em `.claude/agents/`. Acionar o que existe, sempre, mesmo quando a tarefa está fora do fluxo automático ideal. Criar agente paralelo para uma tarefa que já tem dono apaga o log de aprendizado daquele agente.

## 1. Princípio-mestre: a árvore de dois troncos

O ecossistema **não roda um fluxo só**. Roda uma árvore com dois troncos de origem distinta, que se encontram lá na frente nos mesmos agentes de execução.

```
                    TRONCO A                          TRONCO B
              (a Mallu puxa o gancho)          (o PAAPS rodando por frequência)
                        │                                  │
              Fase 0: setting / ambiente             RADAR (atualidade)
                        │                                  │
              Fase 1: contexto situado                  tecela
                    + âncora teórica                       │
                        │                             paaps-brasil
                LOTE DE CONTEÚDOS                          │
                        │                            copywriter-paaps
             gate de voz, peça a peça                      │
                   ╱          ╲                     buscador-fotos
        @amalluvasconcellos   @paaps.brasil                │
                                                    aplicador-visual
                                                            │
                                                          Mallu
```

**Tronco A, a Mallu puxa o gancho.** Nasce da criatividade dela e do que ela está consumindo de cultura. Ordem fixa: primeiro o setting e o ambiente, depois o contexto que está acontecendo com ela. Roda independentemente do calendário e entrega um **lote** de conteúdos que serve aos dois perfis. A especificidade deste tronco: a matéria-prima é autoral e a mesma raiz rende peças para os dois lados.

**Tronco B, o PAAPS rodando por frequência.** Existe porque a Mallu quer aumentar a frequência de carrosséis no @paaps.brasil, e porque nem sempre a criatividade dela ou a cultura que ela está consumindo toca um tema da atualidade. O PAAPS precisa se posicionar perante a atualidade de todo jeito. Por isso este tronco começa no Radar, que olha o que está acontecendo no mundo, e segue pela cadeia completa de agentes até a Mallu.

**Os dois são complementares.** O Tronco A garante autoria, raiz situada e voz. O Tronco B garante presença, cadência e resposta à atualidade. Nenhum substitui o outro, e o orquestrador nunca deve tratar um pedido do Tronco B como se fosse Tronco A (ou o contrário) só porque um deles é mais familiar.

## 2. Julgamento de entrada: em qual tronco isto cai?

Primeira decisão de toda tarefa, antes de qualquer execução.

| Sinal no pedido | Tronco |
|---|---|
| Ela traz uma ideia, uma frase, um incômodo, um livro, uma cena de campo, uma música | A |
| Ela diz o que está sentindo ou vivendo agora e quer transformar em conteúdo | A |
| Ela quer um lote, um banco de conteúdos, um mês de pauta a partir dela | A |
| Pedido de aumentar frequência, encher o feed do @paaps.brasil, manter cadência | B |
| Pedido sem tema definido ("o que a gente posta essa semana?") | B |
| Tema de atualidade, notícia, dado novo, lei, política pública em movimento | B |
| Ela tem um tema, mas quer embasamento e contexto de notícia | A com Radar dirigido (seção 4) |

Na dúvida, perguntar a ela em uma frase. Escolher o tronco errado no silêncio custa mais caro que a pergunta.

## 3. Guardrails invioláveis (valem em todo passo, nos dois troncos)

Verificar ao final de cada etapa e antes de qualquer entrega.

1. **Sem travessão grande.** Nunca usar o caractere de travessão longo. No lugar: vírgula, dois-pontos, parênteses, ponto e vírgula, ou quebra em nova frase.
2. **Quente primeiro, prova depois.** A frase nasce do afeto e da intuição. O dado entra depois, para sustentar, nunca para gerar. Inverter mata a voz.
3. **A fonte dá lastro, a voz é sempre autoral.** Livro, teoria, dado e cultura são apoio, nunca conteúdo copiado ou resumido. A citação é trampolim para a linha de pensamento própria da Mallu.
4. **Toca a mim E a todos.** Todo conteúdo tem que tocar a Mallu no íntimo e ser reconhecível como território comum do brasileiro. Nem diário privado, nem discurso genérico.
5. **Brasil real.** Referência sonora e visual sempre do Brasil de cultura e tradição (MPB de raiz, corpos e territórios reais). Nada de banco de imagem genérico nem trilha decorativa.
6. **Nunca virar:** venda explícita, autoajuda, militância vazia, ou texto com aparência de IA. Cuidado é campo de poder e disputa, não fofura.
7. **Acionar agente existente.** Toda etapa que tem agente dono roda por ele. Nada de execução paralela improvisada pelo orquestrador.

Estes sete não substituem o gabarito. `insumos-compartilhados/nucleo-comum/voz-paaps.md` continua valendo inteiro e carrega duas proibições que não estão na lista acima e são igualmente invioláveis: a estrutura frasal "não é X, é Y", em qualquer variação, e o vocabulário coachesco (mindset, virada de chave, alta performance, escala, dores da persona e todo o campo semântico de autoajuda mercantil). Vale também o protocolo de fontes do `radar.md`: nenhum número entra sem origem rastreável, e dado de campo do PAAPS sempre com território e período.

## 4. O Radar serve aos dois troncos

O Radar é o agente de pesquisa e mapeamento de pautas, com acesso à internet. Ele tem dois modos, e o orquestrador precisa dizer qual está pedindo.

**Modo propositivo (padrão do Tronco B).** Não há tema definido. O Radar pesquisa a atualidade e propõe as pautas. Toda construção de carrossel do @paaps.brasil depende desses dados atualizados: sem Radar, o carrossel do PAAPS não começa.

**Modo dirigido (serviço para o Tronco A).** A Mallu já tem tema. O Radar pesquisa com o norte nas palavras-chave dela e naquilo que ela pediu para embasar a tese principal. Neste modo ele pode chegar a propor a substituição da tese principal, e isso é resultado legítimo, não desvio. A Mallu pode entrar ou não nessa decisão: ela reveza com o Radar.

Regra de leitura: o Radar entrega e o fluxo segue. Uma entrega do Radar parada não significa fluxo congelado; significa que a próxima etapa ainda não foi acionada.

## 5. Tronco A: montante do gancho da Mallu

### Fase 0. Sintonia, o setting e o ambiente (não-verbal)
O verbal é o último a entrar. Antes da palavra, prepara-se o corpo e o campo afetivo.

- **Passo 1. Trilha sonora.** Montar trilha de MPB de raiz (Betânia, Djavan, Gal, Marisa Monte, Almir Sater, Ney, e afins), adaptada ao tema. Régua: tem que tocar a Mallu e tocar todos os brasileiros ao mesmo tempo. Função: criar o campo afetivo.
- **Passo 2. Referência visual.** Buscar imagem com verdade de território (padrão de excelência: fotos do Radilson) como gatilho de inspiração. **NÓ ABERTO (seção 9):** ainda não há fonte própria com esse padrão. Registrar a imagem escolhida ou marcar a pendência.

### Fase 1. Fonte (fundida)
O afeto situado e a âncora teórica entram **juntos**, alimentando um ao outro.

- **Passo 3. De onde isso está saindo em mim agora (ETAPA FORMAL, obrigatória).** Parar e responder três perguntas de forma explícita: o que isto está gerando em mim, o que está causando, e qual o contexto que me faz escrever sobre isso agora. Rastrear o afeto situado: o que na vida real, no corpo, na casa, nas pessoas concretas está fazendo o tema ferver. Produzir uma nota de contexto situado. **Destino duplo:** no @amalluvasconcellos este material é primeiro plano; no @paaps.brasil ele fica como raiz, e o primeiro plano passa a ser o dado e a forma científica.

  **Quando o gancho não vem dela.** A Mallu saiu de fornecer a criatividade (gancho, afeto, frase quente) e segue como julgamento: gate final, escolha da foto, interlocução com a Tecelã. Toda vez que o Passo 3 for respondido sem ela, ler antes `insumos-compartilhados/nucleo-comum/afeto-situado-mallu.md`. Regra dura de lá: a resposta aponta para um artefato real e localizável (comentário público no perfil, fala de campo, dado datado, decisão pública, sobra declarada do ciclo anterior). Vivência em primeira pessoa que o corpus não sustenta nunca é inventada: troca-se o sujeito para o "a gente" institucional, cede-se a voz ao testemunho citado, ou declara-se `LACUNA DE AFETO` no artefato A1.

- **Passo 4. Âncora teórica (fundida com o passo 3).** Folhear a fonte densa (livro, artigo, dado), supra-entender o argumento inteiro antes de recortar, e então caçar frases-trampolim. Critério: a frase só entra se provocar reação própria na Mallu (concordância, contestação, ponte com território, SUS, servidor). Frase sem reação fica de fora. Sem ela na mesa, a reação é reconstituída pelo corpus (o que ela citou, guardou, evoluiu ou rejeitou antes), nunca presumida.

### Fase 2. Lote
A saída do Tronco A é um **lote**, não uma peça única: a frase quente (ou o núcleo dela), a nota de afeto situado, e as frases-trampolim com as linhas autorais puxadas delas, já organizadas em peças candidatas.

### Fase 3. Gate de voz, peça a peça
O lote não escolhe um perfil de uma vez. Cada peça passa pelo gate.

**@amalluvasconcellos.** Voz de porta-voz da Psicologia com Impacto Social real. Primeira pessoa, autoral, crítica, íntima. O contexto situado do passo 3 é o primeiro plano: a experiência e o afeto viram o próprio conteúdo.

**@paaps.brasil.** Voz institucional da rede. Voz de campo, política pública, B2G e B2B. Construção de dados e forma científica. O carrossel parte do mesmo afeto situado, mas o traduz em evidência, estrutura e argumento. O contexto pessoal fica como raiz que orienta a escolha do tema, sem virar texto exposto.

Quando a peça cai no @paaps.brasil, ela entra na cadeia de agentes do Tronco B a partir da tecela, levando o material do lote como insumo (o Radar pode ser acionado em modo dirigido para embasar).

## 6. Tronco B: cadeia de agentes do carrossel PAAPS

Ordem confirmada, seis agentes, cada um com dono:

1. **radar** e **paaps-brasil** rodam em paralelo. O radar traz a pauta da atualidade; o paaps-brasil traz a leitura de performance real do perfil.
2. **tecela** tece o argumento: desnaturaliza o fenômeno, nomeia a contradição, situa na totalidade, acha as mediações.
3. **copywriter-paaps** escreve o carrossel sem apagar nem atenuar o pensamento de ninguém.
4. **buscador-fotos** curadoria no PhotoBank e lista curta de candidatas por slide. Quem escolhe é a Mallu.
5. **aplicador-visual** monta no Canva, exporta e entrega no Drive.
6. **Mallu** aprova.

O `sentinela` está fora deste fluxo.

### A Tecelã tem dois modos, e é sempre acionada

O processo da Tecelã (desnaturalizar, nomear a contradição, situar na totalidade, achar as mediações) é muito específico e só se afia com repetição. Por isso ela **entra em toda rodada, dos dois troncos**, mesmo quando não escreve nada da peça.

- **Modo aprendizado (sempre).** Acompanha a rodada, lê o material, registra no próprio log de aprendizado o que apareceu, o que ficou de fora e o que ela faria diferente. Não bloqueia o fluxo. Serve para que o repertório dela cresça com o histórico real, e não com rodadas isoladas.
- **Modo co-construtora (quando a Mallu pedir, ou quando o argumento ainda está aberto).** Constrói o argumento **junto** com a Mallu, em diálogo, em vez de entregar raciocínio fechado. É o modo a usar quando a Mallu já trouxe tese própria e quer testá-la, aprofundá-la ou achar a mediação que falta.
- **Modo raciocínio fechado.** Entrega o argumento pronto para o `copywriter-paaps`. É o modo padrão do Tronco B quando a peça nasce do Radar sem a Mallu na mesa.

Nunca pular a Tecelã para "ganhar tempo". Pular apaga uma rodada de aprendizado que não volta.

Regra de dramaturgia do carrossel: choque no presente, depois raiz histórica, depois prova; a imagem argumenta a tese antes do texto; o rodapé devolve o conteúdo ao campo das políticas públicas. Um hook que promete consequência forte cria dívida narrativa que os slides seguintes precisam pagar com prova. Não deixar cheque sem fundo.

## 7. Roteamento: agentes e skills que EXISTEM

Nunca inventar nome de skill ou agente. Esta é a lista real.

| Necessidade | Quem executa | Tipo |
|---|---|---|
| Pauta de atualidade, pesquisa com fonte | `radar` | agente |
| Leitura do perfil @paaps.brasil e performance | `paaps-brasil` | agente |
| Argumento sócio-histórico, contradição, mediações | `tecela` | agente (3 modos, seção 6) |
| Texto do carrossel @paaps.brasil | `copywriter-paaps` | agente |
| Curadoria de foto no PhotoBank | `buscador-fotos` | agente |
| Montagem no Canva e entrega no Drive | `aplicador-visual` | agente |
| Carrossel do @amalluvasconcellos | `mallu-carrossel` | agente |
| Roteiro de Reel do @amalluvasconcellos | `mallu-reels` | agente |
| Post de LinkedIn pessoal | `mallu-linkedin` | agente |
| Post de LinkedIn institucional | `paaps-linkedin` | agente |
| Gatilho na comunidade ECOA | `ecoa` | agente (INCOMPLETO, avisar a Mallu) |
| Copy de carrossel no tom de voz | `copy-carrossel` | skill |
| Legenda otimizada de Instagram ou TikTok | `legendas-otimizadas` | skill |
| Auditoria anti-padrão de IA no texto | `evita-padrao-ia-imersao-claude` | skill |
| Revisão ou cocriação visual | `design-parceiro` | skill |
| Fonte de imagem com régua Radilson | NÓ ABERTO | sem dono |

## 8. Contratos de entrega entre etapas (para agentes autônomos)

Um agente só inicia sua etapa quando o artefato de entrada existe, e só a conclui quando o de saída passa nos guardrails.

- **T Decisão de tronco** (primeira saída, sempre): { tronco: A | B, motivo }.
- **A0 Campo afetivo** (Tronco A, Fase 0): trilha definida + referência visual (ou pendência marcada).
- **A1 Núcleo da fonte** (Tronco A, Fase 1): { frase_quente, nota_afeto_situado, frases_trampolim_com_linhas_autorais }.
- **A2 Lote** (Tronco A, Fase 2): lista de peças candidatas derivadas de A1.
- **DEC Gate de voz** (por peça): { voz: amalluvasconcellos | paaps.brasil, canal, agente_de_execucao }.
- **B1 Pauta do Radar** (Tronco B): pautas com fonte falseável + modo usado (propositivo ou dirigido).
- **B2 Argumento da Tecelã**: contradição nomeada, totalidade, mediações.
- **B3 Texto do carrossel**: saída do copywriter-paaps.
- **B4 Deck montado**: slides exportados, entregues no Drive.
- **QA Verificação final**: checagem dos 7 guardrails da seção 3. Reprova se qualquer um falhar.

Definição de pronto: passou pelo QA, sem travessão grande, ordem quente antes de prova preservada, voz autoral, dado com fonte quando houver afirmação factual, agente dono acionado em cada etapa.

## 9. Estado atual e nós abertos

- **Nó visual.** A régua de qualidade de imagem subiu ao nível Radilson e não há fonte própria que a sustente sem depender de uma pessoa só. Ponto mais frágil do fluxo.
- **Agente ecoa.** Marcado como incompleto. Aguarda sessão dedicada com a Mallu antes de entrar em produção.
- **Canais Mallu.** Por enquanto Instagram e LinkedIn pessoal. Ampliar conforme ela passar a nutrir outros.
- **Terceiro tronco.** Se aparecer origem nova (por exemplo demanda direta de cliente B2G, ou parceria), abrir tronco próprio em vez de forçar dentro de A ou B.

## 10. Como um agente orquestrador deve usar esta skill

1. Decidir o tronco (seção 2) e registrar o artefato T. Nunca começar a executar antes disso.
2. Manter os guardrails (seção 3) ativos do início ao fim.
3. Se Tronco A: rodar o montante (seção 5) na ordem, sem pular a Fase 0 nem o passo 3, e passar cada peça do lote pelo gate de voz.
4. Se Tronco B: acionar o `radar` primeiro, e seguir a cadeia da seção 6 agente por agente.
5. Acionar sempre o agente que já existe (seção 7). Se o agente certo estiver incompleto, avisar a Mallu em vez de improvisar substituto.
6. Rodar o QA final (seção 8) antes de entregar. Se reprovar, voltar à etapa que gerou a falha, nunca maquiar na saída.
7. Ao encontrar nó aberto (seção 9), sinalizar à Mallu em vez de improvisar.
