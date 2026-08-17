# O modelo de negócio da PAAPS, explicado do zero

> Documento para reler. Construído em degraus: cada degrau só usa o que veio antes.
> Se em algum ponto travar, o problema está no degrau anterior, não no atual.
> Versão de 17/08/2026, com as decisões da Mallu: 70 equipes, supervisor para
> 14 psicólogos, orquestrador em IA com customer success humano.

---

# DEGRAU 0 · O que é um modelo de negócio, afinal

Um modelo de negócio responde a uma pergunta só:

> **Quando você vende uma coisa, sobra dinheiro? Quanto? E sobra mais ou menos
> quando você vende muitas?**

É isso. Todo o resto é detalhe dessa pergunta.

Existem três respostas possíveis, e elas decidem o destino da empresa:

| Resposta | O que acontece |
|---|---|
| Sobra, e sobra **mais** quando cresce | negócio que escala; é o que investidor procura |
| Sobra, e sobra **igual** quando cresce | negócio bom; cresce devagar, com o próprio caixa |
| Sobra, mas sobra **menos** quando cresce | armadilha; quanto mais vende, pior fica |

A PAAPS está no segundo caso, com um pedaço do terceiro escondido dentro
(o imposto, degrau 6). Ver isso agora é o que evita a armadilha depois.

---

# DEGRAU 1 · Qual é a coisa que você vende uma vez

Antes de qualquer conta, é preciso achar **a unidade**: a menor coisa que a
PAAPS vende, cobra e entrega uma vez.

Não é o município. Não é o contrato. Não é o servidor.

> **A unidade é o GRUPO.**
> Um encontro, com uma equipe, uma vez.

Por que isso importa: quando você acha a unidade certa, toda conta fica simples,
porque você só precisa saber duas coisas: **quanto entra por unidade** e
**quanto sai por unidade**. Depois é só multiplicar.

```
Preço de um grupo: R$ 1.100   (você cobra entre R$ 1.000 e R$ 1.200)
```

## 1.1 De onde vem a quantidade de grupos

Uma prefeitura de 500 servidores. Essas 500 pessoas não trabalham soltas: elas
trabalham em equipes (o CRAS tem uma equipe, o postinho tem outra, cada escola
tem a sua).

```
500 servidores ÷ 7 pessoas por equipe = 70 equipes
Cada equipe recebe 1 grupo por mês  →  70 grupos por mês
70 grupos × R$ 1.100 = R$ 77.000 por mês
```

**Por que 70 e não 80** (a decisão que você tomou): se você dividir 500 por 80,
dá 6,25 pessoas por equipe, e você mesma disse que as equipes têm de 6 a 8.
6,25 é a beirada de baixo. Com média de 7, que é o meio honesto, dá 70.

Essa decisão custou R$ 11.000 de receita por mês. Comprou o quê? Folga
operacional. O degrau 3 mostra exatamente quanta.

---

# DEGRAU 2 · Quem faz o trabalho

Quatro funções, e elas são muito diferentes entre si:

| Função | O que faz | Onde fica |
|---|---|---|
| **Psicólogo local** | conduz os grupos, olho no olho, na cidade | dentro do município |
| **Supervisor** | supervisão clínica dos psicólogos, a cada dois dias | remoto, atende vários municípios |
| **Orquestrador** | monta a escala, decide quem vai onde, faz a rotação, fala com a prefeitura, consolida relatório | agora: IA + uma pessoa de customer success |
| **Estrutura** | você, contador, advogado, ferramentas | a empresa |

## 2.1 Quantas pessoas de cada uma

**Psicólogos: 2 por município.** Cada um faz 2 grupos por dia.

```
2 psicólogos × 2 grupos/dia × 21 dias úteis = 84 grupos de capacidade
Precisamos de: 70
Folga: 14 grupos = 17%
```

**Sua conta está certa: dois psicólogos dão conta de 70 equipes com margem.**
Com as 80 equipes anteriores a folga caía para 5%, e num mês de 20 dias úteis
(feriado municipal, Carnaval) caía para zero. Zero folga em campo é contrato em
risco: um psicólogo com gripe e o mês não fecha.

**Supervisor: 1 para cada 14 psicólogos**, como você definiu. Como cada
município usa 2 psicólogos:

```
14 psicólogos ÷ 2 por município = 1 supervisor atende 7 municípios
```

Conferindo se a carga cabe: supervisão a cada dois dias são ~10 sessões por mês
por município. 7 municípios × 10 sessões × 1h30 = **105 horas por mês**. Cabe
numa jornada de 160h com sobra para preparo e registro. **Seu número de 14
psicólogos por supervisor está correto.**

**Orquestrador: IA + 1 customer success humano** (sua decisão, e é a certa;
o degrau 5 mostra quanto ela vale). Como a IA faz o trabalho repetitivo, uma
pessoa consegue cuidar de vários municípios ao mesmo tempo. Trabalhando com
**1 CS para 5 municípios**.

