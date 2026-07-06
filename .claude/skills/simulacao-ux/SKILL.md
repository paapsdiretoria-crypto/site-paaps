---
name: simulacao-ux
description: Simula a experiência de personas reais navegando em sites (benchmark de UX vivido, não análise fria). Acione em "simule a experiência do usuário no site X", "rode a simulação de UX", "como a persona veria esse site", ou quando Mallu passar uma lista de sites de referência para avaliar. Navega ao vivo via MCP de navegador (nunca WebFetch) e publica o relatório no Notion.
---

# Simulação de Experiência do Usuário — PAAPS

Framework consolidado por Mallu (jun/2026). Antes era colado manualmente a cada sessão;
agora é esta skill. Não resumir etapas, não pular personas.

## Regras inegociáveis

1. **Navegação real via MCP de navegador, com screenshots. NUNCA WebFetch** — WebFetch
   inventa "defeitos fatais" falsos (regra registrada na memória do projeto).
2. Cada site recebe a mesma profundidade — não afrouxar nos últimos.
3. Saída publicada no Notion, como subpágina da página de operações
   (`SITE INSTITUCIONAL` — URL na tabela do CLAUDE.md raiz), no formato das já criadas.
4. Linguagem vívida e empática, sem jargão coachesco (proibições do CLAUDE.md valem aqui).

## Personas padrão (usar as 3, salvo pedido contrário)

- **Claudia** — gestora pública (secretária municipal), pouco tempo, desconfiada de
  "consultoria da moda", busca prova de resultado e seriedade institucional.
- **Célia** — profissional de RH/ESG de empresa média, precisa justificar contratação
  internamente, compara fornecedores, sensível a clareza de escopo e preço.
- **Camila** — psicóloga jovem interessada na rede/comunidade, navega pelo celular,
  decide em segundos se a marca "fala a língua dela".

## Processo por site

1. **Contexto da simulação**: quem é a persona, objetivo da visita, dispositivo.
2. **Jornada passo a passo** (navegando de verdade, com screenshot por etapa):
   expectativas iniciais → interações → reações a obstáculos ou facilidades →
   momentos de frustração, encantamento ou dúvida.
3. **Insights qualitativos**: pontos críticos da jornada, oportunidades de usabilidade,
   fluxo e comunicação, o que gera engajamento ou abandono.
4. **Recomendações** aplicáveis ao site PAAPS.

## Entrega

Uma seção por site × persona relevante; ao final, síntese comparativa com o que o site
PAAPS deve absorver e evitar. Publicar no Notion e avisar o link da página criada.
