---
name: processos-notion
description: Regra de governança do Notion da PAAPS - onde documentar e onde as bases (EMPs) podem viver. Acione SEMPRE antes de criar página, database, view ou documentação no Notion, e em pedidos como "documenta isso no Notion", "cria a base X", "registra esse fluxo/manual", "organiza o Notion". Impede largar doc em rodapé de página e impede criar/duplicar EMP em página solta.
---

# Processos do Notion PAAPS: fonte única

O Notion da PAAPS tem arquitetura de **fonte única**. Antes de criar qualquer coisa no
Notion, passe por estas três perguntas. Se a resposta violar uma regra, pare e corrija.

## Regra 1: onde vai a documentação?

Todo fluxo, registro, documento, orientação ou manual da área de **Leads & Clientes**
nasce como **página própria dentro da wiki `Documentações de Leads & Clientes`**.

- Wiki: https://app.notion.com/p/22244cb52e00816c9826ec018ebc5c85
- Data source: `collection://22244cb5-2e00-8139-88f8-000b5e857669`
- Propriedade de título: `Página` (não `title`). Ao criar, use parent `data_source_id`
  com essa collection; se falhar, use a URL da wiki.
- PROIBIDO: colar documentação no rodapé de uma página de visualização (ex.: no fim da
  página `Leads & Clientes`).

Para outras áreas (Marketing, Projetos), a documentação vai na wiki de documentação da
área correspondente listada no Brain, nunca num rodapé avulso.

## Regra 2: onde vive uma base de dados (EMP)?

Toda base `(EMP) ...` vive uma vez só, dentro do **Brain**, agrupada por função.

- Brain: https://app.notion.com/p/22244cb52e0081d0b92dc0750cf223e0
- Seções do Brain: Atalhos, Agenda, Processos, Metas, Marketing, Rotina, Projetos
  Internos, Membros, Clientes, Projetos, Atividades.
- Todas as outras páginas (ex.: `Leads & Clientes`) são apenas **views** dessas EMPs,
  nunca donas.
- Antes de criar qualquer database: **verificar se a EMP já existe no Brain** (buscar por
  nome) e referenciá-la ou criar uma view.
- PROIBIDO: criar uma EMP nova, ou duplicar uma existente, no rodapé/corpo de uma página
  de trabalho. Base nova nasce no Brain; a página de trabalho recebe uma view.

### Caso real (o erro que originou esta skill)

Em jul/2026 o Claude criou `(EMP) Captação` (editais, fundos, prêmios) solta no rodapé de
`Leads & Clientes`. Sintoma: o ID nasceu com prefixo diferente das outras EMPs. Corrigido
movendo a base para o Brain, seção Clientes. Nenhuma EMP pode nascer fora do Brain.

## Regra 3: skills e agentes = cérebro da IA

As skills e os agentes que governam o Claude ficam espelhados no **cérebro da IA**:

- Página: `CÉREBRO DA I.A. DO PAAPS.BRASIL` - https://app.notion.com/p/37144cb52e0080a29c08dd7901f45231
- `Banco de Skills`: data source `collection://9df44e0a-a9ea-4308-aad9-53f2416a8bb0`
  (schema: Nome, Arquivo, Categoria, Quando acionar, Status, Notas).
- `Banco de Agentes`: `68f9d9ef-cffe-464a-9db5-1fb60185823a`.

Ao criar ou alterar uma skill ou agente, espelhar a entrada correspondente aqui (a skill
`espelho-notion` faz a sincronização completa e literal).

## Checklist antes de tocar no Notion

1. É documentação? Então página nova na wiki de documentação da área. Nunca rodapé.
2. É uma base de dados? Então ela já existe no Brain? Se sim, use view; se não, crie no
   Brain e ponha view na página de trabalho. Nunca uma EMP solta.
3. É skill ou agente? Registre no Banco de Skills / Banco de Agentes.
