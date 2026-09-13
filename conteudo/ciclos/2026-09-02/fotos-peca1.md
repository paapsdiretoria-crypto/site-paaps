# Fotos — Peça 1 da semana: INSS, o órgão que carimba sofrimento e não vê o próprio

**Data:** 02/09/2026
**Perfil:** @paaps.brasil
**Fonte da copy:** `conteudo/ciclos/2026-09-02/copy-peca1-inss.md`

**Ambiente desta sessão:** sandbox de nuvem. Segui direto para o MODO 1C das minhas instruções
(Google Drive), porque a própria tarefa já avisou que o webhook n8n do MODO 1B dá erro de rede
nesta sessão (bloqueio de proxy) e que as ferramentas MCP do Notion podem não estar carregadas.
Não tentei nenhum dos dois antes: segui a instrução explícita de ir direto ao Drive.

**Aviso de escopo, antes de tudo (repetindo o que a própria peça já sinaliza, seção "Notas para o
Buscador de Fotos" no arquivo da copy):** o INSS é autarquia federal de Previdência. Não existe,
em nenhum acervo a que tenho acesso nesta sessão, nenhuma foto de agência do INSS, sala de
perícia, guichê, painel de senha ou fila de atendimento previdenciário. O único acervo real que
encontrei no Google Drive é o **acervo próprio da PAAPS em Bela Vista de Minas** (pasta
`FOTOS BVMG ISAAC`) e uma pasta menor de fotos avulsas (`OUTRAS FOTOS`). Isso já estava previsto
na tarefa: a estratégia combinada foi escolher, para cada slide, a melhor foto real disponível
nesse acervo que carregue sobrecarga, cansaço, ambiente institucional público ou escuta, mesmo
sem ser literalmente o INSS. **Nenhuma das 8 fotos abaixo mostra o INSS.** Todas são
identificadas, slide a slide, como escolha de segunda opção.

---

## O que eu consultei

### Google Drive — pastas verificadas

1. **`FOTOS BVMG ISAAC`** (id `1j3HMea3pwEWaz4HEuEUFFpuuYmTl0bPr`) — listada via
   `mcp__Google_Drive__search_files` (`parentId = '1j3HMea3pwEWaz4HEuEUFFpuuYmTl0bPr' and
   mimeType contains 'image/'`, 100 resultados na primeira página, há mais via `nextPageToken` que
   não precisei consultar). **Abri e olhei 20 fotos** desta pasta, via
   `mcp__Google_Drive__download_file_content` + decodificação local (`base64 -d`, arquivo grande
   demais para o retorno direto da ferramenta) + `Read`: `IMG_7925`, `IMG_7942`, `IMG_7922`,
   `IMG_7926`, `IMG_7924`, `IMG_7923`, `IMG_7857`, `IMG_7900`, `IMG_7908`, `IMG_7910`, `IMG_7846`,
   `IMG_7799`, `IMG_7802`, `IMG_7804`, `IMG_7878`, `IMG_7865`. Identifiquei **três registros
   distintos dentro da pasta**, todos do mesmo evento (workshop PAAPS em Bela Vista de Minas,
   novembro/2025):
   - Um corredor de posto de saúde real, com cilindro de oxigênio, avisos institucionais na porta
     ("AVISO AOS USUÁRIOS", cartaz sobre sintomas de câncer de próstata) — Mallu distribuindo
     panfletos de psicoterapia gratuita para servidores.
   - Uma sala de formação com TV de parede, cadeiras amarelas de escritório, paredes de ripa de
     madeira, um grupo de ~6-10 pessoas sentadas em roda, anotando com canetinhas.
   - Uma parede coberta de post-its cor-de-rosa e verde-limão (dinâmica de grupo, palavras sobre
     dificuldades e qualidades do trabalho), com pessoas lendo/apontando os post-its.

2. **`OUTRAS FOTOS`** (id `1blGmXdb0Hs2Ilnuuo6fSX7sK_urbmx6M`) — listagem completa via
   `search_files` (18 arquivos, maioria prints de tela e slides de aula). Abri 2 fotos reais:
   `falando foto 2.jpg` (Mallu falando ao microfone para um pequeno grupo, sala decorada com
   borboletas de papel, mesa com toalha vermelha) e `DSC03222-74.jpg` (cena ao ar livre, duas
   senhoras com um tecido estampado, contexto Refazenda — descartada, sem relação com o ângulo
   desta peça).

Não consultei `REDE PÚBLICA - BRASIL` nem `Case de Bela Vista de Minas` nesta rodada: já sei, de
rodadas anteriores no mesmo dia (registrado em `fotos-peca2.md` e `fotos-peca3.md`), que a
primeira é uma biblioteca de PDFs teóricos (zero fotos) e a segunda é só atalhos não resolvíveis
com as ferramentas desta sessão. Não gastei chamadas repetindo essa checagem.

### O que eu NÃO consegui ver

- O resto de `FOTOS BVMG ISAAC` além das 20 fotos abertas (a pasta tem mais de 100 arquivos
  listados na primeira página da busca, e ainda há uma segunda página).
- `Case de Bela Vista de Minas` (atalhos não resolvíveis, mesma limitação já registrada em
  `fotos-peca2.md`).
- Qualquer acervo de ambiente institucional federal (INSS, agência de previdência): **não existe
  nesta sessão**. Consulta: as duas pastas do Drive listadas acima, 22 fotos abertas no total.
  Nenhuma mostra prédio, guichê, sala de perícia ou fila de previdência.
- O PhotoBank do Notion: não tentei acessar ferramentas MCP do Notion nesta rodada, porque a
  própria tarefa já avisou que podem não estar carregadas. Não posso afirmar se estavam ou não —
  segui a instrução de pular direto ao MODO 1C.

---

## Slide a slide

### Slide 1 — Capa
**Cena pedida:** sala de espera ou corredor de agência do INSS, cadeiras plásticas ocupadas,
painel eletrônico de senha com número alto, luz de manhã.

**Não encontrei candidata real que atenda a cena pedida.** Consulta: 20 fotos abertas em
`FOTOS BVMG ISAAC`, 2 em `OUTRAS FOTOS`. Nenhuma mostra painel de senha, cadeira plástica de
espera ou prédio de autarquia federal.

**Escolha de segunda opção:**

- **`IMG_7926.JPG`** (`FOTOS BVMG ISAAC`, id `10aZ1DK5HbFeUNlC2pkEQ9xpbn1nuOEOm`)
  - **O que eu vi:** corredor de posto de saúde real, piso de cerâmica clara. Em primeiro plano,
    um cilindro de oxigênio verde com manômetro. Uma porta branca aberta, com dois avisos
    institucionais colados: um adesivo azul "FIQUE ATENTO AOS SINTOMAS DO CÂNCER DE PRÓSTATA" e
    um informativo emoldurado "AVISO AOS USUÁRIOS" com texto pequeno. Uma mulher de cabelo escuro
    comprido, blusa branca alça, tatuagem no braço, olhos fechados, sorrindo, segura um panfleto
    amarelo com QR code. Atrás dela, parcialmente visível, outra mulher de pele escura, blusa
    preta, olhando para a cena.
  - **Por que essa, como segunda opção:** é a foto, entre as que abri, com **mais sinais reais de
    ambiente de atendimento público** (avisos institucionais oficiais, cilindro de oxigênio,
    corredor de circulação de posto de saúde) — carrega a textura de "prédio público que atende
    gente" que a cena pede. **Não atende a cena pedida**: não é o INSS, não há painel de senha,
    não há fila visível, é corredor de posto de saúde municipal (Bela Vista de Minas), com uma
    pessoa distribuindo panfletos, não uma cena de espera.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada (sem Notion nesta
    sessão para checar o campo `Licença` do PhotoBank)
  - Usos: não registrado (sem acesso ao Notion nesta sessão)
  - Alertas: ⚠ risco de exposição comum — rosto identificável da pessoa em primeiro plano
    (reconhecível como Mallu Vasconcellos, porta-voz pública do PAAPS, contexto institucional
    normal, não de vulnerabilidade) e de uma segunda pessoa parcialmente visível ao fundo. Risco
    baixo.
  - Copiada para `.../sessao-01/fotos/slide-01.jpg`

### Slide 2 — Raiz histórica
**Cena pedida:** posto de atendimento com vários guichês fechados/vazios ao lado de um único
guichê aberto, cadeiras vazias atrás do balcão, luz apagada num dos postos — sinal visual de
esvaziamento do quadro.

**Não encontrei candidata real que atenda a cena pedida.** Mesma base de busca.

**Escolha de segunda opção:**

- **`IMG_7878.JPG`** (`FOTOS BVMG ISAAC`, id `1ZRu6RmKU2zkbPokIIRqev_QFgXwFT_Ic`)
  - **O que eu vi:** parede clara de sala institucional, com post-its verde-limão e rosa
    espalhados de forma esparsa (bem menos densos que em outras fotos da mesma dinâmica), um deles
    isolado com a letra "P". Em primeiro plano, um homem visto de costas, cabelo curto escuro,
    camisa jeans azul, sozinho, olhando para cima em direção aos post-its, braço erguido como quem
    acabou de colar ou está prestes a tirar um. Ao fundo, cadeiras amarelas e pretas vazias
    encostadas, ninguém mais em quadro perto dele.
  - **Por que essa, como segunda opção:** é a foto, entre as que abri, com **mais sensação de
    esvaziamento**: uma pessoa só, de costas, cercada de espaço vazio e poucas notas espalhadas,
    cadeiras desocupadas ao fundo. Carrega estruturalmente a ideia de "sobrou pouca gente" que o
    slide pede. **Não atende a cena pedida**: não é posto de atendimento, não há guichê nem
    balcão, é sala de workshop com post-its.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada
  - Usos: não registrado
  - Alertas: pessoa de costas, não identificável pelo rosto. Risco baixo.
  - Copiada para `.../sessao-01/fotos/slide-02.jpg`

### Slide 3 — Prova (dado em card)
**Cena pedida:** sala de espera de agência do INSS lotada, pessoas em pé por falta de assento,
painel de senha ao fundo com número alto.

**Não encontrei candidata real que atenda a cena pedida.** Mesma base.

**Escolha de segunda opção:**

- **`IMG_7799.JPG`** (`FOTOS BVMG ISAAC`, id `1z0SFiL3E-Onhc4ikmS7w_BE1BwxD3HzF`)
  - **O que eu vi:** sala institucional de teto alto, parede de ripas de madeira clara, quadros
    emoldurados pendurados à esquerda, TV grande na parede (tela escura/apagada). Em primeiro
    plano, uma mulher de cabelo escuro liso comprido, camisa jeans sem manga, vista de costas/
    perfil, cabeça baixa. Ao centro-fundo, outra mulher (rabo de cavalo loiro) sentada de costas
    numa mesa/bancada, de frente para a TV apagada. À direita, mais pessoas sentadas em cadeiras
    amarelas, segurando canetinhas coloridas (rosa, verde), anotando em cadernos — pelo menos 5
    pessoas visíveis em quadro, mais gente sugerida fora de quadro pela disposição das cadeiras.
  - **Por que essa, como segunda opção:** é a foto com **mais gente reunida num mesmo ambiente
    institucional real**, todas ocupadas/atentas, entre as que abri — carrega parcialmente a ideia
    de "sala cheia, gente esperando ou registrando algo" que o slide pede. **Não atende a cena
    pedida**: não é sala de espera de INSS, não há painel de senha nem pessoas em pé por falta de
    assento, é sala de formação com todos sentados.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada
  - Usos: não registrado
  - Alertas: rostos majoritariamente de perfil ou de costas, não identificáveis frontalmente.
    Risco baixo.
  - Copiada para `.../sessao-01/fotos/slide-03.jpg`

### Slide 4 — Voz real do campo (citação de Miucha Cicaroni)
**Cena pedida:** prioridade 1, foto real e identificável de Miucha Cicaroni (Agência Pública, mar.
2026), com crédito rastreável. Se não existir, cena documental equivalente: servidora numa mesa
de atendimento/perícia, mãos sobre teclado ou processo, rosto de perfil ou parcialmente fora de
quadro.

**Não busquei a foto real de Miucha: não tenho ferramenta de navegador nesta sessão** (o MODO 2,
busca na internet, está suspenso pela Mallu desde 25/07/2026, e mesmo se não estivesse, não haveria
como abrir a reportagem da Agência Pública aqui). Isso está registrado na copy como limitação
conhecida do Buscador. Não encontrei, no acervo do Drive, nenhuma foto de mesa de atendimento/
perícia com mãos sobre teclado ou processo.

**Escolha de segunda opção, com ressalva forte — decisão da Mallu, não minha:**

- **`falando foto 2.jpg`** (`OUTRAS FOTOS`, id `1XeF-5VMKdqibDIijBhbr6FPzdMnhjubr`)
  - **O que eu vi:** sala ampla e clara, decorada com recortes de borboletas azuis coladas na
    parede da direita, iluminação com uma faixa amarela no teto e um foco de luz azul na parede. À
    esquerda, uma mesa com toalha vermelha, laptop aberto, jarra de vidro com água e um livro; uma
    mulher de óculos e camiseta estampada em pé atrás da mesa. No centro, uma mulher de cabelo
    escuro preso, blusa rosa-terracota estampada, calça da mesma cor, segura um microfone e fala
    com as mãos em gesto explicativo — reconhecível como Mallu Vasconcellos. À direita, de costas
    para a câmera, um pequeno grupo de 3-4 mulheres ouvindo, uma delas de regata listrada rosa e
    branco.
  - **Por que essa, com ressalva:** é a única foto do acervo aberto que mostra **alguém falando e
    sendo ouvido**, o núcleo emocional do slide (uma voz real sendo dita em voz alta). **Não é
    Miucha Cicaroni, não é INSS, e não é uma cena de mesa de atendimento/perícia** — é Mallu
    discursando num evento institucional da PAAPS. Usar esta foto no slide da citação de Miucha
    corre o risco real de a leitora entender, por engano, que a pessoa fotografada é quem fala na
    citação. **Sinalizando isso explicitamente para a Mallu decidir**: se ela preferir deixar este
    slide com uma foto mais neutra (por exemplo, repetir o texto sem foto de rosto reconhecível
    associada à fala, ou usar um crop mais fechado que não mostre o rosto dela) em vez de correr
    esse risco de confusão de autoria, é escolha legítima e talvez mais prudente.
  - Acervo: fotos avulsas / evento PAAPS (não é Refazenda, não é Bela Vista de Minas
    especificamente — evento não identificado no nome do arquivo) · ⚠ licença não declarada
  - Usos: não registrado
  - Alertas: ⚠ **risco de confusão de autoria** (rosto de Mallu associado a uma citação atribuída a
    outra pessoa nomeada) — é o alerta mais importante desta entrega inteira. Rosto de Mallu é
    público e ela é porta-voz institucional, então não há risco de exposição de pessoa vulnerável,
    mas há risco editorial de a leitora pensar que é foto de Miucha.
  - Copiada para `.../sessao-01/fotos/slide-04.jpg`

### Slide 5 — O mecanismo (o círculo que se fecha sozinho)
**Cena pedida:** mesa de atendimento com pilha alta de processos/pastas físicas, servidor
desfocado ao fundo atendendo mais uma pessoa — sensação de acúmulo constante.

**Não encontrei candidata real que atenda a cena pedida.** Mesma base.

**Escolha de segunda opção:**

- **`IMG_7857.JPG`** (`FOTOS BVMG ISAAC`, id `151mNvI44G3l3Kbtf9GYQpKRLhYNReVMc`)
  - **O que eu vi:** foto em close, sem nenhuma pessoa em quadro, de uma parede branca coberta de
    post-its rosa e verde-limão escritos à mão. Leio com clareza: "estressante", "falta de
    compreensão", à direita "julgamento dos colegas", "desgasto" (em letra grande, destacada),
    "cobrança", "cansaço", "individualismo", "pouco tempo", "assumir responsabilidade", "falta de
    acolhimento", "dificuldade", "falta de apoio", "pessoas não sabem ouvir NÃO".
  - **Por que essa, como segunda opção:** é a foto que mais carrega, **em palavras reais escritas
    por servidores públicos de Bela Vista de Minas num workshop da própria PAAPS**, o vocabulário
    exato do mecanismo descrito no slide: desgaste, falta de apoio, cobrança, sobrecarga. Não é
    dramatização nem texto inventado — é registro documental de uma dinâmica real de escuta.
    **Não atende a cena pedida**: não é mesa de atendimento, não há pilha de processos nem
    servidor atendendo alguém, é textura de parede com post-its.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada
  - Usos: não registrado
  - Alertas: nenhum (sem pessoas em quadro). **Atenção de contexto:** as palavras nos post-its
    foram escritas por servidores de Bela Vista de Minas sobre o próprio trabalho deles, não sobre
    o INSS. Usar esta foto no slide não atribui a fala a ninguém nomeado (diferente do slide 4),
    então o risco de confusão é bem menor, mas ainda vale a Mallu saber a origem real da imagem.
  - Copiada para `.../sessao-01/fotos/slide-05.jpg`

### Slide 6 — Número gigante (1.871 servidores afastados)
**Cena pedida:** cadeira vazia num posto de trabalho de escritório público, mesa com computador
desligado, crachá sobre a mesa — sóbrio, sugere ausência sem dramatizar.

**Não encontrei candidata real que atenda a cena pedida.** Mesma base.

**Escolha de segunda opção:**

- **`IMG_7900.JPG`** (`FOTOS BVMG ISAAC`, id `1gp6a48-fxrUP1GWvggarKZVM0L95b5N0`)
  - **O que eu vi:** parede coberta de dezenas de post-its rosa e verde-limão (dinâmica de grupo,
    palavras de qualidades e recursos: "dedicação", "empatia", "compaixão", "humano", "gentileza
    do outro", entre outras, legíveis mas em letra pequena). Em primeiro plano, uma mulher de
    cabelo escuro longo e ondulado, vista quase inteiramente de costas, camiseta branca regata,
    parada em silêncio de frente para a parede, olhando os post-its. No canto inferior direito,
    outra pessoa de cabelo loiro preso em rabo de cavalo, também de costas, parcialmente cortada
    pela borda do quadro.
  - **Por que essa, como segunda opção:** é a foto mais **sóbria e contida** entre as do acervo —
    uma pessoa só, de costas, parada, em silêncio, sem sorriso nem gesto, olhando algo que não
    vemos por completo. Carrega o tom de "ausência sem dramatizar" que o slide pede, mesmo sem ser
    literalmente uma cadeira vazia. **Não atende a cena pedida**: não há mesa, computador, cadeira
    nem crachá.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada
  - Usos: não registrado
  - Alertas: pessoa de costas, rosto não visível. Risco baixo.
  - Copiada para `.../sessao-01/fotos/slide-06.jpg`

### Slide 7 — A virada (nomeação: "a mesma máquina que lê o laudo de um país inteiro não consegue
ler o próprio")
**Cena pedida:** mãos carimbando um documento oficial numa mesa de perícia/atendimento — o
carimbo literal, a cena mais concreta da metáfora que sustenta a peça inteira.

**Não encontrei candidata real que atenda a cena pedida.** Nenhuma foto do acervo aberto mostra
carimbo, mesa de perícia ou documento sendo processado.

**Escolha de segunda opção, a mais distante da cena pedida desta entrega inteira:**

- **`IMG_7865.JPG`** (`FOTOS BVMG ISAAC`, id `10z_TAcimS1xLMtAsvoWJNpvKOnrkxYgL`)
  - **O que eu vi:** parede coberta de post-its rosa e verde-limão em fileiras densas. Em primeiro
    plano, uma mão de mulher com esmalte azul-claro nas unhas, pulseira dourada fina no pulso,
    tocando/apontando o dedo indicador sobre um dos post-its verdes (legenda ilegível pela
    distância). No canto inferior direito, o topo da cabeça de outra pessoa de cabelo escuro,
    fora de foco.
  - **Por que essa, como segunda opção:** é a foto mais próxima, no acervo aberto, de "uma mão
    tocando um papel oficial numa superfície" — o gesto físico de mão + papel que a cena pede.
    **Não atende a cena pedida de forma nenhuma além disso**: não é carimbo, não é documento
    oficial, é uma mão tocando um post-it numa dinâmica de grupo. É a candidata mais fraca desta
    entrega, e eu sinalizo isso com clareza: se a Mallu preferir deixar este slide sem foto a usar
    uma imagem que não carrega o carimbo literal que o texto promete, é decisão dela, não minha.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada
  - Usos: não registrado
  - Alertas: mão não identificável como pessoa específica; segunda pessoa fora de foco, não
    identificável. Risco baixo.
  - Copiada para `.../sessao-01/fotos/slide-07.jpg`

### Slide 8 — Fechamento (movimento + pergunta diagnóstica)
**Cena pedida:** fachada ou entrada de uma agência do INSS ao entardecer, placa oficial visível,
ou a fila vista de longe esvaziando ao fim do expediente — sensação de tempo passando, peso
acumulado, sem ninguém em primeiro plano.

**Não encontrei candidata real que atenda a cena pedida.** Mesma base.

**Escolha de segunda opção:**

- **`IMG_7846.JPG`** (`FOTOS BVMG ISAAC`, id `1UAxXGR_UrIFwfB3_iARL-1qsYyRSwRF3`)
  - **O que eu vi:** parede de sala institucional com post-its dispostos em grade ordenada
    (diferente da disposição solta das outras fotos da mesma dinâmica): três fileiras de rosa à
    esquerda com palavras curtas ("intimidada", "minuciosa", "sonha o que faz", "paciente",
    "buscar compreensão", entre outras), e um agrupamento de verde-limão à direita ("educada",
    "gostar de ajudar", "cuidado", "compartilheiro", "humano", "determinação", um post-it isolado
    com a letra "P"). Grande área de parede vazia entre os dois blocos. Na parte inferior do
    quadro, as cabeças de três mulheres vistas de costas (uma de óculos, cabelo cacheado escuro,
    outra ao centro com cabelo liso escuro, outra à direita com brinco visível), todas olhando
    para a parede, nenhuma para a câmera.
  - **Por que essa, como segunda opção:** é a foto, entre as do acervo, com **mais espaço vazio,
    silêncio visual e composição contida** — os dois blocos de post-its parecem quase arquivados,
    a área entre eles é grande e neutra, e as pessoas em quadro estão de costas, sem protagonismo
    de rosto. Carrega parcialmente a sensação de "peso acumulado, tempo passando" que o
    fechamento pede. **Não atende a cena pedida**: não é fachada, não há prédio nem placa oficial,
    é parede de sala interna.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada
  - Usos: não registrado
  - Alertas: três pessoas de costas, nenhum rosto identificável. Risco baixo.
  - Copiada para `.../sessao-01/fotos/slide-08.jpg`

---

## Resumo para a Mallu

**Nenhuma das 8 fotos mostra o INSS ou qualquer ambiente de agência previdenciária federal.** Essa
lacuna já estava prevista na tarefa: não existe, nesta sessão de nuvem, nenhum acervo com esse
registro. As 8 fotos entregues são, sem exceção, **escolha de segunda opção**, do acervo próprio
da PAAPS em Bela Vista de Minas (mais uma foto avulsa de evento não identificado), escolhidas por
proximidade estrutural com o que cada slide pede (sobrecarga, esvaziamento, escuta, ausência,
peso), nunca por semelhança literal de cena.

**O ponto que exige decisão ativa da Mallu, não é automático:** o slide 4 usa uma foto de Mallu
falando ao microfone para ilustrar a citação de Miucha Cicaroni. Isso corre risco real de
confundir quem lê sobre de quem é a voz citada. Deixo a alternativa registrada no detalhamento do
slide 4: um crop sem rosto reconhecível, ou nenhuma foto associada diretamente à citação.

**Variação:** as 8 fotos são 8 arquivos distintos, nenhum repetido entre os slides. Vêm de três
registros diferentes dentro do mesmo evento em Bela Vista de Minas (corredor com cilindro de
oxigênio: 1 foto; sala de formação com TV: 1 foto; parede de post-its: 5 fotos; evento à parte com
microfone: 1 foto) — usei 5 fotos da mesma dinâmica de post-its porque foi, disparadamente, o
material com mais variação real de enquadramento e menos gente identificável de rosto, mas isso
significa que a peça toda carrega uma textura visual bastante parecida (paredes com post-its
coloridos) em mais da metade dos slides. Vale a Mallu olhar o conjunto fechado antes de aprovar:
pode ficar repetitivo visualmente, mesmo sem repetir arquivo.

## Arquivos entregues

- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-01.jpg`
  (`IMG_7926.JPG` — segunda opção, ver slide 1)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-02.jpg`
  (`IMG_7878.JPG` — segunda opção, ver slide 2)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-03.jpg`
  (`IMG_7799.JPG` — segunda opção, ver slide 3)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-04.jpg`
  (`falando foto 2.jpg` — segunda opção com ressalva forte, ver slide 4)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-05.jpg`
  (`IMG_7857.JPG` — segunda opção, ver slide 5)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-06.jpg`
  (`IMG_7900.JPG` — segunda opção, ver slide 6)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-07.jpg`
  (`IMG_7865.JPG` — segunda opção, a mais distante da cena pedida, ver slide 7)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/fotos/slide-08.jpg`
  (`IMG_7846.JPG` — segunda opção, ver slide 8)

**Todos os 8 slides têm arquivo de foto real nesta entrega.** Nenhuma foto repetida em mais de um
slide. Nenhuma das 8 fotos coincide com as já usadas em `fotos-peca2.md` ou `fotos-peca3.md` do
mesmo dia — conferi por nome de arquivo antes de copiar.

## Registro no PhotoBank

**Não realizado nesta rodada.** Segui a instrução da tarefa de ir direto ao MODO 1C sem tentar as
ferramentas MCP do Notion. Se a peça for aprovada para publicação, registrar manualmente no Notion
(ou em sessão futura com acesso confirmado ao MCP do Notion): as 8 imagens como novas páginas do
PhotoBank — as 7 de `FOTOS BVMG ISAAC` (Story: "PAAPS in action! Cases", Fonte: acervo PAAPS) e a
de `OUTRAS FOTOS` (`falando foto 2.jpg` — Story a definir, provavelmente "PAAPS in action! Cases"
também, Fonte: acervo PAAPS), todas com Licença `⚠ não verificada`, e o campo `Usos` de cada uma
com `2026-09-02 · carrossel "INSS - quem carimba o sofrimento" · slide 0X` (01 a 08, conforme a
tabela de arquivos entregues acima). **Marcar explicitamente todas as 8 como escolha de segunda
opção**, e o slide 4 com a ressalva adicional de risco de confusão de autoria, para que uma
revisão futura saiba que essas fotos são substituíveis por candidata melhor se um acervo
documental de previdência federal aparecer.
