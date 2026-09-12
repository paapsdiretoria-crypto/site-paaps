# Diagnóstico: pipeline real de conteúdo PAAPS e onde os padrões de foto já estão cobertos

**Data:** 10/08/2026. **Escopo lido:** pasta `conteudo/` completa (mounted), skill `paaps-orquestrador-conteudo` (cache Cowork), Banco de Agentes + Biblioteca de Referências + Mapa de Orquestração no Notion. **Fora do escopo desta rodada, por falta de acesso:** `insumos-compartilhados/`, `projetos/minerva/BANCO DE FOTOS/`, o PhotoBank do Notion, e o projeto onde os arquivos `.claude/agents/*.md` de fato existem em disco. Ver seção 6.

---

## 1. Antes do grafo: onde cada coisa mora de verdade

Isso muda a leitura de tudo que vem depois, então vai primeiro.

- **A pasta `conteudo/` não tem `.claude/agents/`.** O `CLAUDE.md` e o `arquitetura_v2.md` dizem que os agentes vivem em `.claude/agents/*.md` "na raiz do projeto", mas essa pasta não existe no que está montado aqui. `.claude/skills/` também está vazia. Ou seja: os arquivos reais dos agentes (radar.md, tecela.md, buscador-fotos.md etc.) rodam em outro projeto, provavelmente o que o Notion chama de **`paaps-CEO`** ("a sala de controle dos agentes... as oficinas ficam em SITE PAAPS/"). Eu não tenho esse projeto montado.
- **A skill que eu consigo ler (`paaps-orquestrador-conteudo`, cache do Cowork) está desatualizada.** Ela ainda descreve o fluxo de um tronco só, 6 guardrails, sem os artefatos T/B1-B4/GATE/HANDOFF. Mas o `CLAUDE.md` e o ciclo de 27/07 já operam na "árvore de dois troncos", 7 guardrails, com esses artefatos. A sessão de 27/07 registrou a atualização em `.claude/skills/paaps-orquestrador-conteudo/SKILL.md` (dentro do projeto de verdade) — que também não está no que tenho montado.
- **O Notion se declara fonte canônica quando diverge do disco** ("🎛️ Mapa de Orquestração dos Agentes": *"Quando um arquivo em disco e a base do Notion discordam, o Notion vence, porque é a interface que a Mallu lê e corrige à mão"*). Essa página já fez sozinha boa parte do diagnóstico que você pediu, incluindo uma lista de divergências. Eu cruzei o que ela diz com os ciclos reais em disco; onde bateu, uso os dois como confirmação cruzada; onde não bateu, marco.
- **Duas bases de referência distintas existem, não uma.** O link que você mandou ("Banco de referências... buscar fotos + FONTES") abre a **Biblioteca de estudos e referências**, que hoje tem 2 linhas reais (`psicoletiva.instituto`, `portal radis`) e nenhum campo de foto (schema: Referência, Link, Categoria, Arquivos). Já o **PhotoBank**, que é a base que o agente `buscador-fotos-photobank` realmente consulta (com campos `Story`, `Etiquetas`, `Fonte`, `URL de origem`, `Crédito`, `Licença`, `Usos`), é uma database diferente, mais rica, e eu não tenho o link direto dela, só a página do agente que a descreve. Ver pergunta 3 na seção 6.

## 2. O grafo real do pipeline de conteúdo (fluxo do carrossel, o mais maduro)

Reconstruído cruzando `arquitetura_v2.md`, o Mapa de Orquestração do Notion e os artefatos reais de `ciclos/2026-07-27/`. Os três concordam:

```
radar ──────────────┐
                     ├──→ tecela ──→ copywriter-paaps ──→ [GATE 1 · Mallu julga o texto]
@paaps.brasil ───────┘                                              │
                                                                     ↓
                                                     buscador-fotos-photobank
                                                                     ↓
                                                             aplicador-visual ──→ critico-design (NÃO EXISTE)
                                                                     ↓
                                                     [GATE 2 · Mallu julga a peça montada] ──→ Drive ──→ publicação
```

Camadas (nomenclatura do próprio Banco de Agentes):

