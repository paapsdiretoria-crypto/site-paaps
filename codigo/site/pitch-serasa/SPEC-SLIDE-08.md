# SPEC do slide 08, Modelo de negócio

> Escrito em 23/08/2026. **Documento de especificação: nada aqui foi aplicado.**
> `index-v4.html` e `pitch.css` foram só lidos. O slide 08 é a `<section id="s7">`,
> linhas 208 a 243 do `index-v4.html`.
>
> Fonte da conta: `MODELO-PAAPS-COMPLETO.md`, Degraus 4, 5, 6, 8, 9 e 11.
> Pendências que este spec responde: §3.5 e §2 de `pendencias-pitch-sabadopradomingo.md`.

---

## 1. O que sai e o que entra

### 1.1 Sai do 08, e vai inteiro para o 09 (Mercado)

Os dois blocos de verba pública. Em HTML colável, para quem estiver montando o 09:

```html
<span class="pilar__n">R$ 26,9 milhões <i class="pilar__ano">(maio de 2026)</i></span>
<p class="pilar__l">Valor destinado pelo Governo Federal em ata para promoção de saúde mental no serviço público. <b>A ata prevê uso por estados e municípios.</b></p>
<span class="pilar__n">R$ 65,9 milhões <i class="pilar__ano">(maio de 2024)</i></span>
<p class="pilar__l">caíram na conta dos municípios num único mês, pelo índice que custeia a gestão do SUAS e paga formação de equipe. <b>Saldo parado reduz o repasse seguinte.</b></p>
<p class="pilar__nota">Fundo Nacional de Saúde e Fundo Nacional de Assistência Social, via IGD, repasse automático fundo a fundo.</p>
```

E os dois créditos correspondentes, que saem da linha de fonte do 08 e entram na do 09:

- `Ata de Registro de Preços nº 41/2026, Pregão nº 90.001/2026, Central de Compras do MGI`
- `IGD, competência de maio de 2024: Informe Bolsa Família nº 46, MDS`

> Lembrete de §7 das pendências, para quem montar o 09: a ata nº 41/2026 é oportunidade e
> concorrente ao mesmo tempo, porque ela também é caminho pronto para o município aderir à
> vencedora sem licitar.

### 1.2 Também sai

- O primeiro `.pilar--duplo` inteiro (a coluna da esquerda). Com a verba fora, ela esvazia.
- A palavra "mensal" da definição de abertura.
- **"500 servidores"**, em todas as ocorrências: vira **"500 Servidores Públicos"**. A forma
  atual quebra o léxico da casa (nunca "Servidor" sozinho).

### 1.3 Entra

| # | Conteúdo | Onde no slide |
|---|---|---|
| 1 | Definição corrigida: sem "mensal", com "formada no método" | lead de abertura |
| 2 | A conta explícita: 500 Servidores Públicos → 70 equipes → 70 Rodas | faixa 1, célula 1 |
| 3 | R$ 1.100 por Roda de Equipe PAAPS | faixa 1, célula 2 |
| 4 | R$ 77 mil por mês e R$ 924 mil por ano | faixa 1, célula 3 |
| 5 | Quem são as 2,34 pessoas, uma por uma | faixa 2, pilar esquerdo |
| 6 | Supervisão a cada dois dias, intrínseca ao método | faixa 2, pilar esquerdo |
| 7 | Os 17%, e os **três** usos (hoje só o primeiro está escrito) | faixa 2, pilar central |
| 8 | R$ 448 de custo, R$ 652 de sobra, 59,3% | faixa 2, pilar direito |
| 9 | Presencial e grupal, sem oferta online | lead de fecho |
| 10 | Circulação de renda local e o licenciamento como via de escala | lead de fecho |

**São dez itens numa tela só.** Com a verba fora sobra espaço, mas não sobra dez itens de
espaço. A triagem que proponho está em §6.

---

## 2. A aritmética completa, conferida uma por uma

### 2.1 500 Servidores Públicos ÷ tamanho de equipe = 70 equipes

**NÃO FECHA com o que o slide diz hoje.** 500 ÷ 10 = **50**, não 70.

De onde saem as 70, na fonte (`MODELO-PAAPS-COMPLETO.md`, Degrau 4):

```
500 servidores ÷ 7 pessoas por equipe = 71,43 → 70 equipes (arredondado para baixo)
1 Roda por equipe por mês             = 70 Rodas por mês
```

O documento declara a faixa real: **equipes de 6 a 8 pessoas, média 7**, e explica por que
não usou 80 equipes ("daria 6,25 pessoas por equipe, abaixo da faixa real de 6 a 8").

