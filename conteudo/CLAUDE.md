# CLAUDE.md — Orquestrador da Equipe de Conteúdo PAAPS

Produzir conteúdo que soa como Mallu Vasconcellos e como o PAAPS — nunca como IA.

Arquitetura detalhada: `conteudo/arquitetura/arquitetura_v2.md`

---

## Regra de Ouro

**Nenhum agente publica nada.** Toda peça passa pela aprovação final da Mallu.

---

## Arquitetura em 4 Camadas

```
CAMADA 1 — DETECÇÃO (subagentes em paralelo via .claude/agents/)
  Radar      → temas em alta (Windsor API + WebSearch)
  Cartógrafo → ângulos críticos do PAAPS nos temas
  Curador    → ponte: funde outputs, apresenta 3 temas à Mallu

CAMADA 2 — CAPTAÇÃO (Mallu entra)
  Fase 1: pergunta aberta → Mallu responde livremente
  Fase 2: 5-10 escolhas → Mallu clica
  Tradutor → gera o briefing que alimenta todos os canais

CAMADA 3 — PRODUÇÃO POR CANAL (subagentes em paralelo)
  Canais: Mallu LinkedIn · Mallu Reels/TikTok · PAAPS carrossel IG
          PAAPS LinkedIn · PAAPS Facebook · Interlocutor ECOA
  Time de apoio por canal: Crítico de conteúdo · Crítico de design
                           Buscador de fotos · Aplicador visual (Canva)

CAMADA 4 — APROVAÇÃO FINAL
  Mallu valida e publica
```

---

## Onde Cada Agente Busca Contexto

Nucleo comum: `../insumos-compartilhados/nucleo-comum/`

| Agente | Lê |
|---|---|
| Todos | `voz-paaps.md` |
| Canais IG | + `visual-instagram.md` |
| Crítico de conteúdo | `voz-paaps.md` |
| Crítico de design | `criterios-design.md` + `qualidade-frontend.md` |
| Aplicador visual | `identidade-aplicada.md` + `qualidade-frontend.md` |
| Buscador de fotos | `mapa-fontes-foto.md` |
| Site | `qualidade-frontend.md` + `../site/DESIGN-SYSTEM.md` |

---

## Detecção de Contexto

Antes de acionar qualquer canal, detectar:

- **Público:** interno → dashboard; externo social → canal; externo institucional → site
- **Objetivo:** informar · engajar · posicionar · converter
- **Vida útil:** efêmero (stories) · semanas (post) · permanente (site/relatório)

**Sensações-alvo:**
- Dashboard: *"meu aliado estratégico de manhã"* — alma, não tabela fria
- Site: *"é tão bom que não parece verdade"* — convida, não empurra
- Instagram: *"reconhecimento + choque de precisão"* — alguém finalmente nomeou isso

---

## Convenções Técnicas

- Subagentes ficam em **`.claude/agents/`** (raiz do projeto) — Claude Code não reconhece outros caminhos
- Agent teams requerem flag `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em `settings.json`
- Skills do nucleo-comum são carregadas via campo `skills:` no frontmatter de cada subagente
- `/mapa-de-contexto` — skill de roteamento disponível em `.claude/skills/`
