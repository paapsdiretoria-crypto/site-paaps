---
name: tarefa-avulsa-quadro-projetos
description: Use para registrar uma pendência de execução (corrigir código, atualizar LinkedIn, currículo, blog, artefato ou automação, ajustar copy já publicada) como tarefa avulsa na database Notion "Quadro Estratégico de Projetos". Ative em "registra essa pendência", "põe isso na lista do site", "acumula essa alteração pro próximo deploy", "cria a tarefa avulsa de X", "isso entra na lista do LinkedIn", ou sempre que uma correção for encontrada mas não aplicada nesta sessão. Não use para conhecimento do Segundo Cérebro: pendência de execução nunca vira nota, nunca vira arquivo "o que falta". Não use para decisão de nomenclatura do próprio cérebro ou dúvida de categorização (isso é pergunta direta para a Mallu, não tarefa avulsa).
---

# Tarefa avulsa no Quadro de Projetos

## Lei central

```
PENDÊNCIA DE EXECUÇÃO NUNCA ENTRA NO SEGUNDO CÉREBRO
```

Corrigir código, atualizar um perfil, ajustar uma automação: isso é trabalho a fazer, não
conhecimento durável. Vai para a database Notion "Quadro Estratégico de Projetos", nunca
para uma nota, nunca para um bloco "o que falta" dentro de nota, nunca para um arquivo
próprio de pendência no cofre. O Segundo Cérebro é estudo estratégico (ver
`Segundo Cérebro/Mapa/Visão Geral.md`): a linha já está escrita lá, "nunca lista de
pendência como nota própria".

## Gate

Antes de fechar qualquer tarefa em que você encontrou um erro, um dado desatualizado ou
uma ação pendente num canal externo (site, LinkedIn, currículo, blog, artefato,
automação) e **não aplicou a correção nesta sessão**: ela vai para esta skill. Se você
está prestes a escrever essa pendência dentro de `Segundo Cérebro/` (numa nota de Fontes,
Conceitos, ou em qualquer arquivo novo tipo "pendências" ou "o que falta"), pare. Isso é
exatamente o desvio que esta skill existe para barrar.

## A database

**Data source:** `collection://99544cb5-2e00-8327-b5d9-8728a7a8543b`, "Database Quadro
Estratégico de Projetos." Cada alvo (o site, o LinkedIn da Mallu, um currículo, uma
automação) é uma página com `Status = "Tarefas avulsas"`, que acumula uma lista de
alterações no corpo até a Mallu decidir fechar o lote (por exemplo, subir um HTML só pro
HostGator de uma vez).

| Propriedade | Tipo | Valores |
|---|---|---|
| `Name` | título | descritivo do alvo, ex: "Site PAAPS 3.0 - revisão" |
| `Status` | select | sempre `"Tarefas avulsas"` para esta skill |
| `Tipo` | select | `"Projeto"` ou `"Artefato Interno"` |
| `Frente de movimento` | multi-select | `Comunicação`, `Produtos`, `Pesquisa`, `Financeiro`, `Gestão`, `Operacional` |
| `Prioridade` | select | `Urgente` ou `Importante` |
| `Área da vida` | multi-select | `paaps`, `mallu vasconcellos` |
| `Esforço` | select, opcional | 🍅 até 🍅🍅🍅🍅🍅 |
| `Entusiasmo` | multi-select, opcional | ⚡︎ até ⚡︎⚡︎⚡︎⚡︎⚡︎ |

## Processo

1. **Identifique o alvo** pela pendência encontrada: site, LinkedIn, currículo, blog,
   artefato, automação.
2. **Busque a página existente** com `notion-query-data-sources` (modo `sql`), filtrando
   `Status = 'Tarefas avulsas'` e `Name` batendo com o alvo (busca aproximada: "site" casa
   com "Site PAAPS 3.0 - revisão").
3. **Se achou:** `notion-fetch` a página para ler o conteúdo atual, depois
   `notion-update-page` com `command: "insert_content"` (posição `end`), acrescentando o
   item novo à lista já existente. Nunca apague o que já está lá.
4. **Se não achou:** `notion-create-pages` com `parent.data_source_id` apontando para essa
   database, `Name` descritivo do alvo, `Status = "Tarefas avulsas"`, `Tipo`, `Frente de
   movimento`, `Prioridade`, `Área da vida` preenchidos, e o primeiro item já no corpo.
5. **Escreva o item de forma específica e acionável:** o quê muda, onde (arquivo e linha,
   ou tela e campo), de que valor para que valor. A Mallu não programa: nada de "ajustar o
   texto" sem dizer qual texto e qual a versão nova. Regra geral do `CLAUDE.md`:
   "nunca deixar entregas com placeholders vagos ou instruções que dependam de
   conhecimento técnico prévio".
6. **Confirme para quem pediu:** o que foi registrado e o link da página no Notion.

## Tabela de racionalizações

| Pensamento | O que está acontecendo |
|---|---|
| "É um ajuste pequeno, cabe numa nota do cérebro mesmo" | Tamanho não muda a natureza. Execução nunca é conhecimento, grande ou pequena. |
| "Já que estou documentando a fonte certa, aproveito e anoto o que falta corrigir no mesmo arquivo" | Documentar qual dado é o correto é conhecimento. O que falta corrigir no código é execução. São dois textos, mesmo nascendo do mesmo achado. |
| "Não sei se isso é execução ou decisão do cérebro" | Decisão de nomenclatura ou estrutura do próprio cofre é pergunta direta para a Mallu, no resumo da conversa. Ação sobre um canal externo (site, LinkedIn, deploy, automação) é execução: vem para esta skill. |
| "A tarefa já está registrada em outro lugar (issue, comentário no código)" | O hábito da Mallu é acumular aqui até fechar o lote de deploy. Registre aqui também. |
| "Vou só mencionar de passagem, não é bem uma pendência formal" | Se descreve uma ação a fazer fora do cérebro, é pendência. Registre. |

## Onde isso serve

Em toda skill ou agente que roda sobre o Segundo Cérebro (`adiciona-ao-cerebro`,
qualquer skill de conteúdo ou de site) e encontra uma correção a fazer sem aplicá-la na
hora. Em qualquer revisão de site, LinkedIn, currículo, blog, artefato ou automação onde a
Mallu prefere acumular alterações para um lote só.
