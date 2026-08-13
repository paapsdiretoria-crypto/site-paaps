# Sistema GTO : base do projeto da equipe de conteúdo

**Data:** 13/08/2026
**O que é este documento:** a base para construir a equipe de agentes de produção de conteúdo do
Sistema GTO, escrita para ser exportada ao Claude Code e virar o `CLAUDE.md` do projeto.

Ele tem quatro partes:

1. **Inventário do Notion GTO**, página por página, com o que está preenchido e o que está vazio.
2. **O método real da Mallu**, destilado de quatro gravações de tela de produção de verdade.
3. **A arquitetura da equipe**, amarrando cada agente a um lugar concreto do Notion.
4. **Lacunas e decisões**, o que precisa da Mallu antes de construir.

Regra de estilo aplicada a este documento e a tudo que a equipe produzir: sem travessão longo,
sem a estrutura "não é X, é Y".

---

# PARTE 1 : Inventário do Notion GTO, página por página

## 1.0 Raiz : `💬 Sistema GTO`

`app.notion.com/p/adb44cb52e008360b66601d83312c8c0`
Caminho: 🌍 paaps 🏹 › paaps › Sistema GTO

Três blocos, nada mais:

| Bloco | Tipo | Estado |
|---|---|---|
| Clientes | database inline | 3 linhas, todas Ativo |
| Demandas | database inline | 13 linhas |
| Useful: Photo Bank: PAAPS & Minerva | database full-page | ~100+ linhas |

### 1.0.1 Database `Clientes`
`collection://8b944cb5-2e00-8371-9300-076bb81119c9`

Schema: `Nome` (title), `Logo` (file), `Status` (select), `Serviço` (multi-select),
`Período` (date), `Pasta do cliente` (text).

| Cliente | Status | Serviço | Estrutura interna montada? |
|---|---|---|---|
| **PAAPS Brasil** | Ativo | Tráfego orgânico + pago | **Sim, é o único completo** |
| Mallu Vasconcellos | Ativo | Tráfego orgânico + pago | Não verificado nesta rodada |
| Fabi Vasconcellos | Ativo | vazio | Criada em 11/08/2026, casca vazia |

`Pasta do cliente` está vazio nos três. É o campo que deveria amarrar o Notion ao disco.

### 1.0.2 Database `Demandas`
`collection://7e344cb5-2e00-8277-93b3-875d37f9035b`

Schema: `Demanda` (title), `Cliente` (relation → Clientes), `Prazo` (date), `Status` (select),
`Responsável` (person).

É o backlog de construção da GTO, não o calendário de conteúdo. Estado atual:

- **Concluído:** Modelo de edição de vídeo PAAPS; Enviar um relatório; Criar um novo modelo de conteúdo
- **Em andamento:** Edição Vídeos Série 01 (prazo 30/08); Construir Modelos de Conteúdo (prazo 09/08, vencido)
- **Para ajustar:** Equipe de Agentes Conteúdo; Equipe de Agentes Prospecção Fria; FrameWork e Planejamento Ecoa
- **Para fazer:** Cortador de vídeos falados; Site PAAPS novo; Editor de B-ROLLs automáticos (cliente Mallu); Gestor de Tráfego PAAPS
- **Para revisão interna:** Carrossel PAAPS "Cuidar está matando"

O item **"Equipe de Agentes Conteúdo" está com Status = Para ajustar**. É literalmente esta
conversa. O projeto já tem ficha aberta no sistema.

### 1.0.3 Database `📷 Photo-bank PAAPS`
`collection://bdf44cb5-2e00-83a7-99f2-0797fb967797`

Schema completo, e é o mais elaborado de todo o GTO:

`Photo` (title), `Image` (file), `Story` (select), `Etiquetas` (multi-select, 18 opções),
`Fonte` (select), `Licença` (select), `Crédito` (text), `URL de origem` (url), `Caption (EN)` (text),
`Usos` (text), `File to drag` (text).

- **Story** (4 valores): Origin & Purpose: The Voice of PAAPS · The Collective: Living & Learning
  Together (Refazenda) · Inside the World's Largest Public Health System · PAAPS in action! Cases
- **Etiquetas** (18): UBS, CAPS, CRAS, escola, hospital, rua/comunidade, território, servidor,
  usuário, criança, equipe/roda, mãos, rosto, escala humana, reunião, atendimento, campo, P&B nativo
- **Fonte** (3): Flickr Ministério da Saúde · acervo PAAPS · outra fonte pública
- **Licença** (5): CC BY · CC BY-NC · domínio público · acervo próprio PAAPS · ⚠ não verificada

**Estado real, e isto importa muito:** a grande maioria das linhas é `PAAPS - Bela Vista de Minas`
com Story = "PAAPS in action! Cases" e **Fonte, Licença, Crédito e Usos todos vazios**. As poucas
linhas com metadado preenchido são as de fonte pública, e quase todas estão marcadas
`⚠ não verificada` com crédito "não identificado no arquivo local; confirmar antes de publicar".

Há três alertas de exposição escritos à mão no campo `Usos`, incluindo um caso de duplicidade
(mesmo arquivo em duas linhas com legendas diferentes, uma delas incompatível com a foto).

