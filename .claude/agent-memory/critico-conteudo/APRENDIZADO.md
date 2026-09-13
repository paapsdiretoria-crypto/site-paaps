# Aprendizado — Crítico de Conteúdo PAAPS

Não é diário, é manual prático organizado por situação. Cada entrada precisa ser aplicável
por quem nunca viu a rodada original.

## Situação: peça inteira reescrita, e o crítico não notou que boa parte já estava aprovada

**Quando acontece:** o copywriter volta com uma reescrita completa de uma peça que já tinha
passado por rodadas de crítica antes (ex.: uma peça reprovada meses atrás, retomada).

**O que aconteceu:** na peça "De quem é esse trabalho" (27/07 → 30/08/2026), a reescrita
levou 5 rodadas deste agente até fechar em 100/100. Os achados bloqueantes reais, nas 5
rodadas: sigla sem expansão ("TAG"), passiva sem sujeito ("nunca foi levantado"), a mesma
figura de negação por contraste repetida 4x quando o limite é 1, dado nacional costurado
como se fosse recorte específico de uma categoria, citação alterada por dentro das aspas
sem marcação visível de edição.

**Regra que fica:** cada um desses é um padrão que se repete em pautas diferentes. Antes de
aprovar nota alta, checar explicitamente: toda sigla tem expansão? toda frase de ausência
nomeia quem deveria ter medido? a mesma figura retórica aparece mais de uma vez na peça
inteira (capa + legenda contam juntas como bookend, mas qualquer terceira ocorrência é
demais)? todo dado nacional está claramente marcado como nacional, não como recorte de
categoria? toda citação reaproveitada declara a edição dentro do próprio texto?

**Por quê:** são exatamente os achados que passaram batido na primeira reprovação (30/07,
sem crítico dedicado) e só foram pegos porque este agente passou a existir.

Ver `Segundo Cérebro/Voz/Voz.md` para o texto
final que resultou dessa calibração.

## Situação: nota alta (inclusive 100/100) não pegou repetição literal de frase nem uso de
material da Tecelã sem transformação, cobrando indignação que a peça nunca construiu

**Quando acontece:** a peça abre ou sustenta uma acusação institucional/estrutural usando
material já comprimido e analítico da Tecelã (frase pronta, mediação de mecanismo), sem antes
encarnar, em cena concreta, a mediação que descreve vivência real, mesmo quando essa mediação
existia nos insumos e não foi usada. Junto disso, uma frase de mediação ou de fechamento da
Tecelã pode acabar copiada quase literal em dois pontos diferentes da peça, sem reformulação.

**O que aconteceu:** a peça do INSS ("O INSS carimba o sofrimento e não vê o próprio",
sessão-01, set/2026) fechou com 100/100 na rodada 4 e foi liberada, mas a Mallu reprovou a
peça já montada como confusa e inacessível, cobrando uma premissa (que é óbvio/errado o INSS
"carimbar o sofrimento" de outros sem ver o próprio) que ninguém foi levado a sentir antes.
Investigando a origem: a Tecelã tinha entregado a mediação "ler todos os dias o relato
documentado do sofrimento alheio, sem tempo de processamento nem suporte coletivo, é
mediação psíquica concreta" — a candidata certa pra abrir, encarnada em cena. Nunca apareceu
na peça. Em vez disso, a capa usou o final da frase pronta da Tecelã ("carimba o
sofrimento"), cortado do contexto que a própria Tecelã tinha escrito antes ("decide, com
carimbo, que o cansaço... é real o suficiente pra virar direito"). A duplicação "a fila tem
número público" (slide 1 e 7) também vem de uso quase literal da mediação 4 da Tecelã, sem
transformação, em dois pontos da peça. Nenhuma das 4 rodadas pegou nenhum dos dois problemas.

**Regra que fica:** duas mudanças de critério. (1) Antes de dar nota, rodar
`checa-duplicata-texto.py` (`conteudo/templates/carrossel-paaps/checa-duplicata-texto.py`)
comparando o copy contra ele mesmo E contra o arquivo da Tecelã, e tratar qualquer sequência
de 5+ palavras repetida como achado bloqueante do item 8, mesmo que pareça callback
proposital: reformulação prova a intenção, repetição literal não prova nada. (2) Ler o
arquivo de mediações da Tecelã (exceção nomeada à doutrina de isolamento: ela é insumo, não
processo do copywriter) e, pro item 14, perguntar se alguma mediação com cena/vivência
concreta ficou de fora enquanto a peça sustenta uma acusação estrutural sem ela. Isso é
achado bloqueante, mais grave que metáfora sem explicação (item 13): ali o problema é a peça
ser difícil de entender; aqui é a peça pedir uma reação que ninguém tem motivo ainda de
sentir, porque a peça assumiu uma premissa que nunca construiu.

**Por quê:** eu leio só o texto final do copywriter, por doutrina, pra não me contaminar com
o raciocínio dele. Isso é bom pra julgar "essa peça soa como o PAAPS", mas me deixa cego pra
dois tipos específicos de falha: frase idêntica escondida em slides distantes (leitura
corrida não é confiável pra achar isso, pede teste mecânico) e a ausência de algo que existia
no insumo e foi descartado (eu só pego isso comparando contra a origem, nunca só olhando o
texto final).
