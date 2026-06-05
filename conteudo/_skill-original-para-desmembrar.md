<!--
╔══════════════════════════════════════════════════════════════╗
║  ⚠ ARQUIVO APOSENTADO — NÃO USAR COMO INSTRUÇÃO ATIVA  ⚠   ║
╚══════════════════════════════════════════════════════════════╝

Este arquivo é a skill paaps-brand-design original, mantido apenas
como referência histórica. Todo o seu conteúdo foi redistribuído em
jun/2026 nos 6 arquivos do nucleo-comum/:

  voz-paaps.md          ← Partes 7 (voz, personas, editorias)
  identidade-aplicada.md ← Partes 1, 2, 6, 11 (design + Canva)
  criterios-design.md   ← Partes 1.4, 2.2, 6 (checklist)
  qualidade-frontend.md ← skill frontend-design destilada
  visual-instagram.md   ← Parte 8 (3 modos visuais)
  mapa-fontes-foto.md   ← Parte 11.4 (fontes de foto)

Se você chegou aqui procurando instruções de design, voz ou Canva:
→ Leia os arquivos acima em insumos-compartilhados/nucleo-comum/
→ Consulte mapa-de-contexto.md na raiz do projeto para saber o que ler

NÃO copie instruções deste arquivo — podem estar desatualizadas
ou conflitar com as versões corrigidas no nucleo-comum.
-->

---
name: paaps-brand-design (APOSENTADO)
description: ARQUIVO APOSENTADO. Use insumos-compartilhados/nucleo-comum/ no lugar.
---

# PAAPS Brand Design Intelligence

Este skill governa a criação de artefatos visuais da marca PAAPS com qualidade de produção e identidade inequívoca. Funciona como sistema de orquestração: detecta o contexto, seleciona a estratégia visual adequada, faz as perguntas certas e coordena a execução com subagentes especializados quando necessário.

---

## PARTE 1 — FUNDAÇÃO DA MARCA

### 1.1 DNA Visual PAAPS

**Posicionamento:** GovTech de Psicologia Social. Não é uma consultoria comum — é a única rede de saúde mental para políticas públicas do Brasil. A identidade visual deve comunicar: **autoridade intelectual + proximidade humana + urgência territorial**.

**Os três tensionamentos visuais da marca:**
- **Acadêmico ↔ Acessível** — rigor técnico sem elitismo
- **Institucional ↔ Humano** — estado e comunidade ao mesmo tempo
- **Urgente ↔ Cuidadoso** — não apela ao medo, apela à consciência

**O que a marca NÃO é:**
- Não é startup tech com gradientes azuis
- Não é consultoria corporativa com sans-serif neutra
- Não é ONG com estética de carência
- Não é governo com visual burocrático

### 1.2 Paleta Oficial (CSS variables — NUNCA hardcodar hex)

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

**Regra de cor dominante por contexto:**
| Contexto | Cor dominante | Lógica |
|---|---|---|
| Dashboard / relatório | `--cor-oliva` | Editorial, leitura, análise |
| Conteúdo social urgente | `--cor-terracota` | Ação, engajamento, força |
| Site institucional | `--cor-marrom` | Autoridade, credibilidade |
| Periódico / editorial | `--cor-oliva` | Intelectual, curadoria |
| CTA / evento | `--cor-amarelo` | Atenção, destaque máximo |

### 1.3 Tipografia

**League Spartan** (Google Fonts, pesos 400–800):
- Headlines, labels, botões, navegação, tags, números grandes
- Sempre `text-transform: uppercase` via CSS
- `letter-spacing` sempre presente: 0.08em (denso) a 0.22em (labels tiny)

**Helvetica Neue** (sistema):
- Corpo de texto, parágrafos, descrições
- `font-weight: 400` apenas

**Nunca usar:** Inter, Roboto, Arial como fonte principal, system-ui

### 1.4 Elementos Decorativos da Marca

**Marcadores coloridos** (identidade visual PAAPS):
```html
<span style="width:12px;height:12px;border-radius:2px;background:var(--cor-amarelo);display:inline-block;"></span>
<span style="width:12px;height:12px;border-radius:2px;background:var(--cor-terracota);display:inline-block;"></span>
<span style="width:12px;height:12px;border-radius:2px;background:var(--cor-oliva);display:inline-block;"></span>
```
Ordem canônica no hero: amarelo → terracota → oliva → branco.
Uso: sempre `border-radius: 2px` (quadrado-arredondado, não círculo).

