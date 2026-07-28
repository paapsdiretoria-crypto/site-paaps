# B1b : Leitura de perfil (paaps-brasil) : 27/07/2026

**De:** paaps-brasil (modo ANALISTA, rodando em paralelo ao Radar, Tronco B).
**Para:** Tecelã (já entregou A2) e Copywriter, direto.
**Sobre a peça em produção:** recorte de gênero e raça na base da pirâmide do cuidado.
Frase quente da Tecelã: "O corpo dela só entrou na planilha depois que parou de funcionar."

Método declarado antes de tudo, como sempre: **[DADO]** é número ou texto literal.
**[INTERPRETAÇÃO]** é o que eu leio a partir dele. **[SUSPEITA]** é o que não posso sustentar.
Onde não marco, é dado.

---

## 0. Aviso de acesso, antes de qualquer coisa

**[DADO] Não consegui acessar o Windsor nesta sessão.** Toda chamada de rede via Bash
(inclusive um teste simples em example.com) foi bloqueada pela permissão do ambiente em que
rodo como subagente. Não é o bloqueio de plano já conhecido (frase de upsell): é a ferramenta
de rede em si, indisponível para mim nesta execução, do mesmo jeito que o Playwright já esteve
indisponível em 15/07. Não tenho como confirmar se isso se repete em toda execução como
subagente ou se foi específico desta chamada; registrei como lacuna nova na minha memória.

**O que isso significa na prática:** tudo abaixo que é "performance atual" vem da minha
memória (`baselines-e-padroes.md`, `teses-abertas.md`), lastreada no ciclo de coleta real de
15/07/2026 (corpus: 35 posts desde 01/01, recorte nos 16 mais recentes, 30/03 a 12/07). **Não
tenho nenhum dado, de nenhuma fonte, sobre a performance da própria peça de 15/07** (ela foi
publicada depois do corte do meu último corpus coletado). Prefiro dizer isso com todas as
letras a estimar.

---

## 1. Performance real, na baseline honesta que eu tenho (medida em 15/07/2026, corpus 30/03 a 12/07)

**[DADO] Os quatro rankings do corpus, o que efetivamente converteu vs. o que só rendeu aplauso:**

| Post | Alcance | Curtidas | Follows/Reach | Profundidade (save+share/reach) | O que foi |
|---|---|---|---|---|---|
| 07/07 "Nunca existirá psicólogo clínico suficiente" (solo) | 13.054 | 1.192 | **3,003% (392 follows)** | 3,91% | **CONVERTEU.** Líder de conversão do corpus inteiro, dado ainda distribuindo quando medido. |
| 02/07 "O Estado manda você cuidar. Mas quem cuida de você?" (colab @dryagotorres) | 33.425 | 1.781 | 0,287% (96 follows) | 2,30% (abaixo da mediana solo) | **Aplaudiu.** Maior alcance e mais curtido do corpus, 10x pior em conversão que o 07/07. |
| 18/06 "Essas fotos têm nome" (Barbacena, colab suspeita) | 17.759 | 790 | 0,124% (22 follows) | 0,77% (a PIOR do corpus) | **Comoveu.** Alcance alto herdado de rede antimanicomial, pior profundidade do ranking. |
| Carrossel solo típico (mediana do corpus) | ~286 | baixo | próximo de 0 | ~2,9% | Baseline, não outlier. |

