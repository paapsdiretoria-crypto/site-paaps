---
name: adiciona-ao-cerebro
description: Use para transformar qualquer material em notas do Segundo Cérebro. Ative em "adiciona esse conteúdo ao meu segundo cérebro", "salva isso como nota", "compila isso", "coloca isso no cérebro", "processa esse arquivo", ao receber ditado, transcrição, link, PDF, export do Notion, e-mail, livro ou TCC, e sempre que a automação varrer a pasta Arquivos. Não use para responder pergunta sobre o que já está no cérebro (isso é só ler a capa do setor), nem para escrever peça de conteúdo.
---

# Adiciona ao cérebro

## Lei central

```
NENHUMA NOTA É ESCRITA ANTES DA LISTA DE NOTAS EXISTIR
```

Ler o material inteiro, listar por escrito quantas notas ele gera e de que setor cada uma
é. Só depois escrever a primeira.

**Se a lista tem uma nota só, a leitura foi rasa.** Uma fonte toca a teoria, a pessoa que
falou, o dado citado, a história vivida e a ideia que ela destrava. Isso são cinco notas,
não um parágrafo com cinco seções.

## Gate

Não pode cruzar sem a Mallu:

- **categoria nova** (setor novo, projeto novo, tipo de nota novo). As categorias são dela.
- **material que contradiz nota existente.** Nomear a contradição e perguntar. Nunca
  sobrescrever calibração dela em silêncio.
- **dado de pessoa real** (e-mail, telefone, CPF, nome completo de lead). Isso vive no CRM
  do Notion, nunca em arquivo commitado.

**Proibição irmã do gate:** o material processado pode revelar uma pendência de execução
(um bug no código, um dado errado publicado no site, uma atualização que falta no
LinkedIn ou currículo, algo pra ajustar numa automação). Isso nunca vira nota nem entra
como "o que falta" em arquivo do cérebro: é tarefa avulsa na database Notion, escrita pela
skill `tarefa-avulsa-quadro-projetos`. Segundo Cérebro é conhecimento durável, não lista de
tarefas (ver `Segundo Cérebro/Mapa/Visão Geral.md`). Categoria nova, contradição e dúvida
de setor continuam sem nota própria: entram no resumo final de perguntas para a Mallu.

O resto se decide sozinho.

---

## O ciclo, sempre igual

1. **O cru pousa em `Arquivos/`**, sem uma vírgula alterada. Ditado vai em
   `Arquivos/ditados/AAAA-MM-DD-assunto.md`. Ele é imutável: ninguém edita, ninguém arruma.
2. **Ler inteiro antes de escrever qualquer coisa.**
3. **Listar as notas.** Quantas são, o setor de cada uma, o nome de arquivo de cada uma.
4. **Uma nota de `Fontes/`**, com tipo, link, autor ou órgão, data, o dado exato e se dá
   para reconferir.
5. **As notas que o material destravou**, cada uma no setor certo.
6. **Linkar nas duas direções** e acrescentar cada nota nova na capa do setor dela.
7. **Uma linha no `Mapa/Índice.md` e uma no `Mapa/Log.md`.**
8. **O que ficou faltando vira pergunta no resumo final para a Mallu**, nunca nota nem
   arquivo de pendência. Se o que falta é execução (corrigir algo fora do cérebro), vira
   tarefa avulsa pela skill `tarefa-avulsa-quadro-projetos`, nunca bloco dentro da nota.

---

## As sete perguntas, na ordem

**1. O que é este material?** Ver a tabela de formatos abaixo: cada formato tem uma caça
diferente.

**2. Isto vira nota?**

| Vira | Não vira |
|---|---|
| decisão tomada, e o porquê | conversa inteira exportada |
| resumo de reunião, aula ou escuta | agenda e lista de tarefa (muda toda semana) |
| pessoa nova que passou a ser relevante | alguém citado de passagem, sem repetir depois |
| padrão percebido em meses de dados | foto, áudio bruto, PDF financeiro |
| formulação literal de quem vive a coisa | opinião genérica sem fonte e sem dono |

