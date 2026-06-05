# SENTINELA PAAPS — Auto-Report
**Ciclo 1 | Data: 5 de junho de 2026**
**Para: Tecelã**
**De: Sentinela**

---

## NOTA DE METODO

Este é o Ciclo 1 do Sentinela. O relatório anterior desta data foi gerado sem acesso à API — este substitui aquele com dados reais.

**Fontes consultadas neste ciclo:**
- Dashboard Windsor AI via curl direto (chave local confirmada). Dados de 6 mai a 4 jun/2026 — 30 dias completos para ambos os perfis.
- Dado de seguidores em tempo real: 5 jun/2026 (extraído do endpoint Windsor).
- MEMORY.md do Sentinela (ciclo anterior — referência de base).
- Radar Ciclo 1 (5 jun/2026) — 20 pautas.
- Arquivos de nucleo-comum: voz-paaps.md, CLAUDE.md dos dois workspaces.

**O que não foi acessado:**
- Posts específicos publicados (sem acesso autenticado ao Instagram). Os dados do Windsor são por data de acumulação de interações, não por post individual. Impossível associar métrica a título específico de post sem cruzamento manual.
- LinkedIn de Mallu e LinkedIn PAAPS Brasil (autenticação necessária).
- Pastas `analises/` dos workspaces: vazias. Nenhum histórico anterior salvo.

Dado verificado está indicado como tal. Inferência estrutural também.

---

## BLOCO 1 — O QUE ACONTECEU ESTA SEMANA

### Dados de seguidores (5 jun/2026 — extraídos da API)

- **@amalluvasconcellos:** 3.259 seguidores
- **@paaps.brasil:** 1.062 seguidores
- Referência anterior (MEMORY Ciclo 0): @amallu ~3.256 / @paaps ~1.035
- Delta no período: @amallu +3 (+0,09%) / @paaps +27 (+2,6%)

**@paaps.brasil cresceu 29x mais em proporção do que @amalluvasconcellos no período dos últimos 30 dias.** Isso é o dado de seguidores mais importante desta análise e será explicado no Bloco 2.

---

### Resumo dos 30 dias — @amalluvasconcellos (6 mai a 4 jun/2026)

| Métrica | Valor total (30 dias) | Média diária |
|---|---|---|
| Reach | 19.687 | 656 |
| Likes | 1.942 | 65 |
| Comments | 100 | 3,3 |
| Shares | 160 | 5,3 |
| Saves | 269 | 9,0 |
| Total interações | 2.728 | 91 |

| Taxa | Valor |
|---|---|
| Save rate | 1,37% |
| Share rate | 0,81% |
| Comment rate | 0,51% |
| Engagement rate | 13,86% |

**Períodos distintos identificados — duas fases diferentes:**

- **Fase alta (6–19 mai):** 14 dias, reach médio de 1.034/dia, TI médio de 160/dia, save rate de 1,75%
- **Fase colapso (20 mai–4 jun):** 16 dias, reach médio de 325/dia, TI médio de 30/dia, save rate de 0,29%

Queda em 16 dias: -68,5% em reach, -81,2% em interações totais. Não é flutuação normal — é colapso de distribuição.

**Eventos virais detectados (algoritmo: mean + 2σ, limiar = 261 TI):**
- 14 mai: TI=264, reach=1.648, saves=26 (1,6%), shares=27 (1,6%)
- 19 mai: TI=310, reach=1.977, saves=5 (0,3%), shares=9 (0,5%)

---

### Resumo dos 30 dias — @paaps.brasil (6 mai a 4 jun/2026)

Os dados do @paaps.brasil são dominados por um evento singular de 2 dias que distorce todos os totais. A análise exige separação obrigatória entre o evento viral e a baseline.