---

## 1.1 Página do cliente : `PAAPS Brasil`

`app.notion.com/p/ec344cb52e0082db8115018cfd1e196c`

Layout em duas colunas, mais um bloco de objetivos embaixo. **Esta é a estrutura que se duplica
para Mallu e para Fabi.**

```
┌─────────────────────────────┬─────────────────────────────┐
│  MATERIAIS DE REFERÊNCIA    │  FLUXO DE TRABALHO          │
│  (o que o agente LÊ)        │  (onde o agente ESCREVE)    │
├─────────────────────────────┼─────────────────────────────┤
│  Fluxo do trabalho          │  Lista de mineração         │
│  Web-design                 │  Canais de comunicação      │
│  Persona                    │  Linhas editoriais          │
│  ICP                        │  Calendário editorial       │
│  Diretório de histórias     │  Otimização                 │
│  Biblioteca de referências  │                             │
└─────────────────────────────┴─────────────────────────────┘
              ↓
   Objetivos do cliente | Para onde estamos indo?
```

Essa divisão em duas colunas já é a arquitetura da equipe: a coluna esquerda é **contexto de
leitura** (nenhum agente escreve nela sem a Mallu), a coluna direita é **estado de produção**
(é onde os agentes trabalham).

---

### COLUNA 1 : Materiais de referência

#### 1.1.1 `Fluxo do trabalho` (página)
`app.notion.com/p/a3d44cb52e0082778c9f816ce138bcfc`

Três callouts, **os três vazios**:
- Links importantes (plano de trabalho, manual de marca)
- Entregáveis / modelos de conteúdo do cliente
- Rotinas definidas

**Diagnóstico:** é o escopo do trabalho, e está em branco. Deveria ser o primeiro arquivo que
todo agente lê. Hoje não diz nada.

#### 1.1.2 `Web-design` (página)
`app.notion.com/p/37a44cb52e0080e6bf90fe8963c16928`

Duas subpáginas:
- **`Análise de Design - post Radilson`** : é o documento mais denso de design que existe no
  sistema inteiro. Análise slide a slide de 22 slides, com paleta observada, hierarquia
  tipográfica de 4 níveis, sistema fotográfico (P&B para denúncia/memória, sépia para calor,
  colorida para o presente vivo), 7 tipologias de layout, auditoria em 17 categorias de
  Web Interface Guidelines, e uma lista de 6 elementos novos a incorporar no sistema.
- **`SITE INSTITUCIONAL`**

**Diagnóstico:** este é o insumo de design de verdade. Foi produzido pelo `critico-design` em
jun/2026, e é a única evidência de que aquele agente já rodou. Deve virar leitura obrigatória
do agente de arte.

#### 1.1.3 `Persona` (página)
`app.notion.com/p/58844cb52e00825ca61901e55b780714`

Template completo com 10 callouts: Nome, Idade, Gênero, Onde mora, Status de relacionamento,
Interesses, Objetivos e motivações (desejos / o que querem / o que fazem / o que falam / o que
pensam), Desafios (frustrações / necessidades / dores), Trabalho (11 subcampos, incluindo
"Como o trabalho é medido" e "A quem se reporta"), Razões para usar o produto.

**Estado: 100% vazio.** Todos os bullets em branco.

#### 1.1.4 `ICP` (página)
`app.notion.com/p/52244cb52e0082c0a4a7015b5a85d9b7`

Mapa de empatia em 9 callouts: Com quem estamos empatizando · O que queremos que eles façam ·
O que veem · O que falam · O que fazem · O que escutam · Dores · Ganhos · Outros pensamentos
e sentimentos.

**Estado: 100% vazio.**

#### 1.1.5 `Diretório de histórias do especialista` (database)
`collection://32444cb5-2e00-82e0-b94a-0788d165fc14`

Schema mínimo: `Tema e história` (title), `Ano` (select, **sem opções cadastradas**),
`Palavras-chave` (multi-select, **sem opções cadastradas**).

**Estado: vazio.**

**Diagnóstico:** esta é a base que resolveria o problema mais antigo do ecossistema, o
"corpus de voz pessoal da Mallu não mapeado". É aqui que entra o território de histórias dela.

#### 1.1.6 `Biblioteca de estudos e referências` (database)
`collection://97944cb5-2e00-8219-b45d-0784081dc7a7`
Este é o link que você me mandou como "banco de referências para buscar fotos + FONTES".

Schema: `Referência` (title), `Link` (url), `Arquivos` (file), `Categoria` (multi-select).
Categorias: Notas de leitura, Landing page, Anúncio, Podcast, Mentoria, Site, Thumbnail,
Conteúdo, **portal de notícias**.

**Estado: 2 linhas.** `psicoletiva.instituto` (Conteúdo) e `portal radis` (portal de notícias).
A categoria "portal de notícias" foi criada por você ao vivo na gravação de 10/08.

**Diagnóstico:** esta base tem exatamente a função certa e quase nenhum conteúdo. Ela deveria
listar Outra Saúde, Radis/Fiocruz, Ministério da Saúde, Conselho Nacional de Saúde, CFP, Fiocruz,
Agência Brasil, os perfis de Instagram de referência. Hoje o agente de pesquisa não tem de onde
partir, então ele parte do Google, que é o comportamento que você quer corrigir.

