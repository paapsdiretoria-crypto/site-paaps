# Mapa completo de SITE PAAPS

Todo primeiro nível de `SITE PAAPS/`, pra nada ficar invisível pro Segundo Cérebro,
mesmo o que nunca vai virar página em `Conhecimento/`. Três status possíveis:

- **✅ compilado** : já tem página própria em `Conhecimento/`
- **📋 catalogado, não compilado** : tem conhecimento real dentro, ainda não passou
  por `compila`, listado no backlog abaixo
- **🔧 é código ou binário, não se aplica** : máquina, dependência ou mídia bruta,
  não é conhecimento a sintetizar

| Pasta | Tamanho | O que é | Status |
|---|---|---|---|
| `Arquivos/` | pequeno | fontes brutas imutáveis do Segundo Cérebro | ✅ é a própria base |
| `Conhecimento/` | pequeno | wiki sintetizada, este arquivo mora aqui | ✅ é a própria base |
| `codigo/` | 1,1 GB | site institucional, dashboards, automação de vídeo/WhatsApp, indexado pelo CodeGraph | 🔧 código |
| `automacoes/` | 11 MB | scripts e regras das 5 frentes de automação do negócio | 📋 tem regra/plano real dentro (ver backlog) |
| `conteudo/` | 24 MB | pipeline vivo de produção de carrossel/reel (ciclos, templates, entregas) | 📋 tem `sistema-gto/` real dentro (ver backlog); o resto é pipeline ativo, não conhecimento estático |
| `projetos/` | 965 MB | projetos avulsos, fora do git por precaução (Minerva, pipeflow-crm, pitches) | 📋 tem pitches e planos reais dentro (ver backlog); `pipeflow-crm/` é um app inteiro, isso sim é 🔧 código |
| `hyperframes/` | 19 GB | ferramenta de vídeo de terceiros, clonada, reproduzível via git clone | 🔧 dependência externa |
| `.claude/` | 539 MB | agentes, skills, memória, settings do Claude Code (a maior parte do peso é uma worktree órfã com trabalho não mesclado, ver memória de sessão) | 🔧 configuração |
| `sessoes/` | 536 KB | log automático de sessão, um arquivo por dia | 🔧 operacional, não conhecimento (ver `index.md`) |
| `segundo-cerebro/` | 0 (só atalhos) | cofre Obsidian dedicado: dois atalhos pra `Arquivos/` e `Conhecimento/` | 🔧 ferramenta de visualização |

## Backlog de compilação (📋, pronto pra priorizar aos poucos)

Nenhum destes está travado por automação que dependa do caminho exato (a confirmar
um a um, é o passo 2 do próprio `compila`). Feito um de cada vez, com conversa antes
de escrever a página, nunca em lote.

- [x] `conteudo/sistema-gto/00-BASE-DO-PROJETO-GTO.md` + `01-PLANO-DE-ACAO-GTO.md`
  → ver página do projeto GTO
- [ ] `automacoes/prospeccao-email/regras-prospeccao.md`, `cadencia.md`,
  `metricas.md`, `avisos-de-resposta.md`, `setup-resend-dominio.md`
- [ ] `automacoes/pesquisa-tcc-bh/PLANO.md` + cartas-modelo
- [ ] `projetos/impulsiona-startups-serasa/` : storytelling-estrategia,
  plano-slides-objecoes, objecoes-e-respostas, pitch-deck-esqueleto, inscricao-rascunho
- [ ] `projetos/minerva/PAAPS-Programa-Visao-Minerva.md` + `PAAPS_estrutura.md`
- [ ] `projetos/impactarte/cadastro-proponente-rascunho.md`

Regra pra todo item: a fonte original fica onde está (dentro da pasta operacional),
nunca é movida nem copiada pra `Arquivos/`. A página de síntese em `Conhecimento/`
cita o caminho real dela em texto, não como `[[link]]` clicável, porque essas pastas
ficam fora do cofre `segundo-cerebro/` no Obsidian de propósito.
