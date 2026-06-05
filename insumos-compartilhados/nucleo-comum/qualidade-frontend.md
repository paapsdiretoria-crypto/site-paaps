# Qualidade de Design — Princípios Agnósticos de Meio

Este arquivo descreve os princípios de design de alta qualidade de forma **agnóstica de meio**: valem tanto para HTML/CSS quanto para peças no Canva. Esta é uma instrução explícita da Mallu: os princípios de tipografia distintiva, layout não-genérico, composição espacial e ruptura de grid NÃO são exclusivos de web.

**Fonte:** skill frontend-design.md (desmembrada e generalizada em jun/2026).

**Quem lê este arquivo:** agente construtor de dashboard, produtor de peças editoriais HTML, agentes do site, aplicador visual de carrossel.
**Quem NÃO lê:** o copywriter de texto puro (legenda, roteiro de Reel) — este arquivo é sobre construção visual, não sobre escrita.

---

## 1. Antes de Criar — Três Perguntas Obrigatórias

1. **Para quem é essa peça?** Interno (equipe) / externo (gestor público, RH, psicóloga) / híbrido?
2. **Qual é o objetivo único?** Informar / engajar / converter / posicionar?
3. **O que torna esta peça inesquecível?** Qual é o único elemento que alguém vai lembrar depois de fechar a tela?

Só depois de responder as três, começar a construir.

---

## 2. Tipografia Distintiva

**Princípio:** a tipografia comunica antes mesmo de o texto ser lido. Ela carrega personalidade, urgência, credibilidade.

**O que fazer:**
- Criar contraste real entre título e corpo — peso, tamanho e espaçamento diferentes o suficiente para criar hierarquia visível
- `letter-spacing` é uma ferramenta de caráter — 0.08em em títulos densos, até 0.22em em labels menores
- Pesos extremos (800) para impacto; pesos suaves (400) para leitura longa

**Como se traduz em HTML/CSS:**
```css
h1 { font-family: var(--fonte-titulo); font-weight: 800; font-size: clamp(2.4rem, 5vw, 4rem); text-transform: uppercase; letter-spacing: -0.02em; }
.label { font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; }
```

**Como se traduz no Canva:**
- Headline: League Spartan, peso máximo disponível, tamanho que "domina" o slide — se não domina visualmente, aumentar
- Body: Helvetica Neue ou equivalente, peso normal, tamanho que cria contraste real com o headline (nunca tamanho similar)
- Labels acima do título: pequenos, em caps, com muito espaçamento entre letras

**Anti-padrão:** tamanho uniforme em todos os elementos do slide — isso é o que produz "visual de IA", sem hierarquia, sem caráter.

---

## 3. Layout Que Foge do Genérico

**Princípio:** o layout mais óbvio (centralizado, simétrico, com margens iguais) é o mais genérico. Fuja dele.

**O que fazer:**
- Assimetria intencional: um elemento ocupa espaço desproporcional para criar tensão
- Sobreposição: texto que passa por cima de imagem cria profundidade
- Fluxo diagonal: guia o olho de um elemento para outro de forma não óbvia

**Como se traduz em HTML/CSS:**
```css
/* Grid que quebra: texto no terço esquerdo, imagem no resto */
.hero { display: grid; grid-template-columns: 1fr 2fr; gap: 0; }
/* Elemento que escapa do container pai */
.numero-destaque { margin-left: -24px; font-size: 8rem; }
```

**Como se traduz no Canva:**
- Foto que ocupa 60–70% do frame, não centralizada mas alinhada a uma borda
- Texto que começa fora da margem "segura" — a tensão é proposital
- Evitar: foto no centro, texto em cima, texto embaixo em tamanhos iguais — é o template padrão, é o que parece feito por IA

---

## 4. Composição Espacial

**Princípio:** o espaço em branco (ou preto, ou a cor de fundo) é um elemento ativo — não preenchimento por preguiça.

