---
tags: [metodo, inventario]
origem: ".claude/agents/"
resumo: "Os 23 agentes de .claude/agents/, o que cada um faz e qual nota do cofre ele lê antes de executar"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-12
aliases: [índice de agentes, subagentes, roster]
---

# Índice de agentes

Os 23 agentes vivem em `.claude/agents/`, **e continuam lá**. Esta nota é índice, não
cópia: ela existe pra você saber qual agente acionar sem abrir 23 arquivos, e pra cada
agente virar um nó do grafo ligado ao conhecimento que ele consome.

A regra que vale antes de qualquer uma: **acionar o agente que já existe em vez de fazer
na mão.** Essa é a falha mais repetida aqui.

A arquitetura que organiza os agentes de conteúdo é a árvore de dois troncos, descrita
em [[arquitetura-agentes-v2-ai-first]] e desenhada em [[workflow-agentes-ai-first]]. Quem decide em qual tronco a
tarefa cai é a skill `paaps-orquestrador-conteudo`, não um agente.

## Conteúdo : o fluxo do carrossel, na ordem

| Agente | O que faz | Lê antes |
|---|---|---|
| `radar` | acha 20 pautas em ascensão antes de explodirem | : |
| `sentinela` | analisa performance real dos perfis e cruza com o dashboard | [[voz-paaps]] |
| `paaps-brasil` | a voz e a analista do @paaps.brasil: lê o próprio perfil como quem está em terapia | [[voz-paaps]] |
| `tecela` | tece o argumento: desnaturaliza, nomeia a contradição, situa na totalidade | [[base-teorica]] |
| `copywriter-paaps` | escreve o carrossel sem apagar nem atenuar o pensamento de ninguém | [[voz-paaps]] · [[base-teorica]] |
| `critico-conteudo` | lê a peça como leitor de fora, dá nota de 0 a 100 e decide se passa | [[voz-paaps]] · [[modelos-slide-paaps]] |
| `buscador-fotos` | cura o PhotoBank e entrega candidatas por slide. Quem escolhe é a Mallu | [[mapa-fontes-foto]] · [[visual-instagram]] |
| `aplicador-visual` | monta os slides em HTML/CSS e fotografa com Chrome headless | [[anatomia-do-carrossel-aprovado]] · [[identidade-aplicada]] |
| `critico-design` | avalia a peça contra a identidade PAAPS e as 17 categorias da Web Interface Guidelines | [[criterios-design]] · [[identidade-aplicada]] · [[visual-instagram]] |

## Canais : quem escreve para cada lugar

| Agente | Canal | Status |
|---|---|---|
| `mallu-carrossel` | carrossel do @amalluvasconcellos | vivo |
| `mallu-reels` | roteiro de Reel, serve os dois perfis desde 31/08/2026 | vivo |
| `mallu-linkedin` | LinkedIn pessoal, tom analítico B2B | vivo |
| `paaps-linkedin` | LinkedIn institucional, posicionamento B2G/B2B | vivo |
| `paaps-facebook` | Facebook institucional | ⚠ instrução inicial, aguarda sessão dedicada |
| `tradutor` | versão em outro idioma | ⚠ instrução inicial, aguarda sessão dedicada |

## Prospecção fria : os quatro, na ordem do fluxo

Detalhe de como o sistema opera em [[prospeccao-fria]].

| Agente | O que faz |
|---|---|
| `porteiro` | recebe o toque do n8n e decide QUEM pode receber e-mail agora, pela regra dos 60 dias. Só filtra |
| `buscador-leads` | busca ativa de organizações do ICP, só quando o pool do porteiro não fecha a meta |
| `carta-fria` | escreve o e-mail de cada lead, pesquisa o gancho local, dá nota de 0 a 100 e leva pro gate da Mallu |
| `escrivao` | depois do envio confirmado, registra a Atividade PROSPECÇÃO no CRM e move o status. É esse registro que arma o cooldown |

## Atendimento inbound

| Agente | O que faz |
|---|---|
| `gerente-atendimento` | roteador invisível: classifica a mensagem que chega e aciona o especialista certo |
| `cs` | primeiro atendimento humano: acolhe, faz triagem e agenda a Conversa de Diagnóstico |
| `suporte` | educa quem chega interessado na oferta. Não fecha preço |

## Projeto

| Agente | O que faz | Status |
|---|---|---|
| `ecoa` | agente da Comunidade ECOA | ⚠ instrução inicial, aguarda sessão dedicada |

## O que está torto e ainda não foi consertado

- **Três agentes estão incompletos** (`ecoa`, `paaps-facebook`, `tradutor`): têm só a
  instrução inicial e dizem isso na própria descrição. Acionar um deles hoje entrega
  pouco.
- **`critico-design` e `aplicador-visual` liam caminho morto** até 12/09/2026: apontavam
  pra `nucleo-comum/`, pasta que deixou de existir há meses. Liam nada e seguiam sem
  reclamar. Corrigido, e é o motivo de a varredura de caminho morto ter virado parte do
  `audita`.
- **Agente novo nasce por briefing**, nunca direto no arquivo: função única, entradas,
  saídas, fronteiras, um de cada vez, com aprovação explícita da Mallu. O processo está
  em `.claude/skills/cria-agente-paaps/SKILL.md`.

Ver também [[skills-ai-first]], que é o outro lado da máquina.

## Onde isso serve

Em [[estrategia-de-negocio]].
