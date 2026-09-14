---
tags: [mapa, contrato]
origem: "Sistema"
resumo: "A regra que impede o cérebro de quebrar os agentes toda vez que uma nota muda de lugar"
serve-para: ["[[paaps-ai-first]]"]
status: vivo
atualizado: 2026-09-12
aliases: [contrato de caminhos, endereços estáveis, paths]
---

# Contrato de caminhos

**Nenhum agente, skill, hook ou arquivo de fora deste cofre cita o caminho de uma nota.
Eles citam a capa do setor ou a capa do projeto, e mais nada.**

É o que permite reorganizar o cérebro inteiro sem tocar em um único agente.

## Os únicos caminhos que alguém de fora pode citar

| Endereço estável | Quando citar |
|---|---|
| `Segundo Cérebro/Mapa/Índice.md` | quando precisa procurar qualquer coisa |
| `Segundo Cérebro/Mapa/Visão Geral.md` | antes de escrever nota nova |
| `Segundo Cérebro/Voz/Voz.md` | antes de escrever ou desenhar qualquer peça |
| `Segundo Cérebro/Conceitos/Conceitos.md` | quando precisa do que uma palavra significa aqui |
| `Segundo Cérebro/Método/Método.md` | quando precisa de como a PAAPS trabalha |
| `Segundo Cérebro/Entidades/Entidades.md` | quando precisa saber quem é alguém |
| `Segundo Cérebro/Histórias/Histórias.md` | quando precisa de coisa vivida |
| `Segundo Cérebro/Fontes/Fontes.md` | quando precisa de dado com fonte |
| `Segundo Cérebro/Ideias/Ideias.md` | quando precisa de faísca guardada |
| `Segundo Cérebro/Projetos/Projetos.md` | quando precisa saber que projetos existem |
| `Segundo Cérebro/Projetos/<projeto>/<projeto>.md` | quando o trabalho é de um projeto só |

## Por que isso funciona

A capa lista as notas do setor com o resumo de cada uma, e declara o caminho da pasta.
Quem lê a capa descobre sozinho qual nota abrir e como montar o caminho dela.

**Nota muda de nome, muda de pasta, nasce e morre. A capa fica.** Quando uma nota se move,
só a capa dela precisa ser atualizada, e mais nada no repositório inteiro.

## O que isso proíbe, por escrito

- Proibido escrever `Segundo Cérebro/Voz/voz-paaps.md` dentro de um agente ou skill.
- Proibido um agente guardar lista de notas: ele lê a capa toda vez.
- Proibido criar setor novo sem criar a capa dele no mesmo movimento.
- Proibido capa sem o bloco que declara o caminho da pasta.

## Como conferir que ninguém quebrou a regra

```
bash codigo/verifica-caminhos.sh
```

Ele varre o repositório e falha se achar alguém de fora citando caminho de nota.

## Ligações

[[Índice]] · [[Visão Geral]] · [[paaps-ai-first]] · [[agentes-ai-first]] · [[skills-ai-first]]

## Onde isso serve

Em toda edição de agente, skill, hook ou CLAUDE.md, e em toda reorganização do cérebro.
