/* Lê o deck no navegador e devolve, para cada slide, os blocos de texto com
   posição, tamanho e formatação. Serve para remontar a peça no PowerPoint com
   caixa de texto de verdade, em vez de figura. Arquivo temporário. */
(function () {
  function ehBloco(el) {
    var d = getComputedStyle(el).display;
    return !/^(inline|contents)$/.test(d);
  }

  /* Um "bloco de texto" e o elemento mais interno que ainda contem texto e
     cujos filhos sao todos de linha. Assim negrito e destaque em cor viram
     trechos DENTRO da mesma caixa, e nao caixas separadas. */
  function coletar(raiz, saida) {
    var kids = Array.prototype.slice.call(raiz.children);
    var temFilhoBloco = kids.some(function (k) {
      return ehBloco(k) && k.textContent.trim() !== "";
    });
    if (!temFilhoBloco) {
      if (raiz.textContent.trim()) saida.push(raiz);
      return;
    }
    kids.forEach(function (k) {
      if (k.textContent.trim()) coletar(k, saida);
    });
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

  function trechos(el) {
    var out = [];
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) {
      var bruto = n.textContent;
      if (!bruto.trim()) {
        if (out.length && !/ $/.test(out[out.length - 1].t)) out[out.length - 1].t += " ";
        continue;
      }
      var p = n.parentElement;
      var cs = getComputedStyle(p);
      out.push({
        t: transformar(caixa(bruto), cs.textTransform),
        b: parseInt(cs.fontWeight, 10) >= 600,
        i: cs.fontStyle === "italic",
        c: cs.color,
        f: familia(cs.fontFamily),
        s: parseFloat(cs.fontSize),
      });
    }
    return out;
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
          var r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) return;
          var tr = trechos(el);
          if (!tr.length) return;
          var lh = cs.lineHeight === "normal"
            ? parseFloat(cs.fontSize) * 1.2
            : parseFloat(cs.lineHeight);
          itens.push({
            x: Math.round((r.left - sr.left) * 100) / 100,
            y: Math.round((r.top - sr.top) * 100) / 100,
            w: Math.round(r.width * 100) / 100,
            h: Math.round(r.height * 100) / 100,
            align: cs.textAlign,
            lh: Math.round(lh * 100) / 100,
            fs: parseFloat(cs.fontSize),
            ls: parseFloat(cs.letterSpacing) || 0,
            runs: tr,
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
