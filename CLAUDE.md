# CLAUDE.md : Contexto Mestre do Ecossistema PAAPS

> Este arquivo é lido automaticamente pelo Claude Code ao abrir o repositório.
> Ele carrega quem somos, como pensamos e o que nunca fazer. Tudo que for específico
> de uma frente (site, conteúdo, instagram) está documentado nos `CLAUDE.md` das
> subpastas e nos arquivos de `insumos-compartilhados/nucleo-comum/`.

---

## Quem é a PAAPS

Negócio social que cria e implementa projetos em psicologia, saúde mental e impacto
social em rede. Constrói sistemas humanos vivos capazes de sustentar cuidado,
articulação e capacidade coletiva em contextos institucionais complexos. Produz soluções
situadas que fortalecem equipes, vínculos, lideranças e capacidades institucionais.

Posicionamento público:
"Somos a Rede da Saúde Mental Coletiva para as Prefeituras à prova de futuro.
Governos, ONGs, ESG e NR01. Gestor, cuide dos seus servidores aqui."

---

## Quem é Mallu Vasconcellos

Porta-voz da Psicologia com Impacto Social real. CEO Founder da PAAPS (GovTech de
Psicologia Social para gestão pública). Psicóloga Social com mais de 5 anos em projetos
e políticas públicas. Linha de pensamento: psicologia além do consultório e do RH,
psicologia suleada, impacto sistêmico.

Frase-mote pessoal:
"Uma psicologia à prova de futuro para uma sociedade que já exige outras respostas.
Indo além do consultório ou RH no @paaps.brasil. Comunidade ECOA."

---

## Linha epistemológica (vale para TODO conteúdo e análise)

Estrutural e sistêmica. Nunca individualista ou meritocrática. O conteúdo
não convence: nomeia. A ferida tocada é sempre coletiva e estrutural, nunca individual
e de consumo.

---

## Projetos do ecossistema

| Projeto | O que é |
|---|---|
| PAAPS | Solução de Psicologia Social para políticas públicas e programas sociais |
| TEAtrar | Teatro conduzido por psicóloga para crianças e adolescentes autistas |
| ECOA | Comunidade de aprendizagem e vivência prática em Psicologia Social Latina |
| Periódico da Rede PAAPS | Publicação periódica |
| Plantão Psicológico | Psicoterapia para servidores públicos |
| Bela Vista de Minas | Prova de conceito: 5 meses com servidores (case de impacto) |

---

## Proibições ativas : NUNCA, em nenhum output

- **Travessão grande "—" (em dash): PROIBIDO em qualquer entrega, em qualquer contexto.**
  Usar `:`, `;` ou `-` no lugar. Vale para textos, legendas, commits, logs, relatórios,
  Notion, código e respostas no chat.
- Estrutura frasal "não é X, é Y" (considerada antiética e antiprofissional).
- Linguagem coachesca: "mindset", "gatilhos mentais", "alta performance", "virada de
  chave", "fórmula do sucesso", "escala", "leads qualificados", "dores da persona",
  "autoridade de elite", "produtividade extrema", "é só se esforçar que você consegue".
- Metáforas de guerra, violência ou competição ("tiro no escuro", "batalha pelo feed",
  "conquistar território", "armas de persuasão").
- Texto com aparência de IA, autoajuda, militância vazia ou venda explícita.
- Linguagem clínica/patologizante sem contexto relacional e sistêmico.
- Conteúdo pejorativo sobre o sistema político vigente (Mallu critica veladamente).
- **Escrever valor real de segredo em qualquer arquivo commitado: PROIBIDO.** Nunca
  colar token, chave de API, senha, `client_secret` ou dado pessoal (e-mail/CPF de
  lead ou servidor) em logs de sessão, notas de handoff, README, código ou qualquer
  arquivo do repo. Ao registrar configuração que contenha segredo, mascarar como
  `[removido]`. Chaves reais vivem só no `.env` (ignorado pelo git); dados de pessoas,
  no CRM ou planilha privada. Ver `automacoes/.env.example` e `PLANO-DE-ACAO.md`.

---

## Regras de execução por tipo de tarefa

- **Carrossel:** processo minucioso e iterativo. Entregar apenas a primeira rodada e
  aguardar validação antes de avançar. Nunca oferecer o lote inteiro de uma vez.
- **Relatórios:** nunca produzir sem screenshots das seções analisadas como evidência.
  Manter a qualidade analítica do início ao fim. Não afrouxar no meio, não resumir
  apressado no final. Cada seção merece a mesma profundidade.
- **Automação / HTML / código:** Mallu não programa. Nunca deixar entregas com
  placeholders vagos ou instruções que dependam de conhecimento técnico prévio.
