# CLAUDE.md : Equipe de Conteúdo PAAPS

Produzir conteúdo que soa como Mallu Vasconcellos e como o PAAPS, nunca como IA.

**A fonte da verdade do fluxo é a skill `paaps-orquestrador-conteudo`**
(`.claude/skills/paaps-orquestrador-conteudo/SKILL.md`). Este arquivo situa; ela decide.
Todos os agentes: `.claude/agents/`. Topologia declarada no Banco de Agentes do Notion.

---

## Regra de Ouro

**Nenhum agente publica nada.** Toda peça passa pela aprovação final da Mallu.
**Acionar o agente que já existe**, mesmo quando a tarefa está fora do fluxo automático ideal.
Execução paralela improvisada para tarefa que já tem dono apaga o log de aprendizado do agente.
**Cada agente é construído um a um, com revisão individual dela.**

---

## A árvore de dois troncos (27/07/2026)

O ecossistema não roda um fluxo só. A primeira decisão de toda tarefa é **em qual tronco ela cai**,
e isso é julgamento do orquestrador, registrado no artefato `T`.

```
        TRONCO A                               TRONCO B
  (a Mallu puxa o gancho)            (o PAAPS rodando por frequência)
          │                                       │
  Fase 0: setting e ambiente               radar + paaps-brasil
  Fase 1: contexto situado                        │
          + âncora teórica                     tecela
          │                                       │
     LOTE DE CONTEÚDOS                    copywriter-paaps
          │                                       │
  gate de voz, peça a peça                 buscador-fotos
      ╱          ╲                                │
@amalluvasconcellos  @paaps.brasil        aplicador-visual
                                                  │
                                                Mallu
```

**Tronco A:** nasce da criatividade dela e da cultura que ela consome. Roda fora do calendário e
entrega um **lote** que serve aos dois perfis. Cada peça do lote passa pelo gate de voz.

**Tronco B:** existe para garantir frequência e resposta à atualidade no @paaps.brasil, mesmo
quando nada do que ela está vivendo toca o noticiário. Começa no Radar.

**A Tecelã entra em toda rodada, dos dois troncos**, mesmo quando não escreve nada da peça
(modo aprendizado). Pular apaga uma rodada de aprendizado que não volta.

**O Radar tem dois modos:** propositivo (padrão do Tronco B, sem tema definido) e dirigido
(serviço ao Tronco A, quando ela já tem tese e quer embasamento).

**Quando a Mallu não fornece o gancho:** o afeto que inicia a peça é reconstituído pelo método de
`../insumos-compartilhados/nucleo-comum/afeto-situado-mallu.md`. Regra dura: afeto sempre ancorado
em artefato real (comentário, campo, dado datado, sobra declarada), nunca vivência inventada em
primeira pessoa.

*(A arquitetura antiga em 4 camadas, com Sentinela e Narrador, está aposentada. O Sentinela saiu
do fluxo e o Narrador virou `copywriter-paaps`.)*

---

## Onde cada agente busca contexto

Núcleo comum: `../insumos-compartilhados/nucleo-comum/`

| Agente | Lê |
|---|---|
| Todos | `voz-paaps.md` |
| Quem inicia peça sem gancho da Mallu | `afeto-situado-mallu.md` |
| radar | protocolo de fontes dentro do próprio `radar.md` |
| paaps-brasil | própria memória em `.claude/agent-memory/paaps-brasil/` |
| tecela | `base-teorica/README.md` |
| copywriter-paaps | `voz-paaps.md` + `base-teorica/README.md` + próprio `APRENDIZADO.md` |
| buscador-fotos | `mapa-fontes-foto.md` + `visual-instagram.md` |
| aplicador-visual | `identidade-aplicada.md` + `visual-instagram.md` |
| critico-design | `criterios-design.md` + `qualidade-frontend.md` |
| critico-conteudo | `voz-paaps.md` (agente ainda vazio, ver pendências) |

---

## Artefatos de handoff

Uma pasta por rodada: `conteudo/ciclos/AAAA-MM-DD/`. Um agente só inicia sua etapa quando o
artefato de entrada existe. Nomes e conteúdo na seção 8 da skill (`T`, `A0`, `A1`, `A2`, `DEC`,
`B1` a `B4`, `QA`).

Entregas finais de peça: `conteudo/instagram/<perfil>/entregas/AAAA-MM-MÊS/<sessão>/`.

---

## Pendências abertas

- **`critico-conteudo` é placeholder vazio.** O QA final da seção 8 não tem dono, então hoje quem
  julga o texto é quem escreveu. É o ponto mais frágil do fluxo rodando sem a Mallu.
- **`ecoa` incompleto.** Não entra em produção antes de sessão dedicada com ela.
- **Nó visual.** A régua subiu ao nível Radilson e não há fonte própria que a sustente.
- **Corpus de voz pessoal da Mallu não mapeado** (reels, carrosséis e LinkedIn do
  @amalluvasconcellos). Sem ele, o gate de voz para o perfil pessoal roda com afeto emprestado do
  corpus institucional.
- **`sentinela` fora do fluxo**, com arquivo ainda no disco apontando para caminho velho de
  dashboard. Decidir se aposenta.

---

## Convenções técnicas

- Agentes em `.claude/agents/` (raiz do projeto).
- Skills em `.claude/skills/`, formato pasta + `SKILL.md`.
- Anúncio de etapa obrigatório (`>>> ETAPA <id>`) em todo agente do fluxo: é como a Mallu
  acompanha o andamento na tela de controle.
- Agent teams requerem `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em settings.json.
