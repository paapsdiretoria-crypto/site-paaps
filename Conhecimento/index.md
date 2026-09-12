# Índice de Conhecimento

Catálogo de tudo que existe em `Conhecimento/`. Atualizado a cada `compila` e a cada
`salva isso como nota`. Para achar a página certa antes de abrir qualquer arquivo,
comece por aqui.

Duas seções, dois eixos diferentes: **Projetos** é o que a PAAPS é e diz (marca,
metodologia, comunidades). **Sistema** é como o Claude e os agentes operam aqui dentro,
não é conteúdo da PAAPS, é o próprio maquinário.

Nem todo `SITE PAAPS/` está aqui dentro: [[mapa-site-paaps]] cataloga as pastas
operacionais (`codigo/`, `automacoes/`, `conteudo/`, `projetos/`, `hyperframes/`) e o
que dentro delas ainda falta compilar.

---

# Projetos

## PAAPS (voz, identidade e institucional)

O coração compartilhado, lido por todos os agentes de conteúdo. Fica na raiz de
`Conhecimento/` porque a PAAPS é o projeto padrão deste cofre, não precisa de pasta
própria pra se diferenciar de nada.

**voz-e-identidade/:**
- [[voz-paaps]] : gabarito de voz e proibições ativas do ecossistema
- [[afeto-situado-mallu]] : como iniciar uma peça quando o gancho não vem da Mallu
- [[identidade-aplicada]] : paleta, tipografia, sistema Periódico, workflow Canva
- [[criterios-design]] : checklist do crítico de design
- [[qualidade-frontend]] : princípios de design para web e Canva
- [[visual-instagram]] : os 3 modos visuais e as regras fotográficas
- [[mapa-fontes-foto]] : hierarquia das fontes de fotografia documental
- [[anatomia-do-carrossel-aprovado]] : o que faz um carrossel aprovado funcionar
- [[modelos-slide-paaps]] : catálogo dos 8 modelos de slide e as 8 leis do @paaps.brasil

**institucional/:**
- [[o-que-e-a-paaps]] : definição institucional da PAAPS
- [[metodologia-paaps]] : a metodologia proprietária, base do que o contrato social chama PAAPS
- [[manual-marca-posicionamento]] : manual de marca e posicionamento público
- [[ficha-juridica-paaps]] : situação jurídica completa, objeto social, cláusula GovTech
- [[paaps-pesquisa-mercado]] : pesquisa de mercado da PAAPS
- [[runbook-navegacao-mcp]] : runbook operacional de navegação via MCP

**base-teorica/:**
- [[base-teorica/README]] : base teórica destilada dos fichamentos da Mallu para a
  Tecelã, hoje ancorada na Psicologia Sócio-Histórica. Arquivo vivo, cresce a cada ciclo.
  (Caminho completo no link porque existe outro `README.md` em `Arquivos/`, nome sozinho
  ficaria ambíguo no grafo.)

## ECOA

Comunidade ECOA (Psicologia Social Latina), projeto próprio e autocontido, por isso tem
pasta própria. Exportado do Notion; os nomes de arquivo já foram limpos do hash da
página original (12/09/2026).

**identidade-e-posicionamento/:** [[Quem somos]] · [[Propósito]] ·
[[Valores e Código de Conduta]] · [[Acordos]] · [[Identidade e Tom de Voz]] ·
[[ECOA PSI SOCIAL]] (nota: essa página lista links pra sub-páginas que nunca chegaram a
ser exportadas do Notion pra este cofre, ficam quebrados até alguém trazer o material)

**estrutura-e-rituais/:** [[ESTRUTURA DE GRUPOS 🏘️|Estrutura de Grupos]] ·
[[Rituais]] · [[Jornada da Comunidade]] · [[Canvas de comunidade]] · [[Boas Vindas]] ·
[[Boas Vindas (Roteiro vídeo)|Boas Vindas (roteiro de vídeo)]] ·
[[Espaço destinado a saber os dias dos encontros da|Dias dos encontros]] ·
[[Espaço destinado para conhecer os rituais da comun|Conhecer os rituais]] ·
[[Espaço destinado para saber mais sobre os outros m|Saber sobre os outros membros]]

**planejamento-de-conteudo/:**
[[ERAS - O PLANEJAMENTO TEMÁTICO DA ECOA|Eras, o planejamento temático]] ·
[[Personas]] · [[Impacto nas pessoas]] ·
[[Referências de COMUNIDADE tipo ECOA|Referências de comunidades do tipo ECOA]]

**porta-voz/:** [[PROGRAMA PORTA-VOZ|Programa Porta-Voz]] ·
[[Projeto Porta Voz Ecoa|Projeto Porta-Voz ECOA]] · [[Reunião Porta Voz|Reunião Porta-Voz]]

**reunioes/:** [[Reunião Equipe|Reunião de equipe]] ·
[[Reunião de Planejamento|Reunião de planejamento]] ·
[[Joyce (Assistente Social) + Ecoa|Joyce (assistente social) + ECOA]]

Também existe [[ecoa/CLAUDE|CLAUDE.md da ECOA]] (caminho completo no link: o vault tem
uns 8 arquivos `CLAUDE.md`, nome sozinho seria ambíguo), o contexto do projeto ECOA em
si, ler antes de qualquer tarefa sobre a comunidade.

*(TEAtrar, Periódico da Rede PAAPS, Plantão Psicológico e Bela Vista de Minas são os
outros projetos do ecossistema, listados no `CLAUDE.md` raiz. Nenhum tem material aqui
ainda; quando tiver, ganha seção própria aqui, do mesmo jeito que a ECOA ganhou.)*

---

# Sistema

Como o Claude e os agentes operam dentro deste cofre. Não é o que a PAAPS diz ou faz, é
o maquinário por trás.

**arquitetura-agentes/:**
- [[arquitetura_v2]] : árvore de dois troncos atual, tabela de agente/arquivo/status,
  pipeline visual em HTML/CSS (reescrito em 12/09/2026, substitui a arquitetura de 4
  camadas aposentada)
- [[workflow-agentes]] : o mesmo fluxo em diagrama, tronco a tronco (reescrito em
  12/09/2026)
- [[diagnostico-grafo-conteudo-2026-08-10]] : diagnóstico datado (10/08/2026) da pasta
  `conteudo/` na época; registro histórico, não reflete a estrutura atual

**solto:**
- [[padrao-llm-wiki]] : o padrão original de Karpathy por trás deste cofre, as três
  camadas e três operações na formulação em inglês, e o que ainda não aplicamos dele
  (frontmatter, ferramenta de busca)
- [[sistema-gto]] : inventário do Notion GTO (o que está vazio, o que está vivo),
  método real de produção destilado de 4 gravações, e uma proposta de 9 agentes cujo
  status (ativa, superada pela árvore de dois troncos, ou a reconciliar) ainda não foi
  decidido
- [[como-trabalhar-com-claude]] : erros comuns e correção, postura de iteração,
  Framework 4D, loop de delegação e diligência, e a ligação com o gate de aprovação que
  a PAAPS já pratica

---

Os logs automáticos de sessão (um por dia, gerados pelo hook `Stop`) não ficam mais
dentro de `Conhecimento/`: moraram aqui um tempo, mas são puro registro operacional do
`git status` de cada dia, não conhecimento curado, e só deixavam o índice poluído. Agora
vivem em `sessoes/`, na raiz do projeto, fora do cofre `segundo-cerebro`.
