---
setor: 0-raiz
tipo: inventario
aliases: [linha do tempo, histórico do cofre]
resumo: "Linha do tempo append-only do que entrou no cofre, o que virou nota e o que a auditoria achou"
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

## [2026-09-12] compila | CLAUDE.md raiz explodido em notas específicas

O `CLAUDE.md` de 539 linhas era a fonte mais densa do repositório e nunca tinha sido
lido como fonte. Virou 30 notas específicas, uma por coisa que alguém pode precisar
saber sozinha: sete proibições, sete calibrações, cinco notas jurídicas, cinco páginas
de pessoa, quatro de método e norma, três de mercado, duas de sistema.

**O arquivo não encolheu**, por decisão da Mallu: as notas nascem primeiro, a redução do
`CLAUDE.md` vira decisão dela depois, e as proibições ativas e a situação jurídica nunca
saem de lá.

Duas coisas apareceram na leitura:

**Contradição em aberto sobre o título da Mallu.** O `CLAUDE.md` a descreve como
"Psicóloga Social"; a calibração de 22/08/2026 diz "formanda em psicologia", porque o
título é regulado pelo CFP e o CRP só sai em fevereiro. As duas não podem valer ao mesmo
tempo em peça pública. Registrado em [[quem-sou-eu]] e [[formacao-e-crp]], sem escolher
por ela: em peça externa vale "formanda", que é a versão sem risco.

**245 travessões dentro do próprio cofre**, em notas que documentam a regra que proíbe
travessão. Corrigidos nas sete que eram síntese minha. Ficaram de fora
`manual-marca-posicionamento` (88) e `paaps-pesquisa-mercado` (38), que são conversão
dos DOCX dela: mexer na pontuação daquilo é editar conteúdo dela, não dívida minha.

## [2026-09-12] entrevista | Índice de agentes e de skills

Os 23 agentes e as 50 skills viraram [[agentes]] e [[skills]], índice sem cópia: os
arquivos continuam em `.claude/`. Três defeitos achados na leitura: `critico-design` e
`aplicador-visual` liam `nucleo-comum/`, pasta extinta (corrigido); três agentes estão
incompletos e dizem isso na própria descrição; `precificacao-paaps/` é pasta vazia sem
`SKILL.md`, então a skill não carrega.

## [2026-09-12] estrutura | Aliases e cabeçalho YAML válido em todas as notas

69 notas ganharam `aliases`, a dica de terminologia consistente do padrão:
*"Add a brief alias line if a concept has multiple names."* Agora `[[NR-1]]`,
`[[em dash]]`, `[[GovTech]]`, `[[colaborador]]` e `[[SUS]]` resolvem para a nota certa
mesmo não sendo o nome do arquivo.

**Defeito achado na validação:** sete cabeçalhos tinham YAML quebrado, porque o `resumo`
carregava dois-pontos no meio do valor. Cabeçalho quebrado não falha com erro: o Obsidian
simplesmente ignora o bloco inteiro, e a nota perde setor, tipo e status de uma vez, em
silêncio, ficando sem cor no grafo. Os 95 resumos passaram a ser escritos entre aspas, e
a regra entrou no `CLAUDE.md` e no molde de nota.

Corrigido junto em [[padrao-llm-wiki]]: a nota dizia que `sessoes/` dispensava o
`log.md`, o que estava errado, e descrevia o número "~100" do gist de forma imprecisa,
como se fosse limite do Obsidian. Não é: é o ponto em que o índice sozinho deixa de
bastar para achar a nota certa. Estamos em 6 fontes, 95 notas, 61,5 mil palavras.
