---
name: exporta-html-pdf
description: Use para converter material feito em HTML/CSS (pitch deck, carrossel, relatório, one-pager, proposta) em PDF, PNG ou JPG para envio, inscrição, anexo ou postagem. Ative em "gera o PDF disso", "exporta esse deck", "manda em PNG pro Instagram", "preciso anexar isso no formulário", "converte o HTML pra imagem". Não use para gerar o HTML em si, nem para vídeo (isso é hyperframes).
---

# Exportar HTML para PDF, PNG ou JPG

Converte peça feita em HTML/CSS num arquivo que se anexa, se envia ou se posta.
O motor é o Chrome em modo headless, que já está na máquina.

---

## Antes de qualquer coisa: sirva por HTTP, nunca por `file://`

Caminho relativo (`../home/img/foto.jpg`) quebra em `file://` e o Chrome exporta
a página sem foto nenhuma, silenciosamente.

```bash
cd "<pasta que contém TODOS os assets>" && python3 -m http.server 8099
```

A raiz do servidor precisa estar **acima** de qualquer `../` usado no HTML.
Confira antes de exportar:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8099/caminho/da/peca.html
```

---

## PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox \
  --virtual-time-budget=25000 \
  --run-all-compositor-stages-before-draw \
  --no-pdf-header-footer \
  --print-to-pdf="NOME-DO-ARQUIVO.pdf" \
  "http://localhost:8099/caminho/da/peca.html"
```

`--virtual-time-budget` é o que dá tempo de as fotos carregarem. Sem ele, o PDF
sai com buracos.

## PNG ou JPG

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox \
  --virtual-time-budget=15000 \
  --window-size=1080,1350 \
  --screenshot="saida.png" \
  "http://localhost:8099/caminho/da/peca.html"
```

Tamanhos que a casa usa: **1080×1350** (carrossel e feed), **1080×1920** (story),
**1920×1080** (slide isolado).

Para JPG, exporte PNG e converta: `sips -s format jpeg -s formatOptions 82 saida.png --out saida.jpg`

---

## As cinco armadilhas que já custaram tempo

### 1 · Filtro SVG vira bitmap de página cheia

**A que mais dói.** Textura de ruído com `feTurbulence`, blur pesado, qualquer
`filter` SVG aplicado em elemento grande: no PDF isso não vetoriza, vira imagem
crua do tamanho da página, uma por página.

No pitch da PAAPS isso sozinho fez o arquivo ir a **57 MB**. Desligando a
textura na impressão, caiu para **8 MB**, sem diferença visível.

```css
@media print{ .slide::before{display:none!important;content:none!important} }
```

**Sintoma:** PDF gigante e reduzir as fotos não resolve nada. Se cortar foto pela
metade e o tamanho quase não mudar, o problema é filtro, não imagem.

### 2 · Ordem de origem vence media query

`@media print{...}` **não** ganha especificidade. Regra escrita depois no arquivo
sobrescreve a folha de impressão, mesmo que a de impressão esteja num media query.

**Sempre confira se alguma regra nova entrou depois do bloco de impressão.** Se
entrou, repita a regra de impressão no fim do arquivo ou use `!important`.

### 3 · Unidade de viewport no papel

`vh` e `vw` em contexto de impressão passam a valer sobre a caixa da página, não
sobre a janela. Layout que usa `calc(100vh * 16/9)` para caber na tela quebra no
PDF. Neutralize:

```css
@media print{ .peca{width:<medida fixa em mm>!important} }
```

### 4 · Animação de entrada deixa a página em branco

Peça com `opacity:0` revelada por IntersectionObserver exporta invisível, porque
no headless nada entra na viewport.

```css
@media print{ .rev{opacity:1!important;transform:none!important} }
```

### 5 · Chrome descomprime foto

O Chrome embute a imagem em bitmap, não mantém o JPEG. O peso vem da **dimensão
em pixels**, não do tamanho do arquivo. Foto de 2000px pesa ~8 MB crus mesmo
sendo 500 KB em disco. Só vale mexer nisso **depois** de descartar a armadilha 1.

---

## Tamanho de página, em milímetros

Defina no CSS, não na linha de comando:

```css
@media print{
  @page{size:254mm 142.9mm;margin:0}   /* 16:9 */
}
```

| Formato | Medida | Uso |
|---|---|---|
| 16:9 padrão | 338,7 × 190,5 mm | slide de apresentação, o mesmo do PowerPoint |
| 16:9 enxuto | 254 × 142,9 mm | pitch para anexar em formulário |
| A4 retrato | 210 × 297 mm | proposta, relatório, one-pager |
| A4 paisagem | 297 × 210 mm | tabela larga, cronograma |

---

## Confira antes de entregar

```bash
python3 -c "
import re,io,sys
d=io.open(sys.argv[1],'rb').read()
mb=[float(x) for x in re.search(rb'/MediaBox\s*\[([^\]]+)\]',d).group(1).split()]
print('paginas:', len(re.findall(rb'/Type\s*/Page[^s]', d)))
print('pagina :', round(mb[2]/72*25.4,1),'x',round(mb[3]/72*25.4,1),'mm  proporcao',round(mb[2]/mb[3],3))
print('tamanho:', round(len(d)/1048576,1),'MB')
" ARQUIVO.pdf
```

Três perguntas, e as três precisam de sim:

1. **A contagem de páginas bate** com o número de peças do HTML?
2. **A proporção está certa** (1,778 para 16:9)?
3. **O arquivo cabe no destino?** Formulário de inscrição costuma cortar em 10 ou
   25 MB. Acima de 15 MB, volte para a armadilha 1.

E abra o PDF. Verificação por número não pega foto faltando nem texto cortado.

---

## Onde salvar

Na mesma pasta da peça, com nome que diz o que é e para quem vai:
`PAAPS-pitch-impulsiona-serasa.pdf`, não `export.pdf` nem `final-v3.pdf`.

Arquivo temporário de conversão (cópia do HTML, pasta de imagem reduzida) se
apaga ao terminar.

---

## Quando a peça é DESIGN (pitch, carrossel, capa): fotografe, não imprima

`@media print` cria um **segundo layout**, e todo segundo layout diverge do
primeiro. Divergiu, o PDF sai deformado e você só descobre olhando.

Para peça desenhada, o caminho seguro é outro: **fotografar cada tela e montar
o PDF com as fotos.** Não existe folha de impressão, então não existe do que
divergir. O PDF passa a ser, literalmente, o que se vê na tela.

Custo: o texto deixa de ser selecionável. Para pitch e carrossel, não pesa.
Para relatório e proposta que alguém vai copiar trecho, aí sim use `@media print`.

### O passo a passo

**1 · A peça precisa saber mostrar uma tela por vez.** Um parâmetro na URL:

```js
(()=>{const n=new URLSearchParams(location.search).get('solo');
 if(!n) return;
 slides.forEach((s,i)=>{ s.style.display=(i+1==n)?'':'none'; s.classList.add('vis'); });
 document.querySelectorAll('.barra').forEach(b=>b.remove());
 window.scrollTo(0,0);})();