**O que fazer:**
- Generosidade de espaço ao redor de elementos-chave aumenta o peso deles
- Densidade controlada: algumas áreas densas, outras respiradas — cria ritmo
- Um slide com muito respiro pode ser mais poderoso que um lotado de informação

**Como se traduz em HTML/CSS:**
```css
section { padding: clamp(48px, 8vw, 96px) 0; }
.card { padding: 28px 24px; }  /* nunca menos que isso */
```

**Como se traduz no Canva:**
- Não preencher todos os cantos do slide — deixar área de respiro intencional
- Quando o headline é grande e poderoso, deixá-lo "respirar" (não encher o slide de elementos secundários)
- Regra prática: se um slide parece "vazio", antes de adicionar elementos, avaliar se o vazio é proposital

---

## 5. Ruptura de Grid

**Princípio:** um elemento que "escapa" levemente do grid cria tensão visual positiva — desde que seja o elemento mais importante.

**O que fazer:**
- Identificar o elemento de mais peso visual na peça
- Permitir que ele ultrapasse as margens, sobreponha outros elementos, ou ocupe espaço desproporcional
- O resto da composição fica ordenado — só o elemento-âncora "rompe"

**Como se traduz em HTML/CSS:**
```css
/* Número que sangra para fora do container */
.stat-number { font-size: 12rem; margin-left: -2rem; line-height: 0.8; }
/* Imagem hero que vai até a borda */
.hero-img { margin-right: -var(--padding); width: calc(100% + var(--padding)); }
```

**Como se traduz no Canva:**
- Texto que ultrapassa levemente a margem de segurança (não por erro — por decisão)
- Foto posicionada de forma que parte dela é "cortada" pela borda do slide — cria sensação de que há mais para ver
- Elemento de destaque (número, palavra-chave) que ocupa mais espaço do que o grid "permitiria"

---

## 6. Movimento e Animação (contextos web)

Para HTML/CSS apenas. Não se aplica ao Canva.

**O que fazer:**
- `IntersectionObserver` para ativar animações quando o elemento entra na viewport
- Staggered reveals com `animation-delay` — cria orquestração, não caos
- Um momento de entrada bem construído vale mais que micro-interações espalhadas

```css
.animar { opacity: 0; transform: translateY(16px); }
.animar.visivel { opacity: 1; transform: translateY(0); transition: opacity 0.4s ease, transform 0.4s ease; }
.animar-delay-1 { transition-delay: 0.1s; }
.animar-delay-2 { transition-delay: 0.2s; }
.animar-delay-3 { transition-delay: 0.3s; }
.animar-delay-4 { transition-delay: 0.4s; }
```

**Anti-padrão:** bounce, spring, efeitos excessivos — produzem sensação de produto barato.

---

## 7. Textura e Profundidade

**Princípio:** superfícies planas e lisas parecem digitais. Superfícies com textura parecem reais e impressas.

**O que fazer:**
- Grain texture (ver `identidade-aplicada.md`) em todo body web
- Fundos levemente aquecidos (`#f7f3e3`) em vez de branco puro

**Como se traduz no Canva:**
- Adicionar overlay sutil de textura quando possível
- Evitar fundo branco puro — usar a cor de fundo PAAPS (`#f5f1e1`) ou marrom escuro

---

## 8. O Teste do "Parece IA?"

Antes de entregar qualquer peça, aplicar este teste: mostrar para alguém que não sabe que foi feito por IA. Se a pessoa imediatamente pensa "parece feito por IA", algo está errado. Os sinais mais comuns:

- Tipografia sem hierarquia real (tudo no mesmo tamanho/peso)
- Layout perfeitamente centralizado e simétrico
- Cores "seguras" (azul corporativo, cinza, branco) sem identidade
- Foto de stock genérica (sorriso, handshake, escritório branco)
- Texto que não diz nada específico (poderia ser qualquer empresa/organização)

Se a peça tem qualquer um desses sinais, devolver ao agente produtor para revisão.
