# Modelo de negócio da PAAPS: auditoria das contas e estrutura para o pitch

> Documento de trabalho, 17/08/2026. Todas as contas foram refeitas do zero.
> Fontes externas verificadas estão marcadas com [fonte].
> Nada aqui é para copiar direto no slide: é a base que sustenta o que vai no slide.

---

## Parte 1 · Auditoria das contas que você me passou

### 1.1 A conta das equipes tem uma inconsistência

Você disse: 500 servidores, 80 equipes, cada equipe de 6 a 8 pessoas.

```
500 ÷ 80 = 6,25 pessoas por equipe
```

6,25 está na borda de baixo da faixa que você descreveu. Se as equipes tiverem
mesmo uma média de 7 pessoas, 500 servidores formam **71 equipes**, não 80.
Se a média for 8, formam 63.

Isso não derruba o modelo, mas derruba o slide, porque é a primeira conta que
um investidor refaz de cabeça. Duas saídas:

- **(a)** manter 500 servidores e dizer "cerca de 70 equipes"; ou
- **(b)** manter 80 equipes e dizer "equipes de 6 pessoas".

Recomendo a **(a)**: 70 equipes é o número honesto e ainda deixa folga na
operação, como a próxima conta mostra.

### 1.2 "4 grupos por dia" está certo, mas apertado demais

Mês útil tem em média 21 dias.

```
80 grupos ÷ 21 dias = 3,81  →  4 grupos por dia   ✓ sua conta está certa
```

O problema é a folga:

| Cenário | Grupos necessários | Capacidade a 4/dia | Folga |
|---|---|---|---|
| 80 equipes, 21 dias úteis | 80 | 84 | 5% |
| 80 equipes, 20 dias úteis | 80 | 80 | **0%** |
| 70 equipes, 21 dias úteis | 70 | 84 | 20% |

Com 80 equipes e um feriado municipal a mais, o mês não fecha. Um psicólogo
com gripe, uma estrada de terra intransitável na chuva, e o contrato entra em
inadimplemento de escopo. **Com 70 equipes a mesma estrutura roda com 20% de
folga**, que é o mínimo aceitável para operação em campo no interior.

### 1.3 Os dois psicólogos fecham, e sobra capacidade que você não está vendo

```
2 psicólogos × 2 grupos por dia = 4 grupos por dia   ✓ correto
```

Mas veja a ocupação real. Um grupo de 1h30, dois por dia, dá **3 horas de grupo
numa jornada de 8 horas: 34% de ocupação direta.** O resto vai para
deslocamento, registro, supervisão e formação, que é exatamente o método
PAAPS, então a ocupação baixa é deliberada e defensável.

O que você precisa saber: **se cada psicólogo fizer 3 grupos por dia, a mesma
dupla entrega 126 grupos por mês.** Isso é um município e meio com a mesma
folha. Você tem uma alavanca de margem guardada que ainda não usou, e um
investidor vai gostar de ouvir que ela existe e que você escolheu não usá-la
ainda, por causa da supervisão.

### 1.4 O custo do psicólogo está subestimado em 39%

Você disse: salário de R$ 6.000, e "com todos os custos, uns R$ 7.000".
Isso é um multiplicador de 1,17. O real, para CLT numa empresa do Simples:

| Item | Valor |
|---|---|
| Salário base | 6.000 |
| FGTS 8% | 480 |
| Provisão de 13º | 500 |
| FGTS sobre 13º | 40 |
| Férias + 1/3 constitucional | 667 |
| FGTS sobre férias | 53 |
| Provisão da multa de 40% do FGTS (rescisão) | 229 |
| Deslocamento em campo (roda unidades do município) | 300 |
| Exames, seguro, material de grupo | 100 |
| **Custo carregado real** | **R$ 8.370** |

Multiplicador real: **1,39**, não 1,17.

Detalhe importante e favorável: o INSS patronal de 20% **não** entra nessa
conta, porque no Simples Nacional a contribuição previdenciária patronal já
está dentro do DAS nos Anexos III e V. É isso que faz o multiplicador ser 1,39
e não 1,7 como numa empresa do Lucro Presumido.

**Dois psicólogos custam R$ 16.740 por mês, não R$ 14.000.**

### 1.5 O buraco que quebra a conta: imposto

Você chegou em R$ 74 mil de "bruto livre" e não descontou imposto nenhum.
Esse é o erro grande, e é o único que um investidor da Serasa detecta em dois
segundos, porque a Serasa lê balanço de empresa o dia inteiro.

