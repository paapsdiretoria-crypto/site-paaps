---
name: cria-agente-paaps
description: Use para criar ou refinar agentes do ecossistema PAAPS. Acione em frases como "cria o agente X", "monta o próximo agente", "preciso de um agente que faça Y", "vamos construir o Z", "refina esse agente". Não use para criar skills (use cria-skill-paaps) nem para configurar hooks (use settings.json diretamente).
---

# Criar Agentes PAAPS

## Lei central

Agente sem função única e fronteiras explícitas vai fazer o que for mais fácil, não o que foi pedido. Antes de escrever o arquivo, o briefing do agente precisa estar fechado e aprovado.

```
NÃO ESCREVA O ARQUIVO DO AGENTE ANTES DE TER CLAREZA SOBRE:
FUNÇÃO ÚNICA / ENTRADAS / SAÍDAS / FRONTEIRAS
```

---

## Regra de processo (não negociável)

Um agente por vez. Apresentar o arquivo completo. Aguardar aprovação explícita de Mallu. Só avançar para o próximo agente quando ela disser que pode.

Isso não é burocracia. Agente aprovado apressadamente precisa ser refeito. Retrabalho custa mais do que a pausa.

---

## Passo 1 — Briefing obrigatório

Antes de escrever qualquer linha do agente, conduza um briefing. Faça as perguntas abaixo uma por vez. Não avance sem a resposta anterior.

**Pergunta 1:** Qual é a função única desse agente? O que ele faz que nenhum outro agente na cadeia faz?

**Pergunta 2:** O que ele recebe como entrada? (arquivo específico, output de qual agente anterior, instrução direta de Mallu)

**Pergunta 3:** O que ele produz como saída? (arquivo salvo onde, em qual formato, o que o próximo agente vai usar)

**Pergunta 4:** O que ele NÃO deve fazer? Quais são as fronteiras do papel dele?

Se Mallu não souber responder alguma dessas perguntas, o agente ainda não está pronto para ser escrito. Explore com ela até ter clareza — especialmente na pergunta 4, que é onde mais agentes falham.

---

## Passo 2 — Anatomia obrigatória de um agente PAAPS

Todo agente tem esta estrutura, nesta ordem:

### Frontmatter

```yaml
---
name: nome-do-agente
description: [Uma frase: quando acionar + o que faz]. Ler [arquivos relevantes] antes de executar.
model: sonnet
tools: [lista explícita — só as ferramentas que o agente realmente usa]
memory: project   # somente para agentes que acumulam padrões entre sessões (Radar, Sentinela)
color: [opcional — para identificação visual na UI]
---
```

**Regras técnicas fixas:**
- `model:` sempre alias curto (`sonnet`, não `claude-sonnet-4-6`). ID completo gera erro no IDE.
- `tools:` sempre declarar explicitamente. Não usar `*` ou omitir.
- Incluir `Write` somente se o agente precisa gravar arquivo. Incluir `Agent` somente se o agente despacha subagentes.
- `memory: project` somente para Radar e Sentinela (acumulam contexto entre ciclos). Os demais não precisam.

**Quais tools cada perfil de agente costuma precisar:**

| Perfil | Tools típicas |
|---|---|
| Pesquisa / inteligência | WebSearch, WebFetch, Read, Write |
| Leitura crítica / síntese | Read, WebSearch |
| Produção de conteúdo | Read, Write |
| Orquestrador de cadeia | Read, Write, Agent |
| Revisão / crítica | Read |
| Aplicação visual | Read, Write (+ ferramentas MCP se aplicável) |

### Seção de identidade

Abre o arquivo com "Você é o [Nome] do PAAPS." Seguido de uma ou duas frases que definem a postura, não só a função. O agente precisa saber quem ele é, não só o que ele faz.

Referência: como o Radar começa com "Você funciona como um editor de pauta de primeira linha, no estilo das redações da Globo, Folha..." — isso ancora o comportamento, não só a tarefa.

### Memória interna (quando aplicável)

Agentes de inteligência (Radar, Sentinela) devem verificar seu arquivo de memória antes de começar:

```
## Antes de começar
Consulte `.claude/agent-memory/[nome]/MEMORY.md` para verificar:
- [O que esse agente acumula entre sessões]
Se o arquivo não existir, comece sem ele e crie ao final.
```

### Missão por sessão

O que o agente produz em cada execução. Específico. Com número quando possível (Radar: 20 pautas; não "várias pautas").

### Protocolo de trabalho

Como o agente executa sua função. Inclui:
- Critérios de qualidade (o que aprova, o que descarta)
- O que ele NÃO faz (fronteiras explícitas — esta seção é obrigatória)
- Como ele se relaciona com o agente anterior e o próximo

### Entrega

Onde salva o arquivo de output. Formato exato do nome do arquivo. O que o próximo agente vai fazer com esse output.

Padrão de caminhos:
- Outputs de ciclo: `conteudo/ciclos/[nome]-YYYY-MM-DD.md`
- Briefing final: `conteudo/briefing-YYYY-MM-DD.md`
- Memória interna: `.claude/agent-memory/[nome]/MEMORY.md`

---

## Passo 3 — Protocolo de handoff (contexto isolado)

Cada agente da cadeia recebe apenas o que precisa para sua função. Nunca herda o histórico completo da sessão.

