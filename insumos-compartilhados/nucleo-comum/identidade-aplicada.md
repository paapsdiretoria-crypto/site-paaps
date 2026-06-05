# Identidade Visual Aplicada — O Olho do PAAPS

Este arquivo é operacional: descreve o que o **Aplicador Visual** executa e o que o **Crítico de Design** verifica. Cobre paleta, tipografia, elementos decorativos, sistema Periódico e o workflow completo de carrossel no Canva.

**Fonte:** Partes 1, 2, 6 e 11 da skill paaps-brand-design (desmembrada em jun/2026).

---

## 1. DNA Visual — Os Três Tensionamentos

O design PAAPS vive no cruzamento de três tensões que nunca se resolvem completamente:

- **Acadêmico ↔ Acessível** — rigor técnico sem elitismo
- **Institucional ↔ Humano** — estado e comunidade ao mesmo tempo
- **Urgente ↔ Cuidadoso** — não apela ao medo, apela à consciência

**O que a marca NÃO é:**
- Não é startup tech com gradientes azuis
- Não é consultoria corporativa com sans-serif neutra
- Não é ONG com estética de carência
- Não é governo com visual burocrático

---

## 2. Paleta Oficial

**Regra absoluta: sempre usar variáveis CSS. Nunca hardcodar hex. Nunca.**

```css
:root {
  --cor-fundo:     #f5f1e1;  /* off-white arenoso — fundo padrão */
  --cor-marrom:    #442309;  /* marrom escuro — texto principal */
  --cor-terracota: #cb4710;  /* terracota — CTA, urgência, destaque */
  --cor-oliva:     #aea349;  /* oliva/dourado — editorial, secundário */
  --cor-amarelo:   #f7c31c;  /* amarelo — números, acentos vivos */
  --cor-bege-rosa: #bbada2;  /* bege rosado — labels, subtextos */
  --cor-lilas:     #bcb6f2;  /* lilás — card empresas (uso restrito) */
  --cor-branco:    #ffffff;
  --raio: 4px;               /* border-radius PADRÃO — nunca mais */
  --fonte-titulo: 'League Spartan', Arial, sans-serif;
  --fonte-corpo:  'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

**Cor dominante por contexto:**

| Contexto | Cor dominante | Lógica |
|---|---|---|
| Dashboard / relatório | `--cor-oliva` | Editorial, leitura, análise |
| Conteúdo social urgente | `--cor-terracota` | Ação, engajamento, força |
| Site institucional | `--cor-marrom` | Autoridade, credibilidade |
| Periódico / editorial | `--cor-oliva` | Intelectual, curadoria |
| CTA / evento | `--cor-amarelo` | Atenção, destaque máximo |

**Exceção única:** `#25D366` para botão WhatsApp. Nenhuma outra cor fora da paleta.

---

## 3. Tipografia

### League Spartan (Google Fonts, pesos 400–800)
- Headlines, labels, botões, navegação, tags, números grandes
- Sempre `text-transform: uppercase` via CSS
- `letter-spacing` sempre presente: 0.08em (denso) a 0.22em (labels tiny)
- **Nunca usar:** Inter, Roboto, Arial, system-ui como fonte principal

### Helvetica Neue (sistema)
- Corpo de texto, parágrafos, descrições
- `font-weight: 400` apenas

---

## 4. Elementos Decorativos da Marca

### Marcadores coloridos
```html
<span style="width:12px;height:12px;border-radius:2px;background:var(--cor-amarelo);display:inline-block;"></span>
<span style="width:12px;height:12px;border-radius:2px;background:var(--cor-terracota);display:inline-block;"></span>
<span style="width:12px;height:12px;border-radius:2px;background:var(--cor-oliva);display:inline-block;"></span>
```
Ordem canônica no hero: amarelo → terracota → oliva → branco.
`border-radius: 2px` sempre — quadrado-arredondado, não círculo.

### Divisor tricolor (marca editorial)
```html
<div style="display:flex;align-items:center;margin:32px 0;">
  <div style="flex:1;height:2px;background:var(--cor-oliva);"></div>
  <div style="flex:1;height:2px;background:var(--cor-terracota);"></div>
  <div style="flex:1;height:2px;background:var(--cor-amarelo);"></div>
</div>
```

### Grain texture (obrigatório em todo body web)
```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
```
Opacity: 0.03 (sutil) a 0.06 (expressivo). **Nunca remover** — é o que faz a marca parecer impressa, orgânica, real.