**O problema é de copy, não de conta.** "Até dez pessoas" é o **teto da Roda**; "seis a
oito" é o **tamanho real de uma equipe da rede pública**. Os dois números convivem, mas o
slide hoje imprime só o teto, e aí quem lê faz 500 ÷ 10 = 50 e a conta quebra na cara dele.
A correção é escrever os dois: o teto na definição, o tamanho real na conta. Está feito na
copy de §3.

> **Erro de redação na fonte, para corrigir lá depois:** o Degrau 4 escreve "500 ÷ 80 daria
> 6,25 pessoas por equipe". A operação certa é 500 ÷ 6,25 = 80 equipes. O raciocínio está
> certo, a linha está invertida. Não afeta nenhum número do deck.

### 2.2 70 × R$ 1.100, e os R$ 77 mil e R$ 924 mil

```
70 × R$ 1.100      = R$ 77.000 por mês        ✓ FECHA
R$ 77.000 × 12     = R$ 924.000 por ano       ✓ FECHA
```

Os dois números que o slide afirma hoje estão corretos.

### 2.3 Os 17%: dentro das 70 ou por cima?

**Por cima das 70, e dentro da mesma equipe já contratada.** A conta (Degrau 5):

```
Capacidade: 2 psicólogas × 2 Rodas/dia × 21 dias úteis = 84 Rodas/mês
Vendidas:                                                70
Folga:                                                   14
14 ÷ 84 = 16,67%  →  17%      ✓ FECHA
```

Duas coisas que decorrem disso, e que decidem a redação:

1. **Os 17% são medidos sobre a capacidade (84), não sobre as Rodas vendidas (70).**
   Sobre as 70 daria 20%. A redação atual do slide ("o modelo reserva 17% de capacidade")
   já está tecnicamente certa, e a nova precisa manter a palavra **capacidade**.
2. **A folga não muda preço nenhum.** Ela não entra no R$ 1.100, não entra nos R$ 77 mil,
   não entra no R$ 448 e não entra nos 59,3%, porque as duas psicólogas já estão pagas
   pelo custo fixo mensal do município. Ela custa zero a mais para entregar.

> **NÃO FECHA com a fonte, e é uma pendência real de modelo:** o Degrau 8 monetiza metade
> da folga ("metade deles vendida como frequência dobrada para equipes em crise soma
> R$ 6.600/mês de margem quase pura"). Os três usos que a Mallu pediu (mais encontros para
> a equipe que precisa; encontro estratégico; devolutiva com a gestão) consomem a folga na
> **entrega**, e dois dos três não são venda. Se os três usos valem, aquele upside de
> R$ 6.600/mês some, no todo ou em parte. Esse número não aparece no slide 08, mas está
> escrito no `MODELO-PAAPS-COMPLETO.md` e apareceria numa diligência que peça o modelo.
>
> Aritmética do próprio R$ 6.600, de quebra: 7 Rodas × R$ 1.100 = R$ 7.700, menos imposto
> (R$ 143 × 7 = R$ 1.001), dá **R$ 6.699**. O documento escreve R$ 6.600, que é o resultado
> de 6 Rodas, não de 7. Diferença de R$ 99, provável arredondamento não declarado.

### 2.4 2 + 1/7 + 1/5 = 2,34?

```
2 psicólogas locais dedicadas   = 2,000000
+ 1/7 de supervisora clínica    = 0,142857
+ 1/5 de customer success       = 0,200000
                                = 2,342857  →  2,34      ✓ FECHA
```

Quem é cada fração, para a explicação em português falado da copy:

- **As duas psicólogas** moram na cidade e são contratadas em CLT. São dedicadas a um
  município só, e são elas que conduzem as 70 Rodas.
- **Um sétimo de supervisora clínica:** a supervisão de um município é de cerca de 20
  sessões por mês, o que dá umas 40 horas com preparo e registro. Uma jornada integral
  cobre 7 municípios, ou 14 psicólogas.
- **Um quinto de customer success:** uma pessoa cuida de 5 municípios.
- **A orquestração (escala, rotação, relatório) não é pessoa, é IA.** Custa R$ 400 por mês
  e por isso não entra nas 2,34. E é justamente porque a IA e o customer success cuidam da
  logística que a supervisora consegue rateiar em 7: ela faz só supervisão clínica.

### 2.5 R$ 448 de custo por Roda, e os 59,3%

Custo direto mensal por município (Degrau 8):

| Linha | Conta | Valor |
|---|---|---|
| 2 psicólogas CLT | R$ 8.370 de custo real × 2 | 16.740 |
| Supervisora CLT | R$ 12.060 ÷ 7 | 1.723 |
| IA orquestradora | | 400 |
| Customer success | R$ 6.350 ÷ 5 | 1.270 |
| Deslocamento e material | | 1.200 |
| **Custo direto** | | **21.333** ✓ soma confere |

