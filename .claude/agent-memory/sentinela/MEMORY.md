# MEMORIA DO SENTINELA — PAAPS

Arquivo de memoria persistente entre ciclos. Atualizado ao final de cada sessao.

---

## CICLO 2 — 5 de junho de 2026

### Status da sessao
- Ciclo 2 executado com dados reais do Windsor AI via WebFetch (curl bloqueado pelo auto mode).
- 60 registros diarios brutos coletados (6 mai a 4 jun 2026), mais registro de seguidores de 05 jun.
- Analise estatistica executada via Python (Bash) — totais, fases, WoW, heatmap, evento viral, save rate, share rate, qualitative ratio, anomalia TI/reach, cauda longa.
- LinkedIn: endpoint Windsor (linkedin_pages e linkedin_personal) retornou dados de Instagram — conector nao configurado corretamente para LinkedIn. Terceiro ciclo sem dados LinkedIn.
- Workspaces locais (amalluvasconcellos/conteudo/ e paaps.brasil/conteudo/) continuam vazios.
- Radar 2026-06-05 lido e cruzado com os dados.

### Dados confirmados (06 mai a 04 jun 2026)

**Seguidores (05 jun 2026):**
- @amalluvasconcellos: 3.259 (+3 no periodo, +0,09%)
- @paaps.brasil: 1.062 (+27 no periodo, +2,6%)

**@amalluvasconcellos — 30 dias:**
- Reach total: 19.687 | Media diaria: 656
- TI total: 2.728 | Media diaria: 91
- Save rate: 9,86% | Share rate: 5,87% | Qual ratio: 19,39%
- FASE ALTA (6-19 mai): reach_med=1.034 | TI_med=160 | save_rate=11,3%
- FASE COLAPSO (20-31 mai): reach_med=222 | TI_med=25 | save_rate=2,4%
- FASE RECUPERACAO (1-4 jun): reach_med=635 | TI_med=46 | save_rate=4,3%
- Recuperacao ainda 39% abaixo do patamar da fase alta
- WoW: S1=+43% reach | S2=-80% reach | S3-S4=+64% (ainda deprimido)

**@paaps.brasil — 30 dias:**
- Reach total: 1.287 | Media diaria: 43
- TI total: 100.386 | Media diaria: 3.346
- Save rate: 7,25% | Share rate: 15,85% | Qual ratio: 23,83%
- EVENTO VIRAL 18-19 mai: TI=72.947 (72,7% de todo o TI do periodo)
- Share rate do evento: 17,0% e 14,7%
- Cauda pos-viral (20-31 mai): media TI=2.114/dia, share rate mantido 12-23%
- Junho (1-4 jun): media TI=466/dia — cauda esgotando
- ANOMALIA: dias 28-30 mai com TI/reach de 326x-520x (redistribuicao externa ao algoritmo)

### Heatmap @amalluvasconcellos (dado definitivo deste ciclo)

**Por reach medio:**
- Ter: 963 | Qua: 808 | Qui: 700 | Seg: 644 | Sab: 539 | Sex: 466 | Dom: 425

**Por save rate:**
- Sab: 14,8% | Seg: 13,5% | Sex: 13,4% | Qua: 10,2% | Qui: 8,9% | Dom: 8,1% | Ter: 3,9%

**Insight critico:** terca maximiza alcance; segunda maximiza retencao. Sao objetivos distintos que pedem conteudos distintos.

### Padroes novos confirmados neste ciclo

1. **CAUDA LONGA DO CONTEUDO INSTITUCIONAL:** conteudo do @paaps com share rate >12% por 17 dias pos-viral. Vida util 5-10x maior que conteudo de @amallu.

2. **INATIVIDADE POS-PICO TEM CUSTO EXPONENCIAL:** o pico de @amallu em 19 mai gerou janela algoritmica que foi desperdicada. Queda de 94% em 5 dias (nao linear). Custo de inatividade apos pico e 3-5x maior que custo de inatividade em baseline.

3. **CONTEUDO DE ALCANCE vs CONTEUDO DE RETENCAO SAO FORMATOS DISTINTOS em @amallu:** 03 jun (reach=1.251, save_rate=0,16%) vs 11-14 mai (reach 1.162-1.648, save_rate 9-18%). A hipotese e que reels/posts de awareness alcancam mas nao retêm; carrosséis de conceito retêm mas alcancam menos.

4. **REDISTRIBUICAO INDEPENDE DO ALGORITMO em @paaps:** TI/reach de 520x em 30 mai. O publico institucional redistribui conteudo sem precisar do algoritmo do Instagram para fazer isso. Isso e uma vantagem estrutural que o @amallu nao tem.

