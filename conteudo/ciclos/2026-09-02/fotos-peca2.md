# Fotos — Peça 2 da semana: rotatividade das Agentes Comunitárias de Saúde (ACS)

**Data:** 02/09/2026
**Perfil:** @paaps.brasil
**Fonte da copy:** `conteudo/ciclos/2026-09-02/copy-peca2-acs.md`
**Ambiente desta sessão:** sandbox de nuvem, sem Mac local (`insumos-compartilhados/fotos/` não
existe neste ambiente). Ferramentas Notion (`mcp__Notion__notion-query-data-sources`,
`mcp__Notion__notion-fetch`) **não estavam no conjunto de ferramentas desta sessão** — não pude
sequer tentar o MODO 1 (PhotoBank Notion). Fui direto ao MODO 1C do meu arquivo de instruções:
Google Drive, via `mcp__Google_Drive__search_files` e `mcp__Google_Drive__download_file_content`.
Não tentei o MODO 1B (webhook n8n) porque a instrução da tarefa já autorizava pular direto ao 1C.

**Aviso de escopo, antes de tudo:** por rodar só com Google Drive, o único acervo fotográfico real
que encontrei é o acervo próprio da PAAPS (Bela Vista de Minas). O acervo documental de rede
pública genérica (ACS/visita domiciliar/território, citado em `mapa-fontes-foto.md` e usado em
peças anteriores) **não existe no Drive**: só existe no disco local do Mac da Mallu, que não está
acessível aqui. Isso pesa contra a hierarquia de fontes do ecossistema (documental pública em
primeiro lugar, acervo próprio pontual) — não é uma escolha minha, é a lacuna deste ambiente. Estou
registrando isso como pendência de gestão, não escondendo atrás de uma foto forçada.

---

## O que eu consultei

### Google Drive — pastas verificadas

1. **`FOTOS BVMG ISAAC`** (id `1j3HMea3pwEWaz4HEuEUFFpuuYmTl0bPr`) — 208 arquivos de imagem
   listados via `mcp__Google_Drive__search_files` (`parentId = '1j3HMea3pwEWaz4HEuEUFFpuuYmTl0bPr'
   and mimeType contains 'image/'`, 2 páginas, ~102 + ~102 linhas). **Abri e olhei 15 fotos desta
   pasta** (de 208): `IMG_7721`, `IMG_7730`, `IMG_7745`, `IMG_7787`, `IMG_7852`, `IMG_7866`,
   `IMG_7912`, `IMG_7914`, `IMG_7925`, `IMG_7940`, `IMG_7993`, `IMG_7994`, espalhadas por toda a
   numeração de sequência (7721 a 8002), mais 3 fotos com legenda de conteúdo já visível no
   `contentSnippet` do próprio resultado da busca (rótulos de imagem gerados pelo Drive, que usei
   só para decidir o que abrir, nunca como descrição final). **Achado consistente em toda a
   amostra:** é a cobertura de **um único evento**, um workshop/roda de conversa indoor num prédio
   público (retratos institucionais na parede, ar-condicionado, TV, cadeiras amarelas de
   escritório), com dinâmica de post-its, uma pessoa falando com microfone e uma foto de grupo
   posada de encerramento. **Nenhuma das 15 fotos abertas mostra rua, porta, casa, visita
   domiciliar ou qualquer cena de campo.** Não há indício, nas fotos abertas nem nos títulos/
   caminho da pasta, de que o resto da pasta mude de registro: a numeração é sequencial e contínua
   (mesma sessão de câmera, mesmo dia 26-27/11/2025).

2. **`OUTRAS FOTOS`** (id `1blGmXdb0Hs2Ilnuuo6fSX7sK_urbmx6M`) — listagem completa via
   `search_files` (18 arquivos). Abri 3: `MARIA QUINZINHO.jpg` (retrato de uma senhora sorrindo
   através de uma grade — não é ACS, é provavelmente beneficiária/moradora, ⚠ alta exposição),
   `DSC03075-3.jpg` e `DSC03222-74.jpg` (ambas cenas ao ar livre sob palmeiras / cercado de bambu,
   perfil de comunidade/Refazenda, não SUS). Nenhuma serve ao ângulo de ACS.