| Camada | Papel | Quem está nela |
|---|---|---|
| Inteligência | descobre e pensa, nunca entrega peça final | radar, tecela, @paaps.brasil |
| Produção | transforma raciocínio em peça | copywriter-paaps, buscador-fotos-photobank, aplicador-visual, mallu-linkedin, mallu-reels, ecoa (incompleto) |
| Apoio | audita e sustenta, não produz para fora | **vazia** — é onde críico-design e crítico-conteúdo deveriam estar |
| Captação | outro pipeline, B2G/leads frios: porteiro, buscador-leads, carta-fria, escrivão | fora do escopo de conteúdo |
| Atendimento | outro pipeline, WhatsApp/chat: gerente-atendimento, suporte, cs | fora do escopo de conteúdo |

Dois gates de Mallu, não um: o gate 1 julga raciocínio e texto (fecha em `copywriter-paaps`), o gate 2 julga a peça montada (fecha em `aplicador-visual`). Isso resolve uma contradição que os dois documentos internos tinham (os dois agentes se diziam "o último antes da Mallu").

## 3. Os padrões de foto que identifiquei na sua gravação de tela × o padrão institucionalizado

Isto responde diretamente ao que você pediu antes: os padrões já estão em um agente, e o agente é bem mais rigoroso do que o fluxo manual que a gravação mostrou.

| Etapa | O que a gravação de tela mostrou | O que o agente `buscador-fotos-photobank` faz, documentado |
|---|---|---|
| Busca | Google Imagens com "tema + fotos", depois Instagram de perfis de imprensa | **Busca na internet é proibida por padrão.** Modo 1: consulta o PhotoBank (Notion) por `Story`. Modo 2, só quando falta cena: Flickr do Ministério da Saúde, via URL de busca fixa (`flickr.com/search/?user_id=ministeriodasaude`), nunca busca genérica |
| Critério de escolha | Relevância temática ("saúde jogos de aposta") | **Cena, não tema.** "Uma foto certa carrega a mesma ESTRUTURA que o argumento, não o tema." Lista de recusa automática: handshake genérico, laptop+sorriso em escritório branco, palco ministerial, stock, foto posada |
| Verificação da fonte | Clicar na página de origem (G1, Radis/Fiocruz, Gazeta da Semana) | Mesmo princípio, formalizado: abrir a página da foto (nunca julgar por título/thumb), ler autor, licença e data; **nunca chutar licença** — se não achar explícita, marca `⚠ não verificada` e não publica sem a Mallu decidir |
| Verificação extra que a gravação não tinha | — | **Usos**: foto usada nos últimos 60 dias não volta; 3+ usos, aposenta. **Exposição:** licença pública ≠ autorização de imagem de pessoa identificável — rosto reconhecível em situação de vulnerabilidade é bloqueado mesmo com licença OK |
| Registro do achado | Notion "Biblioteca de estudos e referências" (Referência, Link, Categoria) | Notion PhotoBank, 10 campos obrigatórios no cadastro: Photo, Story, Etiquetas, Caption (EN), Fonte, URL de origem, Crédito, Licença, Usos, Image |
| Aplicação no design | Colar manualmente no Canva, ajustar overlay à mão | `aplicador-visual` via MCP Canva, regra dura: `find_and_replace_text` (preserva formatação por região), nunca `replace_text` (destrói) |
| Crédito na peça | Caixa de texto "Foto: [Fonte]" duplicada de slide a slide, editada à mão | Mesmo padrão, mas auditado: existe um relatório real do `critico-design` (jun/2026) que checou crédito em 22 slides como item de acessibilidade/atribuição — achou 1 slide sem crédito (mosaico, slide 10) e determinou a correção |
| Hierarquia de fonte | Implícita (imprensa > desconhecido) | Explícita e nomeada: **base documental pública em primeiro lugar; acervo próprio do PAAPS só ~1 foto por carrossel, nunca o contrário** — regra que "a Mallu já teve que corrigir uma vez" |

Ou seja: o que você fez manualmente no Canva reproduz a intenção certa (fonte confiável, crédito visível, verificação antes de usar), mas fora da trilha de auditoria que o agente exige (sem registro de Usos, sem checagem formal de licença/exposição, sem o PhotoBank como memória entre carrosséis). Isso é esperado quando quem está operando é você direto na ferramenta, não o agente — mas é exatamente o tipo de padrão que vale documentar para o agente aprender, se essas duas gravações foram uma sessão real de produção de peça (o carrossel sobre jogos de aposta/saúde mental não aparece em nenhum ciclo salvo que eu vi; pode estar fora do fluxo formal ainda).

## 4. Lacunas confirmadas (o Notion e os ciclos concordam nos mesmos pontos)