**3. Quantas notas isto é?** Teste do resumo: se a frase de resumo só fica verdadeira
usando um "e", são duas notas.

**4. Cada uma é de que setor?**

| Setor | A pergunta que ele responde |
|---|---|
| `Projetos` | é sobre uma frente em que a Mallu trabalha? |
| `Entidades` | é sobre quem alguém é, pessoa ou instituição? |
| `Histórias` | é sobre algo que **a Mallu** viveu e pode contar? |
| `Conceitos` | é a definição de uma palavra dentro da PAAPS? |
| `Voz` | é regra de como falar, escrever ou aparecer? |
| `Método` | é sobre como a PAAPS trabalha em campo? |
| `Fontes` | veio de fora e dá para reconferir? |
| `Ideias` | é faísca, e precisa dizer onde serve? |

Os dois erros de setor que mais acontecem:

- **Regra de escrita em `Conceitos`.** "Sem travessão" é `Voz`. "O que é cuidado para a
  PAAPS" é `Conceitos`.
- **História de outra pessoa em `Histórias`.** `Histórias` é só o que a Mallu viveu. O que
  a Joyce viveu é evidência de cliente ideal, e mora no projeto.

**5. Já existe nota sobre isso?** Atualizar vence criar. Duas notas quase iguais sobre a
mesma coisa é defeito. Se o material contradiz nota existente, nomear a contradição na
nota nova e marcar a antiga como `status: historico` com o motivo, depois de perguntar.

**6. A que projeto cada nota serve?** É o campo `serve-para` e o bloco `## Onde isso
serve`. Nota sem isso vira lixo em três meses, e este cérebro existe para minerar ideia,
não para arquivar.

**7. O que ficou faltando?** Escrever como faltando. Buraco escondido é pior que buraco.

---

## Por formato: o que caçar em cada um

| Formato | O que extrair | Armadilha |
|---|---|---|
| **Ditado ou áudio da Mallu** | a formulação literal dela, a palavra que ela repete, e todo lugar onde ela diz "isso talvez seja um conceito" | reescrever a frase dela em linguagem melhor. A força está em ser a palavra dela |
| **Transcrição de escuta ou entrevista** | as falas literais, a ordem em que a dor aparece, o que a pessoa **pede** quando perguntam, e a contradição entre o que ela diz e o que ela faz | resumir a pessoa em vez de citá-la. E jogar a vivência dela em `Histórias`, que é só da Mallu |
| **Transcrição de vídeo (YouTube, Instagram, TikTok, aula)** | a tese, o dado com fonte, o exemplo concreto, e o que contraria algo que o cérebro já afirma | virar uma nota-resumo do vídeo. Vídeo de 40 minutos vira 4 ou 5 notas, uma por ideia |
| **Livro inteiro** | uma nota por conceito, nunca uma por capítulo; a definição de cada termo; o que é citável, com página | fichamento linear. Ninguém procura "capítulo 3" |
| **Escrito acadêmico, TCC** | as conceituações, uma por termo; o argumento central; a evidência de campo; a frase de participante que vale citação | tratar como fonte externa. O TCC da Mallu é a mina principal de `Conceitos` |
| **Página de blog ou artigo** | a tese, o dado, quem publicou, a data, e se a fonte é aceita pela régua | citar dado sem conferir se a fonte vale |
| **Notícia, lei, dado oficial** | o número exato escrito por extenso, o órgão, a data, o link, e se dá para reconferir hoje | arredondar, ou afirmar tendência sem verificar |
| **E-mail ou mensagem de criatividade** | a faísca, e imediatamente onde ela serve | guardar a ideia sem aplicabilidade |
| **Página ou base do Notion** | a estrutura, o que a base decide, **e o que está vazio**. O vazio é achado, não ausência | copiar o conteúdo. Se é export, o export fica em `Arquivos/` e só o destilado vira nota |
| **Perfil de Instagram ou rede** | o que o perfil diz que é, o que performou de verdade, o padrão entre as peças | confundir o que o perfil promete com o que ele entrega |
| **Conjunto de arquivos de uma pasta** | o que se repete entre eles, e o que só aparece uma vez | uma nota por arquivo. Nome de arquivo não é conceito |

