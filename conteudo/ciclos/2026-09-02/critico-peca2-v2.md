# Crítica : rotatividade das Agentes Comunitárias de Saúde (ACS) : v2, rodada 1

**Peça avaliada:** `conteudo/ciclos/2026-09-02/copy-peca2-acs-v2.md`
**Nota:** 85/100
**Corte desta rodada:** 90 (rodadas 1 a 5; esta é rodada 1 do ciclo v2, reescrita do zero)
**Decisão:** volta pro copywriter

---

## Verificação da autoauditoria do copywriter (não tomada como verdade, checada linha a linha)

O copywriter relatou ter encontrado e corrigido, nesta reescrita: um travessão grande, duas
repetições verbatim entre slide e legenda, e uma repetição de palavra na capa. Conferido cada um
contra o texto final entregue:

1. **Travessão grande: CONFIRMADO removido.** `grep -n "—" copy-peca2-acs-v2.md` não retorna
   nenhuma ocorrência. (Na v1 anterior, o travessão aparecia nos 8 títulos de seção, ex.: `## Slide
   1 — Capa`; na v2, os títulos usam `:`, ex.: `### Slide 1 : Capa`. Correção real, não só
   alegada.)
2. **"Duas repetições verbatim entre slide e legenda": NÃO CONFIRMADO. Uma continua presente,
   inteira, na peça entregue.** Ver achado bloqueante 1, abaixo. Não importa se esta é uma das
   "duas" que o copywriter contava ter corrigido ou se é nova, produto da reescrita do zero: o
   efeito é o mesmo, ela está no texto que eu recebi para avaliar.
3. **"Repetição de palavra na capa": não encontrei problema no texto atual do slide 1.** "ela"
   aparece duas vezes na capa (`ELA AINDA ESTÁ...` / `...porque ela é vizinha...`), mas é uso
   pronominal normal em duas frases distintas, não repetição de palavra que precise de correção.
   Esta parte da autoauditoria se sustenta.

**Conclusão da verificação: a autoauditoria manual, sem a ferramenta Agent, pegou 2 dos 3
problemas que relatou ter pego, e não pegou o problema mais grave que eu encontrei nesta rodada
(achado 1).** Isso é evidência a favor de manter o crítico no fluxo mesmo quando o copywriter
audita a si mesmo: autoauditoria reduz erro, não substitui uma segunda leitura.

---

## Checagem mecânica de duplicata (`checa-duplicata-texto.py`)

Rodado antes do item 8, copy vs. ele mesmo e copy vs. Tecelã. Saída bruta: 23 sequências de 5+
palavras repetidas entre slides, 56 sequências batendo com a Tecelã. **A maioria é artefato do
jeito que o script fatia o arquivo, não duplicata real de conteúdo publicado.** Fui conferir cada
categoria à mão, porque "não julga se é proposital: só encontra" também vale ao contrário: eu
preciso julgar o que ele encontrou.

**Falsos positivos identificados e descartados, com o motivo:**
- `"cena para o buscador de fotos"`, `"destaque amarelo negrito só em"` e variações: são rótulos
  de campo do documento de handoff (`Cena para o Buscador de Fotos:`, `Destaque:`), não texto que
  vai pro slide publicado. Aparecem nos 8 slides porque são o nome do campo, não conteúdo.
- `"750 pessoas, com no mínimo 8 visitas"`, `"médica de minas gerais rmmg"` e correlatos, marcados
  como repetidos entre "slide 3" e "slide 8": o script não separa `## Legenda` e `##
  Referências (ABNT)` como seções à parte, então tudo que vem depois de `### Slide 8` até o fim do
  arquivo (legenda **e** a lista de referências ABNT) entra no balde "slide 8". A batida real é
  entre o card do slide 3 e a referência bibliográfica no rodapé do documento, que **deveria**
  repetir a linguagem da fonte original (é o que uma referência ABNT faz). Não é duplicata de
  conteúdo lido pela audiência.
- `"na ordem que a regra 3"`, `"a capilaridade que o sus"`, `"empurra tarefa para quem já está
  dentro"` e as batidas correspondentes contra a Tecelã: vêm da seção `## Onde o raciocínio da
  Tecelã ficou apertado` e da `Triagem obrigatória das mediações`, que citam a Tecelã quase
  literalmente **como parte do raciocínio documentado do copywriter, não como texto que vai pro
  slide.** Por doutrina eu não leio o processo dele, mas neste arquivo processo e entrega vêm no
  mesmo documento; separei manualmente os blocos `Texto:` e `Legenda` (o que é publicado) do resto
  (o que é raciocínio) antes de julgar.
- `"direito de fazer sem direito de"` batendo com a Tecelã (`Conexão inusitada`): correto e
  esperado. É citação real, e citação real deve ser literal, nunca parafraseada (`voz-paaps.md`,
  seção 7). Reproduzir a fala da Tecelã aqui é reproduzir a fala real da ACS que a Tecelã também
  registrou, não plágio de síntese.
