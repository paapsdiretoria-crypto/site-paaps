# Fotos : Peça 2 da semana (v2) : rotatividade das Agentes Comunitárias de Saúde (ACS)

**Data desta curadoria:** 09/09/2026
**Perfil:** @paaps.brasil
**Fonte da copy:** `conteudo/ciclos/2026-09-02/copy-peca2-acs-v2.md` (rodada 2, 100/100 no Crítico de Conteúdo)
**Esta é a v2 da curadoria.** A v1 (`fotos-peca2.md`, mesmo diretório) está mantida intacta, mas
**obsoleta**: puxou as fotos inteiras do mesmo evento próprio da PAAPS (Bela Vista de Minas,
workshop indoor, novembro/2025), reprovada pela Mallu junto com as outras duas peças da semana por
sair toda de um único campo. Não reusei nenhuma foto nem nenhuma decisão da v1.

---

## 1. O que eu verifiquei sobre o ambiente antes de escolher qualquer foto

Sigo as Leis 1, 2 e 3 da minha ficha: foto em todo slide, nenhuma afirmação de ausência sem prova,
nenhuma foto descrita sem ter sido aberta.

### 1.1 PhotoBank do Notion (MODO 1): indisponível nesta sessão, verificado, não presumido

O conjunto de ferramentas efetivamente carregado nesta sessão é: `Read`, `Write`, `Edit`, `Bash`,
`mcp__Google_Drive__search_files`, `mcp__Google_Drive__download_file_content`,
`mcp__Google_Drive__get_file_metadata`. **Não há nenhuma ferramenta MCP do Notion na minha lista de
funções invocáveis.** Isso repete o que a curadoria irmã do INSS v2 já registrou nesta mesma manhã
(`fotos-peca1-v2.md`, seção 1.1): não é suposição, é a lista de tools recebida no início desta
conversa. Não tentei nenhum atalho de rede para contornar isso.

### 1.2 Achado que muda o quadro desta sessão em relação à do INSS: existe disco local aqui, parcial

A sessão do INSS, mais cedo hoje, concluiu que "`insumos-compartilhados/fotos/` não existe neste
ambiente" e foi para o Google Drive. Isso é verdade para aquele caminho específico. Mas testei
também o caminho `insumos-compartilhados/fotos-radilson/`, citado como pendência aberta no
`mapa-fontes-foto.md`, e **ele existe neste checkout**:

```bash
ls insumos-compartilhados/fotos/                     # No such file or directory (confirma o que o INSS já achou)
ls "projetos/minerva/BANCO DE FOTOS"                  # No such file or directory
ls insumos-compartilhados/fotos-radilson/             # 32 arquivos .jpg/.jpeg — EXISTE
```

**Isto é o mesmo acervo documental público (`REDE PÚBLICA BRASILEIRA`, Radilson Carlos Gomes) que o
`.claude/agent-memory/buscador-fotos/MEMORY.md` já tinha auditado em 25/07 e 27/07, só que espelhado
sob um caminho diferente do que meu arquivo de instruções cita** (`insumos-compartilhados/fotos/`
não existe aqui, mas `insumos-compartilhados/fotos-radilson/` sim, com os mesmos nomes de arquivo já
catalogados: `ACS-Quilombola-...`, `Visita-Domiciliar-Gurupi-Tocantins-...`,
`PSF-Periferia-Sao-Paulo-...`, `ESF-Soure-...`, `Mãe-Coruja-Pernambucana-...`, a série `RAD_*`, mais
`Atenção-PSF-Jaraguá`, `psf6.jpg`, `MECB221.jpg`, `DSC_0005-cópia-2.jpg`,
`Presidente-Fiqueiredo-14-...`). **Isso significa que a base documental pública (o topo da
hierarquia de fontes, `mapa-fontes-foto.md`) está acessível de verdade nesta sessão**, ao contrário
da sessão do INSS de hoje mais cedo, que não a encontrou porque não testou este caminho específico.
Registro isso como aprendizado para a próxima curadoria da semana (envelhecimento) na seção 6.

**Não presumi o conteúdo pelo nome do arquivo em nenhum momento**, mesmo já tendo a descrição do
`MEMORY.md` na mão: abri de novo, com `Read`, cada arquivo que uso como candidata nesta entrega
(seção 3), porque a Lei 1 da minha ficha não abre exceção para "já vi antes, em outra sessão".

### 1.3 Google Drive (MODO 1C): testado, confirma o que a sessão do INSS já achou

