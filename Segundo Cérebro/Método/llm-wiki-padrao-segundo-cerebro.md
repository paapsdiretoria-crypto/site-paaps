---
tags: [metodo, infraestrutura]
origem: "Gist do GitHub, karpathy/442a6bf555914893e9891c11519de94f, capturado 12/09/2026"
resumo: "O padrão LLM Wiki de Andrej Karpathy é a arquitetura de fundo que sustenta o próprio Segundo Cérebro da PAAPS"
serve-para: ["[[paaps-ai-first]]"]
status: vivo
atualizado: 2026-09-14
---

# O padrão LLM Wiki (Andrej Karpathy)

Um wiki markdown persistente e interligado, mantido por um agente de IA, é diferente de RAG comum: em vez de recuperar fragmento de documento a cada pergunta e "redescobrir" o conhecimento do zero, o agente **acumula** conhecimento num wiki que fica cada vez mais rico, com referência cruzada já feita, contradição já sinalizada. Três camadas: **fontes brutas** (imutáveis, nunca editadas), **o wiki** (páginas markdown que o agente escreve e mantém), **o schema** (documento tipo CLAUDE.md que ensina o agente a manter o wiki). Guarda `index.md` (catálogo por categoria) e `log.md` (registro cronológico append-only).

## Por que entra em Método, não como curiosidade técnica

Calibrado pela Mallu, 13/09/2026: "guardar em Método". Este documento não é insumo de conteúdo nem tese da PAAPS: é a **descrição do padrão arquitetural que o próprio Segundo Cérebro já implementa**. O ciclo de 5 passos de [[Visão Geral]] (Arquivos → Fontes → atualizar setores → Índice → Log) é uma implementação quase literal do padrão de Karpathy: Arquivos = "raw sources", as capas de setor = "the wiki", `CLAUDE.md` + `Contrato de caminhos` = "the schema", `Índice.md` + `Log.md` = "index.md" + "log.md".

## O que confirma que a arquitetura atual está no caminho certo

- "Uma fonte gera várias notas" (já em [[Visão Geral]]) é o mesmo princípio do gist: "a single source might touch 10-15 wiki pages".
- O Contrato de caminhos (capa em vez de nota individual) resolve, à moda PAAPS, o mesmo problema que o gist chama de manutenção de cross-reference: o custo de manter referência atualizada precisa ficar perto de zero.
- A recomendação do gist de "manter notas focadas" (10 notas de 1.000 palavras batem uma de 10.000) já é a prática usada nas faxinas registradas em [[Log]] (ex.: quebra do manual de marca em 12 notas).

## O que ainda não está implementado, e vale considerar

- **Lint periódico**: o gist recomenda checagem de saúde do wiki (contradição entre páginas, órfã sem link de entrada, reivindicação desatualizada). A "faxina do grafo" de [[Visão Geral]] já cobre parte disso, mas não tem cadência fixa nem checagem de contradição entre notas.
- **Busca dedicada** (o gist cita a ferramenta `qmd`) só vale a partir de "algumas centenas" de notas; o cofre PAAPS ainda não chegou nessa escala.

## Onde isso serve

Referência arquitetural para quem for justificar, ajustar ou explicar a estrutura do Segundo Cérebro para a Mallu ou para outro agente, e para decidir se vale investir em lint periódico ou busca dedicada conforme o cofre cresce.
