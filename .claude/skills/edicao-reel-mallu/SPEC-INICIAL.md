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
- Cor sólida única pelo fundo (vinho na parede clara, branco no escuro), sem sombra visível
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
- Duas cores: a cor do trecho no corpo (vinho ou branco) e rosa `#c42443` nos dois
  conceitos-chave. Único modo em que a cor varia dentro da frase.
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
  aproveitável do conjunto
- Numeração explícita no início ("2)"), tornando a estrutura da fala legível sem áudio
- Régua na mesma cor do texto; cor sólida única pelo fundo
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

### Tipografia: IMPACT (definida pela Mallu em 22/07/2026)

**A grotesca do perfil é `Impact`.** Não é League Spartan: o perfil pessoal tem fonte
própria. League Spartan fica sendo o vínculo com o PAAPS, quando ela falar de lá.

Consequências práticas de escolher Impact:

- **Peso único.** Impact não tem light, regular nem black. Toda hierarquia sai de
  TAMANHO e de COR, nunca de peso. Isso simplifica: não existe a tentação de "deixa
  semibold aqui".
- **Acentuação completa em caixa alta.** Impact tem Ê, Ã, Ç e Õ em capitular. O acidente
  da referência "no brasil VOCê" não se repete aqui, e não vira regra.
- **Entressilhas já apertadas por padrão.** Casa direto com o `line-height` 0,82-0,90 do
  modo A. Aplicar `letter-spacing` levemente negativo (-0,01em a -0,02em) e não mais que
  isso, senão as hastes colam.
- **Só caixa alta.** Impact em caixa baixa fica pesado e mal espaçado. Todo texto em
  Impact vai `text-transform: uppercase`.

**Risco a controlar:** Impact é a fonte de meme por associação histórica. O que produz
essa leitura é a receita completa (branco puro, contorno preto duro, caixa alta
centralizada em cima e embaixo do quadro), não a fonte sozinha. Nesta identidade nada
disso acontece: cor de marca sólida, sem contorno, alinhado à esquerda, entrelinha
travada. Nessa configuração Impact lê como cartaz de protesto e capa de disco, que é
exatamente o lugar dela. **A proibição de contorno e de sombra visível (seção 4) é o que
segura isso. Não afrouxar.**

**Arquivo:** `/System/Library/Fonts/Supplemental/Impact.ttf`, já presente no Mac dela.
Impact é da Monotype e vem licenciada com o sistema operacional: **não commitar o `.ttf`
no repositório.** O `ingest.py` copia do sistema para `public/fonts/` na criação do
projeto, e `public/fonts/Impact.ttf` entra no `.gitignore`. Se o render um dia rodar em
outra máquina sem a fonte, o fallback é `Anton` (gratuita, OFL, desenho muito próximo).

**Pendente:** o modo B pede uma serifada de alto contraste, que Impact não cobre.
Candidatas gratuitas: `Playfair Display`, `Bodoni Moda`. Pagas: `Canela`,
`Tiempos Headline`. Ver seção 7.

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

### Regra de legenda (definida pela Mallu em 22/07/2026)

A legenda tem **uma cor sólida por trecho, decidida pelo fundo**. Sem painel atrás, sem
palavra de cor diferente no meio da frase, sem contorno colorido.

| Backdrop | Legenda inteira |
|---|---|
| Parede clara / branca (o caso mais comum) | **vinho `#6f0d33`** |
| Fundo escuro, b-roll escuro, roupa escura | **bege `#f5f1e0`** (o "branco" da paleta, nunca `#ffffff`) |

Num vídeo de cenário misto a cor troca no ponto de troca do cenário, não no meio de uma
frase.

### Sombra: a regra mais dura desta skill

> **Sombra colorida é PROIBIDA.** Nada de halo vinho, halo terracota, contorno de marca.
> O máximo permitido é uma sombra preta padrão, muito suave.

Referência de teto: `text-shadow: 0 1px 3px rgba(0,0,0,0.25)`. Se der para ver a sombra
olhando o frame, ela está forte demais. A legibilidade vem do peso da fonte e da cor
certa para aquele fundo, nunca de empilhar camadas em volta da letra.