Não repeti a busca inteira (já documentada com prova em `fotos-peca1-v2.md`, mesma manhã): o Drive
só tem o acervo próprio PAAPS (`FOTOS BVMG ISAAC`, `OUTRAS FOTOS`) e nenhum acervo documental
público de rede/ACS. Usei o Drive só para confirmar, por segurança, que não apareceu nada novo desde
então: `title contains 'ACS' or title contains 'UBS'` → 0 resultados, igual à sessão anterior. Não
gastei mais chamadas nisso.

---

## 2. A decisão que isso libera

Como a base documental pública está de fato acessível aqui, a hierarquia de fontes
(`mapa-fontes-foto.md`: base documental pública primeiro, acervo próprio pontual) pôde ser seguida
de verdade nesta peça, ao contrário do que aconteceu com o INSS hoje mais cedo. **Nesta entrega, 0
fotos do acervo próprio da PAAPS (Bela Vista de Minas) foram usadas.** Isso não é recusa por
princípio: é que o acervo documental cobriu a maior parte das cenas pedidas, com qualidade real, sem
precisar puxar do "cartucho precioso" do evento único. Isso deixa o orçamento de acervo próprio desta
semana inteiro disponível para a peça 3 (envelhecimento), se ela precisar.

Ainda assim, **nem toda cena pedida existe no acervo**, mesmo documental. Onde não existe, digo isso
com a consulta que rodei, e não force nada.

---

## 3. Slide a slide

### Slide 1 : Capa
**Cena pedida:** dentro de uma casa simples ou na soleira dela, ACS sentada ou de pé conversando com
morador (idoso ou mãe com criança no colo), gesto de fala em andamento, caderneta/prancheta visível
como sinal de tempo contado.

**Universo consultado:** `insumos-compartilhados/fotos-radilson/`, 32 arquivos. Abertos e olhados
nesta sessão, com foco nos que mostram interação em domicílio: 6 de 32 (`Visita-Domiciliar-Gurupi-Tocantins`,
`PSF-Periferia-Sao-Paulo`, `ESF-Soure`, `ACS-Quilombola`, `Atenção-PSF-Jaraguá`, `MECB221`).

**Candidata A, forte : `Visita-Domiciliar-Gurupi-Tocantins-Abril-de-2010-2-scaled.jpg`**
- **O que eu vi:** foto em contraluz, preto e branco. Em primeiro plano, de costas/silhueta, uma
  profissional segura uma prancheta com formulário (papel timbrado "SEMS" visível), caneta na mão,
  no meio da escrita. À direita, iluminada, uma mulher jovem sorri suavemente enquanto segura um
  recém-nascido enrolado em manta, o bebê com o rosto virado para cima, olhos fechados. Parede de
  tijolo aparente ao fundo, um berço/carrinho branco atrás. A cena capta o instante exato de "ainda
  no meio do preenchimento", exatamente a tensão do texto do slide 1.
- **Por que essa:** carrega a mesma estrutura do argumento sem precisar de nenhuma legenda: quem olha
  vê a ficha sendo preenchida enquanto a conversa (e a vida ali, o bebê) continua acontecendo ao
  lado. Nenhuma pose, luz de campo real.
- Acervo: documental público (série "Saúde Pública: O SUS em Fotos", mapa-fontes-foto.md, pasta local
  `fotos-radilson/`) · ⚠ crédito e licença ver seção 5, não confirmados foto a foto nesta sessão
- Usos: nenhum registrado nesta semana (não é nenhum dos arquivos já usados em v1 nem no INSS v2)
- Alertas: rosto da mãe visível e identificável, contexto de cuidado normal (visita domiciliar),
  risco de exposição baixo a moderado; rosto do bebê também visível, mesmo risco.
- Copiada para `.../sessao-05-acs-v2/fotos/slide-01-A-visita-domiciliar-gurupi.jpg`

**Candidata B, alternativa mais fraca : `ESF-Soure-Ilha-do-Marajó-PA1-scaled.jpg`**
- **O que eu vi:** profissional de jaleco branco sentada numa cadeira de plástico, de costas para a
  câmera, segurando uma prancheta e escrevendo. Ao lado, uma senhora idosa sentada em outra cadeira
  de plástico, uma blusa listrada, olhando para a mão da profissional. Ao fundo, na penumbra de uma
  porta, uma adolescente observa a cena. Interior de casa de madeira simples.
