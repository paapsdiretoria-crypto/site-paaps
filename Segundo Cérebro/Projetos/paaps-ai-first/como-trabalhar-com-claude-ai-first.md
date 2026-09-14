---
tags: [metodo, resumo-de-fonte]
origem: "Operação"
resumo: "Erros comuns de delegação ao Claude e como corrigir, com o Framework 4D e o loop de delegação e diligência"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-12
aliases: [Framework 4D, delegação, diligência]
---

# Como trabalhar melhor com o Claude

Fonte: [[Getting better results · Claude 101]] (Claude Academy, curso Claude 101,
compilado em 12/09/2026).

## Erros comuns e como corrigir

| Se a resposta veio... | O problema costuma ser... | O que fazer |
|---|---|---|
| Genérica demais | Faltou contexto sobre a situação específica | Dar detalhe de público, papel ou restrição. Em vez de "escreve um e-mail sobre o atraso", "escreve um e-mail pro cliente enterprise explicando que a integração vai atrasar duas semanas, é o segundo atraso, mantém profissional mas com pedido de desculpa real" |
| Longa ou curta demais | O tamanho certo foi um chute | Ser explícito: "resumo de dois parágrafos", "menos de 100 palavras", ou "análise completa, tamanho não é problema" |
| No formato errado | Ficou claro o quê, não ficou claro o como | Mostrar um exemplo do formato, ou descrever a estrutura por escrito |
| Com informação errada dita com confiança | Fato plausível e errado acontece, sobretudo em dado específico ou nicho | Verificar fato de alto risco de forma independente, pedir fonte ou nível de confiança, ligar busca na internet quando precisar de dado atual |
| Com o tom errado | O padrão é profissional e prestativo, nem sempre é o que serve | Descrever o tom em linguagem simples ("mais conversacional", "mais formal e com autoridade") e dar exemplo do estilo |

## A primeira resposta é rascunho, não veredito

Tratar a primeira resposta como começo de conversa, não como pedido único. Três hábitos
de quem colabora bem: tratar rascunho como ponto de partida e revisar antes de aceitar;
dar feedback específico ("corta os dois primeiros parágrafos e deixa a conclusão mais
decisiva" rende mais que "encurta"); e saber quando começar do zero, às vezes é mais
rápido abrir conversa nova com pedido mais claro do que tentar realinhar uma que já saiu
do rumo.

## Framework 4D (Dakan e Feller, Ringling College / University College Cork)

Quatro competências pra colaborar bem com IA:

- **Delegação:** decidir o que fica com humano e o que fica com IA, e como dividir a tarefa.
- **Descrição:** comunicar com clareza o que se quer, o processo e o comportamento esperado.
- **Discernimento:** avaliar com espírito crítico o que a IA entrega: qualidade, precisão, adequação.
- **Diligência:** usar a IA de forma responsável, com transparência e responsabilidade pelo resultado.

## O loop de delegação e diligência (como testar se dá pra confiar)

Método pra saber se uma tarefa pode ser delegada de verdade, não só tentativa às cegas:

1. Escolher uma tarefa analítica específica que já se faz com regularidade.
2. Pegar um caso passado cujo resultado certo já se conhece.
3. Refazer esse caso com a IA e comparar contra o que já se sabe que está certo.
4. Refinar o pedido e testar de novo. Se a IA chega no resultado certo, a tarefa pode ser
   delegada com confiança daquele jeito validado. Se não chega mesmo depois de refinar,
   é sinal de que aquela tarefa não deveria ser delegada.

Validar constrói confiança, mas não tira a responsabilidade de quem delega: checar se o
resultado faz sentido e ser transparente sobre o papel da IA continuam sendo trabalho de
quem pediu.

## Conexão com o que a PAAPS já faz

O loop de delegação e diligência já roda no ecossistema, com outro nome: é o **gate de
aprovação** descrito em `automacoes/CLAUDE.md`. A Mallu aprova, corrige ou recusa cada
peça, e toda correção dela vira log de aprendizado, exatamente o mecanismo de comparar
resultado contra o que já se sabe certo e refinar o pedido pro próximo ciclo. A
prospecção fria, o carrossel e o Reel já são, na prática, um loop de delegação e
diligência funcionando dia a dia, mesmo sem esse nome até hoje.

## Onde isso serve

Em [[estrategia-de-negocio]].
