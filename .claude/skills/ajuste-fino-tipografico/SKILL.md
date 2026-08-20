---
name: ajuste-fino-tipografico
description: Use no acabamento tipográfico de peça em HTML/CSS que a Mallu vai olhar (pitch deck, slide, carrossel, one-pager, capa) quando o problema for quantidade de linhas, texto que quebra feio, corpo pequeno demais, texto ilegível sobre foto clara, ou rodapé encavalando caixa de dado. Ative em "esse título ficou enorme", "tem quebra demais", "aumenta o corpo", "não dá pra ler em cima da foto", "a linha de fontes está por cima do número". Não use para escrever o texto da peça (isso é copy-carrossel, email-prospeccao ou o copywriter), nem para exportar em PDF ou PNG (isso é exporta-html-pdf), nem para decidir foto, paleta ou identidade (isso é design-parceiro).
---

# Ajuste fino tipográfico

A régua de acabamento que a Mallu aplica quando olha uma peça pronta. Ela foi
extraída de um dia inteiro de iteração no pitch da Serasa
(`codigo/site/pitch-serasa/index-v4.html` + `pitch.css`) e existe para que a
próxima peça acerte na primeira rodada.

O princípio que organiza tudo, nas palavras dela:

> "Quanto mais quebras de linha que a gente tem dentro do texto, mais difícil é
> a legibilidade dessa fonte."

Cada quebra é uma pausa que o olho paga. Título de slide não é parágrafo: é
frase que precisa entrar de uma vez.

---

## 1 · A régua de linhas

| Elemento | Limite | Onde reprova |
|---|---|---|
| Título de slide (`h1`, `h2`, `.canto`) | **até 3 linhas** | Um título que virou 8 linhas foi reprovado com "texto ENORME em League Spartan desnecessário" |
| Frase de destaque (`.centro-flut`, `.flutuante`) | **2 linhas** | 3 linhas já pesa; 4 vira bloco |
| Descritivo sob um número dentro de célula (`.cel__l`, `.metrica__l`) | **1 linha**, aceita 2 se a segunda tiver poucas palavras | 5 linhas é reprovação direta |
| Frase de canto (`.canto`) | **1 linha** sempre que der | por isso ela avança para a esquerda em vez de quebrar |
| Linha de fontes (`.fonte`) | **1 linha** | ela é aparato, não leitura |

Quando uma frase precisa ocupar exatamente **2 + 2 linhas** (duas frases, duas
linhas cada), force com `<br>` entre elas. Só ajustar largura e corpo não
garante onde a quebra cai: o navegador quebra onde couber, e o que couber muda
com o tamanho da janela.

```html
<p class="centro-flut">Primeira frase, duas linhas.<br>Segunda frase, duas linhas.</p>
```

---

## 2 · A ordem das alavancas, e o erro que eu cometi

**Diminuir a fonte para reduzir linhas é o caminho errado.** Foi o que eu fiz, e
foi devolvido: ela já tinha pedido corpo **maior**, porque o descritivo pequeno
força a vista num slide que é o primeiro contato do investidor com a tese.
Menos linhas com letra menor não resolve nada, só troca um problema de
legibilidade por outro.

A ordem certa, sempre nesta sequência:

**a) Corte palavra do texto.** É a alavanca que melhora a peça em vez de
apenas acomodá-la. Descritivo de 5 linhas quase sempre está explicando o que o
número já diz.

**b) Ganhe largura útil reduzindo o respiro interno.** Menos padding na coluna e
na célula cabe mais palavra por linha, sem tocar no corpo. Foi assim que saiu
uma linha de cada descritivo do slide 2:

```css
#s2 .split{padding:var(--pad) clamp(20px,2vw,34px)}
#s2 .grade--vert .cel{padding:clamp(10px,1.05vw,15px) clamp(12px,1.25vw,18px)}
```

**c) Só então mexa no corpo, e nunca abaixo do que já estava.** Se o corpo
precisa descer, é sinal de que (a) não foi feito de verdade. Voltar ao texto é
mais barato que entregar slide ilegível em projetor.

Também vale largar `max-width` em `ch` quando ele é o que está estrangulando a
linha: `max-width:none` devolve a largura da caixa ao texto.

---

## 3 · Não julgue por captura de tela: MEÇA

Print engana em contagem de linha. O que decide é `offsetHeight` dividido pelo
`line-height` computado. Foi assim que ficou provado "frase central: 2 linhas,
descritivo 4: 2 linhas", em vez de adivinhar.

O deck entende `?solo=N`, que isola um slide em tela cheia. Abra
`http://localhost:8099/caminho/peca.html?solo=2` e rode o bloco no console.

### Contagem de linhas de todos os textos de um slide

