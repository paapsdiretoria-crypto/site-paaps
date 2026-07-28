# QA : Verificação final do carrossel : 28/07/2026

**Aviso de titularidade, declarado antes de qualquer resultado.** O agente `critico-conteudo`, dono
desta etapa pelo contrato da seção 8 da skill `paaps-orquestrador-conteudo`, tem 21 linhas e é
placeholder vazio. Este QA rodou com a skill `evita-padrao-ia-imersao-claude` como substituta, mais
checagem manual dos 7 guardrails. **Substituta, nunca titular.** Enquanto o agente não existir, quem
julga o texto está perto demais de quem o encomendou, e isso é o ponto mais frágil do fluxo.

Peça auditada: `B3-texto-carrossel.md`, slides 1 a 8 e legenda. A prosa de comentário do Copywriter
(seções "Função na arquitetura" e relatório) foi auditada só para os guardrails de proibição
absoluta, porque não vai ao ar.

---

## Os 7 guardrails da seção 3

| # | Guardrail | Resultado |
|---|---|---|
| 1 | Sem travessão grande | **PASSA.** 0 ocorrências, verificado nos dois arquivos. Havia 2, em títulos de seção, corrigidas nesta etapa |
| 2 | Quente primeiro, prova depois | **PASSA.** A frase quente nasceu em A1, antes de qualquer dado. O Radar entrou depois, para sustentar. Nenhum dado abre a peça: o primeiro número aparece no slide 3 |
| 3 | A fonte dá lastro, a voz é autoral | **PASSA.** Federici e Lélia Gonzalez ficaram fora, e o raciocínio delas aparece sem nome e sem cópia. Nenhuma citação substitui linha própria |
| 4 | Toca a mim E a todos | **PASSA COM RESSALVA.** O slide 5 e o slide 2 tocam. Os slides 4 e 6 são densos em sigla e número, e é onde a peça mais corre risco de virar boletim. Ver achado 2 |
| 5 | Brasil real | **PASSA.** Trilha de MPB de raiz registrada em A0. Cenas de foto pedidas são de campo, sem pose, sem banco de imagem |
| 6 | Nunca venda, autoajuda, militância vazia ou cara de IA | **PASSA COM RESSALVA.** Ver achados 1 e 3 |
| 7 | Acionar agente existente | **FALHA PARCIAL, declarada.** Radar, paaps-brasil, Tecelã, Copywriter e buscador-fotos rodaram por agente próprio. Esta etapa rodou sem titular |

## Proibições de `voz-paaps.md` que não estão nos 7

| Proibição | Resultado |
|---|---|
| Estrutura "não é X, é Y" | **PASSA nos slides.** 0 ocorrências da forma vetada na copy. Uma variação sobreviveu na prosa de comentário e foi corrigida nesta etapa. Ver achado 1 para a figura vizinha, que passa mas se repete |
| Vocabulário coachesco | **PASSA.** 0 ocorrências |
| Metáfora de guerra ou competição | **PASSA.** 0 ocorrências |
| Conteúdo pejorativo sobre o sistema político | **PASSA.** A crítica é ao instrumento de medição e à ausência de pesquisa, nunca a governo nomeado |
| Dado sem fonte rastreável | **PASSA.** Os cinco números da peça constam literalmente da seção "O que a peça PODE afirmar" do B1. Bela Vista entra com território e período, sem estatística |
| Linguagem clínica sem contexto relacional | **PASSA** |

---

## Achados que pedem decisão da Mallu

### Achado 1. A mesma figura retórica aparece em quatro dos oito slides

A estrutura proibida "não é X, é Y" não entrou. Mas a figura vizinha, afirmar por contraste
negativo, virou o andaime da peça inteira:

- Slide 1: "perguntando só quanto, **nunca** de quem"
- Slide 2: "extensão do corpo, **nunca** como ofício"
- Slide 4: "NOMEAR **NÃO** BASTA. FALTA MEDIR."
- Slide 8: "vínculo que **não** vença todo ano"

Cada uma, sozinha, é boa. Quatro, na mesma peça, viram maneirismo, e maneirismo repetido é
exatamente o que faz um texto soar gerado. **Recomendação:** manter no slide 5 e no slide 2, onde a
negação carrega o argumento histórico, e reescrever a do slide 1 ou a do slide 4 em afirmação
direta. Decisão da Mallu, porque mexer na capa muda a espinha da peça.

### Achado 2. Slides 4 e 6 são o vale da peça

Quatro siglas e duas datas no slide 4; três percentuais e dois valores absolutos no slide 6. É onde
o leitor solta. A arquitetura da Tecelã prevê isso (prova entre raiz e virada), e a virada do slide
5 fica entre os dois, o que ajuda. Registro como risco de retenção, sem propor corte: cortar prova
para ganhar leveza seria trair o guardrail 2.

Vale dizer que **não existe dado de retenção por slide** neste perfil: o paaps-brasil declarou que o
Windsor não expõe isso. Então este achado é leitura de forma, nunca medição.

### Achado 3. A chamada final usa uma fórmula que a skill anti-IA veta

Slide 8: "Conta aqui embaixo." A skill lista "comenta aqui embaixo" entre as CTAs genéricas de
encerramento automático. Aqui ela vem acompanhada de três alternativas concretas de diagnóstico, o
que a salva parcialmente, e o formato de pergunta diagnóstica é o único com correlação observada a
comentário que diagnostica em vez de elogiar. **Recomendação:** cortar as três palavras e deixar a
pergunta sozinha. A pergunta já convoca; a instrução enfraquece.

### Achado 4. A legenda repete o slide 8

A legenda fecha com "Na sua rede, o que falta primeiro?" e o slide 8 pergunta "Na sua rede, o que
falta primeiro pra essa pergunta ter resposta?". Quem lê os dois lê duas vezes a mesma coisa.
**Recomendação:** a legenda ganha mais se acrescentar o que o carrossel não coube, por exemplo a
ausência de pesquisa nacional sobre quem é a agente comunitária de saúde.

### Achado 5. Duas capas em disputa, e a escolha não é minha nem do Copywriter

O Copywriter escolheu a capa B e arquitetou a peça nela. A Tecelã recomendou a A. As duas são
impossibilidade estrutural, então as duas respeitam a mecânica que o paaps-brasil mediu. A capa B
tem uma desvantagem que o achado 1 expõe: ela abre a peça já com a figura do contraste negativo, que
depois se repete três vezes. A capa A não tem esse problema. Registro sem decidir.

---

## Veredito

**Aprovado para o gate da Mallu, com cinco achados abertos, nenhum bloqueante.**

Nenhum guardrail de proibição absoluta foi violado na copy. Os achados são de craft e de escolha
editorial, e todos têm dono definido: ela.

O que não pode seguir sem ela: a escolha entre as duas capas, o destino do achado 1 e a escolha das
fotos do slide 3.