---

## 5. Sistema Periódico — Estética Fundacional

O design PAAPS se inspira no **relatório de campo** e no **periódico editorial impresso**. Cada peça parece ter sido projetada para ser impressa e distribuída — mesmo sendo digital. Comunica: seriedade, permanência, profundidade intelectual.

**Referências conceituais:** periódico editorial mensal; relatórios de campo de pesquisadores; jornais de arquitetura e urbanismo; design editorial latino-americano dos anos 80–90.

### Bordas em vez de sombras
```css
/* NUNCA: */
box-shadow: 0 4px 24px rgba(0,0,0,0.1);

/* SEMPRE (periódico): */
border: 1px solid rgba(68,35,9,0.14);
/* Ou dashed para elementos secundários: */
border: 1px dashed rgba(68,35,9,0.2);
```

### Numeração editorial de seções
```css
.secao-num {
  font-family: var(--fonte-titulo);
  font-size: 5rem; font-weight: 800;
  color: rgba(68,35,9,0.05);
  line-height: 1; margin-bottom: -36px;
  letter-spacing: -0.03em;
  pointer-events: none; user-select: none;
}
```

### Header editorial de seção
```html
<div class="sec-editorial">
  <span class="num">01</span>
  <span class="titulo">Indicadores gerais</span>
</div>
```
```css
.sec-editorial { display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; }
.sec-editorial .num { font-family: var(--fonte-titulo); font-size: 0.62rem; font-weight: 800; color: var(--cor-oliva); letter-spacing: 0.08em; }
.sec-editorial .titulo { font-family: var(--fonte-titulo); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: var(--cor-marrom); }
.sec-editorial::after { content: ''; flex: 1; height: 1px; background: rgba(68,35,9,0.14); margin-left: 8px; }
```

### Cards como tabela (gap de 1px vira linha divisória)
```html
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;
            background:rgba(68,35,9,0.12);border:1px solid rgba(68,35,9,0.12);
            border-radius:var(--raio);overflow:hidden;">
  <div style="background:var(--cor-branco);padding:28px 24px;"><!-- card --></div>
</div>
```

### Fundo levemente mais quente (dashboard/relatório)
```css
body { background-color: #f7f3e3; }
```

### Animação de página (não de interface)
```css
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
main { animation: fadeIn 0.5s ease; }
```

---

## 6. Anti-padrões Visuais

