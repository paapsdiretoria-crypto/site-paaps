# Relatório de drift: Notion x disco x dashboard hardcoded

Gerado em 2026-07-15. Compara três fontes sobre o mesmo roster de agentes:

1. **Notion**: database "Banco de Agentes" (`collection://36ec6a72-659c-4353-ac2f-7a8d4f5192c6`), 12 linhas.
2. **Disco**: frontmatter de `.claude/agents/*.md`, 16 arquivos.
3. **Dashboard hardcoded**: array `AGENTES` em `codigo/dashboard-agentes/js/agentes.js`, 4 entradas.

Só fatos observados. Nenhuma correção foi aplicada em nenhuma das três fontes.

---

## 1. Quem existe no disco e não está no Notion

6 arquivos em `.claude/agents/` sem nenhuma linha correspondente no Banco de Agentes:

| Arquivo | description (frontmatter) | tools declaradas |
|---|---|---|
| `critico-conteudo.md` | "INCOMPLETO. Instrução inicial. Aguardando sessão dedicada com Mallu." | (nenhuma; placeholder) |
| `mallu-carrossel.md` | "Produz carrosséis para @amalluvasconcellos... Para carrossel do @paaps.brasil, use o agente paaps-brasil" | Read, Write |
| `paaps-facebook.md` | "INCOMPLETO. Instrução inicial. Aguardando sessão dedicada com Mallu." | (nenhuma; placeholder) |
| `paaps-linkedin.md` | "Produz posts para o LinkedIn institucional do PAAPS. Posicionamento B2G/B2B, conversão institucional." | Read, Write |
| `sentinela.md` | "Agente de inteligência estratégica. Acionar em paralelo com o Radar para analisar performance real..." | WebSearch, WebFetch, Read, Write, Bash, Edit |
| `tradutor.md` | "INCOMPLETO. Instrução inicial. Aguardando sessão dedicada com Mallu." | (nenhuma; placeholder) |

`sentinela.md` e `paaps-linkedin.md` chamam atenção: não são placeholders "INCOMPLETO", têm description e tools completas, mas estão totalmente ausentes da fonte de verdade. Enquanto o Notion não ganhar uma linha para eles, o dashboard (que só deve ler do Notion) nunca vai mostrá-los.

## 2. Quem está no Notion e não existe no disco

2 das 12 linhas do Notion têm o campo `Arquivo` vazio:

| Nome (Notion) | Status | Notas |
|---|---|---|
| `escritor-de-projetos` | (vazio) | "EM CONSTRUÇÃO" |
| `buscador-captação` | (vazio) | "EM CONSTRUÇÃO" |

Nenhum dos dois enums declarados para `Status` (Ativo/Incompleto/Planejado) foi usado: o campo está literalmente nulo, não "Planejado". Sem `Arquivo` preenchido não dá para gerar um `id` estável, então o `sincroniza.mjs` exclui os dois de `agentes[]` e os registra em `sem_arquivo` no JSON final, em vez de inventar um slug a partir do Nome.

## 3. Nome do Notion divergente do slug do Arquivo

Uma linha tem o campo `Nome` diferente do id derivado do `Arquivo`:

- `Nome`: `buscador-fotos-photobank`
- `Arquivo`: `.claude/agents/buscador-fotos.md` → id real: `buscador-fotos`

Não quebra a resolução (o script usa `Arquivo` como fonte do id, não `Nome`), mas quem procurar "buscador-fotos-photobank" no disco não vai achar; quem procurar "buscador-fotos" no Notion por Nome também não vai achar diretamente.

## 4. Dashboard hardcoded: o roster já estava errado antes deste ticket

`js/agentes.js` tem 4 agentes: `decifrador`, `radar`, `tecela`, `narrador`. Comparado às outras duas fontes:

- **`decifrador` não existe em lugar nenhum.** Nem no disco, nem no Notion. O Notion tem a linha `@paaps.brasil` apontando para `.claude/agents/paaps-brasil.md` (nome real: `paaps-brasil`), e a nota do Notion descreve isso como "Fusão do analista (ex-decifrador) com o escritor de carrossel". O hardcoded ainda usa o nome antigo pré-fusão.
- **`narrador` não existe em lugar nenhum.** Nem no disco, nem no Notion. A linha `copywriter-paaps` do Notion diz explicitamente nas Notas: "Renomeado do antigo narrador." O hardcoded nunca foi atualizado para o nome novo.
- Como consequência, os `TUBOS` hardcoded (`decifrador→radar`, `radar→tecela`, `tecela→narrador`) descrevem uma cadeia linear de 4 elos que não corresponde à topologia real. A topologia resolvida a partir do Notion tem 7 tubos, com `radar` e `paaps-brasil` alimentando `tecela` em paralelo, e os dois também alimentando `copywriter-paaps` direto, além do laço `critico-design ↔ aplicador-visual`.
- **Estado retratado como incompleto quando a fonte de verdade diz o contrário.** `tecela` está hardcoded como `estado: 'em-construcao'`, mas o Notion tem `Status: Ativo`, `Aprovado por Mallu: sim`, `Memory: sim`. `narrador` está hardcoded como `estado: 'em-construcao'`, mas o sucessor dele no Notion (`copywriter-paaps`) tem `Status: Ativo`, `Aprovado por Mallu: sim`. O dashboard mostra como incompletos dois agentes que a fonte de verdade já trata como ativos e aprovados.
- Nenhum dos outros 8 agentes ativos do Notion (`mallu-linkedin`, `mallu-reels`, `critico-design`, `buscador-fotos`, `ecoa`, `aplicador-visual`, e os 6 do disco sem linha no Notion) aparece no hardcoded.