- As dezenas de batidas na seção `Fontes`/`Referências (ABNT)`: referência bibliográfica **deve**
  reproduzir o nome da fonte, do artigo e do link; isso não é duplicata de conteúdo autoral.

**O achado real, que sobra depois de descartar os artefatos:** ver Achado bloqueante 1.

---

## Achados bloqueantes

### 1. Repetição verbatim completa entre slide 8 e a legenda (item 8)

**Slide 8:**
> "No seu município, o que falta primeiro pra Agente Comunitária de Saúde **ficar**: salário,
> gente pra dividir o território, ou apoio de enfermagem pra quem herdou a tarefa sem herdar o
> cargo?"

**Legenda, terceiro parágrafo:**
> "No seu município, o que falta primeiro pra Agente Comunitária de Saúde ficar: salário, gente
> pra dividir o território, ou apoio de enfermagem pra quem herdou a tarefa sem herdar o cargo?"

É a mesma frase, palavra por palavra (a única diferença é o negrito em "ficar" no slide, que não
muda o texto). Não é callback, não é bookend: bookend reformula, isso copia. Pelo item 8 do
checklist, "uma sequência de 5+ palavras idêntica em dois slides é reprovação automática nesta
categoria, mesmo que pareça proposital" — aqui são ~30 palavras idênticas, e o par não é nem
slide-slide, é slide-legenda, a mesma classe de erro que motivou a criação da checagem mecânica
(peça do INSS, 08/09/2026) e que o próprio copywriter disse ter caçado nesta reescrita. Uma
pergunta que já é o fechamento do carrossel (slide 8) perder toda a força de repetir-se, palavra
por palavra, na legenda que a acompanha no mesmo post: quem lê o carrossel e depois lê a legenda
sente que está lendo a mesma coisa duas vezes, não um reforço.

**Peso:** desconto os 15 pontos inteiros da linha "nenhuma figura retórica se repete mais de uma
vez" (mesmo não sendo tecnicamente uma "figura retórica", é a mesma classe de problema que essa
linha do checklist existe para pegar: repetição literal sem transformação).

**Reescrita proposta (proposta, não texto definitivo):** manter a pergunta no slide 8 como está
(é o fechamento do carrossel, e funciona bem ali) e trocar o terceiro parágrafo da legenda por uma
frase que **não repita a pergunta**, e sim reforce por outro ângulo, por exemplo algo como: *"Quem
responder no comentário está fazendo, por essa Agente Comunitária de Saúde, o diagnóstico que
nenhuma meta pediu a ela."* (Só um rascunho de direção; quem decide a frase final é o copywriter.)

---

## O que já está bom, nomeado

- **A arquitetura vivência-primeiro funciona de verdade, e é a correção certa da regra 3.** A capa
  não nomeia lei, sigla ou mecanismo nenhum: é só a cena da visita interrompida. O mecanismo
  institucional (Lei 11.350) só chega no slide 2, depois que a cena já fez o trabalho de fazer
  sentir. Isso é exatamente o que faltou na peça do INSS e é a razão de existir desta reescrita.
  Cada uma das 4 mediações da Tecelã (Movimento 4) tem, no texto final, ou uma cena concreta que a
  encarna (mediação 2 na capa, mediação 3 no respiro do slide 4) ou uma nomeação de mecanismo que
  só aparece depois que a vivência correspondente já foi mostrada (mediação 1 no slide 2, mediação
  4 nos slides 6 e 7). **Item 14 não encontrou achado**: não identifiquei nenhuma mediação da
  Tecelã com cena ou vivência concreta que tenha ficado de fora enquanto a peça cobra uma
  indignação estrutural sem lastro. A citação real ("Direito de fazer sem direito de ser") foi
  corretamente adiada para o slide 5, depois que quatro cenas já deram corpo ao "fazer" e ao "ser"
  que ela nomeia, evitando exatamente o erro do INSS (abrir com material comprimido da Tecelã sem
  cena ao redor).
- **Item 13 também não encontrou achado.** O único par metáfora/mecanismo que a peça usa mais de
  uma vez ("a porta abrir" / "a meta fechar", capa e slide 3) é traduzido em termos literais dentro
  do próprio slide 3: o card explica exatamente o que "a meta fechar" quer dizer (750:1, 8 visitas
  por dia, "o tempo que sustenta a confiança da visita não entra nessa conta"). Quem lê consegue
  apontar a frase que traduz a metáfora, sem precisar adivinhar.
- **Cada dado tem fonte, ano (quando existe) e explicação do que significa, dentro do próprio
  slide**, incluindo o cuidado de não inventar o ano da fonte da RMMG quando ele não estava
  disponível (nem no slide 7, nem na legenda). É o oposto do erro que a checagem de dado
  (`voz-paaps.md` 4.6) existe para pegar.
