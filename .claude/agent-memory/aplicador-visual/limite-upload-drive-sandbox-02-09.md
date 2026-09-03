# Limite de upload direto no Drive, em sessão de nuvem sem ferramenta de arquivo — 02/09/2026

**Peça:** Carrossel INSS "o órgão que carimba sofrimento e não vê o próprio", sessão-01,
@paaps.brasil. Os 8 PNGs (1080×1350) renderizaram corretos e foram conferidos um a um via
`Read` antes de qualquer tentativa de upload — isso não falhou. O que falhou foi só o
último passo: subir os arquivos para a pasta do post no Drive.

## O que aconteceu

`mcp__Google_Drive__create_file` só aceita conteúdo binário via `base64Content` (ou
`textContent`) **inline na própria chamada da ferramenta** — não existe parâmetro de
caminho de arquivo. Nesta sessão não havia nenhuma ferramenta de upload direto de arquivo
(nem Bash com credencial de API, nem MCP de filesystem-to-Drive).

Isso obriga a trazer o base64 inteiro da imagem para dentro do meu próprio texto de saída
(para poder colar no parâmetro), e antes disso, para dentro do meu contexto de entrada (para
poder "ver" o conteúdo e reproduzi-lo). O `Read` desta sessão trunca em ~25.000 tokens por
chamada, mesmo dentro do limite de 256KB de arquivo — então um PNG de 150-300KB (base64 de
200-400KB) não cabe numa leitura só, mesmo com `offset`/`limit` por linha.

**Tentativas, na ordem, e por que cada uma não serviu:**
1. PNG original (~1-1,5MB) direto: `Read` do `.b64` correspondente falhou de cara ("File
   content exceeds 256KB").
2. PNG quantizado a 256 cores (~350-800KB): ainda estourava o teto de 256KB do `Read` em
   chunks de 200KB (cada chunk de 200.000 bytes já vinha truncado em ~22.000 caracteres pelo
   teto de 25.000 tokens do `Read`, silenciosamente, com aviso "showing the first X of Y
   characters" — ou seja, eu estava recebendo só um pedaço do chunk sem perceber de cara).
3. JPEG q90 full-res (~130-210KB), fatiado com `fold -w 76` (76 chars/linha, formato base64
   clássico) e lido com `offset`/`limit` **por linha**, mirando ~280 linhas por chamada
   (~21.280 caracteres, abaixo do teto de 25.000 tokens): **isso funcionou para leitura** —
   os 9 chunks de um slide vieram completos, sem truncamento, confirmados pelo próprio
   `Read` sem mensagem de erro.
4. **A falha real foi na hora de retranscrever esses chunks lidos de volta para um arquivo
   via `Write`**, para depois colar no `create_file`. Escrevi o primeiro chunk (280 linhas,
   21.280 caracteres esperados) e o arquivo resultante tinha só 17.390 caracteres — perda de
   ~4.000 caracteres em 21.000, confirmada com `cmp`/`diff` contra o `.b64` original recortado
   com `head -c`. Ou seja: **transcrição manual de texto em escala de dezenas de milhares de
   caracteres, feita por mim gerando a resposta, não é confiável.** Não é falha da ferramenta,
   é falha de fidelidade na hora de eu "copiar" um bloco enorme de texto pseudo-aleatório
   (base64 não tem estrutura linguística que ajude a não pular/duplicar trecho).

## O que fica de critério permanente

- **Nunca faça upload de binário reconstruído por transcrição manual sem verificar
  integridade primeiro.** Sempre que precisar reconstruir um arquivo grande a partir de
  chunks lidos via `Read`, escreva o resultado num arquivo à parte e rode `cmp` (ou
  `md5sum`/`diff`) contra a fonte original **antes** de usar esse conteúdo em qualquer
  chamada de ferramenta que publique ou entregue algo. Se não bater, **não suba**: o
  arquivo está corrompido, mesmo que "pareça" certo.
- **Chunking seguro para leitura via `Read` em arquivo sem quebra de linha:** primeiro
  `fold -w 76` (ou tamanho fixo qualquer) para criar linhas reais, depois `offset`/`limit`
  mirando no máximo ~280 linhas de 76 caracteres por chamada (abaixo do teto de ~25.000
  tokens do `Read`). Isso evita truncamento silencioso.
- **Acima de ~2-3 chunks de reconstrução manual, considere a tarefa inviável neste tipo de
  sessão.** O custo de tokens não é o problema (a leitura em si é barata, ~1 token por
  caractere); o problema é a taxa de erro humana-equivalente ao retranscrever blocos de texto
  sem estrutura linguística. Prefira: (a) reduzir a imagem para caber num único chunk seguro
  (compressão agressiva, aceitando perda de qualidade, e declarando isso na entrega), ou
  (b) não completar o upload nesta sessão e entregar os arquivos pelo caminho local, com
  aviso claro de que falta esse passo e por quê — nunca simular sucesso.
- Se uma sessão futura tiver ferramenta de upload direto de arquivo (filesystem→Drive, sem
  precisar de texto inline), este problema inteiro desaparece. Verificar antes de repetir
  qualquer uma dessas tentativas.

## Onde isso ficou registrado na entrega

Pasta do post já criada e vazia: `Carrossel - INSS Burnout` (id
`1vHpZKyxLagGV8NRKA7a9n8qJLk8Qrbid`), dentro de SETEMBRO (id `1rMW7lIuA0eGK_xzZ4DTqntyE0Sveeyhh`).
Os 8 PNGs corretos ficaram só no caminho local:
`conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-01/export/slide-01.png` a
`slide-08.png`.
