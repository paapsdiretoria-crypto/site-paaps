# Automação: reunião diária do Quadro de Projetos

O que roda todo dia às 8h, via `reuniao-diaria-quadro-projetos`, e onde fica o estado
dessa rotina. Nada aqui é conhecimento da PAAPS: é operacional, fora do Segundo Cérebro,
mesma régua de `feedback_pendencia_nunca_no_segundo_cerebro`.

- `progresso.md` : o placar interno, reescrito inteiro a cada rodada. Por projeto: o
  que fechou essa semana, o que falta pra fechar, o que está travado na Mallu. Não é
  peça pra ninguém de fora ver.
- `snapshot-anterior.json` : cópia da database do Quadro Estratégico de Projetos na
  última rodada, pra comparar o que mudou desde então. Sobrescrito a cada rodada.

Fonte da database no Notion: `collection://99544cb5-2e00-8327-b5d9-8728a7a8543b`
(Quadro Estratégico de Projetos, dentro da página Quadro de Projetos).

A regra completa do que a rotina pode e não pode fazer está em
`.claude/skills/reuniao-diaria-quadro-projetos/SKILL.md`.
