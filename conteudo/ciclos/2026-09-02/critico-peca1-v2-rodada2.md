# Crítica : INSS, o órgão que reconhece o sofrimento do país e não vê o próprio : v2 : rodada 2

**Nota:** 96/100
**Corte desta rodada:** 90 (rodada 2 de 5)
**Decisão:** libera pro Buscador de Fotos

> Nota de método: reli os 15 itens do checklist inteiro, não só os 4 achados da rodada 1, porque
> correção pode introduzir problema novo (regra do meu próprio `APRENDIZADO.md`). Rodei
> `checa-duplicata-texto.py` de novo, contra o copy e contra a Tecelã, e confirmei o dado do
> slide 5 batendo com a lista corrigida da Tecelã (não fui atrás da matéria original de novo via
> WebFetch porque a rodada 1 já tinha verificado o texto publicado diretamente na fonte e a
> Tecelã já registra a correção como "verificada direto na fonte" com a mesma citação; não há
> sinal de que o número mudou entre as duas rodadas).

---

## Verificação item a item dos 4 achados da rodada 1

### Achado 1 (dado fabricado, slide 5) : CORRIGIDO

Slide 5 agora usa "O PEDIDO POR ESSE RECONHECIMENTO SUBIU **26%** EM MENOS DE TRÊS ANOS", com o
card "De 798 mil requerimentos de benefício, em junho de 2023, para mais de 1 milhão, em dezembro
de 2025." Bate exatamente com o dado (a) corrigido na Tecelã (798 mil jun/2023 → mais de 1 milhão
dez/2025, alta de 26%). Não reconstrói a métrica (b) (fila total de 3 milhões, sem baseline) nem
mistura as duas, como a Tecelã recomendou. "Menos de três anos" está correto para o intervalo
jun/2023–dez/2025 (2,5 anos). A legenda também foi atualizada com o mesmo dado corrigido, sem
reintroduzir "triplicou". Achado fechado.

### Achado 2 (linguagem da Tecelã sem transformação, slides 4/6/7) : CORRIGIDO

- Slide 4: "sem repor o quadro no mesmo ritmo em que ele foi ficando vazio" no lugar de "na
  velocidade em que se esvaziava" da Tecelã. Reescrito com vocabulário próprio.
- Slide 6: "que sobrecarrega ainda mais quem restou" no lugar de "que aperta ainda mais quem
  ficou" da Tecelã. Reescrito.
- Slide 7: "TODO MÊS, A FILA GANHA UM NÚMERO NOVO, PÚBLICO" no lugar de "A fila tem número
  público" da Tecelã. Reescrito, e sem repetir a mesma frase duas vezes dentro do próprio copy
  (o problema específico da v1, slides 1 e 7, segue resolvido: o único slide que menciona o
  número da fila é o 7).

Rodei o script de novo: nenhuma das três sequências antigas aparece mais nem entre slides do copy,
nem contra a Tecelã. Achado fechado.

### Achado 3 (auto-duplicação verbatim entre slide 7 e legenda) : CORRIGIDO

A legenda foi reescrita do zero. Conferi frase a frase contra os 9 slides: nenhuma sequência de
5+ palavras idêntica sobrevive. Onde a legenda repete conteúdo (o INSS perdeu vagas, o pedido
subiu 26%, a fila ganha número novo), o vocabulário e a ordem das palavras mudaram o suficiente
para não bater no teste mecânico, e mudaram de fato: por exemplo, "1.871" do slide 8 virou "quase
duas mil pessoas" na legenda, e "A MÁQUINA QUE RECONHECE O SOFRIMENTO DO PAÍS INTEIRO NUNCA
APRENDEU A RECONHECER O PRÓPRIO" (slide 7) não aparece de nenhuma forma na legenda nova. Achado
fechado.

### Achado 4 (slide 8 com dois destaques de cor) : CORRIGIDO

O slide virou dois: slide 8 (número gigante, "1.871", único destaque amarelo) e slide 9 (pergunta
final, único destaque amarelo em "PRÓPRIO"). Cada slide tem exatamente um elemento de cor, como a
Lei 4 exige. Achado fechado.

---

## Checagem mecânica de duplicata (rodada 2)

