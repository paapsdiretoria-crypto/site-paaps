---
tags: [metodo, sintese]
origem: "Cofre anterior, reorganizado em 12/09/2026"
resumo: "A arquitetura de agentes em árvore de dois troncos que vale hoje, com roster de agente por arquivo e status"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-12
aliases: [árvore de dois troncos, dois troncos, arquitetura de agentes]
---

# Arquitetura dos Agentes PAAPS : árvore de dois troncos

**Última revisão:** 12/09/2026, na auditoria que reescreveu este arquivo. Substitui a
arquitetura de 4 camadas (jun/2026, aposentada em 27/07/2026). A fonte de decisão viva
do fluxo é a skill `.claude/skills/paaps-orquestrador-conteudo/SKILL.md`; este arquivo e
`conteudo/CLAUDE.md` situam, ela decide. Se este arquivo e `conteudo/CLAUDE.md`
divergirem no futuro, `conteudo/CLAUDE.md` vence, por ser lido a cada sessão.

> O diagrama companheiro `arquitetura_v2_agentes_paaps_orquestrador_criticos.svg` ainda
> desenha a arquitetura antiga de 4 camadas. Está desatualizado e precisa de redesenho;
> não confiar nele até lá.

---

## A decisão que abre toda tarefa: em qual tronco ela cai

Julgamento do orquestrador, registrado no artefato `T` de cada rodada.

**Tronco A (a Mallu puxa o gancho):** nasce da criatividade dela e da cultura que
consome. Roda fora de calendário fixo e entrega um lote que serve aos dois perfis.

**Tronco B (o PAAPS rodando por frequência):** garante frequência e resposta à
atualidade no @paaps.brasil, mesmo quando nada do que ela vive toca o noticiário.
Começa no Radar.

## Papel de cada agente

| Agente | Arquivo | Função | Status |
|---|---|---|---|
| **Radar** | `.claude/agents/radar.md` | 20 pautas em ascensão. Dois modos: propositivo (padrão do Tronco B) e dirigido (serviço ao Tronco A, quando ela já tem tese) | ✅ Definido |
| **@paaps.brasil** | `.claude/agents/paaps-brasil.md` | Analisa a performance real do próprio perfil e alimenta a Tecelã. Também escreve carrossel do @paaps.brasil | ✅ Definido |
| **Tecelã** | `.claude/agents/tecela.md` | Conectora criativa, leitura crítica ancorada na base teórica. **Entra em toda rodada, dos dois troncos**, mesmo sem escrever nada (modo aprendizado) | ✅ Definido |
| **Copywriter PAAPS** | `.claude/agents/copywriter-paaps.md` | Escreve a peça final a partir do raciocínio da Tecelã. Sucessor do antigo Narrador (que escrevia só um documento de briefing) | ✅ Definido |
| **Buscador de Fotos** | `.claude/agents/buscador-fotos.md` | Cura o PhotoBank, entrega candidatas por slide, quem escolhe é a Mallu | ✅ Definido |
| **Aplicador Visual** | `.claude/agents/aplicador-visual.md` | Monta a peça. Pipeline atual: HTML/CSS fotografado via Chrome headless, ver seção abaixo | ✅ Definido |
| **Crítico de Conteúdo** | `.claude/agents/critico-conteudo.md` | Lê o carrossel pronto do Copywriter, dá nota de 0 a 100, decide se segue ou volta pra reescrita. Substitui o antigo gate de texto da Mallu (o gate dela hoje é depois do Aplicador Visual, na peça montada) | ✅ Definido (ver nota abaixo) |
| **Crítico de Design** | `.claude/agents/critico-design.md` | Avalia peça visual pronta contra identidade PAAPS e diretrizes de interface | ✅ Definido |
| **Mallu Carrossel** | `.claude/agents/mallu-carrossel.md` | Carrossel para @amalluvasconcellos (perfil pessoal). Processo iterativo, uma rodada por vez | ✅ Definido |
| **Mallu LinkedIn** | `.claude/agents/mallu-linkedin.md` | Posts de LinkedIn pessoal, tom analítico B2B | ✅ Definido |
| **Mallu Reels** | `.claude/agents/mallu-reels.md` | Roteiro de Reel, serve @malluvasconcellos e @paaps.brasil | ✅ Definido |
| **PAAPS LinkedIn** | `.claude/agents/paaps-linkedin.md` | Posts de LinkedIn institucional, B2G/B2B | ✅ Definido |
| **PAAPS Facebook** | `.claude/agents/paaps-facebook.md` | Conteúdo institucional pro Facebook | ⚠ Instrução inicial, aguardando sessão dedicada |
| **Interlocutor ECOA** | `.claude/agents/ecoa.md` | Conteúdo/gatilho da comunidade ECOA | ⚠ Incompleto, não entra em produção antes de sessão dedicada |
| **Sentinela** | `.claude/agents/sentinela.md` | Inteligência estratégica, cruzava dashboard + perfis | ⛔ Fora do fluxo desde 27/07/2026. Arquivo ainda no disco, aponta pra caminho velho de dashboard. Decidir se aposenta de vez |
| **Tradutor** | `.claude/agents/tradutor.md` | Papel original: processar a resposta da Mallu em briefing final | ⚠ Instrução inicial, não aparece mais no diagrama vigente de `conteudo/CLAUDE.md`. Status a confirmar: aposentado como o Sentinela, ou ainda tem função a definir |