```
21.333 ÷ 70 Rodas          = R$ 304,76  →  305
Imposto 12,97% × R$ 1.100  = R$ 142,67  →  143
305 + 143                  = R$ 448                        ✓ FECHA
R$ 1.100 − R$ 448          = R$ 652
652 ÷ 1.100                = 59,27%  →  59,3%              ✓ FECHA
```

Conferência cruzada, no nível do município:

```
77.000 − 21.333 − 9.987 (imposto)  = R$ 45.680 de margem
45.680 ÷ 77.000                    = 59,32%                ✓ FECHA
45.680 × 12                        = R$ 548.160/ano  (o doc escreve 548.157, arredondamento)
```

**Duas ressalvas que não derrubam o número, mas precisam estar registradas:**

1. **A fórmula impressa ao lado do 16.740 não reproduz o 16.740.** O Degrau 8 escreve
   "R$ 6.000 × 1,39 × 2", que dá **16.680**. O valor certo vem do Degrau 6, que itemiza o
   custo real de uma psicóloga de campo em **R$ 8.370** (multiplicador efetivo 1,395), e
   8.370 × 2 = 16.740. O número está certo, a fórmula ao lado está arredondada para menos.
   Refazendo tudo com 16.680: custo direto 21.273, custo por Roda R$ 447, margem 59,4%.
   É ruído de arredondamento e **não muda nada no slide**. Só não imprimir a fórmula
   "R$ 6.000 × 1,39" em lugar nenhum, porque ela não fecha com o resultado ao lado.
2. **Possível dupla contagem de deslocamento.** Os R$ 8.370 de cada psicóloga já contêm
   "deslocamento em campo R$ 300" e "exames, seguro e material de grupo R$ 100", e o custo
   direto tem uma linha separada de "deslocamento e material R$ 1.200". Se for a mesma
   coisa contada duas vezes, o custo direto cai para 20.533, a Roda custa R$ 436 e a margem
   sobe para **60,4%**. O erro, se existir, é **conservador**: ele reporta margem menor do
   que a real, então não machuca numa diligência. Mesmo assim, vira pergunta em §7.

### 2.6 Os 59,3% descontam a estrutura fixa de R$ 12 mil? NÃO.

Esta é a resposta à dependência do §2 das pendências, e é boa notícia.

O Degrau 9 organiza o custo em quatro camadas, e a estrutura da empresa é a **camada 3**,
que vem **depois** da margem de 59,3%:

| Camada | O que é | Valor |
|---|---|---|
| 1 | Custo direto do projeto | R$ 21.333/município |
| 2 | Imposto | 12,97% |
| **3** | **Estrutura da PAAPS** | **R$ 12.000/mês** |
| 4 | Resultado | o que sobra |

**Consequência para este slide:** os 59,3% são **margem de contribuição**, não margem
operacional. O slide 08 **não depende** do R$ 12 mil, e por isso ele **não trava** enquanto
a estrutura fixa não for refeita. Quem trava são os slides 14, 15 e 19, como as pendências
já registram.

**Mas a redação de hoje precisa mudar.** "Sobram 59% de margem" é lido por analista como
margem de lucro. Um avaliador da Serasa que abrir o modelo vai encontrar a estrutura fixa
por baixo e vai marcar o slide como otimista. A copy de §3 escreve
**"59,3% de margem de contribuição, antes da estrutura fixa da empresa"**, e essa frase
protege o deck inteiro por doze palavras.

### 2.7 "Supervisões a cada dois dias" contradiz alguma coisa?

**Contradiz o slide 10. Não contradiz o 1/7.**

- **Com o 1/7, fecha.** São ~20 sessões de supervisão por mês por município, para 2
  psicólogas, o que dá ~10 sessões por psicóloga em 21 dias úteis: **uma a cada dois dias
  úteis**. É exatamente o que o rateio em 7 municípios paga.
- **Com o slide 10, não fecha.** A `<section id="s9">` (slide 10, Go to market) escreve:
  *"Para a psicóloga: CLT, mora na cidade, **supervisão semanal** e, após três anos em campo,
  vira supervisora."* Semanal e "a cada dois dias" não podem ser a mesma oferta na mesma peça.
- **Recomendação:** alinhar o slide 10 para "a cada dois dias". "Semanal" está subvendendo o
  que o modelo já paga, e a supervisão é justamente um dos diferenciais. **Essa correção é
  no slide 10, não neste. Fica registrada aqui, para quem cuidar dele.**

### 2.8 Placar da aritmética