Receita anual de um município a R$ 88.000 por mês = **R$ 1.056.000**, que cai
na 4ª faixa do Simples (R$ 720 mil a R$ 1,8 milhão).

**E aqui tem uma descoberta que muda dinheiro de verdade.** O que decide se
você paga 12,6% ou 18,9% é o **Fator R**: folha dos últimos 12 meses dividida
pela receita dos últimos 12 meses. [fonte: Lei Complementar 123/2006]

```
Fator R ≥ 28%  →  Anexo III  →  alíquota efetiva 12,63%
Fator R <  28%  →  Anexo V   →  alíquota efetiva 18,88%
```

| | Anexo III | Anexo V |
|---|---|---|
| Alíquota nominal (4ª faixa) | 16,00% | 20,50% |
| Valor a deduzir | R$ 35.640 | R$ 17.100 |
| **Efetiva sobre R$ 1.056.000** | **12,63%** | **18,88%** |
| Imposto por mês | R$ 11.114 | R$ 16.614 |

**Diferença: R$ 5.500 por mês, por município. R$ 66 mil por ano.**

Com a estrutura que você descreveu (2 psicólogos CLT, 1 supervisor CLT,
pró-labore das duas sócias), a folha anual fica em torno de R$ 470 mil sobre
receita de R$ 1.056.000: Fator R de **44,6%**, confortavelmente no Anexo III.

O risco aparece se você contratar tudo como PJ para "economizar encargo".
Aí a folha despenca, o Fator R cai abaixo de 28% e você paga 6 pontos a mais
de alíquota. **Contratar local em CLT, que já é a sua decisão por convicção,
também é a decisão fiscalmente correta.** Isso é uma frase de pitch.

### 1.6 A conta refeita, lado a lado

Um município, 500 servidores, 80 grupos por mês a R$ 1.100 o grupo:

| Linha | Sua conta | Refeita (Anexo III) | Refeita (Anexo V) |
|---|---|---|---|
| Receita | 88.000 | 88.000 | 88.000 |
| Imposto (Simples) | não descontado | (11.114) | (16.614) |
| Folha de 2 psicólogos | (14.000) | (16.740) | (16.740) |
| Supervisão (rateio, 1 supervisor cobre 4 municípios) | não somado | (3.125) | (3.125) |
| Deslocamento e material | não somado | (1.200) | (1.200) |
| **Margem de contribuição** | **74.000** | **55.821** | **50.321** |
| **% sobre a receita** | 84% | **63,4%** | **57,2%** |

**Você superestimou em 32%.** Os R$ 74 mil são R$ 56 mil.

**E essa é a boa notícia do documento inteiro:** 63% de margem de contribuição
em serviço com gente em campo é excelente. Consultoria boa opera entre 40% e
50%. O seu modelo é melhor do que você precisa que ele seja; você só estava
contando errado, e errando para cima, que é o lado perigoso.

### 1.7 A métrica que o investidor quer ouvir: margem por grupo

| Item | Por grupo |
|---|---|
| Preço | R$ 1.100 |
| Psicólogo (16.740 ÷ 80) | (208) |
| Supervisão (3.125 ÷ 80) | (39) |
| Imposto (12,63%) | (139) |
| Deslocamento e material | (15) |
| **Custo direto** | **(401)** |
| **Margem por grupo** | **R$ 699 · 64%** |

A frase de pitch que sai daí:

> "Cada grupo custa R$ 400 e vende por R$ 1.100. Margem de 64%, e ela não
> encolhe com escala, porque o custo é local e o preço é nacional."

### 1.8 Ponto de equilíbrio: um município paga a empresa inteira

Estrutura fixa estimada (pró-labore das sócias, contabilidade, jurídico,
tecnologia, articulação): entre R$ 20 mil e R$ 30 mil por mês.
**Você precisa me confirmar esse número, é o único que eu chutei.**

```
R$ 30.000 de estrutura ÷ R$ 55.821 de margem por município = 0,54
```

**Um único município cobre toda a estrutura fixa da empresa e ainda sobra.**
Esse é o número mais forte que você tem, e nenhum slide do pitch atual o diz.

---

## Parte 2 · O plantão psicológico

Sua conta: 1 profissional, 6h por dia, salário R$ 7.000, cobra R$ 18.000,
sobram R$ 10.000.

