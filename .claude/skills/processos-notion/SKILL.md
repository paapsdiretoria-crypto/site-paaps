---
name: processos-notion
description: Como mexer no Notion da PAAPS - todas as regras de fonte única e organização. Acione SEMPRE antes de criar página, database, view ou documentação no Notion, e em pedidos como "documenta isso no Notion", "cria a base X", "registra esse fluxo/manual", "organiza o Notion", "audita o Brain". Impede largar doc em rodapé de página e impede criar/duplicar EMP em página solta; mantém toda base encontrável pelo Brain.
---

# Como mexer no Notion da PAAPS: fonte única e Brain

O Notion da PAAPS tem arquitetura de **fonte única**. Antes de criar ou mover qualquer
coisa, passe pelo checklist. Se algo violar uma regra, pare e corrija.

## Endereços fixos

- **Brain (índice de todas as bases):** https://app.notion.com/p/22244cb52e0081d0b92dc0750cf223e0
- **Wiki `Documentações de Leads & Clientes`:** https://app.notion.com/p/22244cb52e00816c9826ec018ebc5c85
  (data source `collection://22244cb5-2e00-8139-88f8-000b5e857669`; título = propriedade `Página`)
- **Cérebro da IA** (`CÉREBRO DA I.A. DO PAAPS.BRASIL`): https://app.notion.com/p/37144cb52e0080a29c08dd7901f45231
  - `Banco de Skills`: `collection://9df44e0a-a9ea-4308-aad9-53f2416a8bb0`
  - `Banco de Agentes`: `68f9d9ef-cffe-464a-9db5-1fb60185823a`

## Regra 1: onde vai a documentação?

Todo fluxo, registro, documento, orientação ou manual nasce como **página própria dentro
da wiki de documentação da área** (ex.: `Documentações de Leads & Clientes` para a área
comercial; as outras wikis de documentação estão listadas no Brain, seções Marketing e
Projetos).

- PROIBIDO: colar documentação no rodapé de uma página de visualização (ex.: no fim de
  `Leads & Clientes`).

## Regra 2: toda base (EMP) tem que ser encontrável pelo Brain

O **Brain** é a fonte de verdade de onde estão as bases. Duas formas válidas de uma base
estar no Brain, e a escolha depende de a base ter ou não uma página-dona em uso:

- **Base órfã ou nova** (sem página de trabalho que a use): a casa dela é dentro do
  Brain, na seção de função certa. Se falta uma base, ela nasce no Brain; a página de
  trabalho recebe uma **view**.
- **Base em uso, que vive dentro de uma página de trabalho** (ex.: as bases do `Sistema
  GTO`, a `(EMP) Anotações` na página `Anotações (paaps CEO)`): NÃO mover, senão a página
  quebra. Em vez disso, o Brain recebe um **link** para ela (seção "Bases indexadas por
  link"). Assim continua encontrável sem perder a casa.

Regras duras:

- Toda página que não é o Brain é **view/visualização**, nunca dona exclusiva escondida.
- PROIBIDO criar uma EMP nova, ou duplicar uma existente, no rodapé/corpo de uma página
  de trabalho sem que ela apareça no Brain (por casa ou por link).
- Antes de criar qualquer database: **buscar no Notion se a EMP já existe** e reusar.

### Caso real (o erro que originou esta skill)

Em jul/2026 o Claude criou `(EMP) Captação` (editais, fundos, prêmios) solta no rodapé de
`Leads & Clientes`. Sintoma: o ID nasceu com prefixo diferente das outras EMPs. Corrigido
movendo a base para o Brain (seção Clientes). Na mesma varredura apareceram bases em uso
fora do Brain (GTO, `(EMP) Anotações`, cérebro da IA); essas foram **linkadas** no Brain,
não movidas.

## Regra 3: skills e agentes = cérebro da IA

Ao criar ou alterar uma skill ou agente, espelhar a entrada no `Banco de Skills` /
`Banco de Agentes` (a skill `espelho-notion` faz a sincronização completa e literal).

## Rotina de auditoria do Brain

Quando pedirem "audita o Brain" (ou na varredura agendada):

1. `notion-search` por `EMP base de dados database` e por termos de área, page_size alto.
2. Para cada objeto `type: database` retornado, checar se aparece no Brain (conteúdo do
   Brain ou nas seções de link).
3. Base fora do Brain = achado. Se órfã, propor mover; se em uso, propor link.
4. Registrar os achados no log de auditoria (ver abaixo). Nunca mover base em uso sem
   confirmar com a Mallu.

Bases conhecidas que são per-cliente e NÃO entram individualmente no Brain: as
`(EMP) Notas Individuais: @Pessoa` (uma por cliente, geradas por template).

## Checklist antes de tocar no Notion

1. É documentação? Página nova na wiki de documentação da área. Nunca rodapé.
2. É base de dados? Já existe (buscar)? Se sim, reusar/view. Se não: órfã/nova nasce no
   Brain; em uso ganha link no Brain. Nunca EMP invisível ao Brain.
3. É skill ou agente? Registrar no Banco de Skills / Banco de Agentes.