| Número | Situação |
|---|---|
| 70 × R$ 1.100 = R$ 77 mil/mês | ✓ fecha |
| R$ 77 mil × 12 = R$ 924 mil/ano | ✓ fecha |
| 17% de folga (14 ÷ 84) | ✓ fecha, e é **por cima** das 70, sem custo extra |
| 2 + 1/7 + 1/5 = 2,34 | ✓ fecha |
| R$ 305 + R$ 143 = R$ 448 | ✓ fecha |
| R$ 652 ÷ R$ 1.100 = 59,3% | ✓ fecha |
| Supervisão a cada dois dias × 1/7 de supervisora | ✓ fecha |
| **500 ÷ 10 = 70 equipes** | ✗ **não fecha.** Dá 50. As 70 vêm de 500 ÷ 7 |
| **"Sobram 59% de margem"** | ✗ **não fecha como está escrito.** É margem de contribuição, antes da estrutura fixa |
| **Supervisão a cada dois dias × "supervisão semanal" do slide 10** | ✗ **contradição entre slides** |
| R$ 6.600/mês de folga monetizada (fonte, não slide) | ✗ dá R$ 6.699 com 7 Rodas; e os três usos novos da folga podem cancelar esse upside |
| "R$ 6.000 × 1,39 × 2 = 16.740" (fonte, não slide) | ✗ a fórmula dá 16.680; o valor certo é 16.740, do custo itemizado |

---

## 3. Copy final proposta, bloco a bloco

### 3.1 Título

Fica **"PAAPS, explained"**, com "explained" no `.olho .destaque`. Não foi pedida mudança,
e ele é o único título do deck que assume o tom de nota de rodapé com que a Mallu explica o
modelo. Se ela quiser trocar, a alternativa que testa bem é **"A conta da PAAPS, inteira."**

### 3.2 Lead de abertura, corrigido

> Essencialmente, a PAAPS é uma Roda de Equipe: encontros por equipe, de até dez pessoas,
> conduzidos por psicóloga formada no método.

"Mensal" saiu. "Formada no método" entrou. A periodicidade reaparece na conta, onde ela é
operação e não definição.

### 3.3 Faixa 1, a conta, três células ligadas por seta

**Célula 1**

> **70 equipes**
> Uma prefeitura de 500 Servidores Públicos se organiza em equipes de seis a oito pessoas,
> e a Roda acontece por equipe: são **70 Rodas por mês**.

**Célula 2**

> **R$ 1.100**
> é o preço de uma Roda de Equipe PAAPS, e **a Roda que não acontece não é cobrada**. Para
> o Servidor Público ela é sempre gratuita, dentro do horário de trabalho.

**Célula 3**

> **R$ 77 mil por mês**
> é o que essa prefeitura paga pelas 70 Rodas das suas 70 equipes, **R$ 924 mil por ano**.

### 3.4 Faixa 2, a operação, três pilares com o do meio aceso

**Pilar esquerdo**

> **2,34 pessoas**
> é quanto a equipe da PAAPS cresce a cada município novo: duas psicólogas em CLT que moram
> na cidade, mais um sétimo de supervisora clínica, que cobre sete municípios, e um quinto
> de customer success, que cobre cinco. A escala e o relatório são feitos por IA, então
> ninguém entra na conta por causa de logística.
> *A supervisão acontece a cada dois dias, e é parte do método: a equipe só cresce na medida
> em que cresce a supervisão de quem executa.*

**Pilar central (aceso)**

> **17%**
> da capacidade instalada fica reservada e não é vendida: as mesmas duas psicólogas dão
> conta de 84 Rodas por mês, e 70 estão contratadas. É essa folga que paga a equipe que
> precisa de mais de um encontro no mês, o encontro estratégico e a devolutiva com a gestão.
> *Nenhum dos três custa contratação nova.*

**Pilar direito**

> **R$ 448**
> é o que uma Roda custa para a PAAPS, entre folha, supervisão, orquestração e imposto, e
> ela vende por R$ 1.100. Sobram **R$ 652 por Roda: 59,3% de margem de contribuição**, antes
> da estrutura fixa da empresa.

### 3.5 Lead de fecho

Duas versões. A primeira é a que recomendo.

**Versão A, posição declarada (recomendada):**

> A PAAPS não atende online. A Roda é presencial e é em grupo porque uma psicóloga alcança
> dez pessoas na mesma hora e trabalha o que trava a comunicação entre elas, que é o que a
> clínica individual não alcança, e porque a confiança que a Roda pede se constrói entre
> pessoas que estão na mesma sala. As duas psicólogas moram na cidade e são contratadas em
> CLT, então R$ 144 mil por ano em salário ficam no próprio município. E é por rodar em
> campo que o método vira licença: a PAAPS executa, documenta e forma supervisoras, e **só
> então** licencia para as psicólogas que a prefeitura já tem no CAPS, no CRAS e na escola.

