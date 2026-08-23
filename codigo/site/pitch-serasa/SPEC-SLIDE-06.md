# SPEC do SLIDE 06 : Experiências / Pesquisas de Campo

> **Este arquivo é especificação, não implementação.** Nada foi alterado em `index-v4.html`
> nem em `pitch.css`. Os dois foram apenas lidos.
> Data: 23/08/2026. Base: ditado da Mallu + `pendencias-pitch-sabadopradomingo.md` §3.3.

---

## 1. O que sai e o que entra

| Elemento | Hoje (linhas 160 a 178 do `index-v4.html`) | Proposta |
|---|---|---|
| Título | `<h2 class="t-m">Experiências que fundaram o Método PAAPS.</h2>` | Título novo com o número grande dentro da frase: "MAIS DE 1.150 PESSOAS JÁ FORAM DIRETAMENTE IMPACTADAS PELAS PESQUISAS DE CAMPO PAAPS." Ver §2 |
| Tratamento do número | não existe | `<span class="numerao">`, a mesma classe do "76%" do slide 02, com regra nova de `display:inline` para o `#s6`. Ver §6 |
| "já foram" | texto corrido dentro do `.lead` | amarelo **e** sublinhado: `class="destaque sub-am"`. As duas classes já existem no `pitch.css` (linhas 268 e 269) |
| "pesquisas de campo PAAPS" | texto corrido | amarelo: `class="destaque"` |
| Caixas de vidro (4) | `#s6 .frag__ond` 0,8 a 1,04rem · `#s6 .frag__q` 0,75 a 0,96rem | subir cerca de 16%. Ver §3 |
| Parágrafo do pé | enumeração "Atenção Básica, Saúde Mental, Assistência Social, Escola Municipal: +1.150 pessoas já foram..." + fecho | legenda nova em Helvetica grande (`.lead`), sem repetir o número que subiu para o título. **4 opções em §4** |
| Frase que veio do slide 05 (§3.3 das pendências) | ainda não encaixada | **não resolvida aqui.** Ver §7, pergunta 1 |

O que **não** muda: a foto (`paaps-vivencia.jpg`), o `<p class="canto">Pré-validação</p>`,
o número do slide, o crédito da foto, o conteúdo das 4 experiências.

---

## 2. HTML proposto do título, colável

As classes abaixo existem de verdade no `pitch.css`:
`t-m` (linha 212), `numerao` (linha 234), `destaque` (268), `sub-am` (269),
`rev`/`rev--1` (animação de entrada, já usada no slide).

**Caixa alta:** vem da regra base `h1,h2,h3{...text-transform:uppercase}` na linha 206.
A `.t-m` não sobrescreve, então o título novo já sobe em caixa alta sozinho, sem nenhum
`style` inline. É o mesmo caminho do título de hoje.

**League Spartan:** vem de `font-family:var(--titulo)` na mesma regra base
(`--titulo:'League Spartan',Helvetica,Arial,sans-serif`, linha 39).

```html
<h2 class="t-m rev rev--1">Mais de <span class="numerao">1.150</span> pessoas <span class="destaque sub-am">já foram</span> diretamente impactadas pelas <span class="destaque">Pesquisas de Campo PAAPS</span>.</h2>
```

**Por que `.numerao` e não `.cel__n` ou `.pilar__n`:** as três são League Spartan 800, mas
`.cel__n` (2,5rem) e `.pilar__n` são números de célula de grade, dimensionados para conviver
com um rótulo do lado. `.numerao` é a classe que o deck usa quando o número é o herói do slide
(3,4 a 9rem, amarelo), e é exatamente ela que o slide 02 já usa **dentro** de um título, no
"76% dos brasileiros dependem do SUS". Este slide repete esse padrão, então repete a classe.