**[DADO] O que fez as pessoas decidirem ficar (comentário que diagnostica, não elogia):** no
07/07, os 7 comentários se dividem em reconhecimento de tese ("Até porque psicoterapia
individual não é uma intervenção para toda a população", 5 likes) e diagnóstico direto em
resposta à pergunta final ("Falta formação para os servidores"; "Falta servidores para tanta
psicologia"). No 02/07, o padrão é outro: 55 comentários, maioria **relato pessoal** de
servidor da ponta (ACS, "23 anos no SUS", "unidade de apoio só na folga", Três Rios/férias) e
**reconhecimento emocional** ("Quem cuida precisa ser cuidado!!", 16 likes, o mais curtido).
Nenhum dos dois é hostil ou reativo; a diferença é que um gera decisão silenciosa (segue,
salva, visita perfil: 406 visitas, a maior do corpus) e o outro gera catarse coletiva sem
conversão proporcional.

**[INTERPRETAÇÃO] Curtida é aplauso de quem já concorda (e, em colab, aplauso do público do
parceiro). Follows/reach é quem decide ficar.** Não persiga o alcance nem a curtida como meta
desta peça.

---

## 2. O que aconteceu com a peça de 15/07 (quem cuida da RAPS), origem direta desta

**[DADO] Não tenho nenhum dado de performance dela.** O corpus que coletei ao vivo (Windsor)
cobre até 12/07; a peça foi publicada em 15/07, três dias fora da minha última coleta, e nesta
sessão o Windsor está inacessível para mim (seção 0). Procurei no repositório por qualquer
relatório de pós-publicação, comentário novo transcrito ou nota de acompanhamento: **não existe
nenhum arquivo com dado real de reach, follows, saves ou comentários dessa peça específica.**
Isso é lacuna, não silêncio informativo: eu simplesmente não tenho como saber se ela converteu,
se ela repetiu o 3,0% do 07/07 (mecânica que ela clonou de propósito), ou se caiu.

**[SUSPEITA, não sustentada por dado] Não posso dizer se os comentários pediram algo específico
que ficou sem resposta**, porque não tenho os comentários dela. O que tenho é o que a peça **já
sabia** ao nascer: ela foi escrita em cima de comentários de OUTRO post (02/07), não do próprio
15/07. Ou seja, esta peça de 27/07 não pode se apoiar em "o que os comentários do 15/07
pediram", porque isso nunca foi lido.

**O que eu sei com origem clara, e que muda a leitura do risco:** a própria peça de 15/07,
no slide 7 (versão longa) e na tag do slide 7 (versão montável), **já anunciou o tema desta
peça**: *"Quem cuida, na base dessa pirâmide, é na maioria mulher, e desproporcionalmente
mulher negra. No dia 25, essa história ganha nome."* Isso é dado literal, retirado do próprio
arquivo da peça (`carrossel-2026-07-15-quem-cuida-raps.md`, linhas 247 e 421). Volto a isso na
seção 4, porque é o achado mais operacional deste relatório.

**Verifiquei se o post de 25/07 (a ponte prometida, sobre Tereza de Benguela) foi produzido.**
[DADO] Não encontrei nenhum artefato dele em `conteudo/instagram/paaps.brasil/` nem em
`conteudo/ciclos/`. Não sei se ele saiu do forno, se está pendente, ou se foi descartado. Isso
é lacuna para a Tecelã e para a Mallu decidirem, não para eu resolver aqui.

---

## 3. Mecânica de capa: ainda se sustenta, e a frase quente da Tecelã não é exatamente essa mecânica

**[DADO, confirmado 2x até 15/07/2026] A única mecânica de capa com conversão confirmada por
repetição neste perfil é a capa que nomeia uma impossibilidade estrutural, na forma "é
impossível X através de Y":**
- 07/07: "Nunca existirá psicólogo clínico suficiente para que toda a população brasileira
  faça psicoterapia individual de forma contínua." → 3,0% de conversão, estável numa semana.
- 15/07: "É impossível oferecer vínculo contínuo através de contratos que terminam todo ano."
  → mesma forma, replicada de propósito pelo Copywriter (registrado no próprio arquivo da
  peça). **Não tenho dado de quanto ela converteu** (seção 2).

**[INTERPRETAÇÃO, e é o ponto que preciso levantar para o Copywriter] A frase quente escolhida
pela Tecelã ("O corpo dela só entrou na planilha depois que parou de funcionar") não tem a
forma da mecânica validada.** Ela não nomeia uma impossibilidade estrutural seca; ela narra uma
consequência, num tom de acusação/revelação. Na tipologia que eu já testei neste perfil, essa
forma é mais parecida com a capa do 02/07 ("O ESTADO MANDA VOCÊ CUIDAR. MAS QUEM CUIDA DE
VOCÊ?"), que **aplaudiu mas converteu 10x pior**, e que teve desvio de voz documentado (a
estrutura "não é X, é Y" na variação "NÃO É PAUTA, MAS DEVERIA SER").

Isso não significa que a frase é ruim: é a frase mais forte deste ciclo inteiro, e ela já
carrega o "dela" que marca gênero sem precisar de frase de apoio (a própria Tecelã argumenta
isso bem na seção 7 do A2). O que significa é que **ela testa uma mecânica diferente da que
está confirmada**, e isso deveria ser uma escolha consciente do Copywriter, não um acidente de
composição. Duas rotas possíveis, e não é decisão minha, é dele/da Mallu:

1. Manter "O corpo dela..." na capa, sabendo que é aposta em mecânica não testada (parecida
   com a do post que aplaude mais do que converte).
2. Usar "O corpo dela..." como a **virada** (o papel que "Essa conta fecha porque alguém paga
   com o corpo" cumpriu no slide 5 da peça de 15/07: punchline no meio do carrossel, não na
   capa) e escrever uma capa em forma de impossibilidade estrutural para abrir, na linha de
   "É impossível [a rede reconhecer o trabalho de sustentação] enquanto [só o atestado fala a
   língua da planilha]". Essa rota respeita a mecânica confirmada 2x e guarda a frase mais dura
   para o momento de virada, que é onde ela também funciona (o slide 5 do 15/07 já provou que
   frase de punchline seco funciona nesse ponto da estrutura, mesmo sem dado de follow ainda).

---

## 4. Risco de repetição: o perfil já falou de mulher e raça, uma vez, doze dias atrás

**[DADO] Busquei em todo o histórico de conteúdo do @paaps.brasil (`grep` em
`conteudo/instagram/paaps.brasil/`) por menção a mulher, raça, racial, racismo, gênero,
feminismo.** O único arquivo que contém qualquer uma dessas palavras é a própria peça de
15/07. Nenhum post anterior nomeou raça ou gênero explicitamente.

**O que a peça de 15/07 já disse, textualmente** (slide 7, versão longa e versão montável):
> "Quem cuida, na base dessa pirâmide, é na maioria mulher, e desproporcionalmente mulher
> negra. No dia 25, essa história ganha nome."

**[INTERPRETAÇÃO, e é o risco real] Esta peça NÃO pode apresentar "mulher, desproporcionalmente
mulher negra" como revelação nova.** O perfil já disse essa frase, com essas palavras, há doze
dias, para a mesma audiência. Se a peça de 27/07 repetir o achado como novidade, quem
acompanhou o perfil de perto (e os comentários do 02/07 mostram que existe público fiel,
recorrente, que comenta post após post) vai notar a repetição, mesmo que ninguém verbalize.
Duas saídas, ambas válidas e não excludentes:

1. **Assumir a continuidade em vez de escondê-la:** algo como "há doze dias, dissemos aqui que
   quem cuida, na base da pirâmide, é na maioria mulher, e desproporcionalmente mulher negra.
   Hoje, dizemos por quê." Isso transforma a repetição em prova de tese sustentada, não em
   esquecimento editorial.
2. **Entregar o que a peça de 15/07 não entregou:** o mecanismo (mediação 0 da Tecelã: a
   desqualificação histórica do cuidado como trabalho, a origem colonial/escravista, a
   segregação ocupacional dentro do próprio SUS). A frase estrutural já foi dita; o raciocínio
   por trás dela, não.

**Lacuna que preciso nomear, não resolver:** não sei se o post de 25/07 (Tereza de Benguela,
a ponte que a própria peça prometeu) já foi publicado. Se foi, e se ele já desenvolveu a camada
racial com mais profundidade, esta peça de 27/07 corre risco de disputar espaço com ele em vez
de complementá-lo. Isso é decisão de sequenciamento editorial que cabe à Tecelã e à Mallu, não
a mim; só estou nomeando que ela existe.

---

## 5. Risco de recepção: o que já aconteceu, sem suavizar

**[DADO] O único precedente deste perfil com framing de acusação/identidade explícita é o
02/07** ("O Estado manda você cuidar. Mas quem cuida de você?"). Resultado nos 55 comentários
lidos: **nenhum comentário hostil ou reativo ao enquadramento** foi registrado no ciclo de
15/07. O que apareceu foi relato pessoal, reconhecimento emocional, uma marcação de prefeitura
para cobrança, uma resposta religiosa ("Quem cuida de nós? DEUS"), e uma única crítica, mas
dirigida à gestão pontual ("gestores bem intencionados promovem ação pontual... não resolve"),
não ao PAAPS nem ao enquadramento da peça.

**[INTERPRETAÇÃO] Neste perfil, até aqui, framing de identidade/acusação gera aplauso e relato,
não discordância pública.** Isso é sinal real, mas com uma ressalva importante: **nenhuma peça
até hoje nomeou raça explicitamente.** O 02/07 nomeou categoria profissional exposta ao Estado;
não nomeou cor. Não tenho dado sobre como este público específico reage a recorte racial
explícito, porque isso nunca foi testado no perfil. Trato como [SUSPEITA] razoável, não fato: a
mesma audiência que não reagiu mal a "o Estado manda você cuidar" provavelmente reage bem a
"o corpo dela", porque o padrão de comentário é relato e reconhecimento, não debate. Mas é
suspeita, e devo dizer que é.

**Sobre a composição do público, com ressalva de fonte:** existe um dado registrado em
`voz-paaps.md` ("84,2% mulheres, 87% entre 18-34 anos") que, se for específico deste perfil,
mudaria a leitura para melhor (audiência majoritariamente feminina tende a se reconhecer no
recorte de gênero, não a reagir como público externo). **Não confirmei nesta sessão se esse
dado é do @paaps.brasil ou agregado com o @amalluvasconcellos**; o documento não separa as duas
contas nessa seção. Não uso esse número como base sólida; registro como pista a confirmar,
não como fato aplicável hoje.

**O que a minha própria memória já registrou sobre a persona real (tese aberta, 1 ciclo de
leitura, ainda testando):** quem comenta e converte neste perfil é majoritariamente trabalhador
da ponta do SUS não-psicólogo (ACS, enfermagem) e psicóloga de rede; a gestora, persona
principal declarada, está ausente da conversa pública. Isso pesa a favor da hipótese de que o
público é, em boa parte, o próprio sujeito da peça (quem sustenta a rede), não um espectador
de fora julgando. Reforça a leitura de que reconhecimento é mais provável que reação defensiva,
mas seguindo com o mesmo cuidado: é interpretação sobre um recorte (gênero/trabalho) nunca
testado no eixo racial.

---

## 6. Formato: número de slides, e o limite real do que eu sei medir

**[DADO] O Windsor, no conector que uso, não expõe retenção por slide de carrossel** (não há
campo tipo "visualizações do slide 3"). Nunca tive esse dado, em nenhum ciclo, e não é
possível reconstruir isso hoje com as ferramentas que tenho nesta sessão. Onde a queda
acontece dentro do carrossel é, hoje, **não mensurável por mim**, e qualquer afirmação sobre
"o slide 5 é onde as pessoas somem" seria invenção.

**O que existe, por design, não por medição:** a peça de 15/07 tem 8 slides (réplica
deliberada da estrutura que o Copywriter também usou, com a mesma lógica emocional descrita no
próprio arquivo: reconhecimento → indignação lúcida → tamanho e urgência → sentido histórico e
agência → pergunta que devolve a palavra). O post de 07/07 (líder de conversão) **não teve os
slides 2 em diante transcritos** (lacuna operacional antiga, ainda aberta: exige Playwright,
indisponível para mim como subagente). Não sei quantos slides ele tinha.

**[INTERPRETAÇÃO, com o dado que tenho] 8 slides é uma convenção de produção já usada duas
vezes por este time (07/07 do Copywriter passado e 15/07), não uma medida de retenção
confirmada.** Recomendo manter a faixa de 6 a 8 (a mesma da peça anterior, que é a continuação
direta desta) por consistência de série, não porque eu tenha prova de que 9 slides cairia.

---

## Encomenda para o Copywriter

**O que fazer:**

1. **Decidir conscientemente onde entra "O corpo dela só entrou na planilha depois que parou
   de funcionar":** capa (aposta em mecânica não testada, mais parecida com o post que aplaude
   e converte pouco) ou virada/punchline no meio do carrossel (mecânica com precedente direto:
   slide 5 do 15/07 cumpriu o mesmo papel). Se optar pela capa, escrever também uma alternativa
   em forma de impossibilidade estrutural ("é impossível X através de Y") para o gate de voz
   comparar as duas.