### Visual
- ❌ Gradientes roxos/azuis em qualquer elemento
- ❌ `border-radius` maior que 4px em cards/botões
- ❌ Sombras dramáticas no estilo Periódico (usar bordas)
- ❌ Fontes Inter, Roboto, sistema como primária
- ❌ Cores fora da paleta (exceto #25D366 para WhatsApp)
- ❌ Logo colorido em fundo escuro
- ❌ Imagens de stock genérico (handshake, pessoas com laptop sorrindo)
- ❌ Gradientes de texto (texto é sempre cor sólida)

### Copy / Voz
- ❌ Jargão de consultoria corporativa ("entregamos soluções", "potencializamos")
- ❌ Linguagem de ONG caridosa ("ajudamos", "doamos")
- ❌ Números sem contexto territorial (sempre: "em Bela Vista de Minas", "em 5 meses")
- ❌ CTAs genéricos ("Clique aqui", "Saiba mais")

### Estrutura (web)
- ❌ Criar novo breakpoint fora de ≤960px, ≤768px, ≤480px
- ❌ Mais de 4 delays de animação (delay máximo: 0.4s)

---

## 7. Workflow de Carrossel no Canva

### 7.1 Template de referência
- **Design ID:** `DAHLWb1s8U0`
- **Link:** https://www.canva.com/d/g22z-BCKwYcmFQM
- **Dimensões:** 1080×1350px (Instagram portrait)
- **Formato:** fundo preto, texto branco + acento amarelo, foto P&B no terço médio

**Regra:** sempre adicionar novos carrosséis a partir da última página existente, nunca sobrescrever.

### 7.2 Os 8 tipos de slide

| Tipo | Descrição | Elementos editáveis |
|---|---|---|
| 1 — CAPA | Headline grande + foto + sub-headline + contexto + crédito | 5 |
| 2 — AFIRMAÇÃO | Afirmação forte (caps) + dado + corpo + crédito | 5 |
| 3 — CITAÇÃO | Citação direta longa + atribuição + tag + referência | 6 |
| 4 — NÚMERO | Número enorme + headline + detalhe + crédito | 5 |
| 5 — FRASE IMPACTO | Citação curta entre aspas + confirmação | 4 |
| 6 — CONTEXTO EDITORIAL | Afirmação + headline menor + fonte notícia + detalhe + data | 6 |
| 7 — CONTEXTUALIZAÇÃO | Data/período + sub + headline + detalhe + crédito | 6 |
| 8 — MANIFESTO/CTA | Texto grande + tag + crédito | 3 |

**Estrutura visual de cada slide:**
```
┌─────────────────────────────────┐
│  TEXTO SUPERIOR (top: 66–200px) │
│  TEXTO HEADLINE (top: 66–640px) │
│                                 │
│  [FOTO P&B — placeholder]       │  top: ~664, h: ~500
│                                 │
│  TEXTO INFERIOR (top: 760+)     │
│  CRÉDITO (top: ~1260)           │  @paaps.brasil · tema
└─────────────────────────────────┘
```

### 7.3 Passo a passo via MCP Canva

```
1. copy-design
   design_id: DAHLWb1s8U0
   page_numbers: [1, 2, 3, 4, 5, 6, 7, 8]
   → retorna novo design_id (CÓPIA)

2. start-editing-transaction
   design_id: CÓPIA
   → retorna transaction_id + element_ids

3. perform-editing-operations (batch — todos os slides de uma vez)
   Usar find_and_replace_text para CADA região de texto
   ⚠️ NUNCA usar replace_text — perde a formatação por região (amarelo vs branco)
   ⚠️ Cada região de texto é editada separadamente

4. commit-editing-transaction
   → salva todas as edições na CÓPIA

5. merge-designs (modify_existing_design)
   design_id: DAHLWb1s8U0 (original)
   operations: insert_pages — source: CÓPIA, page_numbers: [1..8], after_page_number: [última]
```

**Regras críticas do editor:**
- `find_and_replace_text` preserva a cor/peso de cada região — usar sempre
- `replace_text` sobrescreve tudo com uma cor só — evitar
- O `page_index` no `perform-editing-operations` = índice da PRIMEIRA página sendo editada

### 7.4 Posicionamento de fotos por tipo de slide

| Tipo | top | height | Nota |
|---|---|---|---|
| CAPA (1) | 450 | 450 | terço médio exato |
| AFIRMAÇÃO (2) | 200 | 600 | foto maior, texto comprimido |
| CITAÇÃO (3) | 450 | 400 | foto menor, citação domina |
| NÚMERO (4) | 200 | 380 | foto acima do número |
| FRASE IMPACTO (5) | 400 | 480 | foto full-bleed do meio |
| CONTEXTO EDITORIAL (6) | 550 | 350 | foto menor, muita copy |
| CONTEXTUALIZAÇÃO (7) | 250 | 600 | foto grande |
| MANIFESTO/CTA (8) | 0 | 800 | foto ocupa 60%+ |

### 7.5 Inserção de fotos via MCP Canva

```
1. upload-asset-from-url
   url: [URL direta da imagem]
   → retorna asset_id

2. start-editing-transaction
   design_id: DAHLWb1s8U0

3. perform-editing-operations (insert_fill)
   type: "insert_fill"
   page_id: [ID da página]
   asset_type: "image"
   asset_id: [retornado no passo 1]
   top: [ver tabela acima]
   left: 0
   width: 1080
   height: [ver tabela acima]

4. commit-editing-transaction
```

**Filtro P&B:** aplicar manualmente no Canva web (Editar imagem → Filtros → B&W ou Moonlight). Não há operação de filtro disponível no MCP.

### 7.6 Notas de checagem antes de publicar

- ⚠️ Todo dado precisa de fonte verificável antes de publicar (ver `voz-paaps.md` seção 4.5)
- ⚠️ O dado "+56% em Bela Vista de Minas" é caso real PAAPS — confirmar período e contexto
- ✅ Frases de relato conceitual são posicionamento — ok sem fonte numérica
- ✅ Afirmações estruturais são opinião declarada — ok sem dado

**Regra de entrega:** carrossel é processo iterativo. Entregar primeira rodada e aguardar validação antes de avançar — nunca despejar o lote inteiro de uma vez.
