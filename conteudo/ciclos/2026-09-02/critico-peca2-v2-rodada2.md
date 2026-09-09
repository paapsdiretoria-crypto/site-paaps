# Crítica : rotatividade das Agentes Comunitárias de Saúde (ACS) : v2, rodada 2

**Peça avaliada:** `conteudo/ciclos/2026-09-02/copy-peca2-acs-v2.md`
**Nota:** 100/100
**Corte desta rodada:** 90 (rodadas 1 a 5; esta é rodada 2 do ciclo v2)
**Decisão:** libera pro Buscador de Fotos

> Nota de leitura: reavaliei do zero, sem tomar como válido nenhum achado ou justificativa da
> rodada 1 sem reconferir. Onde a rodada 1 estava certa, confirmo com raciocínio próprio; onde
> encontrei uma imprecisão na rodada 1, registro abaixo, mesmo não mudando a decisão final.

---

## O achado bloqueante da rodada 1: verificação direta

**Achado da rodada 1:** repetição verbatim completa (~30 palavras) entre a pergunta do slide 8 e
o terceiro parágrafo da legenda.

**Estado atual, lido linha a linha:**

Slide 8 (mantido intacto):
> "No seu município, o que falta primeiro pra Agente Comunitária de Saúde **ficar**: salário,
> gente pra dividir o território, ou apoio de enfermagem pra quem herdou a tarefa sem herdar o
> cargo?"

Legenda, terceiro parágrafo (reescrito):
> "Se você trabalha nessa rede, sabe que a resposta não é só salário. Conta pra gente, no
> comentário: o que teria feito diferença pra uma Agente Comunitária de Saúde não sair no
> primeiro ano, na sua cidade?"

**Confirmado: corrigido.** O slide 8 não mudou (correto, é o fechamento do carrossel e funciona
ali). A legenda não repete mais a pergunta palavra por palavra: é uma pergunta diferente, com
outro ângulo (o que faria diferença para ela ficar, não o que falta) e outra função (CTA de
comentário, não fechamento de leitura). Não é a mesma frase reformulada cosmeticamente, é
outro raciocínio.

