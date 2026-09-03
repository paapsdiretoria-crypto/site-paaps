# Anatomia do Carrossel Aprovado

> Primeira peça do @paaps.brasil aprovada pela Mallu sem mais rodada nenhuma: "De quem é
> esse trabalho", 8 slides, 31/08/2026. Este arquivo dissolve o espécime: o que ele diz,
> como foi construído, e as 7 rodadas de correção que custaram para chegar nele.
> `copywriter-paaps`, `aplicador-visual`, `critico-conteudo` e `critico-design` leem este
> arquivo antes de trabalhar. Ele não substitui `voz-paaps.md` nem `modelos-slide-paaps.md`:
> é o caso concreto que prova as duas coisas na prática.

---

## PARTE 1 : o espécime, na íntegra

Fonte de verdade do texto e do HTML: `conteudo/PARA-APROVAR-mulheres-no-cuidado/montagem-30-08/index.html`.

| # | Modelo | Função na arquitetura |
|---|---|---|
| 1 | Capa concreta | abre com objeto real (atestado), nomeia mulher e mulher negra na própria capa |
| 2 | Afirmação | desnaturaliza a origem histórica do trabalho de cuidado |
| 3 | Dado em card | onde há dado, mostra; onde não há, a ausência de dado é o próprio argumento |
| 4 | Citação real | uma voz humana verdadeira, nunca inventada |
| 5 | Respiro | uma frase só, foto marcante, decisão editorial de silêncio |
| 6 | A virada | a frase que a peça inteira vem armando |
| 7 | Número gigante | a escala do problema, amarrada a uma notícia recente e verificável |
| 8 | Pergunta + CTA | fecha em cima da foto, sem faixa, uma linha só |

### Slide 1 — Capa
> **A parte invisível do trabalho é o que depois vira `atestado`.**
> Esse trabalho tem nome e quase sempre: mulher, e desproporcionalmente mulher negra.

### Slide 2 — Afirmação
> **QUEM ESCUTA E ACOLHE DENTRO DO SUS, sustenta a vida do outro há `séculos`.**

### Slide 3 — Dado em card
> **ENTRE TÉCNICAS E AUXILIARES DE ENFERMAGEM, MAIS DE METADE SE AUTODECLARA `NEGRA`.**
> Entre assistentes sociais, quase metade também é negra. Da Agente Comunitária de Saúde, à
> Psicóloga, à Terapeuta Ocupacional, à Professora, à Doula, à Médica.
> Fonte: COFEN/FIOCRUZ, 2015 · CFESS, 2022

### Slide 4 — Citação real
> "23 ANOS NO SUS... É um sonho para mim, de verdade, enquanto servidora pública, mas
> também como pessoa. Creio que através desse cuidado, vamos conseguir `"resgatar"` muitos
> colaboradores adoecidos."
> — Servidora Pública, mensagem real enviada à PAAPS

### Slide 5 — Respiro
> **ELAS SUSTENTAM O `TERRITÓRIO` INTEIRO.**

### Slide 6 — A virada
> **"O trabalho delas só entra para os indicadores depois que custou uma `licença`."**
> O indicador da equipe só registra a meta batida. Entre quem trabalha formalmente, os
> afastamentos por esgotamento profissional multiplicaram por 9 em 4 anos.
>
> NÓS PRECISAMOS <u>CONHECER</u> MELHOR E <u>CUIDAR</u> MELHOR DESSAS **MULHERES QUE CUIDAM
> DE TUDO.**

### Slide 7 — Número gigante
> **75%** do trabalho de cuidado não remunerado no mundo é feito por mulheres.
> O recém-lançado programa Acolhe Mais, atendimento psicológico online para Mães Atípicas
> ou Mulheres Vítimas de Violência, pelo SUS, nasce justamente porque hoje sabemos que:
> cuidar também adoece quem cuida.
> Fonte: OIT · Ministério da Saúde, Acolhe Mais, ago. 2026

### Slide 8 — Pergunta + CTA
> O Acolhe Mais do SUS sabe que precisamos cuidar quem cuida. Mas não olhou para as
> mulheres do próprio SUS, que cuidam de tudo.
>
> O `presenteísmo` em mulheres: ir ao trabalho, mas adoecida ou exausta demais para dar o
> seu melhor. Ainda não tem indicador ou programa de cuidado.
>
> A PAAPS É A REDE DE PSICÓLOGAS DAS SERVIDORAS PÚBLICAS · SAIBA MAIS EM WWW.PAAPS.COM.BR

---

## PARTE 2 : constituição visual extraída dele

Isto complementa `modelos-slide-paaps.md` e `identidade-aplicada.md` com os números exatos
que só existem porque essa peça passou por calibração real contra print da Mallu.

