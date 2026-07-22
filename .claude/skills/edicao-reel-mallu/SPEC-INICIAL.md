# SPEC INICIAL: edicao-reel-mallu

> Documento de trabalho, não é a skill ainda. A pasta não tem `SKILL.md` de propósito:
> enquanto for spec, o Claude Code não carrega. Quando a Mallu aprovar, a parte de
> identidade sobe para `insumos-compartilhados/nucleo-comum/identidade-mallu.md` e a
> parte de processo vira o `SKILL.md`.
>
> Data: 22/07/2026. Base: 5 referências enviadas pela Mallu.

---

## Por que uma skill separada de `edicao-reel-paaps`

`edicao-reel-paaps` edita o vídeo de uma INSTITUIÇÃO falando. As regras dela vêm de
autoridade institucional: texto nunca sobre o rosto, centro livre, faixas de cima e de
baixo, painel de marca atrás do número, citação ABNT em lower-third. É um relatório de
campo que se move.

As cinco referências que a Mallu escolheu fazem o contrário. Em quatro delas o tipo passa
por cima do corpo e do rosto. Não é descuido de edição: é a decisão central da linguagem.
O texto não legenda a pessoa, o texto é a peça, e a pessoa é o fundo vivo dela. Isso é uma
identidade de AUTORA, não de instituição.

Forçar essa linguagem dentro de `edicao-reel-paaps` quebraria as regras duras que já
custaram retrabalho lá. Por isso: skill própria, herdando só a infraestrutura
(HyperFrames, toolkit, mux, gate de QA), não as regras de composição.

**Herda de `edicao-reel-paaps`:** lei do congelamento (`output.mp4` congelado, áudio é
sempre re-mux), gate de QA (`lint` + `validate` + `snapshot` com conferência visual dos
PNGs), corte de silêncios e hesitações, ritmo da legenda (`data-start` = início da palavra
falada, ≥2 frames de folga), toolkit `_paaps-toolkit/`, proibição de inventar asset.

**Não herda:** paleta, tipografia, ocupação da tela, regra do rosto intocável, faixa
central livre, painel de marca, lower-third ABNT, logo de CTA.

---

## 1. O que as referências têm em comum

Cinco referências, cinco tratamentos tipográficos diferentes. O que se repete em todas:

**1.1 O tipo é grande e é o assunto.**
O bloco de texto ocupa de 55% a 90% da largura útil e de 25% a 45% da altura. Nenhuma das
cinco tem legenda de aplicativo. É tipografia editorial impressa em cima de vídeo.

**1.2 Entrelinha apertada, quase colidindo.**
`line-height` entre 0,82 e 0,95 nas referências de caixa alta. As linhas se tocam e o
conjunto vira um bloco sólido, um objeto, não quatro frases empilhadas. É o detalhe que
mais separa isso de legenda automática.

**1.3 Zero caixa, zero scrim, zero fundo sólido atrás do texto.**
A legibilidade vem de peso tipográfico e de contraste de cor, não de escurecer o vídeo.
Isso converge com a regra que a Mallu já tem no PAAPS.

**1.4 Poucas palavras por linha, poucas linhas.**
De 2 a 4 palavras por linha, de 2 a 5 linhas no total. Sempre.

**1.5 O destaque acontece no nível da PALAVRA, não da frase.**
Cada referência destaca com um recurso diferente: cor (vermelho no meio do branco),
sublinhado que acompanha a largura exata da linha, itálico no meio do romano, corpo maior
na palavra-chave. Nunca destaca a frase inteira.

**1.6 O bloco tem uma borda reta e sangra pela outra.**
Alinhado à esquerda, borda esquerda perfeitamente reta, e a linha mais longa vaza até
tocar (ou cortar) a margem direita. A sangria é intencional: comunica que o texto não
coube, que a fala é maior que a tela.

**1.7 O texto invade o sujeito.**
Em quatro das cinco, o bloco cruza o rosto ou o tronco. Este é o ponto de ruptura com o
PAAPS e precisa de decisão explícita da Mallu (ver seção 5).

---

## 2. Os cinco modos, decompostos

### Modo A: MANIFESTO (ref. "no brasil você se autodeclara")
O mais forte do conjunto e o candidato a modo-assinatura.

- Grotesca pesada, caixa alta, `letter-spacing` levemente negativo
- `line-height` ~0,85: as linhas se tocam
- Alinhado à esquerda, sangrando na direita até cortar a última letra
- Bloco de 4 a 5 linhas ocupando o terço central-superior
- Bege `#f5f1e0` com halo vinho; alto contraste com o fundo
- Ocupação: ~90% da largura, ~35% da altura, topo do bloco em ~28% da altura
- A frase inteira aparece de uma vez e permanece; não é revelação palavra a palavra