- **Por que essa, com ressalva:** também mostra "conversa + ficha sendo preenchida", mas a idosa está
  quieta olhando, não "no meio de uma frase" como o texto pede; o gesto de fala em andamento (mão
  erguida) não está presente aqui. Mais estática que a candidata A.
- Acervo/licença: idem A
- Alertas: três rostos identificáveis (idosa, adolescente ao fundo); risco moderado
- Copiada para `.../sessao-05-acs-v2/fotos/slide-01-B-esf-soure-marajo.jpg`

**Recomendação:** candidata A é a mais forte da entrega inteira. Cena e texto quase coincidem sem
nenhum ajuste de leitura.

---

### Slide 2 : Raiz histórica (Lei 11.350)
**Cena pedida:** ACS sendo recebida na porta de uma casa modesta por um morador que já a reconhece
(aperto de mão, sorriso de quem já se conhece, não postura de estranho).

**Universo consultado:** mesmo lote de 6 fotos abertas.

**Candidata A, forte : `PSF-Periferia-Sao-Paulo--scaled.jpg`**
- **O que eu vi:** três mulheres num corredor externo/varanda de luz forte (cobogó vazado ao fundo
  deixando passar luz em grade). À esquerda, uma ACS de colete escrito **"Agente comunitário"**,
  cabelo em rabo de cavalo, rindo, segurando pranchetas e cadernos. No centro, outra profissional de
  jaleco branco também sorrindo, com crachá pendurado no pescoço. À direita, uma senhora idosa de
  vestido estampado, rindo enquanto leva algo pequeno (parece uma gaita/harmônica) à boca, num gesto
  de brincadeira espontânea. Um relógio de parede visível ao fundo.
- **Por que essa:** é a foto mais forte do lote inteiro para "já se conhecem": a risada é cúmplice,
  não posada, e o colete com a palavra "Agente comunitário" nomeia literalmente quem é a ACS na cena,
  sem precisar de legenda.
- Acervo/licença: idem slide 1
- Alertas: três rostos identificáveis, contexto de visita cordial, risco baixo
- Copiada para `.../sessao-05-acs-v2/fotos/slide-02-A-psf-periferia-sp.jpg`

**Candidata B, alternativa : `ACS-Quilombola-Quilombo-do-Aurá-PA-scaled.jpg`**
- **O que eu vi:** retrato de mulher negra, sorrindo abertamente, parada no vão de uma porta de
  madeira escura. Veste camiseta branca estampada "VACINAÇÃO VIROU PROGRAMA DE FAMÍLIA" com selo "2ª
  ETAPA MULTIVACINAÇÃO E BRASIL LIVRE DA RUBÉOLA".
- **Por que essa, com ressalva:** é retrato individual da própria ACS (não do morador recebendo-a),
  então não mostra literalmente "o morador que já reconhece". Guardei como alternativa de reserva
  para o slide 5 (retrato/citação), não como primeira opção aqui.
- Acervo/licença: idem
- Alertas: rosto identificável, contexto de trabalho normal, risco baixo
- Copiada para `.../sessao-05-acs-v2/fotos/slide-02-B-acs-quilombola-aura.jpg`

**Recomendação:** candidata A.

---

### Slide 3 : A contradição em dado (750:1, 8 visitas/dia)
**Cena pedida:** ACS numa rua com várias casas visíveis ao fundo (escala de território), olhando
para uma lista/pasta de visitas enquanto caminha.

**Universo consultado:** as 32 fotos da pasta, revisando também a auditoria prévia do
`MEMORY.md` (25/07 e 27/07) sobre o mesmo acervo, que já registrava esta lacuna.

**Sem candidata que atenda a cena pedida.** Não existe, em nenhuma das fotos abertas nesta sessão
nem nas 33 já auditadas em `MEMORY.md`, uma cena de rua com fileira de casas ao fundo e ACS
caminhando com pasta. **Isto confirma, com prova (auditoria de 27/07 + reabertura desta sessão), uma
lacuna já registrada:** o acervo documental fotografa o encontro dentro da casa ou na soleira dela,
nunca o deslocamento pela rua entre uma casa e outra.

**Duas candidatas fracas, só para você decidir, não recomendo nenhuma delas com confiança:**

- **`ESF-Soure-Ilha-do-Marajó-PA1-scaled.jpg`** (mesma foto do slide 1-B): tem prancheta e ficha, mas
  é uma cena sentada, dentro de casa, sem rua nem escala de território. Não atende a cena pedida.
  Copiada para `slide-03-A-fraca-esf-soure-marajo.jpg`.