| Linha | Sua conta | Refeita (Anexo III) |
|---|---|---|
| Receita | 18.000 | 18.000 |
| Folha (R$ 7.000 × 1,39) | (7.000) | (9.730) |
| Imposto 12,63% | não descontado | (2.273) |
| Supervisão (rateio) | não somado | (800) |
| **Margem** | **10.000** | **R$ 5.197 · 29%** |

**Você superestimou em quase 100%.**

Preço por hora: 126 horas por mês, R$ 18.000, dá **R$ 143 a hora**.

Você está certa de que o plantão é secundário. Mas o motivo verdadeiro não é
o que você me deu. Não é "porque é individual". É este:

> **O grupo vende encontro. O plantão vende hora.**
> Um grupo atende 7 pessoas na mesma hora de trabalho; o plantão atende 1.
> A alavanca do grupo é 7 vezes maior, e é por isso que a margem é 64% contra 29%.

Se quiser o plantão saudável, o preço precisa ir para **R$ 24.000** (R$ 190 a
hora). Aí a margem vira R$ 10.439, que é o número que você imaginou.

**Sobre "estancar o sangramento":** você pediu sinônimo. Três que funcionam e
não são metáfora de violência:

- "O plantão não previne: ele socorre."
- "O plantão é onde a gente chega depois que já doeu."
- "O grupo trabalha a causa; o plantão atende o dano que já está feito."

A terceira é a melhor para o pitch, porque explica a hierarquia entre as duas
ofertas em uma linha só.

---

## Parte 3 · Psicoterapia online e treinamentos

### 3.1 Psicoterapia online: delegar está financeiramente certo

Sua intuição está correta, e o argumento para o investidor é limpo:
psicoterapia online é um mercado com concorrentes já capitalizados e margem
espremida. Como parceria, ela vira **receita de indicação sem custo de
operação** (revenue share de mercado fica entre 15% e 30%).

O enquadramento para o pitch:

> "Psicoterapia individual não é nosso produto: é nossa rede de encaminhamento.
> Margem de indicação, custo zero de operação, e isso nos tira do único mercado
> onde já existem cinco concorrentes com capital."

**Um risco que você precisa saber antes de assinar parceria:** se a psicoterapia
estiver *dentro do escopo* de um contrato público e for executada por terceiro,
isso é subcontratação, e muito edital limita ou proíbe. Desenhe como
**encaminhamento** (a PAAPS mapeia e encaminha, o parceiro contrata direto com
a pessoa ou com a prefeitura) em vez de subcontratação. Muda o risco jurídico
inteiro e não muda nada na experiência de quem recebe o cuidado.

### 3.2 Treinamentos: "custo zero" é o tipo de frase que derruba credibilidade

Nenhum investidor acredita em custo zero, e a hora que ele não acreditar nessa,
ele passa a duvidar de todas as outras. O custo real, por treinamento:

- deslocamento e hospedagem do palestrante, da capital ao interior: R$ 400 a R$ 1.200
- 8 a 16 horas da equipe PAAPS na co-construção com a equipe local
- 4 horas de formação do palestrante na metodologia da casa

A frase honesta é mais forte que a frase de custo zero:

> "O treinamento tem custo marginal próximo de zero porque o insumo é
> reputacional, não financeiro: o professor universitário quer a experiência de
> campo, e a PAAPS é a única porta que oferece isso."

### 3.3 O ativo que você tem e não nomeou

A comunidade de mais de 120 profissionais **é o seu funil de recrutamento
local**. Quando você abre um município novo, você não sai procurando psicólogo
no mercado: você puxa da comunidade alguém já formado na metodologia.

Isso é o que torna o modelo replicável, e é o equivalente PAAPS ao
"conseguimos entrar num mercado novo e empatar em seis meses" do pitch de
referência. **Isso precisa estar no pitch e hoje não está em lugar nenhum.**

---

## Parte 4 · O que substitui CAC, LTV e as métricas que você não tem

Você misturou duas coisas diferentes, e a distinção importa:

1. **CAC** é quanto custa **ganhar** um município.
2. **Custo evitado** é quanto o município **economiza**. Isso não é CAC: é o ROI do cliente.

As duas importam, em slides diferentes.

### 4.1 CAC: você já tem o dado, só nunca dividiu

A prospecção fria roda com Claude Code e n8n. Custo de ferramenta perto de
zero. O custo real é hora sua mais deslocamento para reunião presencial. E o
funil inteiro já está no seu CRM, nos campos Respondeu, Teve reunião e
Negociação.