**Escurecer (véu de legibilidade sobre foto).** Sempre cor **sólida preta** (`rgba(0,0,0,X)`),
nunca gradiente, nunca a cor de marca. Um véu de cor sobre foto P&B/sépia lê como filtro
colorido, não como "foto mais escura" — ela testou e reprovou isso com essas palavras: "parece
que você tingiu a foto". Opacidade varia por slide, calibrada olho a olho: 0,32 (afirmação
simples) a 0,65 (citação com bastante texto direto sobre a foto). Alguns slides não precisam de
nenhum véu (o 5, respiro, e qualquer slide onde a foto já tem contraste suficiente sozinha).

**Textura de marca.** Só na superfície bege/clara, por decisão dela nesta peça: o marrom fica
sem textura até segunda ordem. Padrão: **Textura 4**, arquivo de
`insumos-compartilhados/identidade-visual/04-texturas/`. CSS: `background-repeat: no-repeat`
(nunca mosaico em `repeat`: em grade pequena o traço vira "estampa de onça", palavra literal
dela), `background-size: 140%`, **opacidade 0,05** por cima do que já vem embutido no PNG
(os arquivos de textura já carregam ~25% de alfa próprio). Essa opacidade não é arbitrária:
ela mediu no próprio Canva e ditou "nível cinco de cem". Textura sempre estritamente clipada
dentro da própria caixa (`overflow:hidden` no elemento pai) — nunca vaza para a foto nem para
uma textura vizinha.

**Correção de 03/09/2026: "só Textura 4" era o exemplo da peça de referência, não a regra
final.** A Mallu revisou o primeiro lote inteiro (3 peças, 02/09/2026) montado só com Textura 4
em toda superfície clara e marcou como problema estético (menor que o de foto, mas real): a
identidade visual da PAAPS tem mais de uma textura em
`insumos-compartilhados/identidade-visual/04-texturas/`, e o template/`aplicador-visual.md`
tinham fixado só a 4 como se fosse a única disponível. Daqui pra frente, variar a textura
entre peças do mesmo lote (não a mesma textura em todas as 3), mantendo os mesmos parâmetros
calibrados acima (`no-repeat`, `140%`, opacidade 0,05) para qualquer textura escolhida, não só
a 4. Textura 2 segue reservada para uso mais raro, mas não é mais a única alternativa: olhar o
catálogo completo antes de fixar a mesma peça o lote inteiro.

**Crédito da foto.** Escrito na própria foto, canto superior esquerdo, Helvetica 16px,
`rgba(255,255,255,0.85)` com `text-shadow` leve para legibilidade em qualquer fundo. Texto
padrão: `Fotos: Radilson Carlos Gomes, Fotógrafo do SUS.` — só quando a foto é dele. Em slide
com foto de outra origem ou sem crédito conhecido, **não inventar**: omitir a linha inteira.

**Fonte de dado (referência bibliográfica).** Só nos slides com reivindicação numérica
verificável. Posição: canto inferior esquerdo (onde ficaria um "crédito" de post comum).
Tipografia: **Helvetica, negrito (700), nunca League Spartan** nessa linha específica — é a
única exceção deliberada à regra de que League Spartan carrega número solto.

**Logo.** Canto inferior direito, 52px de altura, sempre a versão com pontinhos coloridos
sobre fundo branco (`logo-branco.png`) porque toda peça desta série tem fundo escuro ali.

**Nunca a linha `@paaps.brasil · tema` repetida ao lado do logo.** O campo `**Crédito:**
@perfil · tema` que aparece nas notas de handoff do copywriter é **metadado interno de
rastreabilidade entre agentes**, não texto para renderizar no slide publicado. O logo já
assina a peça.

**Nunca chapéu/eyebrow.** Nenhuma linha pequena em caixa alta acima do título, nem como
rótulo dentro de card. Onde a frase carrega conteúdo real, ela vira primeira linha do corpo,
na mesma família tipográfica do resto — nunca um rótulo miniaturizado à parte. (Reforça
`feedback_chapeu_eyebrow_proibido`.)

