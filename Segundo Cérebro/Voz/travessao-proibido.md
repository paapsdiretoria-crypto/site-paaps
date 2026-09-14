---
tags: [voz, proibicao]
origem: "CLAUDE.md"
resumo: "O travessão grande é proibido em qualquer saída da PAAPS, sem exceção de contexto"
serve-para: ["[[conteudo-paaps]]", "[[conteudo-mallu]]"]
status: vivo
atualizado: 2026-09-12
aliases: [em dash, travessão, travessão grande]
decidido-em: 2026-07-09
---

# Travessão grande: proibido, sem exceção

**Nunca usar "—" (em dash) em nada.** Usar `:` quando for explicação, `;` quando for
pausa entre orações, `-` quando for hífen simples.

## Onde vale

Em tudo. Chat, legenda, carrossel, e-mail, proposta, edital, mensagem de commit, log de
sessão, página do Notion, código, relatório. Não existe contexto interno onde ele passa.

## Por que

O travessão é um dos marcadores mais fortes de texto gerado por máquina. A voz da PAAPS
precisa soar humana, e o travessão entrega a peça antes da primeira frase ser lida.

## O que fazer quando a régua é automática

Se um template, hook ou script gerar travessão sozinho (mensagem de commit automática, por
exemplo), o conserto é no template, não na saída. Revisar antes de entregar:

```bash
grep -n "—" arquivo.md
```

## De onde veio

Calibrada pela Mallu em 09/07/2026, como regra absoluta.

## Ligações

[[texto-com-cara-de-ia]] · [[nao-e-x-e-y]] · [[voz-paaps]]

## Onde isso serve

Em [[conteudo-paaps]] e [[conteudo-mallu]].