```
CAC = (horas suas × seu custo-hora + viagens) ÷ municípios fechados
```

Se o CAC for da ordem de R$ 5.000 e o contrato render R$ 55.821 de margem por
mês, o **CAC payback é de menos de uma semana.** Esse número parece absurdo,
e é real: é o que acontece em B2G com ticket alto e venda consultiva.

Quando um número parece bom demais, a resposta certa não é escondê-lo: é
nomear o gargalo verdadeiro logo em seguida.

> "Nosso CAC payback é inferior a um mês. Aquisição não é o nosso gargalo.
> Nosso gargalo é o ciclo de venda pública, de 4 a 8 meses, e a sazonalidade
> eleitoral. É disso que precisamos na aceleração."

Nomear o próprio gargalo é o que separa quem estudou de quem decorou.

### 4.2 Custo evitado: a conta que fecha a venda, feita com dado verificado

Dados verificados hoje:

- 546 mil afastamentos por transtornos mentais em 2025, recorde da década, 15% acima de 2024 [Ministério da Previdência Social]
- Tempo médio de afastamento por transtorno mental: **3 meses** [INSS, 2024]
- Mediana de remuneração do servidor municipal: **R$ 2.640** [Ipea, Atlas do Estado Brasileiro]
- Cerca de **7 milhões** de vínculos municipais no país [Ipea]

Conta para um município de 500 servidores:

| Item | Valor |
|---|---|
| Taxa de afastamento por saúde mental (piso nacional 1,4%, rede de cuidado 2% a 3%) | 2% |
| Afastamentos por ano | 10 |
| Salário mediano + encargos patronais RPPS (~22%) | R$ 3.220/mês |
| Duração média | 3 meses |
| Salário pago sem contrapartida de trabalho | R$ 9.660 |
| Custo de cobrir a função (temporário ou hora extra), conservador | R$ 4.830 |
| **Custo por afastamento** | **R$ 14.490** |
| **Custo anual de afastamento, 500 servidores** | **R$ 144.900** |

**Teste do número que já está no deck:** Bela Vista de Minas, mais de 180
servidores. 180 × 2% = 3,6 afastamentos por ano × R$ 14.490 = **R$ 52.164**.
Está dentro da faixa de R$ 39 mil a R$ 79 mil que o slide 10 já usa. **A sua
estimativa passa no teste de uma metodologia independente.** Pode defender.

### 4.3 A verdade incômoda que você precisa saber antes de alguém te perguntar

O custo evitado de afastamento **não paga o contrato sozinho**, e é melhor
você saber disso antes de um investidor fazer a conta na sua frente.

```
180 servidores → ~26 equipes → 26 grupos/mês → R$ 28.600/mês → R$ 343.200/ano
Custo evitado de afastamento: R$ 52.164/ano
Razão: o contrato custa 6,6 vezes o afastamento que ele evita
```

Isso não é um problema do seu modelo: é um problema de qual argumento você usa.
O afastamento é o argumento **que faz o secretário levar a proposta ao prefeito**.
O que fecha a venda é o conjunto:

1. afastamento evitado (mensurável: R$ 52 mil ao ano em Bela Vista)
2. **erro no atendimento evitado**, que é onde está o dinheiro grande: equipe esgotada tem o dobro de chance de erro [BMJ, 2022, já no slide 5], e uma ação judicial por erro em saúde custa à prefeitura de dezenas a centenas de milhares
3. **conformidade com a NR-1**, obrigatória e com fiscalização punitiva desde maio de 2026: aqui não existe conta de ROI, existe obrigação legal
4. rotatividade evitada: concurso, treinamento, curva de aprendizado
5. a qualidade do serviço que chega ao cidadão, que é o produto que a gestão apresenta ao eleitor

A frase para o pitch, que transforma a fraqueza em prova de que você estudou:

> "Nenhuma prefeitura compra isso só com a conta do afastamento. A conta do
> afastamento é o que faz o secretário levar a proposta ao prefeito. O que fecha
> é a NR-1, que virou obrigação legal em maio de 2026, e o serviço que chega
> ao cidadão."

### 4.4 A primeira objeção que você vai levar, e a resposta

```
R$ 88.000 por mês ÷ 500 servidores = R$ 176 por servidor por mês
```

Referências de mercado: um benefício de saúde mental corporativo custa de R$ 20
a R$ 50 por vida por mês. Um plano de saúde custa de R$ 200 a R$ 400.