---

# DEGRAU 3 · Quanto custa uma pessoa (e por que não é o salário)

Aqui está o primeiro lugar onde quase todo mundo erra, e onde você errou.

> **Uma pessoa nunca custa o salário dela.**

Quando você contrata alguém por R$ 6.000, você não gasta R$ 6.000 por mês. Você
gasta isso:

| O que é | Por que existe | Valor |
|---|---|---|
| Salário | o combinado | 6.000 |
| FGTS 8% | a lei manda depositar todo mês | 480 |
| 13º salário | você paga 13 salários por ano, então guarda 1/12 todo mês | 500 |
| FGTS sobre o 13º | tem FGTS em cima do 13º também | 40 |
| Férias + 1/3 | um mês de férias por ano, e a Constituição manda pagar 1/3 a mais | 667 |
| FGTS sobre férias | idem | 53 |
| Multa de 40% do FGTS | se um dia a pessoa sair, você paga isso; guarda desde já | 229 |
| Deslocamento em campo | ele roda unidades pelo município inteiro | 300 |
| Exames, seguro, material de grupo | | 100 |
| **CUSTO REAL** | | **R$ 8.370** |

```
R$ 8.370 ÷ R$ 6.000 = 1,39
```

**Todo salário de campo se multiplica por 1,39.** Para quem é remoto, por 1,34
(não tem deslocamento).

Você tinha estimado 1,17. Por isso a sua conta dava mais dinheiro do que existe.

## 3.1 Uma coisa boa escondida aqui

Se a PAAPS estivesse fora do Simples Nacional, esse multiplicador seria **1,7**,
não 1,39. A diferença é o **INSS patronal de 20%**, que numa empresa normal se
paga por fora da folha e no Simples já está incluído no imposto único.

Guarde essa informação. Ela volta com força no degrau 7.

---

# DEGRAU 4 · CLT, PJ ou IA: a pergunta que você fez

Existem três jeitos de fazer um trabalho acontecer, e eles não diferem só no
preço. Diferem em **três coisas ao mesmo tempo**, e a terceira é invisível.

## 4.1 Os três jeitos

**CLT (contratar como empregado)**
- Custo: salário × 1,39
- Compromisso: alto. Demitir custa (a multa de 40% que já está na conta).
- A pessoa é sua: horário, subordinação, exclusividade se você quiser.

**PJ (contratar como prestador)**
- Custo: o valor da nota, e acabou. Sem FGTS, sem 13º, sem férias.
- Compromisso: baixo. Liga e desliga.
- **Risco:** se a relação tiver horário fixo, subordinação e exclusividade, a
  Justiça pode entender que era emprego disfarçado. Aí vem o passivo
  trabalhista retroativo. PJ só é seguro quando é de verdade autônomo.

**IA (fazer com software)**
- Custo: assinatura e uso, praticamente fixo e pequeno.
- Compromisso: zero.
- **Risco:** falha em silêncio. Ninguém percebe que a escala saiu errada até a
  equipe estar esperando o psicólogo que não vem.

## 4.2 A terceira diferença, que é a invisível

> **Só CLT e pró-labore contam no cálculo do seu imposto. PJ e IA não contam.**

Isso parece um detalhe de contador. Não é. É a coisa mais importante deste
documento, e o degrau 6 explica por quê.

Por enquanto, guarde a frase:

> **Cada real que você tira do CLT e põe em PJ ou IA deixa a operação mais
> barata e o imposto mais caro. Às vezes a economia compensa. Às vezes não.
> E dá para calcular exatamente qual das duas.**

## 4.3 Aplicando às suas quatro funções

| Função | Escolha | Por quê |
|---|---|---|
| **Psicólogo local** | **CLT** | três motivos que se somam: é sua convicção, é o que segura a pessoa (degrau 9), e é o que sustenta seu imposto barato |
| **Supervisor** | **decisão em aberto**, ver 4.4 | é genuinamente autônomo, então PJ é seguro juridicamente |
| **Orquestrador (parte repetitiva)** | **IA** | é escala, rotação, lembrete, relatório: trabalho que não precisa de julgamento |
| **Orquestrador (parte humana)** | **CLT, diluído** | fala com a prefeitura, cuida da IA, resolve o que fugiu do script |

## 4.4 Supervisor: PJ ou CLT, com números

O supervisor faz 105 horas por mês, atendendo 7 municípios.

| | PJ | CLT |
|---|---|---|
| Como se paga | R$ 200 por hora de supervisão | salário de R$ 9.000 |
| Custo mensal total | 105h × R$ 200 = **R$ 21.000** | 9.000 × 1,34 = **R$ 12.060** |
| Custo por município (÷7) | **R$ 3.000** | **R$ 1.723** |
| Conta no imposto? | **não** | **sim** |