1. **`critico-design` e `critico-conteudo` são citados constantemente e não existem como agente registrado.** A camada Apoio está vazia no Banco de Agentes. Hoje quem faz QA do texto é quem escreveu o texto ("o arranjo mais frágil do fluxo", nas palavras do próprio `HANDOFF.md`). O relatório de crédito ausente que citei acima é a única evidência de um `critico-design` tendo rodado de fato, e foi em jun/2026, antes da regressão a "placeholder".
2. **O gate "nada sai sem a Mallu aprovar" nunca foi aplicado ao próprio Banco de Agentes.** Todos os 15 agentes têm `Aprovado por Mallu = NÃO`, incluindo os 5 que já estão em produção ativa.
3. **`Recebe de` / `Passa para` são texto livre**, não uma relação real entre linhas do banco. O grafo hoje existe só em prosa: nada impede dois agentes discordarem sobre quem entrega pra quem.
4. **Ninguém dispara a cadeia sozinho.** Não existe agendamento (as pastas `automacoes/fluxos/` estão vazias, segundo o Mapa). O maestro é você abrindo sessão e digitando.
5. **`mapa-fontes-foto.md`** (que eu não consegui ler, está em `insumos-compartilhados/`) registra que a varredura de outras fontes documentais públicas — Agência Brasil/EBC, secretarias, universidades, FUNAI, IBGE — deveria ter sido feita **antes** do `buscador-fotos-photobank` existir, e não foi. Hoje ele opera quase só sobre o acervo do Ministério da Saúde no Flickr.
6. **O PhotoBank ganhou campos novos em 15/07/2026** (Etiquetas, Fonte, URL de origem, Crédito, Licença, Usos); fotos cadastradas antes disso ainda estão com esses campos vazios — dívida de catalogação retroativa.
7. **Corpus de voz pessoal da @amalluvasconcellos não está mapeado**, o que trava o ramo Mallu sem "afeto emprestado" do corpus institucional — isso não é sobre fotos, mas aparece em quase todo artefato que li como pendência estrutural.

## 5. Sobre "Grafos Design" para a produção completa

Dá para montar esse grafo de design com o que já existe: a página **"🎛️ Mapa de Orquestração dos Agentes"** no Notion já é um primeiro rascunho sério dele (camadas, fluxo do carrossel, contrato de 7 campos por agente, regras de handoff). O que falta para virar de fato um grafo (nós e arestas verificáveis, não só prosa) é exatamente a divergência 5 que a própria página nomeia: `Recebe de`/`Passa para` precisam virar relação entre linhas do banco, não texto livre. Eu posso desenhar esse grafo (visual + a proposta de schema relacional no Notion) na próxima etapa, mas antes preciso fechar a seção 6.

## 6. O que preciso de você antes de fechar o grafo

1. **Acesso à pasta `insumos-compartilhados/`** (hoje referenciada como `../insumos-compartilhados/` a partir de `conteudo/` — deve ser irmã dela dentro de `SITE PAAPS/`). É onde vivem `voz-paaps.md`, `base-teorica/README.md`, `afeto-situado-mallu.md`, `mapa-fontes-foto.md`, `identidade-aplicada.md`, `visual-instagram.md`, e o acervo local de fotos (`fotos/case-bela-vista-de-minas/`, `fotos-bvmg-isaac/`).
2. **Acesso à pasta `projetos/minerva/BANCO DE FOTOS/`** (o acervo local em disco que o `buscador-fotos-photobank` cruza com o PhotoBank do Notion).
3. **O link direto da database PhotoBank no Notion** (schema com `Story`, `Usos`, `Licença` etc.) — só encontrei a página que descreve o agente, não a base em si.
4. **Confirmar onde mora o projeto `paaps-CEO`** (ou o nome real da pasta com `.claude/agents/*.md` de verdade) — se você quiser que eu leia os arquivos de agente originais em vez de só a versão espelhada no Notion, preciso desse caminho montado também.
5. As edições de vídeo eu já deixei de fora, como você pediu — só registro que o Mapa do Notion lista "edição de vídeo" como fluxo sem agente ainda (existe a skill `edicao-reel-mallu`, falta o agente).

Assim que tiver isso, fecho o grafo de design completo (visual + schema) e digo exatamente onde a rotina que você gravou deveria ter entrado no fluxo formal, em vez de rodar manual no Canva.
