---
tags: [metodo, runbook]
origem: ".claude/settings.json"
resumo: "Os três hooks do evento Stop, o que cada um faz, e o aviso que aparece quando o backup para"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-13
aliases: [hook, auto-push, evento Stop, log de sessão]
---

# Hooks ativos e auto-push

**Três hooks rodam automaticamente no evento `Stop`, ao final de cada resposta. Nenhuma
ação manual é necessária.**

| Ordem | Hook | O que faz |
|---|---|---|
| 1º | log de sessão | grava timestamp e arquivos alterados em `sessoes/sessao-AAAA-MM-DD.md`, deduplicado, ignorando a própria pasta |
| 2º | auto-push | commita como `auto: <áreas> - <data>` e envia para `main` |
| 3º | limpa-sessoes | uma vez a cada 14 dias, apaga log de sessão com mais de 14 dias, e só depois de confirmar que já está no GitHub |

## Push que falha grita, porque já falhou calado

De 01 a 13/09/2026 o envio foi rejeitado todo dia e ninguém soube: o hook fazia
`commit && push` e a linha terminava ali, com 72 commits parados na máquina. **Agora, push
que falha grava `AVISO-BACKUP-PARADO.md` na raiz da pasta**, escrito em português, com o
que aconteceu e o que fazer. O arquivo some sozinho quando o envio volta a funcionar.

A trava da limpeza é a mesma lógica pelo avesso: ela consulta o GitHub antes de apagar
qualquer coisa e, se existir um único commit pendente, não apaga nada e diz por quê.

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

[[regra-de-workspace-ai-first]] · [[Log]] · [[agentes-ai-first]]

## Onde isso serve

Em [[estrategia-de-negocio]].