```

`classList.add('vis')` é indispensável: sem ele, o que depende de
IntersectionObserver sai invisível.

**2 · Fotografe uma a uma:**

```bash
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p .export
for i in $(seq 1 16); do
  "$CH" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --virtual-time-budget=12000 --window-size=1920,1080 \
    --screenshot=".export/p$(printf %02d $i).png" \
    "http://localhost:8099/caminho/peca.html?solo=$i" >/dev/null 2>&1
done
```

**3 · PNG pesa demais. Converta:**

```bash
cd .export && for f in p*.png; do
  sips -s format jpeg -s formatOptions 88 "$f" --out "${f%.png}.jpg" >/dev/null
done && rm -f p*.png
```

**4 · Monte uma página só de imagens e imprima ela:**

```html
<style>
  @page{size:338.7mm 190.5mm;margin:0}
  *{margin:0;padding:0}
  .pg{width:338.7mm;height:190.5mm;page-break-after:always;overflow:hidden}
  .pg img{width:338.7mm;height:190.5mm;object-fit:cover;display:block}
</style>
<div class="pg"><img src="p01.jpg"></div>
```

A proporção da imagem tem que ser a mesma da página, senão `object-fit:cover`
corta. 1920×1080 casa com 338,7 × 190,5 mm.

**Resultado no pitch da PAAPS: 16 páginas, 6,4 MB, idêntico à tela.**

---

## Se insistir em `@media print`, confira estes dois

### Transform que POSICIONA, não anima

A folha de impressão costuma trazer `.rev{transform:none!important}` para matar
a animação de entrada. Só que elemento centralizado por
`left:50%; transform:translate(-50%,-50%)` **usa transform para se posicionar**.
Zerado, ele salta meia largura para a direita.

Varra o CSS antes de exportar:

```bash
grep -nE "transform:\s*translate" arquivo.css
```

Todo achado precisa ser devolvido no print:

```css
@media print{ .centro-flut{transform:translate(-50%,-50%)!important} }
```

### A página em mm tem que casar com a largura de projeto

A 96 dpi: **338,7 mm = 1280 px** e **254 mm = 960 px**.

Se o layout foi desenhado para 1280 e a página é de 254 mm, a fonte de 1280 vai
para uma caixa de 960 e **deforma tudo**. Descubra a largura de projeto antes de
escolher a página.

| Largura de projeto | Página que casa |
|---|---|
| 1280 px | 338,7 × 190,5 mm |
| 1600 px | 423,3 × 238,1 mm |
| 1920 px | 508 × 285,8 mm |

---

## Bibliotecas de terceiros: já verificadas, todas reprovadas

Verificado em 19/08/2026, para não repetir a pesquisa:

| Biblioteca | Veredito |
|---|---|
| **spipu/html2pdf** (PHP, TCPDF) | O próprio README desaconselha converter página web existente e avisa que **não dá suporte** para esse uso |
| **angelobelchior/Html2Pdf** (C#) | Embrulha o **wkhtmltopdf**, arquivado em 2023, com **CVE-2022-35583 (SSRF, CVSS 9.8 crítico) sem correção possível**, porque o projeto está morto. **Reprovado por segurança** |
| **xhtml2pdf** (Python, ReportLab) | Suporta **CSS 2.1** e um pouco de CSS 3. Sem grid, sem flexbox, sem variáveis |

Todas são **geradoras de documento**, feitas para nota fiscal e relatório a
partir de markup simples. Nenhuma é navegador. Peça com grid, flexbox,
`clamp()`, variáveis ou `aspect-ratio` sai destruída nas três.

**O renderizador que entende CSS moderno já está na máquina e chama Chrome.**
Quando o PDF sai errado, o problema é o CSS de impressão, não o motor.
