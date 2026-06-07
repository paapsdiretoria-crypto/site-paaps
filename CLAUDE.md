# CLAUDE.md — Contexto Mestre do Ecossistema PAAPS

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

## Proibições ativas — NUNCA, em nenhum output

- Estrutura frasal "não é X, é Y" (considerada antiética e antiprofissional).
- Linguagem coachesca: "mindset", "gatilhos mentais", "alta performance", "virada de
  chave", "fórmula do sucesso", "escala", "leads qualificados", "dores da persona",
  "autoridade de elite", "produtividade extrema", "é só se esforçar que você consegue".
- Metáforas de guerra, violência ou competição ("tiro no escuro", "batalha pelo feed",
  "conquistar território", "armas de persuasão").
- Texto com aparência de IA, autoajuda, militância vazia ou venda explícita.
- Linguagem clínica/patologizante sem contexto relacional e sistêmico.
- Conteúdo pejorativo sobre o sistema político vigente (Mallu critica veladamente).

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
│   ├── fotos/                       ← acervo de campo (1,5 GB — não commitado)
│   ├── identidade-visual/           ← logos, texturas, paleta, templates (não commitado)
│   ├── aplicacao-id-visual/         ← exemplos de aplicação da identidade
│   ├── nossa-camiseta-paaps/        ← não commitado
│   ├── nossos-clientes-e-parceiros/ ← não commitado
│   ├── docs/                        ← documentos institucionais convertidos para Markdown
│   │   ├── manual-marca-posicionamento.md
│   │   └── paaps-pesquisa-mercado.md
│   └── nucleo-comum/                ← O CORAÇÃO COMPARTILHADO — lido por todos os agentes
│       ├── voz-paaps.md             ← gabarito de voz e proibições ativas
│       ├── identidade-aplicada.md   ← paleta, tipografia, sistema Periódico, workflow Canva
│       ├── criterios-design.md      ← checklist do crítico de design
│       ├── qualidade-frontend.md    ← princípios de design (web + Canva)
│       ├── visual-instagram.md      ← 3 modos visuais, regras fotográficas
│       └── mapa-fontes-foto.md      ← fontes de fotografia documental (espaço reservado)
│
├── sessoes/                         ← logs automáticos de sessão (gerados por hook)
│   └── sessao-YYYY-MM-DD.md         ← um arquivo por dia, commitado automaticamente
│
├── site/                            ← Projeto 1: site institucional
│   ├── CLAUDE.md                    ← instruções específicas do site
│   ├── DESIGN-SYSTEM.md
│   ├── PROMPT_CLAUDE_CODE_SITE_PAAPS.md
│   ├── .claude/skills/frontend-design.md
│   └── paaps-site/                  ← HTML/CSS/JS do site
│
└── conteudo/                        ← Projeto 2: equipe de agentes de conteúdo
    ├── CLAUDE.md                    ← orquestrador (esboço)
    ├── .mcp.json                    ← conectores MCP (Canva etc.)
    ├── _skill-original-para-desmembrar.md  ← skill antiga, guardada como referência
    ├── agentes/                     ← skills dos agentes (a construir)
    ├── arquitetura/                 ← diagramas SVG da arquitetura de agentes
    ├── dashboard/                   ← analytics Windsor AI (lê @amalluvasconcellos e @paaps.brasil)
    └── instagram/
        ├── amalluvasconcellos/      ← workspace do perfil pessoal de Mallu
        └── paaps.brasil/            ← workspace do perfil institucional
```

---

## GitHub

Repositório: https://github.com/paapsdiretoria-crypto/site-paaps
Branch principal: `main`
GitHub CLI: `~/bin/gh`

**Auto-push ativo:** ao final de cada conversa, um hook automático detecta alterações, faz commit e push. Não é necessário commitar manualmente.

```bash
# Commit manual, se necessário:
cd "/Users/mac/Desktop/SITE PAAPS"
git add -A
git commit -m "descrição da alteração"
git push
```

---

## Arquivos não commitados (ver .gitignore)

- `insumos-compartilhados/fotos/`: acervo de campo (binários grandes)
- `insumos-compartilhados/identidade-visual/`: assets originais de marca (binários)
- `insumos-compartilhados/aplicacao-id-visual/`: exemplos de aplicação
- `insumos-compartilhados/nossa-camiseta-paaps/`
- `insumos-compartilhados/nossos-clientes-e-parceiros/`
- `insumos-compartilhados/docs/*-imagens/`: imagens extraídas dos DOCX
- `conteudo/dashboard/js/config.js`: chave Windsor AI (nunca commitar)

---

## Renomear a pasta raiz

A pasta ainda se chama `SITE PAAPS/` por limitação do ambiente. Para renomear para `PAAPS/`: feche o Claude Code, renomeie a pasta no Finder, e reabra. O git não se importa com o nome da pasta raiz.

---

## Convenções Claude Code

- **Subagentes** → `.claude/agents/` (raiz, localização padrão reconhecida pelo Claude Code)
- **Agent teams** → requerem flag `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em settings.json

### Skills disponíveis (`.claude/skills/`)

| Skill | Acionar quando |
|---|---|
| `meta-architect` | Transformar briefing informal em prompt estruturado em XML |
| `evita-padrao-ia-imersao-claude` | Auditar e reescrever texto removendo padrões de IA em PT-BR |
| `copy-carrossel` | Escrever copy de carrossel para Instagram no tom de voz da Mallu, com revisão anti-IA embutida |
| `legendas-otimizadas` | Transformar roteiro ou conteúdo pronto em legenda otimizada para Instagram ou TikTok (SEO + GEO + algoritmo) |
| `frontend-design` *(em `site/`)* | Trabalhar no site: ativa automaticamente nessa pasta |
| `cria-skill-paaps` | Criar nova skill PAAPS: conduz ciclo RED-GREEN-REFACTOR aplicado a documentação de comportamento |
| `cria-agente-paaps` | Criar ou refinar agente PAAPS: briefing obrigatório, anatomia completa, protocolo de handoff, anti-IA |
| `notion-knowledge-capture` | Capturar insights/decisões da conversa e salvar como página estruturada no Notion (usa MCP Notion) |
| `notion-research-documentation` | Pesquisar no workspace Notion, sintetizar múltiplas páginas e criar relatório estruturado (usa MCP Notion) |
| `find-skills` | Descobrir e instalar skills do ecossistema open agent via `npx skills find/add` (vercel-labs/skills) |
| `paaps-pm-agil` | Gestão de projetos ágil para o PAAPS: ciclo de 8 fases, OKRs 4×3, roadmap, backlog INVEST+MoSCoW+Fibonacci, registro em tempo real no Notion |

### Hooks ativos (`.claude/settings.json` → evento `Stop`)

| Hook | Ordem | O que faz |
|---|---|---|
| **log-de-sessão** | 1º | Registra timestamp e arquivos alterados em `sessoes/sessao-YYYY-MM-DD.md` |
| **auto-push** | 2º | Commita tudo (incluindo o log) e faz push para `main` |

Os hooks rodam automaticamente ao final de cada resposta. Não é necessário nenhuma ação manual.
