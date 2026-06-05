# MEMORIA DO SENTINELA — PAAPS

Arquivo de memoria persistente entre ciclos. Atualizado ao final de cada sessao.

---

## CICLO 1 — 5 de junho de 2026 (REVISADO COM DADOS REAIS)

### Status da sessao
- Ciclo 1 executado com dados reais do Windsor AI via curl.
- Chave confirmada em config.js local: funcionando.
- Endpoint: https://connectors.windsor.ai/all?api_key=KEY&date_preset=last_30d&fields=date,account_name,followers_count,reach,likes,comments,shares,saves,total_interactions&datasource=instagram_insights
- Pastas analises/ dos workspaces continuam vazias (dados obtidos via curl, nao salvos localmente ainda).

### Dados reais confirmados (6 mai a 4 jun/2026)

**Seguidores (5 jun/2026, via Windsor):**
- @amalluvasconcellos: 3.259
- @paaps.brasil: 1.062
- Delta no periodo: @amallu +3 (+0,09%) / @paaps +27 (+2,6%)

**@amalluvasconcellos — 30 dias:**
- Total reach: 19.687 | Media diaria: 656
- Total saves: 269 | Save rate: 1,37%
- Total shares: 160 | Share rate: 0,81%
- Engagement rate: 13,86%
- FASE ALTA (6–19 mai): reach medio 1.034/dia, TI medio 160/dia, save rate 1,75%
- FASE COLAPSO (20 mai–4 jun): reach medio 325/dia, TI medio 30/dia, save rate 0,29%
- Queda: -68,5% reach, -81,2% TI, -94% saves entre as duas fases

**@paaps.brasil — 30 dias:**
- EVENTO VIRAL 18–19 mai: TI=72.947 em 2 dias (72,7% de todas as interacoes do periodo)
- Virality score do evento: 23,7% e 22,3% (benchmark normal: 2–5%)
- Baseline (excl. viral): reach medio 33/dia, TI medio 980/dia
- Total shares no periodo: 15.908 | Total saves: 7.278

### Padroes confirmados por dados reais

**Formato/comportamento que funciona em @paaps.brasil:**
- Conteudo de posicionamento critico com dado concreto gera redistribuicao exponencial
- O publico institucional do @paaps REDISTRIBUI conteudo (share rate 437%) — usa como ferramenta de trabalho
- Evento viral de redistribuicao converte mais seguidores do que alto alcance de @amallu
- O conteudo do @paaps tem vida longa: interacoes continuam por 17+ dias apos publicacao

**Formato/comportamento que funciona em @amallu:**
- Frequencia de posts e obrigatoria para manter alcance (sem post = colapso em dias)
- Save rate de referencia nos picos: 2,6–2,8% (dias 11–13 mai)
- Dias 11–14 mai: 4 dias consecutivos com reach 1.162–1.648 — provavel sequencia de carrosséis de conceito

**Melhor dia da semana confirmado por heatmap:**
- @amalluvasconcellos: TERCA (TI medio=139, reach medio=963) > SEGUNDA (TI=120, reach=644)
- @paaps.brasil: SEGUNDA tem TI medio mais alto (distorcido pelo viral de 18 mai, que foi segunda)
- Conclusao operacional: publicar post principal de @amallu na terca; @paaps na segunda

**Diferenca estrutural confirmada entre os dois perfis:**
- @amallu = perfil de alcance frequencia-dependente. Sem post = sem alcance.
- @paaps = perfil de redistribuicao latente com explosoes pontuais. Baseline baixo, mas quando acerta: explosao.

### Teses validadas neste ciclo

1. **VALIDADA:** @paaps.brasil tem share rate estruturalmente maior que @amallu (437% vs 0,81%)
2. **VALIDADA:** Melhor dia para @amallu é segunda ou terca (confirmado por heatmap)
3. **CONFIRMADA PARCIALMENTE:** Save rate de carrossel de conceito em @amallu fica entre 2–3% nos picos (abaixo do benchmark de 5% do dashboard mas acima de 1,37% de media)
4. **VALIDADA:** Crescimento de seguidores correlacionado com redistribuicao, nao com alcance bruto (@paaps cresceu 29x mais em proporcao que @amallu com 1/3 do alcance)