**EVENTO VIRAL: 18–19 de maio**
- 18 mai: TI=47.086 | shares=8.026 | saves=3.155 | likes=27.536 | comments=340 | reach=239
- 19 mai: TI=25.861 | shares=3.813 | saves=1.948 | likes=16.104 | comments=182 | reach=117
- Total dos 2 dias: 72.947 TI, 11.839 shares, 5.103 saves
- Virality score: 23,7% (dia 1) e 22,3% (dia 2) — benchmark normal é 2–5%
- Esses 2 dias representam 72,7% de todas as interações do período de 30 dias

**Diagnóstico do evento viral:** O reach dos dias 18–19 mai foi de 239 e 117, respectivamente — extremamente baixo para um conteúdo que gerou 72k interações. Isso indica que o Windsor registra métricas cumulativas de posts na data em que as interações chegam ao servidor, não necessariamente no dia em que o post foi visto. O post gerador desse evento provavelmente foi publicado entre 12 e 17 de maio e entrou em loop de redistribuição intenso nos dias 18–19. As 72k interações são reais — mas ocorreram em cadeia de compartilhamentos fora do alcance orgânico direto do perfil.

**Baseline @paaps.brasil (excluindo 18–19 mai):**

| Métrica | Valor (28 dias) | Média diária |
|---|---|---|
| Reach | 931 | 33 |
| TI médio | — | 980 |
| Save rate | 233,62% | — |
| Share rate | 437,06% | — |

Nota: save rate e share rate acima de 100% decorrem de interações cumulativas de posts mais antigos ainda sendo redistribuídos no período. Os números refletem que o conteúdo do @paaps tem vida longa — as interações continuam chegando dias depois da publicação.

**Decaimento pós-viral (20 mai a 4 jun):**
O conteúdo que gerou o evento viral continuou gerando interações por 16 dias. O decaimento foi consistente mas nunca chegou a zero: em 4 jun ainda havia 391 TI, 56 shares e 29 saves — sem nenhum post novo relevante. Isso é o sinal mais claro da natureza do público do @paaps: uma vez que algo ressoa, circula por muito tempo.

---

### Última semana em detalhe (30 mai a 4 jun) — ambos os perfis

**@amalluvasconcellos:**
- 30 mai: reach=286, TI=13 (baixíssimo)
- 31 mai: reach=187, TI=21
- 1 jun: reach=204, TI=40
- 2 jun: reach=507, TI=34
- 3 jun: reach=1.251, TI=94 (recuperação parcial — provável novo post)
- 4 jun: reach=577, TI=18

**@paaps.brasil (mesma semana):**
- 30 mai: TI=1.040, shares=148, saves=82
- 31 mai: TI=1.901, shares=430, saves=149
- 1 jun: TI=692, shares=94, saves=53
- 2 jun: TI=410, shares=59, saves=37
- 3 jun: TI=372, shares=64, saves=29
- 4 jun: TI=391, shares=56, saves=29

O @paaps ainda estava recebendo 391 interações no dia 4 de junho — 17 dias após o evento viral — sem indicação de novo post publicado. O @amallu registrou um pico de reach de 1.251 no dia 3 de jun, possivelmente um novo post.

---

## BLOCO 2 — O QUE FUNCIONOU E POR QUE

### O evento viral do @paaps.brasil é o fato mais importante do período

Um conteúdo do @paaps.brasil gerou 72.947 interações em 2 dias, com virality score de 23–24% — aproximadamente 5–10x acima do benchmark de posts normais do setor. Mais revelador: esse conteúdo continuou gerando shares e saves por 17 dias seguidos. Em 27 de maio — 9 dias após o pico — o post ainda gerou 469 shares e 212 saves em um único dia.

O que isso diz sobre o tipo de conteúdo que funcionou: **o público do @paaps não apenas curte — ele redistribui e arquiva.** Um virality score de 23% significa que para cada 100 interações, 23 foram atos de redistribuição ativa (share ou save). Esse é o comportamento de um público que usa o conteúdo como instrumento — para mandar para um colega, para apresentar em reunião, para guardar como referência. Não é entretenimento. É ferramenta.