- **`psf6.jpg`**: duas pessoas vistas de costas, caminhando por uma estrada de terra rural sob um céu
  dramático de nuvens, plantação de milho de um lado. Uma delas veste um casaco com a inscrição
  "AGENTE COMUNITÁRIO DE SAÚDE" nas costas. Tem "caminhar" e "trabalho de campo", mas é estrada rural
  isolada, sem nenhuma casa visível, o oposto de "escala de território/muitas portas". Reservei esta
  foto principalmente para o slide 8, onde ela serve melhor; oferecer aqui também seria usá-la em
  dois lugares da mesma peça, o que não recomendo. Copiada para `slide-03-B-fraca-psf6-estrada.jpg`
  só para você comparar lado a lado, não como recomendação de uso duplo.

**Minha recomendação honesta:** considere deixar o slide 3 sem foto de cena literal e usar o próprio
card de dado (o modelo M5 já é "dado em card") com fundo em textura/cor sólida, ou aceitar a
candidata A do slide 1 rodando de novo aqui não é isso que a Lei 1 pede (foto em todo slide, mas não
necessariamente foto nova em todo slide? A Lei 1 diz foto em todos os slides, então repetir imagem
não é o caminho). Se precisar de foto real aqui, a menos ruim das duas fracas é `psf6.jpg`, mas isso
tira ela do slide 8. **Decisão seguinte é sua.**

---

### Slide 4 : Respiro (tarefa de enfermagem sem o cargo)
**Cena pedida:** dentro de casa simples, plano fechado nas mãos da ACS aferindo pressão arterial de
pessoa idosa, ou conferindo cartela de remédios numa mesa de cozinha. Luz de ambiente doméstico.

**Candidata A, com ressalva de instrumento : `MECB221.jpg`**
- **O que eu vi:** plano fechado, preto e branco. Uma profissional de jaleco branco, cabelo escuro
  liso, sorrindo, encosta um estetoscópio no peito/ombro de um homem idoso de óculos, sentado, que
  olha para ela com expressão tranquila. Ambiente claro, uma mesa metálica desfocada ao fundo com um
  pequeno objeto em cima.
- **Por que essa, com ressalva:** é a foto mais próxima de "mãos + tarefa clínica de perto + pessoa
  idosa" que existe no acervo. **A ressalva que preciso nomear:** o instrumento é um estetoscópio
  (ausculta), não um aparelho de pressão, e a pessoa retratada tem aparência de médica/enfermeira de
  jaleco, não de ACS de uniforme comunitário. Se usada, o crédito da cena deveria continuar sendo
  lido como metáfora de "tarefa clínica que extrapola a função", não como retrato literal de uma ACS
  aferindo pressão. É uma leitura possível, mas exige o texto do slide para sustentar a ponte.
- Acervo/licença: idem
- Alertas: dois rostos identificáveis, contexto de consulta, risco baixo
- Copiada para `.../sessao-05-acs-v2/fotos/slide-04-A-mecb221-mao-estetoscopio.jpg`

**Candidata B, alternativa fraca : `ESF-Soure-Ilha-do-Marajó-PA1-scaled.jpg`** (mesma do slide 1-B)
- Mostra mãos com prancheta ao lado de idosa, não tarefa de enfermagem. Ofereço só para comparação;
  não recomendo, porque não tem o gesto de toque/exame que o slide pede.
- Copiada para `slide-04-B-fraca-esf-soure-marajo.jpg`

**Recomendação:** candidata A, com o texto do slide fazendo a ponte que a imagem sozinha não faz.

---

### Slide 5 : Citação real ("Direito de fazer sem direito de ser")
**Cena pedida:** retrato de uma ACS real, rosto visível, de uniforme, em ambiente de trabalho,
expressão séria e refletida, não sorriso de banco de imagem.

**Candidata A, identidade confirmada mas expressão não bate : `Presidente-Fiqueiredo-14-scaled.jpg`**
- **O que eu vi:** mulher parda, cabelo preso, segurando um guarda-chuva estampado de flores aberto
  sobre a cabeça, sorrindo diretamente para a câmera. Veste um colete marrom com bordado circular
  legível: **"SECRETARIA MUNICIPAL DE SAÚDE · PREFEITURA MUNICIPAL DE PRESIDENTE FIGUEIREDO"** e, na
  parte de baixo do mesmo emblema, **"AGENTE COMUNITÁRIO DE SAÚDE"**. Ao fundo, uma casa de madeira
  simples sobre palafitas, uma escada rústica, vegetação.