**A CLT é mais barata e ainda ajuda no imposto. Ganha duas vezes.**

O que pode fazer você escolher PJ mesmo assim: supervisor sênior bom costuma
querer autonomia e não aceita vínculo; e com 1 ou 2 municípios você não tem
105 horas para preencher, então paga um salário cheio por meio serviço.

**Recomendação:** PJ por hora enquanto houver 1 ou 2 municípios, e migrar para
CLT a partir do terceiro, quando a carga encher a jornada. Nesta conta vou usar
**CLT a R$ 1.723 por município**, porque é para onde o modelo vai.

## 4.5 O orquestrador em IA, com números

Comparando o que você tinha antes (uma pessoa dedicada por município) com o que
você decidiu agora:

| | Pessoa dedicada | **IA + CS diluído** |
|---|---|---|
| IA (uso, API, infraestrutura) | R$ 0 | R$ 400 |
| Pessoa | R$ 4.500 de salário × 1,41 = R$ 6.350 | R$ 6.350 ÷ 5 municípios = R$ 1.270 |
| **Total por município** | **R$ 6.350** | **R$ 1.670** |

```
Economia: R$ 4.680 por município, por mês
Com 5 municípios: R$ 23.400 por mês  ·  R$ 280.800 por ano
```

**Essa é a decisão mais lucrativa que você tomou nesta conversa**, e é ela que
dá conteúdo real à frase "Operação AI First" que já está no slide 15. Hoje
aquela frase é uma afirmação. Agora ela tem um número atrás.

E o mais importante para o pitch: **a IA substitui a função que não precisa de
presença, e não encosta na função que precisa.** O psicólogo continua sendo
gente, na cidade, olhando no olho. Isso é exatamente o oposto do que as
startups de bem-estar fazem, que é botar app no lugar da relação.

---

# DEGRAU 5 · A conta de um município

Agora é só somar o que os degraus anteriores construíram.

| Linha | Conta | Valor |
|---|---|---|
| **Receita** | 70 grupos × R$ 1.100 | **77.000** |
| 2 psicólogos CLT | R$ 6.000 × 1,39 × 2 | (16.740) |
| Supervisor CLT | R$ 12.060 ÷ 7 municípios | (1.723) |
| IA orquestradora | | (400) |
| Customer success | R$ 6.350 ÷ 5 municípios | (1.270) |
| Deslocamento e material | | (1.200) |
| **Custo direto** | | **(21.333)** |
| Imposto | 12,97% de 77.000 (degrau 6 explica) | (9.987) |
| **SOBRA** | | **R$ 45.680** |
| **% da receita** | | **59,3%** |

## 5.1 A mesma conta por grupo, que é a versão limpa

| | Por grupo |
|---|---|
| Preço | R$ 1.100 |
| Custo direto (21.333 ÷ 70) | (305) |
| Imposto | (143) |
| **Custo total** | **(448)** |
| **Sobra** | **R$ 652 · 59,3%** |

> **Cada grupo custa R$ 448 e vende por R$ 1.100.**

Para calibrar: consultoria boa no mercado sobra entre 40% e 50%. Você está em
59%. **O modelo é melhor do que você precisa que ele seja.**

## 5.2 Os 14 grupos de folga valem dinheiro

A folga de 17% existe para proteger a operação, e deve continuar existindo. Mas
ela também é uma venda pronta com custo quase zero: **as equipes em crise
recebem 2 grupos por mês em vez de 1.**

```
7 grupos extras (metade da folga) × R$ 1.100 = R$ 7.700 de receita
menos imposto e deslocamento marginal        = R$  6.600 de sobra quase pura
Sobra do município: de R$ 45.680 para R$ 52.280 (61,6%)
```

Clinicamente é defensável (equipe em crise precisa de mais frequência) e
comercialmente é o aumento mais barato que existe: você já pagou o psicólogo.

---

# DEGRAU 6 · O imposto, e o famoso Fator R

Este é o degrau que ninguém explica direito, então vou devagar.

## 6.1 O que é o Simples Nacional

Empresa pequena no Brasil pode pagar todos os impostos de uma vez só, num boleto
chamado DAS. Uma porcentagem do que entrou, e pronto.

Duas coisas decidem essa porcentagem:

1. **Quanto você faturou nos últimos 12 meses.** Quanto mais, maior a porcentagem. Chama-se *faixa*.
2. **Qual "anexo" a sua empresa cai.** Serviço como o seu cai no Anexo III ou no Anexo V. **O III é bem mais barato.**

## 6.2 O Fator R é só uma divisão

O que decide entre Anexo III e Anexo V é uma conta de uma linha:

```
              quanto você pagou de gente nos últimos 12 meses
Fator R  =  ─────────────────────────────────────────────────
              quanto você faturou nos últimos 12 meses

Deu 28% ou mais?  →  Anexo III  →  imposto BARATO
Deu menos que 28%? →  Anexo V   →  imposto CARO
```

**A lógica por trás:** o governo quer que empresa de serviço gere emprego
formal. Se boa parte do seu faturamento vira salário, você ganha desconto. Se
você fatura muito e emprega pouco, paga mais.

E "pagou de gente" quer dizer, especificamente: **salários, FGTS e pró-labore.**
Nota de PJ não entra. Assinatura de IA não entra. É por isso que a escolha do
degrau 4 mexe no seu imposto.

## 6.3 Por que a sua contadora achou 7,49%

Ela fez a conta certa:

```
Você pagou de gente: R$ 18.937   (pró-labore de 1 salário mínimo × 12 meses)
Você faturou:        R$ 252.834,60

18.937 ÷ 252.834,60 = 7,49%
7,49% é muito menos que 28%  →  Anexo V  →  16,22% de imposto
```

Você confirmou: o pró-labore registrado é mesmo 1 salário mínimo. Então a conta
dela descreve a empresa como ela é hoje, e o 16,22% é real.

O que ela não podia calcular é o que acontece quando você mudar duas coisas que
já decidiu mudar: **o seu próprio pró-labore** (6.3.2) e **a folha do primeiro
contrato** (6.4).

## 6.3.1 Pró-labore não é a mesma coisa que o dinheiro que você recebe

> **Existem dois canos por onde sai dinheiro da empresa para a sócia, e só um
> deles conta no Fator R.**

| | Pró-labore | Distribuição de lucros |
|---|---|---|
| O que é | o "salário" da sócia pelo trabalho que ela faz | a sua parte do lucro da empresa |
| Você paga imposto pessoal? | **sim**: INSS de 11% e Imposto de Renda | **não**: no Simples é isento |
| Conta no Fator R? | **SIM** | **NÃO** |

Quase toda contabilidade do Brasil faz a mesma coisa por padrão: deixa o
pró-labore em 1 salário mínimo e manda o resto como lucro, **porque assim a
sócia paga menos imposto pessoal.** É o conselho certo para uma empresa comum.

**É o conselho errado para uma empresa de serviço que quer o Anexo III**, porque
o cano isento é justamente o que não conta no Fator R.

Então, quando você diz "meu pró-labore é mais que um salário mínimo", pode ser
que você esteja se referindo ao **dinheiro que chega em você**, e a contadora
esteja se referindo à **linha chamada pró-labore na folha**. Se for isso, vocês
duas estão certas e estão falando de coisas diferentes.

**Pergunta exata para levar à ADR Contábil, escrita para não dar margem:**

> "Do total que sai da empresa para mim por mês, quanto é registrado como
> pró-labore com recolhimento de INSS, e quanto é distribuição de lucros?
> E qual é o meu Fator R real hoje, com os valores efetivamente lançados nos
> últimos 12 meses, não em cenário hipotético?"

## 6.3.2 Você quer R$ 5.000 na mão, e isso cai bem em cima de uma fronteira

Com o faturamento atual de R$ 252.834,60, a folha que fecha os 28% é:

```
R$ 252.834,60 × 28% = R$ 70.793,69 por ano  =  R$ 5.899 por mês
```

Ou seja: **a fronteira entre o imposto caro e o imposto barato passa em
R$ 5.899 de pró-labore por mês.** O número que você falou está a menos de
R$ 900 dela.

| Pró-labore por mês | Fator R | Anexo | Imposto da empresa |
|---|---|---|---|
| R$ 1.621 (1 salário mínimo, hoje) | 7,5% | V | 16,22% |
| R$ 3.000 | 14,2% | V | 16,22% |
| **R$ 5.000** | **23,7%** | **V** ✗ | **16,22%** |
| **R$ 5.899** | **28,0%** | **III** ✓ | **7,50%** |
| R$ 6.350 | 30,1% | III | 7,50% |
| R$ 8.000 | 38,0% | III | 7,50% |

**R$ 5.000 de pró-labore para você ficaria a R$ 899 de distância do Anexo III.**
É a pior posição possível: você já paga o imposto pessoal de um pró-labore
razoável, e a empresa continua no anexo caro.

## 6.3.3 Se você quer R$ 5.000 líquido, o número resolve sozinho

Depende do que "R$ 5.000 bruto na mão" quer dizer:

- **Se são R$ 5.000 registrados como pró-labore:** Fator R de 23,7%, Anexo V. Falta pouco e não adianta nada.
- **Se são R$ 5.000 chegando na sua conta, já descontado:** o pró-labore bruto precisa ser em torno de **R$ 6.350** (o INSS de 11% e o Imposto de Renda comem a diferença). E R$ 6.350 dão Fator R de **30,1%: Anexo III.** ✓

