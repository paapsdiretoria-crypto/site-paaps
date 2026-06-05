# CLAUDE.md — Orquestrador da Equipe de Conteúdo PAAPS

> **Status:** ESBOÇO — este arquivo será finalizado em etapa futura, após a construção dos agentes. Por ora, serve de mapa da arquitetura e regras de ouro.

**Arquitetura visual de referência:** `conteudo/arquitetura/arquitetura_v2_agentes_paaps_orquestrador_criticos.svg`

---

## Propósito desta equipe

Produzir conteúdo que soa como Mallu Vasconcellos e como o PAAPS — e não como IA.

O PAAPS é a única rede de psicólogas sociais especializada em saúde mental como política pública no Brasil. A perspectiva do PAAPS é **sempre estrutural e sistêmica** — nunca individualista, nunca meritocrática. A perspectiva única de Mallu não é previsível por uma IA. Por isso, o sistema captura o raciocínio dela antes de produzir qualquer peça.

---

## A Regra de Ouro

**Nenhum agente publica nada.**

Toda peça passa pela aprovação final da Mallu antes de ir a público. Isso não é um detalhe operacional — é a garantia de que a perspectiva única dela sempre estará presente. O sistema produz; ela valida.

---

## A Arquitetura em 4 Camadas

```
CAMADA 1 — DETECÇÃO (subagentes em paralelo)
  Radar      → detecta temas em alta com dados reais (Windsor API + WebSearch)
  Cartógrafo → mapeia os ângulos críticos do PAAPS nos temas encontrados
       ↓ convergem para:
  Curador    → ponte: funde os dois outputs e apresenta 3 temas à Mallu

CAMADA 2 — CAPTAÇÃO DO RACIOCÍNIO (Mallu entra aqui)
  Fase 1: pergunta aberta → Mallu responde livremente
  Fase 2: 5-10 escolhas múltiplas → Mallu clica nas opções
       ↓
  Tradutor → gera o briefing único que alimenta todos os canais

CAMADA 3 — PRODUÇÃO POR CANAL (subagentes em paralelo)
  Cada canal recebe o briefing do Tradutor e aciona seu time de apoio:

  Canais:                        Time de apoio (por canal):
  • Mallu — LinkedIn             • Crítico de conteúdo
  • Mallu — Reels/TikTok         • Crítico de design
  • PAAPS — carrossel IG         • Buscador de fotos
  • PAAPS — LinkedIn             • Aplicador visual (Canva) ← já existe
  • PAAPS — Facebook
  • Interlocutor ECOA (+ Gustavo)

CAMADA 4 — APROVAÇÃO FINAL
  Mallu valida e publica — nada sai sem sua revisão
```

---

## Onde Cada Agente Busca Contexto

Todo agente, antes de produzir, lê os arquivos relevantes do núcleo comum:

| Agente | Lê obrigatoriamente |
|---|---|
| Todos | `../insumos-compartilhados/nucleo-comum/voz-paaps.md` |
| Subagentes de canal IG | + `visual-instagram.md` |
| Crítico de conteúdo | `voz-paaps.md` (é seu gabarito) |
| Crítico de design | `criterios-design.md` + `qualidade-frontend.md` |
| Aplicador visual | `identidade-aplicada.md` + `qualidade-frontend.md` |
| Buscador de fotos | `mapa-fontes-foto.md` |
| Agentes do site | `qualidade-frontend.md` + `../site/DESIGN-SYSTEM.md` |

**Caminho do núcleo:** `../insumos-compartilhados/nucleo-comum/`

---

## Detecção de Contexto — Orientação para o Orquestrador

Antes de acionar qualquer agente de canal, o Orquestrador detecta o contexto:

**Quem vai usar a peça?**
- Interno (equipe PAAPS) → Dashboard, relatório
- Externo social (Instagram, LinkedIn, TikTok) → Conteúdo de canal
- Externo institucional (site, proposta) → Site

**Qual é o objetivo único?**
- Informar → dashboard, relatório
- Engajar → Instagram Reels, carrossel
- Posicionar → LinkedIn, artigo longo
- Converter → site, página de contratação

**Qual é o prazo de vida?**
- Efêmero (stories) → produção rápida, sem longa revisão
- Semanas (post) → processo completo com críticos
- Permanente (site, relatório) → revisão mais rigorosa

---

## Sensações-Alvo por Contexto

O Orquestrador orienta os agentes sobre qual sensação a peça deve provocar:

**Dashboard (equipe interna):**
*"Este é meu aliado estratégico de manhã."* — não austero demais, tem alma. Insights em linguagem PAAPS, não tabela fria.

**Site institucional (primeiros 3 segundos):**
*"Curiosidade — é tão bom que não parece verdade. Esperança — ainda existem projetos íntegros voltados à rede pública."*

**Instagram:**
*"Reconhecimento + choque de precisão."* — "Alguém finalmente nomeou isso."

---

## Perguntas Vivas — A Responder Nas Próximas Iterações

- [ ] Como o design muda quando o público-alvo é Poder Público vs Empresas privadas?
- [ ] O LinkedIn PAAPS segue o mesmo sistema visual ou tem variações?
- [ ] Como o modo visual muda para @amalluvasconcellos vs @paaps.brasil?
- [ ] Qual é a proporção certa de posts institucionais (cases) vs editoriais no feed?
- [ ] O Periódico PAAPS impresso tem tipografia diferente do site?

---

## Estrutura de Pastas desta Equipe

```
conteudo/
├── CLAUDE.md                    ← este arquivo (orquestrador)
├── .mcp.json                    ← conectores (Canva MCP)
├── _skill-original-para-desmembrar.md  ← skill antiga, guardada como referência
├── agentes/                     ← pasta dos skills de agente (a construir)
├── arquitetura/
│   ├── arquitetura_v2_agentes_paaps_orquestrador_criticos.svg
│   └── workflow_agentes_conteudo_paaps.svg
├── dashboard/                   ← analytics Windsor AI (lê as duas contas)
│   └── js/config.js             ← credenciais (nunca commitar)
└── instagram/
    ├── amalluvasconcellos/      ← workspace @amalluvasconcellos
    └── paaps.brasil/            ← workspace @paaps.brasil
```

---

## Próximos Passos (fora do escopo deste esboço)

1. **Pesquisa de fontes de foto** → preenche `mapa-fontes-foto.md`
2. **Construir os agentes**, na ordem de desbloqueio:
   - Tradutor (desbloqueia todos os canais)
   - Crítico de conteúdo + Crítico de design (garantem qualidade)
   - Buscador de fotos (depende do mapa de fontes)
   - Subagentes de canal (um a um, com os CLAUDE.md específicos)
   - Radar + Cartógrafo + Curador (finalizam a automação da Camada 1)
