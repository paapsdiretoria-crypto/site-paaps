---
tags: [metodo, runbook]
origem: ".claude/settings.json"
resumo: "Os dois hooks do evento Stop, o que cada um grava, e por que eles usam variável de ambiente em vez de caminho fixo"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-12
aliases: [hook, auto-push, evento Stop, log de sessão]
---

# Hooks ativos e auto-push

**Dois hooks rodam automaticamente no evento `Stop`, ao final de cada resposta. Nenhuma
ação manual é necessária.**

| Ordem | Hook | O que faz |
|---|---|---|
| 1º | log de sessão | grava timestamp e arquivos alterados em `sessoes/sessao-AAAA-MM-DD.md`, deduplicado, ignorando a própria pasta |
| 2º | auto-push | detecta qualquer mudança, commita como `auto: <áreas> - <data>` e empurra para `main` |

## A obrigação humana que o hook não cobre

Ao encerrar tarefa relevante, registrar em 1 a 3 linhas **o que foi decidido ou entregue**,
não só o status do git. É o handoff para a próxima sessão. O hook registra arquivo
alterado; ele não sabe o que aquilo significou.

## Caminho fixo é proibido em hook

Os hooks usam `$CLAUDE_PROJECT_DIR`, nunca caminho absoluto, pra que a pasta possa ser
movida ou renomeada. Em 07/07/2026 a pasta migrou de `~/Desktop` para `~/Documents` e o
caminho fixo antigo deixou 2 dias sem commit, corrigido em 09/07.

## Onde isso NÃO é a linha do tempo do conhecimento

`sessoes/` é o `git status` do dia, e fica **fora do cofre** de propósito. A linha do tempo
do conhecimento é [[Log]], dentro do cofre, escrita à mão pelas operações.

## Ligações

[[regra-de-workspace]] · [[Log]] · [[agentes]]

## Onde isso serve

Em [[estrategia-de-negocio]].