---

### COLUNA 2 : Fluxo de trabalho

#### 1.1.7 `Lista de mineração` (database)
`collection://0b744cb5-2e00-8226-92a6-07f0f2b12c39` · ícone 💎

Schema: `Assunto` (title), `Link` (url), `O que é` (select: Aula, Evento, Live, Podcast, Artigo,
Newsletter), `Ideia de formato` (multi-select: Carrossel, Reels, Arte única, Stories, Live, Vídeo,
Videocast, Áudio, Texto, Artigo), `Minutagem (se houver)` (text), `Minerado por` (person),
`Conteúdos criados` (relation → Calendário editorial).

**Estado: 4 linhas totalmente em branco.**

**Diagnóstico:** este é o coração do agente de mineração e está vazio. O schema já está certo:
`Minutagem` existe exatamente para o caso que você gravou (assistir o próprio vídeo, achar o
trecho, virar carrossel). E `Conteúdos criados` é a aresta que liga a fonte minerada às peças
que nasceram dela. **Falta uma opção em `O que é`: conteúdo próprio já publicado** (reel, vídeo
da série), que foi o que você minerou nas duas gravações de 11/08.

#### 1.1.8 `Canais de comunicação` (database)
`collection://0dc44cb5-2e00-827d-82d6-87a32306bcad` · ícone 📢

Schema: `Mídia` (title), `Situação` (status: Não iniciado, Para iniciar, Ativo, Pausado, Inativo),
`Linhas editoriais` (relation), `Conteúdos` (relation → Calendário).

**11 canais cadastrados, todos com `Situação` em branco:**
Instagram, Blog, Pinterest, E-mail marketing, WhatsApp, Facebook, TikTok, Youtube, Telegram,
Newsletter, LinkedIn.

**Diagnóstico:** o Instagram é o único que aparece de fato ligado no Calendário. Preencher
`Situação` transforma esta base em regra operável: o agente só programa conteúdo para canal Ativo.

#### 1.1.9 `Linhas editoriais` (database)
`collection://0a844cb5-2e00-8298-ad64-8740f6cd871d` · ícone ✍️

Schema: `Nome` (title), `Canais` (relation), `Conteúdos` (relation).

**12 linhas cadastradas, e esta base está viva:**

1. Saúde Pública
2. Defesa do SUS, VIVA O SUS!
3. Luta Antimanicomial e Reforma Psiquiátrica
4. Saúde Mental no Trabalho (NR1, etc.)
5. Notícias atuais / Política / Leis e discussões
6. Segurança Pública
7. Educação Pública
8. Outros formatos de cuidado em saúde mental (além do consultório)
9. Relacionado à Cuidado para profissões que Cuidam
10. Relacionado à Comunicação e Integração de Rede
11. Relacionado à Urgências e Eventos Extremos
12. Relacionado à Treinamentos (e seus temas)

**Diagnóstico:** é a taxonomia editorial real do @paaps.brasil e está sendo usada de verdade
(o carrossel de Ludopatia foi classificado em duas linhas ao mesmo tempo). É o melhor insumo
existente para o agente de pauta.

#### 1.1.10 `Calendário editorial` (database)
`collection://5d744cb5-2e00-83d8-9d79-874b07dbe0eb` · ícone 📰
**Esta é a base central do sistema. Tudo se liga a ela.**

Schema:
- `Conteúdo` (title)
- `Formato` (select, 11): Carrossel, Reels, Arte única, Stories, Live, Vídeo, Videocast, Áudio, Texto, Artigo, Foto
- **`Forma` (select, 4): Criação · Documentação · Mineração · Recriação**
- **`RETINA` (select, 6): Relacionamento · Engajamento · Transformação · Interação · Níveis de consciência · Autoridade**
- `Status` (status, 10 estados agrupados):
  - *A fazer:* Escrever briefing → Escrever roteiro → Escrever legenda → Criar arte
  - *Em andamento:* Gravar vídeo → Editar vídeo → Para revisar → Ajuste necessário
  - *Concluído:* Pronto para publicar → Publicado
- `Data de publicação` (date), `Prazo` (date), `Responsável` (person)
- `Canal` (relation), `Linha editorial` (relation)
- `Pasta do conteúdo` (url)

**Três templates de página cadastrados:** Modelo de novo carrossel · Modelo de novo Reels ·
Modelo de novo vídeo para Youtube.

O **Modelo de novo carrossel** tem: um toggle "Ideia" (para colar a ideia e as referências),
depois CARD 1 a CARD 10, depois "Legenda:".

**16 linhas. Estado real de agosto/2026:**