**Sobre a pergunta ficar repetida como classe (duas perguntas na mesma peça, uma no slide 8,
outra na legenda):** não conto isso como a mesma figura retórica se repetindo para efeito barato.
Slide-fechamento-em-pergunta (M1) e legenda-com-CTA-em-pergunta são dois padrões distintos e
ambos já documentados como praxe da casa (`voz-paaps.md`, seção 7: "CTA: Proposição, não apelo
('O que o seu município está fazendo?')" já é, ela mesma, uma pergunta). O problema da rodada 1
nunca foi "duas perguntas existem na peça", foi "a mesma frase existe duas vezes". Isso está
resolvido.

---

## Checagem mecânica (`checa-duplicata-texto.py`)

Rodado de novo, copy vs. ele mesmo e copy vs. Tecelã. Saída bruta: 24 sequências de 5+ palavras
entre slides, 56 batendo com a Tecelã. Nenhuma delas é duplicata real de texto publicado. Conferi
cada uma:

**Entre slides (24), todas descartadas como falso positivo, com o motivo:**
- `"cena para o buscador de"`, `"destaque amarelo negrito só em"`, `"o buscador de fotos..."` e
  variações (aparecendo em até 8 slides): são o nome do campo de handoff (`Cena para o Buscador
  de Fotos:`, `Destaque:`), não texto que vai pro slide publicado.
- `"750 pessoas, com no mínimo"`, `"com no mínimo 8 visitas"`, `"pessoas, com no mínimo 8"`,
  `"médica de minas gerais rmmg"`, `"revista médica de minas gerais"` (slides 3/7, 8): o script
  não separa `## Legenda` e `## Referências (ABNT)` como blocos à parte de `### Slide 8`, então
  a referência bibliográfica no rodapé do documento cai no balde "slide 8". Referência ABNT
  **deve** repetir o nome da lei e da revista citada; não é duplicata de conteúdo lido pela
  audiência.
- `"ela ainda está no meio"`, `"da conversa quando precisa seguir"`, `"no meio da conversa
  quando"`, `"está no meio da conversa"`, `"meio da conversa quando precisa"` (slides 1, 3): a
  frase existe **uma vez** publicada, no `Texto:` do slide 1. A segunda ocorrência está dentro do
  bloco `**Por que aqui:**` do slide 3, citando a capa como justificativa editorial de sequência.
  Isso é raciocínio do copywriter no mesmo arquivo, não uma segunda vez que o texto aparece pro
  leitor.
- `"direito de fazer sem direito"`, `"de fazer sem direito de"` (slides 5, 8): mesmo padrão. A
  citação aparece **uma vez** publicada, no `Texto:` do slide 5. A segunda ocorrência está no
  bloco `## Onde o raciocínio da Tecelã ficou apertado`, discutindo por que ela foi posicionada
  ali. Conferido: `grep` no arquivo mostra 3 ocorrências totais da frase, e só uma está dentro de
  um bloco `Texto:`.
- `"buscador de fotos acs"`, `"uma agente comunitária de saúde"` (slides 1/2/4, 1/8): a primeira é
  rótulo de campo; a segunda combina o campo `Cena para o Buscador de Fotos` do slide 1 ("uma
  Agente Comunitária de Saúde sentada ou de pé conversando...") com a legenda publicada
  ("...pra uma Agente Comunitária de Saúde não sair no primeiro ano..."). Mesmo padrão: um dos
  dois lados não é texto publicado.
- `"na ordem que a regra"`, `"ordem que a regra 3"` (slides 3, 8): frase de raciocínio interno
  (`Por que aqui`, e a seção final `Onde o raciocínio da Tecelã ficou apertado`), nunca aparece
  em `Texto:` nem `Legenda`.

**Contra a Tecelã (56), todas descartadas como falso positivo, com o motivo:**
- ~40 delas são a lista de `Fontes`/`Referências (ABNT)`: nome de lei, de revista, de artigo e
  URL. Referência bibliográfica deve reproduzir o nome da fonte; não é apropriação de síntese.
- `"de fazer sem direito de"` / `"direito de fazer sem direito"` / `"fazer sem direito de ser"`:
  a citação real da ACS (`Conexão inusitada` da Tecelã) é, por definição, para ser reproduzida
  literalmente quando usada como citação (`voz-paaps.md`, seção 7: "Citação: Real ou conceitual,
  nunca inventada, sempre atribuída" — atribuir bem exige não parafrasear a fala real).
- `"a capilaridade que o sus"`, `"depende do trabalho mais precarizado"`, `"empurra tarefa para
  quem já está dentro"`, `"alivia o sintoma salarial sem tocar"`, `"sem tocar a razão
  populacional"`: todas dentro da seção `## Onde o raciocínio da Tecelã ficou apertado`, que
  descreve o processo do copywriter citando a Tecelã para justificar a própria decisão editorial.
  Não é texto que entra no slide nem na legenda.
- `"pré requisito legal, não talento"`: mesma seção de raciocínio (`Por que aqui` do slide 2).

**Conclusão da checagem mecânica: nenhuma duplicata real sobra.** O achado da rodada 1 foi o
único encontrado nas duas rodadas, e está corrigido.

---

## Checklist por slide (refeito do zero)

**Slide 1 (Capa, M1 variante vivência-primeiro):** uma tensão só, sem lei nem mecanismo nomeado.
Cumpre a variante que a própria peça declara. Um único destaque (item 6, ok).

**Slide 2 (M2, afirmação continuada):** a Lei 11.350 entra com ano (2006) e com o que ela obriga
("faz de morar no bairro... o pré-requisito do próprio contrato") — item 5 cumprido. Uma frase só,
quebrada em duas tipografias, sem dois murros (item 6, ok).

**Correção que registro aqui, porque a rodada 1 errou nisso:** a rodada 1 escreveu, na observação
não-bloqueante sobre "ela" sem antecedente na capa, que "a foto e o slide 2 resolvem o 'quem é
ela' rápido". **Isso não é verdade.** Reli o `Texto:` do slide 2 palavra por palavra: ele nunca
nomeia "Agente Comunitária de Saúde" nem "ACS" — fala só em "a carreira" e "ela". O primeiro lugar
onde a peça nomeia a profissão, no texto publicado, é o card do slide 3 ("1 Agente Comunitária de
Saúde para cada 750 pessoas..."). Ou seja, a ambiguidade de identidade dura dois slides, não um.

Mantenho essa observação como **não-bloqueante**, por razão própria, não porque a rodada 1 disse
que era: (a) é o mesmo tipo de suspensão que o M2 já pratica dentro de uma frase, aqui esticado
por mais um slide; (b) a Lei 1 (foto documental real em todos os slides) garante que o slide 1 e o
2 mostrem, visualmente, uma trabalhadora fazendo visita domiciliar com prancheta/uniforme, o que
já situa o tipo de cena para o público-alvo da peça (gestora, RH, psicóloga de rede) mesmo sem a
palavra escrita; (c) o item 3 do checklist fala em não exigir que o leitor "lembre de um slide
anterior" — aqui o efeito é o oposto, suspense que resolve para a frente, dentro de duas
passadas de dedo, técnica normal de carrossel, não confusão real. Não desconto pontos por isso,
mas registro para o copywriter como algo a observar: se numa próxima peça esse adiamento passar
de 2 slides, ou se a foto não carregar sozinha a pista da profissão, isso deixa de ser suspense e
vira lacuna.

**Slide 3 (M5, dado em card):** dado (750:1, 8 visitas/dia) com fonte (Lei 11.350 + parâmetro do
Ministério da Saúde) e explicação do que significa na prática ("o tempo que sustenta a confiança
da visita não entra nessa conta") — itens 1 e 2 cumpridos dentro do próprio slide. A metáfora
"a porta abre / a meta fecha", usada também na capa, é traduzida em termos literais neste mesmo
slide (item 13: não fica órfã).

**Slide 4 (M3, respiro):** sem dado, sem CAPS, uma expressão em amarelo. Cumpre a lei do próprio
modelo ("se entrar dado, deixou de ser respiro" não se aplica aqui, não há dado).

**Slide 5 (M4, citação):** fala real, atribuída por papel anonimizado ("Agente Comunitária de
Saúde, em comentário público no @paaps.brasil"), citada sem paráfrase. Cumpre a anatomia do
modelo.

**Slide 6 (M7, nomeação):** ordem exata do modelo (CAPS de entrada → virada em display → lista de
sintomas → enquadre institucional). A única ocorrência de "não X, é Y" da peça inteira está aqui
("O PISO NÃO VEIO COMO LEI COMUM: VEIO COMO EMENDA À CONSTITUIÇÃO"), com `:` no lugar do "é" (Lei
8). Passa no teste do X-crença-real: a categoria disputou 30 anos por isso, ninguém esperava que
precisasse de emenda constitucional para um piso salarial. Único uso, dentro do limite de 1 por
peça.

**Slide 7 (M6, número gigante):** 39,9% com fonte dupla, e honestidade sobre a limitação da fonte
("Revista Médica de Minas Gerais (RMMG), ano não confirmado") em vez de inventar um ano — exatamente
o oposto do que a checagem de dado (`voz-paaps.md` 4.6) existe para pegar.

**Slide 8 (M1, variante pergunta diagnóstica):** a pergunta amarra de volta salário (slide 6),
território (slide 3) e apoio de enfermagem (slide 4) — conecta explicitamente com o que a peça já
construiu, não é uma pergunta solta.

---

## Checklist da peça inteira

**Item 7 (capa com uma tese só):** sim, sem disputa de duas ideias.

**Item 8 (figura retórica repetida + checagem mecânica):** resolvido. O único par de frases
paralelas reais que restam na peça publicada, "Isso, nenhuma ficha de visita registra" (slide 1)
e "Isso, nenhuma meta sabe contar" (legenda, último parágrafo), é bookend capa+legenda com
reformulação real (ficha de visita ≠ meta), exatamente o padrão que `APRENDIZADO.md` já registrou
como aceitável ("capa + legenda contam juntas como bookend"). Não é a mesma frase, é a mesma
arquitetura retórica variada de propósito, e nomeia o instrumento (ficha, meta) em vez de cair em
vazio de agência.

**Item 9 (NR-1):** ausente da peça inteira. `grep` confirma zero ocorrências.

**Item 10 (case/cliente nomeado):** nenhum. `grep` por cidade/prefeitura/case não retorna nada.

**Item 11 (voz humana real):** presente, slide 5, atribuída e sem paráfrase.

**Item 12 ("ninguém X" sem sujeito estrutural):** a única ocorrência de "ninguém" no arquivo está
dentro de uma descrição de cena para foto ("crachá de ACS pendurado sem ninguém o vestindo"), não
é uma alegação sem sujeito no sentido da seção 3 de `voz-paaps.md`. Nas frases que de fato fazem
esse tipo de afirmação ("nenhuma ficha de visita registra", "nenhuma meta sabe contar"), o sujeito
estrutural está nomeado (a ficha, a meta), que é exatamente o padrão correto.

**Item 13 (metáfora sem tradução):** a única imagem central reaproveitada mais de uma vez ("a
porta abre / a meta fecha") é traduzida em termos literais dentro do próprio slide 3. "Herdar a
tarefa sem herdar o cargo" (slide 8) é callback de uma cena já mostrada e explicada no slide 4, não
uma metáfora nova sem lastro.

**Item 14 (mediação da Tecelã descartada):** reli o arquivo `tecela-peca2-acs.md` do zero, sem
assumir a conclusão da rodada 1. As quatro mediações do Movimento 4: mediação 2 (a métrica que
conta porta, não tempo de confiança) está desenrolada em cena na capa e nomeada em número no
slide 3; mediação 1 (lei que converte vínculo em pré-requisito) nomeada no slide 2, depois da
cena; mediação 3 (subfinanciamento de enfermagem) encarnada em cena concreta no slide 4 (aferir
pressão, conferir remédio, decidir se espera); mediação 4 (regime de contratação instável) nomeada
nos slides 6 e 7, amarrada ao número duro. Nenhuma mediação com cena/vivência concreta ficou de
fora enquanto a peça cobra uma acusação institucional sem lastro. A capa, em particular, não faz
nenhuma acusação: é só a cena. **Não encontrei achado neste item**, e cheguei a essa conclusão
lendo a Tecelã de novo, não repetindo a leitura da rodada 1.

---

## Pontuação por critério

| Critério | Pontos possíveis | Pontos dados | Motivo |
|---|---|---|---|
| Cada dado se sustenta sozinho dentro do próprio slide | 25 | 25 | Lei 11.350, 750:1/8 visitas, 39,9%: todos com fonte, ano (quando existe) e explicação do que significam, dentro do próprio slide. |
| Cada dado se conecta explicitamente com a tese da capa | 20 | 20 | Cada mecanismo nomeado amarra de volta à cena da capa; o slide 8 reconecta salário, território e enfermagem explicitamente. |
| A capa carrega uma tese só | 15 | 15 | Uma cena, uma tensão, nenhum mecanismo institucional competindo por espaço. |
| Nenhuma figura retórica se repete mais de uma vez | 15 | 15 | Achado da rodada 1 corrigido (slide 8 intacto, legenda reescrita com outra pergunta). Checagem mecânica sem duplicata real. Bookend capa/legenda com reformulação real, dentro do padrão já aceito. "Não é X, é Y" usada uma única vez. |
| Proibições ativas cumpridas | 15 | 15 | Zero travessão, zero NR-1, zero case/cidade nomeado, zero "ninguém X" sem sujeito, zero vocabulário coachesco/guerra. |
| Voz humana real + uma frase de impacto por slide | 10 | 10 | Citação real atribuída sem paráfrase; nenhum slide duplica impacto do mesmo peso. |
| **Total** | **100** | **100** | |

---

## O que já está bom, nomeado

- **O achado bloqueante da rodada 1 foi resolvido de forma real, não cosmética.** O copywriter não
  tentou reformular a mesma pergunta com sinônimos (o que ainda seria a mesma figura repetindo);
  escreveu uma pergunta com outro ângulo e outra função (CTA de comentário, não fechamento de
  leitura).
- **A arquitetura vivência-primeiro segue de pé na segunda leitura**, inclusive depois de eu
  corrigir a imprecisão da rodada 1 sobre quando a identidade da protagonista é revelada: mesmo
  levando até o slide 3 para nomear "Agente Comunitária de Saúde", a peça nunca abre com mecanismo
  institucional sem cena antes, que era o erro estrutural da peça-irmã do INSS.
- **Honestidade de fonte mantida**: o slide 7 continua declarando "ano não confirmado" para a RMMG
  em vez de inventar um dado, prática rara e correta.

## Potencializações (opcional, nunca bloqueante)

- A observação sobre "ela" sem nome até o slide 3 (não até o slide 2, como a rodada 1 registrou
  por engano): se o Buscador de Fotos não conseguir uma imagem em que a farda/crachá de ACS seja
  legível já no slide 1 ou 2, considerar adiantar uma âncora textual mínima (ex.: trocar "ela" por
  "a agente" em algum ponto do slide 2) para não depender só da foto.
- A nota do copywriter, no rodapé da peça ("não usei a estrutura 'não é X, é Y' em nenhum slide
  desta peça"), continua factualmente incorreta pela segunda rodada seguida: o slide 6 usa a
  mesma lógica de negação-e-contraste, só que com `:` no lugar do "é" (Lei 8 do catálogo de
  slides). Isso não custou nota, porque o uso em si é único e legítimo, mas vale o copywriter
  ajustar a própria autoauditoria para não seguir carregando essa imprecisão para a próxima peça.
- O título do arquivo (`# Copy : ... : v2, rodada 1`) não foi atualizado para "rodada 2" depois da
  reescrita. Não afeta a nota, mas vale corrigir para não confundir quem abrir o arquivo depois.
- Potencialização já registrada na rodada 1 e ainda válida: o card do slide 3 (750 pessoas) e o
  número do slide 7 (39,9%) nunca se encontram na mesma frase; uma ponte explícita entre os dois
  reforçaria ainda mais a coesão, sem ser hoje uma exigência.

---

## Decisão

**100/100, acima do corte de 90. Peça atende ao mínimo de duas rodadas do ciclo (esta é a rodada
2) e não tem achado bloqueante novo nem residual. Libera pro Buscador de Fotos.**
