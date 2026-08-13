# Sistema GTO : plano de ação

**Data:** 13/08/2026
**Base:** `00-BASE-DO-PROJETO-GTO.md`, nesta mesma pasta.
**O que este documento faz:** organiza o inventário da Parte 1 num mapa de links único, responde
o que dava para responder sozinho das perguntas da Parte 4.3, e propõe a ordem de resolução do
sistema, fase por fase, para você aprovar ou reordenar.

---

## 1. Onde a pasta está agora

`conteudo/sistema-gto/` tem hoje só o `00-BASE-DO-PROJETO-GTO.md` (este plano é o segundo
arquivo). Não existe `.claude/agents/` nem `.claude/skills/` dentro de `sistema-gto/`, nem dentro
de `conteudo/.claude/` (só tem uma subpasta `skills/`, sem agentes). Isso já responde a primeira
pergunta da Parte 4.3, ver seção 3 abaixo.

---

## 2. Mapa de links : os 17 destinos do Notion GTO

Todo link que o sistema toca, num lugar só. Os que começam com `collection://` são bases (databases)
referenciadas por ID interno do Notion, não URL de página; seguem como estão no documento-base.

| # | Nome | Link | Papel no sistema |
|---|---|---|---|
| 1 | Raiz `💬 Sistema GTO` | `app.notion.com/p/adb44cb52e008360b66601d83312c8c0` | ponto de entrada |
| 2 | Clientes | `collection://8b944cb5-2e00-8371-9300-076bb81119c9` | quem a GTO atende |
| 3 | Demandas | `collection://7e344cb5-2e00-8277-93b3-875d37f9035b` | backlog da própria GTO |
| 4 | Photo-bank PAAPS | `collection://bdf44cb5-2e00-83a7-99f2-0797fb967797` | acervo de fotos |
| 5 | Página cliente PAAPS Brasil | `app.notion.com/p/ec344cb52e0082db8115018cfd1e196c` | modelo que se duplica |
| 6 | Fluxo do trabalho | `app.notion.com/p/a3d44cb52e0082778c9f816ce138bcfc` | escopo, vazio |
| 7 | Web-design | `app.notion.com/p/37a44cb52e0080e6bf90fe8963c16928` | melhor insumo de design |
| 8 | Persona | `app.notion.com/p/58844cb52e00825ca61901e55b780714` | vazio |
| 9 | ICP | `app.notion.com/p/52244cb52e0082c0a4a7015b5a85d9b7` | vazio |
| 10 | Diretório de histórias do especialista | `collection://32444cb5-2e00-82e0-b94a-0788d165fc14` | vazio, resolve corpus de voz |
| 11 | Biblioteca de estudos e referências | `collection://97944cb5-2e00-8219-b45d-0784081dc7a7` | 2 linhas, precisa de 20+ |
| 12 | Lista de mineração | `collection://0b744cb5-2e00-8226-92a6-07f0f2b12c39` | schema ok, vazio |
| 13 | Canais de comunicação | `collection://0dc44cb5-2e00-827d-82d6-87a32306bcad` | 11 canais sem `Situação` |
| 14 | Linhas editoriais | `collection://0a844cb5-2e00-8298-ad64-8740f6cd871d` | vivo, 12 linhas |
| 15 | Calendário editorial | `collection://5d744cb5-2e00-83d8-9d79-874b07dbe0eb` | base central, 16 peças |
| 16 | Otimização | `collection://20a44cb5-2e00-8312-8f40-07e5af1ce75f` | schema pobre demais |
| 17 | Objetivos do cliente | `collection://47744cb5-2e00-8297-86c2-8716fe876902` | 5 objetivos datados |

Fora do Notion, os agentes desta equipe também leem `insumos-compartilhados/nucleo-comum/`
(confirmado acessível, é pasta irmã de `conteudo/` dentro de `SITE PAAPS/`) e escrevem em
`.claude/agents/` na raiz do repositório, não dentro de `conteudo/`.

---

## 3. Respostas que já dava para fechar sem te perguntar

Da lista de 5 perguntas da Parte 4.3 do documento-base, duas eu resolvi olhando o repositório:

1. **Onde ficam os `.claude/agents/*.md` reais:** na raiz do repositório, `SITE PAAPS/.claude/agents/`,
   não dentro de `conteudo/`. Confirmei a lista: `radar`, `tecela`, `copywriter-paaps`, `buscador-fotos`,
   `aplicador-visual`, `critico-design`, `critico-conteudo` (placeholder vazio) já existem lá. Os três
   que o documento-base marca como inexistentes (`minerador`, `pauteiro`, `critico`) de fato não
   existem. Isso bate com o diagnóstico da Parte 3.4.
2. **Acesso a `insumos-compartilhados/`:** confirmado, é pasta irmã de `conteudo/`, sem barreira de
   acesso.

As outras três seguem abertas, e são decisão sua, não coisa que eu resolvo lendo arquivo:

3. GTO atende PAAPS, Mallu e Fabi como três clientes com equipe igual, ou é uma equipe só com três
   contextos que ela troca.
4. A peça "Cuidar da ponta, impactar o mundo" (gravação 4) é conteúdo não registrado no Calendário,
   ou é a arte de um item que já existe lá com outro nome.
5. Quem é Fabi Vasconcellos no sistema e qual o serviço contratado.

---

## 4. Plano de ação, em fases

A ordem segue o próprio diagnóstico do documento-base: contexto de marca vazio é o que faz um
agente escrever como IA em vez de como PAAPS, então vem antes de qualquer agente novo rodar.
Cada fase só começa depois que a anterior está fechada ou explicitamente pulada por você.

### Fase 0 : decisões suas (não depende de mim escrever nada)
- Responder as três perguntas da seção 3.
- Decidir a ordem de construção dos três agentes novos (minerador, pauteiro, critico) e do
  `buscador-fotos` a reescrever. Meu palpite, pela Parte 2.7 do documento-base: `pesquisador-foto`
  primeiro, porque hoje ele opera com regras que a gravação real já provou erradas (bloqueia
  busca na internet, que é a porta de entrada de verdade).

### Fase 1 : preencher o contexto de marca no Notion
Ordem de impacto, direto da Parte 4.1 do documento-base:
1. Biblioteca de estudos e referências (Outra Saúde, Radis/Fiocruz, Ministério da Saúde, Agência
   Brasil, CFP, Conselho Nacional de Saúde, perfis de Instagram de referência)
2. Fluxo do trabalho (os três callouts vazios: links importantes, entregáveis, rotinas)
3. Persona e ICP
4. Diretório de histórias do especialista
5. `Situação` dos 11 canais
Isso é trabalho seu de preenchimento, ou uma conversa gravada comigo destilando o que você já
sabe, no mesmo método das quatro gravações que geraram a Parte 2 do documento-base.

### Fase 2 : ajustes de schema, sem depender de conteúdo novo
- `Lista de mineração` › `O que é`: acrescentar "Conteúdo próprio publicado" e "Vídeo da série"
- `Calendário` › acrescentar `Fonte minerada` (relation → Lista de mineração)
- `Calendário` › `Pasta do conteúdo`: passar a preencher sempre
- `Photo-bank` › tornar `Fonte`, `Licença`, `Crédito` obrigatórios de fato
- `Clientes` › `Pasta do cliente`: preencher com o caminho em disco
- Reescrever o schema de `Otimização` (hoje só 3 campos, não segura a leitura de performance que
  o `@paaps.brasil` já produz)

### Fase 3 : construir os agentes, um a um, com sua revisão entre cada
Segue a regra que já vale para o resto do ecossistema (`feedback_agente_workflow.md`): escrever um
agente, apresentar, esperar aprovação explícita, só depois o próximo.
1. Reescrever `pesquisador-foto` (hoje `buscador-fotos`) com as regras da Parte 2 do documento-base
2. `minerador`
3. `pauteiro`
4. `critico` (fecha o QA que hoje não tem dono, apontado como pendência aberta em `conteudo/CLAUDE.md`)

### Fase 4 : rodar um ciclo de ponta a ponta
Depois dos agentes construídos, rodar uma peça inteira pelo grafo da Parte 3.3 do documento-base,
das três portas de entrada até o Gate 2, e comparar o resultado com o padrão das quatro gravações.
É o teste real de que o sistema GTO saiu do papel.

---

## 5. O que eu preciso de você para destravar a Fase 0

As três perguntas da seção 3, e a ordem que você prefere para a Fase 3. Sem isso eu sigo, mas
adivinhando, e é exatamente o tipo de decisão que o `CLAUDE.md` da equipe de conteúdo deixa
para o seu julgamento, não para o meu.