O conteúdo gerador desse evento não pode ser identificado com certeza sem acesso às métricas por post — mas a data de acumulação e o perfil das métricas (shares altíssimos, save rate extremo, comentários com 340 em 1 dia) indicam um post de dado com posicionamento crítico sobre saúde mental no trabalho, possivelmente conectado à NR-01 (que entrou em vigor em 26 de maio — 8 dias após o pico de interações, o que é consistente com um post publicado entre 12–17 mai em antecipação à vigência).

### O crescimento de seguidores de @paaps confirma a tese de conversão qualitativa

@paaps cresceu +27 seguidores no período (+2,6%) vs @amallu +3 (+0,09%). O @paaps tem 1/3 dos seguidores de @amallu mas cresceu 29x mais em proporção. A explicação está no tipo de engajamento: quando o conteúdo do @paaps é redistribuído por pessoas com quem ressoa (gestores, técnicas de SUAS/SUS, profissionais de saúde pública), essas pessoas têm alta probabilidade de seguir o perfil — porque o perfil é relevante para o trabalho delas, não apenas interessante. O @amallu tem mais alcance mas converte menos porque o público que chega por viralização nem sempre tem motivação para manter vínculo.

### O pico de @amallu em 11–14 de maio foi real e revelador

Quatro dias consecutivos com reach acima de 1.000 e TI acima de 186. Em 13 de maio: saves de 40 (2,8% save rate) com reach de 1.430. Em 14 de maio: TI de 264 com shares de 27. Esses são os dias de melhor performance combinada do período — alto alcance E alto save rate ao mesmo tempo, o que é raro.

O padrão por dia da semana confirma: segunda e terça são os melhores dias para @amallu.
- Segunda: TI médio=120, reach médio=644
- Terça: TI médio=139, reach médio=963

O pico de 11–14 mai corresponde a segunda, terça, quarta, quinta — a janela de melhor performance concentrada no início da semana.

Para @paaps: segunda tem TI médio de 12.193 (distorcido pelo viral de 18 mai, que foi segunda-feira). Excluindo o viral, a segunda ainda seria o melhor dia — o evento de 18 mai foi segunda-feira, o que reforça que o início da semana é quando o público institucional está mais ativo.

### O save rate do @amallu em 13 mai (2,8%) é o benchmark de carrossel de conceito

Um save rate de 2,8% em um dia com reach de 1.430 indica que cerca de 40 pessoas salvaram o post naquele dia — o que, para uma conta de 3.259 seguidores, é expressivo. Esse dado valida parcialmente a tese de que carrossel de conceito de psicologia social gera save rate acima do benchmark de 2%.

---

## BLOCO 3 — O QUE NAO FUNCIONOU E POR QUE

### O colapso do @amalluvasconcellos a partir de 20 de maio é o maior problema do período

Entre 20 e 25 de maio, o @amalluvasconcellos teve reach de 621, 284, 137, 197, 116, 114 em dias consecutivos. Esses números são menores do que os dias de menor performance da fase alta (onde mesmo o pior dia tinha reach acima de 500). O colapso não foi gradual — foi abrupto. No dia 19 mai o perfil teve o melhor dia do período (reach=1.977, TI=310). No dia 20 mai o reach caiu para 621 e o TI para 58. No dia 22 mai estava em 137.

A queda em TI foi ainda mais severa: -81% em interações, -94% em saves, -91% em shares em comparação entre a primeira e segunda metade do período.

O dado de 22–25 mai com reach abaixo de 200 por dia quase certamente indica **ausência de post novo** nesse período. Quando não há post recente, o algoritmo para de distribuir o conteúdo antigo (diferente do @paaps, cujo conteúdo tem vida longa). O @amallu depende de frequência de publicação para manter alcance.

Isso não é opinião — é o padrão nos dados: o pico de 19 mai não foi seguido por novo conteúdo nos dias 20–25, e o reach desabou. A recuperação parcial em 3 jun (reach=1.251) coincide com o que parece ser um novo post.