**Versão B, mais curta, se a A não couber:**

> A PAAPS não atende online: a Roda é presencial e é em grupo, porque a confiança que ela
> pede se constrói entre pessoas na mesma sala, e porque uma psicóloga alcança dez pessoas
> na mesma hora. As duas moram na cidade e são CLT, então R$ 144 mil por ano em salário
> ficam no município. A PAAPS executa, documenta o método, e **só então** licencia.

**Duas notas obrigatórias sobre esse parágrafo:**

1. **A afirmação de que o online perde confiança e pessoalidade é NÃO VERIFICADA.** Não
   existe, em nenhum arquivo deste projeto, estudo que compare Roda presencial com Roda
   online. Por isso a copy acima **nunca diz que o presencial é mais eficaz**: ela diz o
   que a PAAPS faz e por que faz. Isso é posição declarada, e posição declarada não precisa
   de fonte (regra 4.6 da `voz-paaps.md`). **Escrever "a melhor intervenção em psicologia é
   presencial" no slide seria alegação de eficácia sem lastro, e um avaliador técnico
   derruba.** Ver §7 e o alerta de §3.6.
2. **Os R$ 144 mil.** É 2 psicólogas × R$ 6.000 × 12, o salário que efetivamente circula na
   cidade. A alternativa é **R$ 201 mil**, que é a folha com encargos (2 × R$ 8.370 × 12 =
   R$ 200.880), mas parte disso é FGTS e provisão, que não circulam no comércio local no
   mesmo ano. **R$ 144 mil é o número honesto para a frase "fica no município".** Decisão
   dela em §7.

### 3.6 Alerta de risco, sobre o presencial

**Existe um contra-argumento pronto dentro dos nossos próprios arquivos, e ele precisa ser
dito antes de a peça sair.**

O `VERIFICACAO-SCHWARTZ-POINT-OF-CARE.md`, §3.3, documenta o **Team Time**: a versão
**online e facilitada** da Schwartz Round, criada na pandemia pela própria Point of Care
Foundation. E o nosso arquivo escreve, com todas as letras, que **"Team Time é mais parecido
com a Roda de Equipe da PAAPS do que a própria Schwartz Round"**, porque é de 45 minutos e
com um setor pequeno de gente que se conhece, em vez de a organização inteira.

O deck usa a linhagem britânica como prova de método em três slides. Se a PAAPS afirmar que
o online derruba a confiança, a mesma instituição que ela cita como padrão vai estar
operando o formato online e avaliado em publicação indexada (PMC11657638). Um avaliador que
conhece a área faz essa ligação em trinta segundos.

**Por isso a copy de §3.5 é escolha e não julgamento:** a PAAPS não atende online. Ela não
diz que o online não funciona. As duas frases custam o mesmo espaço e só uma sobrevive à
pergunta seguinte.

**O lastro que a PAAPS de fato tem, se ela quiser um:** Feigenberg, Field e Pande, *Review
of Economic Studies*, 2013, com 100 grupos e 1.028 mulheres em Calcutá, sorteadas para
encontro semanal ou mensal: as do regime semanal ficaram **três vezes menos propensas a
inadimplir** no empréstimo seguinte, e a interação social entre elas estava **37% maior mais
de um ano depois**, já com o regime de encontro igualado para todas. Isso é evidência
falseável de que **encontro periódico em grupo constrói laço que dura**. Não é evidência de
presencial contra online, e **não pode ser apresentado como se fosse**. Além disso, o número
correto é **três vezes** (artigo revisado por pares), não quatro (working paper do NBER).

### 3.7 Linha de fonte nova

Com a verba fora, saem a ata do MGI e o IGD. Fica:

> A operação PAAPS entrou no contrato social em 1º de abril de 2026 · Custo de folha
> calculado sobre salário de R$ 6.000 com encargos do Simples Nacional e imposto no Anexo
> III, 4ª faixa, 12,97% · Modelo de negócio completo mediante solicitação.

São 232 caracteres, dentro da faixa que o `PLANO-AJUSTE-FINO.md` já considera certa para
este slide. O crédito de foto continua igual.

---

## 4. HTML proposto, colável

