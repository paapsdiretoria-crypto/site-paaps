# Arquitetura v2 — Sistema de Agentes PAAPS

Versão texto do SVG `arquitetura_v2_agentes_paaps_orquestrador_criticos.svg`. Leia este arquivo; use o SVG apenas para visualização.

---

## Orquestrador

**`conteudo/CLAUDE.md`** — coordena todas as camadas e os handoffs entre agentes.

---

## Camada 1 — Detecção

Radar e Cartógrafo rodam **em paralelo**. Os dois convergem para o Curador.

| Agente | Função |
|---|---|
| **Radar** | Detecta temas em alta com dados reais (Windsor API + WebSearch) |
| **Cartógrafo** | Mapeia os ângulos críticos do PAAPS nos temas encontrados |
| **Curador** | Ponte: funde os dois outputs → apresenta 3 temas à Mallu com maior potência de posicionamento |

---

## Camada 2 — Captação

Mallu entra aqui. Só ela traz a perspectiva única.

1. **Fase 1** — pergunta aberta → Mallu responde livremente
2. **Fase 2** — 5–10 escolhas múltiplas → Mallu clica nas opções
3. **Tradutor** → processa as respostas e gera o briefing que alimenta todos os canais

---

## Camada 3 — Subagentes de canal

Cada canal recebe o briefing do Tradutor e aciona o time de apoio antes de fechar a peça.

**Canais:**

| Agente | Perfil |
|---|---|
| Mallu — LinkedIn | Autoridade analítica, leitura de sistema |
| Mallu — Reels/TikTok | Roteiros poético-políticos em vídeo |
| PAAPS — carrossel IG | Militante, irônico, foco na Cláudia |
| PAAPS — LinkedIn | Técnico-estratégico, dados duros |
| PAAPS — Facebook | Registro institucional |
| Interlocutor ECOA | Comunidade — entra o Gustavo |

**Time de apoio (acionado por cada canal):**

| Agente | Função | Status |
|---|---|---|
| Crítico de conteúdo | Avalia se soa PAAPS; devolve feedback de como falaria | A construir |
| Crítico de design | Checa texto sobreposto, crédito de fotógrafo, legibilidade | A construir |
| Buscador de fotos | Baixa foto real com crédito; salva na pasta certa | A construir |
| Aplicador visual (Canva) | Executa a peça no Canva | **Já existe** |

---

## Camada 4 — Aprovação final

**Mallu valida e publica.** Nada sai sem sua revisão.

---

## Status de construção

| Item | Status |
|---|---|
| Aplicador visual | ✅ Existe — `nucleo-comum/identidade-aplicada.md` + MCP Canva |
| Orquestrador | ✅ Esboço — `conteudo/CLAUDE.md` |
| Núcleo comum (6 arquivos) | ✅ Criado |
| Radar, Cartógrafo, Curador, Tradutor | 🔲 A construir |
| 6 subagentes de canal | 🔲 A construir |
| Crítico de conteúdo | 🔲 A construir |
| Crítico de design | 🔲 A construir |
| Buscador de fotos | 🔲 A construir (depende de `mapa-fontes-foto.md` completo) |

---

## Convenções de implementação

- Subagentes definidos em **`.claude/agents/`** (raiz do projeto)
- Skills do nucleo-comum pré-carregadas via campo `skills:` no frontmatter de cada subagente
- Agent teams requerem `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em `settings.json`
- Roteador de contexto: skill `/mapa-de-contexto` em `.claude/skills/`
