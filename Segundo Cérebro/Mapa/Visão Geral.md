---
tags: [mapa, manual]
origem: "Sistema"
resumo: "O manual do Segundo Cérebro: o que vira nota, o ciclo de entrada e a faxina do grafo"
serve-para: []
status: vivo
atualizado: 2026-09-13
---

# Visão Geral

**Leia esta nota antes de escrever qualquer outra.** Ela é o método, e o método é da
Mallu. Nenhuma regra daqui muda sem decisão dela, por escrito, com data.

## O que este cérebro é para

Por ordem, decidida por ela em 12/09/2026:

1. **Mineração de ideias com aplicabilidade.** Toda nota termina dizendo onde ela serve.
   De uma ideia nascem várias, e a nota-mãe guarda o link das filhas. Vale para a PAAPS e
   para os outros projetos, inclusive a Clínica Mallu Vasconcellos (2027).
2. **Contexto estratégico vivo para as IAs que tocam a PAAPS** (empatado com o 1). O
   agente lê e já sabe voz, proibição, fato, histórico e o que não se pode falar. É o que
   evita erro na automação da produção de conteúdo, e é o que torna isso ativo da empresa.
3. **Ver as conexões no grafo.**
4. **Banco de referências reconferível**, com link, órgão, data e o dado exato.
5. **Matéria-prima de conteúdo.**
6. **Memória de decisão.**

**Quem lê:** os dois, a Mallu e os agentes. Por isso o `resumo` de uma linha no cabeçalho
(é o que a IA lê para decidir se abre a nota) e o título que vale sozinho para ela.

## O que vira nota, e o que não vira

Nem tudo que existe merece virar nota. Sem triagem o cofre empaca de lixo rápido.

| VIRA NOTA | NÃO VIRA NOTA |
|---|---|
| Uma decisão que você tomou, e o porquê | Um chat de WhatsApp inteiro exportado |
| Um resumo de reunião ou de aula | Foto, áudio bruto, PDF financeiro sensível |
| Uma pessoa nova que passou a ser relevante | Agenda ou lista de tarefas (muda toda semana) |
| Um padrão percebido em vários meses de dados | Alguém citado de passagem, sem repetir depois |

**Regra prática:** se a informação muda toda semana, ela não é conhecimento estável e
fica fora do grafo.

**Também fica fora, por decisão dela:** lead com e-mail e telefone (o CRM é o Notion, e é
fonte única); foto, áudio e binário (ficam em `Acervo/`, fora do cofre); peça em produção
(HTML, PNG, deck) que mora nas pastas de trabalho.

## Os dois testes que decidem, e uma lição precisa passar nos dois

Calibrado pela Mallu em 13/09/2026, depois de eu trazer oito "aprendizados" do pitch e do
site e ela reprovar todos.

1. **Muda o que a PAAPS diz, vende ou cobra?** Se não altera argumento, oferta, preço ou
   posicionamento, não entra.
2. **Sobrevive à troca de ferramenta e de ano?** Se morre quando trocar o gerador de
   imagem, o CSS, o Canva ou a versão do deck, não entra. Teste: isso ainda vai ser
   verdade em 2028?

**Passa nos dois, e por isso entrou:** a PAAPS é a tradução da consultoria que a DIGGING já
vende, então a pergunta do investidor deixa de ser "vocês conseguem vender?" e vira "vocês
conseguem traduzir?". Muda o argumento, e não depende de ferramenta nenhuma.

**Reprovadas, e são o tipo de coisa que enchia o cofre de lixo:** proporção de foto para
não duplicar no gerador de imagem; desfoque feito com a foto salva pequena em vez de filtro
de CSS; a contagem de caractere da linha de fonte de uma versão de um deck; o bug de
alinhamento que já foi corrigido; o plano de uma rodada que terminou.

**Por que o critério é esse.** O que eu media antes era o meu espanto, não o valor dela. O
cofre guarda o que ficou valendo, nunca como a gente chegou lá: processo é o que a gente
descarta junto, resultado é o que fica.

## Pendência não é conhecimento

