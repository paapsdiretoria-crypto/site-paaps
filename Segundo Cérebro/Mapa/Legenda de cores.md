---
tags: [mapa, legenda]
origem: "Sistema"
resumo: "O que cada cor do grafo significa, e a pergunta que cada setor responde"
serve-para: []
status: vivo
atualizado: 2026-09-12
---

# Legenda de cores

**Cada setor tem uma cor e uma pergunta.** Se uma nota não responde a nenhuma das nove
perguntas, ela não vira nota.

| Cor | Setor | A pergunta | Exemplo |
|---|---|---|---|
| 🟣 roxo | **Projetos** | No que eu trabalho? | Clínica 2027, Captação, ECOA |
| 🟡 amarelo | **Entidades** | Quem é essa pessoa ou instituição? | Dr. Yago, Sara Vitral, Joyce, Yunus |
| 🔴 vermelho | **Histórias** | O que eu vivi e posso contar? | Refazenda Rio Xopotó, Ministério Público |
| 🟢 verde | **Conceitos** | O que essa palavra significa na PAAPS? | cuidado, violência, saúde mental |
| 🩷 rosa | **Voz** | Como a PAAPS fala, e o que nunca diz? | sem travessão, nunca "colaborador" |
| 🟦 azul-esverdeado | **Método** | Como a PAAPS trabalha? | as fases, supervisão, base teórica |
| 🔵 azul | **Fontes** | De onde veio e dá para reconferir? | dado do INSS, NR-01, notícia, aula |
| 🟠 laranja | **Ideias** | O que estalou e onde serve? | gancho de Reel, ângulo de carrossel |
| ⚪ cinza | **Mapa e Arquivos** | Onde fica tudo, e o que ainda é cru | Índice, Log, transcrição, export |

## A diferença que mais confunde: 🟢 Conceito não é 🩷 Voz

| | 🟢 Conceito | 🩷 Voz |
|---|---|---|
| O que é | uma **definição**: o que a palavra significa dentro da PAAPS | uma **regra de como falar e aparecer** |
| Vem de | do TCC, da base teórica, do campo | de calibração da Mallu, com data |
| Exemplo | o que é cuidado, o que é servidor público de linha de frente | sem travessão, sem coachês |
| Quem lê | quem precisa entender a PAAPS | quem vai escrever ou desenhar uma peça |

"Sem travessão" é proibição de tom de voz, nunca conceito. É a confusão que mais
acontece, e a que mais estraga a busca: quem procura a definição de cuidado não pode
esbarrar em regra de escrita.

## A cor de cada projeto

Cada projeto tem cor própria, para você bater o olho no grafo e saber de quem é o ponto
sem precisar ler o nome. Os grupos de projeto vêm antes dos de setor, então uma nota
dentro de `Projetos/ecoa/` fica azul royal, não roxa.

| Cor | O que é |
|---|---|
| azul royal `#1D4ED8` | projeto **ecoa** |
| verde escuro `#15803D` | projeto **tcc-suas** |
| magenta `#BE185D` | projeto **clinica-mallu-2027** |
| marrom `#92400E` | projeto **digging-times-e-lideres** |
| violeta `#7C3AED` | projeto **psicologia-social** |
| vinho `#B91C1C` | projeto **captacao** |
| ciano `#0891B2` | projeto **conteudo-paaps** |
| laranja queimado `#C2410C` | projeto **conteudo-mallu** |
| oliva `#4D7C0F` | projeto **prospeccao-e-vendas** |
| petróleo `#0F766E` | projeto **estrategia-de-negocio** |
| índigo `#4338CA` | projeto **inteligencia-competitiva** |
| mostarda `#A16207` | projeto **cliente-ideal-paaps** |
| roxo profundo `#6D28D9` | projeto **paaps-ai-first** |
| amarelo `#EAB308` | setor **Entidades** |
| vermelho `#EF4444` | setor **Histórias** |
| verde `#22C55E` | setor **Conceitos** |
| rosa `#EC4899` | setor **Voz** |
| azul-esverdeado `#14B8A6` | setor **Método** |
| azul `#3B82F6` | setor **Fontes** |
| laranja `#F97316` | setor **Ideias** |
| roxo `#A855F7` | setor **Projetos** |
| cinza claro `#94A3B8` | setor **Mapa** |
| cinza escuro `#6B7280` | setor **Arquivos** |

## Como aplicar as cores no Obsidian

As cores vivem em `_modelos/graph-cores.json`. O Obsidian sobrescreve o arquivo dele
enquanto está aberto, então a cópia versionada é essa. Para aplicar: **feche o Obsidian**
e rode, da raiz do projeto:

```
cp "Segundo Cérebro/Mapa/_modelos/graph-cores.json" "Segundo Cérebro/.obsidian/graph.json"
```

## Onde isso serve

Em toda leitura do grafo, e sempre que alguém precisar decidir em que setor uma nota nova
nasce.