- **Pesquisas:** 3 a 5 ciclos sucessivos de busca, um por vez, cada um precedido de
  parágrafo reflexivo justificando a query. Fontes aceitas exclusivamente: artigos
  acadêmicos indexados (SciELO, PubMed, Google Acadêmico), repositórios oficiais de
  políticas públicas, órgãos de estatística do governo (MTE, INSS, IBGE), portais
  regulamentados (CFP/CRP), dados explicitamente falseáveis. Bloqueio absoluto: blogs
  corporativos de marketing, artigos de opinião rasa, curadoria de RH genérica.
- **Posicionamento / benchmark:** antes de iniciar, acessar e analisar criticamente
  https://yunusns.com, https://www.agendapublica.org.br e https://dengo.com.

## Raciocínio obrigatório antes de qualquer output

Antes de gerar qualquer conteúdo ou análise, identificar internamente: canal de destino,
tom adequado, proibições ativas, risco de desvio para psicoeducação genérica ou
linguagem coachesca. Só avançar após esse raciocínio.

---

## Estrutura geral

```
SITE PAAPS/                          ← pasta raiz (renomear para PAAPS/ no Finder)
│
├── insumos-compartilhados/          ← acervo compartilhado por todos os projetos
│   ├── fotos/                       ← acervo de campo (1,5 GB, fora do git)
│   ├── identidade-visual/           ← logos, texturas, paleta, templates (não commitado)
│   ├── aplicacao-id-visual/         ← exemplos de aplicação da identidade
│   ├── nossa-camiseta-paaps/        ← não commitado
│   ├── nossos-clientes-e-parceiros/ ← não commitado
│   ├── docs/                        ← documentos institucionais convertidos para Markdown
│   │   ├── manual-marca-posicionamento.md
│   │   └── paaps-pesquisa-mercado.md
│   └── nucleo-comum/                ← O CORAÇÃO COMPARTILHADO, lido por todos os agentes
│       ├── voz-paaps.md             ← gabarito de voz e proibições ativas
│       ├── afeto-situado-mallu.md   ← como iniciar a peça quando o gancho não vem dela
│       ├── identidade-aplicada.md   ← paleta, tipografia, sistema Periódico, workflow Canva
│       ├── criterios-design.md      ← checklist do crítico de design
│       ├── qualidade-frontend.md    ← princípios de design (web + Canva)
│       ├── visual-instagram.md      ← 3 modos visuais, regras fotográficas
│       └── mapa-fontes-foto.md      ← fontes de fotografia documental (espaço reservado)
│
├── sessoes/                         ← logs automáticos de sessão (gerados por hook)
│   └── sessao-YYYY-MM-DD.md         ← um arquivo por dia, commitado automaticamente
│
├── codigo/                          ← TODO o código do ecossistema, indexado pelo CodeGraph
│   ├── .codegraph/                  ← índice/grafo de código (SQLite local, não commitado)
│   ├── site/                        ← Projeto 1: site institucional
│   │   ├── CLAUDE.md                ← instruções específicas do site
│   │   ├── DESIGN-SYSTEM.md
│   │   ├── PROMPT_CLAUDE_CODE_SITE_PAAPS.md
│   │   ├── .claude/skills/frontend-design/SKILL.md
│   │   ├── Sites - referências e analise/  ← screenshots de benchmark
│   │   └── paaps-site/              ← HTML/CSS/JS do site
│   ├── agente-whatsapp/             ← app Python do agente WhatsApp (deploy Railway)
│   └── dashboard/                   ← analytics Windsor AI (lê @amalluvasconcellos e @paaps.brasil)
│
├── conteudo/                        ← Projeto 2: equipe de agentes de conteúdo
│   ├── CLAUDE.md                    ← arquitetura da equipe de agentes (doc principal)
│   ├── .mcp.json                    ← conectores MCP (Excalidraw, Miro)
│   ├── _skill-original-para-desmembrar.md  ← skill antiga, guardada como referência
│   ├── arquitetura/                 ← diagramas SVG da arquitetura + workflow-paaps.html
│   ├── ciclos/                      ← outputs do Radar e Sentinela por data
│   ├── eventos/                     ← produção de conteúdo por evento (ex.: Caratinga)
│   ├── briefings/                   ← briefings consolidados do Narrador
│   └── instagram/
│       ├── amalluvasconcellos/      ← workspace do perfil pessoal de Mallu
│       └── paaps.brasil/            ← workspace do perfil institucional
│
├── hyperframes/                     ← projeto de vídeo HyperFrames (render HTML→MP4)
├── projetos/                        ← projetos avulsos (Minerva, portfólios…), não commitado
├── .claude/                         ← agents/, skills/ (formato pasta/SKILL.md), settings
└── .agents/                         ← skills instaladas via npx skills (não commitado)
```