**Divisor tricolor** (marca editorial):
```html
<div style="display:flex;align-items:center;margin:32px 0;">
  <div style="flex:1;height:2px;background:var(--cor-oliva);"></div>
  <div style="flex:1;height:2px;background:var(--cor-terracota);"></div>
  <div style="flex:1;height:2px;background:var(--cor-amarelo);"></div>
</div>
```

**Grain texture** (obrigatório em todo body):
```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
```
Opacity entre 0.03 (sutil) e 0.06 (expressivo). Nunca remover — é o que faz a marca parecer impressa, orgânica, real.

---

## PARTE 2 — O SISTEMA "PERIÓDICO" (Estética Fundacional)

Esta é a direção estética que define a alma visual PAAPS. Foi desenvolvida na variação `variation-papel.html` e aprovada como referência de identidade.

### 2.1 Conceito Central

O design PAAPS se inspira no **relatório de campo** e no **periódico editorial impresso**. Cada peça visual parece ter sido projetada para ser impressa e distribuída — mesmo sendo digital. Isso comunica: seriedade, permanência, profundidade intelectual.

**Referências conceituais:**
- O Periódico PAAPS (formato editorial mensal da marca)
- Relatórios de campo de pesquisadores sociais
- Jornais de arquitetura e urbanismo (serif + grid rígido + espaço respeitado)
- Design editorial latino-americano dos anos 80–90 (econômico, funcional, sem ornamento vazio)

### 2.2 Decisões de Design do Sistema Periódico

**Bordas em vez de sombras:**
```css
/* NUNCA: */
box-shadow: 0 4px 24px rgba(0,0,0,0.1);

/* SEMPRE (periódico): */
border: 1px solid rgba(68,35,9,0.14);
/* Ou dashed para elementos secundários: */
border: 1px dashed rgba(68,35,9,0.2);
```

**Numeração editorial de seções:**
```css
.secao-num {
  font-family: var(--fonte-titulo);
  font-size: 5rem; font-weight: 800;
  color: rgba(68,35,9,0.05);  /* fantasma — aparece atrás */
  line-height: 1; margin-bottom: -36px;
  letter-spacing: -0.03em;
  pointer-events: none; user-select: none;
}
```

**Header editorial de seção:**
```html
<div class="sec-editorial">
  <span class="num">01</span>      <!-- número pequeno em oliva -->
  <span class="titulo">Indicadores gerais</span>  <!-- label em caps marrom -->
  <!-- linha separadora automática via ::after -->
</div>
```
```css
.sec-editorial {
  display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px;
}
.sec-editorial .num {
  font-family: var(--fonte-titulo); font-size: 0.62rem; font-weight: 800;
  color: var(--cor-oliva); letter-spacing: 0.08em;
}
.sec-editorial .titulo {
  font-family: var(--fonte-titulo); font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.18em; color: var(--cor-marrom);
}
.sec-editorial::after {
  content: ''; flex: 1; height: 1px;
  background: rgba(68,35,9,0.14); margin-left: 8px;
}
```

**Cards como tabela (grid de 1px):**
```html
<!-- Cards unificados sem gap — o background do container faz a linha -->
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;
            background:rgba(68,35,9,0.12);border:1px solid rgba(68,35,9,0.12);
            border-radius:var(--raio);overflow:hidden;">
  <div style="background:var(--cor-branco);padding:28px 24px;"><!-- card --></div>
  <!-- cada div tem background próprio — o 1px de gap vira linha divisória -->
</div>
```

**Heatmap como tabela impressa:**
```css
.hm-cell {
  border: 1px solid rgba(68,35,9,0.12);
  border-radius: 2px;  /* quase quadrado */
  background: rgba(174,163,73,0.06);  /* oliva bem sutil */
}
.hm-cell:hover { border-color: var(--cor-oliva); }
```

**Fundo levemente mais quente:**
```css
body { background-color: #f7f3e3; }  /* 2 graus mais amarelo que --cor-fundo */
```

**Animação de página (não de interface):**
```css
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
main { animation: fadeIn 0.5s ease; }
/* Suave como virar uma página. Nunca slideIn bouncy para este estilo. */
```

---

## PARTE 3 — DETECÇÃO DE CONTEXTO E ESTRATÉGIA

Antes de executar qualquer criação visual, detectar o contexto e aplicar a estratégia correspondente.

### 3.1 Mapa de Contextos