**P&B aceito, peça mista aceita.** Revoga a Lei 2 antiga de `modelos-slide-paaps.md` ("foto
em cor, nunca P&B"): esta peça tem 7 slides em P&B (acervo documental Radilson) e 1 em cor
(slide 6), e foi aprovada assim. O que importa é a foto ser documental real e contextualizável
— nunca a paleta de cor em si.

**Foto dividida (split screen).** Quando duas fotos dividem o mesmo slide, a divisão é
**sempre horizontal** (uma em cima, outra embaixo) — divisão vertical (lado a lado) foi
testada e reprovada por dificultar a leitura de cada cena. Cada metade precisa mostrar a
pessoa **inteira o suficiente para reconhecer o gesto**: cabeça completa, blusa/uniforme
completo quando ele carrega informação (como um crachá ou um dizer no tecido). Se o aspecto
da foto de origem não bate com a caixa, usar `object-position` para priorizar cabeça e torso
antes de preencher a borda; nunca cortar "aleatoriamente" no centro geométrico sem olhar o
que está sendo perdido.

**Fechamento (último slide) nunca leva faixa colorida separada.** A foto sangra até o fim do
slide; a legenda/CTA final (logo + frase institucional) senta direto em cima da foto, com o
véu preto se precisar de contraste. Nunca um retângulo sólido de fundo atrás do CTA.

---

## PARTE 3 : constituição de copy

**"Uma linha só" é instrução de pixel, não de estilo.** Quando alguém pede uma frase "numa
linha só", isso é requisito de layout: o texto precisa caber sem quebrar na largura real do
slide. Testar isso na **imagem renderizada**, nunca só no CSS — `font-size` e largura do
container que parecem certos no código podem estourar a borda ou quebrar em 2 linhas de
verdade. Conferir sempre antes de entregar.

**Nenhuma linha termina com uma palavra sozinha.** Regra de qualquer aplicação visual da
PAAPS, não só carrossel. Se o texto natural produzir isso, ajustar largura do container ou
`font-size` até a quebra ficar equilibrada — nunca aceitar a órfã.

**Dado pode migrar de slide, mesmo depois de "aprovado".** Um dado que nasceu no slide do
número pode render melhor no corpo do slide anterior, se fechar melhor o argumento ali. Não
tratar posição de dado como definitiva só porque passou por uma rodada anterior.

**Fecho de slide de dado/notícia pode não ser pergunta.** O modelo M1 (capa-pergunta) fecha
com pergunta; mas o penúltimo ou antepenúltimo slide pode fechar em afirmação declarativa,
sobretudo quando está explicando um termo técnico (ex.: "o presenteísmo em mulheres: [...]
ainda não tem indicador ou programa de cuidado.").

**Termo técnico entra explicado na mesma frase ou no mesmo bloco.** Sigla clínica ("TAG") ou
termo de política pública que o público de gestão não domina de cor ("presenteísmo",
"Acolhe Mais") nunca aparece só nomeado: vem com o que ele significa na prática, no mesmo
fôlego.

**Notícia recente vira o dado do slide de número quando ela citar uma estatística
verificável e datada** — não basta ela existir, ela precisa efetivamente conter o número que
o slide vai usar (ex.: 75% do trabalho de cuidado não remunerado, citado pelo próprio Acolhe
Mais para justificar seu escopo).

---

## PARTE 4 : as 7 rodadas — o que foi reprovado e por quê

Nomeadas para o próximo agente não repetir. Todas de 30–31/08/2026, na mesma peça.

1. **Fade marrom** — gradiente de cor sobre foto para dar legibilidade. Reprovado: "fica um
   arco-íris" sobre P&B. Virou véu chapado preto (Parte 2).
2. **Sobrancelha** — linha pequena em caps acima do título. Reprovado (regra já existia,
   recaiu). Virou primeira linha do corpo, mesma tipografia.
3. **Legenda repetida ao lado do logo** — o campo `Crédito: @perfil · tema` das notas de
   handoff copiado literalmente para dentro do PNG. Reprovado: "isso é assinar como se fosse
   um quadro". Confirmado como metadado interno (Parte 2).
4. **Frase inventada no fecho de um slide** — o copywriter completou uma lista de profissões
   com uma frase de efeito que não estava no texto validado. Reprovado: "por que que você
   inventou isso?". Regra: nunca completar enumeração ou fechar sentença com conteúdo que o
   texto aprovado não pedia.
5. **Concordância quebrada entre slides vizinhos** — um slide no plural ("Elas sustentam"),
   o seguinte no singular ("O trabalho dela"), porque a reescrita parafraseou em vez de
   copiar a frase ditada literalmente. Reforça a regra geral: frase ditada por ela é literal.
6. **Textura forte demais, três vezes seguidas** — cada tentativa de calibrar opacidade e
   escala da textura errou para mais forte, até "estampa de onça". Resolvido com a régua
   exata da Parte 2 (Textura 4, `no-repeat`, 140%, opacidade 0,05).
7. **Texto estourando a borda** — frase forçada a caber "numa linha só" sem checar a imagem
   renderizada, vazando para fora do slide. Vira a regra de conferência da Parte 3.

---

## PARTE 5 : a régua de calibração visual

Antes de mostrar a ela uma **segunda** tentativa de ajuste puramente visual (opacidade,
escala, posicionamento — não conteúdo), montar uma grade de teste isolada primeiro: um HTML
à parte com várias combinações lado a lado, escolher sozinho qual sobrevive, e só então
aplicar na peça real. Ela pediu isso com todas as letras: "não me interessa como você vai
fazer pra medir isso, mas faça dar certo."

Mesmo fazendo a grade de teste, ela ainda pode errar dentro do contexto real da peça — a
grade reduz o número de rodadas, não os zera. **A palavra final é sempre o print real dela**,
nunca a própria régua interna.

---

## Ver também

`modelos-slide-paaps.md` (catálogo de 8 modelos e leis universais — a Lei 2 e a Lei 3 foram
revogadas/substituídas por este documento, ver seção de revogações lá), `voz-paaps.md`,
`mapa-fontes-foto.md`, `identidade-aplicada.md`.
