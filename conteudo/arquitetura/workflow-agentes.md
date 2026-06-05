# Workflow de Agentes — Produção de Conteúdo PAAPS

Versão texto do SVG `workflow_agentes_conteudo_paaps.svg`. Descreve o fluxo completo de uma sessão de produção, do início ao post publicado.

---

## Camada 1 — Detecção

```
Agente Radar  ──────────────────────────────────► Agente Curador
  Rastreia temas em alta + KPIs virais

Agente Cartógrafo  ──────────────────────────────► Agente Curador
  Mapeia ângulos críticos do PAAPS
```

**Agente Curador** corta a lista para os 3 temas com maior potência de debate e os apresenta à Mallu.

---

## Camada 2 — Captação (Mallu entra aqui)

**Fase 1 — pergunta aberta**
> "Como você se posicionaria sobre este tema?"
Mallu responde livremente, sem escolhas predefinidas.

**Fase 2 — 5 a 10 escolhas múltiplas**
Refina referências, recorte e tom. Mallu clica nas opções.

**Agente Tradutor — o cérebro do sistema**
- Capta a linha de raciocínio de Mallu
- Identifica referências e de quem se fala
- Pesquisa a fundo a problemática estrutural
- Gera o briefing único que alimenta todos os canais

---

## Camada 3 — Produção por canal

Cada agente de canal recebe o briefing do Tradutor e opera com um time interno.

| Canal | Tom / foco |
|---|---|
| Persona Mallu — LinkedIn | Autoridade analítica, leitura de sistema |
| Mallu — Reels/TikTok | Roteiros poético-políticos em vídeo |
| PAAPS — carrossel IG | Militante, irônico, foco na Cláudia |
| PAAPS — Facebook | Registro institucional |
| PAAPS — LinkedIn | Técnico-estratégico, dados duros |
| Interlocutor ECOA | Comunidade — entra o Gustavo |

**Time interno de cada canal:**

| Agente | Função |
|---|---|
| Aplicador visual | Canva: fontes, paleta, sombras, transparência, legibilidade |
| Copywriter estratégico | Tom assertivo mas acolhedor, nunca genérico ou de IA |

---

## Camada 4 — Aprovação final

**Mallu valida e publica.** Nenhuma publicação sai sem revisão.

---

## Pontos de decisão humana

Mallu intervém em exatamente dois momentos:

1. **Camada 2** — responde a pergunta aberta + faz as escolhas múltiplas
2. **Camada 4** — valida tudo antes de publicar

**Gustavo** entra apenas no agente Interlocutor ECOA.

---

## Notas de implementação

- Na arquitetura v2, o "Copywriter estratégico" foi desmembrado em dois agentes mais precisos: **Crítico de conteúdo** (avalia voz, devolve feedback) e o próprio **subagente de canal** (que escreve). Ver `arquitetura_v2.md`.
- O Aplicador Visual já existe como conjunto de instruções em `nucleo-comum/identidade-aplicada.md` + MCP Canva configurado.