```
CONTEXTO 1 — DASHBOARD / RELATÓRIO INTERNO
  Objetivo: clareza analítica para a equipe PAAPS
  Público: equipe interna (Mallu, equipe técnica)
  Estética: Periódico (sistema 2.x acima)
  Prioridade: legibilidade de dados > impacto visual
  Formato: HTML/CSS/JS com Chart.js

CONTEXTO 2 — CONTEÚDO SOCIAL (Instagram / LinkedIn)
  Objetivo: engajamento, autoridade, território
  Público: gestores públicos, ONGs, empresas com ESG, psicólogos sociais
  Estética: editorial fotográfico + tipografia agressiva
  Prioridade: impacto visual em 0.3s > legibilidade longa
  Formato: HTML para exportar como PNG, ou instruções para Canva

CONTEXTO 3 — SITE INSTITUCIONAL
  Objetivo: conversão (contratar PAAPS), autoridade máxima
  Público: prefeituras, secretarias, ONGs, empresas
  Estética: institucional autoritário + fotografia de campo poderosa
  Prioridade: credibilidade imediata > criatividade
  Formato: HTML/CSS/JS estático

CONTEXTO 4 — PEÇA EDITORIAL (Periódico, Relatório, Proposta)
  Objetivo: profundidade intelectual, posicionamento como referência
  Público: policy makers, acadêmicos, lideranças sociais
  Estética: impresso de alta qualidade
  Prioridade: hierarquia tipográfica > cor
  Formato: HTML para impressão, ou PDF via Canva
```

### 3.2 Perguntas de Detecção (fazer antes de criar)

```
1. Para quem é essa peça? (interno / externo / híbrido)
2. Qual é o objetivo único e principal? (informar / engajar / converter / posicionar)
3. Onde será vista? (tela/dashboard / feed Instagram / LinkedIn / navegador / impressa)
4. Qual é o conteúdo central? (dados / imagem / texto / CTA)
5. Qual dos três segmentos-alvo endereça? (Poder Público / Terceiro Setor / Privado)
6. Existe uma foto potente disponível? (para contextos visuais fotográficos)
7. Qual é o prazo de vida da peça? (efêmero/story / semanas/post / permanente/site)
```

---

## PARTE 4 — REGRAS POR CONTEXTO

### 4.1 Dashboard / Relatório Interno

**Aplicar sistema Periódico completo (Parte 2).**

Adicionalidades específicas:
- Fundo `#f7f3e3` (mais quente que o padrão do site)
- Oliva como cor dominante de acento
- Seções numeradas editorialmente (01, 02, 03…)
- Divisores tricolores entre seções maiores
- Nenhuma sombra de card — apenas bordas finas
- Filter bar minimalista com botões de outline
- Dados ao vivo: usar Chart.js com paleta PAAPS
- Drill-down panel com border dashed, não shadow

**O que NÃO fazer:**
- Não usar fundo branco total (perde a textura orgânica)
- Não usar sombras dramáticas (quebra o tom de relatório)
- Não usar cores saturadas além da paleta
- Não usar mais de 2 pesos de fonte por elemento

### 4.2 Conteúdo Social — Instagram / LinkedIn

**Direção: Editorial Fotográfico + Tipografia Agressiva**

O conteúdo social do PAAPS tem duas camadas:
1. **Fotografia de campo** — imagens reais de intervenções, oficinas, territórios
2. **Tipografia assertiva** — frase de impacto em caps + dado concreto

**Hierarquia visual de um post PAAPS:**
```
1. Imagem de campo (60-70% da área) — real, humana, territorial
2. Faixa de texto (30-40%) — League Spartan, caps, peso 800
3. Logo PAAPS + marcadores coloridos
4. Dado numérico se houver (número enorme em amarelo)
```

**Cores para social:**
- Carrossel educativo: fundo --cor-marrom + texto branco + acento amarelo
- Post de dado/número: fundo --cor-fundo + número enorme + texto marrom
- Reels cover: fotografia de campo + overlay marrom 58% + texto branco
- Stories CTA: fundo --cor-terracota + texto branco + botão branco

**Pesquisa de imagens (quando necessário):**
Ao buscar imagens para posts PAAPS, priorizar:
- Fotografias de reuniões comunitárias, rodas de conversa, oficinas
- Imagens de políticas públicas em prática (saúde, educação, assistência social)
- Fotografia documental brasileira (não stock genérico)
- Paleta natural de peles, tons quentes, ambientes reais
- EVITAR: fotos de escritório, handshakes corporativos, computadores, imagens neutras de stock

**Processo de pesquisa de imagens:**
```
1. Definir o conceito central do post
2. Identificar palavras-chave de busca (tema + território + ação)
3. Fontes preferidas: Unsplash (comunidade/social), arquivo próprio PAAPS (INSUMOS/FOTOS/)
4. Critério de seleção: impacto emocional + autenticidade + qualidade técnica
5. Tratamento: overlay marrom sutil se necessário para contraste
```

### 4.3 Site Institucional

**Direção: Autoridade Máxima + Fotografia de Campo Poderosa**

