---
setor: 6-sistema
tipo: resumo-de-fonte
aliases: [LLM Wiki, Karpathy, segundo cérebro, raw wiki schema]
resumo: "O padrão LLM Wiki de Karpathy nas palavras do autor, e o que dele ainda não aplicamos aqui"
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
| Raw sources | coleção de origem, imutável, a IA só lê | `Conhecimento/Arquivos/` |
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

`index.md` é sobre conteúdo, `log.md` é sobre tempo. O padrão recomenda os dois, e aqui
os dois existem: [[index]] e [[log]].

> **Correção de 12/09/2026.** Esta nota dizia antes que `sessoes/` já cumpria o papel do
> `log.md` e que por isso ele não precisava existir. Estava errado: `sessoes/` registra
> qual arquivo o git viu mudar no dia, não o que virou conhecimento. São coisas
> diferentes, e o `log.md` foi criado.

## Os números do padrão, e o que eles NÃO significam

O gist fala em "~100 sources, ~hundreds of pages", e o artigo em "under ~100K words".
**Nenhum dos dois é limite do Obsidian**, que roda com dezenas de milhares de notas.

| O número | Do que ele fala mesmo | Onde estamos |
|---|---|---|
| ~100 fontes, centenas de notas | até onde o `index.md` sozinho basta para achar a nota certa, sem instalar ferramenta de busca | 6 fontes, 95 notas |
| ~100 mil palavras | até onde dá para colar o cofre inteiro numa janela de chat. Não é o nosso caso: o Claude Code lê do disco, guiado pelo índice | 61,5 mil palavras |

O que degrada primeiro não é o Obsidian nem o tamanho do cofre: é a capacidade de achar
a nota certa a partir do índice. Por isso o `resumo` de uma linha e os `aliases` são a
parte mais importante do cabeçalho.

## O que do padrão ainda não aplicamos aqui

- **Ferramenta de busca (`qmd` ou script próprio):** só faz sentido quando o índice
  sozinho começar a errar. Longe disso.
- **Plugin Dataview:** o frontmatter já está em todas as notas desde 12/09/2026, então a
  tabela dinâmica é só instalar o plugin quando alguém quiser. O dado já existe.

## Aliases: a dica do artigo que aplicamos em 12/09/2026

> *"Add a brief alias line if a concept has multiple names."*

69 notas ganharam `aliases` no cabeçalho. Serve para duas coisas ao mesmo tempo: no
Obsidian, `[[em dash]]` e `[[NR-1]]` passam a resolver para a nota certa mesmo não sendo
o nome do arquivo; e na leitura por LLM, o alias é o termo que alguém realmente digita
quando procura aquilo.

## Por que o padrão funciona, na formulação do próprio autor

A parte cansativa de manter uma base de conhecimento não é ler nem pensar, é a
arrumação: atualizar referência cruzada, manter resumo em dia, notar quando um dado
novo contradiz um antigo. Pessoas abandonam wiki porque o custo de manutenção cresce
mais rápido que o valor. A IA não se cansa, não esquece de atualizar uma ligação, e
mexe em 15 arquivos de uma vez. O trabalho de quem cura é escolher a fonte, direcionar
a análise, fazer a pergunta certa e pensar no que aquilo significa. O resto é da IA.