> **Se o que você quer é R$ 5.000 líquido, o seu instinto já te leva para o
> lado certo da fronteira. Só é preciso garantir que os R$ 6.350 estejam
> registrados como pró-labore, e não divididos entre pró-labore e lucro.**

Números de INSS e Imposto de Renda aqui são aproximados. Quem fecha é a
contadora, com a sua tabela de IR e a sua situação pessoal.

## 6.3.4 Quanto isso vale, em dinheiro

Na 2ª faixa a diferença entre os anexos é brutal em termos relativos:

```
Anexo V,   2ª faixa:  16,22%
Anexo III, 2ª faixa:   7,50%
Diferença: 8,72 pontos × R$ 252.834,60 = R$ 22.047 por ano
```

Comparando as duas maneiras de te pagar aproximadamente o mesmo dinheiro:

| | Pró-labore mínimo + lucro | Pró-labore de R$ 6.350 |
|---|---|---|
| Seu imposto pessoal | ~R$ 180/mês | ~R$ 1.330/mês |
| Imposto da empresa | R$ 3.418/mês (16,22%) | **R$ 1.580/mês (7,50%)** |
| **Total que sai** | **R$ 3.598/mês** | **R$ 2.910/mês** |

**Economia de ~R$ 688 por mês, ou R$ 8.256 por ano.** E, de quebra, você passa
a contribuir para o INSS sobre um valor de gente adulta, o que conta para
aposentadoria e para comprovação de renda em financiamento.

## 6.3.5 O detalhe que muda a urgência: o Fator R olha 12 meses para trás

Se você subir o pró-labore para R$ 5.899 hoje, **você não vira para o Anexo III
amanhã.** O cálculo é sobre os últimos 12 meses, e os meses velhos de salário
mínimo continuam puxando a média para baixo.

Mantendo o faturamento como está:

| Pró-labore novo | Quando cruza os 28% |
|---|---|
| R$ 5.899 | mês 12 |
| R$ 7.340 | mês 9 |
| R$ 10.221 | mês 6 |

> **É por isso que essa decisão é urgente e não pode esperar o pitch: cada mês
> que passa com o pró-labore no mínimo é um mês que vai continuar pesando na
> média quando o primeiro contrato entrar.**

E uma pergunta que ainda não fiz: **a Fabiane recebe pró-labore?** Ela também é
administradora no contrato social. Se ela receber, o pró-labore dela soma no
mesmo numerador, e a fronteira dos R$ 5.899 pode já estar coberta pelas duas
juntas. Vale conferir com a ADR Contábil.

## 6.4 O que acontece no dia em que entra o primeiro município

O Fator R é uma divisão, então o primeiro contrato mexe **em cima e embaixo ao
mesmo tempo**.

Embaixo (faturamento): **+R$ 77.000 por mês.**

Em cima (gente): entram na folha 2 psicólogos, o supervisor, o customer success,
e o seu pró-labore sobe para R$ 10.000.

```
Fator R depois de 1 município rodando 12 meses:

  gente:      R$   487.106
  faturado:   R$ 1.176.835      (252.835 antigos + 924.000 novos)

  487.106 ÷ 1.176.835 = 41,4%    →   ANEXO III    ✓
```

**De 7,49% para 41,4%.** Você sai do Anexo V e entra no Anexo III sozinha,
sem fazer nada além de operar o contrato.

## 6.5 Mas leva 4 meses, porque a conta é dos últimos 12 meses

O Fator R sempre olha para trás, para os 12 meses anteriores. Então no começo
ele ainda está carregando os meses antigos, em que não havia folha nenhuma:

| Mês | Fator R | Anexo |
|---|---|---|
| 1 | 16,6% | V |
| 2 | 22,5% | V |
| 3 | 26,2% | V |
| **4** | **29,0%** | **III** ✓ |

**Três meses no caro, e a partir do quarto no barato.** Custa cerca de
**R$ 23.300 a mais de imposto, uma vez só**. É previsível e cabe no orçamento.

## 6.6 A alavanca mais barata que existe

Se quiser encurtar esses 3 meses: **subir o pró-labore antes do contrato começar.**

Pró-labore conta 100% no Fator R. E aqui volta aquela informação do degrau 3.1:
no Simples, o INSS patronal de 20% já está dentro do DAS. Então quando você
aumenta o seu pró-labore, **a empresa não paga nada a mais.** Quem paga os 11%
de INSS e o imposto de renda é você, pessoa física.

```
Cada R$ 1.000 a mais de pró-labore por mês = R$ 12.000 a mais no Fator R por ano
Custo para a empresa: praticamente zero
```

É a ferramenta mais barata que existe para mexer no Fator R, e hoje você está
usando o mínimo possível dela. Pergunta para a contadora, não decisão sua sozinha.

---

