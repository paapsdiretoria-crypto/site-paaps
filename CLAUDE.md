# CLAUDE.md — Pasta de Trabalho PAAPS

Esta pasta contém três projetos distintos que compartilham insumos de marca. Cada projeto tem seu próprio `CLAUDE.md` interno.

**Para agentes:** invoque `/mapa-de-contexto` para saber o que ler dado o que você está fazendo.

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

- `insumos-compartilhados/fotos/` — acervo de campo (binários grandes)
- `insumos-compartilhados/identidade-visual/` — assets originais de marca (binários)
- `insumos-compartilhados/aplicacao-id-visual/` — exemplos de aplicação
- `insumos-compartilhados/nossa-camiseta-paaps/`
- `insumos-compartilhados/nossos-clientes-e-parceiros/`
- `insumos-compartilhados/docs/*-imagens/` — imagens extraídas dos DOCX
- `conteudo/dashboard/js/config.js` — chave Windsor AI (nunca commitar)

---

## Renomear a pasta raiz

A pasta ainda se chama `SITE PAAPS/` por limitação do ambiente. Para renomear para `PAAPS/`: feche o Claude Code, renomeie a pasta no Finder, e reabra. O git não se importa com o nome da pasta raiz.

---

## Convenções Claude Code

- **Skills** → `.claude/skills/` (raiz) — descobertas automaticamente. Skill ativa: `mapa-de-contexto`
- **Subagentes** → `.claude/agents/` (raiz) — localização padrão reconhecida pelo Claude Code
- **Site** → `site/.claude/skills/frontend-design.md` — descoberta quando trabalhando em `site/`
- **Agent teams** → requerem flag `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em settings.json