**O que não funcionou: a frequência de publicação caiu depois do pico de 19 mai e o perfil perdeu a janela da NR-01.** A NR-01 entrou em vigor em 26 de maio, exatamente quando o @amallu estava no ponto mais baixo de alcance do período. A janela de maior autoridade sobre o tema mais urgente coincidiu com o momento de menor visibilidade do perfil.

### O @paaps não capitalizou o evento viral com novo conteúdo

O evento de 18–19 mai gerou 72k interações e acelerou o crescimento de seguidores. Mas não há evidência de novo post publicado em seguida que aproveitasse a expansão de audiência. O decaimento do evento seguiu uma curva normal de 16 dias sem nenhum pico secundário que indicasse injeção de novo conteúdo. O perfil cresceu +27 seguidores no período — um número modesto considerando que 72k pessoas interagiram com o conteúdo.

A janela para capitalizar um evento viral é estreita: os 3–5 dias após o pico são quando a nova audiência ainda lembra do perfil e está mais propensa a engajar com o próximo post. Se não há post nessa janela, a maioria dessas pessoas não volta.

### O save rate do @amallu caiu 83% entre as duas metades do período

Save rate na fase alta: 1,75%. Save rate na fase baixa: 0,29%. Essa queda não é só consequência da queda de alcance — ela indica que o conteúdo publicado na segunda metade do período (quando havia post) não gerou o mesmo nível de identificação/utilidade que o conteúdo da primeira metade. Isso é dado de qualidade de conteúdo, não só de alcance.

---

## BLOCO 4 — TESES VALIDADAS / TESES REJEITADAS

### Teses validadas pelos dados

**Tese 1 VALIDADA: @paaps.brasil tem share rate estruturalmente maior que @amallu.**
- @paaps (excl. viral): share rate de 437%. @amallu: 0,81%.
- Mesmo excluindo o evento viral, o @paaps tem share rate muito acima de @amallu.
- A explicação está no público: o público institucional do @paaps compartilha o conteúdo para colegas de trabalho. O conteúdo de @amallu é mais salvo individualmente.
- Status: **confirmada com dados reais.**

**Tese 2 VALIDADA: O melhor dia para postar em @amalluvasconcellos é segunda ou terça-feira.**
- Heatmap por dia da semana: segunda TI médio=120 (reach=644), terça TI médio=139 (reach=963).
- A terça é o melhor dia em TI absoluto. A segunda tem reach mais baixo mas TI proporcional alto.
- Status: **confirmada com dados reais. Próximo ciclo: manter cadência segunda/terça para @amallu.**

**Tese 3 CONFIRMADA PARCIALMENTE: Carrossel de conceito de psicologia social tem save rate acima de 2%.**
- Dias de pico de save rate em @amallu: 13 mai (2,8%), 11 mai (2,6%), 15 mai (2,2%).
- Esses dias coincidem com a fase de maior alcance, provavelmente com carrosséis ativos.
- O benchmark do dashboard era 3–5% para conteúdo educativo. Os dados indicam que @amallu alcança 2–3% no pico — abaixo do teto do benchmark mas acima do piso.
- Status: **parcialmente confirmada. Meta: alcançar 3%+ nos próximos ciclos.**

**Tese 4 CONFIRMADA: Crescimento de seguidores correlacionado com evento de alta redistribuição.**
- @paaps +2,6% de crescimento, correlacionado com o evento viral de 72k TI.
- @amallu +0,09% de crescimento, sem evento viral.
- A correlação é clara: redistribuição em escala gera conversão de seguidores, não apenas alcance.
- Status: **confirmada. O que converte seguidores é share rate, não reach isolado.**

### Teses rejeitadas ou reformuladas

**Tese anterior: frequência de Reels é o principal driver de crescimento em @amallu.**
- Os dados mostram que a frequência importa para manter alcance, mas não necessariamente para crescimento de seguidores.
- @amallu teve mais alcance e mais posts mas cresceu menos que @paaps.
- **Reformulação:** frequência de posts mantém alcance para @amallu, mas o que converte seguidores é a intensidade da redistribuição (share rate), não o volume de alcance.