> **Regra de workspace:** abrir o Claude Code SEMPRE na raiz `SITE PAAPS/`. Projetos
> novos (eventos, pitches, portfólios, provas de conceito) nascem como subpasta daqui:
> nunca em `~/Documents`, na home ou dentro de pastas técnicas como `dashboard/js/`.
> Fora da raiz não existem CLAUDE.md, skills, memória nem auto-push: o trabalho fica
> sem contexto e sem backup.

> **Pasta `codigo/` + CodeGraph (jul/2026):** todo código executável do ecossistema
> (`site/`, `agente-whatsapp/`, `dashboard/`) foi consolidado em `codigo/`. O CodeGraph
> indexa essa pasta e mantém um grafo de código local (SQLite em `codigo/.codegraph/`,
> não commitado). Antes de fazer grep/find ou abrir arquivos para entender ou localizar
> código, use o CodeGraph: MCP `codegraph_explore` (após reiniciar o Claude Code) ou o
> shell `codegraph explore "<símbolos ou pergunta>" --path codigo`. O servidor MCP está
> apontado para `codigo/` no `.mcp.json` (`serve --mcp --path codigo`). Código novo nasce
> dentro de `codigo/`; conteúdo, briefings e assets de marca continuam fora dela.

---

## GitHub

Repositório: https://github.com/paapsdiretoria-crypto/site-paaps
Branch principal: `main`
GitHub CLI: `~/bin/gh`
Visibilidade: **PRIVADO** desde jul/2026 (passou a conter orquestração de automações com
segredos e dados de pessoas). GitHub Pages gratuito não serve repo privado: dashboard
depende da decisão B do `PLANO-DE-ACAO.md`.

**Auto-push ativo:** ao final de cada conversa, um hook automático detecta alterações, faz commit e push. Não é necessário commitar manualmente.

```bash
# Commit manual, se necessário:
cd "/Users/mac/Documents/SITE PAAPS"
git add -A
git commit -m "descrição da alteração"
git push
```

> Os hooks usam `$CLAUDE_PROJECT_DIR` (nunca caminho fixo): a pasta pode ser movida ou
> renomeada sem quebrar o auto-push. Em 07/07 a pasta migrou de `~/Desktop` para
> `~/Documents` e o caminho fixo antigo deixou 2 dias sem commit (corrigido em 09/07).

---

## Arquivos não commitados (ver .gitignore)

- `insumos-compartilhados/fotos/`: acervo de campo (binários grandes)
- `insumos-compartilhados/identidade-visual/`: assets originais de marca (binários)
- `insumos-compartilhados/aplicacao-id-visual/`: exemplos de aplicação
- `insumos-compartilhados/nossa-camiseta-paaps/`
- `insumos-compartilhados/nossos-clientes-e-parceiros/`
- `insumos-compartilhados/docs/*-imagens/`: imagens extraídas dos DOCX
- `codigo/dashboard/js/config.js`: chave Windsor AI (nunca commitar)
- `projetos/`: projetos avulsos com conteúdo interno (mantido fora do repo por precaução)

---

## Renomear a pasta raiz

A pasta ainda se chama `SITE PAAPS/` por limitação do ambiente. Para renomear para `PAAPS/`: feche o Claude Code, renomeie a pasta no Finder, e reabra. O git não se importa com o nome da pasta raiz.

---

## Convenções Claude Code