## 5. Onde a topologia do Notion diverge do que os próprios .md dizem sobre o fluxo

Comparação entre `Recebe de`/`Passa para` do Notion e a `description` de cada `.md`:

| Par | Notion | .md do agente | Convergência |
|---|---|---|---|
| radar → tecela | `radar.Passa para = "tecela"` | `radar.md`: "Primeiro agente do fluxo de carrossel: passa para a Tecelã." | Bate. |
| radar/@paaps.brasil → tecela | `tecela.Recebe de = "radar (...) + @paaps.brasil (...)"` | `tecela.md`: "Acionar depois que o Radar entrega as pautas e o @paaps.brasil entrega a leitura do perfil." | Bate. |
| tecela/radar/@paaps.brasil → copywriter-paaps | `copywriter-paaps.Recebe de = "tecela (...) + radar (...) + @paaps.brasil (...)"` | `copywriter-paaps.md`: "Recebe o raciocínio da Tecelã, as pautas do Radar e a leitura de perfil do @paaps.brasil... Último agente antes de Mallu." | Bate, inclusive o destino final em Mallu (não um agente). |
| @paaps.brasil → tecela | `paaps-brasil.Passa para` inclui `"tecela (handoff de análise)"` | `paaps-brasil.md`: "...e alimenta a Tecelã." | Bate. |
| aplicador-visual ↔ critico-design | `critico-design.Recebe de = "Aplicador Visual (...)"`, `Passa para = "Aplicador Visual (correções) (...)"` | `critico-design.md`: "Avalia peças visuais... Acionar quando uma peça está pronta para revisão antes de publicar." Não cita "Aplicador Visual" nem "agente de canal" por nome. | Não contradiz, mas o `.md` é mais vago: o Notion carrega detalhe topológico (o laço de correção com o Aplicador Visual) que não está escrito no próprio agente. |
| briefing → mallu-linkedin / mallu-reels | `Recebe de = "briefing do narrador (ou instrução direta de Mallu)"` em ambas as linhas | Nenhum dos dois `.md` (`mallu-linkedin.md`, `mallu-reels.md`) menciona receber de "narrador"; ambos dizem apenas "Ler nucleo-comum/voz-paaps.md antes de escrever", sem declarar entrada de outro agente. | Nem contradiz nem confirma: o `.md` é silencioso sobre a origem. Mas o texto do Notion usa "narrador", que é o nome pré-renomeação de `copywriter-paaps` (ver item 4). Nem o Notion nem os dois `.md` foram atualizados para o nome novo. |

Nenhuma divergência de sentido contrário foi encontrada (nenhum `.md` descreve um fluxo que contradiga o Notion); as lacunas são de o Notion ter texto desatualizado (`narrador`) ou de o `.md` ser mais vago que o Notion.

---

## Os 3 drifts mais graves

1. **`decifrador` e `narrador` não existem em lugar nenhum, mas ainda estão hardcoded no dashboard.** São os dois ids raiz do bug que motivou este ticket: o Notion já documenta as duas renomeações (`decifrador`→fusão em `paaps-brasil`, `narrador`→`copywriter-paaps`), mas `js/agentes.js` nunca foi atualizado.
2. **Estado incorreto exibido para agentes já aprovados.** `tecela` aparece hardcoded como `em-construcao` enquanto o Notion diz Ativo + Aprovado por Mallu + Memory ligada; o mesmo vale para `narrador`, cujo sucessor `copywriter-paaps` está Ativo e Aprovado. O dashboard atualmente mente sobre o estágio de dois agentes em produção.
3. **6 agentes do disco (incluindo `sentinela` e `paaps-linkedin`, ambos com description e tools completas) não têm nenhuma linha no Banco de Agentes.** Enquanto isso não for corrigido no Notion, `sincroniza.mjs` não tem como colocá-los na constelação: a ponte só pode normalizar o que a fonte de verdade contém.

Achado secundário: 2 linhas do Notion (`escritor-de-projetos`, `buscador-captação`) estão sem `Arquivo` e sem `Status` preenchido (nem "Planejado"), o que as torna registros incompletos mesmo dentro da própria fonte de verdade.