*Observação técnica:* nessa referência o "Ê" de VOCÊ saiu em caixa baixa, provavelmente
porque a fonte não tem a versão acentuada em capitular. É um acidente, mas vira textura.
Se a Mallu gostar do efeito, viramos regra deliberada; se não, escolhemos fonte com
acentuação completa em caps. **Decisão pendente.**

### Modo B: EDITORIAL SÉRIO (ref. "a necessidade de Pertencimento")
O mais sofisticado e o que mais combina com o lugar de autoridade dela.

- Serifada de alto contraste (didona/transicional), caixa mista
- Mistura de romano e itálico dentro da MESMA frase, marcando o movimento do pensamento
- Duas cores: bege `#f5f1e0` no corpo, vinho `#6f0d33` nos dois conceitos-chave (ou rosa
  `#c42443` se o trecho for escuro; ver seção 4)
- As palavras destacadas ganham inicial maiúscula no meio da frase, tratadas como
  conceitos nomeados (Pertencimento, Essência), não como palavras comuns
- `line-height` ~0,95, alinhado à esquerda, sangrando na direita
- Ocupação: ~85% da largura, ~45% da altura, centralizado verticalmente

Este modo é o mais alinhado à linha epistemológica dela: nomear o conceito com inicial
maiúscula é literalmente o gesto de desnaturalizar, de dizer "isto tem nome e tem
história".

### Modo C: MARCA D'ÁGUA (ref. "teste esses hooks visuais")
- Condensada pesada, caixa alta, duas linhas
- Vinho `#6f0d33` a 20-25% de opacidade sobre parede clara, integrado à textura dela
- Contraste deliberadamente baixo: o texto pertence ao ambiente, não flutua acima dele
- A pessoa entra em quadro e passa na frente, o que dá profundidade
- Ocupação: ~85% da largura, ~15% da altura, no terço superior

Modo de respiro. Serve para transição, para título de bloco, para o segundo beat de um
reel que já abriu forte. Não sustenta um reel inteiro.

### Modo D: CADERNO (ref. "como gravar os seus vídeos sozinha?")
- Manuscrita branca fina, três linhas em escala crescente, rotação leve por linha
- A palavra-chave da pergunta em corpo bem maior e itálico acentuado
- Card de b-roll no topo, cantos arredondados generosos (~24px), sombra suave
- Legenda de fala pequena, manuscrita, uma linha, na faixa inferior, discreta
- Ocupação do título: ~70% da largura, dentro do card superior

Modo íntimo. Fonte `Caveat` já está no repositório (`hyperframes/skills/talking-head-recut/assets/fonts/`).
Atenção: manuscrita é a fronteira mais próxima do "conteúdo genérico de coach". Só usar
em vídeo de bastidor e processo, nunca em vídeo de tese.

### Modo E: CADÊNCIA SUBLINHADA (ref. "2) até você criar uma relevância")
- Grotesca geométrica pesada, caixa baixa, quatro linhas centralizadas
- **Sublinhado por linha, com a régua na largura exata daquela frase**: é o recurso mais
  aproveitável do conjunto, e é onde o vinho `#6f0d33` mais aparece
- Numeração explícita no início ("2)"), tornando a estrutura da fala legível sem áudio
- Texto em bege `#f5f1e0` com halo vinho
- Ocupação: ~80% da largura, ~30% da altura, centro do quadro

O sublinhado adaptativo é a coisa mais barata e mais diferenciadora das cinco referências.
Nenhum app de legenda automática faz isso.

---

## 3. Síntese: o sistema tipográfico proposto

Cinco modos são muitos para uma identidade nascendo. Proposta de recorte:

| Papel | Modo | Quando |
|---|---|---|
| Assinatura | **A: Manifesto** | Frase-âncora, virada, fechamento. 1 a 2 por reel. |
| Pensamento | **B: Editorial sério** | O conceito nomeado, a tese. 1 por reel, no ápice. |
| Respiro | **C: Marca d'água** | Título de bloco, transição. Opcional. |
| Corpo | **E: Cadência sublinhada** | A legenda contínua da fala. Presente o reel todo. |
| Bastidor | **D: Caderno** | Reel de processo e bastidor. Nunca no mesmo reel dos outros. |

**Regra de mistura:** no máximo três modos por reel. D não convive com A nem com B.

### Tipografia: o que falta comprar ou baixar