3. **`REDE PÚBLICA - BRASIL`** (id `16ERZZlcKjIRBMggzhJ_abtj6HF686XUx`) — busquei por
   `title contains 'REDE' or title contains 'PÚBLICA' or title contains 'SUS' or title contains
   'ACS'`. **Confirmado: é uma biblioteca de PDFs teóricos** (CREPOP, RAPS/UNA-SUS, Foucault/
   Laboreal, slides de aula sobre agroecologia e psicologia comunitária), não um acervo
   fotográfico. Zero imagens fotográficas nesta pasta.

4. **`Case de Bela Vista de Minas`** (id `1PkZZ35oEi9x_PFfycZBEqhp5fc6a6QUx`) — listada via
   `search_files`. **Todo o conteúdo são atalhos (`shortcut`) para arquivos HEIC/MOV/JPG
   localizados em outro lugar do Drive** (provavelmente o álbum do celular da Mallu). Tentei abrir
   um (`IMG_2499.JPG`, id `11_H43T2boCNlXrBnA68jgKtIqH3eJR2g`) via
   `download_file_content`: **erro "Download not allowed for file id"**. Consultei os metadados
   (`get_file_metadata`): o Drive não expõe o `id` do arquivo-alvo do atalho nesta API. **Não
   consegui ver nenhuma foto desta pasta** — não é dedução por título, é limitação de ferramenta
   registrada aqui.

5. **`ECOA FOTOS`, `MÃES ATÍPICAS RJ`, `CRAFTSAPIENS (MUNDO DIGITAL)`** — não abri. Pelo próprio
   propósito declarado dessas pastas (`mapa-fontes-foto.md`: ECOA exclusivo do Interlocutor ECOA;
   Mães Atípicas é projeto de autismo; Craftsapiens é evento de tecnologia), nenhuma tem relação de
   conteúdo com ACS/SUS. Não gastei chamadas de download nelas.

### O que eu NÃO consegui ver

- Todo o conteúdo de `Case de Bela Vista de Minas` (atalhos não resolvíveis com as ferramentas
  desta sessão).
- 193 das 208 fotos de `FOTOS BVMG ISAAC` (abri 15; ver acima por que considero a amostra
  suficiente para concluir que a pasta inteira é um único evento indoor).
- O acervo documental de rede pública (`REDE PÚBLICA BRASILEIRA` no Mac local, citado em
  `mapa-fontes-foto.md` e no `MEMORY.md` deste agente) — não existe no Drive, só no disco local.
- O PhotoBank do Notion — ferramentas MCP do Notion não estavam disponíveis nesta sessão.

---

## Slide a slide

### Slide 1 — Capa
**Cena pedida:** ACS de uniforme/colete, caminhando por rua de bairro popular, se aproximando de
portão aberto, prancheta na mão. Território visível (casas, rua).

**Não encontrei candidata real.** Consulta: 15/208 fotos abertas em `FOTOS BVMG ISAAC` (todas
indoor, evento único); `OUTRAS FOTOS` completa (3/18 abertas, nenhuma de rua/ACS);
`REDE PÚBLICA - BRASIL` é biblioteca de PDF, 0 imagens. Nenhuma foto de rua, portão ou casa nos
acervos que consegui abrir. **Sem foto neste slide, nesta entrega.**

### Slide 2 — Raiz histórica
**Cena pedida:** ACS na soleira de uma casa, sendo recebida por morador que já a reconhece.

**Não encontrei candidata real.** Mesma base de busca do slide 1. Nenhuma cena de soleira/porta de
casa em nenhum dos acervos abertos. **Sem foto.**

### Slide 3 — Contradição em dado
**Cena pedida:** ACS numa rua com várias casas ao fundo, carregando pasta/fichas — escala de
território.

**Não encontrei candidata real.** Mesma base. **Sem foto.**

### Slide 4 — Citação real
**Cena pedida:** retrato de uma ACS real, rosto visível, de uniforme, ambiente de trabalho (rua ou
UBS), expressão séria e refletida.

**Candidata única, com ressalva forte — decisão da Mallu, não minha:**

