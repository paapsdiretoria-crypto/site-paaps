---
setor: 
tipo: 
aliases: []
resumo: ""
status: vivo
atualizado: 
fontes: []
---

# Título da nota

A conclusão vem aqui, na primeira linha. Quem lê está no meio de outra tarefa e pode
parar depois desta frase.

## O que isso significa na prática

A regra escrita como regra, não como narrativa. "Nunca escrever X, escrever Y", não
"a gente decidiu que talvez fosse melhor".

## O que isso proíbe

O negativo explícito. É o que mais se perde quando a nota sai do contexto.

## De onde veio

Data da decisão e quem decidiu, quando for calibração da Mallu.

## Ligações

[[outra-nota]] · [[mais-uma]]

---

> **Como preencher o cabeçalho**
>
> `setor` : `1-fundadora` · `2-identidade` · `3-metodo` · `4-projetos` · `5-mercado` · `6-sistema`
>
> `tipo` : `proibicao` · `calibracao` · `conceito` · `pessoa` · `norma` · `tema` ·
> `evidencia` · `case` · `perfil` · `runbook` · `decisao` · `inventario` ·
> `resumo-de-fonte` · `sintese` · `comparacao`
>
> `aliases` : os outros nomes pelos quais alguém procura esta coisa. `[NR-1, NR1, risco
> psicossocial]`. Serve duas vezes: no Obsidian faz `[[NR-1]]` resolver mesmo não sendo o
> nome do arquivo, e na leitura por LLM é o termo que a pessoa realmente digita. Só
> quando o conceito tem mais de um nome; deixar `[]` quando não tiver.
>
> `resumo` : uma frase dizendo o que esta nota responde. **Teste: se o resumo só fica
> verdadeiro usando um "e", são duas notas.** É este campo que permite ao Claude decidir
> se abre o arquivo sem abrir o arquivo. **Sempre entre aspas duplas:** dois-pontos solto
> no meio de um valor quebra o YAML inteiro, e a nota perde setor, tipo e status de uma
> vez, em silêncio.
>
> `status` : `vivo` (vale hoje) · `historico` (foi superado, fica registrado com o
> motivo) · `pendente` (falta material)
>
> `atualizado` : AAAA-MM-DD da última revisão de conteúdo.
>
> `decidido-em` : AAAA-MM-DD, só quando for calibração da Mallu.
>
> `fontes` : caminho em texto simples do material bruto, nunca `[[link]]`, porque as
> pastas operacionais ficam fora do cofre de propósito.
