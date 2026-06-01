# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Site institucional estático do **PAAPS** (Programa de Aceleração Ativa de Projetos Sociais) — coletivo de psicólogas sociais especializado em saúde mental como política pública. O site é construído em HTML/CSS/JS puro, sem framework ou bundler.

## Estrutura do site

O código do site vive em `paaps-site/`. Cada página é uma pasta com seu próprio `index.html`:

```
paaps-site/
  index.html          ← Home
  sobre/index.html
  servicos/index.html
  como-contratar/index.html
  case/index.html
  contato/index.html
  css/
    style.css         ← variáveis globais, tipografia, utilitários, responsividade base
    components.css    ← header, hero, cards, footer, componentes específicos
  js/main.js          ← hamburger, scroll, esteira marquee, IntersectionObserver, contadores
  imagens/            ← assets do site (fotos, logos, texturas, pontinhos)
```

`INSUMOS/` contém os arquivos fonte da identidade visual (logos originais, paleta, tipografia, texturas) e fotos brutas. `DOCX BASE/` contém documentos de referência institucional.

## Como visualizar

Abra `paaps-site/index.html` diretamente no navegador, ou sirva localmente:

```bash
cd "paaps-site" && python3 -m http.server 8080
```

Não há processo de build, transpilação ou dependências npm.

## Identidade visual (CSS)

Variáveis definidas em `style.css` `:root` — sempre usar as variáveis, nunca hardcodar cores:

| Variável | Valor | Uso |
|---|---|---|
| `--cor-fundo` | `#f5f1e1` | Fundo geral |
| `--cor-marrom` | `#442309` | Texto principal, seção escura |
| `--cor-terracota` | `#cb4710` | Destaque primário, CTAs |
| `--cor-oliva` | `#aea349` | Destaque secundário |
| `--cor-amarelo` | `#f7c31c` | Números grandes, acentos |
| `--cor-bege-rosa` | `#bbada2` | Labels, subtextos suaves |
| `--cor-lilas` | `#bcb6f2` | Card trilha empresas |

Tipografia: `League Spartan` (títulos, labels, botões) via Google Fonts · `Helvetica Neue` (corpo).

## Padrões de componentes

**Animações de entrada:** adicionar classe `animar` ao elemento. O `main.js` usa IntersectionObserver para adicionar `visivel` quando entra na viewport. Use `animar-delay-1/2/3/4` para escalonamento.

**Marcadores coloridos:** `<span class="marcador marcador--terracota">` — usados como elemento visual antes de títulos de seção.

**Label de seção:** `<span class="label-secao">` — texto em caps pequeno acima do h2.

**Esteira marquee:** o `main.js` duplica automaticamente o conteúdo de `.esteira__track` para criar o loop infinito.

**Contadores animados:** `<span data-valor="56" data-prefixo="+" data-sufixo="%">` — o JS anima de 0 até o valor ao entrar na viewport.

## Responsividade

Breakpoints em `components.css`:
- `≤ 960px`: grid-3 vira 2 colunas, case-grid vira 1 coluna
- `≤ 768px`: header hamburger ativo, grids viram 1 coluna, nav oculta
- `≤ 480px`: hero usa `100svh`, grid-numeros vira 1 coluna

## Contato institucional

- WhatsApp: `https://wa.me/5511995231724`
- Email: `paaps@digging.com.br`
- Instagram: `@paaps.brasil`
- Razão social: DIGGING DESENVOLVIMENTO E CAPACITAÇÃO ORGANIZACIONAL E INDIVIDUAL LTDA · CNPJ 05.983.700/0001-67
