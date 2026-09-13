---
name: segundo-cerebro-paaps
description: Use ao processar material bruto (newsletter, artigo, PDF, link, transcrição) da pasta `arquivos` em conhecimento reutilizável para o ecossistema de conteúdo PAAPS. Ative em frases como "organiza esse material", "extrai o que dá pra usar desse artigo", "processa a pasta arquivos", "isso já foi citado antes?", "monta a nota desse dado pro segundo cérebro". Não use para escrever o carrossel em si (isso é copywriter-paaps), para decidir editorialmente qual pauta vira peça (isso é o orquestrador), nem para inventar verificação de fonte que você não conseguiu confirmar de verdade.
---

# Segundo Cérebro PAAPS

## Lei central

NENHUM EXCERTO ENTRA NO SEGUNDO CÉREBRO SEM STATUS DE VERIFICAÇÃO EXPLÍCITO, E NENHUM
EXCERTO MARCADO "NÃO VERIFICADO" VIRA DADO OU CITAÇÃO EM PEÇA PUBLICADA.

Isso vale mesmo quando o material parece óbvio, quando a fonte "parece" confiável, ou
quando falta tempo para confirmar. Sem confirmação, o excerto fica em quarentena. Ele
continua disponível para inspirar raciocínio, nunca para ser citado como fato.

## Contexto: duas bases, não uma

O ecossistema já tem uma base curada de teoria (`insumos-compartilhados/nucleo-comum/
base-teorica/`), que a Tecelã lê para tecer o argumento. Esta skill não substitui essa
base: ela **alimenta as duas bases que fecham o segundo cérebro do PAAPS**, cada uma com
critério de entrada diferente.

| Base | Onde mora | O que entra | Quem decide o critério |
|---|---|---|---|
| **Cérebro geral** | `insumos-compartilhados/nucleo-comum/base-teorica/fichamentos/` (uma pasta por autor/obra) | Só o que é crucial de verdade: autor ou linha teórica que a Mallu já discute há tempo, ou que ela explicitamente pede pra guardar. Régua estreita. | A Mallu decide, sempre. Você propõe, nunca decide sozinho. |
| **Cérebro de conteúdo** | `insumos-compartilhados/nucleo-comum/segundo-cerebro-conteudo/` | Todo excerto autocontido (dado, citação, lei, conceito curto) que é candidato real a virar frase de slide, mesmo que nunca tenha sido usado ainda. Régua larga. | Você decide, seguindo o processo abaixo. |
| **Quarentena** | `insumos-compartilhados/nucleo-comum/segundo-cerebro-conteudo/_nao-verificado/` | Qualquer excerto de fonte que você não conseguiu confirmar. | Automático: toda vez que a verificação falha. |

A pasta `arquivos/` (entrada bruta, sem curadoria) mora só na máquina local de quem
processa: não é commitada, não existe em toda sessão. As duas bases acima, sim: são
texto versionado, plain markdown compatível com Obsidian, e existem em qualquer sessão
que clonar o repositório.

## Gate explícito

Antes de escrever qualquer nota em `segundo-cerebro-conteudo/` (fora da quarentena), você
precisa ter tentado confirmar a fonte de verdade: achar o texto original, o DOI, o link
funcional, o nome completo e a filiação do autor. "Tentei" significa rodar a busca, não
significa "achei plausível". Se não confirmar, a nota nasce em `_nao-verificado/`, ponto.

Isso vale mesmo para material que o próprio remetente (a Mallu, um newsletter, um PDF)
já apresenta como verdadeiro. A régua de verificação de `CLAUDE.md` ("Pesquisas") se
aplica aqui inteira: nenhuma alegação numérica ou social passa sem checagem, mesmo dentro
de material que parece já processado.

## Processo

1. **Leia o item bruto inteiro** antes de extrair qualquer coisa. Não extraia por
   amostragem de trecho.
2. **Extraia candidatos a excerto**: frase pronta, dado numérico, citação, lei ou norma,
   conceito curto. Só extraia o que é **autocontido**: alguém que nunca viu o material de
   origem precisa entender o excerto sozinho, sem depender de uma frase anterior que ficou
   pra trás.