Substitui as linhas 208 a 243 do `index-v4.html`. **Classes usadas, todas já existentes no
`pitch.css`:** `.slide`, `.veu-denso`, `.slide__foto`, `.canto`, `.slide__c`, `.c--centro`,
`.t-m`, `.olho`, `.destaque`, `.lead`, `.rev`, `.rev--1`, `.rev--2`, `.rev--3`, `.grade`,
`.grade--3`, `.cel`, `.cel--seq`, `.cel__n`, `.cel__l`, `.pilares`, `.pilar`, `.pilar--centro`,
`.pilar__n`, `.pilar__l`, `.pilar__nota`, `.slide__n`, `.fonte`, `.credito`.

```html
<!-- 08 MODELO DE NEGOCIO -->
<section class="slide veu-denso" id="s7">
  <div class="slide__foto"><img src="../home/img/paaps/cuidado-vivencia.jpg" alt="Encontro de cuidado conduzido pela PAAPS"></div>
  <p class="canto rev">Modelo de negócio</p>
  <div class="slide__c c--centro">
    <h2 class="t-m rev rev--1">PAAPS, <span class="olho destaque">explained</span></h2>
    <p class="lead rev rev--1" style="margin-top:.45em">Essencialmente, a PAAPS é uma Roda de Equipe: encontros por equipe, de até dez pessoas, conduzidos por psicóloga formada no método.</p>

    <div class="grade grade--3 rev rev--2">
      <div class="cel cel--seq">
        <span class="cel__n">70 equipes</span>
        <p class="cel__l">Uma prefeitura de 500 Servidores Públicos se organiza em equipes de seis a oito pessoas, e a Roda acontece por equipe: são <b>70 Rodas por mês</b>.</p>
      </div>
      <div class="cel cel--seq">
        <span class="cel__n">R$ 1.100</span>
        <p class="cel__l">é o preço de uma Roda de Equipe PAAPS, e <b>a Roda que não acontece não é cobrada</b>. Para o Servidor Público ela é sempre gratuita, dentro do horário de trabalho.</p>
      </div>
      <div class="cel">
        <span class="cel__n">R$ 77 mil <i class="pilar__ano">por mês</i></span>
        <p class="cel__l">é o que essa prefeitura paga pelas 70 Rodas das suas 70 equipes, <b>R$ 924 mil por ano</b>.</p>
      </div>
    </div>

    <div class="pilares rev rev--3">
      <div class="pilar">
        <span class="pilar__n">2,34 pessoas</span>
        <p class="pilar__l">é quanto a equipe da PAAPS cresce a cada município novo: duas psicólogas em CLT que moram na cidade, mais <b>um sétimo de supervisora clínica</b>, que cobre sete municípios, e <b>um quinto de customer success</b>, que cobre cinco. A escala e o relatório são feitos por IA, então ninguém entra na conta por causa de logística.</p>
        <p class="pilar__nota">A supervisão acontece a cada dois dias, e é parte do método: a equipe só cresce na medida em que cresce a supervisão de quem executa.</p>
      </div>
      <div class="pilar pilar--centro">
        <span class="pilar__n">17%</span>
        <p class="pilar__l">da capacidade instalada fica reservada e não é vendida: as mesmas duas psicólogas dão conta de <b>84 Rodas por mês</b>, e 70 estão contratadas. É essa folga que paga a equipe que precisa de mais de um encontro no mês, o encontro estratégico e a devolutiva com a gestão.</p>
        <p class="pilar__nota">Nenhum dos três custa contratação nova.</p>
      </div>
      <div class="pilar">
        <span class="pilar__n">R$ 448</span>
        <p class="pilar__l">é o que uma Roda custa para a PAAPS, entre folha, supervisão, orquestração e imposto, e ela vende por R$ 1.100. Sobram <b>R$ 652 por Roda: 59,3% de margem de contribuição</b>, antes da estrutura fixa da empresa.</p>
      </div>
    </div>

    <p class="lead rev rev--3" style="margin-top:.75em">A PAAPS não atende online. A Roda é presencial e é em grupo porque uma psicóloga alcança dez pessoas na mesma hora e trabalha o que trava a comunicação entre elas, que é o que a clínica individual não alcança, e porque a confiança que a Roda pede se constrói entre pessoas que estão na mesma sala. As duas psicólogas moram na cidade e são contratadas em CLT, então <b>R$ 144 mil por ano em salário ficam no próprio município</b>. E é por rodar em campo que o método vira licença: a PAAPS executa, documenta e forma supervisoras, e <b>só então</b> licencia para as psicólogas que a prefeitura já tem no CAPS, no CRAS e na escola.</p>
  </div>
  <span class="slide__n">08</span>
  <span class="fonte">A operação PAAPS entrou no contrato social em 1º de abril de 2026 · Custo de folha calculado sobre salário de R$ 6.000 com encargos do Simples Nacional e imposto no Anexo III, 4ª faixa, 12,97% · Modelo de negócio completo mediante solicitação.</span>
  <span class="credito">Refazenda Rio Xopotó, Desterro do Melo (MG), 2024.</span>
</section>
```