Hoje o repositório tem `League Spartan`, `Evermore`, `Caveat` e `Barlow Condensed`.
A identidade dela pede duas famílias que ainda não existem aqui:

| Papel | Referência | Candidata gratuita | Candidata paga |
|---|---|---|---|
| Grotesca pesada (modo A) | a das refs "no brasil" e "hooks" | `Anton`, `Archivo Black`, `Sofia Sans Condensed` | `Druk`, `Söhne Breit` |
| Serifada de alto contraste (modo B) | a da ref "Pertencimento" | `Playfair Display`, `Bodoni Moda` | `Canela`, `Tiempos Headline` |

**Decisão pendente:** confirmar se a identidade da Mallu usa `League Spartan` (o que a
aproxima do PAAPS e cria família) ou uma grotesca própria (o que a separa). Minha
recomendação: **grotesca própria no modo A, para o perfil pessoal ter corpo próprio**, e
serifada no modo B. League Spartan fica sendo o vínculo com o PAAPS quando ela falar de
lá.

---

## 4. Paleta AMALLUVASCONCELLOS (definida pela Mallu em 22/07/2026)

Auditei o repositório antes: a expressão "paleta AMALLUVASCONCELLOS" aparecia em
`.claude/agents/mallu-reels.md`, `.claude/agents/mallu-carrossel.md` e
`conteudo/instagram/amalluvasconcellos/CLAUDE.md` sempre como instrução, mas nunca tinha
sido definida em lugar nenhum. Todo agente que a citava trabalhava no escuro. Fica
definida aqui, a partir da paleta que a Mallu passou.

```css
:root {
  --m-bege:       #f5f1e0;  /* fundo e TEXTO PADRÃO da legenda */
  --m-lilas:      #bcb6f2;  /* acento frio, uso restrito (herdado do PAAPS) */
  --m-rosa:       #c42443;  /* acento vivo, meio-tom */
  --m-vinho:      #6f0d33;  /* DESTAQUE e toda aplicação colorida */
  --m-terracota:  #cb4710;  /* herdado do PAAPS: ponte entre os dois perfis */
  --m-marrom:     #442309;  /* herdado do PAAPS: neutro escuro */
}
```

Três cores são compartilhadas com o PAAPS (`#bcb6f2`, `#cb4710`, `#442309`) e o bege é
praticamente o mesmo (`#f5f1e0` aqui, `#f5f1e1` lá). O que faz a identidade dela ser dela
são `--m-rosa` e `--m-vinho`, que o PAAPS não tem.

### Regra de legenda (definida pela Mallu)

> **Legenda sempre em bege `#f5f1e0`. Destaque e qualquer aplicação colorida em vinho
> `#6f0d33`.**

Isso não é uma preferência solta: os dois valores têm contraste de ~9,8:1 entre si, o que
faz do par bege-sobre-vinho a combinação mais legível de toda a paleta. O sistema inteiro
sai daí.

### Como a regra sobrevive ao backdrop

O bege sozinho falha sobre parede clara. Isso não é hipótese: o validador acusou 6 falhas
de contraste WCAG no vídeo 02 do PAAPS exatamente por creme sobre parede clara. A Mallu
filma quase sempre em parede clara. **A cor não muda; o que muda é o suporte.**

| Backdrop | Legenda | Como sustenta |
|---|---|---|
| Parede clara (o caso mais comum) | bege `#f5f1e0` | halo vinho forte: `text-shadow` `0 0 5px` + `0 2px 0` em `#6f0d33` a 0,9 |
| Footage escura, roupa escura, b-roll | bege `#f5f1e0` | halo escuro (`rgba(0,0,0,0.85)`), o padrão já herdado |
| Cenário misto no mesmo vídeo | bege `#f5f1e0` | halo vinho + halo escuro empilhados; a cor nunca troca no meio |

O halo vinho é o que transforma a instrução dela num sistema: mantém a legenda sempre
bege, resolve a parede clara sem escurecer o vídeo, e faz o vinho aparecer em toda peça
mesmo quando não há palavra destacada.

### Como o vinho entra como destaque

`#6f0d33` é escuro. Como TEXTO sobre footage escura ele some. Por isso o destaque não é
"trocar a cor da palavra para vinho", é **inverter**:

- **Palavra destacada:** painel vinho justo atrás da palavra (padding ~0.08em, raio 4px),
  com a palavra em bege por cima. Contraste 9,8:1, funciona sobre qualquer fundo.
- **Sublinhado do modo E:** régua vinho sólida na largura exata da linha. É aqui que a
  cor aparece com mais frequência, sem custar legibilidade nenhuma.
