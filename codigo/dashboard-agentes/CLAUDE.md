# CLAUDE.md - Constelação PAAPS (dashboard de controle dos agentes)

Painel 3D local (Three.js) que mostra os agentes como astronautas ligados por tubos, e
executa/acompanha o fluxo agêntico de produção de conteúdo. Roda só na máquina da Mallu.
Abrir com duplo clique em `ABRIR-DASHBOARD.command`. Mallu não programa: nada de placeholder
vago nem instrução que dependa de conhecimento técnico.

## Regra de ouro: a fonte da verdade é o Notion, nunca o código

Os agentes, o status e a topologia (quem passa para quem) vêm do **Banco de Agentes** no Notion,
via `dados/constelacao.json`. **Nunca hardcode agente em JS.** A primeira versão tinha os agentes
escritos à mão e virou ficção em menos de uma hora quando dois foram renomeados (`decifrador` →
`paaps-brasil`, `narrador` → `copywriter-paaps`). Detalhe em [[project_ponte_notion_agentes]].

Para atualizar depois de mexer no Notion:
1. Puxar o Banco de Agentes com o MCP do Notion (`notion-query-data-sources`, data source
   `collection://36ec6a72-659c-4353-ac2f-7a8d4f5192c6`).
2. Salvar o `{results:[...]}` num arquivo e rodar `node ponte/sincroniza.mjs entrada.json dados/constelacao.json`.
3. `sincroniza.mjs` resolve `Recebe de`/`Passa para` (texto livre) para ids por igualdade estrita;
   o que não resolve vai para `nao_resolvidos`, nunca é adivinhado. O id sai do campo `Arquivo`, não
   do `Nome` (que já divergiu).
4. `js/dados.js` deriva o fluxo subindo pelo `recebe_de` a partir do agente FINAL (`FLUXOS.carrossel.final`).
   Renomear um agente do meio não quebra nada. Agentes fora do fluxo (ex.: `critico-design`, que é
   Apoio e só é alcançável descendo) ficam de fora sozinhos.

## Honestidade da tela é requisito, não estética

Este painel controla gasto real de API. Ele nunca pode fingir.

- **Simulação x real:** sem servidor-ponte ou sem chave, roda em `MODO.SIMULACAO` (trilhas reais,
  execução nenhuma). O selo `SIMULAÇÃO` fica fixo no visor, e as faixas FAZENDO/ACHANDO dizem que
  não há execução por trás. Mensagem enviada em simulação fica `entregue: false`, nunca fingida.
- **Progresso não mensurável nunca vira zero nem número inventado.** Agente sem trilha declarada
  mostra `- -` e "progresso não mensurável", nunca uma barra estimada por cronômetro. Mesmo
  princípio que o `@paaps.brasil` aplica aos Reels.
- Ao afirmar que algo funciona, **verifique no navegador de verdade** (Playwright/Chrome), com
  screenshot. Vários defeitos aqui (visor ilegível, tela dentro do vidro, botão intclicável) só
  aparecem renderizando, nunca lendo o código.

## Contrato da trilha e do progresso

- As etapas de cada agente ficam em `js/trilhas.js`, **derivadas do corpo do `.md`** do agente
  (não inventadas). Cada agente do fluxo anuncia a etapa em que entra com uma linha `>>> ETAPA <id>`.
  A ponte lê esse anúncio para mover a barra: é o que a torna medida, não estimada.
- Mexeu na trilha de um agente aqui? Mexa no anúncio `>>> ETAPA` do `.md` dele também. Os dois
  precisam usar os mesmos ids, senão a barra trava.
- Etapa com `portao: true` = o agente PARA e espera a validação da Mallu (regra dura dele, não
  travamento). Some no motor como estado `AGUARDANDO_MALLU`.

## Execução real: só a Mallu liga

- `ponte/servidor.mjs` (Node + `ws` + `@anthropic-ai/claude-agent-sdk`) serve o dashboard, abre
  WebSocket e executa cada agente como **query própria do SDK** (não como subagente: o stream
  interno de subagente não volta pro pai, e o visor precisa ver o pensamento).
- O SDK **exige `ANTHROPIC_API_KEY`**, cobrada por uso, à parte da assinatura Claude (a Anthropic
  não deixa o SDK usar login claude.ai). Só a Mallu cria a chave e cola em `ponte/.env` (git-ignorado).
  **Nunca escrever segredo em arquivo commitado.**
- "Pausar e retomar" ao vivo **não existe** no SDK (só `interrupt()`). O que existe é "pausar no
  handoff": o fluxo para antes de acordar o próximo agente.

## Armadilhas de cena já pagas (não repetir)

- `controls.minDistance` alto cancela silenciosamente a atracagem da câmera; o visor fica com ~4px.
  Está em 0.7.
- O visor precisa ficar FORA da bolha de vidro do capacete (z=0.53 > raio 0.5), senão a refração
  duplica o texto num fantasma.
- O bezel do visor é desenhado dentro do canvas (`visor.js`), não como anel 3D: como anel ele passa
  na frente dos cantos abaulados e corta o cabeçalho.
- Atracar num agente tem que ganhar do fluxo: se `aoAcordar` chamar a câmera com a Mallu atracada,
  ela é arrancada de onde escolheu olhar. O agente atracado também para de flutuar (alvo que balança
  não se lê nem se clica).
- Animação por relógio de parede (`performance.now()` com teto de dt), não `THREE.Clock`: o Chrome
  estrangula `requestAnimationFrame` em aba fora de foco, e a cena parece travada (renderiza, mas
  contadores em 0). Por isso a maquete precisa ser aberta EM FOCO para as animações correrem.

## Estado e pendências

Ver as memórias [[project_dashboard_constelacao]] (decisões de design aprovadas pela Mallu, fluxo 02
Estação de Prospecção) e [[project_ponte_notion_agentes]] (topologia dos 6 agentes). Antes de mexer
em agente, checar drift com `ponte/RELATORIO-DRIFT.md` (Notion x `.claude/agents/*.md` x código).