- **`IMG_7745.JPG`** (`FOTOS BVMG ISAAC`, id `1ngkuMFbGmadIEtBIITLhW_xDu-fvWY8U`)
  - **O que eu vi:** plano fechado de duas mulheres em perfil, sentadas, ouvindo alguém fora de
    quadro; a da frente (blusa alça, tatuagem no braço) tem expressão neutra/atenta; a de trás
    (regata cinza, tatuagem no pescoço) olha séria, direto para a câmera de quem fotografa a
    plateia — não para o fotógrafo, expressão espontânea, não posada. Fundo bege liso.
  - **Por que essa, com ressalva:** é a única foto entre as que abri com rosto isolado, expressão
    séria/refletida e não sorrindo para câmera — o registro emocional que o slide pede. **Mas não
    atende dois critérios explícitos da cena:** não há uniforme visível, e o ambiente é uma sala de
    workshop institucional, não rua nem UBS. Não sei se as pessoas retratadas são ACS ou outra
    categoria de servidor presente no evento.
  - Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada (sem Notion nesta sessão,
    não há como checar campo `Licença` do PhotoBank)
  - Usos: não registrado (sem acesso ao Notion para checar/gravar `Usos` nesta sessão)
  - Alertas: rosto identificável de duas pessoas, contexto real (⚠ risco de exposição, comum) — não
    é situação de sofrimento/vulnerabilidade, é reunião de trabalho, risco baixo. **Alerta principal
    é de adequação à cena, não de exposição.**
  - Copiada para `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-02/fotos/slide-04.jpg`
    **como melhor opção real disponível, não como match correto.** Se a Mallu preferir deixar o
    slide 4 sem foto a usar uma imagem que não é de ACS em campo, essa é uma escolha legítima dela.

### Slide 5 — Respiro
**Cena pedida:** foto clara, ACS de costas caminhando por rua/vila ampla, escala de território.

**Não encontrei candidata real.** Mesma base de busca. **Sem foto.**

### Slide 6 — Virada
**Cena pedida:** interior simples de UBS/posto, ACS entregando ficha a colega, ou sala de reunião
com ACS reunidas ao fim do plantão, postura cansada, real, não posada.

**3 candidatas, todas do mesmo evento (`FOTOS BVMG ISAAC`), todas abertas e olhadas:**

**Candidata A (escolhida) — `IMG_7721.JPG`** (id `1i-SReuOwdbBKtwGgiZ-BBBfCS4L1ITbB`)
- **O que eu vi:** sala institucional (retratos emoldurados de autoridades na parede, TV, ar-
  condicionado, cadeiras amarelas de escritório em círculo). Cerca de 10 mulheres e 1 homem
  sentados em roda, ouvindo uma facilitadora (blusa branca) ao centro-direita. Posturas reais:
  braços cruzados, pernas cruzadas, expressões sérias/cansadas, ninguém olha para a câmera.
- **Por que essa:** é a foto que mais carrega "gente real reunida, ouvindo, postura de quem já
  trabalhou o dia inteiro" — a estrutura emocional do slide (peso, escuta, não celebração). Não é
  literalmente uma UBS nem "fim de plantão", mas é o registro mais próximo de "sala de reunião com
  servidoras reunidas, postura real, não posada" que existe no material acessível.
- Acervo: próprio PAAPS (Bela Vista de Minas) · ⚠ licença não declarada
- Usos: não registrado (sem Notion nesta sessão)
- Alertas: ⚠ risco de exposição comum (rostos identificáveis, contexto de trabalho, não de
  vulnerabilidade) — risco baixo
- Copiada para `.../sessao-02/fotos/slide-06.jpg`

**Candidata B — `IMG_7730.JPG`** (id `1BlqqrZg5bncYWwHXmlUk_LCutM2CIxPD`)
- **O que eu vi:** plano mais fechado, 3 mulheres sentadas em cadeiras amarelas, uma de blusa
  branca no centro sorri levemente para o lado, as outras duas sérias, uma de braços cruzados.
  Janela grande ao fundo, luz estourada.
- Por que não escolhi: o sorriso da figura central e a luz estourada da janela deixam a foto mais
  "clara/leve" do que o peso que o slide 6 pede (é a virada de "a régua segue igual", precisa de
  gravidade). A candidata A carrega mais gente e mais seriedade coletiva.
- Mesmos alertas de acervo/licença/exposição da candidata A.