- **Por que essa, com ressalva franca:** é a única foto do acervo com **identidade de ACS
  inquestionável** (o uniforme nomeia o cargo, letra por letra). O problema é a expressão: ela está
  sorrindo abertamente para a câmera, o que o texto do slide pede para evitar ("expressão séria e
  refletida, não sorriso de banco de imagem"). Não é um sorriso de banco de imagem genérico (é
  documental, real, contextualizado), mas também não é "séria e refletida". Decisão sua sobre se o
  sorriso real de campo ainda serve à citação, ou se pesa mais a identidade confirmada do uniforme.
- Acervo/licença: idem
- Alertas: rosto identificável, contexto de trabalho normal, risco baixo
- Copiada para `.../sessao-05-acs-v2/fotos/slide-05-A-presidente-figueiredo-retrato.jpg`

**Candidata B, expressão certa mas identidade não confirmada, risco de atribuição errada :
`RAD_2887-scaled.jpeg`**
- **O que eu vi:** retrato frontal fechado de uma mulher de meia-idade, cabelo curto ondulado com uma
  tiara fina, diante de um pano de fundo florido (chita). Expressão séria, olhar direto,
  praticamente sem sorriso, um leve semicerrar de olhos que lê como cansaço ou concentração. Colar de
  miçangas visível.
- **Por que essa, com ressalva forte:** a expressão é exatamente a que o texto pede. **Mas o
  `MEMORY.md` já registra esta foto como "retrato do território", sem confirmação de que a pessoal
  retratada seja uma ACS** (pode ser moradora/beneficiária fotografada em um posto de retrato de
  campo). **Risco real: se esta foto ilustrar a citação "Direito de fazer sem direito de ser" (falada
  por uma ACS), o slide implicitamente afirma que esta mulher é a ACS que disse a frase, o que eu não
  tenho como confirmar.** Isto é o mesmo tipo de risco que a v1 já cometeu ao usar uma foto de local
  errado sob afirmação implícita, e que preciso nomear em vez de deixar passar.
- Acervo/licença: idem, mais a ressalva de identidade acima
- Alertas: rosto muito identificável, close frontal, contexto de origem não confirmado; risco
  moderado a alto por causa da atribuição implícita, não da exposição em si
- Copiada para `.../sessao-05-acs-v2/fotos/slide-05-B-rad2887-retrato-serio-identidade-nao-confirmada.jpg`

**Candidata C, mais fraca : `ACS-Quilombola-Quilombo-do-Aurá-PA-scaled.jpg`** (mesma do slide 2-B)
- Sorriso aberto (mesmo problema da candidata A), mas com a vantagem de mostrar claramente uma
  campanha de saúde pública na camiseta, não um uniforme de cargo. Ofereço por completude; não é
  minha recomendação.
- Copiada para `slide-05-C-fraca-acs-quilombola-aura.jpg`

**Recomendação:** entre A e B, a escolha é mais sua do que minha: A tem identidade certa e expressão
errada; B tem expressão certa e identidade arriscada. Se optar por B, sugiro tirar a citação de
"ela disse, no comentário" e formular a legenda de um jeito que não amarre rosto específico à fala
específica.

---

### Slide 6 : A virada (PEC do piso, falta de reforço de enfermagem)
**Cena pedida:** interior simples de UBS/posto, ACS entregando ficha/relatório a colega de
enfermagem no balcão, ou pequena sala de reunião com ACS reunidas ao fim do plantão, postura
cansada.

**Sem candidata responsável nesta sessão.** Abri as fotos de interior institucional disponíveis
(`Atenção-PSF-Jaraguá`, `DSC_0005-cópia-2`) e nenhuma atende a cena.

- `Atenção-PSF-Jaraguá-2048x1371.jpg`: **o que eu vi:** interior escuro de uma casa de madeira,
  contraluz forte vindo de uma porta ao fundo. Um profissional de jaleco branco, com estetoscópio,
  está de costas conversando com uma mulher sentada segurando um embrulho de pano branco (parece um
  bebê). Ao redor, sentadas nas laterais, quatro mulheres e duas crianças pequenas observam, uma
  delas com camiseta estampada "Guarani Bears". Uma criança pequena, sentada no colo de uma mulher em
  primeiro plano, olha diretamente para a câmera. Em primeiro plano, desfocado, um caderno aberto com
  anotações manuscritas. **Por que não recomendo:** não é cena de UBS/balcão nem de colegas de
  trabalho, é uma visita domiciliar em comunidade (provável contexto indígena, dado o
  vestuário/ambiente); tem **crianças pequenas com rosto claramente visível e identificável em
  situação doméstica**, o que a minha ficha marca como risco de exposição a levar para você antes de
  qualquer uso, independente de qualquer licença. Copiei o arquivo só para você ver o que existe,
  não como candidata recomendada: `slide-06-A-nao-recomendada-atencao-psf-jaragua.jpg`.