---

## Como a nota é escrita

- **Conclusão primeiro.** A primeira linha depois do título é a resposta. Quem lê pode
  parar ali.
- **A regra escrita como regra:** "nunca escrever X, escrever Y".
- **O negativo explícito.** O que a nota proíbe vale tanto quanto o que ela permite.
- **Data e autoria** quando for calibração da Mallu.
- **Nota de projeto termina com o apelido do projeto** no nome do arquivo:
  `proposito-ecoa`, nunca `proposito`. Sem isso, você clica e não sabe de quem é.
- **Nada de arqueologia.** A nota diz o que é e o que se faz hoje. Nunca "antes era assim",
  "no sistema antigo", "na versão anterior". Isso só confunde o contexto de quem lê.
- **Fora do cofre, ninguém cita caminho de nota.** Só capa. Ver
  `Segundo Cérebro/Mapa/Contrato de caminhos.md`.

Cabeçalho: `tags`, `origem`, `resumo` entre aspas duplas, `serve-para`, `status`
(`vivo` · `pendente` · `historico`), `atualizado`. Moldes em `Segundo Cérebro/Mapa/_modelos/`.

---

## Racionalizações que sinalizam que você está driblando

| Pensamento | O que está acontecendo |
|---|---|
| "Isso aqui é uma nota só" | Quase nunca é. Releia e liste de novo |
| "O material já está organizado, é só mover" | Mover não é destilar. Export do Notion é cru, e cru fica em `Arquivos/` |
| "Vou criar uma categoria nova pra isso caber" | As categorias são da Mallu. Pergunte |
| "Vale explicar que antes isso ficava em outro lugar" | Arqueologia. O cérebro registra o que é, não o que foi |
| "Depois eu preencho o onde isso serve" | Nota sem aplicabilidade é lixo. Preencha agora ou escreva que falta |
| "O título da página do Notion já é o nome da nota" | Título de página não é conceito. "Espaço destinado para saber mais sobre os outros membros" não é nota |
| "Essa fala é parecida com outra, deixa junto" | Duas coisas parecidas viram duas notas linkadas, não uma nota grande |
| "É material dela, então vai em Histórias" | `Histórias` é só o que a Mallu viveu |
| "Não sei em que projeto isso serve, deixo vazio" | Se não sabe, é pergunta para a Mallu, e vira linha em `O que falta` |

---

## Quando é a automação rodando sozinha

A varredura da pasta `Arquivos/` usa este mesmo ciclo, com três diferenças:

1. **Decide sozinha:** setor, quantidade de notas, nome de arquivo, links, capa, índice e
   log. Isso é trabalho mecânico e tem régua acima.
2. **Nunca decide sozinha:** categoria nova, contradição com calibração da Mallu, dado de
   pessoa real, e apagar ou marcar nota como `historico`. Cada um desses vira linha em
   `Mapa/O que falta.md`, com o material esperando.
3. **Entrega um resumo do que entrou:** quantos arquivos foram lidos, quantas notas
   nasceram, quais perguntas ficaram na fila para a Mallu.

Arquivo cru que já virou nota não é reprocessado: a nota de `Fontes/` aponta para ele, e é
isso que marca o material como consumido.

---

## Antes de terminar

- [ ] O cru está em `Arquivos/`, intocado
- [ ] A lista de notas foi escrita antes da primeira nota
- [ ] Cada nota tem `resumo` que passa no teste do "e"
- [ ] Cada nota tem `## Onde isso serve` preenchido
- [ ] Cada nota nova entrou na capa do setor dela
- [ ] Índice e Log atualizados
- [ ] O que faltou está escrito em `Mapa/O que falta.md`
- [ ] Nenhuma nota cita o passado da organização
- [ ] `bash codigo/verifica-caminhos.sh` passa
