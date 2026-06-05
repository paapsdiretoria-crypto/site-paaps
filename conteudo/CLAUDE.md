# CLAUDE.md — Orquestrador da Equipe de Conteúdo PAAPS

Produzir conteúdo que soa como Mallu Vasconcellos e como o PAAPS — nunca como IA.

Arquitetura detalhada: `conteudo/arquitetura/arquitetura_v2.md`
Todos os agentes: `.claude/agents/`

---

## Regra de Ouro

**Nenhum agente publica nada.** Toda peça passa pela aprovação final da Mallu.
**Cada agente é construído um a um, com revisão individual de Mallu.** Nada vai para produção sem aprovação dela.

---

## Arquitetura em 4 Camadas (v2)

```
CAMADA 1 — INTELIGÊNCIA (3 agentes, dois em paralelo)

  Radar + Sentinela rodam em PARALELO:
  ├── Radar      → 20 pautas em ascensão (não em explosão)
  │              política, legislação, viral, cultura, geopolítica,
  │              relatórios, episódios de violência, datas culturais
  │
  └── Sentinela  → análise crítica dos perfis IG/LinkedIn + dashboard
                   auto-report da semana: o que funcionou, o que falhou
                   estratégias complexas para o próximo ciclo

       ↓ os dois outputs convergem para:

  Tecelã         → leitura crítica e criativa das pautas + dados
                   conectora inusitada, repertório em autores críticos
                   NÃO academicista, NÃO elitizada — ideia primeiro, autor depois

       ↓

  Narrador       → escreve o documento completo de briefing (briefing-YYYY-MM-DD.md)
                   pode chamar qualquer agente anterior para revisão
                   entrega: arquivo completo com pautas + raciocínios + direcionamentos por canal

CAMADA 2 — CAPTAÇÃO (Mallu entra)
  Mallu lê o documento do Narrador
  Fase 1: responde com sua perspectiva (pergunta aberta)
  Fase 2: 5-10 escolhas de tom, referências, recorte

  Tradutor → processa raciocínio de Mallu, gera briefing final para canais

CAMADA 3 — PRODUÇÃO POR CANAL (⚠ agentes incompletos — a construir)
  6 canais em paralelo, cada um com time de apoio:
  mallu-linkedin · mallu-reels · paaps-carrossel
  paaps-linkedin · paaps-facebook · ecoa
  Time: critico-conteudo · critico-design · buscador-fotos · aplicador-visual

CAMADA 4 — APROVAÇÃO FINAL
  Mallu valida e publica
```

---

## Onde Cada Agente Busca Contexto

Nucleo comum: `../insumos-compartilhados/nucleo-comum/`

| Agente | Lê |
|---|---|
| Todos | `voz-paaps.md` |
| Radar | `mapa-fontes-foto.md` (para fontes de referência) |
| Sentinela | dashboard em `conteudo/dashboard/` |
| Tecelã | `voz-paaps.md` + `visual-instagram.md` |
| Narrador | todos os nucleo-comum + outputs dos agentes anteriores |
| Canais IG | + `visual-instagram.md` |
| Crítico de conteúdo | `voz-paaps.md` |
| Crítico de design | `criterios-design.md` + `qualidade-frontend.md` |
| Aplicador visual | `identidade-aplicada.md` + `qualidade-frontend.md` |
| Buscador de fotos | `mapa-fontes-foto.md` |

---

## Convenções Técnicas

- Agentes ficam em **`.claude/agents/`** (raiz do projeto)
- Skills em **`.claude/skills/`** — skill ativa: `/mapa-de-contexto`
- Briefings salvos em `conteudo/briefings/` com nome `briefing-YYYY-MM-DD.md`
- Agent teams requerem `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em settings.json
- `/mapa-de-contexto` — skill de roteamento de contexto