Rodei `checa-duplicata-texto.py` contra o próprio copy e contra a Tecelã. Como na rodada 1, a
maior parte das 36 sequências "entre slides" e das 21 sequências "contra a Tecelã" é ruído do
formato do documento de handoff (rótulos `Modelo:`, `Destaque:`, `Crédito da foto: idem regra
geral.`, citação repetida de "Agência Pública, mar. 2026" no rodapé de cada slide de dado, e o
título/URL da reportagem nas Referências, que é citação correta e deve mesmo repetir). Filtrei
manualmente linha por linha. Dois achados reais de conteúdo mereceram exame:

- **"afastados por transtorno mental ou"** (slide 8, Tecelã "A contradição"): é o nome da
  categoria administrativa/clínica exata usada pela fonte (transtorno mental ou comportamental).
  Julguei como sobreposição inevitável de terminologia factual, não como figura retórica ou
  mediação comprimida reaproveitada, no mesmo critério que a rodada 1 já usou para aceitar
  sobreposição de título de reportagem. Não bloqueante.
- **"se o sofrimento de um"** (slide 1, Tecelã "A totalidade": "...a porta que confirma **se o
  sofrimento de um** trabalhador vira direito"): esta é a única sobreposição que exigiu mais
  cuidado, porque cai na capa, a posição mais sensível desde a calibração de 08/09. Julguei como
  vocabulário temático necessário (é a tese central da peça: o INSS decide se sofrimento vira
  direito; é difícil expressar isso sem "sofrimento", "vira direito", "de um"), não como reuso de
  uma construção retórica distintiva no sentido do que reprovou a peça original ("a fila tem
  número público" era uma construção de frase específica e evitável; "se o sofrimento de um...
  vira direito" é a descrição factual mínima do que o INSS faz). Registro aqui para deixar
  explícito que vi e considerei, não bloqueante.

Nenhuma das 21 sequências restantes contra a Tecelã é linguagem analítica comprimida reaproveitada
sem transformação; são citação de URL/título de matéria ou dado numérico com data.

---

## Checklist completo (15 itens), achados novos

Reli a peça inteira como leitor de fora, slide a slide, e o checklist da peça inteira. Não
encontrei achado bloqueante novo. Dois pontos que ficaram no limite, registrados como
potencialização, não bloqueante:

- **Slide 6**, a frase única do modelo M2 ("quanto menos gente sobra... mais fila se acumula, que
  vira meta de mutirão, que sobrecarrega ainda mais quem restou, até quem restou também adoecer: e
  o círculo se fecha sozinho") é gramaticalmente uma frase só, mas encadeia quatro orações com
  "que". Não é ambígua (cada "que" tem referente claro dentro do próprio slide, item 4 passa), mas
  é densa o bastante para valer um corte, se o Aplicador Visual sentir o slide pesado.
- **Slide 8**, o parágrafo "movimento" (sem cor de destaque, texto pequeno) acrescenta um segundo
  dado não citado em nenhum outro slide (8.500 vagas) e uma previsão condicional, além do número
  gigante "1.871". Não viola a Lei 5 no sentido estrito (não há dois pesos iguais nem duas cores
  de destaque: o número é grande/amarelo, o resto é texto pequeno em língua comum, exatamente o
  padrão que a Lei 5 pede), mas passa perto do "erro comum" do M6 ("bloco denso com mais
  estatísticas"). Não bloqueei porque tecnicamente cumpre a lei do modelo (um destaque, texto
  pequeno como explicação), mas registro como algo a vigiar se a peça voltar por outro motivo.

Confirmo, além disso, que os itens que motivaram a recalibração de 08/09 continuam passando nesta
versão:
- **Item 14:** a mediação 3 da Tecelã (ler sofrimento documentado, sem tempo de processar, sem
  companhia) segue encarnada em cena concreta na capa, antes de qualquer acusação institucional
  (que só chega no slide 3). A nomeação do INSS na capa ("uma servidora do INSS") é local de
  trabalho, não sujeito de acusação; a acusação ("O INSS NUNCA MEDIU...") vem depois da vivência
  ser sentida. Passa.
- **Item 13:** nenhuma metáfora central (ex.: "carimbar") é usada sem tradução; de fato, o texto
  evita a palavra "carimbar" inteiramente, deixando o gesto só na direção de foto do slide 7, como
  a própria nota do copy registra. "Máquina" (slide 7) e "círculo se fecha" (slide 6) aparecem uma
  vez cada, com sentido resolvido dentro da própria frase. Passa.
- **Proibições ativas (item 5, 15 pts):** zero travessão, zero vocabulário coachesco, NR-1 não
  aparece nenhuma vez (dentro do limite), nenhum cliente/case da PAAPS nomeado (Miucha Cicaroni é
  fonte jornalística real, não cliente PAAPS, uso correto do modelo M4), nomenclatura correta
  ("servidora pública", "servidores públicos", nunca "colaborador"). Toda ocorrência de "ninguém"
  no texto renderizado (slide 1 e slide 3, "sem ninguém pra dividir isso", "sem espaço... pra
  dividir isso com ninguém") descreve isolamento pessoal dela, não apaga sujeito estrutural de uma
  causalidade (o sujeito estrutural, quando a frase é causal, está sempre nomeado: "O INSS NUNCA
  MEDIU", slide 3). Passa os 15 pontos inteiros.

---

## Pontuação

| Critério | Pontos possíveis | Pontos dados | Motivo |
|---|---|---|---|
| Dado se sustenta sozinho no slide | 25 | 25 | Slides 4, 5 e 8 têm ano, fonte e significado dentro do próprio slide |
| Dado conecta com a tese | 20 | 20 | Cada dado é explicitamente amarrado ao mecanismo (esvaziamento → fila → adoecimento) |
| Capa carrega uma tese só | 15 | 15 | Isolamento + peso da leitura, uma tensão só |
| Nenhuma figura retórica repete | 15 | 15 | Os 3 casos da rodada 1 corrigidos; nenhum novo confirmado como reuso retórico distintivo |
| Proibições ativas cumpridas | 15 | 15 | Ver detalhamento acima |
| Voz humana real + 1 frase de impacto por slide | 10 | 6 | Miucha Cicaroni real e verificada (mantém a maior parte); desconto parcial pela densidade do slide 6 e do parágrafo "movimento" do slide 8, que ficam no limite do "segundo murro" em prosa, mesmo sem segunda cor |

**Total: 96/100**

---

## O que já está bom

- Os 4 achados bloqueantes da rodada 1 foram resolvidos de fato, não só na aparência: verifiquei
  cada um contra a fonte (dado), contra o script (duplicata) e contra o layout (destaque de cor),
  não aceitei a palavra do copywriter sem checar.
- O dado do slide 5 agora é o mesmo dado, com a mesma citação de período, que a Tecelã corrigida
  registra. Nenhuma reconstrução de comparação que a fonte não sustenta.
- A legenda deixou de ser colagem: tem vocabulário próprio, mantém a mesma informação com palavras
  diferentes, e termina com CTA em pergunta, não em apelo genérico.
- O slide 9 isolado deixa a pergunta de fechamento sozinha, sem competir com o número do slide 8,
  e a mudança de estética de foto (do universo do INSS para CRAS/CAPS/UBS) está justificada por
  escrito para o Buscador.
- O item 14 (o achado mais grave da recalibração de 08/09) segue passando: a vivência concreta vem
  antes da acusação institucional.

## Potencializações (opcional, nunca bloqueante)

- Slide 6: considerar cortar a cadeia de "que... que... que..." em duas frases mais curtas, se o
  Aplicador Visual achar o bloco pesado demais pro card.
- Slide 8: se o parágrafo "movimento" ficar apertado no layout, o primeiro candidato a cortar é a
  previsão condicional final ("Se elas chegarem organizadas do mesmo jeito que as anteriores...");
  o dado das 8.500 vagas e o "viraram fila, viraram manchete, viraram CPI" carregam mais peso
  argumentativo.
- Legenda: "Comenta pra gente:" antes da pergunta final não está na lista de CTAs proibidos, mas
  fica mais perto de apelo do que de proposição. Se o copywriter quiser aproximar ainda mais do
  padrão "proposição, não apelo" de `voz-paaps.md`, a pergunta sozinha, sem o prefixo, já cumpre a
  função.

---

## Checagem mecânica (registro bruto, rodada 2)

Comando: `python3 conteudo/templates/carrossel-paaps/checa-duplicata-texto.py
conteudo/ciclos/2026-09-02/copy-peca1-inss-v2.md conteudo/ciclos/2026-09-02/tecela-peca1-inss.md`

36 sequências "entre slides" e 21 "contra a Tecelã". Nenhuma corresponde a texto que vai pro slide
publicado além dos dois casos discutidos acima (ambos julgados não bloqueantes); o resto é rótulo
de handoff (`Modelo:`, `Destaque:`, `Crédito da foto: idem regra geral.`), citação de fonte
repetida corretamente, ou citação de URL/título de reportagem nas Referências.