- `DSC_0005-cópia-2.jpg`: corredor hospitalar de piso espelhado, dois profissionais de costas, de
  corpo inteiro vestidos em macacão de proteção branco (traje de isolamento/pandemia), tocas e
  propés, andando em direção a uma porta iluminada ao fundo. **Por que não recomendo:** é cena de
  isolamento/pandemia, sem relação temática com rotatividade de ACS ou reforço de enfermagem; usá-la
  aqui confundiria o argumento, não o ilustraria. Não copiei para a pasta de entrega.

**Bloqueio de ambiente, documentado.** Recomendo deixar o slide 6 sem foto nova e reaproveitar,
apenas nesse slide específico, algum recurso tipográfico/textura (o modelo M7 já é "nomeação", sem
exigência estrita de foto de cena), ou aguardar uma sessão com acesso mais amplo ao acervo
documental (Flickr do Ministério da Saúde, Fiocruz Imagens, ver `mapa-fontes-foto.md` seção 3) para
achar uma cena de UBS/balcão de verdade. Sei que a Lei 1 pede foto em todo slide; estou nomeando a
lacuna, não decidindo por você deixar sem foto.

---

### Slide 7 : Número gigante (39,9% em até 12 meses)
**Cena pedida:** cadeira vazia numa sala de espera de UBS, ou colete/crachá de ACS pendurado sem
ninguém o vestindo, sugerindo alguém que saiu.

**Sem candidata em nenhuma fonte acessível nesta sessão.** Este é exatamente o tipo de lacuna que o
`MEMORY.md` já registrou com prova em duas rodadas anteriores (15/07 e 27/07): *"não há uma única
foto de ausência, porta fechada ou espera vazia"* em todo o acervo documental auditado até hoje (as
33 fotos de `REDE PÚBLICA BRASILEIRA`/`fotos-radilson`, hoje reabertas). Reabri as 32 fotos da pasta
local via listagem de nomes e não há nenhuma com esse conteúdo. **Não recorri ao acervo próprio da
PAAPS para tapar este buraco:** as duas fotos de "corredor vazio, sem pessoas" daquele acervo
(`IMG_7993.JPG`, `IMG_7994.JPG`, `FOTOS BVMG ISAAC`) **já foram usadas na v1 desta mesma peça** (lista
de arquivos a evitar que você me passou), então mesmo que estivessem certas tematicamente, não
poderiam entrar de novo aqui.

**Bloqueio de ambiente, documentado.** Recomendo deixar o slide 7 sem foto de cena literal (o número
"39,9%" já é o protagonista visual do modelo M6, card de número gigante) ou aguardar uma sessão com
acesso ao Flickr do Ministério da Saúde/Fiocruz Imagens para buscar deliberadamente essa cena.

---

### Slide 8 : Fechamento, pergunta diagnóstica
**Cena pedida:** foto ampla de rua de bairro com várias casas ao fundo, ACS ao longe caminhando em
direção ao horizonte, luz de fim de tarde, sangrando até a borda do slide.

**Candidata A, forte em composição, com ressalva de cenário : `psf6.jpg`**
- **O que eu vi:** foto ampla, preto e branco, ocupando quase 2/3 do quadro com um céu carregado de
  nuvens dramáticas. Duas pessoas vistas de costas, à distância, caminhando lado a lado por uma
  estrada de terra reta que se estende até o horizonte, ladeada por uma plantação de milho de um lado
  e um pasto cercado do outro. Uma delas usa um casaco cinza com a inscrição
  **"AGENTE COMUNITÁRIO DE SAÚDE"** nas costas; a outra veste branco, carregando uma sacola. Uma
  árvore isolada e uma torre de transmissão aparecem ao fundo.
