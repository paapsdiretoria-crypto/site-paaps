# TAM, SAM e SOM: a conta inteira, com fórmula

> Resgatado do Notion em 23/08/2026, da página **"MODELO DE NEGÓCIO 2.0"**
> (`https://app.notion.com/p/3c044cb52e0080b3bdfccaa7c26e524d`), Degrau 17. Essa conta
> existia desde 21/08/2026 e nunca tinha entrado nos arquivos locais do projeto: o slide 09
> usava o resultado (R$ 724 milhões) sem ninguém conseguir reconstruir de onde ele vinha.
> **Esta é a fonte de verdade da conta a partir de agora.** Antes de dizer que um número do
> modelo de negócio "não tem fórmula documentada", ler este arquivo primeiro.

## A fórmula completa

O mercado é recortado por **porte de município**, e cada porte usa um modelo de venda e um
ticket diferentes:

| Segmento | Municípios | Modelo | Ticket/ano | Mercado |
|---|---|---|---|---|
| Acima de 50 mil habitantes | ~650 | Execução própria | R$ 924.000 | **R$ 601 milhões** |
| De 10 mil a 50 mil habitantes | ~1.900 | Licença Base | R$ 64.800 | **R$ 123 milhões** |
| Abaixo de 10 mil habitantes | ~3.000 | Licença via consórcio | R$ 6.549 | **R$ 20 milhões** |
| **Endereçável (todos)** | **~5.550** | | | **R$ 744 milhões/ano** |

Conferência da aritmética:
- 650 × R$ 924.000 = R$ 600.600.000 ≈ **R$ 601 milhões**
- 1.900 × R$ 64.800 = R$ 123.120.000 ≈ **R$ 123 milhões**
- 601 + 123 + 20 = **R$ 744 milhões** (TAM, todos os municípios do Brasil)

## De onde vem exatamente o R$ 724 milhões do slide 09 (SAM)

O SAM do deck é **"municípios acima de 10 mil habitantes"**, ou seja, **só os dois primeiros
segmentos da tabela, sem o terceiro** (abaixo de 10 mil, via consórcio):

```
SAM = 601 milhões (acima de 50 mil) + 123 milhões (10 a 50 mil)
    = R$ 724 milhões
```

E a contagem de municípios bate igual: 650 + 1.900 = **2.550 municípios**, exatamente o
número que o slide 09 já usa. **A fórmula fecha perfeitamente com o que estava no deck.**

## TAM e SOM, para não confundir de novo

- **TAM** = 5.570 municípios (todos, contagem do IBGE). Não carrega valor em R$ no slide
  porque é contagem, não mercado endereçável em ticket misto.
- **SAM** = 2.550 municípios (acima de 10 mil habitantes) = **R$ 724 milhões/ano**. É a
  soma dos dois primeiros segmentos da tabela acima.
- **SOM** = **68 municípios no ano 5, 1,2% do total** = **R$ 13,5 milhões** de receita no
  ano 5. São 8 em execução própria mais 60 com o método licenciado (42 Base e 18 Plena),
  que é exatamente a composição do Degrau 16: R$ 7,39 mi de execução própria, R$ 5,08 mi de
  licenças e R$ 1,05 mi de implantações = **R$ 13,52 milhões**.

> **Correção de 25/08/2026.** Até esta data o SOM estava escrito como "100 municípios,
> 1,8% do total, R$ 13,5 milhões no ano 5", e a frase afirmava que o número batia com a
> projeção. Não batia: a projeção chega aos R$ 13,52 milhões com **68** municípios, e o
> próprio card de Projeções já dizia "28 pessoas, atendendo 68 prefeituras". O deck
> declarava dois números de município para a mesma receita, em dois slides. Decisão da
> Mallu: **alinhar o SOM à projeção**. Os 100 municípios eram meta de ambição, não
> resultado do modelo, e por isso saíram. Corrigido também em `MANUAL-MODELO-E-PITCH.md`
> e nos slides de Mercado e Roadmap do deck v5.

## Dependência do preço da Roda (R$ 1.100)

O SAM **depende do ticket de execução própria** (R$ 924 mil/ano, que por sua vez vem de
70 Rodas × R$ 1.100 × 12 meses) **e do ticket de Licença Base** (R$ 64.800/ano, ver Degrau
14 da mesma página, "MODELO DE NEGÓCIO 2.0"). Se o preço da Roda mudar, o segmento de
execução própria muda, e o SAM muda junto. O segmento de licença tem preço próprio
(R$ 64.800), não deriva do R$ 1.100.

## Onde mais essa página tem coisa que falta no projeto local

A página "MODELO DE NEGÓCIO 2.0" tem 19 degraus e cobre, além do TAM/SAM/SOM: a base
jurídica da inexigibilidade (Cláusula Terceira §2º do contrato social), a diferença entre
dispensa e inexigibilidade com os limites de 2026 (R$ 65.492,11), a conta completa de
consórcio público, o Fator R e o Anexo III/V do Simples, a projeção de 5 anos completa
(Degrau 18) e as duas travas do modelo (teto do Simples e caixa antes do primeiro
contrato). **Nenhum arquivo `.md` local deste projeto tem esse conteúdo.** Vale trazer o
resto para cá numa próxima sessão, não só o pedaço do SAM.