O arquivo do agente deve deixar claro o que ele lê e só isso. Se o agente precisa do output do Radar, escreve "Leia `conteudo/ciclos/radar-YYYY-MM-DD.md`". Se precisa do output do Sentinela também, escreve os dois arquivos. Não escreve "leia tudo que os agentes anteriores produziram" — isso é contexto gordo e gera resposta genérica.

Contexto cirúrgico:
```
# O que você recebe
- Output do [Agente X]: `conteudo/ciclos/[x]-YYYY-MM-DD.md`
- [Se necessário] Briefing de Mallu: instrução direta na sessão

# O que você produz
- Arquivo salvo em: `conteudo/ciclos/[nome]-YYYY-MM-DD.md`
- O que o próximo agente usa: [especificar o quê exatamente]
```

Agentes que despacham subagentes (Narrador, orquestradores) devem montar o contexto do subagente explicitamente no arquivo. Nunca "passe o contexto para o próximo" sem especificar o que vai nesse contexto.

---

## Passo 4 — Padrões que definem um agente PAAPS bem construído

Estes padrões aparecem nos agentes aprovados e devem aparecer em todos:

**Postura definida, não só função.** O agente sabe quem é além do que faz. Radar é editor de pauta. Tecelã é cérebro criativo e neurodiverso. Narrador é o último agente antes de Mallu. Essa definição ancora o comportamento em casos ambíguos.

**"O que você NÃO é" explicitado.** Tecelã tem uma seção inteira dizendo o que não é: não academicista, não elitizado, não infantilizante, não panfletário, não neutro. Essa seção evita os desvios mais comuns sem precisar especificar cada caso.

**Critério de aprovação claro.** O agente sabe quando seu trabalho está bom. Radar tem o "Parâmetro de aprovação" com critérios nomeados. Um agente que não sabe quando parar vai produzir mais do que precisa ou parar cedo demais.

**Fronteiras com o agente anterior e o próximo.** O Narrador diz explicitamente "você não é o único criador" e "não toma a decisão de publicar — só Mallu decide". Isso evita que o agente ultrapasse seu papel ou que fique aquém dele.

**Tom adequado ao destinatário.** Narrador escreve para Mallu ("pode usar linguagem interna, pode ter anotações como '(confirmar com Mallu)'"). Radar escreve handoff para agentes. Saber quem vai ler o output muda como o agente escreve.

---

## Passo 5 — Auditoria anti-IA antes de salvar

Passe o texto completo do agente pela skill `evita-padrao-ia-imersao-claude`.

Agentes PAAPS são lidos por outros agentes e por Mallu. Texto com cara de IA no arquivo do agente treina o agente a produzir texto com cara de IA.

Atenção especial a:
- Abertura genérica: "Você é um agente especializado em..." — troque por "Você é o X do PAAPS" e defina o papel com especificidade.
- Listas de adjetivos: "criativo, estratégico e analítico" — descreva o comportamento, não as qualidades.
- Instruções vagas: "produza conteúdo de qualidade" — especifique o que é qualidade naquele contexto.
- Gerúndio em cascata nas instruções: "lendo o arquivo, analisando os dados e produzindo o output" — use imperativos diretos.
- "Não é X, é Y": proibido.

---

## Passo 6 — Apresentação e aprovação

Após escrever o arquivo:

1. Mostre o conteúdo completo do arquivo na resposta (não só o caminho)
2. Aponte os pontos de decisão que você tomou e o raciocínio por trás
3. Indique se há algo no briefing que ainda precisa de confirmação
4. Aguarde aprovação explícita de Mallu antes de qualquer próximo passo

Se Mallu pedir revisão, refaça e reapresente. Não avance para o próximo agente enquanto o atual não estiver aprovado.

---

## Passo 7 — Registrar no Banco de Agentes (Notion)

Após aprovação explícita de Mallu, registrar o agente no Banco de Agentes do Notion usando o MCP Notion (`notion-create-pages`):

**Database:** `collection://36ec6a72-659c-4353-ac2f-7a8d4f5192c6`

**Propriedades obrigatórias:**
- `Nome`: nome do agente (kebab-case)
- `Status`: "Ativo" (se completo) ou "Incompleto"
- `Camada`: "Inteligência" / "Produção" / "Apoio" / "Captação"
- `Arquivo`: caminho relativo (ex: `.claude/agents/nome.md`)
- `Tools`: lista das ferramentas declaradas no frontmatter
- `Recebe de`: de qual agente ou fonte recebe input
- `Passa para`: para qual agente ou destino passa o output
- `Memory`: `__YES__` se `memory: project` no frontmatter
- `Aprovado por Mallu`: `__YES__` após aprovação explícita

**Conteúdo da página:** incluir o arquivo completo do agente.

Este passo é obrigatório. Agente sem registro no Notion não é visível para Mallu aprovar.

---

## Referência rápida: agentes da cadeia principal

| Agente | Função | Recebe de | Passa para |
|---|---|---|---|
| radar | 20 pautas em ascensão | pesquisa web | sentinela + tecela |
| sentinela | análise de performance e estratégia | windsor AI + dashboards | tecela |
| tecela | raciocínio crítico ancorado | radar + sentinela | narrador |
| narrador | briefing completo por canal | tecela (+ radar + sentinela se precisar) | Mallu |
| [agente de canal] | conteúdo final para o canal | briefing do narrador | Mallu |
| critico-conteudo | revisão de voz e proibições | output do agente de canal | agente de canal (revisão) |

Esta tabela é referência. Consulte os arquivos dos agentes para os detalhes exatos de cada handoff.
