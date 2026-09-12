---
setor: 0-raiz
tipo: inventario
resumo: Linha do tempo append-only do que entrou no cofre, o que virou nota e o que a auditoria achou
status: vivo
atualizado: 2026-09-12
---

# Log do cofre

Linha do tempo do que aconteceu **com o conhecimento**: o que entrou, o que foi
perguntado e virou nota, o que a auditoria achou. Append-only, entrada nova sempre no
fim.

Não confundir com `sessoes/`, na raiz do projeto: aquilo é o `git status` de cada dia,
registro operacional, e fica fora do cofre de propósito.

Formato fixo da entrada, para o log ser lido por comando:
`## [AAAA-MM-DD] operacao | assunto`

```bash
grep "^## \[" Conhecimento/log.md | tail -5
```

Operações: `compila` · `salva` · `audita` · `entrevista` · `estrutura`

---

## [2026-09-12] estrutura | Cofre reorganizado nos 6 setores

`Conhecimento/` deixou de ser uma lista de pastas temáticas soltas e passou a ter 6
setores numerados: `1-fundadora`, `2-identidade`, `3-metodo`, `4-projetos`,
`5-mercado`, `6-sistema`. As 51 notas que já existiam foram realocadas e os 305
caminhos que apontavam pra elas, espalhados por 45 arquivos do repositório (23 agentes,
3 skills, os CLAUDE.md de subpasta e o JSON do dashboard de agentes), foram reescritos.
Varredura de verificação rodou e achou um único caminho morto, `identidade-mallu.md`,
que já estava morto antes: é nota prometida e nunca escrita, citada em
`.claude/skills/edicao-reel-mallu/DECISOES.md`. Entrou no backlog.

Três coisas resolvidas junto: o cofre `segundo-cerebro/` foi apagado, porque o cofre
que a Mallu de fato abre é `Conhecimento/` e aquele nunca chegou a ser usado; a
duplicata de `llm-wiki.md` na raiz saiu, ficando só a que mora no cofre; e
`Conhecimento/Arquivos/` foi assumida como a camada de fontes brutas de texto, que é
onde o Obsidian Web Clipper salva e o que a Mallu chama de "a pasta Arquivos".

## [2026-09-12] compila | llm-wiki.md e o artigo do MindStudio

Duas fontes sobre o padrão que sustenta este cofre. Duas correções vieram delas:

Uma fonte gera **várias** notas, não uma. O gist é literal: *"A single source might
touch 10-15 wiki pages."* Virou a regra que governa toda escrita aqui.

O `log.md` que você está lendo precisava existir. Eu tinha escrito em
`6-sistema/padrao-llm-wiki.md` que `sessoes/` já cobria esse papel, e estava errado:
`sessoes/` registra arquivo alterado, não conhecimento produzido.