# DEGRAU 7 · O que acontece quando cresce (e é aqui que mora a armadilha)

Lembra do degrau 0, dos três tipos de negócio? Aqui é onde se descobre em qual
a PAAPS está.

## 7.1 O problema que ninguém vê chegando

Cada município novo traz muito faturamento e pouca folha:

```
Faturamento que um município novo traz:  R$ 924.000 por ano
Folha que um município novo traz:        R$ 172.756 por ano  (só os 2 psicólogos)

172.756 ÷ 924.000 = 18,7%
```

**18,7% é menos que 28%.** Então **cada município novo puxa o seu Fator R para
baixo.** Crescer te empurra na direção do imposto caro.

## 7.2 O que a conta mostra

| Municípios | Faturado | Gente | Fator R | Anexo |
|---|---|---|---|---|
| 1 | R$ 1,18 mi | R$ 487 mil | 41,4% | III ✓ |
| 2 | R$ 2,10 mi | R$ 660 mil | 31,4% | III ✓ |
| **3** | **R$ 3,02 mi** | **R$ 833 mil** | **27,5%** | **V** ✗ |
| 4 | R$ 3,95 mi | R$ 1,01 mi | 25,5% | V ✗ |
| 5 | R$ 4,87 mi | | | **estoura o teto de R$ 4,8 mi** |

**No terceiro município você cai no Anexo V por 0,5 ponto percentual.**

## 7.3 E aqui está a coisa mais bonita deste documento

Faltam 0,5 ponto. Quanto de folha a mais fecha esses 0,5 ponto?

```
Folha necessária para 28% de R$ 3.024.835:  R$ 846.954
Folha que você teria:                       R$ 832.618
FALTA:                                      R$  14.336 por ano  =  R$ 1.195 por mês
```

E quanto vale ficar no Anexo III em vez do V, com R$ 3 milhões de faturamento?

```
Anexo III, 5ª faixa:  16,85%
Anexo V,   5ª faixa:  20,95%
Diferença: 4,10 pontos × R$ 3.024.835 = R$ 124.018 por ano = R$ 10.335 por mês
```

Lado a lado:

| | Por mês |
|---|---|
| Você gasta a mais com gente | **R$ 1.195** |
| Você economiza de imposto | **R$ 10.335** |
| **Sobra líquida** | **R$ 9.140** |

> **Gastar R$ 1.195 a mais por mês com gente te devolve R$ 10.335. Retorno de
> 8,6 vezes.**

Isso não é truque contábil. É a lei funcionando exatamente como foi desenhada:
o governo dá desconto para empresa de serviço que emprega. E significa uma coisa
que combina perfeitamente com a PAAPS:

> **Pagar melhor o psicólogo local é, literalmente, mais barato do que pagar
> pior. O imposto banca a diferença.**

R$ 1.195 por mês divididos entre 6 psicólogos são R$ 200 a mais no salário de
cada um. Isso muda a vida da pessoa no interior de Minas, e sai de graça.

Esse é o tipo de coisa que faz um investidor sentar reto na cadeira, porque
mostra que você entendeu o sistema em que está operando.

## 7.4 A trava de verdade: o teto do Simples

No quinto município você fatura R$ 4,87 milhões e **estoura o teto de R$ 4,8
milhões do Simples Nacional.** Aí a empresa vai para o Lucro Presumido, e duas
coisas ruins acontecem juntas:

1. o imposto sobe para 16% a 19%;
2. **volta a existir o INSS patronal de 20% sobre a folha, pago por fora.**

O item 2 é o que dói, porque o seu modelo é cheio de CLT por convicção. Lembra
do degrau 3.1: seu multiplicador vai de 1,39 para 1,7. **É exatamente o modelo
mais bonito da PAAPS que a saída do Simples mais castiga.**

A saída provável é uma **segunda pessoa jurídica**, dividindo a operação em duas
empresas que cabem cada uma no Simples. Isso não vai para o pitch: é a pergunta
que você leva para a primeira reunião de mentoria da aceleração, e é a pergunta
que prova que você não está improvisando.

---

# DEGRAU 8 · As quatro camadas (o erro de arrumação que você tinha)

Você me deu "R$ 20 mil de estrutura: R$ 10 mil meus, R$ 5 mil de equipe,
R$ 5 mil de PJ e freelancer".

**Os R$ 10 mil não são estrutura. São resultado.**

Estrutura é o que você **tem que pagar** para a empresa existir. Pró-labore e
lucro são o que **sobra** depois de tudo. Somar os dois na mesma linha esconde
exatamente o número que o investidor quer ver: quanto o negócio gera **antes**
de remunerar a dona.

As quatro camadas, em ordem:

| | Camada | Comporta-se como | Valor |
|---|---|---|---|
| **1** | Custo direto do projeto | some se o contrato acabar | R$ 21.333 por município |
| **2** | Imposto | acompanha a receita | 12,97% |
| **3** | Estrutura da empresa | existe com 1 ou com 10 municípios | R$ 14.500 |
| **4** | **Resultado** | **é o que sobra** | R$ 10.000 |

Camada 3, com o número que você confirmou hoje:

| Item | Valor |
|---|---|
| Equipe central | R$ 5.000 |
| Caixa para PJ e freelancers | R$ 5.000 |
| Contabilidade (ADR Contábil), jurídico e ferramentas | R$ 4.500 |
| **Estrutura da empresa** | **R$ 14.500** |

Um cuidado: **o customer success não pode aparecer duas vezes.** Eu o coloquei
na camada 1, rateado por município, porque ele cresce com a operação. Se ele
também estiver dentro dos "R$ 5.000 de equipe central", estamos pagando duas
vezes no papel. Confirme isso quando puder.

---

# DEGRAU 9 · O ponto de equilíbrio, que é a frase do pitch

Agora é aritmética simples.

```
Estrutura da empresa por mês:              R$ 14.500
Sobra de UM município por mês:             R$ 45.680

14.500 ÷ 45.680 = 0,32
```

> **Um terço de um contrato paga a empresa inteira.**

E com um município fechado:

```
Sobra do município                   R$ 45.680
menos estrutura da empresa          (R$ 14.500)
= resultado antes do pró-labore      R$ 31.180
menos pró-labore e lucro            (R$ 10.000)
= sobra para reinvestir              R$ 21.180 por mês
                                     R$ 254.160 por ano
```

> **Um único município paga toda a estrutura da empresa, paga o pró-labore de
> R$ 10 mil, e ainda deixa R$ 21 mil por mês para reinvestir.**

Com a ressalva que não muda: **isso é projeção, e o slide precisa dizer que é**,
porque ainda não existe contrato assinado.

---

# DEGRAU 10 · O que o investidor olha, e por quê

Um investidor não olha "quanto você fatura". Ele olha cinco coisas, nesta ordem:

## 10.1 Sobra por unidade

*"Quando você vende uma vez, sobra?"*

**Sua resposta: R$ 652 de sobra num grupo de R$ 1.100. 59%.**

Por que ele pergunta isso primeiro: se não sobra na unidade, crescer só faz
perder dinheiro mais rápido. Já existiu muita startup que faturava bilhões e
perdia dinheiro em cada venda. É por isso que o pitch do Goodie Bag, que você
guardou de referência, gasta os primeiros 30 segundos dizendo "não somos uma
empresa de entrega, não temos aquela margem negativa que vocês adoram".

## 10.2 O que não cresce junto

*"O que você paga uma vez e serve para todo mundo?"*

**Sua resposta:** a estrutura de R$ 14.500 é a mesma com 1 ou com 10 municípios.
E, agora, a IA orquestradora: escrita uma vez, serve todos.

Isso se chama alavancagem. É a diferença entre negócio e emprego.

## 10.3 Quanto custa conseguir um cliente

**Sua resposta hoje: não dá para calcular, porque não houve conversão nenhuma.**

E está tudo bem dizer isso, desde que você diga a coisa certa em seguida:

> "Ainda não temos custo de aquisição, porque ainda não convertemos por canal
> frio. O que temos são quatro territórios conquistados por convite e relação
> local, que é o canal que funciona em B2G e não escala sozinho. Construir o
> canal que escala é o item número um da aceleração."

Isso é melhor do que um número inventado e melhor do que silêncio, porque mostra
que você sabe qual é o próximo problema.

## 10.4 O que impede alguém de copiar

Aqui está o seu ativo mais forte, e você quase não o usa.

Toda empresa que cresce colocando gente em campo trava no mesmo lugar: **achar
gente boa.** É por isso que consultoria não escala. Vender é o fácil; encontrar
quem entregue é o difícil.

**A PAAPS não tem esse gargalo**, e é a única coisa dela que nenhum concorrente
consegue comprar com dinheiro: a comunidade de mais de 120 profissionais é uma
fila de gente já formada na metodologia, esperando entrar.

E o que a PAAPS oferece ao psicólogo do interior não existe no mercado dele:

| No mercado dele | Na PAAPS |
|---|---|
| RPA ou contrato temporário | **CLT** |
| nenhuma supervisão | **supervisão a cada dois dias** |
| nenhuma formação continuada | **formação em metodologia própria** |
| currículo de município pequeno | **marca que abre carreira** |

> "Nosso custo de aquisição de talento é próximo de zero e nossa rotatividade
> tende a ser baixa, porque o que oferecemos ao psicólogo do interior não
> existe no mercado dele. É isso que nos permite abrir um município novo em
> 30 dias."

**Essa é a sua resposta ao "conseguimos entrar num mercado novo e empatar em
seis meses" do Goodie Bag.** É o argumento de que isso se repete, e hoje ele
não está em lugar nenhum do deck.