O site PAAPS deve comunicar em 3 segundos:
> "Esta organização é a referência em saúde mental para políticas públicas. Eles já fizeram. Você pode confiar."

**Pilares do site:**
1. **Hero com foto de campo** — imagem real de intervenção + overlay marrom + frase manifesto
2. **Dados concretos** — números reais (56%, 150%, 5 meses) em amarelo enorme
3. **Prova de território** — municípios reais, equipamentos reais (CRAS, UBS, NASF)
4. **Equipe com rosto** — fotografias reais, não avatares
5. **CTA territorial** — "Agendar conversa gratuita" não "Saiba mais"

**Decisões técnicas do site:**
- `border-radius: 4px` em TUDO — nunca mais arredondado
- Fundo alternado: claro → marrom 4% → claro → marrom escuro → claro → terracota
- Animações de entrada: IntersectionObserver + classe `animar` + `visivel`
- Tipografia de título: `clamp(2.4rem, 5vw, 4rem)`, weight 700, uppercase
- Fotografia: sempre `loading="lazy"` abaixo do fold

---

## PARTE 5 — SISTEMA CLAUDE MANAGED AGENTS

Esta skill coordena um sistema de agentes especializados. O agente principal (este skill) detecta o contexto e instrui os subagentes com o contexto correto.

### 5.1 Arquitetura

```
AGENTE PRINCIPAL (paaps-brand-design)
  ├── Recebe a tarefa
  ├── Detecta o contexto (3.1)
  ├── Faz as perguntas de detecção (3.2)
  ├── Seleciona a estratégia (Parte 4)
  └── Coordena subagentes:
        ├── SUBAGENTE PESQUISA — busca imagens, referências, dados
        ├── SUBAGENTE LAYOUT — cria o artefato HTML/CSS/JS
        ├── SUBAGENTE COPY — redige textos no tom PAAPS
        └── SUBAGENTE QA — verifica identidade visual e funcionalidade
```

### 5.2 Protocolo de Orquestração

**PASSO 1 — Briefing**
Antes de qualquer subagente, o agente principal deve ter respondido:
- [ ] Qual é o contexto? (dashboard / social / site / editorial)
- [ ] Qual é o objetivo único?
- [ ] Qual é o conteúdo central?
- [ ] Existe material visual disponível? (fotos do INSUMOS/, dados reais)

**PASSO 2 — Instrução dos subagentes**
Cada subagente recebe no prompt:
1. O design system completo (Partes 1 e 2)
2. O contexto específico (regras da Parte 4)
3. O artefato a ser criado
4. Quais IDs/classes/estruturas devem ser preservadas (se modificando existente)
5. O arquivo de output esperado

**PASSO 3 — Execução paralela**
Subagentes de pesquisa e layout podem rodar em paralelo quando independentes.
Subagente de copy roda após ter o layout definido.
Subagente de QA roda por último.

**PASSO 4 — QA de identidade visual**
Verificar antes de entregar:
- [ ] Usou variáveis CSS (nunca hex hardcodado)?
- [ ] `border-radius: 4px` em todos os elementos?
- [ ] League Spartan em todos os elementos de interface?
- [ ] Grain texture no body?
- [ ] Nenhuma cor fora da paleta?
- [ ] Hierarquia: marcadores → label-secao → h2 → conteúdo?

### 5.3 Instrução de Subagente (template)

```
Você é um subagente de design PAAPS especializado em [CONTEXTO].

DESIGN SYSTEM: [incluir Parte 1 e 2 completas]
CONTEXTO: [incluir regras da seção 4.x correspondente]
TAREFA: [descrição específica]
OUTPUT: [arquivo esperado, path absoluto]
RESTRIÇÕES: [IDs a preservar, scripts a carregar, etc.]
QUALIDADE: Não entregue código genérico. Cada decisão visual deve ser intencional e alinhada ao DNA da marca PAAPS.
```

---

## PARTE 6 — ANTI-PADRÕES (nunca fazer)

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

### Estrutura
- ❌ Criar novo breakpoint fora de ≤960px, ≤768px, ≤480px
- ❌ Sombra de card no estilo Periódico
- ❌ Mais de 4 delays de animação (delay máximo: 0.4s)
- ❌ Subagentes sem o design system completo no contexto

---

## PARTE 7 — VOZ E POSICIONAMENTO (do Notion Instagram PAAPS)

### 7.1 Tom de Voz — Regras Absolutas

**5 adjetivos da marca:** integradora · urgente · rigorosa · afetiva · propositiva

