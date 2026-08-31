# Template de carrossel PAAPS (HTML)

Caminho oficial de montagem desde 31/08/2026 (decisão da Mallu). Canva vira exceção, para
edição manual pontual — ver seção correspondente em `.claude/agents/aplicador-visual.md`.

Este template é o HTML da primeira peça aprovada sem rodada de correção nenhuma ("De quem é
esse trabalho"), com o texto e as fotos daquela peça como exemplo funcional. Constituição
visual completa, com os números calibrados, em
`insumos-compartilhados/nucleo-comum/anatomia-do-carrossel-aprovado.md`.

## Como montar uma peça nova

1. Copie esta pasta inteira para o destino da nova peça (ex.:
   `conteudo/instagram/paaps.brasil/entregas/AAAA-MM-MÊS/sessao-NN/`).
2. Renomeie `template.html` para `index.html` na cópia.
3. Troque o texto de cada `<section class="slide" id="sN">` pelo texto da peça nova.
4. Troque os arquivos de `fotos/` pelas fotos reais da peça (mesmo nome de arquivo, ou ajuste
   o `src=` de cada `<img class="foto">`).
5. Renderize: `./render.sh <pasta-da-peca> <n-slides>` (ver `render.sh` para variantes como
   `3b`, e para re-renderizar só um slide depois de um ajuste).
6. **Confira as imagens renderizadas**, não só o CSS, antes de entregar — texto pode estourar
   borda ou quebrar em linha órfã de um jeito que só aparece na foto final.

## Estrutura

- `template.html` — o HTML/CSS completo, com a paleta, tipografia e as classes calibradas
  (`.escurecer`, `.textura`, `.credito-foto`, `.fonte-rodape`, `.logo`).
- `fontes/` — League Spartan local (`@font-face`). Helvetica é fonte de sistema, não precisa
  de arquivo.
- `texturas/` — Textura 4 (marrom e branco), a única usada na peça de referência. Outros
  números de textura estão em `insumos-compartilhados/identidade-visual/04-texturas/`, mas
  Textura 2 é reservada para uso mais raro — ver a anatomia antes de trocar.
- `logo/` — logo com pontinhos coloridos, versão para fundo escuro.
- `fotos/` — as fotos da peça de referência, deixadas aqui como exemplo funcional. Numa peça
  nova, isto é a primeira coisa a trocar.
- `render.sh` — fotografa cada slide em PNG 1080×1350. Mesma convenção de
  `.claude/skills/exporta-html-pdf/exportar-slides.sh`, mas a saída é PNG por slide (para
  Instagram), não PDF montado (para apresentação/anexo).

## Mecânica do `?solo=N`

O `<script>` no fim do `template.html` esconde todos os slides menos o de `id="sN"` pedido
na URL. **A chave é o `id`, não a posição na lista** — assim dá para inserir uma variante
extra (ex.: `id="s3b"`, um card alternativo para a Mallu comparar) sem bagunçar a numeração
dos outros slides.