- **Subagentes** → `.claude/agents/` (raiz, localização padrão reconhecida pelo Claude Code)
- **Agent teams** → requerem flag `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em settings.json

### Skills disponíveis (`.claude/skills/`)

> Formato obrigatório: cada skill é uma **pasta** com `SKILL.md` dentro
> (`.claude/skills/nome-da-skill/SKILL.md`). Arquivo `.md` solto não é carregado
> pelo Claude Code, foi a causa de um mês de erros "Unknown skill" (corrigido em 06/07).

| Skill | Acionar quando |
|---|---|
| `meta-architect` | Transformar briefing informal em prompt estruturado em XML |
| `evita-padrao-ia-imersao-claude` | Auditar e reescrever texto removendo padrões de IA em PT-BR |
| `copy-carrossel` | Escrever copy de carrossel para Instagram no tom de voz da Mallu, com revisão anti-IA embutida |
| `legendas-otimizadas` | Transformar roteiro ou conteúdo pronto em legenda otimizada para Instagram ou TikTok (SEO + GEO + algoritmo) |
| `frontend-design` *(em `codigo/site/`)* | Trabalhar no site: ativa automaticamente nessa pasta |
| `cria-skill-paaps` | Criar nova skill PAAPS: conduz ciclo RED-GREEN-REFACTOR aplicado a documentação de comportamento |
| `cria-agente-paaps` | Criar ou refinar agente PAAPS: briefing obrigatório, anatomia completa, protocolo de handoff, anti-IA |
| `notion-knowledge-capture` | Capturar insights/decisões da conversa e salvar como página estruturada no Notion (usa MCP Notion) |
| `notion-research-documentation` | Pesquisar no workspace Notion, sintetizar múltiplas páginas e criar relatório estruturado (usa MCP Notion) |
| `find-skills` | Descobrir e instalar skills do ecossistema open agent via `npx skills find/add` (vercel-labs/skills) |
| `paaps-pm-agil` | Gestão de projetos ágil para o PAAPS: ciclo de 8 fases, OKRs 4×3, roadmap, backlog INVEST+MoSCoW+Fibonacci, registro em tempo real no Notion |
| `design-parceiro` | Construir/revisar componente visual PAAPS: modo AUDITOR (anti-padrão de IA em design) + modo PARCEIRO (cocriação editorial) |
| `simulacao-ux` | Simular a experiência de personas navegando em sites (framework das 3 personas × sites de referência, saída para o Notion) |
| `benchmark-visual` | Benchmark visual comparativo de UI/UX a partir de uma referência (3–5 concorrentes, padrões, diferenciais) |
| `instala-skill-segura` | Instalar skill externa com auditoria de segurança prévia (código malicioso, exfiltração, escopo de permissões) |
| `espelho-notion` | Sincronizar agentes, skills e hooks COMPLETOS (nunca resumo) para as databases do Notion |
| `ferramenta-local-mallu` | Construir, consertar ou remover automação que roda na máquina da Mallu: atalho de tecla, agendamento, notificação, envio automático para o Notion. Carrega o mapa de permissões do macOS, os fatos fixos da máquina e o inventário de automações |
| `edicao-reel-paaps` | Editar vídeo JÁ GRAVADO da Mallu (talking-head) em Reel do **@paaps.brasil**: legendas em cadência, cards de dados, b-roll, trilha do HeyGen, SFX. Regras duras: nunca escurecer, texto fora do rosto, só League Spartan + Evermore, imagem congelada + áudio por re-mux |
| `edicao-reel-mallu` | Editar vídeo JÁ GRAVADO em Reel do perfil **PESSOAL @malluvasconcellos**: Impact + Times New Roman, bege com destaque vinho, revelação palavra a palavra com clique de trackpad, modo B digitado. Identidade INCOMPATÍVEL com a do PAAPS: não misturar as duas skills |
| `recupera-ditado` | Recuperar ditado por voz já gravado em `~/Ditado/AAAA-MM-DD.md`: último, por data, busca por conteúdo, listar. Material pessoal: mostra no chat, não commita nem cola no Notion sem pedido. Não use para gravar/transcrever (isso é `codigo/ditado/`) |
| `email-prospeccao` | Escrever ou refinar e-mail de prospecção fria do PAAPS Brasil (prefeitura, secretaria, associação): voz calibrada, gancho local verificável, estratégia por porte, gate da Mallu. Fonte única da craft de escrever; o agente `carta-fria` aponta para ela |
| `paaps-orquestrador-conteudo` | **Fonte da verdade do fluxo de conteúdo.** Julga em qual dos dois troncos a tarefa cai (A: a Mallu puxa o gancho; B: o PAAPS por frequência, começando no Radar), conduz o montante daquele tronco, aplica os 7 guardrails, opera o gate de voz peça a peça e aciona os agentes que já existem. Ler antes de qualquer produção de conteúdo |

### Notion : página de operações

Página central de operações do Claude no Notion (relatórios, análises, espelho do projeto):
`https://app.notion.com/p/SITE-INSTITUCIONAL-38044cb52e0080b1a07de17b31d00cd2`
Novas respostas longas pedidas "para ler no Notion" viram subpáginas dela, no formato das existentes.

### Hooks ativos (`.claude/settings.json` → evento `Stop`)

| Hook | Ordem | O que faz |
|---|---|---|
| **log-de-sessão** | 1º | Registra timestamp e arquivos alterados em `sessoes/sessao-YYYY-MM-DD.md` (deduplicado, ignora a própria pasta sessoes/) |
| **auto-push** | 2º | Detecta qualquer mudança (inclusive arquivos novos), commita com mensagem `auto: <áreas alteradas> - <data>` e faz push para `main` |

Ao encerrar uma tarefa relevante, registrar em 1–3 linhas no log do dia **o que foi
decidido/entregue** (não só o status do git): é o handoff para a próxima sessão.

Os hooks rodam automaticamente ao final de cada resposta. Não é necessário nenhuma ação manual.
