---
tags: [projetos, projeto, ai-first]
origem: "Operação"
resumo: "O mapa da máquina da PAAPS: o que roda sozinho, o que dispara cada coisa e quem é o gate"
serve-para: ["[[paaps-ai-first]]"]
status: vivo
atualizado: 2026-09-12
aliases: [AI FIRST, automações, automacoes, a máquina]
---

# PAAPS - AI FIRST

**A PAAPS opera com 23 agentes e 50 skills.** Esta pasta é o mapa da máquina: o que roda
sozinho, o que dispara cada coisa, onde roda e quem aprova antes de sair.

## A regra que vale para toda automação

**Nada que fala com pessoa real sai sem a Mallu ver.** O gate dela é o último passo de
todo fluxo que produz mensagem, e-mail ou peça publicada. Automação decide o quando e o
como; ela decide o se.

## As cinco frentes de automação

| Frente | O que faz | Serve a |
|---|---|---|
| Tráfego pago | campanha em LinkedIn Ads, Google Ads e Meta Ads | [[conteudo-paaps]] |
| Pipeline de conteúdo | carrossel, roteiro de Reel e legenda por equipe de agentes | [[conteudo-paaps]] e [[conteudo-mallu]] |
| Crescimento no Instagram | ganhar público em @paaps.brasil e @malluvasconcellos e afunilar para a ECOA | [[ecoa]] |
| Funil de leads | formulário no site que vira Lead e Contato no CRM | [[prospeccao-e-vendas]] |
| Prospecção fria por e-mail | e-mail personalizado para prefeituras, com esteira de status | [[prospeccao-e-vendas]] |

Os arquivos de execução de cada frente ficam em `automacoes/`, fora deste cofre, porque
são código e processo vivo. Aqui mora o que eles significam.

## O que roda sem ninguém mandar

- **Hook de fim de conversa:** registra a sessão e faz commit e push sozinho.
- **Hook de início de mensagem:** carrega o grafo de código antes de eu responder.
- **Prospecção fria:** ciclo semanal, cartas escritas em lote e disparo diário em conta-gotas.
- **Cadastro do site:** o formulário cria Lead e Contato ligados no CRM do Notion.

## Quem é quem na máquina

[[agentes-ai-first]] · [[skills-ai-first]] · [[arquitetura-agentes-v2-ai-first]] ·
[[workflow-agentes-ai-first]] · [[hooks-e-auto-push-ai-first]] ·
[[sistema-gto-ai-first]] · [[como-trabalhar-com-claude-ai-first]] ·
[[regra-de-workspace-ai-first]] · [[runbook-navegacao-mcp-ai-first]]

## Onde isso serve

Em toda frente que depende de coisa acontecendo sozinha: [[conteudo-paaps]],
[[conteudo-mallu]], [[prospeccao-e-vendas]], [[ecoa]] e [[captacao]].

## O que ainda falta

- Confirmar, uma por uma, quais das cinco frentes **rodam hoje** e quais estão só escritas.
- Duas rotinas de sincronização de e-mail param por falta de permissão de disco no Mac, e
  só a Mallu resolve isso, porque exige a senha dela.
- Nenhum dos 23 agentes tem nota própria: são lidos hoje só pelo índice [[agentes-ai-first]].