**Como se fala:**
- Nomeia o que o mundo prefere silenciar
- Fala sobre o que atravessa — não sobre o que vai agradar
- Ironia precisa somente quando cabível (sarcasmo contido, nunca cínico)
- Pergunta estrutural ou notícia como abertura de carrossel
- Tipografia militante sobre **foto real**: frase-manifesto em texto grande, legível por contraste

**Como NÃO se fala:**
- ❌ Autoajuda neoliberal, meritocracia implícita, individualismo
- ❌ Causalidade simplista ("esse conflito acontece PORQUE fulano tem TDAH")
- ❌ Academicismo excessivo (fugir do lugar de quem "estuda" o outro)
- ❌ Tom de ONG que pede compaixão, doação, projeto voluntário
- ❌ Linguagem corporativa morna, sem brasilidade

### 7.2 Personas (para calibrar tom e visual)

**Cláudia Martins — Gestora pública (persona principal):**
- Secretária de Saúde/Assistência Social, 45–60 anos, interior de Minas
- Equipe exausta, emocionalmente adoecida, pressionada por limite político
- Diz: *"Não quero mais um relatório bonito."*
- Medo: ser criticada por investir em "cuidado" em vez de "obra"
- O que a PAAPS deve comunicar para ela: **"Nós fomos ao campo. Funcionou. Podemos fazer com você."**

**RH Genuíno — Persona secundária:**
- 30–45 anos, psicóloga/gestora de pessoas em org pública, OSC ou empresa de impacto
- Busca leitura sistêmica, não hacks de engajamento
- Solitária no diagnóstico que faz
- O que a PAAPS deve comunicar: **"Sua leitura está certa. Temos o método."**

**Psicóloga de rede pública — Persona terciária:**
- CAPS, CRAS, UBS, NASF
- Quer ver o trabalho dela nomeado em público
- O que a PAAPS deve comunicar: **"Seu trabalho existe e importa. Nós o vemos."**

### 7.3 5 Editorias do Instagram PAAPS

| # | Editoria | Formato preferido | Diretriz |
|---|---|---|---|
| 1 | Notícias & atualidades | Carrossel estrutural | Abre com pergunta — nunca manchete nua |
| 2 | Conceitos de psicologia social | Carrossel salvável + tipografia militante | 1 conceito por post, aterra em caso real |
| 3 | Nossos atores: histórias de pessoas | Foto real + citação direta | Legenda nomeia o sistema, não romantiza |
| 4 | Rede pública: reflexões | Reel ou carrossel-manifesto | Encerra com proposta ou pergunta — nunca denúncia seca |
| 5 | Projetos & eventos PAAPS | Máx 1 a cada 5 posts | Case entra como evidência, não vitrine |

---

## PARTE 8 — SISTEMA VISUAL INSTAGRAM (3 MODOS)

Baseado na análise das referências (@despatologiza, @otrabalhoemanalise, @terabrigo, @prapretopsi) e nas imagens de referência aprovadas.

A relação entre fotografia e tipografia no Instagram PAAPS **não é hierárquica — é fusão**. Os dois criam sentido juntos. Mas o *ponto de entrada* (o que o olho vê primeiro) muda por modo:

### MODO 1 — PALAVRA-MANIFESTO
**Referência principal: @despatologiza**
**Imagem de referência aprovada:** "DIMINUIR PRA CABER" — fundo bege, tipografia enorme em quase toda a tela, foto P&B pequena centralizada no meio do texto.

```
ESTRUTURA:
  ┌──────────────────────┐
  │                      │
  │   FRASE              │  ← League Spartan 800, ~70-80pt equivalente
  │   IMPACTANTE         │     uppercase, quase sangrando nas bordas
  │   EM GRANDE          │
  │  [foto P&B]          │  ← foto pequena, B&W, "testemunha" do texto
  │   CONTINUA           │
  │                      │
  └──────────────────────┘
Fundo: --cor-fundo (#f5f1e1) ou marrom
Logo PAAPS: discreto, canto inferior
```

**Quando usar:** posts conceituais, nomeação do que o mercado silencia, statements políticos
**Emoção visada:** reconhecimento + choque de precisão
**Cores:** fundo bege ou marrom + texto marrom ou branco. Amarelo NUNCA como fundo neste modo.

### MODO 2 — FOTO-DOCUMENTO
**Referência principal: @prapretopsi, fotos de campo PAAPS**
**Imagem de referência aprovada:** mulher negra idosa rindo, foto P&B, texto como textura repetida ao fundo.