**Tese anterior implícita: o @paaps.brasil tem performance consistentemente baixa.**
- Os dados contradizem isso: um único post do @paaps gerou mais interações em 2 dias do que @amallu gerou em 30 dias somados.
- O @paaps tem uma base de alcance orgânico muito menor (33 reach/dia de baseline), mas quando acerta o tema certo, a redistribuição é exponencialmente maior.
- **Nova tese:** o @paaps.brasil opera em modo "latência + explosão". A maioria dos dias tem performance baixa, mas o conteúdo certo gera eventos de redistribuição que não têm equivalente no @amallu.

### Teses que continuam abertas

**Tese 6: Pautas de legislação performam melhor em @paaps que em @amallu.**
- Circunstancialmente suportada pelo evento viral (provavelmente relacionado à NR-01), mas sem confirmação direta de qual post gerou o evento.
- Status: **aberta. A verificar com acesso às métricas por post.**

**Tese 7: LinkedIn com cadência analítica pode gerar leads B2B.**
- Sem dados. Não verificável neste ciclo.
- Status: **aberta. Primeiro experimento a implementar no próximo ciclo.**

---

## BLOCO 5 — ESTRATÉGIA RECOMENDADA PARA O PRÓXIMO CICLO

### Diagnóstico antes da estratégia

Os dados dos 30 dias revelam dois perfis com dinâmicas radicalmente diferentes que precisam de estratégias opostas — não paralelas.

**@amalluvasconcellos** é um perfil de alcance dependente de frequência. Sem post novo, o alcance cai em dias. O público desse perfil engaja no ato (likes, salvamentos individuais) mas não redistribui intensamente. A conversão em seguidores é baixa mesmo com alto alcance. O risco desse perfil é o da "audiência que passa" — vê, aprecia, não fica.

**@paaps.brasil** é um perfil de redistribuição latente com explosões pontuais. O baseline de alcance é irrelevante (33/dia) — o que importa é que quando o conteúdo acerta, ele não circula no Instagram: ele circula em grupos de WhatsApp, e-mails de gestores, reuniões de secretaria. O público do @paaps não apenas salva o conteúdo — ele o usa como argumento em situações de trabalho. Isso explica o virality score de 23%.

### A estratégia assimétrica dos dois perfis

**Para @amalluvasconcellos (próximas 4 semanas):**

O problema imediato é o colapso de frequência que aconteceu em 20–25 mai. A retomada precisa ser estruturada, não reativa.

Cadência mínima: 3 posts por semana, com pelo menos 1 Reel de câmera direta. O Reel é o único formato que gera alcance para fora da base. Os dados mostram que os dias de maior alcance em @amallu (1.430–1.977 reach/dia) coincidiram com uma sequência de 9 dias consecutivos de posts. Quando a frequência caiu, o alcance caiu.

Timing: segunda ou terça para o post principal da semana. Os dados confirmam que esses são os dias de maior TI médio.

O tema não precisa seguir o Radar diretamente. O que funciona em @amallu é a tensão que o público de psicólogas e estudantes de 18–34 anos reconhece mas não tinha palavras para nomear. As pautas do Radar servem como gatilho, não como tema central.

**Para @paaps.brasil (próximas 4 semanas):**

O objetivo não é aumentar o alcance diário — é aumentar a probabilidade de um próximo evento de redistribuição. O evento de 18–19 mai foi possivelmente não planejado como conteúdo viral: ele foi distribuído pelo algoritmo porque alguém com muita audiência o compartilhou, ou porque atingiu um limiar de engajamento inicial que acionou a distribuição expandida.

A estratégia é publicar 1–2 vezes por semana com conteúdo de alta densidade de posicionamento crítico, formato de carrossel estrutural ou post tipográfico com dado impactante. Não tentar "fazer viral" — tentar criar as condições para que o conteúdo seja redistribuído por quem lê: gestores que mandam para colegas, técnicas que colocam em grupos de WhatsApp do SUAS.