3. **Para cada candidato, tente confirmar a fonte.** Busque o texto original. Se o
   material já é a fonte primária (um PDF que você tem inteiro, por exemplo), confirme que
   o trecho está lá, palavra por palavra, e registre a localização exata (página, seção).
4. **Classifique geral vs. conteúdo vs. os dois.** Pergunta: isso é uma linha teórica ou
   autor que sustenta como a PAAPS pensa (geral), ou é um dado/citação pontual que pode
   virar frase de slide (conteúdo)? Os dois só quando genuinamente cabem nos dois critérios
   ao mesmo tempo — não duplique por segurança.
5. **Confira duplicata antes de criar nota nova.** Mesma fonte, mesmo dado, já existe?
   Atualize a nota existente (não crie uma segunda). Isso é o que sustenta o contador de
   uso ter sentido.
6. **Escreva a nota** seguindo o formato da seção seguinte, no destino decidido no passo 4.
7. **Arquive o material bruto processado.** Mova ou marque o item de `arquivos/` como
   processado (ex.: prefixo `_processado-AAAA-MM-DD-` no nome), para não reprocessar.
8. **Sempre que um agente de conteúdo usar uma nota do cérebro de conteúdo numa peça**,
   atualize o histórico de uso dela (ver campo `usos_em_conteudo` abaixo) antes de fechar
   a tarefa. Isso não é responsabilidade só de quem processa `arquivos/`: é de quem cita.

## Formato da nota (cérebro de conteúdo)

```markdown
---
tipo: dado | citacao | conceito | lei-ou-norma
status: verificado | nao-verificado
tema: [lista de tags temáticas]
fonte: "Autor/veículo. Título. Data. URL ou DOI, se houver."
data_captura: AAAA-MM-DD
usos_em_conteudo: 0
ultima_citacao: null
---

# [título curto e descritivo do excerto]

> [o excerto autocontido, pronto pra virar frase de slide]

**Por que serve pra carrossel PAAPS:** [1-2 linhas, opcional — conexão com a linha
epistemológica ou com um ângulo já em produção]

## Histórico de uso
- (cada linha: AAAA-MM-DD · peça/sessão · slide. Preenchido por quem cita, não por quem
  processa `arquivos/`.)
```

O mesmo formato vale para uma nota de `fichamentos/` no cérebro geral, trocando o campo
`usos_em_conteudo` (que não faz sentido lá: teoria não "gasta") por uma seção livre de
raciocínio, no mesmo espírito do `base-teoria/README.md` já existente ("cresce a cada
fichamento... nunca como resumo de texto").

## Tabela de racionalizações

| Pensamento | O que está acontecendo |
|---|---|
| "A fonte parece confiável, não preciso confirmar" | Racionalização. Confiança não é verificação. Rode a busca ou marque não verificado. |
| "Já uso isso há tempo, deve estar ok" | O contador de uso existe exatamente para isto: reabra a nota e confira antes de reciclar, não assuma. |
| "É um dado pequeno, não precisa de nota própria" | Todo excerto citável vira nota, por menor que seja: é o que sustenta o contador funcionar de verdade. |
| "Isso é óbvio, cabe nos dois cérebros" | Duplicar sem necessidade infla as duas bases e quebra o contador de uso, que só existe no cérebro de conteúdo. Escolha um destino, salvo caso genuíno de sobreposição. |
| "O material já veio pronto, alguém já verificou" | Quem enviou o material não é a mesma coisa que a fonte primária verificada. Verifique você mesmo. |

## Fora do escopo desta skill

- **Memória persistente e Obsidian próprio da Tecelã entre ciclos**: as duas bases acima
  já nascem em markdown puro compatível com Obsidian, então quando essa mudança na Tecelã
  for desenhada (via `cria-agente-paaps`, não aqui), ela abre esta mesma árvore como vault,
  sem precisar duplicar estrutura.
- **Novo modelo de carrossel "abre com o dado, cita a fonte"**: entra como modelo novo no
  catálogo `insumos-compartilhados/nucleo-comum/modelos-slide-paaps.md`, não nesta skill.
- **Leitura da caixa Titan e transcrição de newsletter**: alimenta `arquivos/` como
  qualquer outro material bruto, mas o acesso à caixa em si é fluxo de credencial
  (`pede-segredo-a-mallu`), não desta skill.