- **A figura "não X, é Y" aparece uma única vez na peça inteira** (slide 6, "não veio como lei
  comum: veio como emenda à constituição"), dentro do limite de uma vez por peça, e passa no teste
  do X-crença-real: a distinção entre lei ordinária e emenda constitucional é uma disputa jurídica
  real que a categoria sustentou por 30 anos, não um espantalho. (Nota à parte: a nota do
  copywriter no rodapé da peça, "não usei a estrutura 'não é X, é Y' em nenhum slide desta peça",
  está factualmente incorreta — ele usou, uma vez, no slide 6, com formulação sem o verbo "é" mas
  com a mesma lógica de negação-e-contraste. Isso não custou nota, porque o uso em si é
  legítimo e único; mas é outro ponto em que a autoauditoria dele não bateu com o texto que
  entregou, e vale registrar.)
- **Nenhum cliente, cidade ou case nomeado; NR-1 não aparece; nenhum "ninguém X" sem sujeito;
  zero vocabulário coachesco ou de guerra.** Peça limpa nas proibições absolutas.
- **Uma voz humana real, verificada** (slide 5), e nenhum slide empilha duas frases de impacto do
  mesmo peso: cada slide segue a anatomia do próprio modelo que declara seguir.

## Observação não-bloqueante (registrar, não descontar)

O slide 1 nunca nomeia, no próprio texto, quem é "ela": nem "Agente Comunitária de Saúde", nem
"ACS", nada. A identidade só chega no slide 2. É uma escolha coerente com a arquitetura
vivência-primeiro (a v1 tinha o problema oposto: a segunda linha da capa já entregava o mecanismo
institucional antes de a cena respirar), e a foto prevista (mulher com prancheta, no meio de uma
visita) deve resolver boa parte da ambiguidade visualmente. Ainda assim, tecnicamente, "ela" fica
sem antecedente dentro do próprio slide 1 (item 3 do checklist), resolvido só ao virar a página. Não
desconto porque: (a) é o mesmo tipo de suspensão que o M2 já usa dentro de uma frase só, aqui
esticado por um slide a mais; (b) não gera confusão real, porque a foto e o slide 2 resolvem o
"quem é ela" rápido; (c) puxar isso para bloqueante hoje entraria em rota de colisão direta com a
correção que esta própria reescrita está validando (não nomear mecanismo/identidade institucional
antes da cena). Fica como algo para o copywriter observar se a variante se repetir em outra peça:
se a foto não carregar sozinha a pista de "trabalhadora da saúde", a ambiguidade deixa de ser
suspense e vira confusão.

## Potencializações (opcional, nunca bloqueante)

- A legenda, mesmo depois de resolvido o achado 1, ainda tem uma leve sobreposição temática com o
  slide 6 (ambas mencionam "o piso subiu... a régua de 750... não subiu junto"), o que é esperado
  numa legenda que resume o carrossel, mas vale conferir se o resumo não está reduzindo a virada do
  slide 6 a uma frase solta fora do contexto da emenda constitucional.
- O card do slide 3 e o número do slide 7 nunca se encontram explicitamente ("750 pessoas por
  agente" e "39,9% saem em 12 meses" ficam em slides não-adjacentes); se algum dia a peça for
  revisada de novo, uma frase de ponte entre os dois (ex.: no slide 7, "a mesma régua de 750
  pessoas que nunca sobe") reforçaria ainda mais a coesão, sem que isso seja hoje uma exigência.

---

## Pontuação por critério

| Critério | Pontos possíveis | Pontos dados | Motivo |
|---|---|---|---|
| Cada dado se sustenta sozinho dentro do próprio slide | 25 | 25 | Todos os números (Lei 11.350, 750:1/8 visitas, 39,9%) vêm com fonte, contexto e explicação no próprio slide. |
| Cada dado se conecta explicitamente com a tese da capa | 20 | 20 | Cada dado amarra de volta ao "vínculo vira número" que a capa instala. |
| A capa carrega uma tese só | 15 | 15 | Uma cena, uma tensão, nada competindo pelo mesmo espaço. |
| Nenhuma figura retórica se repete mais de uma vez | 15 | 0 | Achado bloqueante 1: repetição verbatim completa entre slide 8 e legenda. |
| Proibições ativas cumpridas | 15 | 15 | Travessão zero, NR-1 ausente, sem case nomeado, sem "ninguém X", sem vocabulário coachesco/guerra. |
| Voz humana real + uma frase de impacto por slide | 10 | 10 | Citação real verificada; nenhum slide duplica impacto. |
| **Total** | **100** | **85** | |

---

## Decisão

**85/100, abaixo do corte de 90 (rodada 1 do ciclo v2). Volta pro copywriter.**

O único bloqueio real é pontual e objetivo: a pergunta do slide 8 precisa parar de ser idêntica à
da legenda. É correção de uma frase, não reescrita de peça. Reforço para a próxima rodada: rodar
de novo a checagem mecânica antes de reentregar, e desta vez também ler o resultado dela contra a
legenda isolada (não só slide-a-slide), porque foi exatamente aí que o problema desta rodada se
escondeu.