| Conteúdo | Formato | Forma | RETINA | Status | Data |
|---|---|---|---|---|---|
| Conquistas que merecem ser comemoradas SUS | Carrossel | Criação | Engajamento | Publicado | 03/08 |
| Vídeo NR1 | Reels | Criação | Níveis de consciência | Publicado | 04/08 |
| SUS é o maior sistema público do mundo + Sucateio | Carrossel | Criação | Interação | Publicado | 07/08 |
| **Ludopatia: o vício em BETS** | Carrossel | Criação | Autoridade | Publicado | 10/08 |
| Reel teste - jeitinho do DSM | Reels | Criação | Autoridade | Publicado | 11/08 |
| Reel teste 2 - 490 pacientes | Reels | Criação | Níveis de consciência | Publicado | 11/08 |
| **Diagnóstico não cura** | Arte única | Criação | Engajamento | Publicado | 12/08 |
| Saúde no Brasil e Soberania das Nações | Arte única | Criação | Engajamento | Pronto para publicar | 17/08 |
| Jeito criativo de divulgar Nosso Site! | (vazio) | Criação | Autoridade | Escrever briefing | 18/08 |
| Carrossel - Quem cuida é mulher. | Carrossel | Criação | Relacionamento | Criar arte | 19/08 |
| Aposentadoria não é o fim | Arte única | Criação | Engajamento | Pronto para publicar | 24/08 |
| Combinados do que não fazer: Pré-Setembro Amarelo | Carrossel | Criação | Níveis de consciência | Escrever briefing | 25/08 |
| Card único com indicador de adoecimento em servidores | Carrossel | Documentação | Interação | Escrever briefing | 26/08 |
| (3 linhas sem título) | | | | | |

**Quatro diagnósticos desta base:**

1. **As páginas de conteúdo estão em branco.** Abri "Ludopatia: o vício em BETS" e "Diagnóstico
   não cura", que são exatamente as duas peças que você gravou produzindo. As propriedades estão
   todas preenchidas, e o corpo da página é `blank`. O template CARD 1..10 existe e não está
   sendo usado. **O texto do carrossel só existe dentro do Canva.**
2. **`Pasta do conteúdo` está vazio em todas as linhas.** É o campo que ligaria a peça ao Canva,
   ao Drive e ao disco.
3. **Nenhuma linha usa `Forma = Mineração` ou `Recriação`,** apesar de as duas gravações de 11/08
   serem literalmente mineração. Tudo está marcado como "Criação".
4. **`Carrossel - Quem cuida é mulher` está em "Criar arte" com data 19/08.** É a peça de 27/07
   que ficou parada esperando as suas cinco respostas. Ela voltou ao calendário com data nova.

#### 1.1.11 `Otimização` (database)
`collection://20a44cb5-2e00-8312-8f40-07e5af1ce75f` · ícone 🍩

Schema mínimo: `Observações` (title), `Data` (date), `Otimizado?` (select: Sim/Não).

**Estado: vazio.**

**Diagnóstico:** o schema é pobre demais para o que o `@paaps.brasil` já sabe fazer. Aquele agente
produz leitura de performance com alcance, profundidade, conversão e media_follows por post.
Nada disso cabe em três campos. Esta base precisa ser reescrita antes de ter dono.

---

### BLOCO FINAL : `Objetivos do cliente | Para onde estamos indo?`
`collection://47744cb5-2e00-8297-86c2-8716fe876902`

Schema: `Nome` (title), `Mês` (multi-select).

**5 objetivos, e são objetivos de verdade:**

| Objetivo | Mês |
|---|---|
| Chegar a 3000 seguidores | Agosto |
| Publicar o site em todas as redes sociais! | Agosto |
| **Posts 3x por semana com IA (modelos)** | Agosto |
| Jeito criativo de divulgar Nosso Site! (Projeto Porta-Voz: Blog + Collab) | Setembro |
| Começar estratégia para Terapia com Mallu | Novembro, Dezembro |

O objetivo "Posts 3x por semana com IA" é a métrica de sucesso desta equipe que estamos
construindo. Está datado para agosto.

---

## 1.2 Resumo do inventário : o que existe e o que está oco

| Página / base | Schema | Conteúdo | Veredito |
|---|---|---|---|
| Clientes | ok | 3 clientes | Só PAAPS tem estrutura montada |
| Demandas | ok | 13 itens | Vivo, é o backlog da GTO |
| Photo-bank | **excelente** | 100+ fotos | Metadado quase todo vazio |
| Fluxo do trabalho | 3 callouts | **vazio** | Escopo não escrito |
| Web-design | 2 subpáginas | **rico** | Melhor insumo de design que existe |
| Persona | 10 callouts | **vazio** | |
| ICP | 9 callouts | **vazio** | |
| Diretório de histórias | mínimo | **vazio** | Resolveria o corpus de voz da Mallu |
| Biblioteca de referências | ok | 2 linhas | Deveria ter 20+ fontes |
| Lista de mineração | **ok** | **vazio** | Falta opção "conteúdo próprio" |
| Canais | ok | 11 canais, sem status | |
| Linhas editoriais | ok | **12 linhas, vivo** | Melhor insumo de pauta |
| Calendário | **excelente** | 16 peças, páginas vazias | Texto mora no Canva |
| Otimização | pobre | **vazio** | Schema precisa ser refeito |
| Objetivos | ok | 5 objetivos datados | |

**O padrão:** o que é planejamento (Calendário, Linhas, Objetivos, Demandas) está vivo. O que é
contexto de marca (Persona, ICP, Histórias, Escopo, Referências) está oco. E é exatamente o
contexto de marca que faz um agente escrever como PAAPS em vez de escrever como IA.

---