**A regra nova que falta:** `.numerao` sozinha é `display:block`, o que quebraria a frase em
duas. O deck já resolve isso uma vez, em `.t-fluxo .numerao` (linha 227), que devolve o número
para dentro da linha. Como aqui o título é `.t-m` e não `.t-fluxo` (porque `.t-fluxo` tem
`text-transform:none` e mataria a caixa alta que ela pediu), precisa da regra espelho para o
`#s6`. Ela está pronta em §6, e **sem ela o título colável acima quebra o desenho**.

---

## 3. Caixas de vidro: valores atuais x propostos

Valores lidos no `pitch.css`. Base geral nas linhas 1002 a 1010, e o override do slide 06 nas
linhas 1109 a 1111, que já subiu esse texto uma vez ("quatro cartões numa linha ficavam
pequenos demais para ler de longe").

| Seletor | Hoje | Proposto | Ganho |
|---|---|---|---|
| `#s6 .frag__ond` (a linha "Experiência 01 · ...") | `clamp(.8rem,1.02vw,1.04rem)` | `clamp(.92rem,1.18vw,1.2rem)` | +15% |
| `#s6 .frag__q` (o texto da experiência) | `clamp(.75rem,.94vw,.96rem)` | `clamp(.88rem,1.1vw,1.12rem)` | +17% |
| `.frag__c` padding | `.7em .8em` | mantém (é em `em`, cresce junto sozinho) | : |
| `#s6 .frag` gap | `clamp(.6rem,1.3vw,1.2rem)` | mantém | : |
| `#s6 .frag__q` line-height | `1.42` | mantém | : |

**Régua da casa:** legibilidade é valor, e a fonte média da PAAPS é grande. A 1,12rem o texto
da experiência passa a ser lido de longe em projetor, que é o problema que o override de hoje
tentou resolver pela metade.

### Risco de estouro vertical: existe, e é silencioso

`.slide` é `aspect-ratio:16/9` com `overflow:hidden` (linhas 67 a 72). Quer dizer que texto
que não cabe **não empurra o slide: ele some**, sem aviso nenhum na tela.

Orçamento estimado a 1600 x 900, com `--pad` de 70px em cima e embaixo (759px úteis):

| Bloco | Hoje | Proposto |
|---|---|---|
| Título | ~79px (2 linhas) | ~200 a 230px (o número a 1,34em levanta a linha dele) |
| Caixas de vidro (2x2) | ~237px | ~263px |
| Parágrafo do pé | ~272px (é longo, dá ~7 linhas a 52ch) | ~78px (legenda de 2 linhas) |
| **Total** | **~620px** | **~590px** |

Ou seja: o título engorda muito, mas a legenda nova encolhe mais ainda, e o slide fecha com
folga parecida com a de hoje. **A conta acima é estimativa, não medição.** Antes de aprovar,
rodar o script de contagem de linhas e de colisão da skill `ajuste-fino-tipografico` no slide
já montado, porque o `overflow:hidden` esconde o erro.

**Se estourar, a ordem de corte é esta, e nesta ordem:**
1. cortar palavra da legenda (§4 traz opções curtas de propósito);
2. cortar palavra do texto das experiências, que hoje tem frases de 140 caracteres;
3. ganhar largura mexendo em `#s6 .slide__c` (padding lateral), nunca no vertical;
4. **nunca reduzir o corpo da letra.** Se chegou aqui, a decisão volta para a Mallu.

---

## 4. A legenda nova: 4 opções para AskUserQuestion

**Classe:** `.lead` (linha 252). É a Helvetica de leitura do deck
(`--corpo:'Nimbus Sans','Helvetica Neue',Helvetica,Arial`), já grande de propósito:
`clamp(1.05rem,1.62vw,1.62rem)`, `max-width:52ch`. É a única classe de corpo grande do deck;
`.flutuante` também é Helvetica, mas é frase solta sobre a foto, não pé de bloco de texto.

**Marcação comum a todas:**
```html
<p class="lead rev rev--3" style="margin-top:.7em">TEXTO DA OPÇÃO</p>
```

**O que se perde e precisa ser decidido:** a enumeração de hoje ("Atenção Básica, Saúde Mental,
Assistência Social, Escola Municipal") era a única linha do slide que dizia **quais políticas**
a PAAPS tocou. Só a Opção D recupera isso. Nas outras três, ou a informação morre, ou volta
para dentro das 4 caixas de vidro (ver §7, pergunta 3).

---

### Opção A · rótulo: **Dois anos antes do deck**

> Antes de chegar aqui, a PAAPS passou dois anos dentro do Brasil real: das redes de saúde e
> educação de uma cidade pequena de Minas às escolas municipais do Rio de Janeiro, e só então
> o método virou o que está neste deck.

**O que ela faz pelo pitch, e as outras não:** é a única que nomeia o **tempo investido antes
da oferta existir**. Para um avaliador da Serasa, isso responde à pergunta silenciosa "isso é
um slide ou é uma empresa": dois anos de campo não se improvisa em três meses de aceleradora.
Também é a mais concreta geograficamente, e a que mais aproveita a régua de "mostrar em vez de
afirmar".

**Risco:** cita cidade e estado, o que amplia a distância do slide em relação à regra de não
nomear cliente em peça pública. Aqui o deck já nomeia nas caixas de vidro, mas se a decisão for
anonimizar o slide inteiro, esta é a opção que quebra primeiro. É também a mais longa das
quatro: 3 linhas a 52ch.

---

### Opção B · rótulo: **Campo de pesquisa, não vitrine**

> Cada um desses territórios foi campo de pesquisa antes de virar oferta: a PAAPS escutou,
> registrou e conferiu o que encontrou, e só então escreveu o método que está aqui.

**O que ela faz pelo pitch, e as outras não:** é a única que carrega a **postura científica**,
que é o pedido literal do ditado. Ela também neutraliza a leitura mais perigosa deste slide,
que é o avaliador ler as 4 caixas como portfólio de clientes. Dizendo "campo de pesquisa antes
de virar oferta", as experiências deixam de ser vitrine e passam a ser método. É a mais curta,
2 linhas, e a que menos disputa espaço com o título grande.

**Risco:** "pesquisa" sem instrumento nomeado é palavra que o avaliador pode cobrar
("pesquisa como? com que instrumento?"). Se ela entrar, é bom que a Mallu tenha a resposta na
ponta da língua na banca. O título já diz "Pesquisas de Campo PAAPS", então há repetição da
palavra pesquisa a poucos centímetros de distância.

---

### Opção C · rótulo: **Sem pacote pronto**

> A PAAPS não chega com pacote pronto: passou dois anos dentro de redes públicas em
> funcionamento, nomeou junto com as equipes o que estava adoecendo, e só então desenhou o que
> aquelas redes pediram.

**O que ela faz pelo pitch, e as outras não:** é a única que ataca **a crença do comprador**.
O gestor público e o avaliador de programa já viram dezenas de consultorias chegarem com
metodologia fechada na mão, e é isso que esta frase desmonta antes que alguém pergunte. É
também a que mais soa PAAPS, porque é a única em que as equipes aparecem como sujeito e não
como público atendido.

**Risco:** é uma construção "não X, e sim Y", e a regra da casa dá **uma por peça**. Se outro
slide do deck já usar a estrutura, esta opção sai automaticamente. O X negado aqui é crença
real (o gestor de fato espera o pacote pronto), então ela passa no teste, mas gasta a cota.

---

### Opção D · rótulo: **Prova de método, prova de mercado**

> Atenção Básica, Saúde Mental, Assistência Social e Escola Municipal: são dois anos de campo
> em quatro territórios, com as equipes trabalhando enquanto a pesquisa acontecia. Prova de
> método a PAAPS já tem; prova de mercado é o que viemos construir aqui.

**O que ela faz pelo pitch, e as outras não:** é a única escrita **para o investidor**, e não
para o gestor. Ela usa o vocabulário que o próprio `MODELO-PAAPS-COMPLETO.md` (linha 868) já
fixou ("prova de método nós já temos, prova de mercado é o que viemos buscar"), e é a única que
preserva a enumeração das quatro políticas que sai do subtítulo de hoje.

**Risco:** é a mais longa, e a única que termina com o pedido. Se o deck já fecha com esse
mesmo par prova-de-método/prova-de-mercado em outro slide, repetir aqui enfraquece os dois.
Precisa de conferência antes de aprovar.

---

## 5. Verificação do número 1.150

### O que os arquivos sustentam

| Onde | Trecho literal | O que prova |
|---|---|---|
| `MODELO-DE-NEGOCIO.md`, linha 26 | "Método validado em campo, 4 territórios, +1.150 pessoas \| **Real, e é prova de método**" | que o número já circula como afirmação da casa, marcado como real |
| `MODELO-DE-NEGOCIO.md`, linha 625 | "4 territórios, +1.150, custo evitado, Carta Melo 2050" | mesma afirmação, sem conta |
| `MODELO-PAAPS-COMPLETO.md`, linha 81 e linha 868 | "quatro territórios, **mais de mil pessoas**, um ano inteiro dentro de uma rede" | a versão arredondada, "mais de mil" |
| `RACIOCINIO-DO-ZERO.md`, linha 940 | "com **mais de mil pessoas**. Prova de método nós já temos" | idem |
| `index-v4.html`, linha 173 | "+1.150 pessoas já foram diretamente impactadas" | o próprio slide |

### A conta pelas 4 experiências do slide: NÃO FECHA

| Experiência | O que o slide diz | Pessoas contáveis |
|---|---|---|
| 01 · Desterro do Melo (MG), 2024 | "um ano dentro da rotina da rede pública" | **não informado** |
| 02 · Complexo da Maré (RJ), 2025 | "encontros semanais com mães de escola municipal" | **não informado** |
| 03 · PROINAPE / SME-RJ, 2025 | "mais de 300 horas de plantão psicológico e grupos" | **não informado** (300 é hora, não pessoa) |
| 04 · Bela Vista de Minas e Materlândia (MG), 2025 | "mais de 180 servidores acompanhados" | **180** |
| **Soma auditável** | | **180** |

**Veredito: o 1.150 não fecha em documento nenhum do projeto.** Ele aparece quatro vezes como
afirmação e zero vez como conta. O único número por experiência que existe no acervo inteiro é
o "+180 servidores" de Bela Vista, e ele reaparece em `MODELO-DE-NEGOCIO.md` linha 547 sendo
usado num teste de custo evitado, o que confirma o 180 e só o 180. Não há, em nenhum arquivo,
quantas mães, quantos profissionais do PROINAPE nem quantas pessoas da rede de Desterro do Melo
entraram na conta.

Isso não quer dizer que o número seja falso: quer dizer que **hoje ele não é defensável em
diligência**, e é justamente ele que a Mallu quer promover a título, em corpo de 5 centímetros,
amarelo, no meio do slide. Promover o número a título multiplica o custo de estar errado.

**Encaminhamento, em ordem de preferência:**

1. **Reconstruir a conta** (o certo). A Mallu, e só ela, tem a lista de presença de cada
   território. Uma linha por experiência: Desterro do Melo X, Maré Y, PROINAPE Z, Bela Vista e
   Materlândia 180. Se a soma passar de 1.150, o título entra como está e a conta vira anexo.
   É o mesmo tratamento que o deck já dá ao custo evitado.
2. **Baixar para o número que os arquivos sustentam**, "MAIS DE MIL PESSOAS". É a formulação
   que aparece em dois documentos independentes (`MODELO-PAAPS-COMPLETO.md` e
   `RACIOCINIO-DO-ZERO.md`) e continua sendo um número grande no título. Custo: perde a
   precisão que dá credibilidade.
3. **Trocar o herói do título** para o número que está auditado, e usar os 180 servidores. Só
   vale se a conta dos 1.150 não puder ser reconstruída a tempo, porque é uma queda grande de
   escala.

Enquanto a conta não existir, este spec marca:
**+1.150 pessoas = NÃO VERIFICADO** (afirmação interna, sem memória de cálculo).

---

## 6. CSS novo necessário

Nada aqui foi aplicado. Colar no bloco do slide 06 do `pitch.css`, que hoje vive nas linhas
1108 a 1111, logo abaixo do comentário `/* --- Slide 06, as experiências --- */`.

```css
/* --- Slide 06, as experiências --------------------------------------- */
/* Quatro cartões numa linha ficavam pequenos demais para ler de longe. */
#s6 .frag{grid-template-columns:repeat(2,1fr);gap:clamp(.6rem,1.3vw,1.2rem)}

/* Subida de corpo pedida pela Mallu em 23/08: o texto da experiência precisa
   ser lido de longe, em projetor. Cerca de +16% nos dois níveis. */
#s6 .frag__ond{font-size:clamp(.92rem,1.18vw,1.2rem)}
#s6 .frag__q{font-size:clamp(.88rem,1.1vw,1.12rem);line-height:1.42}

/* O número mora DENTRO do título, como o "76%" do slide 02. A `.numerao` solta
   é display:block e quebraria a frase em duas; esta regra é a espelho da que o
   deck já tem em `.t-fluxo .numerao`. Fica em `.t-m` porque `.t-fluxo` traz
   text-transform:none e apagaria a caixa alta do título. */
#s6 h2 .numerao{
  display:inline;font-size:1.34em;line-height:1;vertical-align:-.02em;
}
/* O título novo é longo: a 22ch padrão da `.t-m` ele desce para 5 linhas.
   Ganhar largura é a alavanca certa antes de encostar no corpo da letra. */
#s6 .t-m{max-width:30ch}
```

Não é preciso CSS novo para o amarelo nem para o sublinhado: `.destaque` (amarelo `#f7c31c`) e
`.sub-am` (sublinhado amarelo, offset .16em, espessura .07em) já existem e podem ser usadas
juntas no mesmo `<span>`.

---

## 7. Perguntas abertas para a Mallu

1. **A frase que veio do slide 05.** As pendências (§3.3) dizem que este slide recebe "Tudo que
   uma equipe precisa está nela mesma. A PAAPS desvela as potências: a solução já existe, só
   precisa do contexto certo para emergir", e que ela ainda queria olhar onde encaixa. Com o
   título virando o número e o pé virando legenda curta, **não sobrou lugar óbvio para ela**.
   Entra como frase solta sobre a foto (`.flutuante`)? Entra no lugar da legenda, e a legenda de
   §4 some? Ou fica para outro slide?
2. **O 1.150.** Qual dos três encaminhamentos de §5. Se for reconstruir a conta, preciso do
   número de pessoas de Desterro do Melo, da Maré e do PROINAPE.
3. **A enumeração das quatro políticas** ("Atenção Básica, Saúde Mental, Assistência Social,
   Escola Municipal") só sobrevive na Opção D. Se ela escolher A, B ou C, essa informação
   morre ou volta para dentro das caixas de vidro?
4. **"Mais de" ou "+".** O slide hoje escreve "+1.150". Em título de caixa alta e corpo grande,
   "MAIS DE 1.150" lê melhor de longe que "+1.150", mas ocupa mais uma linha. Qual das duas.
5. **Ponto final no título.** O título de hoje termina com ponto. O novo mantém?
6. **Nomear os municípios.** As caixas de vidro nomeiam Desterro do Melo, Maré, SME-RJ, Bela
   Vista e Materlândia. A regra da casa proíbe nomear cliente em peça pública; um deck de
   inscrição não é peça pública, e por isso não mexi em nada. Confirmar que a leitura está
   certa antes de o deck circular fora da Serasa.
7. **O aumento das caixas de vidro** foi calibrado em +16%. Se ela quiser mais, o próximo
   degrau seguro é `clamp(1rem,1.24vw,1.26rem)` no `.frag__q`, mas aí a conta de altura de §3
   precisa ser medida, não estimada.