E tem o outro lado da mesma moeda, que é impacto puro: quando a PAAPS sai, fica
um psicólogo formado na metodologia **morando ali**.

> "Quando a gente sai, o método fica, porque ele mora ali."

É o oposto exato do consultor que vai embora e leva o conhecimento junto. E é a
resposta viva à objeção que você mesma já registrou como a mais importante do
gestor de cidade pequena: *a capacitação foi boa no dia, e na segunda-feira
tudo voltou ao que era*.

## 10.5 Quantos cabem

*"Se der certo, quão grande fica?"*

| | Conta | Valor |
|---|---|---|
| **TAM** (tudo) | 7 milhões de servidores municipais × R$ 100/mês × 12 | R$ 8,4 bilhões/ano |
| **SAM** (o que dá para atender) | ~2.400 municípios de porte compatível × R$ 360 mil/ano | R$ 864 milhões/ano |
| **SOM** (a meta de 5 anos) | 100 municípios | R$ 36 milhões/ano |

100 municípios são 1,8% dos 5.570. Ambição defensável, não gulosa.

---

# DEGRAU 11 · Todas as decisões, e o que cada uma custou

| Decisão | O que custou | O que comprou |
|---|---|---|
| 70 equipes em vez de 80 | **−R$ 11.000/mês** de receita | folga operacional de 17% em vez de 5%, e um número que sobrevive a quem refaz a conta |
| Contratar o psicólogo em CLT | **+R$ 2.370/mês** por pessoa vs o salário puro | o Fator R (imposto barato), a retenção, e o argumento de moat de talento |
| Supervisor para 14 psicólogos | | rateio em 7 municípios: R$ 1.723 por município em vez de R$ 12.060 |
| Supervisor em CLT em vez de PJ | | **−R$ 1.277/mês** por município **e** sustenta o Fator R. Ganha duas vezes |
| **Orquestrador em IA + CS diluído** | R$ 400/mês de IA | **+R$ 4.680/mês** por município. A decisão mais lucrativa da conversa |
| Pró-labore de R$ 10 mil | | sai como resultado, não como custo, **e** sustenta o Fator R quase de graça |
| Psicoterapia online por parceria | receita de indicação em vez de operação própria | sai do único mercado onde já há 5 concorrentes com capital |

## 11.1 A evolução da conta, em três versões

| | Você trouxe | Versão 2 | **Versão 3 (com IA)** |
|---|---|---|---|
| Equipes | 80 | 70 | 70 |
| Receita | 88.000 | 77.000 | 77.000 |
| Custo direto | 14.000 | 27.315 | **21.333** |
| Imposto | **não descontado** | 9.987 | 9.987 |
| **Sobra** | **74.000** | 39.698 | **45.680** |
| **%** | 84% | 51,6% | **59,3%** |

Os R$ 74 mil eram R$ 40 mil. Suas decisões de hoje trouxeram de volta R$ 6 mil.

---

# DEGRAU 12 · Se você tivesse que explicar em 40 segundos

> "Vendemos grupo. Um grupo é um encontro com uma equipe da prefeitura, uma vez
> por mês. Custa R$ 448 e vende por R$ 1.100.
>
> Uma prefeitura de 500 servidores tem 70 equipes, então são 70 grupos por mês,
> R$ 77 mil, com dois psicólogos que moram na cidade e são contratados em CLT.
> A escala e o relatório são feitos por IA, e um supervisor clínico cuida de
> quatorze psicólogos ao mesmo tempo.
>
> Sobram R$ 45 mil por mês em cada município. Nossa estrutura inteira custa
> R$ 14,5 mil. **Um terço de um contrato paga a empresa toda.**
>
> Não temos contrato assinado ainda: temos método provado em quatro territórios,
> com mais de mil pessoas. Prova de método nós já temos. Prova de mercado é o
> que viemos comprar aqui."

---

# O que ainda falta confirmar

1. **O customer success está dentro dos R$ 5.000 de equipe central?** Se estiver, ele está contado duas vezes.
2. **Valor da hora do supervisor.** Usei R$ 200/hora para PJ e R$ 9.000 de salário para CLT.
3. **Custo real da IA orquestradora por município.** Estimei R$ 400. Quando o agente existir, mede-se.
4. **O número exato da Apeoesp** no slide 04. "Quase 10 em cada 10" é lido como arredondamento para cima, e arredondamento para cima contamina todos os outros números do deck.

## Nota de léxico

"Colaborador" não entra. É vocabulário de RH corporativo, e joga a peça para a
categoria de bem-estar de mercado, que é o lugar de onde este pitch inteiro
está tentando sair. Aqui: **servidores públicos, funcionários públicos,
trabalhadores, profissionais do cuidado.**