**Candidata C — `IMG_7745.JPG`** (mesma foto usada no slide 4)
- Descartada aqui por já estar alocada ao slide 4 (evitar repetir a mesma imagem em dois slides da
  mesma peça) e por ser plano fechado demais para "sala de reunião", que pede mais gente em quadro.

### Slide 7 — Número gigante
**Cena pedida:** cadeira vazia numa sala de espera de UBS, ou colete/crachá de ACS pendurado sem
ninguém — sinal de alguém que saiu.

**Não encontrei candidata real.** Nas fotos de encerramento do mesmo evento (`IMG_7912`,
`IMG_7914`), há cadeiras amarelas vazias em primeiro plano — mas é porque todo mundo se levantou
para a foto de grupo posada ao fundo, não uma cena deliberada de ausência. Usar esse recorte
falsearia a leitura ("alguém que saiu") sobre uma foto que na verdade mostra o grupo inteiro
presente e sorrindo. **Não considero isso uma candidata real** — é o tipo de forçação que a regra
deste agente proíbe. **Sem foto neste slide, nesta entrega.**

### Slide 8 — Fechamento, pergunta
**Cena pedida:** foto ampla de rua de bairro com várias casas, ACS ao longe caminhando em direção
ao horizonte, luz de fim de tarde, sangrando até a borda.

**Não encontrei candidata real.** Mesma base de busca dos slides 1, 2, 3 e 5. **Sem foto.**

---

## Resumo para a Mallu

De 8 slides, **encontrei candidata real para 2** (slides 4 e 6), e mesmo essas com ressalva: são do
mesmo evento indoor de Bela Vista de Minas, não do registro de campo (rua/porta/visita domiciliar)
que a copy pede para os outros 6 slides. Os 6 slides restantes (1, 2, 3, 5, 7, 8) **ficam sem foto
nesta entrega** porque não existe, nos acervos que consegui abrir neste ambiente de nuvem, nenhuma
imagem real de ACS em rua, porta, casa ou visita domiciliar.

**Isso é informação de gestão, não um limite de esforço meu:** o acervo documental de rede pública
que cobriria exatamente essas cenas (`REDE PÚBLICA BRASILEIRA`, citado em `mapa-fontes-foto.md`)
existe só no disco local do Mac da Mallu, fora do alcance desta sessão de nuvem. Três caminhos
possíveis, para ela decidir:

1. Rodar esta mesma curadoria numa sessão com acesso ao Mac local (MODO 1 padrão), que tem as 33
   fotos de "REDE PÚBLICA BRASILEIRA" já auditadas em `.claude/agent-memory/buscador-fotos/MEMORY.md`
   — inclusive candidatas fortes para os slides 1, 2 e 3 (`Visita-Domiciliar-Gurupi-Tocantins`,
   `PSF-Periferia-Sao-Paulo`, `ACS-Quilombola`).
2. Aceitar as 2 candidatas de campo indireto (slides 4 e 6) e publicar os outros 6 slides sem foto
   — decisão dela, não deveria ser decisão silenciosa minha.
3. Adiar a peça até nova sessão com acesso ao acervo certo.

## Arquivos entregues

- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-02/fotos/slide-04.jpg`
  (`IMG_7745.JPG`, com ressalva — ver slide 4)
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-02/fotos/slide-06.jpg`
  (`IMG_7721.JPG`)
- Slides 1, 2, 3, 5, 7, 8: sem arquivo, por ausência de candidata real (ver detalhamento acima)

## Registro no PhotoBank

**Não realizado.** As ferramentas MCP do Notion (`notion-query-data-sources`, `notion-fetch`,
`notion-update-page`) não estavam disponíveis nesta sessão — não consegui consultar nem atualizar
o PhotoBank. As duas fotos usadas (`IMG_7745.JPG`, `IMG_7721.JPG`) vêm do Google Drive
(`FOTOS BVMG ISAAC`), não do PhotoBank do Notion, e não têm página lá. Se esta peça for publicada,
registrar manualmente no Notion (ou em sessão futura com acesso MCP): as duas imagens como novas
páginas do PhotoBank (Story: "PAAPS in action! Cases", Fonte: acervo PAAPS, Licença: ⚠ não
verificada), e o campo `Usos` de cada uma com `2026-09-02 · carrossel "rotatividade ACS" · slide 04`
e `slide 06` respectivamente.
