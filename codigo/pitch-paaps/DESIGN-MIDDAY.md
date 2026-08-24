# O sistema de design do pitch da Midday

Tudo aqui foi lido do código desta pasta, arquivo por arquivo. Nada foi inferido
de print nem de memória. Quando o valor está escrito direto na classe do
Tailwind, o arquivo de origem está indicado ao lado.

O deck tem 10 slides, montados em `src/components/pitch/pitch-carousel.tsx`, nesta
ordem: capa, problema, solução, demonstração em vídeo, tração, equipe, planos,
visão, roadmap, fechamento.

---

## 1. Escala tipográfica

Duas famílias, e só duas. A de texto é a **Inter**, carregada pelo Google Fonts em
`src/app/layout.tsx` e aplicada no `<body>` inteiro. A segunda aparece só nos
números grandes do slide de tração: é a `font-mono`, que é a pilha monoespaçada
padrão do Tailwind (SF Mono no Mac). Não existe uma terceira fonte, nem itálico,
nem fonte serifada em lugar nenhum.

Os pesos usados são apenas dois: o normal e o `font-medium` (500). Não há negrito
pesado em nenhum slide.

| Tamanho | Onde é usado | Arquivo |
|---|---|---|
| **426px** (110px no celular) | Nome da marca na capa, ocupando a largura toda da tela, ancorado no canto inferior direito | `section-start.tsx` |
| **122px** (45px no celular) | A frase de missão, uma frase só, centralizada, `font-medium` e `leading-none` | `section-vision.tsx` |
| **122px** (80px no celular) | Os números de tração dentro dos cards, em `font-mono` | `section-traction.tsx` |
| **64px** | A citação da equipe, centralizada, `font-medium`, `leading-tight` | `section-team.tsx` |
| **60px** (`text-6xl`) | A frase central do slide de problema, centralizada, `leading-tight` | `section-problem.tsx` |
| **42px** | A frase central do slide de solução, centralizada, `leading-[58px]` | `section-solution.tsx` |
| **38px** | Título do painel lateral largo, `font-medium` | `section-traction.tsx` |
| **24px** (`text-2xl`) | Título de card. É o tamanho padrão de título dentro de um card | vários |
| **20px** (`text-xl`) | Título de card quando o card tem muito conteúdo (equipe, roadmap) | `section-team.tsx`, `section-next.tsx` |
| **18px** (`text-lg`) | A linha fina no topo de cada slide: nome da seção à esquerda, link à direita | todas as seções |
| **14px** (`text-sm`) | Corpo de texto dentro do card. Sempre cinza `#878787` e sempre centralizado | vários |
| **12px** (`text-xs`) | Texto dos balões de ajuda da barra de controles | `carousel-toolbar.tsx` |

O ponto que faz o deck funcionar: o salto entre um nível e o outro é violento. De
24px o texto cai direto para 14px, e sobe direto para 42px ou mais. Não existe
nada entre 24px e 38px, e não existe nada entre 14px e 18px. A hierarquia é lida
de longe porque é feita de contraste bruto, não de degraus pequenos.

---

## 2. Paleta

Cinco cinzas, um branco, um cinza de texto e um verde de sinal. Só isso.

| Hex | Papel |
|---|---|
| `#0C0C0C` | Fundo da página inteira, e fundo dos painéis largos laterais |
| `#121212` | Fundo do card. É o único tom que separa o card do fundo |
| `#161616` | As linhas da grade decorativa |
| `#2B2B2B` | A borda de tudo. Vem da variável `--border: 0, 0%, 17%` em `globals.css` |
| `#2C2C2C` | Borda da barra de controles de baixo |
| `#1A1A1A` a 80% | Fundo da barra de controles |
| `#878787` | Todo texto secundário: corpo do card, links do topo, ícones |
| `#FFFFFF` | Todo texto primário |
| `#F5F5F3` e `#D9D9D9` | Preenchimento dos ícones desenhados em SVG dentro dos cards |
| verde `#4ADE80` e `#22C55E` | O pontinho que pulsa ao lado de um número vivo |

O fundo `#0C0C0C` e a borda `#2B2B2B` só existem quando o sistema está em modo
escuro: em `globals.css` eles estão dentro de um bloco
`@media (prefers-color-scheme: dark)`. No modo claro o deck fica branco e perde o
desenho inteiro. Isso é uma escolha da Midday, e é uma decisão que a PAAPS
precisa tomar de novo, porque um deck que muda de cara conforme a configuração do
computador de quem abre não serve para apresentar.

---

## 3. O efeito vidro da Midday não é vidro

Este é o achado que mais importa para a PAAPS, porque é o oposto do que a maioria
dos decks faz.

