# Crítica : INSS, o órgão que reconhece o sofrimento do país e não vê o próprio : v2 : rodada 1

**Nota:** 60/100
**Corte desta rodada:** 90 (rodada 1 de 5)
**Decisão:** volta pro copywriter

> Nota de método: esta é a v2, uma reescrita completa a partir do zero (não uma continuação das 4
> rodadas da v1, que fecharam em 100/100 e foram depois reprovadas pela Mallu já montada). Julguei
> do zero, pelos 14 itens completos, sem carregar a nota da v1. É rodada 1 desta nova linhagem.

---

## Achados bloqueantes

### 1. Dado central de uma prova (slide 5) não existe na fonte citada : fabricação estatística

**Slide 5, card:** "De 1,08 milhão de pedidos parados, em dezembro de 2022, para 3,1 milhões, em
fevereiro de 2026." Manchete do slide: "A FILA PRA CONSEGUIR ESSE RECONHECIMENTO **TRIPLICOU** EM
TRÊS ANOS." Fonte declarada: Agência Pública, mar. 2026 (única fonte factual da peça inteira).

Fui checar a fonte primária (busquei o texto publicado da própria Agência Pública, no endereço
citado nas Referências do copy). O artigo **não contém, em lugar nenhum**, os números "1,08
milhão", "3,1 milhões", "dezembro de 2022" ou a palavra "triplicou" aplicada à fila. O que o
artigo diz sobre a fila é outra coisa, com outros números: a fila "bateu recorde" e "chegou ao
marco histórico de 3 milhões de processos aguardando análise" (sem baseline de 2022, sem
comparação de triplicação); e, separadamente, o "número de requerimentos... saltou mais de 26%,
passando dos 798 mil para mais de um milhão", entre junho de 2023 e dezembro de 2025, segundo
boletim de Transparência Previdenciária, uma métrica diferente ("requerimentos", não "pedidos
parados na fila") com um crescimento de 26%, não de triplicação.

Isso é achado bloqueante do critério 1 (25 pts): o dado não se sustenta, porque a informação que
a fonte declarada realmente contém é outra. Não é imprecisão de arredondamento, é um número (e uma
data-base, dezembro de 2022) que **não aparece no artigo em nenhuma forma**. Ver
`insumos-compartilhados/nucleo-comum/voz-paaps.md`, 4.6: "Nenhum número entra numa peça sem fonte
verificável", responsabilidade explícita deste agente.

**Origem do erro:** não é invenção do copywriter. O mesmo número, com a mesma formatação exata
("1,08 milhão (dez/2022) → 3,1 milhões (fev/2026)"), já está na lista "Dados para o Copywriter
usar" de `conteudo/ciclos/2026-09-02/tecela-peca1-inss.md`. A Tecelã declara a fonte única como
"Agência Pública, mar/2026, republicado por Sinssp e Seaac Campinas" — os republicadores podem ter
citado um número que a versão do artigo que verifiquei não contém, ou o número nunca existiu.
De qualquer forma, o dado chegou intacto, sem checagem, até a peça final: é exatamente o tipo de
achado que este agente existe para pegar antes de virar carrossel público. **Recomendo que a
Tecelã também corrija a própria lista de dados**, não só o copy desta rodada, ou o erro volta na
próxima reescrita.

**Dados que CONFIRMEI batendo com a fonte, para deixar claro o que NÃO precisa mudar:**
- "Em vinte anos... o INSS perdeu 56% dos servidores... 24 mil vagas a menos" (slide 4): confere
  (o artigo fala em perda de 56% / 24 mil postos em ~20 anos, entre 2006 e 2025).
- "1.871 servidores públicos do INSS afastados por transtorno mental ou comportamental, só entre
  2024 e 2025" (slide 8): confere, quase citação literal do artigo.
- "O Estado pediu concurso pra 8.500 vagas novas em 2026" (slide 8): confere ("8,5 mil novos
  trabalhadores").
- A citação de Miucha Cicaroni (slide 2), com nome, idade, cidade, cargo, datas de burnout (2021 e
  set. 2025) e denúncia ao MPT: confere, é citação real e verificável do próprio artigo, uso
  correto do modelo M4.

**Proposta:** ou substituir o dado do slide 5 (e o trecho equivalente da legenda) por um dos dois
achados reais do artigo, sem inventar comparação temporal que a fonte não sustenta:
- "A demanda por benefícios cresceu 80% enquanto o quadro do INSS caiu praticamente pela metade" (o
  artigo afirma isso quase nesses termos: "demanda disparou em 80%. Metade da força de trabalho
  para quase o dobro de solicitações"), ou
- "A fila de análise de benefícios chegou a 3 milhões de processos, marco histórico" (sem
  comparação de triplicação inventada),

ou remover o slide 5 como "dado em card" numérico e usar esse espaço pra outra função na
arquitetura (a decisão de qual caminho tomar é do copywriter).

### 2. Recorrência de linguagem da Tecelã sem transformação suficiente (item 8, calibrado 08/09)

Rodei `checa-duplicata-texto.py` contra o próprio copy e contra a Tecelã, como o protocolo exige
antes do item 8. Descontado o ruído do próprio formato do documento (rótulos repetidos como
"**Destaque:**", "**Crédito da foto:** idem regra geral.", "**Modelo:** M2..." — não são texto que
vai pro slide, são anotação interna do copywriter pro Buscador/Aplicador, então não contam como
"figura retórica repetida"), sobraram três sequências que são, sim, linguagem analítica da Tecelã
reaproveitada quase literalmente, sem reescrita, em três slides diferentes:

- **Slide 7, linha de entrada:** "A FILA TEM NÚMERO PÚBLICO, ATUALIZADO TODO MÊS." A mediação 4 da
  Tecelã diz, literalmente: "A fila tem número público; o servidor que adoece não tem indicador
  público equivalente." A cláusula de abertura foi copiada palavra por palavra, só emendando
  ", atualizado todo mês".
- **Slide 4, cláusula de abertura:** "...SEM REPOR O QUADRO NA MESMA VELOCIDADE EM QUE ELE SE
  ESVAZIAVA". A seção "O fenômeno desnaturalizado" da Tecelã diz: "não repor o quadro **na
  velocidade em que se esvaziava**". Quase idêntico, só com "mesma" adicionado.
- **Slide 6:** "...que aperta ainda mais quem ficou". A mediação 2 da Tecelã diz, literal: "...que
  aperta ainda mais quem ficou."

Meu próprio log de calibração (`APRENDIZADO.md`, situação de 08/09/2026) registra a regra que
motivou esta checagem: "tratar qualquer sequência de 5+ palavras repetida como achado bloqueante
do item 8, mesmo que pareça callback proposital: reformulação prova a intenção, repetição literal
não prova nada." Três ocorrências, em três slides diferentes, é padrão, não acidente isolado.

Note-se que **isto é bem menos grave que o erro equivalente da v1**: lá, o material comprimido da
Tecelã abria a peça inteira, sem a mediação de cena virar experiência sentida antes (ver achado
positivo, item 14, abaixo). Aqui, as três ocorrências estão em slides de meio (4, 6, 7), não na
capa, o que é exatamente o uso que a própria nota de recalibração da peça permite ("frase pronta e
conexão inusitada são material de fechamento ou meio... nunca abertura sem transformação"). O
problema não é a posição, é que a "compressão" nesses três pontos não aconteceu de fato: o texto
só encurtou a pontuação da frase da Tecelã, não a reescreveu com palavras novas.

**Proposta de reescrita (uma linha por caso, o copywriter decide a versão final):**
- Slide 7: "Todo mês, a fila ganha um número novo e público." (mantém o conteúdo, tira a cópia
  literal da cláusula da Tecelã).
- Slide 4: "...sem repor o quadro no mesmo ritmo em que ele foi ficando vazio," (troca "esvaziava"
  por "ficando vazio", "velocidade" por "ritmo", sem perder o sentido).
- Slide 6: "...que sobrecarrega ainda mais quem restou" (troca "aperta"/"ficou" pelo sinônimo).

### 3. Auto-duplicação verbatim entre o slide 7 e a legenda

A frase de virada do slide 7, "A MÁQUINA QUE RECONHECE O SOFRIMENTO DO PAÍS INTEIRO NUNCA
APRENDEU A RECONHECER O PRÓPRIO.", reaparece **palavra por palavra** na legenda: "A máquina que
reconhece o sofrimento do país inteiro nunca aprendeu a reconhecer o próprio." Tecnicamente não é
"duplicata entre dois slides" no sentido estrito do item 8 (a legenda não é um dos 8 slides que se
folheiam no carrossel), mas é a mesma frase de maior impacto da peça reaparecendo sem nenhuma
transformação no texto que acompanha o post. Some-se a isso que a legenda também repete, quase
literais, o trecho de abertura do slide 1 ("sem tempo de processar o que acabou de ler" ↔ "sem
tempo de processar o que acabou de ler"), a frase de fechamento do slide 3 ("o INSS nunca mediu o
custo disso pra quem faz") e o dado (já fabricado, ver achado 1) do slide 5. A legenda, como está,
é essencialmente uma colagem de frases já usadas nos slides, não um texto próprio. Não é
bloqueante do mesmo peso do achado 1, mas headline demais reaproveitada sem reescrita nenhuma pesa
no mesmo critério do achado 2 (repetição sem transformação) e deveria ser reescrita com palavras
diferentes das dos slides, mantendo a mesma ideia.

### 4. Slide 8 carrega dois momentos de impacto, não um

O próprio copywriter já sinalizou a tensão no arquivo ("se o Crítico de Conteúdo achar isso
insuficiente, é o primeiro ponto que reviso"), então registro aqui como achado, não como
descoberta surpresa. O slide 8 tem **dois** elementos em amarelo/destaque disputando o mesmo
momento de leitura: o número "1.871" (com negrito) e a pergunta final "QUE OUTRO SERVIÇO... NUNCA
MEDIU O PRÓPRIO?" (com sublinhado). Isso é o modelo M6 (número gigante) fundido com o modelo de
"pergunta + CTA" que, na peça de referência (`anatomia-do-carrossel-aprovado.md`), é **slide
dedicado e separado** (lá, o número gigante é o slide 7 e a pergunta+CTA é o slide 8, dois slides
distintos). Aqui os dois viraram um só, e o critério "uma frase de impacto por slide, nunca duas"
falha: são dois murros no mesmo slide, mesmo que sequenciais (primeiro o dado, depois a
proposição). Ver Lei 5 de `modelos-slide-paaps.md` ("nunca dois pesos iguais") e a régua de 10
pontos deste crítico.

**Proposta:** separar em dois slides (9 no total), ou cortar um dos dois destaques de cor,
deixando o outro em texto normal sem amarelo/sublinhado. Decisão do copywriter.

---

## O que já está bom

- **Item 14 (o achado mais importante da recalibração de hoje): passou.** A mediação 3 da Tecelã
  ("ler todos os dias o relato documentado do sofrimento alheio, sem tempo de processamento nem
  suporte coletivo") está, de fato, encarnada em cena concreta na capa (slide 1): uma servidora
  abrindo processo atrás de processo, decidindo se o sofrimento de um desconhecido é real, sem
  tempo de processar o que acabou de ler, sem ninguém pra dividir isso. A acusação institucional
  ("O INSS NUNCA MEDIU...") só chega no slide 3, depois que a vivência já foi sentida. É
  exatamente o erro que fez a Mallu reprovar a v1 já montada, e aqui está corrigido com uma cena
  boa, específica, que qualquer leitor sente sem precisar de contexto prévio algum.
- A duplicata "a fila tem número público" que se repetia nos slides 1 e 7 da v1 **não se repete
  mais**: aparece uma vez só, no slide 7, exatamente como o copywriter se propôs a corrigir (mesmo
  que, como registrado no achado 2, a frase em si ainda seja cópia quase literal da mediação, o
  problema específico de duplicação interna da v1 foi resolvido).
- A capa carrega uma tese só (item 7), sem duas ideias competindo pelo mesmo espaço.
- A citação do slide 2 (Miucha Cicaroni) é uma voz humana real, nomeada, atribuída, com fonte
  rastreável, e eu confirmei que bate com a reportagem original: nome, idade, cidade, cargo, datas
  de burnout e denúncia ao MPT todos conferem.
- A estrutura "não é X, é Y" aparece uma vez só na peça inteira (slide 3), dentro do limite de
  4.1, com um X plausível (a crença real de que ler sofrimento documentado o dia inteiro é
  "estresse genérico de qualquer emprego").
- NR-1 não aparece nenhuma vez, coerente com o guardrail da própria Tecelã pra esta peça. Zero
  travessão, zero vocabulário coachesco, nenhum cliente/case da PAAPS nomeado.
- Nenhum pronome saiu órfão de forma confusa: "ela"/"dela" (slides 1-3) e "a fila" (slides 5-7)
  seguem um mesmo personagem/objeto ao longo de slides adjacentes, técnica narrativa já usada e
  aprovada na peça de referência ("elas" segue coeso do slide 2 ao 6 de "De quem é esse
  trabalho"). Não tratei isso como violação do item 3: a leitura de carrossel é sequencial por
  natureza, e a distância é sempre de 1-2 slides, nunca um salto que exige memória de contexto
  externo à peça.

## Potencializações (opcional, nunca bloqueante)

- O slide 6 ("...e o círculo se fecha sozinho") é uma boa síntese, mas "sozinho" carrega um risco
  pequeno de sugerir mecanismo sem agente (o oposto do que a peça faz bem em outros pontos, ao
  nomear o INSS como sujeito). Não é vazio de agência no sentido do item 12 (o parágrafo inteiro já
  descreve o mecanismo causal com clareza), mas vale considerar "e o círculo se fecha por conta
  própria, sem ninguém decidir parar" ou equivalente, se o copywriter achar que reforça o
  argumento.
- A pergunta final do slide 8 ("QUE OUTRO SERVIÇO, NA SUA REDE, TAMBÉM LÊ O SOFRIMENTO ALHEIO TODO
  DIA E NUNCA MEDIU O PRÓPRIO?") é boa e generaliza bem o diagnóstico. Se o slide 8 for
  desmembrado em dois (achado 4), ela ganha ainda mais força sozinha, sem competir com o número.

---

## Checagem mecânica (registro bruto)

Comando: `python3 conteudo/templates/carrossel-paaps/checa-duplicata-texto.py
conteudo/ciclos/2026-09-02/copy-peca1-inss-v2.md conteudo/ciclos/2026-09-02/tecela-peca1-inss.md`

O script aponta 55 sequências "entre slides" e 33 contra a Tecelã. A maioria das 55 é ruído do
próprio formato do documento de handoff (rótulos "Modelo:", "Destaque:", "Crédito da foto: idem
regra geral.", citação de fonte repetida no rodapé de cada slide de dado, texto de instrução de
foto) e da Legenda/Referências/Notas sendo lidas pelo script como parte do bloco "Slide 8" (o
script corta por `### Slide`, e tudo depois do último cabeçalho até o fim do arquivo cai no mesmo
balde). Filtrei manualmente linha por linha; os achados reais de conteúdo estão nos itens 2 e 3
acima. Das 33 contra a Tecelã, a maioria é sobreposição inevitável de dado numérico e do título do
artigo citado (esperado, correto citar título de reportagem igual); os três achados reais
(linguagem analítica reaproveitada) estão no item 2.

## Verificação de fonte externa (achado 1)

Busquei o texto publicado no endereço citado nas Referências do copy
(`https://apublica.org/2026/03/inss-perdeu-56-dos-servidores-e-lida-com-onda-de-burnout-enquanto-fila-de-pedidos-explode/`)
e confirmei manualmente, por busca de texto, a ausência de "1,08 milhão", "3,1 milhões", "triplic"
e "dezembro de 2022" no corpo do artigo, e a presença confirmada de "56%", "24 mil postos", "8,5
mil novos trabalhadores", "1.871 servidores... entre 2024 e 2025" e da citação de Miucha Cicaroni.