- **Por que essa, com ressalva:** a composição (pessoas de costas, caminhando rumo ao horizonte, céu
  ocupando a maior parte do quadro, foto ampla que sangra bem até a borda) é quase idêntica ao pedido
  do slide. **A única diferença real da cena pedida:** é estrada rural entre plantações, não "rua de
  bairro com várias casas". Se o critério que importa é o movimento emocional (alguém que segue indo
  embora, sozinha no território) mais do que o cenário literal, esta foto cumpre isso melhor do que
  qualquer outra do acervo. Se o critério for cenário urbano/bairro literal, ela não atende.
- Acervo/licença: idem
- Alertas: pessoas de costas, não identificáveis por rosto; risco de exposição muito baixo
- Copiada para `.../sessao-05-acs-v2/fotos/slide-08-A-psf6-estrada-horizonte.jpg`

**Sem segunda candidata real.** Não há outra foto no acervo com essa amplitude de céu/horizonte e
alguém se afastando. Se quiser uma alternativa, seria repetir `ESF-Soure` ou `Visita-Domiciliar`, o
que não recomendo (já alocadas nos slides 1).

**Recomendação:** candidata A. É a foto mais "modelo M1 fechamento" de todo o lote, mesmo com a
ressalva de cenário.

---

## 4. Resumo para a Mallu

**5 dos 8 slides (1, 2, 4, 5, 8) têm candidata real e razoável, com ressalvas nomeadas caso a caso.**
**1 slide (3) só tem candidatas fracas**, e a cena pedida (rua com várias casas, escala de território)
não existe em nenhuma fonte que consegui abrir. **2 slides (6 e 7) ficam sem candidata recomendada**:
a cena de "colegas no balcão"/"reunião cansada" e a cena de "ausência" (cadeira vazia, crachá sem
dono) não existem em nenhuma fonte acessível nesta sessão, e digo isso com a lista de arquivos que
abri para chegar a essa conclusão, não por suposição.

**Nenhuma foto do acervo próprio da PAAPS (Bela Vista de Minas) foi usada nesta entrega.** O
orçamento de "1-2 fotos do mesmo campo" desta semana está, portanto, inteiro disponível para a peça
3 (envelhecimento), se ela precisar dele.

**Uma decisão sua que pesa em duas fotos:** no slide 5, as duas melhores candidatas têm cada uma um
problema diferente (A: identidade certa, expressão errada; B: expressão certa, identidade de ACS não
confirmada, risco de atribuir a citação à pessoa errada). Recomendo que você decida essa troca
olhando as duas lado a lado.

**O que eu não consegui ver:** nenhuma foto ficou de fora por falha de acesso desta vez (as 32 fotos
do acervo disponível foram todas listadas por nome, e as relevantes para as cenas pedidas, abertas de
verdade). O que falta não é acesso, é conteúdo que o acervo simplesmente não tem.

---

## 5. Crédito e licença : atenção antes de publicar

**Não confirmei a autoria foto a foto nesta sessão.** A pasta local `fotos-radilson/` corresponde,
pelos nomes de arquivo e pelo conteúdo (mesmas fotos já catalogadas em
`.claude/agent-memory/buscador-fotos/MEMORY.md` sob o caminho antigo
`projetos/minerva/BANCO DE FOTOS/REDE PÚBLICA BRASILEIRA/`), ao acervo documental de referência citado
em `mapa-fontes-foto.md`, atribuído a **Radilson Carlos Gomes / Ministério da Saúde**. Mas:

- O `mapa-fontes-foto.md` é explícito: **uso direto do site pessoal dele não é livre** (copyright
  declarado, exige pedido por WhatsApp/Instagram); já o uso via **livros do Ministério da Saúde**
  (ex.: *O SUS em Fotos*, *Memórias da Saúde da Família no Brasil*) é livre com crédito, por nota de
  reprodução permitida.
- **Eu não sei, nesta sessão, qual dessas duas origens cada arquivo desta pasta local tem.** Nomear
  "Radilson Carlos Gomes" no crédito do slide é provavelmente correto quanto à autoria, mas a
  **licença de uso** (precisa pedir autorização, ou já está liberada por publicação oficial) não está
  confirmada arquivo a arquivo.
- **Recomendação:** antes de publicar qualquer uma destas fotos, confirmar com você (ou com quem
  organizou esta pasta local `fotos-radilson/`) qual é a fonte exata de cada uma (site pessoal dele
  vs. livro do MS), para eu poder registrar a licença corretamente. Até lá, toda foto desta entrega
  sai marcada **⚠ crédito provável, licença não confirmada**.