**O card é um retângulo `#121212` sobre um fundo `#0C0C0C`, com borda de 1px
`#2B2B2B`, e nenhum blur.** A diferença entre o card e o fundo é de seis pontos
de luminosidade, quase nada. O que faz o card existir na tela é a borda de um
pixel, não o preenchimento.

O código é este, e é o componente `Card` inteiro (`src/components/pitch/ui.tsx`):

```
flex border flex-col items-center justify-center border-border
bg-[#121212] px-6 pt-8 pb-6 space-y-4
```

Não há sombra. Não há gradiente. Não há canto arredondado. Não há
`backdrop-blur`. O único lugar do projeto inteiro que usa blur é a barra de
controles flutuante lá embaixo (`backdrop-blur-lg` em `carousel-toolbar.tsx`), e
lá o blur serve para a barra não competir com o slide que passa por baixo dela.

---

## 4. Bordas e cantos

- Espessura: **1px**, sempre. Não existe borda de 2px em lugar nenhum.
- Cor: `#2B2B2B` (a classe `border-border`), salvo a barra de controles, em
  `#2C2C2C`, e as linhas da grade, em `#161616`.
- Raio: **zero**. Tudo é canto vivo. O `tailwind.config.ts` até declara
  `borderRadius.lg: var(--radius)`, mas essa variável `--radius` nunca é definida
  em `globals.css`. Na prática, as poucas classes `rounded-lg` que aparecem no
  slide de planos não produzem arredondamento nenhum: o navegador ignora o valor
  vazio. O deck é inteiramente quadrado.
- O único elemento redondo do projeto é o botão circular de play do vídeo
  (`rounded-full`, 56px por 56px) e o pontinho verde de 8px.

---

## 5. A grade decorativa

O componente `Grid` (`src/components/pitch/ui.tsx`) desenha uma malha de linhas
finíssimas sobre o slide:

- **6 colunas** (`grid-cols-6`), separadas por 5 linhas verticais de 1px
- **5 linhas horizontais** de 1px, distribuídas de topo a base
- Espaço entre colunas: **14px** (`gap-3.5`)
- Recuo lateral: **16px** (`px-4`)
- Cor das linhas: `#161616`, ou seja, quase invisível sobre o `#0C0C0C`
- `pointer-events-none`, para não atrapalhar o clique

**Atenção:** este componente está escrito mas não é chamado por nenhum slide no
código atual. Ele é um recurso disponível, não um elemento ativo do desenho. Se a
PAAPS quiser a malha aparecendo, precisa colocá-la em cada seção.

---

## 6. Espaçamento e montagem do slide

O esqueleto que se repete em quase toda seção:

```
min-h-screen relative w-screen
  → cabeçalho absoluto no topo: top-4, left-4/right-4 (left-8/right-8 no desktop)
  → flex flex-col min-h-screen justify-center container
      → grid md:grid-cols-3 gap-8
```

- **Largura útil:** a classe `container` do Tailwind, configurada em
  `tailwind.config.ts` como centralizada, com recuo de **2rem (32px)** e teto de
  **1400px** na tela grande.
- **Grade de conteúdo:** **3 colunas** no desktop, **1 coluna** no celular, com
  **32px** de intervalo (`gap-8`). É a mesma medida nas duas direções: a pilha
  vertical dentro de uma coluna também usa `space-y-8`, 32px.
- **Recheio do card:** 24px nas laterais, 32px em cima, 24px embaixo
  (`px-6 pt-8 pb-6`), e **16px** entre os elementos de dentro (`space-y-4`).
- **Altura mínima do card:** 365px (`min-h-[365px]`), o que mantém a coluna
  alinhada mesmo quando um card tem menos texto que o outro.
- **Painel largo lateral:** teto de 820px (`max-w-[820px]`), recheio de 24px
  (`p-6`), fundo `#0C0C0C`, ou seja, o painel largo tem o fundo da página, e não
  o fundo do card. É assim que ele lê como "área", enquanto o card lê como
  "objeto".
- **Celular:** a coluna de cards vira uma área de rolagem de 580px de altura, com
  100px de folga embaixo para a barra de controles não cobrir o último card
  (`h-[580px] overflow-auto pb-[100px]`).
- **Barra de controles:** 40px de altura (`h-10`), fixa a 20px do pé da tela
  (`bottom-5`), com 16px de recuo lateral e 16px entre os ícones.

---

## 7. O que dá para levar para a PAAPS, e o que não dá

Levar: a régua de contraste tipográfico, o card definido por borda e não por
preenchimento, a grade de 3 colunas com intervalo de 32px, o canto vivo, o
cabeçalho fino de 18px no topo de cada slide.

Não levar direto: a paleta. Ela é cinza sobre cinza, e a identidade da PAAPS tem
cor. A decisão de como a cor da PAAPS entra num sistema construído para ter só
cinza é uma decisão de identidade, não de código, e precisa passar pela Mallu
antes de qualquer slide ser montado.