```
ESTRUTURA:
  ┌──────────────────────┐
  │   TEXTO COMO         │  ← texto repetido como padrão/textura de fundo
  │   FRASE QU TEXTO     │     ("Vá cultivando a semente até que um dia...")
  │   [FOTO REAL]        │  ← foto protagonista, real, territorial
  │   COMO TEXTO         │     P&B ou com overlay marrom 58%
  │   FRASE COMO         │
  └──────────────────────┘
  OU:
  ┌──────────────────────┐
  │  [FOTO REAL grande]  │  ← foto ocupa 60-70% do frame
  │  ──────────────────  │  ← faixa marrom ou terracota
  │  FRASE EM CAPS       │  ← texto branco, League Spartan 700
  └──────────────────────┘
```

**Quando usar:** histórias de pessoas reais, campo, casos territoriais
**Emoção visada:** humanidade + urgência afetiva
**Fotos:** reais, de campo, nunca stock genérico. Acervo PAAPS em INSUMOS/FOTOS/.

### MODO 3 — CARROSSEL ESTRUTURAL
**Referência principal: @terabrigo, @otrabalhoemanalise**

```
SLIDE 1 (capa):
  Pergunta estrutural ou dado chocante
  Tipografia apenas. Sem foto. Fundo --cor-marrom ou --cor-fundo.
  "O que acontece com quem cuida dos outros o dia todo?"

SLIDES 2-N (desenvolvimento):
  Alternância: slide de conceito/texto + slide de foto de campo
  Cada slide: 1 ideia só. Legível em 3 segundos.

SLIDE FINAL (CTA ou proposição):
  Nunca "siga o perfil". Sempre proposição real:
  "O que você vê na sua equipe?"  ou  "Link na bio para conversa gratuita."
```

**Quando usar:** conteúdo educativo, leitura de notícia/contexto, conceitos de psicologia social
**Emoção visada:** curiosidade → reconhecimento → ação

### 8.1 Regras fotográficas universais para o Instagram PAAPS

- **Sempre P&B ou com tratamento de cor contido** — nunca filtros saturados
- **Fotos de campo em prioridade** sobre qualquer stock
- **Pessoas reais, ambientes reais** — reuniões, rodas de conversa, territórios, equipamentos públicos
- **Nunca**: handshake, laptop aberto, pessoa sorrindo para câmera em escritório branco
- **Quando não há foto**: tipografia como protagonista absoluta (Modo 1)
- **Escala humana**: rostos, mãos, detalhes do cotidiano do cuidado

---

## PARTE 9 — SENSAÇÕES-ALVO POR CONTEXTO

### Dashboard (equipe interna)
**Sensação:** *"Este é meu aliado estratégico de manhã."*
Não clareza fria. Não relatório chato. O dashboard fala como um parceiro que leu os dados, identificou o que importa, e apresenta com cuidado — sempre apontando para ação e melhoria. Insights proativos. Linguagem de quem quer genuinamente o crescimento do impacto social.

Implicações visuais:
- Seções com títulos que parecem notas de campo ("01 · O que aconteceu essa semana")
- Insights textuais que usam o tom de voz PAAPS (não "CTR aumentou 12%" mas "o post sobre adoecimento institucional teve 3x mais saves — esse tema ressoa")
- Não austero demais — tem alma

### Site institucional
**Sensação (primeiros 3 segundos):** *Curiosidade — é tão bom que não parece verdade. Esperança — ainda existem projetos voltados à rede pública com boas intenções e íntegros.*

Implicações visuais:
- Hero com foto de campo real e poderosa — não produzida, real
- Frase que não vende: afirma um mundo que deveria existir
- Nenhum elemento que grite "clique aqui" — o site convida, não empurra
- Prova de território imediata: município, resultado, tempo
- Escala humana: rosto real, nome real, cidade real

### Instagram
**Sensação:** *Reconhecimento + choque de precisão.*
"Alguém finalmente nomeou isso."

---

## PARTE 10 — PERGUNTAS VIVAS (a responder nas próximas iterações)

- [ ] Como o design muda quando o público-alvo é Poder Público vs Empresas privadas?
- [ ] O Periódico PAAPS impresso tem tipografia diferente do site? Como transpor isso?
- [ ] Qual é a proporção certa de posts institucionais (cases) vs editoriais no feed?
- [ ] O LinkedIn PAAPS segue o mesmo sistema visual ou tem variações?
- [ ] Como o modo visual muda para @amalluvasconcellos vs @paaps.brasil?

---

## PARTE 11 — WORKFLOW DE PRODUÇÃO DE CARROSSEL (Canva + Flickr)

Esta seção documenta o processo completo de produção de carrosséis para Instagram usando o template Canva e fotos do acervo do Ministério da Saúde no Flickr.

### 11.1 Template Canva — Design de referência

