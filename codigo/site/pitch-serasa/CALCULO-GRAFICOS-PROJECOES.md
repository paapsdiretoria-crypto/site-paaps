# Memória de cálculo dos cinco gráficos do slide Projeções

Deck v5, slide 11. Escrito em 25/08/2026.
Cada número que aparece no slide sai de uma conta que está aqui, aberta.
A aritmética também está no próprio componente, em
`deck-v5/src/components/pitch/section-projecoes.tsx`, para que ninguém precise
confiar em número digitado à mão.

---

## A base comum aos cinco gráficos

Tudo parte de uma única linha do modelo: **quantos municípios estão ativos em
cada ano**, e em qual dos dois regimes. Essa linha é o Degrau 16 de
`MODELO-PAAPS-COMPLETO.md` e não foi alterada aqui.

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Execução própria (equipe da PAAPS) | 1 | 3 | 5 | 6 | 8 |
| Licenças Base ativas | 0 | 1 | 6 | 18 | 42 |
| Licenças Plena ativas | 0 | 0 | 2 | 7 | 18 |
| **Municípios ativos** | **1** | **4** | **13** | **31** | **68** |

**A leitura das duas cores da barra.** Em todos os gráficos, a parte **acesa**
é o que a PAAPS conduz com a própria equipe e a parte **apagada** é o que roda
nas redes que licenciaram o método. A parte acesa quase não se mexe; a apagada
explode. Essa distância é a história do licenciamento, e é por isso que os
cinco gráficos usam a mesma forma.

**Piso de desenho.** O ano 1 vale cerca de 1,5% do ano 5 em quase todas as
linhas. Sem um piso, a barra do ano 1 sumiria e o gráfico passaria a mentir por
omissão. O piso é 2,5% da altura, aplicado no código
(`const PISO = 2.5`), e não altera nenhum número declarado.

---

## 1. Rodas de Equipe realizadas

**Premissa:** 70 Rodas de Equipe por município ao mês, que são **840 por ano**.
É a mesma premissa que sustenta a receita de execução própria (R$ 924 mil por
município ao ano, a R$ 1.100 por Roda), então não há número novo aqui: é a
mesma operação contada em Rodas em vez de em reais.

**Premissa que é nossa e ninguém verificou:** a rede que licencia o método
**mantém as mesmas 840 Rodas por ano**. Faz sentido, porque a licença existe
exatamente para isso, mas é premissa, não medição.

`Rodas do ano = municípios ativos × 840`

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Conduzidas pela PAAPS | 840 | 2.520 | 4.200 | 5.040 | **6.720** |
| Nas redes licenciadas | 0 | 840 | 6.720 | 21.000 | **50.400** |
| **Total** | **840** | **3.360** | **10.920** | **26.040** | **57.120** |

---

## 2. Servidores Públicos alcançados

**Premissa:** 500 Servidores Públicos por prefeitura. **Esse 500 é a prefeitura
de referência do modelo, não uma média medida.** Está escrito assim na linha de
fonte do slide, e precisa continuar escrito assim.

`Servidores do ano = municípios ativos × 500`

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Alcançados pela PAAPS | 500 | 1.500 | 2.500 | 3.000 | **4.000** |
| Nas redes licenciadas | 0 | 500 | 4.000 | 12.500 | **30.000** |
| **Total** | **500** | **2.000** | **6.500** | **15.500** | **34.000** |

De 500 para 34.000 são **68 vezes** em cinco anos.

---

## 3. Equipe PAAPS

Não tem conta: é a linha "Pessoas na PAAPS" do Degrau 16, copiada.

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Pessoas na PAAPS | 4 | 9 | 15 | 19 | **28** |

A barra acende inteira porque **toda essa gente é da PAAPS**: não existe parte
licenciada da equipe. É esse contraste que faz o slide funcionar. A equipe
multiplica por 7 enquanto os Servidores Públicos alcançados multiplicam por 68,
e a distância entre os dois números é o que o licenciamento compra.

Consequência que o investidor vai procurar: a receita por pessoa sobe de
R$ 231 mil no ano 1 para **R$ 483 mil no ano 5**. Consultoria faz R$ 150 a
250 mil por pessoa; empresa de tecnologia faz R$ 400 mil para cima.

---

## 4. Receita

Copiada do Degrau 16, em milhões de reais. Quatro linhas de receita:

- execução própria: **R$ 924 mil por município ao ano**
- licença Base: **R$ 64,8 mil ao ano**
- licença Plena: **R$ 130,8 mil ao ano**
- implantação: **R$ 30 mil por licença nova**, uma vez só

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Execução própria (parte acesa) | 0,92 | 2,77 | 4,62 | 5,54 | **7,39** |
| Licenças + implantação (apagada) | 0 | 0,10 | 0,86 | 2,60 | **6,13** |
| **Receita total** | **0,92** | **2,87** | **5,48** | **8,14** | **13,52** |

No ano 5, **38% da receita é recorrente**: já está contratada antes de o ano
começar. Sem licenciamento essa linha fica em zero e a empresa precisa vender
tudo de novo todo ano.

---

## 5. Afastamento evitado, em custo de folha

É o único gráfico com número novo, e é o que mais precisa de cuidado, porque é
o único que faz uma afirmação sobre **efeito**, e não sobre operação.

### 5.1 Os quatro dados verificados que entram

| Dado | Valor | Fonte |
|---|---|---|
| Mediana de remuneração do servidor municipal | R$ 2.640 | Ipea, Atlas do Estado Brasileiro |
| Encargos patronais de RPPS | ~22% | regra previdenciária |
| Duração média do afastamento por transtorno mental | 3 meses | INSS |
| Afastamentos por transtorno mental concedidos em 2025 | 546 mil | Ministério da Previdência Social |

### 5.2 Quanto custa um afastamento

```
Salário mediano + encargos RPPS     R$ 2.640 × 1,22  =  R$  3.220 / mês
Três meses de folha sem trabalho    R$ 3.220 × 3     =  R$  9.660
Cobrir a função (temporário ou hora extra), a metade  =  R$  4.830
                                                        ───────────
Custo de um afastamento                                 R$ 14.490
```

A cobertura da função a 50% do salário é escolha conservadora: a prefeitura
que contrata temporário paga mais do que isso, e a que não contrata paga em
serviço que deixa de acontecer, que é pior e não aparece na folha.

### 5.3 Quanto uma prefeitura tem exposto por ano

**Premissa:** 2% dos Servidores Públicos afastados por transtorno mental ao
ano. Ela precisa ser declarada como premissa, e aqui está o porquê:

- 546 mil afastamentos sobre cerca de 39 milhões de vínculos celetistas dá
  **1,4%**, que é o piso nacional. Esse dado é do INSS, ou seja, da base
  celetista: **servidor municipal estatutário não entra no INSS**, entra no
  RPPS do município.
- **Não existe série pública consolidada de afastamento por transtorno mental
  no RPPS municipal brasileiro.** A pesquisa mais próxima que achamos é a de
  Eliana Bellini Pinto (UFRGS), sobre Porto Alegre entre 2008 e 2015, e ela
  responde outra pergunta: 17,8% das licenças de saúde do município foram por
  transtorno mental, o que é participação nas licenças, não incidência sobre a
  folha.
- Usamos 2% porque a rede de cuidado (saúde, educação, assistência) adoece
  acima do piso nacional, e é essa rede que a PAAPS atende. A faixa que
  trabalhamos é de 2% a 3%; adotamos a ponta de baixo.

```
500 servidores × 2%           =  10 afastamentos por ano
10 × R$ 14.490                =  R$ 144.900 por prefeitura, por ano
```

**Teste contra o campo:** Bela Vista de Minas, mais de 180 Servidores Públicos.
180 × 2% = 3,6 afastamentos/ano × R$ 14.490 = **R$ 52.164**, dentro da faixa de
R$ 39 a 79 mil que o deck já usava desde a versão 4. A estimativa passa numa
metodologia independente.

### 5.4 A premissa de redução: 20%, e por que ela é premissa

Sobre o custo exposto aplicamos **20% de redução**. Esse número **é premissa
nossa e não é resultado medido**, e a linha de fonte do slide diz isso com
essas palavras.

O que a literatura sustenta e o que ela não sustenta:

- **A direção, sim.** A revisão de escopo de Bosma e colegas (BMC Public
  Health, 2025) leu 28 revisões sobre prevenção de afastamento e concluiu que
  faltam intervenções comprovadas; as **promissoras** são exatamente as
  multicomponentes, que juntam a pessoa e o ambiente de trabalho. É o desenho
  da PAAPS: a unidade é a equipe e a intervenção é na organização do trabalho,
  com o Plantão Psicológico como camada individual.
