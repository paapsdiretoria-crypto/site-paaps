---
tags: [mapa, inventario]
origem: "Sistema"
resumo: "Todo primeiro nível de SITE PAAPS catalogado, inclusive o que nunca vai virar nota, com o backlog do que falta compilar"
serve-para: []
status: vivo
atualizado: 2026-09-12
aliases: [mapa, mapa do repositório, backlog de compilação]
---

# Mapa completo de SITE PAAPS

Todo primeiro nível de `SITE PAAPS/`, pra nada ficar invisível pro Segundo Cérebro,
mesmo o que nunca vai virar página em `Segundo Cérebro/`. Três status possíveis:

- **✅ compilado** : já tem página própria em `Segundo Cérebro/`
- **📋 catalogado, não compilado** : tem conhecimento real dentro, ainda não passou
  por `compila`, listado no backlog abaixo
- **🔧 é código ou binário, não se aplica** : máquina, dependência ou mídia bruta,
  não é conhecimento a sintetizar

| Pasta | Tamanho | O que é | Status |
|---|---|---|---|
| `Segundo Cérebro/` | pequeno | **o cofre**, vault do Obsidian. Este arquivo mora aqui | ✅ é a própria base |
| `Segundo Cérebro/Arquivos/` | pequeno | fontes brutas de texto, dentro do cofre. Onde o Web Clipper salva | ✅ é a própria base |
| `Arquivos/` (raiz) | 1,5 GB | acervo binário: foto, fonte tipográfica, identidade visual | 🔧 mídia bruta, nunca entra no grafo |
| `codigo/` | 1,1 GB | site institucional, dashboards, automação de vídeo/WhatsApp, indexado pelo CodeGraph | 📋 os 5 `CLAUDE.md` de dentro são constituição, viram nota (ver backlog); o código em si é 🔧 |
| `automacoes/` | 11 MB | scripts e regras das 5 frentes de automação do negócio | 📋 tem regra/plano real dentro (ver backlog) |
| `conteudo/` | 24 MB | pipeline vivo de produção de carrossel/reel (ciclos, templates, entregas) | 📋 `CLAUDE.md` e `sistema-gto/` viram nota; o resto é pipeline ativo, não conhecimento estático |
| `projetos/` | 965 MB | projetos avulsos, fora do git por precaução (Minerva, pipeflow-crm, pitches) | 📋 tem pitches e planos reais dentro (ver backlog); `pipeflow-crm/` é um app inteiro, isso sim é 🔧 código |
| `hyperframes/` | 19 GB | ferramenta de vídeo de terceiros, clonada, reproduzível via git clone | 🔧 dependência externa |
| `.claude/` | 539 MB | 23 agentes, 50 skills, settings do Claude Code (a maior parte do peso é uma worktree órfã com trabalho não mesclado) | 📋 agentes e skills viram índice e perfil no cofre, mas os arquivos **nunca saem daqui** |
| `sessoes/` | 536 KB | log automático de sessão, um por dia | 🔧 é o `git status` do dia, operacional. A linha do tempo do conhecimento é [[Log]] |

## Backlog de compilação (📋, pronto pra priorizar aos poucos)

Nenhum destes está travado por automação que dependa do caminho exato. A ordem abaixo é
a que a Mallu fechou em 12/09/2026.

**Fase 1, as 10 constituições:**
- [ ] `CLAUDE.md` da raiz : a constituição mais rica do repositório, vira de 35 a 45 notas
- [ ] `automacoes/CLAUDE.md`
- [ ] `conteudo/CLAUDE.md`
- [ ] `codigo/site/CLAUDE.md`
- [ ] `codigo/agente-whatsapp/CLAUDE.md`
- [ ] `codigo/dashboard-agentes/CLAUDE.md`
- [ ] `conteudo/instagram/amalluvasconcellos/CLAUDE.md`
- [ ] `conteudo/instagram/paaps.brasil/CLAUDE.md`
- [ ] `Segundo Cérebro/Projetos/ecoa/ecoa.md`
- [ ] `projetos/minerva/CLAUDE.md`

**Fase 2, o pitch geral atual** (só o geral, nunca os projetos): `codigo/site/pitch-serasa/`,
uma nota por subtópico: modelo licenciado fora do Brasil, uma por case, aprendizados dos
cases, tese, TAM/SAM/SOM, modelo financeiro, ODS, uma por objeção.

**Fase 3, as 5 frentes de `automacoes/`** com agentes e skills interligados:
- [x] `automacoes/prospeccao-email/*` → [[prospeccao-fria]] (a reescrever no formato novo)
- [x] `automacoes/pesquisa-tcc-bh/*` → [[pesquisa-tcc-bh]] (a reescrever no formato novo)
- [x] `conteudo/sistema-gto/*` → [[sistema-gto-ai-first]]
- [ ] `automacoes/funil-leads/`, `conteudo-pipeline/`, `crescimento-instagram/`, `trafego-pago/`
- [ ] `6-sistema/agentes.md` e `6-sistema/skills.md`, os dois índices

**Fase 4:** migração das 129 memórias automáticas (`memoria-claude/`).

**Fase 5, projetos vivos e editais.** Parada de propósito até a Mallu atualizar o que
morreu: `projetos/impulsiona-startups-serasa/`, `minerva/`, `impactarte/`,
`referral-monte-azul/`, `artefato-financeiro/`.

Regra pra todo item: a fonte original fica onde está, nunca é movida nem copiada pro
cofre. A nota cita o caminho real dela em texto simples, no campo `fontes` do cabeçalho,
nunca como ``[[link]]``, porque essas pastas ficam fora do cofre de propósito.

## Onde isso serve

Em toda decisão de onde um material novo pousa: o que já é nota, o que ainda é
arquivo cru fora do cofre, e o que nunca vai virar nota.