**Design ID:** `DAHLWb1s8U0`  
**Link de edição:** https://www.canva.com/d/g22z-BCKwYcmFQM  
**Dimensões:** 1080×1350px (Instagram portrait)  
**Formato:** Fundo preto, texto branco + acento amarelo, foto P&B no terço médio

**Estrutura atual do arquivo (jun/2026):**
- Slides 01–08: Carrossel "Hospital Colônia de Barbacena" — modelo de referência visual
- Slides 09–16: Carrossel "Saúde mental dos trabalhadores da saúde pública" — em produção

**REGRA:** Sempre adicionar novos carrosséis a partir da última página existente, nunca sobrescrever. Registrar o número da última página antes de iniciar.

### 11.2 Mapeamento dos 8 tipos de slide

Cada carrossel usa os mesmos 8 tipos de slide, nessa ordem. Para criar um novo carrossel: copiar as páginas correspondentes do design original e editar os textos.

| Tipo | Descrição | Template (página original) | Elementos editáveis |
|---|---|---|---|
| **1 — CAPA** | Headline grande + foto + sub-headline + contexto + crédito | Página 1 | 5 elementos de texto |
| **2 — AFIRMAÇÃO** | Afirmação forte (caps) + dado + corpo + crédito | Página 2 | 5 elementos |
| **3 — CITAÇÃO** | Citação direta longa + atribuição + tag + referência | Página 3 | 6 elementos |
| **4 — NÚMERO** | Número enorme + headline + detalhe + crédito | Página 4 | 5 elementos |
| **5 — FRASE IMPACTO** | Citação curta entre aspas + confirmação | Página 5 | 4 elementos |
| **6 — CONTEXTO EDITORIAL** | Afirmação + headline menor + fonte notícia + detalhe + data | Página 6 | 6 elementos |
| **7 — CONTEXTUALIZAÇÃO** | Data/período + sub + headline + detalhe + crédito | Página 7 | 6 elementos |
| **8 — MANIFESTO/CTA** | Texto grande + tag + crédito | Página 8 | 3 elementos |

**Estrutura visual de cada slide:**
```
┌─────────────────────────────────┐
│  TEXTO SUPERIOR (top: 66–200px) │  ← headline ou citação topo
│  TEXTO HEADLINE (top: 66–640px) │  ← headline grande, caps, branco+amarelo
│                                 │
│  [FOTO P&B — placeholder text]  │  ← foto no terço médio (~top:400, h:~500)
│  top: ~664 (centro do slide)    │
│                                 │
│  TEXTO INFERIOR (top: 760+)     │  ← dado, detalhe, contexto
│  CRÉDITO (top: ~1260)           │  ← @paaps.brasil · tema
└─────────────────────────────────┘
```

### 11.3 Workflow de texto via Canva MCP

**Passo a passo para criar um novo carrossel:**

```
1. copy-design
   design_id: DAHLWb1s8U0
   page_numbers: [1, 2, 3, 4, 5, 6, 7, 8]
   → retorna novo design_id (CÓPIA)

2. start-editing-transaction
   design_id: CÓPIA
   → retorna transaction_id + element_ids de todas as páginas

3. perform-editing-operations (batch — todos os slides de uma vez)
   Usar find_and_replace_text para CADA região de texto
   ⚠️ Cada região de texto é editada separadamente (regiões = runs de formatação diferente)
   ⚠️ NUNCA usar replace_text — perde a formatação por região (amarelo vs branco)

4. commit-editing-transaction
   → salva todas as edições na CÓPIA

5. merge-designs (modify_existing_design)
   design_id: DAHLWb1s8U0 (original)
   operations: insert_pages — source: CÓPIA, page_numbers: [1..8], after_page_number: [última]
   → insere os 8 novos slides no final do arquivo original
```

**Regras críticas do editor:**
- Cada elemento de texto pode ter múltiplas **regiões** (runs) — branco e amarelo são regiões separadas
- `find_and_replace_text` preserva a cor/peso de cada região — usar sempre
- `replace_text` sobrescreve todo o elemento com uma cor só — evitar
- O `page_index` no `perform-editing-operations` deve ser o índice da PRIMEIRA página sendo editada
- Sempre passar o array `pages` correto (vem do `start-editing-transaction`)

### 11.4 Fontes de imagem — Flickr Ministério da Saúde

**Acervo principal:** https://www.flickr.com/photos/ministeriodasaude/  
**Volume:** ~200.000 fotos, acervo desde 2009  
**Conta de acesso PAAPS:** paapsdiretoria@gmail.com  
**Fotógrafo de referência:** Radilson Carlos Gomes (acervo do Colônia de Barbacena)

