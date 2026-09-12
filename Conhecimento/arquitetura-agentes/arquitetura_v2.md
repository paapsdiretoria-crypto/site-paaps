# Arquitetura v2 — Sistema de Agentes PAAPS

Versão texto do SVG `arquitetura_v2_agentes_paaps_orquestrador_criticos.svg`.

**Última revisão:** jun/2026 — mudanças aprovadas por Mallu (ver detalhes abaixo).

---

## Orquestrador

**`conteudo/CLAUDE.md`** — coordena todas as camadas.

---

## Camada 1 — Inteligência (3 agentes)

### Radar e Sentinela rodam em PARALELO

| Agente | Arquivo | Função | Status |
|---|---|---|---|
| **Radar** | `.claude/agents/radar.md` | 20 pautas em ascensão (não em explosão). Escopo: política, legislação, viral, cultura, geopolítica, relatórios, datas culturais | ✅ Definido |
| **Sentinela** | `.claude/agents/sentinela.md` | Analisa dashboard Windsor + perfis IG/LinkedIn de Mallu e PAAPS. Auto-report crítico. Estratégias complexas | ✅ Definido (NOVO) |

### Depois do paralelo — em sequência:

| Agente | Arquivo | Função | Status |
|---|---|---|---|
| **Tecelã** | `.claude/agents/tecela.md` | Conectora criativa. Leitura crítica das pautas + dados do Sentinela. Repertório em 22 autores. Ideia primeiro, autor depois. NÃO academicista | ✅ Definido (ex-Cartógrafo) |
| **Narrador** | `.claude/agents/narrador.md` | Escreve documento completo de briefing. Pode chamar agentes anteriores. Entrega: `briefing-YYYY-MM-DD.md` | ✅ Definido (ex-Curador) |

---

## Camada 2 — Captação de Mallu

Mallu lê o documento do Narrador e responde com sua perspectiva (Fase 1 + Fase 2).

| Agente | Arquivo | Status |
|---|---|---|
| **Tradutor** | `.claude/agents/tradutor.md` | ⚠ INCOMPLETO |

---

## Camada 3 — Produção por Canal

| Canal | Arquivo | Status |
|---|---|---|
| Mallu — LinkedIn | `.claude/agents/mallu-linkedin.md` | ⚠ INCOMPLETO |
| Mallu — Reels/TikTok | `.claude/agents/mallu-reels.md` | ⚠ INCOMPLETO |
| PAAPS — carrossel IG | `.claude/agents/paaps-carrossel.md` | ⚠ INCOMPLETO |
| PAAPS — LinkedIn | `.claude/agents/paaps-linkedin.md` | ⚠ INCOMPLETO |
| PAAPS — Facebook | `.claude/agents/paaps-facebook.md` | ⚠ INCOMPLETO |
| Interlocutor ECOA | `.claude/agents/ecoa.md` | ⚠ INCOMPLETO |

**Time de apoio (por canal):**

| Agente | Arquivo | Status |
|---|---|---|
| Crítico de conteúdo | `.claude/agents/critico-conteudo.md` | ⚠ INCOMPLETO |
| Crítico de design | `.claude/agents/critico-design.md` | ⚠ INCOMPLETO |
| Buscador de fotos | `.claude/agents/buscador-fotos.md` | ⚠ INCOMPLETO |
| Aplicador visual | `.claude/agents/aplicador-visual.md` | ⚠ INCOMPLETO (instruções em `identidade-aplicada.md`) |

---

## Camada 4 — Aprovação final

**Mallu valida e publica.** Nada sai sem sua revisão.

---

## Status de construção

| Item | Status |
|---|---|
| Nucleo comum (6 arquivos) | ✅ Criado |
| Radar | ✅ Definido |
| Sentinela (novo) | ✅ Definido |
| Tecelã (ex-Cartógrafo) | ✅ Definido |
| Narrador (ex-Curador) | ✅ Definido |
| Tradutor | ⚠ Placeholder |
| 6 agentes de canal | ⚠ Placeholders |
| 4 agentes de apoio | ⚠ Placeholders |

---

## Mudanças da v1 para a v2

1. **Radar** ampliado: 20 temas (era 3), escopo jornalístico, parâmetro de aprovação é potencial de posicionamento PAAPS + ascensão (não "dados recentes")
2. **Sentinela** adicionado: agente novo de inteligência estratégica — lê dashboard + perfis IG/LinkedIn
3. **Cartógrafo** → **Tecelã**: novo nome, novo papel — conectora criativa com repertório crítico, não academicista
4. **Curador** → **Narrador**: escreve documento completo de briefing (não seleciona 3 temas)
5. **Camada 2** reformulada: Mallu lê o documento do Narrador (não uma lista de 3 temas)

---

## Convenções de implementação

- Agentes definidos em **`.claude/agents/`** (raiz do projeto)
- Agent teams requerem `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`
- Skills do nucleo-comum pré-carregadas via campo `skills:` no frontmatter
- Roteador: `/mapa-de-contexto` em `.claude/skills/`