### 4.1 Por que essas classes, e não outras

| Classe | Por que ela |
|---|---|
| `.grade .grade--3` + `.cel` | É a faixa de dado mais **legível** do deck: o `.cel__l` roda em `clamp(.92rem,1.18vw,1.18rem)`, contra `clamp(.72rem,.9vw,.9rem)` do `.pilar__l`. A conta é o herói do slide, então ela fica no componente de corpo grande. Atende à régua de escrever grande. |
| `.cel--seq` | Desenha uma **seta amarela em círculo** entre as células (`content:"→"`). É literalmente a aritmética virando desenho: 70 equipes → R$ 1.100 → R$ 77 mil. Existe no CSS desde a v1 e **ainda não é usada em nenhum slide**, então precisa de conferência visual (ver §6.3). |
| `.pilares` + `.pilar--centro` | Mantém o componente que o slide já usa, e mantém o hábito de leitura do deck: o quadrado aceso é o herói da faixa. Aqui o herói passa a ser os **17%**, porque é a folga que sustenta os três usos que a Mallu pediu. |
| `.pilar__nota` | Itálico miúdo em bege-rosa, feito para "o que é verdade e não precisa de destaque". É onde a supervisão a cada dois dias e o "não custa contratação nova" pousam sem competir com o número. |
| `.pilar__ano` | Reaproveitado para o "por mês" ao lado do R$ 77 mil, para o número não quebrar em duas linhas. |
| **Não usei** `.pilar--duplo` | Ele existia para empilhar dois números no mesmo quadrado, e era a caixa da verba. Com a verba fora, cada quadrado tem um número só. |
| **Não usei** `.tss`, `.metricas--calc`, `.regua` | `.tss` é do slide 09; `.metricas--calc` é do anexo, e repetir o componente do anexo aqui faria os dois slides se confundirem; `.regua` está reservado para o slide 05, que vai recebê-lo do 11. |

---

## 5. CSS novo, se necessário

**Nada do HTML acima exige CSS novo para funcionar.** O bloco abaixo é só de aperto
vertical, e só entra se a medição de §6 mostrar estouro. **Não aplicar sem medir antes.**

```css
/* --- Slide 08: duas faixas de dado no mesmo 16:9 -----------------------
   O slide passou a ter uma grade (a conta) mais os pilares (a operação).
   Cada componente foi calibrado sozinho, e somados eles pedem um aperto.
   Só a margem e o padding cedem: o corpo da letra não cede em lugar nenhum,
   que é a regra da casa. */
#s7 .grade{margin-top:1em}
#s7 .pilares{margin-top:.85em}
#s7 .cel{padding:clamp(13px,1.5vw,22px)}
#s7 .pilar{padding:clamp(.75rem,1.4vw,1.25rem);gap:.4em}
```

Se ainda estourar depois disso, **não mexer no CSS de novo**: cortar conteúdo, pela ordem
de §6.2.

---

## 6. Risco de estouro vertical

### 6.1 O balanço, honesto

O slide **perde** um `.pilar--duplo` com dois números, quatro parágrafos e uma nota, e
**ganha** uma faixa `.grade--3` inteira com três números e três parágrafos em corpo maior,
mais uma nota nova em cada um dos dois pilares que sobraram, mais um lead de fecho que
passou de duas para umas cinco linhas.

**Isso não é troca neutra: é crescimento.** O slide 08 vai ficar mais cheio do que está
hoje, não menos, apesar de a verba ter saído.

### 6.2 Onde aperta, e a ordem de corte

| Ordem | O que cortar | Quanto devolve |
|---|---|---|
| 1 | **Lead de fecho, versão B em vez da A.** É o bloco mais longo do slide e o único puramente argumentativo | ~2 linhas |
| 2 | **A `.pilar__nota` do pilar central** ("Nenhum dos três custa contratação nova"). O parágrafo acima já diz que a folga é da capacidade instalada | ~1 linha |
| 3 | **"A escala e o relatório são feitos por IA..."**, no pilar esquerdo. É verdadeiro e bonito, mas o slide 12 é o dono da tecnologia | ~2 linhas |
| 4 | **A frase da gratuidade** na célula 2. Ela é argumento de venda para o gestor, não de modelo de negócio para o investidor, e cabe melhor no 10 | ~2 linhas |

**Nunca cortar, em nenhuma hipótese:** o "seis a oito pessoas" da célula 1 (sem ele a conta
não fecha na cara do leitor), nem "margem de contribuição, antes da estrutura fixa" do pilar
direito (sem ele o slide superpromete).

