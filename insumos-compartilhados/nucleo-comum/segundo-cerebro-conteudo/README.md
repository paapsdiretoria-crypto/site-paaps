# Segundo cérebro de conteúdo

Banco de excertos autocontidos (dado, citação, conceito curto, lei ou norma) candidatos
a virar frase de slide, extraídos de `arquivos/` pela skill `segundo-cerebro-paaps`
(`.claude/skills/segundo-cerebro-paaps/SKILL.md`). Régua larga: entra aqui todo excerto
citável, mesmo que nunca tenha sido usado ainda.

Não confundir com `base-teorica/fichamentos/`, o cérebro geral: lá é régua estreita, só
autor ou linha teórica que a Mallu já discute há tempo ou pede explicitamente pra guardar.

Cada nota tem `status: verificado` ou `status: nao-verificado` no frontmatter. Nota não
verificada mora em `_nao-verificado/` e nunca vira dado ou citação em peça publicada, só
inspira raciocínio. Nota verificada mora direto aqui, na raiz desta pasta.

Toda vez que um agente de conteúdo cita um excerto numa peça, atualiza o campo
`usos_em_conteudo` e `ultima_citacao` da própria nota, e acrescenta uma linha em
"Histórico de uso" dela. É o que permite ao copywriter e à Tecelã saberem se um dado já
está gasto (citado demais, recente demais) antes de reciclar.

Formato completo da nota: ver seção "Formato da nota" em `segundo-cerebro-paaps/SKILL.md`.