2. **Assumir a continuidade com a peça de 15/07 em vez de escondê-la:** o perfil já disse
   "mulher, desproporcionalmente mulher negra" há 12 dias. Nomear isso explicitamente como
   retomada ("há doze dias, dissemos aqui que...") em vez de repetir como achado novo.
3. **Entregar o mecanismo que a peça anterior não teve espaço para desenvolver:** a
   desqualificação histórica do cuidado como trabalho (mediação 0 do A2), não só a frase
   estrutural que já foi dita.
4. **Manter a pergunta diagnóstica com alternativas concretas no fechamento**, que é o único
   elemento de CTA com correlação observada a comentário-diagnóstico em vez de aplauso, nos
   dois posts de maior conversão/comoção lidos até hoje.
5. **Manter a faixa de 6 a 8 slides**, por consistência de série com a peça de origem direta,
   não por dado de retenção (que não existe).

**O que evitar nesta peça específica:**

1. **Não citar número solto de IBGE sobre gênero/raça/tempo de cuidado.** A própria Tecelã já
   marcou isso como pendente de checagem de edição e ano (seção 3a do A2); eu confirmo que não
   tenho esse dado e que inventá-lo, mesmo formatado como ABNT, é alucinação.
2. **Não tratar "mulher, desproporcionalmente mulher negra" como revelação.** O perfil já
   afirmou isso publicamente. Ver item 2 da lista acima.