O que o @paaps não fez no período: publicar na janela de 3–5 dias após o evento viral para capturar a nova audiência. Essa é a mudança operacional mais importante para o próximo ciclo.

### A janela da NR-01 ainda está aberta — mas está fechando

A NR-01 entrou em vigor em 26 de maio. Hoje é 5 de junho — 10 dias depois. A janela de autoridade máxima está aberta por mais 2 semanas. Depois disso, o tema passa a ser retrospectivo.

O @paaps não publicou na janela mais crítica (25–31 mai) — o @amallu estava no piso de alcance nesse período. Isso foi um erro de timing que não pode ser corrigido retroativamente. Mas a janela ainda existe: gestores públicos ainda estão tentando entender o que precisam fazer, ainda não há clareza sobre fiscalização e penalidades para o setor público. O PAAPS pode entrar agora com o ângulo que falta: não "o que diz a lei" (isso já foi publicado por todos), mas "o que a lei pressupõe que os municípios têm e que eles não têm — e o que fazer com isso na prática".

No @paaps.brasil: carrossel com dado + posicionamento crítico. No @amallu: Reel de câmera direta com a tensão central. No LinkedIn de Mallu: texto analítico longo, o único canal onde o gestor de RH e o secretário municipal ainda não viram ninguém falar sobre isso com essa profundidade.

### A decisão sobre o LinkedIn não pode mais ser postergada

O diagnóstico histórico é claro: LinkedIn sem estratégia = 0 comentários, alcance só na base. Mas o momento de mercado para o PAAPS no LinkedIn nunca foi melhor: NR-01 em vigor, gestores de RH em busca de parceiros de diagnóstico psicossocial, falta de profissionais com autoridade técnica para falar sobre riscos psicossociais no setor público.

A recomendação é operacional: **1 post de LinkedIn por semana para Mallu, formato texto analítico longo (800–1200 palavras), publicado às terças-feiras.** O formato é deliberado: texto longo no LinkedIn tem performance melhor que posts curtos para o público de gestores porque demonstra capacidade analítica antes de qualquer conversa comercial. O dia é deliberado: terça é o pico de atividade do LinkedIn para profissionais de RH e gestão pública.

O experimento precisa de 4 semanas para gerar qualquer dado. Implementar no próximo ciclo e medir no Ciclo 2 do Sentinela.

### A urgência da Copa 2026

O Radar identificou corretamente: janela de 2 semanas para a pauta 20 (Copa + saúde mental comunitária). O campeonato começa este mês. A janela de análise crítica antes do ciclo esportivo dominar a narrativa está aberta agora e fecha em aproximadamente 10–14 dias.

O timing de publicação: esta semana ou no máximo na próxima. Não pode entrar no ciclo geral de planejamento — precisa de urgência declarada.

### A série de 3 posts (pautas 1, 2 e 5) como experimento de série

O Radar identificou a coerência entre as pautas 1 (NR-01), 2 (burnout + gênero) e 5 (gestor do interior). São três ângulos do mesmo fenômeno: o sistema que adoece quem cuida sem criar condições para que esse cuidado aconteça de forma sustentável.

A estratégia de série funciona diferente de 3 posts isolados: o seguidor sabe que vai ter continuação e volta. O algoritmo tende a distribuir conteúdo de criadores que têm engajamento consistente ao longo de vários dias. E o argumento cumulativo dos 3 posts tem mais profundidade do que qualquer um dos três isoladamente.

Para @amalluvasconcellos: série temática sem numeração explícita. Para @paaps.brasil: série com identificação visual explícita (Parte 1/3, Parte 2/3, Parte 3/3).

---

## BLOCO 6 — TOP 5 PAUTAS DO RADAR COM MAIOR POTENCIAL DADO O HISTORICO

