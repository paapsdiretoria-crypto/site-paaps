# CLAUDE.md — @malluvasconcellos

Workspace dedicado à gestão e produção de conteúdo do Instagram de Mallu Vasconcellos.

> **A pasta ainda se chama `amalluvasconcellos/` por inércia. Renomear numa sessão
> dedicada.** O handle mudou algumas vezes (`@amalluvasconcellos`,
> `@psimalluvasconcellos`), mas é sempre o MESMO perfil.

## Conta

- **Handle:** @malluvasconcellos (jul/2026)
- **Nome completo:** Mallu Vasconcellos • Psicologia e Impacto Social
- **Seguidores:** ~3.256 (jun/2026)
- **Tipo:** Conta Profissional (Criador) vinculada à Página do Facebook **uivovivo**
- **ID Instagram:** 17841401564625103

## Sobre Mallu Vasconcellos

Psicóloga social, integrante do PAAPS. Perfil pessoal-profissional que articula trajetória individual com temas de psicologia social, impacto social e saúde mental. Voz própria, mais próxima do público do que o perfil institucional.

## Identidade de voz

- Tom: pessoal, reflexivo, comprometido — fala na primeira pessoa
- Linguagem: acessível, com profundidade — traduz o técnico para o cotidiano
- Evitar: performatividade, positividade tóxica, distância clínica fria
- Referências: experiências do campo, psicologia social, feminismo, saúde mental no trabalho

## Dados via Windsor

API Key: armazenada localmente em `instagram/dashboard/js/config.js` (não commitado — ver `config.example.js`).

```bash
# Últimos 7 dias — alcance e seguidores (substitua $KEY pela chave real)
curl "https://connectors.windsor.ai/all?api_key=$KEY&date_preset=last_7d&fields=date,account_name,followers_count,reach,impressions&datasource=instagram_insights"
```

## Estrutura de pastas

```
amalluvasconcellos/
  CLAUDE.md           ← este arquivo
  conteudo/           ← rascunhos de posts, legendas, roteiros
  calendario/         ← planejamento editorial
  analises/           ← relatórios e insights extraídos da API
```

---

## Contexto de voz herdado (migrado do Claude Chat)

Este workspace produz conteúdo para @amalluvasconcellos. Antes de qualquer peça, ler:
- `../../../CLAUDE.md` (raiz — proibições e linha epistemológica)
- `../../../insumos-compartilhados/nucleo-comum/voz-paaps.md`
- O agente correspondente em `../../../.claude/agents/` (mallu-reels, paaps-carrossel,
  mallu-linkedin).

Identidade visual deste canal: `.claude/skills/edicao-reel-mallu/SKILL.md`. Paleta de 6
hex com bege `#f5f1e0` no texto e vinho `#6f0d33` no destaque; fontes Impact e Times New
Roman. Definida com a Mallu em 22/07/2026: até então "paleta AMALLUVASCONCELLOS" era
citada em vários lugares sem nunca ter sido definida.

**Posicionamento:** marca pessoal, sem "Psi". Identidade de AUTORA e de pensamento, nunca
de consultório. Sem CTA de agendamento, sem CRP, sem estética de perfil de terapeuta.

Função no funil: topo (alcance/descoberta via Reels) + retenção/salvamento (carrossel).
Público real: 84% mulheres, 87% entre 18-34, 96% Brasil.