```js
(() => {
  const raiz = document.querySelector('.slide:not([style*="display: none"])') || document.body;
  const alvos = raiz.querySelectorAll('h1,h2,h3,p,li,span,td,th,figcaption,.canto,.lead,.fonte,.credito,.cel__l,.cel__n,.metrica__l,.centro-flut,.flutuante');
  const linhas = [];
  alvos.forEach(el => {
    if (!el.textContent.trim()) return;
    if (el.querySelector('h1,h2,h3,p,li')) return;      // só folhas de texto
    const cs = getComputedStyle(el);
    let lh = parseFloat(cs.lineHeight);
    if (Number.isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.2;   // line-height:normal
    const alturaTexto = el.offsetHeight
      - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
      - parseFloat(cs.borderTopWidth) - parseFloat(cs.borderBottomWidth);
    const n = Math.max(1, Math.round(alturaTexto / lh));
    const nome = el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).trim().split(/\s+/).join('.') : '');
    linhas.push({
      seletor: nome,
      linhas: n,
      corpo: Math.round(parseFloat(cs.fontSize) * 10) / 10 + 'px',
      texto: el.textContent.trim().slice(0, 46)
    });
  });
  console.table(linhas.sort((a, b) => b.linhas - a.linhas));
  return linhas;
})();
```

Leia a tabela de cima para baixo: o que estourou aparece primeiro. Confronte com
a régua da seção 1 antes de tocar em qualquer CSS.

### Colisão entre dois elementos

Prova que a linha de fontes não toca a caixa de dado, que o crédito de foto não
entra na coluna de texto, que a frase central não bate no número da direita.

```js
(() => {
  const colide = (selA, selB) => {
    const A = document.querySelector(selA), B = document.querySelector(selB);
    if (!A || !B) return console.warn('não achei:', !A ? selA : selB);
    const a = A.getBoundingClientRect(), b = B.getBoundingClientRect();
    const sobreX = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    const sobreY = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    const bate = sobreX > 0 && sobreY > 0;
    console.log(bate ? 'COLIDE' : 'livre', selA, 'x', selB,
      bate ? `sobreposição ${Math.round(sobreX)}x${Math.round(sobreY)}px`
           : `folga ${Math.round(Math.max(-sobreX, -sobreY))}px`);
    return bate;
  };
  // troque os pares pelos do seu slide
  colide('.fonte', '.grade');
  colide('.fonte', '.credito');
  colide('.credito', '.split--dir');
  colide('.centro-flut', '.split--dir');
})();
```

Regra que já virou CSS no pitch: **slide que tem linha de fonte reserva o espaço
dela**, para o corpo nunca encavalar.

```css
.slide:has(.fonte) .slide__c{padding-bottom:calc(var(--pad) + 2.6em)}
.slide:has(.credito):not(:has(.fonte)) .slide__c{padding-bottom:calc(var(--pad) + 1.2em)}
```

Quando as colunas ocupam os dois cantos inferiores, a linha de fontes recua para
o vão livre (`left:auto;right:var(--pad);text-align:right`) ou desce para o
corredor central. É deslocamento, não encolhimento de fonte.

### Depois de medir, OLHE

Medida não pega contraste ruim, quebra feia no meio de uma expressão, viúva de
uma palavra sozinha na última linha, nem texto que caiu em cima de um rosto.
Abra a peça, olhe slide a slide, e só então diga que está pronto. As duas
verificações são obrigatórias e nenhuma substitui a outra.

---

## 4 · Texto sobre foto clara

Sombra de uma camada só ou borra a letra ou não separa do fundo. Use duas ou
três camadas com funções distintas: **uma curta, que desenha a borda da letra**,
e **uma longa e difusa, que separa do fundo**.

```css
.centro-flut{
  text-shadow:0 1px 3px rgba(15,7,2,.92),   /* borda da letra */
              0 4px 10px rgba(15,7,2,.8),
              0 10px 40px rgba(15,7,2,.9);  /* separa do fundo */
}
```

Quando o texto cai sobre algo **muito claro** (colete branco, parede vazada,
céu), sombra sozinha não segura. Aí entra um respaldo discreto, com
`border-radius`, que não pode virar caixa:

```css
#s2 .fonte{background:rgba(20,10,2,.62);padding:.35em .7em;border-radius:3px;
  backdrop-filter:blur(2px)}
```

Antes de empilhar sombra, veja se o véu da foto (`::after` com gradiente) já
resolve. Assentar a foto é mais limpo que carregar a letra.

> `backdrop-filter` mata `backface-visibility` e some na exportação em alguns
> contextos. Confira o resultado no PDF, não só na tela. Detalhe em
> `exporta-html-pdf`.

---

## 5 · Checklist antes de dizer que está pronto

1. Rodei a contagem de linhas em **todos** os slides, não só no que eu mexi.
2. Nenhum título passa de 3 linhas; nenhuma frase de destaque passa de 2;
   nenhum descritivo de número passa de 2.
3. Se reduzi linha, foi cortando palavra ou padding. **O corpo não desceu abaixo
   do que já estava.**
4. As frases que precisam de 2 + 2 têm `<br>` explícito.
5. Rodei o teste de colisão: linha de fontes e crédito de foto não tocam caixa
   de dado nem coluna de texto.
6. Todo texto sobre foto clara tem sombra em camadas, e o que cai sobre branco
   tem respaldo.
7. **Abri e olhei.**