# PARTE 2 : O método real da Mallu

Destilado de quatro gravações de tela, todas de produção real, todas de peças que existem no
Calendário editorial:

| # | Data | Peça | Está no Notion como |
|---|---|---|---|
| 1 | 10/08 | Carrossel Ludopatia, slides de fonte e crédito | Ludopatia: o vício em BETS · Carrossel · Publicado |
| 2 | 10/08 | Carrossel Ludopatia, slide de serviço e CTA | mesma peça |
| 3 | 11/08 | Arte única "diagnóstico não cura" | Diagnóstico não cura · Arte única · Publicado |
| 4 | 11/08 | Capa "Cuidar da ponta, impactar o mundo" | não localizada no calendário |

**Aviso de método:** o agente `buscador-fotos-photobank` que existe hoje foi escrito por IA sem
ver nenhuma destas gravações. Onde ele e a gravação divergem, **a gravação vence**. As
divergências estão nomeadas na seção 2.6.

---

## 2.1 Busca de informação e escolha de fonte

**O que você faz, na ordem observada:**

1. Busca ampla no Google Imagens com a fórmula `tema + fotos` ("saúde jogos de aposta fotos").
   A busca por imagem é a porta de entrada tanto da imagem quanto da matéria.
2. Usa as "Pesquisas relacionadas" do próprio Google para variar o ângulo (vício em jogos de azar,
   vício em apostas, vício em jogos online). O buscador funciona como expansor de vocabulário.
3. **Abre a página de origem de cada card antes de decidir qualquer coisa.** Nunca decide pelo
   thumbnail.
4. Filtra por credibilidade institucional na prática, com esta hierarquia observada:
   - **órgão oficial** (Ministério da Saúde, Meu SUS Digital, miniapps.saude.gov.br)
   - **institucional/acadêmico** (Radis Comunicação e Saúde, que é Fiocruz/ENSP)
   - **imprensa estabelecida** (G1, Portal Drauzio Varella/UOL, Gazeta da Semana, Correio Braziliense)
   - **perfil jornalístico no Instagram** (@rbatvoficial), usado como atalho para a notícia
5. **Registra a fonte na Biblioteca de estudos e referências do Notion**, criando categoria nova
   quando precisa ("portal de notícias" foi criada ao vivo).
6. Quando a peça precisa de serviço, busca o **link oficial de destino** e entra no site para
   conferir que ele existe e o que ele faz, antes de colocar no slide.

**Regra que isso vira:** a pesquisa começa pela imagem e termina na fonte, não o contrário. E
toda fonte usada vira linha na Biblioteca antes de virar slide.

## 2.2 Escolha e origem de foto

Três origens distintas, com regras diferentes, e o sistema atual só conhece uma:

**Origem A : foto de terceiro, documental ou jornalística.**
Vem do Google Imagens, é verificada na página de origem, e **exige crédito visível na peça**.
Exemplos observados: Radis Comunicação, Gazeta da Semana.

**Origem B : foto própria de sessão de produção.**
Vem do Google Drive, da pasta da série de vídeo (`REELS/ODARA 02 - SÉRIE PAAPS/FOTOS`, arquivos
`IMG_37xx.JPG`). **Não leva crédito.** É a mesma sessão que gerou o vídeo, então a foto e a fala
combinam de origem. Usada nas duas peças de 11/08.

**Origem C : banco genérico do Canva.**
Buscas conceituais dentro do editor ("vício pobreza"). Observada como consulta, não observei
nenhuma foto do Canva chegar à peça final.

**Critério de escolha observado:** a foto precisa carregar a cena que o argumento descreve, não o
tema. E quando não existe a cena, você não força: a peça vai em tipografia sobre bloco de cor,
que é a solução usada no slide de "diagnóstico não cura" antes de você trocar pela foto própria.

## 2.3 Verificação e crédito

**Verificação:** clicar até a página de origem, sempre. Nas quatro gravações não houve uma única
imagem levada para a peça sem abrir a origem antes.

**Crédito, formato exato observado:**
- Texto: `Foto: [Nome da Fonte]`
- Fonte tipográfica: Helvetica, corpo entre 19 e 30 no Canva, o menor da peça
- Posição: canto inferior esquerdo, abaixo do corpo de texto, na mesma linha visual do logo paaps
- Cor: branco ou off-white, sobre a área escura da foto
- **Método de produção: a caixa de crédito é duplicada de slide para slide e só o nome da fonte
  é trocado.** Você não recria a caixa.

**Casos sem crédito:** foto própria de sessão (origem B) e slide tipográfico puro.

**Verificação de segunda camada, observada na peça de Ludopatia:** além de creditar a imagem, a
peça entrega ao público um link oficial de autoverificação
(`https://miniapps.saude.gov.br/teste-jogo/`), com a ressalva escrita no próprio slide de que
"não se trata de um teste diagnóstico". O rigor de fonte é repassado ao leitor, não guardado
para dentro.

## 2.4 Copywriting

Três modos observados, e eles não competem, se alternam conforme o slide precisa:

**Modo A : citação literal da fonte, quando o objetivo é serviço e objetividade.**
No slide de teleatendimento do SUS você copiou a legenda do @rbatvoficial **na íntegra, palavra
por palavra**, e colou como corpo do slide:

> "O SUS passou a oferecer atendimento online para pessoas com problemas relacionados a jogos e
> apostas. O serviço é gratuito, confidencial e pode ser acessado pelo aplicativo Meu SUS Digital,
> com suporte de profissionais de saúde."

Depois você formatou em caixa alta e destacou em amarelo os termos operacionais
(`APLICATIVO MEU SUS DIGITAL`). **A voz autoral não entra aqui de propósito.** Quando a informação
é serviço público, a manchete da notícia é a melhor copy possível, e reescrever só introduz erro.

**Modo B : instrução direta ao leitor, escrita por você.**
O bloco final do mesmo slide, com verbo no imperativo, link, e a ressalva de limite:
"ENTRE NO SITE... REALIZE O AUTO-TESTE, OU INSTRUA CONHECIDOS, PARA CONSCIENTIZAÇÃO E POSSÍVEL
DETECÇÃO PREVENTIVA. NÃO SE TRATA DE UM TESTE DIAGNÓSTICO."

**Modo C : frase autoral minerada da própria fala.**
Em "diagnóstico não cura", você abriu o vídeo `VIDEO-02-SERIE-01-PAAPS-FINAL.mp4` no QuickTime,
ouviu, e transformou a fala em duas linhas de peça estática:
`o diagnóstico que individualiza o que é coletivo` / `NÃO CURA, ELE SILENCIA.`
A frase existia falada antes de existir escrita.

**Padrão de escrita ao vivo, observado nas duas peças de 11/08:** você escreve uma versão longa e
descritiva primeiro, depois corta até virar tese. A capa de 11/08 passou por
`EXPLICANDO A PRINCIPAL IDEIA POR TRÁS DO...` e terminou em
`CUIDAR DA PONTA, IMPACTAR O MUNDO. QUAL A PSICOLOGIA POR TRÁS DO paaps BRASIL?`.
O primeiro rascunho explica, o final afirma. **Um agente que entrega só a versão final está
entregando metade do trabalho: você precisa das variações para escolher.**

Detalhes finos de copy observados: ponto final na headline afirmativa; interrogação isolada em
amarelo quando a frase termina em pergunta; sublinhado semântico na palavra-conceito
(`PSICOLOGIA` sublinhado).

## 2.5 Design e montagem no Canva

**Arquivo de trabalho:** um design único e contínuo chamado `modelos PAAPS.BRASIL`, que já passou
de 20 para 43 páginas ao longo das gravações. Você não cria um arquivo por peça: **você acrescenta
páginas ao mesmo arquivo**, e as páginas são nomeadas por dia da semana (Página 18 - DOMINGO).

**Composição base do slide de conteúdo:**
1. Foto full-bleed no fundo, frequentemente com `Transparência` entre 61 e 66 para rebaixar a
   imagem e liberar o texto
2. Bloco de cor sólida da marca (marrom escuro) quando a foto precisa ser recortada, com
   `Removedor de Fundo` aplicado na pessoa
3. Texto por cima, hierarquia de três níveis

**Sistema tipográfico observado:**
| Nível | Fonte | Corpo | Caixa | Cor |
|---|---|---|---|---|
| Frase poética / conceito | **Evermore** | 42 a 57 | minúscula | branco |
| Headline afirmativa | **League Spartan** | 63 a 100 | CAIXA ALTA | branco, destaque em amarelo |
| Corpo e bullets | League Spartan | 19 a 32 | CAIXA ALTA | amarelo/off-white |
| Crédito | Helvetica | 19 a 30 | mista | branco |

A mistura de Evermore em minúscula com League Spartan em caixa alta é deliberada e já está
documentada na análise do post Radilson como "contraste poético intencional".

**Kit de marca em uso:** paleta PAAPS PURO (terracota, verde-oliva, amarelo, marrom escuro, bege,
lilás, off-white) e paleta AMALLUVASCONCELLOS (off-white, lilás, vinho, bordô, laranja, marrom).
Logo puxado da aba Marca › Logotipos, versão branca sobre foto.

**Regra de destaque em amarelo, confirmada:** o amarelo marca o que não pode ser esquecido, ou
seja, nome, data, sigla operacional, palavra que concentra o argumento do slide.

## 2.6 Mineração : o padrão que o sistema ainda não tem

As gravações 3 e 4 são a mesma operação, e ela não existe em nenhum agente hoje:

```
vídeo gravado da série  ──→  assistir e achar a fala  ──→  frase escrita
        │                                                       │
        └──→ pasta FOTOS da mesma sessão ──→ foto própria ───────┤
                                                                 ↓
                                              nova página no arquivo Canva
                                                    (arte única ou capa)
```

Ou seja: **um ativo já produzido gera dois insumos ao mesmo tempo**, a fala e a imagem, e eles já
combinam entre si porque nasceram no mesmo dia, no mesmo lugar, com a mesma roupa.

O Calendário editorial já prevê isso no campo `Forma` (Mineração, Recriação) e a `Lista de
mineração` já tem o campo `Minutagem`. As duas peças de 11/08 foram lançadas como
`Forma = Criação`, o que apaga o registro de que elas nasceram de mineração.