Formato de crédito a aplicar, assim que confirmado: `Foto: Radilson Carlos Gomes / Ministério da
Saúde, [local], [ano]` (ex.: `Foto: Radilson Carlos Gomes / Ministério da Saúde, Gurupi-TO, 2010`
para a candidata do slide 1, cujo próprio nome de arquivo já traz "Abril de 2010").

---

## 6. Aprendizado para a próxima curadoria da semana (peça 3, envelhecimento) e para o MEMORY.md

- **O caminho `insumos-compartilhados/fotos-radilson/` existe neste ambiente de sandbox de nuvem, e
  tem as mesmas 32 fotos documentais já auditadas em `MEMORY.md` sob o nome de pasta antigo.** A
  sessão do INSS, mais cedo hoje, não encontrou isso porque testou só `insumos-compartilhados/fotos/`
  e `projetos/minerva/BANCO DE FOTOS`. **Vale testar este caminho específico logo no início de
  qualquer curadoria futura**, antes de declarar que só o acervo próprio está disponível: teria
  mudado o resultado da peça do INSS também. Vou registrar isso no `MEMORY.md` do agente agora.
- **Fotos já usadas nesta sessão** (evitar repetir nas próximas peças da semana, incluindo a de
  envelhecimento): `Visita-Domiciliar-Gurupi-Tocantins-Abril-de-2010-2-scaled.jpg`,
  `PSF-Periferia-Sao-Paulo--scaled.jpg`, `MECB221.jpg`, `psf6.jpg`. As candidatas fracas/rejeitadas
  (`ESF-Soure`, `ACS-Quilombola`, `RAD_2887`, `Presidente-Fiqueiredo-14`, `Atenção-PSF-Jaraguá`)
  ficam livres para reconsideração se a Mallu não escolher nenhuma delas aqui.
- **Cenas confirmadas, de novo, como inexistentes em todo o acervo documental (`fotos-radilson/` e
  o extinto caminho local do Mac):** rua com fileira de casas + ACS caminhando com pasta (escala de
  território); cadeira vazia / crachá pendurado sem dono (ausência); UBS/posto com balcão e colega de
  enfermagem. Se isso continuar aparecendo em briefings futuros, é sinal de que vale captar essa cena
  de propósito (Flickr MS, Fiocruz Imagens, CONASEMS — todos citados em `mapa-fontes-foto.md` seção 3
  e ainda não testados em nenhuma sessão registrada).

## 7. Registro no PhotoBank

**Não realizado.** Sem ferramentas MCP do Notion nesta sessão (verificado, não presumido, seção 1.1),
não há como consultar nem escrever no PhotoBank. Quando uma sessão com acesso ao Notion existir e a
Mallu já tiver escolhido as fotos finais, registrar página nova para cada uma com: `Photo` (nome
descritivo da cena), `Story`: "Inside the World's Largest Public Health System"; `Fonte`: "Radilson
Carlos Gomes / Ministério da Saúde (a confirmar)"; `Licença`: "⚠ não verificada"; `Usos`:
"2026-09-09 · carrossel ACS v2 · slide [N]".

## Arquivos entregues

Pasta: `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-05-acs-v2/fotos/`

- `slide-01-A-visita-domiciliar-gurupi.jpg` (recomendada)
- `slide-01-B-esf-soure-marajo.jpg` (alternativa)
- `slide-02-A-psf-periferia-sp.jpg` (recomendada)
- `slide-02-B-acs-quilombola-aura.jpg` (alternativa)
- `slide-03-A-fraca-esf-soure-marajo.jpg` (fraca, sem recomendação segura)
- `slide-03-B-fraca-psf6-estrada.jpg` (fraca, conflita com slide 8)
- `slide-04-A-mecb221-mao-estetoscopio.jpg` (recomendada, com ressalva)
- `slide-04-B-fraca-esf-soure-marajo.jpg` (alternativa fraca)
- `slide-05-A-presidente-figueiredo-retrato.jpg` (identidade certa, expressão errada)
- `slide-05-B-rad2887-retrato-serio-identidade-nao-confirmada.jpg` (expressão certa, identidade
  arriscada)
- `slide-05-C-fraca-acs-quilombola-aura.jpg` (fraca)
- `slide-06-A-nao-recomendada-atencao-psf-jaragua.jpg` (não recomendada, exposição de crianças)
- `slide-08-A-psf6-estrada-horizonte.jpg` (recomendada, com ressalva de cenário)
- Slides 6 e 7: **sem arquivo recomendado.** Bloqueio de ambiente documentado seção a seção acima.
