---
setor: 6-sistema
tipo: resumo-de-fonte
resumo: O padrão LLM Wiki de Karpathy nas palavras do autor, e o que dele ainda não aplicamos aqui
status: vivo
atualizado: 2026-09-12
---

# O padrão LLM Wiki

Fonte: [[llm-wiki]] (gist original de Andrej Karpathy, em inglês, sem as adaptações do
curso que geraram os nomes em português usados aqui).

Ideia central: em vez de só buscar nos documentos brutos a cada pergunta (o jeito RAG,
que redescobre tudo do zero toda vez), o agente **constrói e mantém um wiki
permanente**. Uma fonte nova não só entra pra busca depois, ela é lida, o que importa é
extraído, e integrado no que já existe: atualiza página de entidade, revisa resumo de
assunto, aponta onde o dado novo contradiz uma afirmação antiga. O conhecimento é
compilado uma vez e mantido atualizado, não redescoberto a cada pergunta.

## As três camadas do padrão, e como cada uma virou o quê aqui

| Camada do padrão original | O que é | Onde vive neste cofre |
|---|---|---|
| Raw sources | coleção de origem, imutável, a IA só lê | `Arquivos/` |
| The wiki | markdown gerado pela IA: resumo, entidade, conceito, síntese | `Conhecimento/` |
| The schema | documento de regras (`CLAUDE.md`), como o wiki é estruturado e o que fazer em cada operação | `CLAUDE.md` raiz, seção "Segundo Cérebro" |

## As três operações do padrão, e o nome que demos a cada uma

| Original | Aqui | O que faz |
|---|---|---|
| Ingest | `compila` | fonte nova em `Arquivos/` vira página em `Conhecimento/`, pode tocar 10-15 páginas de uma vez |
| Query (+ "salvar boa resposta como página") | `salva isso como nota` | uma resposta boa do chat vira página permanente, não some no histórico |
| Lint | `audita` | contradição entre páginas, afirmação velha superada, página órfã, conceito sem página própria, link faltando |

O padrão original permite duas velocidades de `compila`: **uma fonte por vez, ficando
por perto** (lendo os resumos, dizendo o que enfatizar), ou **em lote, com menos
supervisão**. A Mallu escolheu ir de fonte-a-fonte-com-conversa pra lote quando pediu
pra catalogar tudo de uma vez (12/09/2026), depois de ver o processo funcionar no
primeiro `compila` real (Sistema GTO). As duas formas são o padrão previsto, não um
desvio dele.

## index.md e log.md no padrão original

`index.md` é sobre conteúdo, `log.md` é sobre tempo. O padrão recomenda os dois. Aqui
adaptamos: `Conhecimento/index.md` existe e cumpre o papel de conteúdo. O papel de
`log.md` (registro cronológico do que mudou e quando) já era coberto por `sessoes/`
antes mesmo desta imersão existir, então não duplicamos um `log.md` novo dentro de
`Conhecimento/`, o log de sessão automático (hook `Stop`) já faz esse trabalho.

## Duas dicas do padrão que ainda não aplicamos aqui

- **Ferramenta de busca (`qmd` ou script próprio):** o padrão diz que o índice sozinho
  funciba bem até a casa de 100 fontes e algumas centenas de páginas, e é onde estamos
  hoje. Vale revisitar se `Conhecimento/` crescer muito além disso.
- **Frontmatter YAML + Dataview:** o padrão sugere marcar páginas com data e
  metadado pra gerar tabela dinâmica no Obsidian. Nenhuma página de `Conhecimento/`
  usa frontmatter hoje. Não é urgente, mas é um ganho barato se o volume crescer.

## Por que o padrão funciona, na formulação do próprio autor

A parte cansativa de manter uma base de conhecimento não é ler nem pensar, é a
arrumação: atualizar referência cruzada, manter resumo em dia, notar quando um dado
novo contradiz um antigo. Pessoas abandonam wiki porque o custo de manutenção cresce
mais rápido que o valor. A IA não se cansa, não esquece de atualizar uma ligação, e
mexe em 15 arquivos de uma vez. O trabalho de quem cura é escolher a fonte, direcionar
a análise, fazer a pergunta certa e pensar no que aquilo significa. O resto é da IA.
