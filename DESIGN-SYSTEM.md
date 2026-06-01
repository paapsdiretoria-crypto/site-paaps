# DESIGN SYSTEM PAAPS — v1.0
**Fundação de Marca · Sistema Visual · Componentes · Regras Anti-Erro**

> Documento gerado a partir de análise cruzada dos arquivos do site (`paaps-site/`), dos 25+ designs do Canva (pasta FAFr38vYHlc), dos assets em `INSUMOS/` e documentos de referência. Última atualização: junho/2026.

---

## ÍNDICE

1. [Fundação da Marca](#1-fundação-da-marca)
2. [Sistema de Cores](#2-sistema-de-cores)
3. [Sistema Tipográfico](#3-sistema-tipográfico)
4. [Sistema de Espaçamento](#4-sistema-de-espaçamento)
5. [Componentes Web](#5-componentes-web)
6. [Sistema de Layout e Grid](#6-sistema-de-layout-e-grid)
7. [Sistema de Animação](#7-sistema-de-animação)
8. [Linguagem Visual Cross-Canal (Canva)](#8-linguagem-visual-cross-canal-canva)
9. [Assets e Inventário](#9-assets-e-inventário)
10. [Voz, Tom e Padrões de Copy](#10-voz-tom-e-padrões-de-copy)
11. [Anti-Padrões e Regras de Ouro](#11-anti-padrões-e-regras-de-ouro)
12. [Equipe e Conteúdo Institucional](#12-equipe-e-conteúdo-institucional)

---

## 1. FUNDAÇÃO DA MARCA

### 1.1 Posicionamento

**Nome completo:** Programa de Aceleração Ativa de Projetos Sociais  
**Sigla:** PAAPS  
**Tagline principal:** "Psicologia Social para Políticas Públicas"  
**Posicionamento de mercado:** Startup GovTech especializada em Psicologia Social do Trabalho  
**Razão social:** DIGGING DESENVOLVIMENTO E CAPACITAÇÃO ORGANIZACIONAL E INDIVIDUAL LTDA  
**CNPJ:** 05.983.700/0001-67  
**Fundação:** 2014  

**Proposta de valor central:**  
"A rede de saúde mental para as políticas públicas do futuro."

**Tese institucional:**  
"A Saúde Mental não pode ser reduzida a atendimento individual em escala; exige dispositivos coletivos, visão/educação de rede e gestão de risco psicossocial no trabalho."

### 1.2 Sistema Simbólico da Marca

A PAAPS possui três símbolos conceituais estruturantes que devem aparecer em aplicações editoriais e de alto impacto:

| Símbolo | Significado |
|---|---|
| **NÓ** | Ponto de encontro, vínculo que une |
| **REDE** | A trama de relações, o território como sistema |
| **ELO** | Ligação entre indivíduo e coletivo, entre serviço e impacto |

**Outros eixos simbólicos:**
- RESGATE DE SENTIDO / SUBJETIVIDADE (identidade psicológica da marca)
- A JORNADA PAAPS: DO INDIVÍDUO AO TERRITÓRIO (arco narrativo)
- GOVTECH (posicionamento de inovação no setor público)

### 1.3 Os Três Segmentos-Alvo (com cor correspondente)

| Segmento | Cor do Card | Descrição |
|---|---|---|
| **Poder Público / Prefeituras** | `--cor-terracota` | ESF, NASF, AEE, RAPS, Assistência Social |
| **Terceiro Setor / ONGs** | `--cor-oliva` | ONGs com sede presencial, projetos sociais |
| **Setor Privado / Empresas** | `--cor-lilas` | ESG, presença territorial, comunidades |

### 1.4 Frase Manifesto

> "QUEM CUIDA DE QUEM FAZ A REDE PÚBLICA ACONTECER?"

Aparece na faixa entre o hero e a esteira de logos. Sempre: fundo marrom, texto amarelo, caps, League Spartan.

---

## 2. SISTEMA DE CORES

### 2.1 Paleta Primária

Nunca usar valores HEX hardcodados no CSS. Sempre usar as variáveis CSS definidas em `:root`.

```css
:root {
  --cor-fundo:     #f5f1e1; /* off-white arenoso — fundo padrão de todas as páginas */
  --cor-marrom:    #442309; /* marrom escuro — texto principal, seção escura, footer */
  --cor-terracota: #cb4710; /* terracota — CTA primário, destaques, links, ícones */
  --cor-oliva:     #aea349; /* oliva/dourado — destaque secundário, seção case */
  --cor-amarelo:   #f7c31c; /* amarelo vibrante — números grandes, faixa manifesto */
  --cor-bege-rosa: #bbada2; /* bege rosado — labels, subtextos suaves, separadores */
  --cor-lilas:     #bcb6f2; /* lilás — card trilha empresas/ESG */
  --cor-branco:    #ffffff; /* branco puro — seções brancas, botão branco */
}
```

### 2.2 Regras de Combinação Cor × Fundo

| Fundo | Cor de texto principal | Labels/subtextos | CTAs/links |
|---|---|---|---|
| `--cor-fundo` (#f5f1e1) | `--cor-marrom` | `--cor-bege-rosa` | `--cor-terracota` |
| `--cor-marrom` | `--cor-branco` | `rgba(255,255,255,0.65)` | `--cor-amarelo` |
| `--cor-terracota` | `--cor-branco` | `rgba(255,255,255,0.82)` | `--cor-branco` |
| `--cor-oliva` | `--cor-branco` | `rgba(255,255,255,0.6)` | `--cor-branco` |
| `--cor-amarelo` | `--cor-marrom` | `--cor-marrom` | `--cor-marrom` |
| `--cor-branco` | `--cor-marrom` | `rgba(68,35,9,0.7)` | `--cor-terracota` |

### 2.3 Opacidades Padrão

Estas são as opacidades usadas sistematicamente — nunca inventar novas sem verificar esta tabela:

| Uso | Valor |
|---|---|
| Overlay hero (foto escurecida) | `rgba(68,35,9,0.58)` |
| Overlay mobile drawer | `rgba(68,35,9,0.4)` |
| Texto de corpo em fundo claro | `rgba(68,35,9,0.72)` a `rgba(68,35,9,0.8)` |
| Texto de corpo em fundo escuro | `rgba(255,255,255,0.75)` a `rgba(255,255,255,0.88)` |
| Labels em fundo escuro | `rgba(255,255,255,0.65)` |
| Separadores/bordas sutis | `rgba(187,173,162,0.3)` |
| Links no footer | `opacity: 0.82` |
| Card equipe no escuro | `rgba(255,255,255,0.06)` (fundo) / `rgba(255,255,255,0.12)` (borda) |
| Tag de card escuro | cor amarelo a `opacity: 0.7` |

### 2.4 Sombras

```css
--sombra: 0 4px 24px rgba(68,35,9,0.10);  /* sombra padrão de cards */
/* Hover em cards: */
box-shadow: 0 12px 40px rgba(68,35,9,0.15);
/* Header com scroll: */
box-shadow: 0 4px 32px rgba(68,35,9,0.14);
```

### 2.5 Cor adicional identificada nas texturas/gradientes (INSUMOS)

Os arquivos de textura e gradiente em `INSUMOS/IDENTIDADE VISUAL/` revelam duas cores da identidade que **não têm variável CSS no site atual** mas fazem parte da paleta completa da marca:

| Cor | Uso nos assets | CSS equivalente aproximado |
|---|---|---|
| **Cinza** | Textura 1-5 cinza, Gradiente Cinza | — (não usado no site) |
| **Verde** | Textura 1-5 verde, Gradiente Verde, Pontinhos verde+amarelo | Próximo de `--cor-oliva` (#aea349) |

> O "verde" dos INSUMOS pode ser a mesma cor `--cor-oliva` já definida, ou uma variante mais fria. Verificar a `Paaps - Paleta de Cor.jpg` para confirmar os HEX exatos. O cinza não tem equivalente no CSS e deve ser tratado como cor de aplicação offline/impressa apenas.

### 2.6 Cor externa única (fora da paleta)

```css
#25D366  /* verde WhatsApp — SOMENTE no botão/ícone do WhatsApp */
```

### 2.6 Textura de ruído no body

O fundo do `<body>` tem uma textura sutil de ruído via SVG inline. Nunca remover. Cria a sensação de impressão/orgânico:

```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' ...opacity='0.03'...%3E");
```

---

## 3. SISTEMA TIPOGRÁFICO

### 3.1 Famílias Tipográficas

O PAAPS possui **três fontes distintas** na identidade visual:

```css
/* Fonte do LOGOTIPO (não usada no CSS do site — só no arquivo .ai e no PNG do logo) */
Evermore  →  INSUMOS/IDENTIDADE VISUAL/02 - Tipografia/Evermore - Tipografia logo.zip

/* Fonte de títulos, labels, botões, nav, interface */
--fonte-titulo: 'League Spartan', Arial, sans-serif;
/* Fonte do DESCRITIVO abaixo do logo (e corpo de texto) */
--fonte-corpo:  'Helvetica Neue', Helvetica, Arial, sans-serif;
```

> ⚠️ **IMPORTANTE:** A palavra "PAAPS" no logotipo é desenhada na fonte **Evermore** — não League Spartan. Nunca tentar recriar o logo com League Spartan. Usar sempre os arquivos oficiais de `INSUMOS/IDENTIDADE VISUAL/01 - Logo/`.

**Evermore** — Fonte exclusiva do logotipo. Arquivo fonte em `INSUMOS/IDENTIDADE VISUAL/02 - Tipografia/Evermore - Tipografia logo.zip`. Uso restrito ao símbolo da marca.

**League Spartan** — Google Fonts. Pesos usados: 400, 500, 600, 700, 800. Arquivo em `INSUMOS/IDENTIDADE VISUAL/02 - Tipografia/League Spartan - Tipografia texto.zip`.  
**Uso:** Headlines, labels, botões, nav, tags, contadores, faixa manifesto, textos de interface.

**Helvetica Neue** — Sistema (e descritivo do logo). Arquivo em `INSUMOS/IDENTIDADE VISUAL/02 - Tipografia/Helvética - Tipografia Descritivo.zip`. Pesos usados: 400 (regular).  
**Uso:** Parágrafos, corpo de texto longo, subtextos de números, descritivo abaixo do logotipo.

### 3.2 Escala de Tipos — Títulos

| Elemento | Font | Tamanho | Peso | Transforms | Letter-spacing | Line-height |
|---|---|---|---|---|---|---|
| `h1` | League Spartan | `clamp(2.4rem, 5vw, 4rem)` | 700 | uppercase | -0.02em | 1.05 |
| `h1` no hero | League Spartan | `clamp(2.2rem, 5.5vw, 3.8rem)` | 700 | uppercase | -0.02em | 1.05 |
| `h2` | League Spartan | `clamp(1.8rem, 3.5vw, 2.8rem)` | 700 | uppercase | — | 1.1 |
| `h3` padrão | League Spartan | `1.2rem` | 600 | uppercase | 0.03em | — |
| `h3` card serviço | League Spartan | `1.4rem` | 600 | uppercase | 0.03em | 1.2 |
| `h3` card dispositivo | League Spartan | `1.05rem` | 600 | uppercase | 0.03em | — |
| `h3` card trilha | League Spartan | `1.3rem` | 600 | uppercase | 0.03em | — |
| `h3` card equipe | League Spartan | `0.95rem` | 600 | uppercase | 0.03em | — |

### 3.3 Escala de Tipos — Corpo e Componentes

| Elemento | Font | Tamanho | Peso | Transforms | Letter-spacing |
|---|---|---|---|---|---|
| Corpo padrão (`p`) | Helvetica Neue | `16px` / `1rem` | 400 | — | — |
| Corpo intro de seção | Helvetica Neue | `1.05rem` | 400 | — | — |
| Hero subtexto | Helvetica Neue | `1.15rem` | 400 | — | — |
| Card corpo | Helvetica Neue | `0.92rem`–`0.95rem` | 400 | — | — |
| `label-secao` | League Spartan | `0.72rem` | 700 | uppercase | 0.15em |
| Nav desktop | League Spartan | `0.78rem` | 600 | uppercase | 0.06em |
| Nav drawer mobile | League Spartan | `1rem` | 700 | uppercase | 0.06em |
| `btn-primario` | League Spartan | `0.85rem` | 700 | uppercase | 0.08em |
| `btn-primario--pequeno` | League Spartan | `0.78rem` | 700 | uppercase | 0.08em |
| `card-servico__tag` | League Spartan | `0.65rem` | 700 | uppercase | 0.2em |
| `card-trilha__tipo` | League Spartan | `0.65rem` | 700 | uppercase | 0.18em |
| Esteira item | League Spartan | `0.72rem` | 700 | uppercase | 0.12em |
| Esteira label | League Spartan | `0.65rem` | 700 | uppercase | 0.18em |
| Footer título | League Spartan | `0.65rem` | — | uppercase | 0.15em |
| Footer links | Helvetica Neue | `0.88rem` | 400 | — | — |
| Footer contato | League Spartan | `0.82rem` | 600 | — | — |
| Footer CNPJ/copy | Helvetica Neue | `0.72rem` | 400 | — | — |
| Faixa manifesto | League Spartan | `clamp(0.78rem, 2vw, 1rem)` | 700 | uppercase | 0.12em |

### 3.4 Número Grande (contador animado)

```css
.numero-grande {
  font-family: var(--fonte-titulo);
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1;
}
```

**Variantes de cor:**
- `.numero-grande` — cor padrão: `--cor-amarelo`
- `.numero-grande--terracota` — `--cor-terracota`
- `.numero-grande--marrom` — `--cor-marrom`

### 3.5 Line-Heights por Contexto

| Contexto | Line-height |
|---|---|
| Headlines (h1, h2) | 1.05–1.1 |
| Body principal | 1.7 |
| Body secundário (cards, listas) | 1.6–1.65 |
| Labels, tags, botões | 1 (não precisa) |
| Números grandes | 1 |
| Subtexto de número | 1.4 |

---

## 4. SISTEMA DE ESPAÇAMENTO

### 4.1 Espaçamentos de Estrutura

```css
--max-largura: 1200px;   /* container máximo */
--raio: 4px;             /* border-radius PADRÃO de TODOS os elementos arredondados */

/* Container padding */
.container { padding: 0 40px; }
@media (max-width: 768px) { .container { padding: 0 20px; } }

/* Seção */
.secao { padding: 96px 0; }
@media (max-width: 768px) { .secao { padding: 64px 0; } }
@media (max-width: 480px) { .secao { padding: 56px 0; } }
```

### 4.2 Espaçamentos Internos de Componentes

| Componente | Padding |
|---|---|
| `card-servico` | 48px 40px |
| `card-dispositivo` | 40px 32px |
| `card-trilha` | 40px 32px |
| `card-equipe` | 36px 28px |
| Box de exemplos/outros serviços | 40px |
| `grid-numeros--fundo` | 48px (md: 32px 24px) |
| `cta-final` | 96px 0 |
| `case-conteudo` | 64px 56px (md: 40px 24px) |
| Footer | 72px 40px 40px (md: 56px 20px 32px) |
| Header | 16px 40px (md: 16px 20px) |
| Drawer | 96px 40px 40px |

### 4.3 Gaps de Grid

| Grid | Gap desktop | Gap mobile |
|---|---|---|
| `grid-2` | 32px | — (vira 1 col) |
| `grid-3` | 24px | — (vira 1 col) |
| `grid-2-1` | 40px | — (vira 1 col) |
| `grid-numeros` | 32px | 24px (md), 1 col (480px) |
| Footer grid | 48px (lg: 32px, md: 40px) | — |

### 4.4 Espaçamentos Semânticos Recorrentes

| Situação | Valor |
|---|---|
| Marcadores → texto acima de seção | `margin-bottom: 24px` |
| Label → h2 | `margin-bottom: 16px` em label; h2 sem margin ou `margin-bottom: 48px` |
| Bloco de marcadores antes de label | `margin-bottom: 24px` |
| Linha separadora sutil | `border-top: 1px solid rgba(187,173,162,0.3)` |
| Espaço entre número e subtexto | `margin-top: 8px` em `.numero-subtexto` |
| Botão CTA depois de texto | `margin-top: 32px` |

---

## 5. COMPONENTES WEB

### 5.1 Marcadores Coloridos

```html
<!-- Grupo padrão de marcadores (antes de label-secao) -->
<div class="marcadores" aria-hidden="true">
  <span class="marcador marcador--amarelo"></span>
  <span class="marcador marcador--terracota"></span>
  <span class="marcador marcador--oliva"></span>
</div>
```

**Dimensões:** 12px × 12px (padrão) · 8px × 8px (`.marcador--pequeno`)  
**Variantes de cor:** `--amarelo`, `--terracota`, `--oliva`, `--marrom`, `--branco`, `--lilas`  
**Regra:** sempre `aria-hidden="true"`. São elementos decorativos.

**Hero marcadores** (`.hero__marcador`) — 14px × 14px, com animação de pulso assíncrona.

### 5.2 Label de Seção

```html
<span class="label-secao">Texto em caps pequeno</span>
```

**Variantes:**
- `.label-secao` — cor `--cor-bege-rosa` (default, em fundos claros)
- `.label-secao--branca` — `rgba(255,255,255,0.65)` (em fundos escuros: marrom, oliva)
- `.label-secao--amarela` — `--cor-amarelo` (disponível mas raramente usada)

**Regra:** sempre aparece acima do h2 da seção, depois dos marcadores.

### 5.3 Botões

#### Botão Primário — `.btn-primario`
```html
<a href="…" class="btn-primario">Texto do botão</a>
<!-- Versão pequena (no nav): -->
<a href="…" class="btn-primario btn-primario--pequeno">Fale Conosco</a>
```
Fundo: `--cor-terracota` · Texto: branco · Hover: `opacity: 0.88`, `translateY(-2px)`

#### Botão Secundário — `.btn-secundario`
```html
<a href="…" class="btn-secundario">Saiba mais</a>
```
Borda: `2px solid --cor-terracota` · Hover: fundo terracota, texto branco

#### Botão Branco — `.btn-branco`
```html
<a href="…" class="btn-branco">Agendar conversa gratuita</a>
```
Fundo: branco · Texto: `--cor-terracota` · Hover: `opacity: 0.9`, `translateY(-2px)`  
**Uso:** em fundos escuros ou terracota (hero, CTA final, case).

**Regra anti-erro:** `border-radius: var(--raio)` = 4px em TODOS os botões. Nunca usar bordas mais arredondadas.  
**Regra mobile:** todos os botões viram `width: 100%` em ≤768px.

### 5.4 Cards de Serviço

```html
<!-- Card claro (fundo branco) -->
<div class="card-servico card-servico--claro">
  <span class="card-servico__tag">Produto 1</span>
  <h3>Título</h3>
  <p>Descrição</p>
  <a href="…" class="card-servico__link">
    Texto
    <svg><!-- seta → --></svg>
  </a>
</div>

<!-- Card escuro (fundo marrom) -->
<div class="card-servico card-servico--escuro">…</div>
```

**Regra:** o `.card-servico__link` deve usar `margin-top: auto` para ancorar ao rodapé do card.  
**Hover:** `transform: translateY(-4px)`  
**Link claro:** `--cor-terracota` · **Link escuro:** `--cor-amarelo`  
**Tag claro:** `--cor-bege-rosa` · **Tag escuro:** `--cor-amarelo` a `opacity: 0.7`

### 5.5 Cards Dispositivos

```html
<div class="card-dispositivo">
  <svg class="card-dispositivo__icone" viewBox="0 0 52 52">…</svg>
  <h3>Nome do dispositivo</h3>
  <p>Descrição</p>
</div>
```

Ícone: 52×52px · Stroke: `--cor-terracota` (#cb4710) · Detalhes de conexão: `--cor-amarelo` (#f7c31c)  
**Regra dos ícones SVG:** stroke principal sempre terracota, linhas secundárias/tracejadas sempre amarelo.

### 5.6 Cards Trilha

```html
<div class="card-trilha card-trilha--terracota">
  <div class="card-trilha__tipo">
    <span class="marcador marcador--terracota"></span>
    Poder Público
  </div>
  <h3>Prefeituras</h3>
  <p>…</p>
  <p class="card-trilha__viabilizacao">Viabilização: …</p>
</div>
```

**Variantes:** `--terracota`, `--oliva`, `--lilas`  
**Borda top:** 5px solid na cor da variante  
**`.card-trilha__viabilizacao`:** só aparece no card Prefeituras. Fonte menor, itálico, separado por border-top.

### 5.7 Cards Equipe

```html
<!-- Com foto -->
<div class="card-equipe">
  <div class="card-equipe__avatar">
    <img src="…" alt="Nome — papel">
  </div>
  <h3>Nome do papel</h3>
  <p>Descrição</p>
</div>

<!-- Sem foto (placeholder) -->
<div class="card-equipe">
  <div class="card-equipe__avatar card-equipe__avatar--placeholder">
    <svg>…</svg>
  </div>
  …
</div>
```

**Avatar:** 72px × 72px, `border-radius: 50%`  
**Fundo:** `rgba(255,255,255,0.06)` · **Borda:** `1px solid rgba(255,255,255,0.12)`  
**Hover:** `background: rgba(255,255,255,0.10)`  
**Uso:** sempre dentro de `.secao--escura`

### 5.8 Header e Navegação

Sticky, `z-index: 100`. Transição para `.header--scrolled` ao passar 60px de scroll.

```
ESTRUTURA: [logo] ←→ [nav desktop: links + btn-primario--pequeno]
MOBILE:    [logo] ←→ [hamburger button]
           → drawer lateral (280px, z-index 105) + overlay (z-index 104)
```

**Active state no nav:** JS aplica `color: var(--cor-terracota)` na rota atual.  
**Drawer:** fecha com ESC, clique no overlay, clique em qualquer link.

### 5.9 Esteira Marquee

```html
<div class="esteira-wrapper">
  <p class="esteira-label">Presente em</p>
  <div class="esteira">
    <div class="esteira__track">
      <span class="esteira__item">Nome do cliente</span>
      <span class="esteira__separador">·</span>
      <!-- JS duplica automaticamente o conteúdo para o loop -->
    </div>
  </div>
</div>
```

**Animação:** 36s linear infinite. **Hover:** pausa a animação.  
**Máscara:** `linear-gradient` fade nas bordas laterais (8% a 92%).  
**Regra anti-erro:** o JS em `main.js` já faz a duplicação. Nunca duplicar o HTML manualmente.

### 5.10 Número Grande / Contador Animado

```html
<span class="numero-grande" data-valor="56" data-prefixo="+" data-sufixo="%">
  +56%
</span>
<p class="numero-subtexto">Descrição do indicador</p>
```

O JS anima de 0 ao valor ao entrar na viewport (easing cubic). O conteúdo textual padrão (`+56%`) é o fallback para quem tem JS desativado.

**`data-prefixo`:** texto antes do número (ex: "+", "R$")  
**`data-sufixo`:** texto depois do número (ex: "%", "h", "mil")  
**Regra:** usar `data-valor` + prefixo/sufixo em vez de texto estático quando o número deve animar.

### 5.11 Faixa Manifesto

```html
<div class="faixa-manifesto" id="manifesto">
  QUEM CUIDA DE QUEM FAZ A REDE PÚBLICA ACONTECER?
</div>
```

Fundo marrom · Texto amarelo · Padding: 28px 40px · Sem `<section>` — é um elemento divisor.

### 5.12 Seção Case (grid de 2 colunas com foto)

```html
<section>
  <div class="case-grid">
    <div class="case-foto">
      <img src="…" alt="…" loading="lazy">
      <span class="case-foto__label">Localidade, UF</span>
    </div>
    <div class="case-conteudo">
      <!-- conteúdo com fundo --cor-oliva -->
    </div>
  </div>
</section>
```

**Regra:** `.case-grid` não tem `.container` interno — vai de borda a borda.  
**Min-height:** 560px. Em ≤960px vira 1 coluna, foto com height 320px fixo.

### 5.13 CTA Final

```html
<section class="secao--terracota cta-final">
  <div class="marcadores" style="justify-content: center;">…</div>
  <h2>…</h2>
  <p>…</p>
  <div class="cta-final__botoes">
    <a href="https://wa.me/…" class="btn-branco">Agendar via WhatsApp</a>
    <a href="mailto:…" class="cta-final__email">ou envie um email: …</a>
  </div>
</section>
```

**Sempre** combina `.secao--terracota` + `.cta-final`. Botão branco (não primário).

### 5.14 Footer

Estrutura de 3 colunas: [logo + contato] [links] [redes]. Em ≤960px: 2 colunas (logo full-width). Em ≤768px: 1 coluna.

**Textura:** `url('../imagens/textura-marrom.png')`, 340px, `background-blend-mode: multiply`.  
**Botão WhatsApp inline:** `background: #25D366` — única exceção de cor externa.

### 5.15 WhatsApp Flutuante

```html
<a href="https://wa.me/5511995231724" class="whatsapp-fixo" …>
```

Fixed, `z-index: 999`. 56px × 56px, `border-radius: 50%`, bottom 32px, right 32px.  
Em ≤768px: bottom 20px, right 20px.

---

## 6. SISTEMA DE LAYOUT E GRID

### 6.1 Grids Disponíveis

```css
.grid-2   { grid-template-columns: repeat(2, 1fr);    gap: 32px; }
.grid-3   { grid-template-columns: repeat(3, 1fr);    gap: 24px; }
.grid-2-1 { grid-template-columns: 2fr 1fr;           gap: 40px; } /* destaque + sidebar */
.grid-numeros { grid-template-columns: repeat(2, 1fr); gap: 32px; }
```

### 6.2 Breakpoints

| Ponto | Valor | O que muda |
|---|---|---|
| Tablet large | ≤960px | `grid-3` → 2 colunas; `case-grid` → 1 col; footer → 2 cols |
| Tablet / Mobile | ≤768px | hamburger ativo; todos os grids → 1 col; botões full-width |
| Mobile pequeno | ≤480px | hero `100svh`; `grid-numeros` → 1 col; manifesto menor |

### 6.3 Variantes de Seção por Cor de Fundo

```css
.secao               /* fundo --cor-fundo (default) */
.secao--escura       /* fundo --cor-marrom, texto branco */
.secao--terracota    /* fundo --cor-terracota, texto branco */
.secao--oliva        /* fundo --cor-oliva, texto branco */
.secao--amarelo      /* fundo --cor-amarelo, texto --cor-marrom */
```

**Seções com fundo alternado (sem classe):** usar `style="background: rgba(68,35,9,0.04)"` para a variante acinzentada sutil (ex: seção de dispositivos e trilhas).

### 6.4 Hierarquia Visual da Home (ordem canônica)

```
1. Header (sticky)
2. Hero (92vh)
3. Faixa Manifesto (fundo marrom)
4. Esteira de Logos (fundo branco)
5. Proposta de Valor (fundo padrão)
6. Os Três Dispositivos (fundo marrom 4% — alternado)
7. Case de Impacto (sem container, grid full-width)
8. Impacto Percebido (fundo padrão)
9. Trilhas por Tipo de Cliente (fundo marrom 4% — alternado)
10. Equipe (secao--escura)
11. CTA Final (secao--terracota)
12. Footer (fundo marrom)
13. WhatsApp flutuante
```

**Regra de ritmo:** alternar fundo claro/escuro nunca mais de 2x seguidas. O padrão é: claro → levemente alternado → claro → escuro → claro → terracota.

---

## 7. SISTEMA DE ANIMAÇÃO

### 7.1 Animações de Entrada (IntersectionObserver)

```html
<!-- Sem delay -->
<div class="animar">…</div>

<!-- Com delays escalonados (usar em elementos dentro de grids) -->
<div class="animar animar-delay-1">…</div>
<div class="animar animar-delay-2">…</div>
<div class="animar animar-delay-3">…</div>
<div class="animar animar-delay-4">…</div>
```

**CSS:** `opacity: 0` + `translateY(24px)` → ao entrar na viewport com threshold 12%, recebe `.visivel` → `opacity: 1` + `translateY(0)` em 0.6s ease.

**Delays:** 0.1s / 0.2s / 0.3s / 0.4s

**Padrão de uso em grids:**
- Título/label da seção: `animar` + `animar-delay-1`
- h2: `animar` + `animar-delay-2`
- Primeiro item: `animar-delay-1`
- Segundo item: `animar-delay-2`
- Terceiro item: `animar-delay-3`

### 7.2 Hover Transitions

| Elemento | Efeito hover |
|---|---|
| Cards (serviço, dispositivo, trilha) | `translateY(-4px)` |
| `.btn-primario`, `.btn-branco` | `opacity: 0.88`, `translateY(-2px)` |
| `.btn-secundario` | `background: terracota`, `color: branco` |
| `.card-servico__link` | `gap: 8px → 14px` (a seta "anda") |
| `.whatsapp-fixo` | `scale(1.08)` |
| `.esteira__item` | `color: --cor-marrom` |
| `.esteira__track:hover` | pausa animação marquee |

### 7.3 Animações de Hero

```css
@keyframes pulsar {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.25); opacity: 0.7; }
}
/* 4 marcadores com delays: 0s, 0.3s, 0.6s, 0.9s — ciclo 2.8s */

@keyframes quicar {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}
/* Seta de scroll — ciclo 2s */
```

### 7.4 Animação de Contador

Easing cubic: `ease = 1 - Math.pow(1 - progress, 3)`. Duração: 1400ms. Threshold: 50% visível.

### 7.5 Transições de Drawer Mobile

Drawer: `right: -100%` → `right: 0` via `cubic-bezier(0.4, 0, 0.2, 1)` em 0.35s.  
Overlay: `opacity: 0` → `opacity: 1` em 0.35s.

---

## 8. LINGUAGEM VISUAL CROSS-CANAL (CANVA)

### 8.1 Formatos de Conteúdo no Canva

| Formato | Dimensões | Uso principal |
|---|---|---|
| Post Feed (square) | 1080 × 1080px | Portfólio, educativos |
| Post Feed (4:5) | 1080 × 1350px | Posts principais, carrossel, logo design |
| Stories / Reels | 1080 × 1920px | Reels, Stories, Linktree |
| Apresentação | 1920 × 1080px | PAAPS Apresenta, Portfólio, Retrospectiva |
| Periódico (A5) | ~1587 × 2245px | Periódico editorial |
| LinkedIn banner | ~1584 × 396px | Capa do perfil |
| Linktree bg | ~1170 × 2532px | Fundo de Linktree |

### 8.2 Templates de Carrossel — Estrutura Padrão

Posts em carrossel seguem uma estrutura de seções:
1. **Capa** — Título impactante + marcadores coloridos + logo
2. **Slides de conteúdo** — Texto + elemento visual + logo menor
3. **Slide final (CTA)** — "Agendar conversa" + WhatsApp + @paaps.brasil

### 8.3 Periódico PAAPS — Estrutura Editorial Fixa

O periódico é um formato editorial com identidade própria:

```
Sumário:
  Visão ----------- 03
  Mundo ----------- 04
  Prática --------- 05
  Selo PAAPS ------ 06
```

- **Visão:** reflexão teórica ou filosófica da psicologia social/decolonial
- **Mundo:** contextualização com evento ou fato atual (notícia, cultura pop)
- **Prática:** aplicação prática da perspectiva PAAPS
- **Selo PAAPS:** recomendação de livro, filme, projeto, perfil, organização

**Nota de Rodapé fixa:** "Este periódico não se pretende neutro. O PAAPS reafirma que a saúde mental no Sul Global é indissociável da soberania nacional…"

### 8.4 Padrões Visuais dos Posts (do Canva)

**O que está presente em todos os posts PAAPS:**
- Logo em posição consistente (geralmente canto inferior ou superior)
- Paleta fiel: marrom, terracota, amarelo, fundo bege
- League Spartan nos títulos, caps
- Marcadores coloridos como elemento decorativo
- Textura sutil (pontinhos ou grain)
- Fundo alternativo: pode usar textura-marrom ou textura-amarelo como fill

**Padrão de quote/citação:**
- Aspas grandes (tipografia decorativa, cor amarelo ou terracota)
- Texto entre aspas em League Spartan ou corpo levemente maior
- Atribuição abaixo, menor

**Padrão de dados/números no Canva:**
- Número enorme (80-120pt) em amarelo
- Porcentagem ou sufixo em marrom ou bege
- Descrição em corpo abaixo

### 8.5 Tipos de Conteúdo Social Identificados

| Tipo | Exemplo de design |
|---|---|
| Educativo | "Explicando como se fosse pra um amigo" |
| Prova Social | "Esse print vale mais que muito anúncio" |
| PAAPS Apresenta | Apresentação institucional em slides |
| Template Reels | Animação de tela cheia |
| Anúncio Stories | CTA direto |
| Periódico | Conteúdo editorial de profundidade |
| Portfólio | Clientes e projetos realizados |
| Retrospectiva | Balanço anual |
| Proposta Comercial | Vinil/lonas, proposals |

---

## 9. ASSETS E INVENTÁRIO

### 9.1 Versões do Logotipo — Arquivos Fonte (INSUMOS)

A fonte da verdade para os logos é `INSUMOS/IDENTIDADE VISUAL/01 - Logo/`. Os arquivos em `paaps-site/imagens/` são cópias exportadas para uso no site.

#### Logo sem descritivo (somente o símbolo PAAPS)

| Arquivo INSUMOS | Versão | Fundo de uso |
|---|---|---|
| `01 - Logo sem descritivo/Paaps - Logo.ai` | Vetor fonte (Illustrator) | — |
| `01 - Logo sem descritivo/Paaps - Logo branco + colorido-8.png` | Símbolo branco + letras coloridas | Fundos escuros |
| `01 - Logo sem descritivo/Paaps - Logo branco-8.png` | Totalmente branco | Fundos escuros |
| `01 - Logo sem descritivo/Paaps - Logo marrom + colorido-8.png` | Símbolo marrom + letras coloridas | Fundos claros |
| `01 - Logo sem descritivo/Paaps - Logo marrom-8.png` | Totalmente marrom | Fundos claros |

#### Logo com descritivo (símbolo + "Psicologia Social para Políticas Públicas")

| Arquivo INSUMOS | Versão | Fundo de uso |
|---|---|---|
| `02 - Logo com descritivo/Paaps - Logo com Descritivo.ai` | Vetor fonte (Illustrator) | — |
| `02 - Logo com descritivo/Paaps - Logo branco com descritivo branco-8.png` | Branco completo | Fundos escuros |
| `02 - Logo com descritivo/Paaps - Logo marrom com descritivo amarelo-8.png` | Logo marrom + descritivo amarelo | Fundos claros — **versão preferencial** |
| `02 - Logo com descritivo/Paaps - Logo marrom com descritivo amarelo_1-8.png` | Variante de layout do anterior | Fundos claros |
| `02 - Logo com descritivo/Paaps - Logo marrom com descritivo marrom-8.png` | Marrom monocromo | Fundos bege/claro |
| `02 - Logo com descritivo/Paaps - Logo marrom com descritivo verde-8.png` | Logo marrom + descritivo verde | Fundos claros |
| `02 - Logo com descritivo/Paaps - Logo marrom com descritivo vermelho-8.png` | Logo marrom + descritivo vermelho/terracota | Fundos claros |

> ⚠️ A subpasta `(Antigo) Autoria de Impacto Social em Rede/` contém o tagline anterior da marca. **Não usar** — descritivo atual é "Psicologia Social para Políticas Públicas".

#### Logo PAAPS + DIGGING (co-branding)

| Arquivo INSUMOS | Versão |
|---|---|
| `08 - Paaps + Digging/01 - Logo Paaaps + Digging/Logo Paaps + Digging - Branco.png` | Branco |
| `08 - Paaps + Digging/01 - Logo Paaaps + Digging/Logo Paaps + Digging - Marrom.png` | Marrom |
| `08 - Paaps + Digging/01 - Logo Paaaps + Digging/Logo Paaps + Digging - Vinho.png` | Vinho/terracota |
| `08 - Paaps + Digging/01 - Logo Paaaps + Digging/Paaps - Logo + Digging.pdf` | PDF fonte |

#### Logo ECOA (parceira)

| Arquivo INSUMOS | Versão |
|---|---|
| `01a - Logo Ecoa/Ecoa - Logo branco + cor-8.png` | Branco + cor |
| `01a - Logo Ecoa/Ecoa - Logo branco-8.png` | Branco |
| `01a - Logo Ecoa/Ecoa - Logo marrom + cor-8.png` | Marrom + cor |
| `01a - Logo Ecoa/Ecoa - Logo marrom-8.png` | Marrom |
| `01a - Logo Ecoa/Paaps - Logo Ecoa.pdf` | PDF |

#### Versões no site (exportações prontas para uso web)

| Arquivo `paaps-site/imagens/` | Equivalente INSUMOS |
|---|---|
| `logo-colorido.png` | Logo sem descritivo, marrom + colorido |
| `logo-marrom.png` | Logo sem descritivo, totalmente marrom |
| `logo-branco.png` | Logo sem descritivo, totalmente branco |

**Altura no header:** 48px · **Altura no footer:** 40px  
**Regra:** nunca usar logo colorido sobre fundo escuro. Nunca usar logo branco sobre fundo claro.

---

### 9.2 Paleta de Cor — Arquivo Oficial

| Arquivo INSUMOS | Conteúdo |
|---|---|
| `03 - Paleta de Cor/Paaps - Paleta de Cor.jpg` | Paleta oficial com swatches nomeados |
| `08 - Paaps + Digging/03 - Paleta de Cor Paaps + Digging/Paaps - + Digging Paleta de Cor.pdf` | Paleta co-branded com Digging |

---

### 9.3 Texturas — Inventário Completo (INSUMOS)

Há **5 tipos de textura** × **7 cores** = 35 arquivos. Caminho base: `INSUMOS/IDENTIDADE VISUAL/04 - Texturas/`

| Cor disponível | Texturas disponíveis |
|---|---|
| **amarelo** | Textura 1, 2, 3, 4, 5 |
| **branco** | Textura 1, 2, 3, 4, 5 |
| **cinza** | Textura 1, 2, 3, 4, 5 |
| **lilás** | Textura 1, 2, 3, 4, 5 |
| **marrom** | Textura 1, 2, 3, 4, 5 |
| **verde** | Textura 1, 2, 3, 4, 5 |
| **vermelho** | Textura 1, 2, 3, 4, 5 |

**Nome do arquivo:** `Paaps - Textura [1-5] [cor]-8.png`  
**Exemplo:** `Paaps - Textura 1 marrom-8.png`

> As 4 texturas em `paaps-site/imagens/` (textura-amarelo, textura-branco, textura-marrom, textura-verde) são exportações selecionadas desse conjunto. Os outros 31 arquivos estão disponíveis no INSUMOS para novas aplicações.

---

### 9.4 Gradientes (INSUMOS — não usados no site ainda)

Caminho: `INSUMOS/IDENTIDADE VISUAL/05 - Gradiente/`

| Arquivo | Cor |
|---|---|
| `Paaps - Gradiente Amarelo-8.png` | Amarelo |
| `Paaps - Gradiente Branco-8.png` | Branco |
| `Paaps - Gradiente Cinza-8.png` | Cinza |
| `Paaps - Gradiente Lilás-8.png` | Lilás |
| `Paaps - Gradiente Marrom-8.png` | Marrom |
| `Paaps - Gradiente Verde-8.png` | Verde |
| `Paaps - Gradiente Vermelho-8.png` | Vermelho/terracota |

**Uso potencial:** overlays de seção, fundos de destaque, backgrounds de posts no Canva.

---

### 9.5 Pontinhos — Inventário Completo (INSUMOS)

Caminho: `INSUMOS/IDENTIDADE VISUAL/06 - Pontinhos/`

| Arquivo INSUMOS | Variante | Versão no site |
|---|---|---|
| `Paaps - Pontinhos.ai` | Vetor fonte | — |
| `Paaps - Pontinhos colorido -8.png` | Multicolor | `imagens/pontinhos-colorido.png` |
| `Paaps - Pontinhos marrom-8.png` | Marrom | `imagens/pontinhos-marrom.png` |
| `Paaps - Pontinhos branco-8.png` | Branco | `imagens/pontinhos-branco.png` |
| `Paaps - Pontinhos vermelho + amarelo-8.png` | Vermelho/terracota + amarelo | *(não importado)* |
| `Paaps - Pontinhos verde + amarelo -8.png` | Verde/oliva + amarelo | *(não importado)* |
| `Paaps - Pontinhos vermelho + verde -8.png` | Vermelho + verde | *(não importado)* |

---

### 9.6 Templates Oficiais de Layout (INSUMOS)

Caminho: `INSUMOS/IDENTIDADE VISUAL/07 - Template/`  
Arquivo fonte: `Paaps - Template.ai`

| Arquivo | Variação |
|---|---|
| `Paaps - Template 1-8.png` | Layout base único |
| `Paaps - Template 2a/2b-8.png` | Layout 2 — variantes a e b |
| `Paaps - Template 3a/3b-8.png` | Layout 3 — variantes a e b |
| `Paaps - Template 4a/4b-8.png` | Layout 4 — variantes a e b |
| `Paaps - Template 5a/5b-8.png` | Layout 5 — variantes a e b |

**Uso:** base para criação de materiais impressos, apresentações, peças offline.

---

### 9.7 Formas Decorativas PAAPS + DIGGING (INSUMOS)

Caminho: `INSUMOS/IDENTIDADE VISUAL/08 - Paaps + Digging/02 - Formas Paaps + Digging/`  
16 formas disponíveis: `Paapas + Digging Forma [1-16]-8.png`  
Arquivo fonte: `Paaps - Logo + Formas.pdf`

**Uso:** elementos gráficos para peças co-branded com a Digging, materiais institucionais.

---

### 9.8 Fotografia — Acervo Completo (INSUMOS/FOTOS)

#### Case Bela Vista de Minas

| Subpasta | Conteúdo | Qtd aproximada |
|---|---|---|
| `Case de Bela Vista de Minas/` | Fotos JPG de campo, vídeos MOV/MP4 | 35+ fotos, 5 vídeos |
| `FOTOS BVMG ISAAC/` | Acervo fotográfico profissional de campo, BV Minas | **200+ fotos JPG** (IMG_7720–IMG_8002) |

> O acervo `FOTOS BVMG ISAAC/` é a fonte mais rica de fotografias do PAAPS. As 4 imagens do site (`case-bvmg-1/2/3/4.jpg`) foram exportadas deste conjunto — há centenas de fotos disponíveis para novas páginas.

#### Outros projetos fotografados

| Subpasta | Projeto | Conteúdo |
|---|---|---|
| `MÃES ATÍPICAS RJ/` | Especiais da Maré + PROINAPE | ~35 fotos JPG |
| `CRAFTSAPIENS (MUNDO DIGITAL)/` | Grupos em mundo digital (Minecraft?) | 20 imagens JPG/PNG |
| `ECOA FOTOS/` | Atividades da Comunidade ECOA | 4 capturas de tela PNG |
| `OUTRAS FOTOS/` | Eventos, pessoas, referências | ~15 arquivos mistos |

#### Arquivos nomeados relevantes em OUTRAS FOTOS

| Arquivo | Descrição provável |
|---|---|
| `DSC03011-24.jpg`, `DSC03040-45.jpg`, `DSC03075-3.jpg`, `DSC03222-74.jpg` | Fotos profissionais de evento/campo |
| `falando foto 2.jpg` | Foto de apresentação/fala pública |
| `MARIA QUINZINHO.jpg` | Personagem/pessoa nomeada |
| `bell-hooks.jpg.webp` | Referência bibliográfica (bell hooks) |

---

### 9.9 Aplicação da Identidade Visual (INSUMOS/APLICAÇÃO DA ID. VISUAL)

| Arquivo | Conteúdo |
|---|---|
| `A GovTech de Psicologia Social do Brasil..pdf` | Documento/apresentação com aplicação da ID visual em contexto institucional |
| `WhatsApp Image 2026-05-24 at 17.37.29/58/11/24.jpeg` | 4 imagens de aplicação (mockups, impressos ou fotos de material) |

---

### 9.10 Ícones SVG (site)

Todos os ícones são SVGs inline, sem dependência de biblioteca. Padrão:
- `viewBox="0 0 24 24"` para ícones de interface (nav, botões, redes)
- `viewBox="0 0 52 52"` para ícones de cards dispositivos
- `stroke-width: 2`–`2.2` para linhas
- `stroke-linecap: round` · `stroke-linejoin: round`
- `fill: none` (exceto ícones sociais que usam `fill: currentColor`)

---

## 10. VOZ, TOM E PADRÕES DE COPY

### 10.1 Características da Voz PAAPS

- **Direta e sem ornamentos** — afirmações curtas, sem jargão de consultoria
- **Técnica mas acessível** — usa termos da psicologia social mas explica por ações concretas
- **Territorial** — cita municípios reais, equipamentos (CRAS, UBS, NASF), datas reais
- **Comprometida** — voz na primeira pessoa do plural ("entramos", "vinculamos", "construímos")
- **Crítica** — não neutra; posicionada em defesa da saúde mental como direito coletivo
- **Urgente mas calma** — não apela ao medo, apela à consciência e ao cuidado

### 10.2 Padrões de Headline (h1/h2)

| Padrão | Exemplo |
|---|---|
| Afirmação de identidade | "A rede de saúde mental para as políticas públicas do futuro." |
| Contraste | "Uma equipe técnica. Não uma consultora solitária." |
| Resultado concreto | "Resultados reais. Em 5 meses." |
| Pergunta retórica | "QUEM CUIDA DE QUEM FAZ A REDE PÚBLICA ACONTECER?" |
| Dois lados | "Dois caminhos. Um método." |
| Chamado ao cuidado | "Sua equipe merece cuidado que permanece." |

**Regra:** títulos são sempre em `text-transform: uppercase` via CSS. No HTML, escrever em minúsculas normais.

### 10.3 Padrões de Label de Seção

Labels são sempre em caps via CSS e funcionam como "âncoras de contexto":

```
"O que fazemos"     → antes da proposta de valor
"Programa PAAPS"    → antes dos dispositivos
"O que as equipes relatam" → antes dos números
"Para quem é o PAAPS" → antes das trilhas
"Quem somos"        → antes da equipe
"1º MVP Municipal Validado" → label especial no case
```

### 10.4 Padrões de Copy de Botão

| Contexto | Copy preferencial |
|---|---|
| CTA principal no hero | "Agendar conversa gratuita de 45 min" |
| CTA no drawer/nav | "Fale Conosco" |
| CTA final | "Agendar via WhatsApp" |
| Link secundário em cards | "Conhecer o Programa →", "Saiba mais →" |
| Ver mais conteúdo | "Ver o case completo" |

### 10.5 Dados e Números Institucionais

| Dado | Contexto |
|---|---|
| +56% | Aderência à psicoterapia em 5 meses |
| +150% | Aderência em atividades e oficinas grupais |
| +130h | Ações e intervenções grupais |
| +400h | Plantão Psicológico disponibilizados |
| 98% | Equipes mais colaborativas no dia a dia |
| 100% | Reconhece mudanças em ao menos 1 colega |
| 2014 | Ano de fundação |
| 5 meses | Duração do 1º MVP municipal (Bela Vista de Minas) |

### 10.6 Clientes / Onde o PAAPS já esteve

Lista oficial para a esteira de logos e menções:
- Prefeitura de Bela Vista de Minas (MG)
- Prefeitura de Desterro do Melo (MG)
- Beneficência Portuguesa SP
- Rede Divina Providência
- Associação Allos
- Programa Afluentes — Águas do Rio
- Boehringer Ingelheim
- Grupo Boticário
- Cosan · Raízen · Signify (Philips)
- ComBio Energias Renováveis
- Jive · Motiva · Rodobens · Globenet · Origami · PROMIP · SP Ventures · Neolaw
- PROINAPE - RAMA (Secretaria de Educação do RJ)
- CEDIPRO — Rede Divina Providência (BH)
- Especiais da Maré (Complexo da Maré, RJ)

---

## 11. ANTI-PADRÕES E REGRAS DE OURO

### 11.1 Erros de Cor

❌ Nunca hardcodar valores HEX diretamente no CSS ou style attributes  
❌ Nunca usar `--cor-lilas` para finalidade que não seja o card de empresas  
❌ Nunca usar logo colorido em fundo marrom ou terracota  
❌ Nunca usar `#25D366` para outro propósito que não seja o botão WhatsApp  
❌ Nunca criar nova sombra diferente das duas definidas em `--sombra` e no hover de card  

### 11.2 Erros de Tipografia

❌ **NUNCA recriar o logo em League Spartan** — a fonte do logotipo é **Evermore** (`INSUMOS/02 - Tipografia/Evermore - Tipografia logo.zip`). Usar sempre os PNGs ou .ai oficiais  
❌ Nunca adicionar `text-transform: uppercase` via HTML (é sempre via CSS)  
❌ Nunca usar Helvetica Neue em labels, botões, tags, nav ou títulos  
❌ Nunca usar League Spartan com `font-weight` diferente dos pesos carregados (400/500/600/700/800)  
❌ Nunca criar novo `letter-spacing` sem consultar a tabela em §3.3  
❌ Nunca usar `font-weight: bold` — sempre usar o valor numérico  

### 11.3 Erros de Layout

❌ Nunca criar `.secao` sem `.container` interno (exceto `.case-grid`, que é full-bleed)  
❌ Nunca usar `border-radius` diferente de `var(--raio)` = 4px em cards/botões  
❌ Nunca criar um quarto breakpoint que não seja ≤960, ≤768 ou ≤480  
❌ Nunca colocar o footer dentro de `<main>`  

### 11.4 Erros de Componente

❌ Nunca duplicar o conteúdo de `.esteira__track` no HTML (o JS já faz isso)  
❌ Nunca usar `.btn-primario` no CTA final (usa `.btn-branco` sobre fundo terracota)  
❌ Nunca usar `.btn-branco` em fundos claros (reservado para fundos escuros/terracota)  
❌ Nunca omitir `aria-hidden="true"` nos marcadores e elementos decorativos  
❌ Nunca omitir `loading="lazy"` em imagens abaixo do fold  
❌ Nunca omitir `target="_blank" rel="noopener"` em links externos  

### 11.5 Erros de Animação

❌ Nunca observar `.animar` com `observer.unobserve()` removido (a animação só acontece uma vez — correto)  
❌ Nunca aplicar `animar-delay-1` sem `animar` na mesma classe  
❌ Nunca criar delays maiores que `animar-delay-4` (0.4s)  

### 11.6 Inconsistências Conhecidas (a corrigir)

⚠️ As páginas internas (Sobre, Serviços, Case, Como Contratar, Contato) ainda são stubs "em construção" — conteúdo pendente de desenvolvimento  
⚠️ Vários `style=""` inline no HTML da home (inline styles com tamanhos e cores) deveriam virar classes reutilizáveis  
⚠️ O logo no header usa `src="logo.png"` (caminho relativo à raiz da pasta) e nas páginas internas `src="../logo.png"` — verificar se o arquivo existe na raiz ou se deve ser `imagens/logo-colorido.png`  
⚠️ Os números grandes no case ("+56%", "+150%") usam texto estático — poderiam usar `data-valor` para o contador animado  
⚠️ Falta `<link rel="icon">` (favicon) em todas as páginas  
⚠️ A `label-secao` no case usa `label-secao--branca` mas está dentro de `.case-conteudo` que já tem fundo oliva — verificar consistência  

### 11.7 Regras de Ouro (positivas)

✅ Sempre usar `var(--raio)` = 4px. O PAAPS é reto, não arredondado — personalidade assertiva  
✅ Sempre textura noise no body — o PAAPS é orgânico, não digital puro  
✅ Sempre League Spartan em uppercase para o que é institucional  
✅ Sempre alternar fundos para criar ritmo visual nas páginas longas  
✅ Sempre ancorar CTAs ao territórioreal: citar municípios, equipamentos, tempos concretos  
✅ Sempre testar a hierarquia: marcadores → label-secao → h2 → conteúdo  
✅ Os quatro marcadores coloridos no hero (amarelo, terracota, oliva, branco) representam os quatro eixos de atuação — usar nessa ordem  

---

## 12. EQUIPE E CONTEÚDO INSTITUCIONAL

### 12.1 Time PAAPS (extraído do Portfólio e PAAPS Apresenta)

| Nome | Papel institucional |
|---|---|
| **Mallu Vasconcellos** | Sócia-founder do Programa PAAPS, especialista em Projetos em Psicologia Social |
| **Fabiane Vasconcellos** | Sócia, Consultora em Desenvolvimento Organizacional |
| **Lucas Pimenta** | Psicólogo, especialista em Psicologia Social, supervisor técnico e articulador local |
| **Beatriz Pereira** | Especialista em territorialidade e cultura, articuladora de equipes |
| **Gabriela Diniz** | Psicanalista, articuladora da Regional PAAPS do Rio de Janeiro; fundadora do TEAtrar |
| **Gustavo** | Diretor de Relacionamento, HEAD Estrategista da Comunidade ECOA |
| **Bruna Rolexan** | Gestora de Comunidade ECOA Psicologia Social |
| **Thainá Reis** | (papel a definir) |

### 12.2 Sub-programas e Iniciativas

| Nome | Descrição |
|---|---|
| **TEAtrar** | Teatro para crianças do espectro autista. Coord. Gabriela Diniz. Metodologia baseada em evidências |
| **ECOA** | Comunidade de Psicologia Social parceira — `ecoa.org.br` |
| **Programa Esperança** | Consultoria em Teoria da Mudança para políticas em rede |
| **Periódico PAAPS** | Publicação editorial mensal com curadoria de psicologia social crítica |

### 12.3 Canais Oficiais

| Canal | Endereço |
|---|---|
| WhatsApp | `https://wa.me/5511995231724` |
| Email | `paaps@digging.com.br` |
| Instagram | `@paaps.brasil` — `https://instagram.com/paaps.brasil` |
| LinkedIn | `https://linkedin.com/company/paaps` |
| Site | Repositório `site-paaps` — branch `main` |

### 12.4 Mecanismos de Contratação Pública

Para o card de Prefeituras, os mecanismos disponíveis são:
- Licitação Comum
- Inexigibilidade (Art. 74 / Lei 14.133/2021)
- Dispensa (Art. 75)
- CPSI
- UST

---

*Design System PAAPS v1.0 — Gerado por análise de: `paaps-site/css/style.css`, `components.css`, `js/main.js`, 6 páginas HTML + 25 designs Canva (pasta FAFr38vYHlc) incluindo Logo (DAG93Hzl89E), Portfólio Completo (DAHFjHckoxo), PAAPS Apresenta (DAHC-H9d6fU), Periódico Template (DAG_z_DXXto), Retrospectiva 2025 (DAG7-WYAXHM) e templates de carrossel (DAHLRDHZRxA).*