## 2.7 Onde o agente atual diverge do que você faz

| Ponto | `buscador-fotos-photobank` diz | A gravação mostra |
|---|---|---|
| Busca na internet | proibida por padrão | é a porta de entrada principal |
| Fonte primária | PhotoBank do Notion, por `Story` | Google Imagens e Drive da sessão |
| Flickr do MS | única fonte externa autorizada | não apareceu em nenhuma gravação |
| Foto própria | "~1 por carrossel, nunca o contrário" | foi 100% das peças de 11/08 |
| Controle de `Usos` | 60 dias, aposenta em 3 usos | não observado |
| Registro | cadastra a foto no PhotoBank | registra a **fonte** na Biblioteca |

**Leitura:** o agente foi desenhado para um fluxo de curadoria de acervo que não é o que acontece.
O que acontece é pesquisa jornalística ao vivo, mais uso de acervo próprio de produção. As regras
dele que **devem sobreviver** são as de risco: licença não verificada bloqueia publicação, e
licença pública não autoriza uso de imagem de pessoa identificável. Essas duas você respeita na
prática (só usou foto de terceiro com crédito, e as fotos de pessoa foram suas).

---

# PARTE 3 : Arquitetura da equipe GTO

## 3.1 Princípio de desenho

A GTO é uma empresa terceirizada de conteúdo, e o Notion do cliente é o contrato. Então:

> **Nenhum agente tem conhecimento próprio sobre o cliente. Todo contexto vem da página do cliente
> no Notion. Trocar de cliente é trocar de página, e nada mais.**

É isso que permite duplicar a estrutura para Mallu e Fabi sem reescrever agente nenhum.

## 3.2 As duas colunas viram o contrato de leitura e escrita

```
        ┌──────────── COLUNA 1 : contexto (só leitura) ─────────────┐
        │  Fluxo do trabalho · Web-design · Persona · ICP           │
        │  Diretório de histórias · Biblioteca de referências       │
        └──────────────────────────┬───────────────────────────────┘
                                   │ todo agente lê
                                   ↓
   ┌───────────────────────────────────────────────────────────────────┐
   │                      PIPELINE DE PRODUÇÃO                          │
   └───────────────────────────────────────────────────────────────────┘
                                   │ todo agente escreve
                                   ↓
        ┌──────────── COLUNA 2 : produção (leitura e escrita) ──────┐
        │  Lista de mineração · Canais · Linhas editoriais          │
        │  Calendário editorial · Otimização                        │
        └───────────────────────────────────────────────────────────┘
```

## 3.3 O grafo proposto

```
   ┌─────────────────────────── ENTRADA, três portas ───────────────────────────┐
   │                                                                             │
   │  (A) atualidade          (B) mineração            (C) pauta da Mallu        │
   │   radar-fontes            minerador                 (entra direto no gate)  │
   │   lê Biblioteca de        lê Lista de mineração                             │
   │   referências             + acervo próprio                                  │
   └───────────┬──────────────────────┬─────────────────────────┬───────────────┘
               └──────────────┬───────┴─────────────────────────┘
                              ↓
                    ┌─────────────────────┐
                    │  pauteiro           │  classifica em Linha editorial + RETINA
                    │                     │  + Formato + Forma, e cria a linha
                    │                     │  no Calendário com Status=Escrever briefing
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │  tecela             │  raciocínio crítico, Psicologia Sócio-Histórica
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │  copywriter         │  escreve CARD 1..N + Legenda DENTRO da
                    │                     │  página do Calendário, em 2 ou 3 variações
                    │                     │  de headline, nunca só a final
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │  ⚑ GATE 1 : MALLU   │  escolhe a variação, aprova o texto
                    └──────────┬──────────┘
                               ↓
                ┌──────────────┴──────────────┐
                ↓                             ↓
      ┌───────────────────┐        ┌─────────────────────┐
      │  pesquisador-foto │        │  (sem foto)         │
      │  3 origens:       │        │  tipografia sobre   │
      │  A terceiro+crédito│        │  bloco de cor      │
      │  B acervo próprio │        └─────────┬───────────┘
      │  C tipografia     │                  │
      └─────────┬─────────┘                  │
                └──────────────┬─────────────┘
                               ↓
                    ┌─────────────────────┐
                    │  designer           │  monta no Canva, aplica crédito,
                    │                     │  Status → Para revisar
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │  critico            │  ⚠ NÃO EXISTE. voz + design num agente só
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │  ⚑ GATE 2 : MALLU   │  Status → Pronto para publicar
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │  analista           │  lê métrica, escreve em Otimização,
                    │                     │  devolve aprendizado ao pauteiro
                    └─────────────────────┘
```

## 3.4 Contrato de cada agente