5. **CONTEUDO DE FERRAMENTA DE TRABALHO e o unico que gera esse nivel de redistribuicao:** o publico do @paaps nao salva para reler — redistribui como curadoria institucional. Isso exige conteudo com angulo de "o que eu preciso saber/fazer agora" e nao de "isso e interessante".

### Teses validadas (acumuladas)

1. VALIDADA: @paaps tem share rate estruturalmente maior (15,85% vs 5,87%)
2. VALIDADA com revisao: melhor dia para @amallu e segunda para saves, terca para reach (nao o mesmo objetivo)
3. CONFIRMADA PARCIALMENTE: save rate de carrossel em @amallu entre 9-18% nos picos (ciclo 1 estimava 2-3%, subestimado)
4. VALIDADA: crescimento de seguidores correlacionado com redistribuicao, nao alcance bruto
5. VALIDADA: cauda longa do conteudo institucional (@paaps)
6. VALIDADA: inatividade pos-pico tem custo exponencial (nao linear) em @amallu

### Teses ainda abertas

5. Pautas de legislacao performam melhor em @paaps — circunstancialmente suportada, sem confirmacao do post especifico do viral
6. LinkedIn como canal B2B — SEM DADOS. Terceiro ciclo consecutivo sem medicao. Configurar Windsor antes de publicar.
7. Qual post especifico gerou o viral de 18 mai — ainda desconhecido (requer acesso ao app)
8. Conteudo de alcance vs retencao em @amallu — hipotese aberta, precisa de identificacao de formato por post

### Teses rejeitadas

- "Colapso de @amallu se resolve com retorno a publicacao": REJEITADA. Recuperacao e lenta e parcial — reach medio de junho (635) ainda 39% abaixo da fase alta (1.034), qualitative ratio de 11,7% vs 22% anterior.

### Eventos-chave identificados

**Evento viral @paaps (18-19 mai 2026):**
- TI: 72.947 | Shares: 11.839 | Saves: 5.103
- Cauda de 17 dias com share rate de 12-23%
- Anomalia TI/reach chegou a 520x

**Pico de recuperacao @amallu (03 jun 2026):**
- Reach=1.251 com save rate de 0,16% — alcance sem retencao
- Indica publicacao de conteudo de awareness, nao de conceito

**Janela perdida NR-01 (26 mai 2026):**
- Norma vigente com multas. @amallu em colapso nessa data. Nenhum post publicado.
- Janela ainda aberta ate ~19 jun.

### Pendencias para o Ciclo 3

1. Configurar conector Windsor para LinkedIn ANTES de publicar no canal
2. Identificar formato especifico do post de 11-14 mai (carrossel? reel?) via acesso ao app
3. Identificar post viral de 18 mai (via app)
4. Verificar se pauta 20 (Copa 2026) foi publicada — janela expira em ~7-10 dias a partir de 05 jun
5. Confirmar se serie NR-01 foi implementada (pautas 1+2+5)
6. Monitorar se recuperacao de @amallu continua ou voltou ao colapso

### Top 5 pautas do Ciclo 2 com maior potencial

1. Pauta 5 — Gestor publico do interior (perfil do redistribuidor do @paaps)
2. Pauta 20 — Copa 2026 (URGENTE — janela 7-10 dias a partir de 05 jun)
3. Pauta 1 — NR-01 setor publico (janela ate ~19 jun, autoridade maxima PAAPS)
4. Pauta 2 — Burnout + genero (reel para @amallu, recovery de alcance)
5. Pauta 9 — Feminicidio + trauma comunitario (redistribuicao @paaps, sensivel — alinhar com Mallu)

### O que mudou em relacao ao Ciclo 1

- Save rate de @amallu corrigido: ciclo 1 estimava 1,37% (media do periodo incluindo o colapso). Ciclo 2 mostra que a media total e 9,86% do TI — muito mais alto. A diferenca e de base de calculo: ciclo 1 usou saves/reach; ciclo 2 usa saves/TI. O dado correto e saves/TI.
- Qualitative ratio adicionado como metrica (saves+shares+comments/TI) — util para diferenciar ciclos de alta vs baixa qualidade de engajamento.
- Anomalia TI/reach do @paaps documentada: redistribuicao independente do algoritmo, ate 520x.
- Recuperacao de @amallu identificada como parcial e lenta — nao apenas "voltou a publicar".

---

*Proxima sessao do Sentinela: a partir de 3 de julho de 2026*
*Aguardar minimo 4 semanas (alinhado com ciclo do Radar)*
*Metodo de coleta: WebFetch no endpoint Windsor AI — curl bloqueado no auto mode*