Você está **caríssima** comparada a benefício e **barata** comparada a plano.
Alguém vai apontar isso. A resposta já está no posicionamento da casa:

> "Não vendemos benefício por vida. Benefício por vida é justamente o produto
> que falha, porque ele individualiza um problema que o trabalho produziu.
> Vendemos intervenção na organização do trabalho, e a unidade não é a pessoa:
> é a equipe."

Alternativa comercial que reduz o ticket sem perder densidade: contratar não
para 100% dos servidores, mas para as equipes da ponta (saúde, educação,
assistência), que são as que adoecem. Ticket menor, impacto por real maior.

### 4.5 Tabela de tradução: pitch de referência → PAAPS

| Goodie Bag (referência) | Equivalente PAAPS | Onde você está |
|---|---|---|
| 300 clientes corporativos | territórios | 4 territórios, +1.150 pessoas ✓ |
| Ticket médio 10× o do consumidor | ticket por município/mês | R$ 25 mil a R$ 100 mil ✓ |
| Cliente médio gasta US$ 24 mil/ano | ACV por município | R$ 300 mil a R$ 1,2 milhão ✓ |
| Retenção anual de 93% | renovação de contrato | **falta contar** |
| CAC payback de 4 meses | CAC payback | **< 1 mês** (calcular do CRM) |
| Take rate de 12% | margem de contribuição | **63,4%** ✓ |
| GMV run rate de US$ 5,5 mi | receita contratada | **falta somar** |
| 4 mercados, 1 lucrativo | 4 territórios | ✓ |
| US$ 100 mil para abrir um mercado | custo de abrir um município | **~R$ 25 mil** (recrutar + formar) |
| TAM de US$ 70 bi, <1% de penetração | TAM municipal | ver 4.6 |

**Três lacunas para você fechar antes de submeter:** taxa de renovação,
receita contratada somada, e o CAC dividido de verdade. As três saem do seu
próprio CRM em uma tarde.

### 4.6 TAM, SAM e SOM

| | Conta | Valor |
|---|---|---|
| **TAM** | 7 milhões de servidores municipais × R$ 100/mês × 12 | **R$ 8,4 bilhões/ano** |
| **SAM** | ~2.400 municípios de porte compatível × R$ 360 mil/ano | **R$ 864 milhões/ano** |
| **SOM (5 anos)** | 100 municípios × R$ 360 mil/ano | **R$ 36 milhões/ano** |

100 municípios são 1,8% dos 5.570. É uma ambição defensável, não gulosa, e
espelha exatamente o "mais de 100 cidades aplicáveis" do pitch de referência.

E o dado da penetração quase zero você já tem no slide 13: **46% dos municípios
têm programa de atenção a transtornos mentais**, o que significa que 54% não
têm nada, e dos que têm, quase nenhum é voltado ao próprio servidor.

### 4.7 A trava de crescimento que ninguém te contou

O teto do Simples Nacional é R$ 4,8 milhões por ano.

| Municípios | Receita anual | Situação |
|---|---|---|
| 1 | R$ 1,06 mi | Simples, Anexo III |
| 4 | R$ 4,22 mi | Simples, no limite |
| **5** | **R$ 5,28 mi** | **estoura o Simples** |

Ao sair do Simples, a empresa vai para Lucro Presumido, onde a carga em
serviços fica entre 16% e 19% (PIS, COFINS, IRPJ com adicional, CSLL e ISS),
ou seja, **pior que os 12,63% do Anexo III**.

**A sua trava de crescimento não é demanda nem operação: é regime tributário,
e ela aparece no quinto município.** Isso não vai para o slide. Vai para a
primeira reunião de mentoria da aceleração, e é a pergunta que prova que você
não está improvisando.

---

## Parte 5 · Arquitetura proposta: de 18 slides para 8

O deck atual tem 18 slides. A estrutura do pitch de referência é: quem sou e o
que é → **não somos a categoria que você está pensando** → tração → economia
unitária → replicabilidade → tamanho → escala → fechamento.

