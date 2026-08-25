/* Lê o deck no navegador e devolve, para cada slide, os blocos de texto com
   posição, tamanho e formatação. Serve para remontar a peça no PowerPoint com
   caixa de texto de verdade, em vez de figura. Arquivo temporário. */
(function () {
  /* Bloco de verdade: o que gera caixa de bloco no CSS. inline-block NAO
     entra: ele flui dentro da linha do pai, e tratar como bloco era o que
     arrancava o texto do lugar. */
  function ehBloco(el) {
    var d = getComputedStyle(el).display;
    return /^(block|flex|grid|list-item|table|flow-root)/.test(d) && !/^inline/.test(d);
  }

  /* Mesma regra do CSS: quando um elemento mistura texto solto com filhos de
     bloco, o texto solto vira uma caixa anonima. Antes esse texto era
     simplesmente descartado, ficava aceso no fundo e o resto caia por cima. */
  function coletar(raiz, saida) {
    var grupo = [];
    function fechar() {
      if (!grupo.length) return;
      var tem = grupo.some(function (n) { return n.textContent.trim(); });
      if (tem) {
        var sp = document.createElement("span");
        sp.setAttribute("data-pptx-anon", "1");
        grupo[0].parentNode.insertBefore(sp, grupo[0]);
        grupo.forEach(function (n) { sp.appendChild(n); });
        saida.push(sp);
      }
      grupo = [];
    }
    Array.prototype.slice.call(raiz.childNodes).forEach(function (n) {
      if (n.nodeType === 1 && ehBloco(n)) {
        fechar();
        if (n.textContent.trim()) coletar(n, saida);
      } else {
        grupo.push(n);
      }
    });
    fechar();
  }

  function caixa(t) {
    return t.replace(/\s+/g, " ");
  }

  function transformar(t, tt) {
    if (tt === "uppercase") return t.toUpperCase();
    if (tt === "lowercase") return t.toLowerCase();
    return t;
  }

  function familia(ff) {
    return /spartan/i.test(ff) ? "League Spartan" : "Helvetica";
  }

  /* Devolve as LINHAS do bloco como o navegador as quebrou, cada uma com seu
     retangulo. E a correcao de raiz: se o PowerPoint receber a linha pronta,
     ele nao tem o que requebrar, e a peca nao pode desalinhar. */
  function linhas(el) {
    var tokens = [];
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) {
      var bruto = n.textContent;
      if (!bruto) continue;
      var p = n.parentElement;
      var cs = getComputedStyle(p);
      var est = {
        b: parseInt(cs.fontWeight, 10) >= 600,
        i: cs.fontStyle === "italic",
        c: cs.color,
        f: familia(cs.fontFamily),
        s: parseFloat(cs.fontSize),
        tt: cs.textTransform,
      };
      var re = /\s+|[^\s]+/g, m;
      while ((m = re.exec(bruto))) {
        tokens.push({ no: n, ini: m.index, fim: m.index + m[0].length, txt: m[0], est: est });
      }
    }

    var rg = document.createRange();
    var linhas = [], atual = null;
    tokens.forEach(function (t) {
      var branco = !t.txt.trim();
      rg.setStart(t.no, t.ini);
      rg.setEnd(t.no, t.fim);
      var r = rg.getBoundingClientRect();
      if (branco || r.width < 0.5) {
        /* espaco: nao abre linha, so separa dois trechos da mesma linha */
        if (atual) atual.pend = " ";
        return;
      }
      if (!atual || Math.abs(r.top - atual.top) > 3) {
        atual = { top: r.top, esq: r.left, dir: r.right, base: r.bottom, runs: [], pend: "" };
        linhas.push(atual);
      }
      atual.esq = Math.min(atual.esq, r.left);
      atual.dir = Math.max(atual.dir, r.right);
      atual.top = Math.min(atual.top, r.top);
      atual.base = Math.max(atual.base, r.bottom);
      var texto = transformar(t.txt, t.est.tt);
      var ult = atual.runs[atual.runs.length - 1];
      if (ult && ult.b === t.est.b && ult.i === t.est.i && ult.c === t.est.c &&
          ult.f === t.est.f && ult.s === t.est.s) {
        ult.t += atual.pend + texto;
      } else {
        atual.runs.push({ t: (ult ? atual.pend : "") + texto, b: t.est.b, i: t.est.i,
                          c: t.est.c, f: t.est.f, s: t.est.s });
      }
      atual.pend = "";
    });

    return linhas.filter(function (l) { return l.runs.length; });
  }

  function visivel(el, cs) {
    if (cs.visibility === "hidden" || cs.display === "none") return false;
    if (parseFloat(cs.opacity) === 0) return false;
    return true;
  }

  window.__pptx = function () {
    var secs = Array.prototype.slice.call(
      document.querySelectorAll('section[class*="slide"]')
    );
    return {
      largura: Math.round(secs[0].getBoundingClientRect().width),
      altura: Math.round(secs[0].getBoundingClientRect().height),
      slides: secs.map(function (sec, idx) {
        var sr = sec.getBoundingClientRect();
        var blocos = [];
        coletar(sec, blocos);
        var itens = [];
        blocos.forEach(function (el) {
          var cs = getComputedStyle(el);
          if (!visivel(el, cs)) return;
          /* Para julgar centralizacao, a referencia e a caixa de BLOCO que
             contem a linha, descontado o padding. A caixa anonima e inline:
             ela mede a propria tinta e nao serviria de regua. */
          var pai = el;
          while (pai && !ehBloco(pai)) pai = pai.parentElement;
          pai = pai || el;
          var pr = pai.getBoundingClientRect();
          var ps = getComputedStyle(pai);
          var cx = {
            left: pr.left + parseFloat(ps.paddingLeft || 0),
            right: pr.right - parseFloat(ps.paddingRight || 0),
            width: pr.width,
            height: pr.height,
          };
          if (pr.width < 2 || pr.height < 2) return;
          /* O retangulo da CAIXA nao e o retangulo da TINTA: um container
             flex centralizado e muito maior que a linha de texto. O Range
             devolve a uniao das linhas, que e onde a letra esta de fato. */
          var rg = document.createRange();
          rg.selectNodeContents(el);
          var r = rg.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) r = cx;
          var lns = linhas(el);
          if (!lns.length) return;
          var lh = cs.lineHeight === "normal"
            ? parseFloat(cs.fontSize) * 1.2
            : parseFloat(cs.lineHeight);
          itens.push({
            x: Math.round((r.left - sr.left) * 100) / 100,
            y: Math.round((r.top - sr.top) * 100) / 100,
            w: Math.round(r.width * 100) / 100,
            h: Math.round(r.height * 100) / 100,
            align: (function () {
              /* Se o texto esta centrado dentro do container por flex, o
                 text-align diz "start" e mente. Comparar as folgas. */
              var eg = r.left - cx.left, dg = cx.right - r.right;
              if (Math.abs(eg - dg) < 4 && eg > 4) return "center";
              if (/center/.test(cs.textAlign)) return "center";
              if (/right|end/.test(cs.textAlign)) return "right";
              if (dg < eg - 4) return "right";
              return "left";
            })(),
            lh: Math.round(lh * 100) / 100,
            fs: parseFloat(cs.fontSize),
            ls: parseFloat(cs.letterSpacing) || 0,
            linhas: lns.map(function (l) {
              return {
                x: Math.round((l.esq - sr.left) * 100) / 100,
                y: Math.round((l.top - sr.top) * 100) / 100,
                w: Math.round((l.dir - l.esq) * 100) / 100,
                h: Math.round((l.base - l.top) * 100) / 100,
                runs: l.runs,
              };
            }),
          });
          el.setAttribute("data-pptx", "1");
        });
        return { n: idx + 1, itens: itens };
      }),
    };
  };

  /* Marca todos os blocos e apaga a tinta: o que sobra na tela e exatamente o
     fundo (foto, veu, painel, borda, barra), que vira a imagem de fundo do
     slide no PowerPoint. */
  window.__pptxEsconder = function () {
    var dados = window.__pptx();
    var st = document.createElement("style");
    st.textContent =
      "[data-pptx],[data-pptx] *{color:transparent!important;" +
      "text-shadow:none!important;-webkit-text-fill-color:transparent!important}";
    document.head.appendChild(st);
    return dados;
  };
})();