**Nota sobre o Crítico de Conteúdo:** `conteudo/CLAUDE.md` ainda lista "`critico-conteudo`
é placeholder vazio" nas pendências abertas, mas o arquivo real
(`.claude/agents/critico-conteudo.md`) tem 211 linhas e descreve um processo completo de
nota e decisão. A pendência parece resolvida e não atualizada no `CLAUDE.md` de
`conteudo/`. Vale confirmar com a Mallu e corrigir aquele arquivo também.

## Onde cada agente busca contexto

Núcleo comum: `Conhecimento/2-identidade/voz/`.

| Agente | Lê |
|---|---|
| Todos | `voz-paaps.md` |
| Quem inicia peça sem gancho da Mallu | `afeto-situado-mallu.md` |
| Tecelã, Copywriter | `base-teorica/README.md` |
| Buscador de Fotos | `mapa-fontes-foto.md` + `visual-instagram.md` |
| Aplicador Visual | `identidade-aplicada.md` + `visual-instagram.md` |
| Crítico de Design | `criterios-design.md` + `qualidade-frontend.md` |

## O pipeline visual não passa mais por Canva

Desde 31/08/2026, o caminho oficial do Aplicador Visual é **HTML/CSS fotografado com
Chrome headless**, o template mora em `conteudo/templates/carrossel-paaps/`. É a mesma
técnica de construção do site institucional (`codigo/site/`): HTML/CSS/JS puro, sem
framework nem bundler. O Aplicador aplica a identidade PAAPS (paleta, League Spartan,
sistema Periódico, 3 modos visuais, 8 tipos de slide), fotografa cada slide, exporta em
PNG e entrega no Drive. **Canva virou exceção**, usado só quando alguém precisa editar a
peça manualmente depois de pronta.

## Pendências abertas

- **`ecoa` incompleto.** Não entra em produção antes de sessão dedicada com ela.
- **Nó visual.** A régua subiu ao nível Radilson e não há fonte própria que a sustente.
- **Corpus de voz pessoal da Mallu não mapeado** (reels, carrosséis e LinkedIn do
  @amalluvasconcellos). Sem ele, o gate de voz para o perfil pessoal roda com afeto
  emprestado do corpus institucional.
- **`sentinela` fora do fluxo**, arquivo ainda aponta pra caminho velho de dashboard.
  Decidir se aposenta.
- **`tradutor` não aparece no diagrama vigente.** Confirmar se está aposentado junto com
  o Sentinela, ou se ainda tem papel a definir.
- **A pendência de `critico-conteudo` em `conteudo/CLAUDE.md` parece desatualizada**, ver
  nota na tabela acima.

## O que mudou da arquitetura de 4 camadas

A arquitetura antiga (Inteligência → Captação de Mallu → Produção por Canal →
Aprovação final) está aposentada desde 27/07/2026. O Sentinela saiu do fluxo. O antigo
Narrador virou o Copywriter PAAPS, que agora escreve a peça final direto, não um
documento de briefing intermediário. A decisão de tronco (A ou B) substitui a
sequência fixa em camadas: cada tarefa começa perguntando em qual tronco ela cai, não
percorrendo as mesmas quatro etapas sempre.

## Onde isso serve

Em [[estrategia-de-negocio]].