Isso invalida a receita herdada do `edicao-reel-paaps`, que usa halo forte para sustentar
creme sobre parede clara. Aqui o problema é resolvido na origem: sobre parede clara a
legenda é vinho, e vinho sobre parede clara tem contraste de sobra sem precisar de
nenhuma muleta.

### Onde as outras cores entram

Com a legenda resolvida em duas cores, as outras quatro ficam para os elementos de peça,
não para o corpo do texto:

- **Sublinhado do modo E:** régua na cor da própria legenda, sólida, na largura exata da
  linha
- **Conceito nomeado do modo B:** sobre fundo claro, vinho `#6f0d33` no corpo e rosa
  `#c42443` no conceito; sobre fundo escuro, branco no corpo e rosa `#c42443` no conceito.
  O rosa é o único desvio de cor permitido dentro de uma frase, e só no modo B.
- **Marca d'água do modo C:** vinho a 20-25% de opacidade sobre parede clara
- **Terracota, marrom e lilás:** reservados para elementos gráficos e para as peças que
  conversam com o PAAPS. Não entram em legenda.

---

## 5. Ocupação da tela e a regra do rosto (definida pela Mallu em 22/07/2026)

No PAAPS a regra é dura: texto nunca sobre o rosto. Aqui ela é condicional, porque o lugar
de fala é outro: no institucional quem fala é a instituição e o rosto é a prova de que tem
gente atrás; no perfil pessoal o rosto já está dado, e o que precisa de espaço é o
pensamento.

> **O texto pode cruzar o rosto no GANCHO e nas frases de destaque. Na continuação da
> fala, o rosto fica limpo.**

Ou seja, a tela tem dois regimes e eles se alternam ao longo do reel:

### Regime 1: destaque (gancho, virada, frase-âncora)
- O bloco pode cruzar o rosto, ocupando o centro
- Poucos por reel: o gancho e um ou dois beats de virada
- Sempre com a revelação por clique (ver 5.1)
- Modos A, B e C vivem aqui

### Regime 2: continuação (a maior parte do texto falado)
- Rosto limpo, sempre
- A legenda vai **acima da cabeça** ou **no colo/peito**, escolhido pelo ENQUADRAMENTO
  daquele trecho, não por uma faixa fixa em pixels
- Plano fechado, cabeça alta no quadro: legenda no peito
- Plano aberto, cabeça no terço superior com parede sobrando em cima: legenda acima da
  cabeça
- Cenário muda no meio do vídeo: a posição é reavaliada por trecho
- Modo E vive aqui

Regra prática de execução: antes de escrever o layout, tirar um frame de cada trecho e
marcar onde está a linha do queixo e onde está o topo da cabeça. A posição da legenda sai
desse mapa, nunca de uma margem herdada do PAAPS.

### 5.1 Revelação por clique (assinatura sonora e visual)

Nas frases de destaque o texto **não aparece inteiro nem se revela suavemente**: as
palavras entram uma a uma, como peças sendo encaixadas.

- Uma palavra por vez, encaixe seco, sem fade lento e sem deslize longo
- Cada palavra entra sincronizada com a palavra falada
- **Cada palavra vem com um SFX de clique de mouse, suave**
- O clique é discreto: presente, nunca estalado. Volume na faixa dos SFX sutis já
  aprovados no PAAPS (~0.10 a 0.15), calibrado por LUFS junto do mix
- A frase montada permanece na tela depois do último clique; não desmonta palavra a
  palavra

O clique é o que dá a sensação de peça encaixando. É a assinatura sonora do perfil dela, e
é o que separa esse reel de legenda automática mesmo com o som ligado.

Não usar clique no regime 2. Se toda palavra do vídeo clica, o recurso vira ruído e perde
a função de marcar o que é destaque.

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

- **Nenhuma sombra colorida em lugar nenhum.** Só preto padrão, muito suave, invisível a
  olho nu no frame. Se dá para notar a sombra, está errado.
- **Legenda em cor sólida única por trecho:** vinho `#6f0d33` sobre parede clara, branco
  sobre fundo escuro. Sem palavra de outra cor no meio, exceto o conceito rosa do modo B.
- **Nenhum texto vinho sobre fundo escuro** e nenhum texto branco sobre parede clara.
  Conferir nos PNGs do `snapshot`, não só no relatório do validador.
