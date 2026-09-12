---
setor: 6-sistema
tipo: runbook
resumo: Abrir o Claude Code sempre na raiz SITE PAAPS, porque fora dela não existe CLAUDE.md, skill, cofre nem auto-push
status: vivo
atualizado: 2026-09-12
fontes: [CLAUDE.md]
---

# Regra de workspace: sempre na raiz

**Abrir o Claude Code SEMPRE em `SITE PAAPS/`.**

Projeto novo (evento, pitch, portfólio, prova de conceito) nasce como **subpasta daqui**.
Nunca em `~/Documents`, nunca na home, nunca dentro de pasta técnica como
`codigo/dashboard/js/`.

## O que se perde fora da raiz

Não existem `CLAUDE.md`, skills, o cofre `Conhecimento/` nem auto-push. O trabalho fica
sem contexto e **sem backup**, e ninguém percebe até precisar dele.

## O precedente

Já aconteceu uma pasta inteira nascer fora e virar trabalho órfão. Também já aconteceu de
um caminho fixo em hook quebrar quando a pasta migrou de `~/Desktop` para `~/Documents`,
em 07/07/2026, deixando 2 dias sem commit. Por isso os hooks usam `$CLAUDE_PROJECT_DIR` e
nunca caminho fixo. Ver [[hooks-e-auto-push]].

## Ligações

[[hooks-e-auto-push]] · [[mapa-site-paaps]] · [[segredo-em-arquivo-commitado]]