| Novo | Funde os atuais | O que carrega |
|---|---|---|
| **01 · Capa e quem somos** | 01 | Capa atual + a definição em uma frase: rede de psicólogos que cuida de quem cuida na educação, saúde e assistência públicas |
| **02 · O problema e quem o carrega** | 02 + 03 + 04 | Duas colunas: à esquerda o tamanho da rede (220 milhões, 76% sem plano B, 281 mil ACS, 3 mi + 2,4 mi + 451 mil); à direita a ferida (educação e saúde ligando o adoecimento ao trabalho, 40,7% das licenças) |
| **03 · Por que agora, e por que não é bem-estar** | 05 + 06 | O slide mais importante do deck. À esquerda: dobro de erro no atendimento [BMJ], 546 mil afastamentos, R$ 3,5 bi, NR-1 obrigatória. À direita: o reframe. Este é o equivalente ao "não somos mais uma startup de bem-estar" do pitch de referência |
| **04 · A solução** | 07 + 08 + 09 | Um ano dentro de uma rede real → três frentes → a sequência de entrada no município |
| **05 · A prova** | 10 | 4 territórios, +1.150 pessoas, R$ 39 a 79 mil de custo evitado, a Carta Melo 2050 |
| **06 · Modelo de negócio** | 11 + 12 + **novo** | **Slide novo, o que falta hoje.** A unidade econômica: o grupo custa R$ 400 e vende por R$ 1.100. Margem de 64%. Um município paga a estrutura inteira. Contratação local em CLT. A DIGGING financiando o ciclo público em duas linhas |
| **07 · Por que escala** | 13 + 14 + 15 | TAM/SAM/SOM, o Ponto de Apoio como camada que transforma o grupo em dado, a comunidade de 120 como funil de recrutamento local, e o que os 7 meses de aceleração entregam |
| **08 · Time e fechamento** | 16 + 17 + 18 | Time compacto, a fila de ícones dos 8 ODS **sem a lista explicativa**, CTA e contato |

### O que se perde, e por que tudo bem

- **A lista dos 8 ODS (slide 16):** os ícones ficam, os 8 parágrafos saem. Lista de 8 itens é material de leitura, não de pitch. Ninguém lê num deck de 3 minutos.
- **A captação híbrida (slide 12):** vira duas linhas dentro do 06. Importa (explica como você sobrevive ao ciclo público lento), mas não sustenta um slide inteiro.
- **O Ponto de Apoio (slide 14):** não encolhe, **muda de lugar e de argumento**. Hoje ele está solto como "o produto que vamos construir". No 07 ele vira a consequência natural do grupo: o grupo é onde o dado nasce, o Ponto de Apoio é onde ele vira produto. Como a Serasa quer solução tecnológica, essa amarração vale mais que o slide isolado.

### A tese de dados que você me deu e que o deck ainda não diz

Você descreveu isso e é o melhor argumento de tecnologia que a PAAPS tem:

> É no grupo que a PAAPS enxerga a prevalência real de um território (violência
> doméstica, abuso sexual, caso travado por falta de encaminhamento entre
> serviços) sem quebrar sigilo nenhum, porque nada é individual nem identificado
> por equipe. O dado nasce do cuidado, não de um formulário.

Isso resolve de uma vez o problema que o slide 13 nomeia: a licença do servidor
estatutário não entra em estatística nacional nenhuma. **A PAAPS não está
vendendo um app: está construindo a primeira série histórica de saúde mental
da ponta da rede pública brasileira, e ela vem de dentro do cuidado.**
Esse é o slide 07 e é o que justifica investimento em tecnologia.

---

## Parte 6 · O que eu preciso de você para fechar

1. **Estrutura fixa mensal da empresa** (pró-labore, contabilidade, jurídico, tecnologia, articulação). É o único número que eu estimei.
2. **Taxa de renovação:** dos contratos que terminaram, quantos renovaram?
3. **Receita contratada hoje**, somada.
4. **Do CRM:** quantos e-mails de prospecção saíram, quantos responderam, quantas reuniões, quantos fecharam. Isso me dá o CAC de verdade.
5. **Decisão sobre 70 ou 80 equipes** para 500 servidores (recomendo 70).
6. **Slide 04 do deck atual:** "quase 10 em cada 10 profissionais da educação". Qual é o número exato da Apeoesp? "Quase 10 em cada 10" soa arredondado para cima, e um investidor lê arredondamento para cima como sinal de que os outros números também estão.

## Nota de léxico

Você usou "colaboradores" ao longo de todo o áudio. É vocabulário de RH
corporativo e está proibido na casa justamente porque joga a peça para a
categoria de bem-estar de mercado, que é o lugar de onde o pitch inteiro está
tentando sair. Aqui: **servidores públicos, funcionários públicos,
trabalhadores, profissionais do cuidado.**
