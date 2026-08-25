# Exportar um deck HTML da PAAPS para PPTX com texto editável

```bash
cd "/Users/mac/Documents/SITE PAAPS/codigo/site/pitch-serasa"
python3 exportar-pptx/gerar.py pitch-handout.html 19 PAAPS-pitch-handout.pptx --conferir
```

Três argumentos: o arquivo do deck, quantos slides ele tem, e o nome do PPTX
de saída. O `--conferir` é opcional: ele renderiza o PPTX pronto e compara com
o navegador, slide a slide, para você ver se saiu certo antes de mandar.

O deck precisa entender `?solo=N` (mostrar um slide por vez em tela cheia).
Todos os decks do pitch entendem.

## O que sai

Cada slide vira: **uma imagem de fundo** com a foto, o véu marrom, os painéis
e os grafismos, e **caixas de texto de verdade** por cima, na posição medida no
navegador, com cor, corpo, negrito e destaque em amarelo preservados. Dá para
clicar numa palavra e trocar, no PowerPoint, no Keynote ou no Canva.

## O que precisa estar instalado

- Google Chrome (em `/Applications`)
- `python3 -m pip install python-pptx pillow`
- para o `--conferir`: LibreOffice em `/Applications` e `python3 -m pip install pymupdf`
- as fontes **League Spartan** instaladas no Mac. Os arquivos estão em
  `codigo/site/home/fontes/`: dois cliques em cada `.ttf` e o macOS instala.
  Sem isso o PowerPoint troca a fonte dos títulos e a peça descaracteriza.

## As quatro armadilhas que este script resolve

Todas foram descobertas quebrando a cara, e cada uma está comentada no código.

1. **Medir e fotografar na mesma janela.** O slide é 16:9 travado. O
   `--dump-dom` do Chrome usa uma janela útil mais baixa que o `--screenshot`,
   e nessa altura menor o slide encolhe para 1765px de largura. Tudo que era
   alinhado à direita saía 155px fora do lugar. Por isso a janela é 1920x1167,
   que dá viewport de 1920x1080, e a foto é cortada nos 1080 de cima.

2. **Congelar a animação.** Os elementos `.rev` entram com `translateY(22px)`.
   Em duas execuções separadas do Chrome a animação é pega em estados
   diferentes, e a peça sai deslocada. O `parado.css` força o estado final.

3. **Não alterar o DOM.** A primeira versão envolvia texto solto em `<span>`
   para medir. Isso mudava o layout flex dos cartões: o fundo saía diferente da
   peça de verdade. Agora a medição é por `Range` e a marcação por atributo,
   que não mexe em layout nenhum.

4. **A linha vai pronta.** O PowerPoint não requebra nada: cada linha visual do
   navegador entra como linha fixa. E o passo de linha sai da **medida**, não
   da folha de estilo, porque um bloco pode declarar entrelinha de 25px e
   conter um número de 44px dentro de um `<span>`; usar a entrelinha declarada
   fazia o rótulo cair em cima do número.

## A calibragem

O motor do PowerPoint desenha a tinta em `topo da caixa + 0,308 × corpo`; o
navegador desenha em `topo do range + 0,017 × corpo`. Os dois números foram
**medidos**, não deduzidos: o primeiro com um deck-sonda de corpos conhecidos,
o segundo nas 579 linhas reais do deck. A caixa sobe a diferença, e a correção
é proporcional ao corpo da letra. Uma constante acerta o texto corrido e erra
o número grande, que foi exatamente o defeito do slide de métricas.

Se um dia a peça sair sistematicamente alta ou baixa, é essa constante que se
reajusta, rodando `sonda.py` de novo.