- **Conceito nomeado do modo B:** aí sim a palavra vai em vinho puro, sem painel, porque
  o modo B é usado sobre fundo claro por definição. Se o trecho for escuro, o conceito
  usa `--m-rosa` `#c42443`, que é o mesmo gesto num tom que ainda lê no escuro.
- **Marca d'água do modo C:** vinho a 20-25% de opacidade sobre parede clara.

Regra dura: **vinho como texto puro só sobre fundo claro.** Sobre escuro, vinho é painel,
régua ou fundo, nunca a letra.

---

## 5. A ruptura que precisa da decisão dela

No PAAPS a regra é dura: **texto nunca sobre o rosto**. Quatro das cinco referências que
ela escolheu passam o texto por cima do rosto.

Isso não é contradição, é diferença de lugar de fala. No PAAPS quem fala é a instituição e
o rosto dela é a prova de que existe gente por trás. No perfil pessoal quem fala é ela, e
o rosto já está dado: o que precisa de espaço é o pensamento.

**Proposta de regra intermediária, para ela cortar ou aprovar:**

> O tipo pode cruzar o corpo, os ombros e a testa livremente. Sobre o rosto, só quando o
> par de olhos permanece visível. Olho tapado, não. Boca tapada, pode: ela está falando,
> a legenda diz o mesmo.

Essa regra deixa passar quatro das cinco referências e barra só a primeira (que tapa a
boca e o queixo com quatro linhas, e é a mais pesada do conjunto).

**Alternativa mais conservadora:** manter o rosto livre e reservar a invasão só para o
modo A, no beat de virada, uma vez por reel. Menos ousado, mais seguro, mais próximo do
que já está aprovado no PAAPS.

---

## 6. Processo da skill (esqueleto)

Só ganha corpo depois que 3, 4 e 5 estiverem decididos. Sequência prevista:

1. **Briefing:** tese, frase-âncora, conceito a nomear (modo B), b-roll disponível, trilha
2. **Ingest e transcrição:** igual ao PAAPS (`transcribe --model medium`, correção do ASR
   preservando timestamps)
3. **Corte de silêncios e hesitações:** passada global, herdada da v4 do PAAPS
4. **Mapa de modos:** marcar na timeline onde entra A, onde entra B, onde entra E. Antes
   de escrever uma linha de HTML.
5. **Layout:** composição HyperFrames com os modos, cor por backdrop por trecho
6. **Gate de QA:** `lint` + `validate` (ler o relatório de contraste) + `snapshot` com
   conferência visual dos PNGs, checando especificamente a regra dos olhos
7. **Render mudo, congela, re-mux do áudio**
8. **Handoff:** frame de capa escolhido, e legenda do post via `legendas-otimizadas`

### Gate próprio (o que muda em relação ao PAAPS)

- Os olhos aparecem em todos os beats com texto sobre o rosto
- Nenhum beat usa mais de três modos
- O sublinhado do modo E acompanha a largura real de cada linha, não uma largura fixa
- A entrelinha do modo A está entre 0,82 e 0,90; se estiver em 1,0, está errado
- O modo D não aparece no mesmo reel que A ou B
- **Toda legenda está em bege `#f5f1e0`. Nenhuma exceção, nenhum branco puro.**
- **Nenhuma letra em vinho `#6f0d33` cai sobre fundo escuro.** Sobre escuro, vinho é
  painel, régua ou fundo. Conferir isso nos PNGs do `snapshot`, não só no validador.
- Toda peça tem o vinho aparecendo em algum lugar (halo, régua, painel ou conceito)
- Nenhuma camada escurece o fundo (herdado)
- Não usei fonte fora das duas famílias definidas
- Não usei cor fora dos seis hex da seção 4

---

## 7. Perguntas abertas, em ordem de bloqueio

1. ~~**Paleta**~~ RESOLVIDO em 22/07/2026: seis hex definidos na seção 4, legenda em bege
   `#f5f1e0`, destaque e aplicação colorida em vinho `#6f0d33`.
2. **Rosto:** a regra dos olhos livres, a alternativa conservadora, ou outra?
3. **Tipografia:** grotesca própria (separa do PAAPS) ou League Spartan (cria família)?
4. **Modos:** os cinco entram, ou cortamos algum agora? Minha sugestão é começar com três
   (A, B, E) e só abrir C e D depois do primeiro reel entregue.
5. **Perfil:** esta identidade é do @amalluvasconcellos, do @psimalluvasconcellos, ou os
   dois compartilham?
