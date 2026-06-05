# CLAUDE.md — Projeto Site PAAPS

Site institucional estático do **PAAPS** (Programa de Aceleração Ativa de Projetos Sociais) — coletivo de psicólogas sociais especializado em saúde mental como política pública. Construído em HTML/CSS/JS puro, sem framework ou bundler.

---

## Estrutura do site

```
site/
  DESIGN-SYSTEM.md               ← documentação do design system
  PROMPT_CLAUDE_CODE_SITE_PAAPS.md ← prompt de referência
  .claude/skills/frontend-design.md ← skill de design genérica
  paaps-site/
    index.html                   ← Home
    logo.png
    sobre/index.html
    servicos/index.html
    como-contratar/index.html
    case/index.html
    contato/index.html
    css/
      style.css                  ← variáveis globais, tipografia, utilitários, responsividade
      components.css             ← header, hero, cards, footer, componentes específicos
    js/main.js                   ← hamburger, scroll, marquee, IntersectionObserver, contadores
    imagens/                     ← assets do site (fotos, texturas, pontinhos — exceto logo.png)
```

**Insumos compartilhados:** logos, texturas e identidade visual ficam em `../insumos-compartilhados/`.

---

## Como visualizar

```bash
cd "site/paaps-site" && python3 -m http.server 8080
# Abrir: http://localhost:8080
```

Não há build, transpilação ou dependências npm.

---

## Identidade visual (CSS)

Variáveis em `style.css` `:root` — **sempre usar variáveis, nunca hardcodar hex:**

| Variável | Valor | Uso |
|---|---|---|
| `--cor-fundo` | `#f5f1e1` | Fundo geral |
| `--cor-marrom` | `#442309` | Texto principal, seção escura |
| `--cor-terracota` | `#cb4710` | Destaque primário, CTAs |
| `--cor-oliva` | `#aea349` | Destaque secundário |
| `--cor-amarelo` | `#f7c31c` | Números grandes, acentos |
| `--cor-bege-rosa` | `#bbada2` | Labels, subtextos suaves |
| `--cor-lilas` | `#bcb6f2` | Card trilha empresas |

Tipografia: `League Spartan` (títulos, labels, botões) · `Helvetica Neue` (corpo).

---

## Padrões de componentes

**Animações de entrada:** classe `animar` no elemento. O `main.js` usa IntersectionObserver para adicionar `visivel` quando entra na viewport. Use `animar-delay-1/2/3/4` para escalonamento.

**Marcadores coloridos:** `<span class="marcador marcador--terracota">` — antes de títulos de seção.

**Label de seção:** `<span class="label-secao">` — texto em caps pequeno acima do h2.

**Esteira marquee:** `main.js` duplica automaticamente o conteúdo de `.esteira__track`.

**Contadores animados:** `<span data-valor="56" data-prefixo="+" data-sufixo="%">` — JS anima de 0 até o valor.

---

## Responsividade

Breakpoints em `components.css` (não criar novos):
- `≤ 960px`: grid-3 vira 2 colunas, case-grid vira 1 coluna
- `≤ 768px`: header hamburger ativo, grids viram 1 coluna, nav oculta
- `≤ 480px`: hero usa `100svh`, grid-numeros vira 1 coluna

---

## Contato institucional

- WhatsApp: `https://wa.me/5511995231724`
- Email: `paaps@digging.com.br`
- Instagram: `@paaps.brasil`
- Razão social: DIGGING DESENVOLVIMENTO E CAPACITAÇÃO ORGANIZACIONAL E INDIVIDUAL LTDA · CNPJ 05.983.700/0001-67