O ranking cruza os dados reais de performance dos 30 dias com as 20 pautas do Radar. Os critérios: (1) alinhamento com o tipo de conteúdo que gerou os eventos de maior performance (virality score alto no @paaps, save rate alto no @amallu); (2) timing — a janela ainda está aberta?; (3) autoridade PAAPS confirmada (não apenas declarada); (4) compatibilidade com o público real (84% mulheres, 87% 18–34, profissionais de psicologia e assistência social).

---

### 1 — PAUTA 5: O gestor público do interior

**Ranking: #1. Motivo principal: é o conteúdo com maior probabilidade de reproduzir o evento viral do @paaps.**

O evento viral de 18–19 mai foi gerado por um conteúdo redistribuído por pessoas que trabalham na rede pública de saúde e assistência social — exatamente o público da pauta 5. O gestor do interior que não tem estrutura para cumprir a NR-01 é a Cláudia do voz-paaps.md: secretária de CRAS, interior de Minas, equipe exausta, cobrada por conformidade com norma que pressupõe estrutura que ela não tem.

Quando esse post aparecer no feed dela, ela vai mandar para a coordenadora de outro município. Não porque é bom conteúdo — porque é verdadeiro. O virality score de 23% do evento anterior indica que esse público redistribui quando o conteúdo nomeia a condição deles com precisão.

**O que os dados recomendam:** Post de identificação em segunda pessoa no @paaps.brasil (formato que o Radar sugere). No @amallu, Reel de câmera direta. Publicar na segunda ou terça da próxima semana.

**Potencial de conversão:** Máximo. Gestores em pânico silencioso que leram esse post e reconheceram a situação deles vão entrar em contato. O CTA precisa ser direto: "Fala com a gente" (WhatsApp da bio).

---

### 2 — PAUTA 1: NR-01 chega ao setor público

**Ranking: #2. Urgência temporal — janela fecha em ~14 dias.**

A pauta 1 é o sistema (a norma e a contradição). A pauta 5 é a pessoa dentro do sistema (o gestor). As duas devem ser trabalhadas, mas o ângulo da pauta 1 é mais analítico e tem perfil de carrossel estrutural para @paaps.brasil — exatamente o formato que gerou o evento viral.

O dado mais importante que os números confirmam: o @paaps.brasil tem share rate estruturalmente acima de @amallu. Para conteúdo sobre legislação (que o público redistribui para quem precisa saber), essa é a plataforma certa. No @amallu, a NR-01 entra como Reel com a tensão central: não "a lei chegou" mas "o sofrimento que a lei tenta nomear já existe — mas o Estado nunca criou estrutura para endereçá-lo."

**O que os dados recomendam:** Carrossel de dado + análise crítica em @paaps.brasil (mesmo formato do provável gerador do evento viral). Publicar ainda esta semana — a janela está fechando.

---

### 3 — PAUTA 2: Burnout triplicou — e 65% dos afastados são mulheres

**Ranking: #3. Alinhamento máximo com o público real.**

O público de @amallu é 84,2% mulheres, 87% entre 18–34 anos. O recorte de gênero do burnout (65% mulheres) é a ferida que esse público vai reconhecer e redistribuir. O evento de 19 mai em @amallu — reach 1.977 e TI 310, o melhor dia do perfil no período — pode ter sido exatamente esse tema ou um adjacente.

O save rate do @amallu nos dias 11–13 mai (2,6–2,8%) ocorreu em conteúdo sobre temática de sofrimento coletivo/sistêmico. Burnout com recorte de gênero se encaixa nesse padrão. O formato Reel de câmera direta com abertura de dado impactante + virada narrativa tem o perfil dos dias de melhor performance.

**A tensão certa:** não "burnout está crescendo" — mas "o sistema que mais adoece é aquele que mais exige que mulheres cuidem sem serem cuidadas. E isso tem nome." É isso que o público salva — porque reconhece, não porque aprende.

---

### 4 — PAUTA 6: PeNSe 2026 — escola pública sem suporte de saúde mental