3. **Não estruturar a capa como "não é X, é Y"** nem variação dela (o 02/07 já cometeu esse
   desvio e converteu 10x pior que o 07/07; correlação, não prova de causa, mas é o único
   precedente de desvio de voz numa peça de alta exposição neste perfil).
4. **Não citar dado de Bela Vista com número (99,7%, 100%)**; a peça de 15/07 já auditou e
   corrigiu esse erro do 02/07 (dado sem território/período). Território e período sem
   estatística, como a peça anterior já fez.
5. **Não assumir que a hipótese de segregação ocupacional por vínculo contratual (seção 4,
   mediação 2, do A2) é fato fechado.** A própria Tecelã marcou como hipótese estrutural forte,
   não dado fechado; eu não tenho nenhum dado do perfil que a confirme ou derrube.
6. **Não presumir que o post de 25/07 (Tereza de Benguela) já saiu ou não saiu.** Verificar com
   a Mallu antes de decidir quanto da camada racial esta peça absorve versus reserva.

**O que eu não sei, e que fica registrado como lacuna, não como buraco escondido:**

- Performance real da peça de 15/07 (reach, follows, saves, comentários novos): zero dado.
- Se o post de 25/07 foi publicado, e como ele performou, se sim.
- Se "84,2% mulheres" (`voz-paaps.md`) é dado específico do @paaps.brasil.
- Como este público reage a recorte racial explícito (nunca testado no perfil até hoje).
- Onde, dentro de um carrossel, a retenção cai (Windsor não expõe esse dado).

---

*paaps-brasil, modo ANALISTA, 27/07/2026. Rodando em paralelo ao Radar, Tronco B. Handoff
direto para o Copywriter, cópia à Tecelã.*
