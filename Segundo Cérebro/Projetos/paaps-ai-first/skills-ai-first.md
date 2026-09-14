---
tags: [metodo, inventario]
origem: ".claude/skills/"
resumo: "As 50 skills de .claude/skills/, agrupadas por para que servem, e quais delas são do PAAPS e quais vieram de terceiros"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-13
aliases: [índice de skills, catálogo de skills]
---

# Índice de skills

As 50 skills vivem em `.claude/skills/`, **e continuam lá**. Esta nota é índice, não
cópia.

**Formato obrigatório:** cada skill é uma *pasta* com `SKILL.md` dentro. Arquivo `.md`
solto não é carregado, e pasta vazia também não. Foi a causa de um mês de erros
"Unknown skill", corrigido em 06/07/2026.

Metade do catálogo (as 20 de vídeo) veio de fora, instalada via `npx skills`. Elas
funcionam, mas não carregam a voz da PAAPS: quem garante isso é a `edicao-reel-paaps` ou
a `edicao-reel-mallu` por cima.

## Fazer a própria máquina

| Skill | Acionar quando |
|---|---|
| `cria-agente-paaps` | criar ou refinar agente: briefing obrigatório, anatomia, fronteiras, anti-IA |
| `cria-skill-paaps` | criar skill nova pelo ciclo RED-GREEN-REFACTOR aplicado a documentação de comportamento |
| `meta-architect` | transformar briefing informal em instrução estruturada em XML |
| `instala-skill-segura` | instalar skill externa só depois de auditoria de segurança |
| `find-skills` | descobrir e instalar skill do ecossistema aberto |
| `espelho-notion` | sincronizar agentes, skills e hooks COMPLETOS para as databases do Notion |

## Escrita e voz

| Skill | Acionar quando |
|---|---|
| `paaps-orquestrador-conteudo` | **fonte da verdade do fluxo de conteúdo.** Julga o tronco, aplica os 7 guardrails, opera o gate de voz. Ler antes de qualquer produção |
| `copy-carrossel` | escrever copy de carrossel na voz da Mallu, com filtro anti-IA embutido |
| `legendas-otimizadas` | virar roteiro pronto em legenda otimizada de Instagram ou TikTok |
| `evita-padrao-ia-imersao-claude` | auditar e reescrever texto removendo padrão de IA em português |

## Aquisição

| Skill | Acionar quando |
|---|---|
| `email-prospeccao` | escrever ou refinar e-mail de prospecção fria. É a fonte única da craft; o agente `carta-fria` aponta pra ela |
| `fase2-aquecimento` | alguém RESPONDEU ao e-mail frio: da resposta até a Conversa de Diagnóstico agendada |
| `precificacao-paaps` | ⚠ **pasta vazia, não existe SKILL.md.** A skill não carrega. Ver pendências abaixo |

## Design e entrega visual

| Skill | Acionar quando |
|---|---|
| `frontend-design` | construir interface de alta qualidade. Ativa sozinha em `codigo/site/` |
| `design-parceiro` | construir ou revisar componente visual: modo AUDITOR (anti-padrão de IA) e modo PARCEIRO (cocriação) |
| `ajuste-fino-tipografico` | acabamento tipográfico de peça em HTML/CSS que a Mallu vai olhar. Traz scripts que MEDEM quebra de linha, em vez de julgar por print |
| `exporta-html-pdf` | converter peça em HTML/CSS em PDF, PNG ou JPG para anexo ou inscrição |
| `benchmark-visual` | benchmark comparativo de UI/UX a partir de uma referência |
| `simulacao-ux` | simular a experiência de personas navegando em sites |
| `web-design-guidelines` | revisar código de UI contra as Web Interface Guidelines |

## Vídeo da PAAPS

| Skill | Acionar quando |
|---|---|
| `edicao-reel-paaps` | editar vídeo já gravado em Reel do **@paaps.brasil**: League Spartan + Evermore, nunca escurecer, texto fora do rosto |
| `edicao-reel-mallu` | editar em Reel do perfil **pessoal**: Impact + Times New Roman, bege com destaque vinho. Identidade INCOMPATÍVEL com a do PAAPS, não misturar |
| `busca-trilha-pixabay` | o vídeo precisa de trilha e ainda não tem uma escolhida |

## Vídeo HyperFrames : 20 skills de terceiros

Família instalada via `npx skills`, renderiza vídeo a partir de HTML. `hyperframes` é a
porta de entrada e roteia para as outras.

**Motor:** `hyperframes` · `hyperframes-core` · `hyperframes-cli` · `hyperframes-animation` ·
`hyperframes-keyframes` · `hyperframes-creative` · `hyperframes-media` · `hyperframes-registry` ·
`media-use` · `remotion-to-hyperframes`

**Formatos prontos:** `general-video` · `motion-graphics` · `slideshow` · `music-to-video` ·
`faceless-explainer` · `talking-head-recut` · `embedded-captions` · `product-launch-video` ·
`pr-to-video` · `website-to-video`

## Notion

| Skill | Acionar quando |
|---|---|
| `processos-notion` | **antes** de criar qualquer página, database ou view: as regras de fonte única |
| `notion-knowledge-capture` | capturar decisão da conversa como página estruturada |
| `notion-research-documentation` | pesquisar no workspace, sintetizar várias páginas e criar relatório |

## Máquina da Mallu

| Skill | Acionar quando |
|---|---|
| `ferramenta-local-mallu` | construir, consertar ou remover automação que roda na máquina dela: atalho, agendamento, notificação |
| `pede-segredo-a-mallu` | um fluxo precisa de senha, token ou chave que só ela tem. Monta um `.command` de dois cliques. Eu nunca vejo o valor |
| `recupera-ditado` | ler de volta um ditado por voz já gravado em `~/Ditado/` |

## Gestão

| Skill | Acionar quando |
|---|---|
| `paaps-pm-agil` | conduzir projeto do briefing ao wrap-up: OKRs, roadmap, backlog, registro em tempo real no Notion |

## Pendências

- **`precificacao-paaps/` é uma pasta vazia** desde 10/08/2026, sem `SKILL.md` (execução:
  escrever ou apagar é tarefa avulsa no Notion, não aqui).
- **A régua de preço existe, mas espalhada:** está em
  `automacoes/prospeccao-email/respostas/mantena-margem-e-precificacao.md` e
  `mantena-calculo-equipes.md`, fora do cofre. Vira nota de `5-mercado/` na Fase 2.

Ver também [[agentes-ai-first]], que é o outro lado da máquina.

## Onde isso serve

Em [[estrategia-de-negocio]].
