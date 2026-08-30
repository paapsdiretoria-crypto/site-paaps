# CLAUDE.md — Projeto Site PAAPS

Site institucional estático da **PAAPS** — negócio social / GovTech de Psicologia Social para gestão pública ("Rede da Saúde Mental Coletiva para as Prefeituras à prova de futuro" — ver posicionamento completo no CLAUDE.md raiz). Construído em HTML/CSS/JS puro, sem framework ou bundler.

---

## Estrutura do site

```
site/
  DESIGN-SYSTEM.md               ← documentação do design system
  REGRAS-MOBILE-PAAPS-SITE.md    ← as 6 leis do mobile, fonte da verdade da responsividade
  PROMPT-SITE-PAAPS-V1.md        ← prompt de referência mais recente
  home/                          ← O SITE ATIVO, publicado em paaps.com.br
    index.html                   ← Home
    como-atuamos/index.html
    treinamentos/index.html
    urgencias/index.html
    contato/index.html
    mapa/mapa-rede.html
    css/paaps.css                ← variáveis globais, tipografia, componentes, responsividade
    js/site.js                   ← todo o JS do site, em IIFEs por funcionalidade
    img/                         ← assets do site (fotos, texturas, pontinhos, logos)
    fontes/                      ← League Spartan local via @font-face
  deploy-paaps-com-br/           ← espelho de home/ empacotado para publicação (cPanel/HostGator),
                                    ver LEIA-ME-DEPLOY.md ali dentro. Editar sempre em home/ primeiro,
                                    depois replicar aqui — nunca o inverso.
```

**Insumos compartilhados:** logos, texturas e identidade visual ficam em `../../insumos-compartilhados/`.

---

## Como visualizar

```bash
cd "codigo/site/home" && python3 -m http.server 8080
# Abrir: http://localhost:8080
```

Não há build, transpilação ou dependências npm.

---

## Identidade visual (CSS)

Variáveis em `home/css/paaps.css` `:root` — **sempre usar variáveis, nunca hardcodar hex:**

| Variável | Valor | Uso |
|---|---|---|
| `--bege` | `#f5f1e1` | 1. Dominante, o papel |
| `--marrom` | `#442309` | 2. A tinta, seções escuras |
| `--amarelo` | `#f7c31c` | 3. Palavra-chave, destaque pontual |
| `--oliva` | `#aea349` | 4. Cor chapada, detalhe |
| `--terracota` | `#cb4710` | 5. Raro |
| `--roxo` | `#bcb6f2` | 6. Quase nunca |

Tipografia: `League Spartan` (títulos, em CAIXA ALTA) · corpo de texto em fonte padrão do sistema.

---

## Padrões de componentes

O CSS é organizado em blocos comentados por seção da home (ver o mapa no topo de `home/index.html`, "MAPA DESTA PÁGINA"). O JS (`home/js/site.js`) é uma sequência de IIFEs, uma por funcionalidade (menu, trilha de seções, animações de entrada, título rotativo do hero etc.) — ao adicionar comportamento novo, seguir esse padrão em vez de criar um arquivo JS separado.

**Classe `.chave` / `.grifo`:** destaque em amarelo dentro de um título ou parágrafo.

**`.grifo--linha`:** frase que não pode quebrar no meio (`white-space:nowrap`, com fallback `normal` abaixo de 520px) — usar sempre que uma frase precisa ser lida como unidade.

---

## Responsividade

Fonte da verdade: `REGRAS-MOBILE-PAAPS-SITE.md` (as 6 leis do mobile — a foto ocupa a tela inteira, o texto mora dentro da foto, uma ideia por tela, etc.). Breakpoints principais em `home/css/paaps.css`: `≤960px` e `≤768px`, com um bloco de overrides dedicado ao `#hero` dentro do breakpoint `≤768px`. Tamanhos fluidos via `clamp()` na maior parte da tipografia, em vez de valores fixos por breakpoint.

---

## Contato institucional

- WhatsApp: `https://wa.me/5511995231724`
- Email: `paaps@digging.com.br`
- Instagram: `@paaps.brasil`
- Razão social: DIGGING DESENVOLVIMENTO E CAPACITAÇÃO ORGANIZACIONAL E INDIVIDUAL LTDA · CNPJ 05.983.700/0001-67
