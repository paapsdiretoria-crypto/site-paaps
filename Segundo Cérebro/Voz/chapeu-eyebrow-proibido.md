---
tags: [voz, proibicao]
origem: "codigo/site/DESIGN-SYSTEM.md, codigo/site/PROMPT-SITE-PAAPS-V1.md"
resumo: "A linha curta em caixa alta espaçada acima de um título é banida em qualquer peça, e o rótulo bom vira título grande em vez de sumir"
serve-para: ["[[conteudo-paaps]]", "[[conteudo-mallu]]"]
status: vivo
atualizado: 2026-09-12
aliases: [chapéu, eyebrow, kicker, label-secao, caixa alta espaçada]
decidido-em: 2026-08-02
---

# Chapéu, eyebrow, kicker: proibido

**Nunca colocar linha curta em CAIXA ALTA com entreletra larga e corpo pequeno acima de um
título.** É o estereótipo mais reconhecível de peça gerada por IA: todo gerador automático
abre com "NOSSOS SERVIÇOS" espaçado em cima do h2.

## O teste objetivo de reprovação

Caixa alta **e** `letter-spacing` acima de 0,1em **e** corpo abaixo de 0,85rem **e**
posição logo acima de um bloco de texto. Bateu nos quatro, reescreve.

## A proibição vale também dentro de card, caixa e coluna

Ampliada pela Mallu em 21/08/2026, revisando o pitch da Serasa: não é só acima do título.
Caíram por isso a `.pilar__d` do slide 07 e a `.cel__d` do slide 08. Palavras dela: essas
palavras pequenininhas nesse padrão são quase uma assinatura de que foi feito por máquina.

E vale em qualquer motor de montagem: Canva, HTML fotografado, site. Reincidiu em
30/08/2026 num carrossel montado em HTML, na classe `.sub-caps`.

## O que fazer quando o rótulo é bom

**O problema nunca é o tema da etiqueta, é o corpo miúdo em caixa alta espaçada.** No
slide 08 ela disse que gostava dos quatro temas e os queria bem maiores. Então a saída é
promover o rótulo a título de verdade, na escala de leitura, nunca miniaturizá-lo. Se não
couber grande, ele era redundante com o título de baixo e sai.

## Onde foi a função que o chapéu cumpria

Localizar o leitor virou outra coisa no site: a trilha de capítulos (`.trilha`), barra fixa
na lateral direita, um traço por seção, o traço atual preenchendo conforme a pessoa desce.
A referência que ela deu foi capítulo de vídeo do YouTube.

## Ligações

[[texto-com-cara-de-ia]] · [[criterios-design]] · [[escrever-grande]]

## Onde isso serve

Em [[conteudo-paaps]] e [[conteudo-mallu]].