| Agente | Lê no Notion | Escreve no Notion | Existe hoje? |
|---|---|---|---|
| **radar-fontes** | Biblioteca de referências, Linhas editoriais | Lista de mineração | parcial (`radar`, mas busca no Google aberto) |
| **minerador** | Lista de mineração, acervo Drive/disco | Lista de mineração (`Conteúdos criados`) | **não existe** |
| **pauteiro** | Linhas editoriais, Canais, Objetivos, Otimização | Calendário (cria linha) | **não existe** |
| **tecela** | Diretório de histórias, base teórica | página do Calendário | sim, maduro |
| **copywriter** | Persona, ICP, Fluxo do trabalho, voz | página do Calendário (CARD 1..N) | sim, maduro |
| **pesquisador-foto** | Photo-bank, Biblioteca, acervo próprio | Photo-bank | sim, mas com regras erradas |
| **designer** | Web-design, Kit de marca Canva | `Pasta do conteúdo`, Status | sim (`aplicador-visual`) |
| **critico** | Web-design, voz | achados na página | **não existe** |
| **analista** | métricas Windsor/Instagram | Otimização | parcial (`@paaps.brasil`) |

**Três agentes novos:** minerador, pauteiro, critico.
**Um agente a reescrever do zero:** pesquisador-foto.
**Uma base a reescrever:** Otimização.

## 3.5 Regras duras da equipe

1. **Nenhum agente publica.** Dois gates da Mallu, e os dois são bloqueantes.
2. **Todo contexto vem do Notion do cliente.** Nenhum agente carrega conhecimento de PAAPS
   embutido no próprio arquivo.
3. **O texto do carrossel mora na página do Calendário**, no formato CARD 1..N + Legenda. O Canva
   recebe, nunca origina.
4. **Toda peça declara sua `Forma`.** Mineração é `Mineração`, não `Criação`.
5. **Toda fonte usada vira linha na Biblioteca de referências** antes de virar slide.
6. **Foto de terceiro sem crédito não passa.** Foto de acervo próprio não precisa de crédito.
7. **Licença não verificada bloqueia publicação.** Licença pública não autoriza imagem de pessoa
   identificável em situação de vulnerabilidade.
8. **O copywriter entrega variações, não uma resposta.** Mínimo duas headlines por capa.
9. **Sem travessão longo. Sem "não é X, é Y".**

---

# PARTE 4 : Lacunas e decisões que dependem de você

## 4.1 O que precisa ser preenchido no Notion antes de qualquer agente rodar

Ordem de prioridade, pelo impacto na qualidade do que sai:

1. **Biblioteca de estudos e referências.** Hoje 2 linhas. Precisa das fontes que você já usa de
   fato: Outra Saúde, Radis/Fiocruz, Ministério da Saúde, Agência Brasil, CFP, Conselho Nacional
   de Saúde, os perfis de Instagram de referência. Sem isso o radar volta pro Google.
2. **Fluxo do trabalho.** Os três callouts vazios. É o escopo, e é a primeira leitura de todo agente.
3. **Persona e ICP.** Vazios. São o que separa "escrever sobre saúde mental" de "escrever para
   o gestor público que decide orçamento".
4. **Diretório de histórias do especialista.** Vazio, e é o que destrava o ramo @amalluvasconcellos
   sem inventar biografia.
5. **`Situação` dos 11 canais.** Para o agente saber onde pode programar.
6. **Schema da base Otimização.** Três campos não seguram leitura de performance.

## 4.2 Ajustes de schema que eu recomendo

- `Lista de mineração` › `O que é`: acrescentar **"Conteúdo próprio publicado"** e **"Vídeo da série"**
- `Calendário` › acrescentar campo **`Fonte minerada`** (relation → Lista de mineração), para a
  aresta existir dos dois lados
- `Calendário` › `Pasta do conteúdo`: passar a preencher sempre, com o link do Canva
- `Photo-bank` › tornar `Fonte`, `Licença` e `Crédito` obrigatórios de fato em toda linha nova
- `Clientes` › `Pasta do cliente`: preencher com o caminho em disco, é o que amarra Notion e repo

## 4.3 Perguntas que eu não consigo responder sozinho

1. **Onde fica o projeto com os `.claude/agents/*.md` reais?** A pasta `conteudo/` que eu acesso
   não tem `.claude/agents/` nem `.claude/skills/` preenchidos. Preciso desse caminho montado
   para reescrever os agentes em vez de só descrevê-los.
2. **Acesso a `insumos-compartilhados/`** (irmã de `conteudo/` dentro de SITE PAAPS). É onde vivem
   `voz-paaps.md`, `identidade-aplicada.md`, `visual-instagram.md`, `mapa-fontes-foto.md` e a base
   teórica da Tecelã.
3. **A GTO atende PAAPS, Mallu e Fabi como três clientes com equipes iguais, ou a equipe é uma só
   com três contextos?** Isso muda se os agentes ficam num repo por cliente ou num repo só.
4. **A peça "Cuidar da ponta, impactar o mundo" (gravação 4) não achei no Calendário.** Ela é um
   conteúdo não registrado, ou é a arte de um item que está com outro nome?
5. **Quem é Fabi Vasconcellos no sistema** e qual o serviço contratado, já que o campo está vazio.

---

## Próximo passo sugerido

Com as respostas de 4.3 e o acesso a `insumos-compartilhados/`, o passo seguinte é escrever os
três agentes que não existem (minerador, pauteiro, critico) e reescrever o pesquisador-foto com
as regras da Parte 2, um a um, com revisão sua entre cada, que é a regra que o `CLAUDE.md` atual
já estabelece e que continua valendo aqui.
