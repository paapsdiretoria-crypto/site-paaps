---
tags: [mapa, legenda]
origem: "Decidido com a Mallu em 12/09/2026"
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

"Sem travessão" é proibição de tom de voz, nunca conceito. Foi o erro que reorganizou
esta estrutura inteira, em 12/09/2026.

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