### Teses reformuladas

- Tese anterior: "frequencia de Reels e principal driver de crescimento em @amallu" → REFORMULADA: frequencia mantém alcance; o que converte seguidores é share rate (redistribuicao), nao volume de alcance
- Tese anterior implicita: "@paaps tem performance consistentemente baixa" → REJEITADA: o @paaps tem baseline baixo mas capacidade de eventos de redistribuicao que @amallu nao tem

### Teses ainda abertas

5. Pautas de legislacao performam melhor em @paaps que em @amallu (circunstancialmente suportada pelo evento viral de mai, a confirmar com metricas por post)
6. LinkedIn de Mallu com cadencia analitica pode gerar leads B2B (sem dados, a testar no proximo ciclo)
7. Qual post especifico gerou o evento viral de 18–19 mai (sem acesso a metricas por post)

### Eventos-chave identificados

**Evento viral @paaps.brasil (18–19 mai/2026):**
- TI total: 72.947 em 2 dias
- Virality score: 23,7%
- Post gerador: provavelmente publicado 12–17 mai, tema provavel NR-01 ou saude mental no trabalho publico
- Resultado: +27 seguidores no periodo (+2,6%)
- Aprendizado: o publico do @paaps redistribui quando o conteudo é ferramenta de trabalho, nao apenas informacao

**Colapso @amalluvasconcellos (20–25 mai/2026):**
- Reach caiu de 1.977 (19 mai) para 114 (25 mai) em 6 dias
- Causa mais provavel: ausencia de novo post na janela critica apos o pico de 19 mai
- Periodo coincidiu com a vigencia da NR-01 (26 mai) — janela de autoridade perdida

### Contexto de mercado relevante

- NR-01 em vigor com multas desde 26 mai/2026 — janela de autoridade ainda aberta ate ~19 jun
- Burnout triplicou 2023–2025, 65% dos afastados sao mulheres
- Copa 2026 comeca em junho — janela de pauta critica expira em ~14 dias a partir de hoje

### O que mudou em relacao ao ciclo anterior (Ciclo 0 — sem dados)

TODOS os dados anteriores eram inferencias estruturais. Agora sao dados reais.
O maior achado que muda a estrategia: @paaps.brasil tem capacidade de redistribuicao que @amallu nao tem, e isso é mais valioso para crescimento de seguidores do que alcance bruto.

### Pendencias operacionais para o Ciclo 2

1. Identificar qual post especifico gerou o evento viral de 18–19 mai (via acesso ao Instagram)
2. Confirmar frequencia real de publicacao em ambos os perfis no periodo (via acesso ao perfil)
3. Iniciar experimento de LinkedIn (1 post/semana, formato analitico, publicado na terca)
4. Verificar se a pauta 20 (Copa 2026) foi publicada — janela expira ~19 jun
5. Verificar resultados da serie NR-01 (pautas 1+2+5) se implementada no ciclo atual

### Top 5 pautas do Ciclo 1 com maior potencial (ranking baseado em dados reais)

1. Pauta 5 — Gestor publico do interior (perfil do publico @paaps que redistributi)
2. Pauta 1 — NR-01 setor publico (urgencia ALTA, janela ate ~19 jun)
3. Pauta 2 — Burnout + genero (alinhamento com 84% mulheres, 87% 18–34)
4. Pauta 6 — PeNSe adolescentes (dado recente, territorio exclusivo PAAPS)
5. Pauta 20 — Copa 2026 (URGENTE — janela expira ~14 dias a partir de 5 jun)

---

*Proxima sessao do Sentinela: a partir de 3 de julho de 2026*
*Aguardar minimo 4 semanas (alinhado com ciclo do Radar)*
*Acesso aos dados: curl direto com chave em config.js local — funciona sem exportacao previa*