- **A magnitude, não.** Nenhuma revisão sistemática certifica uma taxa de
  redução. O ensaio randomizado com o número mais limpo de dia de afastamento
  (Keus van de Poll e colegas, Occup Environ Med, 2020, Suécia, n=100)
  encontrou cerca de **15 dias a menos de afastamento em 12 meses**, sobre
  episódios que duram na casa dos 90 dias. Está na mesma ordem de grandeza dos
  20%, e é por isso que 20% não é chute; mas o estudo é pequeno, é sueco e é
  de serviço de saúde ocupacional, não de prefeitura brasileira.

**O que a PAAPS não pode afirmar:** que reduz afastamento em X%. Quem afirma
isso está vendendo o que a literatura ainda não entregou. O que a PAAPS afirma
é o desenho, e mede o efeito município a município, que é justamente o dado que
a rede ainda não tem.

### 5.5 O resultado

```
Evitado por município, por ano  =  R$ 144.900 × 20%  =  R$ 28.980
```

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Municípios ativos | 1 | 4 | 13 | 31 | 68 |
| Custo exposto na folha | 144,9 mil | 579,6 mil | 1,88 mi | 4,49 mi | **9,85 mi** |
| Evitado, onde a PAAPS opera (aceso) | 28,9 mil | 86,9 mil | 144,9 mil | 173,9 mil | **231,8 mil** |
| Evitado nas redes licenciadas (apagado) | 0 | 28,9 mil | 231,8 mil | 724,5 mil | **1,74 mi** |
| **Evitado no ano** | **28,9 mil** | **115,9 mil** | **376,7 mil** | **898,4 mil** | **1,97 mi** |

**Acumulado dos cinco anos: R$ 3.390.660 evitados**, sobre R$ 16.953.300 de
custo exposto na folha das prefeituras atendidas.

### 5.6 A verdade incômoda, dita antes que perguntem

No ano 5 a receita é de R$ 13,52 milhões e o afastamento evitado é de R$ 1,97
milhão. **O contrato custa cerca de sete vezes o afastamento que evita.**

Isso não é problema do modelo: é problema de qual argumento se usa. A conta do
afastamento é o que faz o secretário levar a proposta ao prefeito. O que fecha
o contrato é o conjunto: o erro no atendimento evitado, a rotatividade evitada,
e o serviço que chega ao cidadão, que é o que a gestão apresenta ao eleitor.

---

## Pendência aberta, que não é deste slide

A estrutura fixa da empresa cresce de R$ 12 mil para R$ 150 mil por mês no ano
5 e **nunca foi reconstruída linha a linha**. É ela que produz a margem
operacional de 41% a 46%, o ponto de equilíbrio de 0,26 e a métrica do Anexo.
Enquanto não for reconstruída, esses três números carregam a mesma incerteza.

---

## Fontes

- Ipea, **Atlas do Estado Brasileiro**: mediana de remuneração do servidor
  municipal e número de vínculos municipais.
- **INSS / Ministério da Previdência Social**: duração média do afastamento por
  transtorno mental e afastamentos concedidos em 2025.
- Bosma E, Grigore D, Abma FI, Proper KI, Loef B. **Evidence-based
  interventions to prevent sick leave: a scoping review of reviews**. BMC
  Public Health, 2025. doi:10.1186/s12889-025-21911-4
- Keus van de Poll M, Nybergh L, Lornudd C, Hagberg J, Bodin L, Kwak L, Jensen
  I, Lohela-Karlsson M, Torgén M, Bergström G. **Preventing sickness absence
  among employees with common mental disorders or stress-related symptoms at
  work: a cluster randomised controlled trial of a problem-solving-based
  intervention conducted by the Occupational Health Services**. Occupational
  and Environmental Medicine, 2020. doi:10.1136/oemed-2019-106353
- Pinto EB. **Desmedida do capital: a degradação da saúde mental de servidores
  públicos em uma capital brasileira**. Programa de Pós-Graduação em Política
  Social e Serviço Social, UFRGS. Porto Alegre, 2008 a 2015.
- `MODELO-PAAPS-COMPLETO.md`, Degrau 16, e `CALCULO-TAM-SAM-SOM.md`, neste
  mesmo diretório.