**Nenhuma nota tem bloco "o que ainda falta", e não existe arquivo de pendência dentro do
cofre.** Calibrado em 13/09/2026.

- **Falta de execução** (corrigir código, atualizar LinkedIn, ingerir um Drive, importar
  uma base, consultar advogado) vai para a database "Quadro Estratégico de Projetos" no
  Notion, pela skill `tarefa-avulsa-quadro-projetos`.
- **Falta de conhecimento** (o nome da escola, o que aconteceu naquele ano, qual é a
  frase-mote de hoje) é **pergunta para a Mallu, na conversa, na hora**. Escrever a
  pergunta num arquivo é adiar a pergunta.
- **Dúvida sobre o próprio cofre** (o nome de um setor, se um projeto existe) também é
  pergunta direta, nunca arquivo.

O que a nota pode carregar é o campo `status: pendente` no cabeçalho, que sinaliza nota
incompleta sem virar lista de tarefa.

## O ciclo: chegou algo, virou nota

Toda vez que algo relevante aparece (um PDF, uma conversa importante, um aprendizado), o
ciclo é sempre o mesmo:

1. Solta o material bruto em `Arquivos/`. Ele é imutável: ninguém edita, ninguém arruma.
2. Lê e escreve um resumo curto em `Fontes/`, com a tag de tipo, linkando de volta para o
   arquivo original.
3. Atualiza ou cria as notas de `Conceitos/`, `Entidades/`, `Histórias/`, `Ideias/` e
   `Voz/` que aquilo toca, e linka em `Projetos/` a quem serve.
4. Acrescenta a nota nova no `Índice.md`.
5. Registra uma linha no `Log.md`: o que entrou, quando.

**Uma fonte gera várias notas, nunca uma só.** Se a leitura produziu uma nota só, a
leitura foi rasa. Um vídeo estudado toca a teoria, a pessoa que fala, o dado citado e a
ideia que ele destrava: são quatro notas, não uma.

## Como uma nota é escrita

- **Conclusão primeiro.** A primeira linha depois do título diz a resposta, não o
  contexto. Quem lê pode parar ali.
- **A regra escrita como regra:** "nunca escrever X, escrever Y".
- **O negativo explícito.** O que a nota proíbe vale tanto quanto o que ela permite.
- **Data e autoria** quando for calibração da Mallu.
- **Link nas duas direções.** Nota que ninguém aponta é nota que ninguém acha.
- **`## Onde isso serve` é obrigatório.** Nota que não diz onde serve vira lixo em três
  meses.
- **Nunca lista de pendência como nota própria.** "O que falta" não é conhecimento
  durável, é tarefa, e tarefa muda toda semana: seguindo a mesma régua de triagem lá em
  cima, fica fora do grafo. Pendência de execução (corrigir código, atualizar LinkedIn,
  currículo, blog, artefato, automação) vai para a database Notion "Quadro Estratégico de
  Projetos" pela skill `tarefa-avulsa-quadro-projetos`. Dúvida de nomenclatura ou
  categoria do próprio cofre é pergunta direta para a Mallu, na conversa, não arquivo.

**Teste do resumo:** se o `resumo` só fica verdadeiro usando um "e", são duas notas.

## A faxina do grafo

A cada poucas semanas, uma passada resolve a maior parte da entropia:

- **Notas órfãs:** sem nenhum link de entrada ou de saída. Ou conecta, ou apaga.
- **Links quebrados:** um link apontando para nota que não existe. O Obsidian mostra
  em cinza no grafo.
- **Duplicatas:** duas notas quase iguais sobre a mesma coisa. Junta uma na outra.

Some a isso: pasta vazia não existe, e bolinha sem cor no grafo é erro, não decoração.

## Ligações

[[Índice]] · [[Log]] · [[Legenda de cores]]

Os setores: [[Projetos]] · [[Entidades]] · [[Histórias]] · [[Conceitos]] · [[Voz]] ·
[[Método]] · [[Fontes]] · [[Ideias]]

## Onde isso serve

Em toda escrita dentro deste cofre, por mim e por qualquer agente.