- Todo beat de continuação tem o rosto limpo: legenda acima da cabeça ou no peito,
  escolhido pelo enquadramento real daquele trecho
- Só o gancho e os beats de destaque cruzam o rosto
- Toda frase que cruza o rosto usa revelação por clique, e todo clique tem SFX
- Nenhum clique aparece no regime de continuação
- Nenhum beat usa mais de três modos
- O sublinhado do modo E acompanha a largura real de cada linha, não uma largura fixa
- A entrelinha do modo A está entre 0,82 e 0,90; se estiver em 1,0, está errado
- O modo D não aparece no mesmo reel que A ou B
- Nenhuma camada escurece o fundo (herdado)
- Não usei fonte fora das duas famílias definidas
- Não usei cor fora dos seis hex da seção 4

---

## 7. Perguntas abertas, em ordem de bloqueio

1. ~~**Paleta**~~ RESOLVIDO em 22/07/2026: seis hex na seção 4. Legenda em cor sólida por
   backdrop (vinho na parede clara, branco no escuro), sombra só preta e suavíssima.
2. ~~**Rosto**~~ RESOLVIDO em 22/07/2026: dois regimes na seção 5. Gancho e destaques
   cruzam o rosto com revelação por clique; continuação mantém o rosto limpo, acima da
   cabeça ou no peito conforme o enquadramento.
3. ~~**Branco**~~ RESOLVIDO em 22/07/2026: é o bege da paleta `#f5f1e0`. Branco puro
   `#ffffff` não existe nesta identidade.
4. ~~**Tipografia**~~ RESOLVIDO em 22/07/2026: `Impact`, grotesca própria do perfil.
5. ~~**Perfil**~~ RESOLVIDO em 22/07/2026: ver seção 8.
6. **Modos:** os cinco entram, ou começamos com três (A, B, E) e abrimos C e D depois do
   primeiro reel entregue?
7. **Serifada do modo B:** Impact não cobre esse papel. `Playfair Display` ou
   `Bodoni Moda` (gratuitas), `Canela` ou `Tiempos Headline` (pagas). Alternativa: cortar
   o modo B por ora e resolver a identidade só com Impact.

---

## 8. De quem é esta identidade

**Perfil: `@malluvasconcellos` no Instagram.** Um só.

A confusão de handles no repositório vem de uma sequência de trocas de @ feitas pela
própria Mallu nos últimos dias. O repositório ainda carrega os dois nomes antigos:
`conteudo/instagram/amalluvasconcellos/`, os agentes `mallu-reels`, `mallu-carrossel` e
`mallu-linkedin`, e a seção v4 do `edicao-reel-paaps` que fala em `@psimalluvasconcellos`.
Nada disso é um perfil separado: é o mesmo perfil em momentos diferentes.

**Posicionamento atual, e ele explica a identidade inteira:** marca pessoal
**MALLU VASCONCELLOS**, sem "Psi" na frente. A decisão é deliberada e tem duas razões que
ela deu:

1. Ela ainda é estudante. "Psi" no handle daria a entender que já é psicóloga formada, o
   que não é verdade e traria problema de conselho profissional.
2. O perfil já foi pessoal dela. Ela ainda está decidindo se quer usar o Instagram para
   captar pacientes, e não quer que a estrutura visual force essa direção antes da
   decisão estar tomada.

**Consequência de projeto:** esta identidade é de AUTORA e de PENSAMENTO, não de
consultório. Nada de linguagem de atendimento clínico, agendamento, "agende sua consulta",
CRP no rodapé ou estética de perfil de terapeuta. Impact em vinho sobre parede clara
comunica exatamente isso: uma pessoa que pensa em público, não um serviço à venda.

Se em algum momento ela decidir abrir o consultório no perfil, essa decisão volta como
mudança de identidade, e não como um card de CTA colado por cima desta.

**Faxina pendente (não fazer agora, fazer quando ela pedir):** renomear a pasta
`conteudo/instagram/amalluvasconcellos/` e corrigir os handles nos três agentes e na
seção v4 do `edicao-reel-paaps`. É mexida de infraestrutura e merece sessão própria.
