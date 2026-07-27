---
name: reference-fontes-prospeccao
description: Onde procurar gancho local verificável de município mineiro, e quais domínios bloqueiam robô ou estão quebrados (SES-MG, câmaras, leismunicipais).
metadata:
  type: reference
---

Mapa de fontes para o gancho local da prospecção fria, levantado em 26/07/2026.

**Primeira parada, a mais produtiva:** a página **"Carta de Serviços"** do portal da própria
prefeitura (`*.mg.gov.br/portal/carta-servicos/<id>/`). Descreve o CAPS, a equipe nominada, a
abrangência regional e a história do serviço. É oficial, pública, aberta a robô e entrega o
*padrão* da rede em vez do evento da semana, que é exatamente o que a craft pede.

**Respondem bem:** portais de prefeitura `*.mg.gov.br`; `portalamm.org.br` (institucional e
história da AMM); `gov.br` (MTE, FUNDACENTRO, Fiocruz).

**Bloqueiam ou estão quebrados:**
- `saude.mg.gov.br/component/gmg/story/...` devolve 404 em toda tentativa, e o padrão
  `/noticias/` redireciona para a home. Matéria da SES-MG hoje é **confirmável por busca, não
  por leitura direta**; declarar essa limitação na autonota quando usar.
- `cmdiamantina.mg.gov.br` e `leismunicipais.com.br`: 403.
- `jornalpanoramaminas.com.br`: 403. `agenciaminas.mg.gov.br`: redireciona para comunicado.

**Consequência para sinal legislativo:** projeto de lei de município pequeno costuma ser
invisível fora do site da Câmara, e site de Câmara costuma bloquear robô. Sinal legislativo só
entra na carta com o texto na mão.

**How to apply:** consultar antes de abrir pesquisa de lead novo, para não gastar ciclos em
domínio que já se sabe fechado. O log operacional completo, com as correções do gate, fica em
`/Users/mac/Documents/SITE PAAPS/.claude/agent-memory/carta-fria/APRENDIZADO.md`. Ver
[[feedback-revalidar-gancho]].