**Como navegar o acervo:**
- Álbuns: https://www.flickr.com/photos/ministeriodasaude/albums
- Há 107+ páginas de álbuns — os mais recentes têm fotos de visitas ministeriais
- Para temas específicos (CAPS, atenção básica): navegar álbuns manualmente por data/contexto
- A busca por texto no Flickr é limitada via fetch — usar browser quando possível

**Padrão de URL da imagem direta:**
```
https://live.staticflickr.com/65535/[photo_id]_[hash]_b.jpg
```
- Sufixos de tamanho: `_b` = 1024px (bom para Canva), `_k` = 2048px (máxima qualidade)
- Para obter a URL: acessar página individual da foto → inspecionar o `<img>` ou usar "Download"
- Exemplo real: `https://live.staticflickr.com/65535/55310800631_c90bf10671_b.jpg`

**Critérios de seleção de foto:**
- Pessoas reais em ambientes de saúde pública (UBS, CAPS, CRAS, corredor, reunião)
- Escala humana: rostos, mãos, momentos do cotidiano do cuidado
- Preferir fotos que funcionam bem em P&B (aplicar filtro grayscale no Canva)
- EVITAR: foto posada, evento ministerial formal, autoridades em palanque

### 11.5 Workflow de inserção de fotos via Canva MCP

Após ter a URL direta da imagem no Flickr:

```
1. upload-asset-from-url
   url: [URL direta da imagem .jpg do Flickr]
   → retorna asset_id

2. start-editing-transaction
   design_id: DAHLWb1s8U0

3. perform-editing-operations (insert_fill)
   type: "insert_fill"
   page_id: [ID da página onde inserir]
   asset_type: "image"
   asset_id: [retornado no passo 1]
   top: 400    ← posição vertical início da foto
   left: 0
   width: 1080
   height: 500  ← ajustar conforme composição do slide

4. commit-editing-transaction
```

**Posicionamento padrão por tipo de slide:**

| Tipo de slide | top | height | Nota |
|---|---|---|---|
| CAPA (tipo 1) | 450 | 450 | terço médio exato |
| AFIRMAÇÃO (tipo 2) | 200 | 600 | foto maior, texto comprimido |
| CITAÇÃO (tipo 3) | 450 | 400 | foto menor, citação domina |
| NÚMERO (tipo 4) | 200 | 380 | foto acima do número |
| FRASE IMPACTO (tipo 5) | 400 | 480 | foto full-bleed do meio |
| CONTEXTO EDITORIAL (tipo 6) | 550 | 350 | foto menor, muita copy |
| CONTEXTUALIZAÇÃO (tipo 7) | 250 | 600 | foto grande com texto topo/base |
| MANIFESTO/CTA (tipo 8) | 0 | 800 | foto ocupa 60%+ do slide |

**Aplicação de filtro P&B no Canva:**
- No Canva web: selecionar imagem → Editar imagem → Filtros → B&W ou Moonlight
- Via API: não há operação de filtro disponível no MCP — aplicar manualmente no Canva

### 11.6 Placeholder de fotos (texto indicador)

Em cada slide, o texto placeholder indica:
- **Tipo de enquadramento:** RETRATO P&B / FOTO P&B / FOTO P&B SÉPIA
- **Sugestão de conteúdo:** o que fotografar ou buscar
- **Exemplo:** `RETRATO P&B — PROFISSIONAL EM PAUSA / CORREDOR DE UBS`

Este texto aparece sutilmente no meio do slide (font-size pequeno, opacidade baixa). **Deve ser substituído pela foto real antes de publicar.** Não é visível ao público — é uma nota de produção.

### 11.7 Notas de copy e dados (pendências para refinamento)

- ⚠️ Dados devem ser verificados antes da publicação — sempre citar fonte explícita
- ⚠️ O dado "56%" (redução em afastamentos em Bela Vista de Minas) é um caso real PAAPS — confirmar período e contexto antes de usar
- ⚠️ Frases de impacto tipo "1ª causa de afastamento" precisam de fonte: INSS/DATAPREV por CID
- ✅ Frases de relato ("A gente aprende que não pode chorar...") são conceituais — ok sem fonte
- ✅ Afirmações estruturais ("quando a gestão ignora... a rede inteira adoece") são posicionamento — ok sem dado

**Tom de copy nos slides:**
- Manchete: naming direto, sem retórica vazia
- Citação: real ou conceitual — nunca inventada, sempre atribuída
- Dado: territorial + tempo sempre ("em Bela Vista de Minas, em 5 meses")
- CTA: proposição, não apelo ("O que o seu município está fazendo?")
- Crédito: `@paaps.brasil · [tema do carrossel]`