### 6.3 O que precisa ser medido no deck rodando, não julgado por print

A régua da casa é medir com script de console, não olhar screenshot. Três medições:

1. **Estouro do `.slide__c`** contra a altura útil do 16:9, com o rodapé de fonte já
   renderizado. É a medição que decide se o §5 entra.
2. **A seta do `.cel--seq`.** Ela é `position:absolute; right:-9px`, e o `.grade` que a
   contém tem `overflow:hidden`. Entre as células 1|2 e 2|3 ela cai dentro da área visível
   e deve aparecer inteira, mas **isso nunca foi renderizado neste deck**, porque
   `.cel--seq` não é usada em nenhum slide hoje. Conferir com os próprios olhos antes de
   dar o slide por pronto. Se a seta for clipada, a saída é aplicar `overflow:visible` só
   em `#s7 .grade`, que não afeta nenhum outro slide.
3. **Contagem de linhas dos três `.cel__n`.** "70 equipes" e "R$ 77 mil por mês" são os
   candidatos a quebrar em duas linhas em tela estreita. Número que quebra é o que a régua
   tipográfica da casa proíbe primeiro.

---

## 7. Perguntas abertas para a Mallu

### 7.1 Decisões de número

1. **O tamanho da equipe.** A conta das 70 equipes só existe com **média de 7 pessoas**
   (faixa de 6 a 8). O "até dez" é teto da Roda. **Confirma que os dois números convivem no
   slide, do jeito que a copy escreveu?** Se ela quiser só "até dez", a conta muda para 50
   equipes, R$ 55 mil por mês e R$ 660 mil por ano, e aí três slides mudam junto.
2. **O R$ 1.100 vai mudar?** Ela sinalizou que sim. **Registrado aqui como número instável.**
   Se mudar, mudam: R$ 77 mil, R$ 924 mil, o R$ 652 de sobra e o percentual de margem. A
   banda já modelada é R$ 1.000 (56,6%) a R$ 1.200 (61,6%). O R$ 448 de custo **não** muda,
   só a fatia de imposto dentro dele.
3. **Os três usos dos 17% cancelam a venda de folga do modelo?** O `MODELO-PAAPS-COMPLETO.md`
   conta R$ 6.600/mês de margem extra vendendo metade da folga. Se a folga agora também paga
   encontro estratégico e devolutiva com a gestão, esse upside encolhe. **Precisa de decisão,
   porque o número está escrito no modelo que a gente entrega sob solicitação.**
4. **Deslocamento contado duas vezes?** Os R$ 8.370 de cada psicóloga já incluem R$ 300 de
   deslocamento e R$ 100 de material, e existe uma linha separada de R$ 1.200. Se for a
   mesma coisa, a margem real é 60,4% e não 59,3%. **Erra a favor da prudência, mas precisa
   de resposta antes de a Serasa abrir o modelo.**
5. **R$ 144 mil ou R$ 201 mil de renda local?** R$ 144 mil é salário puro (o que circula na
   cidade). R$ 201 mil é folha com encargos (parte vai para FGTS e provisão). **Recomendo
   R$ 144 mil**, porque a frase diz "fica no município".

### 7.2 Decisões de copy

6. **O presencial entra como escolha ou como eficácia?** A copy proposta escreve
   **"A PAAPS não atende online"**, que é posição declarada e não precisa de fonte. Escrever
   "a melhor intervenção em psicologia é presencial e grupal" é alegação de eficácia, **está
   NÃO VERIFICADA**, e tem contra-argumento pronto dentro dos nossos próprios arquivos: a
   Point of Care Foundation opera o **Team Time**, versão online da Round, e o nosso
   `VERIFICACAO-SCHWARTZ-POINT-OF-CARE.md` diz que o Team Time é **mais parecido com a Roda
   da PAAPS** do que a própria Schwartz Round. **Recomendo forte a versão declarada.**
7. **Título:** fica "PAAPS, explained" ou vira "A conta da PAAPS, inteira."?
8. **Lead de fecho:** versão A (longa, com o licenciamento explicado) ou B (curta)? A A é
   melhor argumento e é a que mais arrisca estourar o slide.
9. **Supervisão: "a cada dois dias" ou "semanal"?** O slide 10 diz semanal, este diz a cada
   dois dias, e o modelo paga a cada dois dias. **Um dos dois slides muda, e não pode ser
   este.** Quem estiver no 10 precisa saber.
10. **A gratuidade para o Servidor Público continua neste slide?** Ela é forte, mas é
    argumento para o gestor, não para o investidor, e é o quarto item da fila de corte se o
    slide estourar.