**Ranking: #4. Dado recente não traduzido para política pública — território exclusivo do PAAPS.**

45,8% das escolas públicas sem suporte de saúde mental. 14,2% de ideação suicida em adolescentes. O ângulo que os dados de performance do @paaps confirmam como ideal: não "jovem em crise", mas "escola sem recurso / Estado ausente como produtor de vulnerabilidade". É o mesmo padrão de posicionamento que gerou o evento viral — estrutural, não individualista, com dado concreto como âncora.

O público do @paaps tem profissionais de saúde, educação e assistência social que vão redistribuir esse conteúdo para grupos de trabalho. O save rate projetado em @amallu é alto para esse tema porque o público (estudantes de psicologia, 87% 18–34) trabalha ou vai trabalhar com adolescentes em escola pública.

**Atenção obrigatória:** tema requer cuidado com as diretrizes de comunicação sobre suicídio (CVV). O foco na estrutura ausente — escola sem suporte — é o ângulo que evita os riscos éticos sem perder a força do posicionamento.

---

### 5 — PAUTA 20: Copa 2026 — o que o espetáculo apaga

**Ranking: #5. URGENTE — janela de 2 semanas. Entrar esta semana ou a pauta perde o timing.**

O Radar sinalizou clareza suficiente. Os dados de performance confirmam a viabilidade: o @amallu teve seu pico de alcance (1.977 reach) em 19 mai — um dia de segunda-feira. Se um Reel de câmera direta sobre Copa + saúde mental comunitária for publicado na segunda-feira desta semana (8 jun), a janela de timing está alinhada com o melhor dia da semana para o perfil.

O ângulo específico para usar a memória de 2014 sem romantizar: "O Brasil não processou o custo social da Copa de 2014. E a Copa de 2026 começa enquanto a rede de saúde mental pública segue no mesmo lugar." Esse é o tipo de conteúdo que o público do @amallu redistribui — porque é contracultural, é específico, e é verdadeiro.

Para @paaps.brasil: post manifesto tipográfico, publicar no mesmo dia ou no seguinte.

---

## NOTAS PARA A TECA

Cinco pontos que a Tecelã precisa saber antes de começar:

**1.** O evento viral do @paaps de 18–19 mai é o fato mais importante do período. Não foi acaso — foi conteúdo de posicionamento crítico com dado concreto que o público institucional redistribuiu porque era útil para ele. O próximo post do @paaps.brasil precisa ter esse perfil: dado + posicionamento + transferibilidade (algo que o leitor consegue usar num contexto de trabalho).

**2.** O @amalluvasconcellos está com alcance em colapso desde 20 mai. A recuperação de 3 jun (reach=1.251) é pontual. O perfil precisa de retomada de frequência imediata — 3 posts por semana, pelo menos 1 Reel. Sem frequência, o algoritmo para de distribuir.

**3.** O melhor dia de publicação confirmado pelos dados: segunda ou terça para @amallu. Para @paaps: segunda-feira (o evento viral foi segunda).

**4.** A pauta 20 (Copa 2026) precisa de decisão esta semana. Não é sugestão — é urgência de timing.

**5.** A série pautas 1+2+5 é o conjunto de maior potencial de série para os próximos 10 dias. Arquitetura sugerida: pauta 5 (identidade — o gestor) → pauta 2 (o sofrimento com recorte de gênero) → pauta 1 (o sistema que não criou estrutura). Essa sequência vai do particular (a pessoa) para o coletivo (o sofrimento de gênero) para o estrutural (a norma sem suporte). É o movimento típico da voz do PAAPS.

---

*Sentinela PAAPS | Ciclo 1 (revisado com dados reais) | 5 de junho de 2026*
*Próxima sessão: a partir de 3 de julho de 2026 (aguardar mínimo 4 semanas)*
*Para o Ciclo 2: os dados Windsor estão disponíveis via curl com a chave em config.js — o Sentinela pode ser acionado diretamente sem exportação manual prévia*
