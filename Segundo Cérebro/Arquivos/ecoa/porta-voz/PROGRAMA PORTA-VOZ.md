---
setor: 4-projetos
tipo: inventario
resumo: "A página PROGRAMA PORTA-VOZ no Notion não descreve o programa, é a vista do CRM que lista quem está marcado como Ecoa Porta-Voz"
status: vivo
atualizado: 2026-09-12
fontes: [https://app.notion.com/p/24244cb52e0082f981590120ac3011e9, https://app.notion.com/p/3aa44cb52e008096a4d6ff65a4c9d288]
---

# PROGRAMA PORTA-VOZ

**Esta página do Notion não explica o que é o Programa Porta-Voz: ela é uma vista filtrada
do CRM.** Quem procura a descrição do programa lê [[Projeto Porta Voz Ecoa]]. Quem procura
saber quem é porta-voz agora abre esta vista no Notion.

## O que a página é, tecnicamente

Uma vista embutida da database **`(EMP) PROSPECTS B2C`**, com:

- **filtro:** `Tipo` contém `Ecoa Porta-Voz`
- **ordenação:** `Cliente` crescente

`Cliente` é o campo de título da base, ou seja, o nome da pessoa. As colunas exibidas são
todas as da base.

## A consequência que importa

**O porta-voz é acompanhado dentro do CRM de prospecção B2C, com as mesmas colunas de
qualquer pessoa da base.** Isso significa que a pessoa que representa a voz da ECOA em
espaço público aparece, na mesma tabela, com `Lead` (Frio, Morno, Quente) e `Status`
(Iniciar, Proposta Enviada, Relacionamento, Encerrado). O vocabulário é de funil comercial,
e o programa não é comercial: ao ler ou escrever sobre porta-voz a partir desta base, não
importar esse vocabulário para nenhuma peça, conversa ou proposta.

O campo `Tipo` separa os dois vínculos com a comunidade, e a distinção é útil:

- `Ecoa membra`: está na comunidade.
- `Ecoa Porta-Voz`: tem papel ativo de representação.

Outros campos da base que aparecem na vista: `Estágio` (Parceiro, Indicação, Interesse
direto), `Status 1` (0. Alvo até 5. Finalizado, mais Edital e Aquecimento), `Origem`,
`Como conheceu?`, `Criativo`, `Responsável`, `Ação Específica`, e as datas `Primeiro`,
`Recente`, `Próximo` e `Data Fechamento Recente`.

## Regra de dado pessoal

A base carrega `Email` e `Instagram` de pessoas reais. **Nenhuma linha, nome, e-mail ou
perfil entra em arquivo commitado deste repositório.** Para citar um porta-voz em nota do
cofre, citar o papel; o nome fica no Notion.

## Onde está o conteúdo do programa

- [[Projeto Porta Voz Ecoa]]: o que é, ciclo de dois meses, compromisso mínimo por ciclo, o
  que não é esperado, responsável.
- [[Reunião Porta Voz]]: as decisões tomadas sobre identidade, linguagem e Eras.
- `CLAUDE.md` desta pasta: o resumo consolidado, incluindo o resultado já registrado do
  primeiro porta-voz.
