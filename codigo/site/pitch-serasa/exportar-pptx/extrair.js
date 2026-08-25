/* Le o deck no navegador e devolve, slide a slide, cada bloco de texto com as
   LINHAS ja quebradas pelo navegador e a formatacao de cada trecho.

   Duas regras de ouro, aprendidas na marra:
   1. NAO alterar o DOM. Envolver texto solto em <span> mudava o layout flex
      dos cartoes e a foto de fundo saia diferente da peca real.
   2. Medir e fotografar na MESMA janela. O slide e 16:9 travado: em viewport
      de altura diferente ele muda de largura e tudo a direita sai do lugar.

   Arquivo temporario, usado so para gerar o PPTX. */
(function () {
  function ehBloco(el) {
    var d = getComputedStyle(el).display;
    return /^(block|flex|grid|list-item|table|flow-root)/.test(d) && !/^inline/.test(d);
  }

  function caixa(t) { return t.replace(/\s+/g, " "); }

  function transformar(t, tt) {
    if (tt === "uppercase") return t.toUpperCase();
    if (tt === "lowercase") return t.toLowerCase();
    return t;
  }

  function familia(ff) {
    return /spartan/i.test(ff) ? "League Spartan" : "Helvetica";
  }

  /* Percorre a arvore e devolve grupos de conteudo de linha. Cada grupo e
     {dono, nos}: `dono` e o elemento de bloco que governa alinhamento e
     entrelinha, `nos` sao os nos de texto daquele grupo. Mesma regra do CSS
     para caixa anonima, mas sem criar elemento nenhum. */
  function coletar(raiz, saida) {
    var grupo = [];
    function fechar() {
      if (grupo.some(function (n) { return n.textContent.trim(); })) {
        saida.push({ dono: raiz, nos: grupo.slice() });
      }
      grupo = [];
    }
    Array.prototype.slice.call(raiz.childNodes).forEach(function (n) {
      if (n.nodeType === 1 && ehBloco(n)) {
        fechar();
        if (n.textContent.trim()) coletar(n, saida);
      } else if (n.nodeType === 1 || n.nodeType === 3) {
        grupo.push(n);
      }
    });
    fechar();
  }

  function textosDe(nos) {
    var out = [];
    nos.forEach(function (n) {
      if (n.nodeType === 3) { if (n.textContent) out.push(n); return; }
      var w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT, null), t;
      while ((t = w.nextNode())) if (t.textContent) out.push(t);
    });
    return out;
  }

  /* Quebra o grupo nas linhas que o navegador desenhou. Cada palavra e medida
     com um Range proprio; palavras com o mesmo topo formam uma linha. */
  function linhas(nos) {
    var tokens = [];
    textosDe(nos).forEach(function (n) {
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
      while ((m = re.exec(n.textContent))) {
        tokens.push({ no: n, ini: m.index, fim: m.index + m[0].length, txt: m[0], est: est });
      }
    });

    var rg = document.createRange();
    var linhas = [], atual = null;
    tokens.forEach(function (t) {
      rg.setStart(t.no, t.ini);
      rg.setEnd(t.no, t.fim);
      var r = rg.getBoundingClientRect();
      if (!t.txt.trim() || r.width < 0.5) {
        if (atual) atual.pend = " ";
        return;
      }
      if (!atual || Math.abs(r.top - atual.topo) > 3) {
        atual = { topo: r.top, esq: r.left, dir: r.right, base: r.bottom, runs: [], pend: "" };
        linhas.push(atual);
      }
      atual.esq = Math.min(atual.esq, r.left);
      atual.dir = Math.max(atual.dir, r.right);
      atual.topo = Math.min(atual.topo, r.top);
      atual.base = Math.max(atual.base, r.bottom);
      var texto = transformar(caixa(t.txt), t.est.tt);
      var u = atual.runs[atual.runs.length - 1];
      if (u && u.b === t.est.b && u.i === t.est.i && u.c === t.est.c &&
          u.f === t.est.f && u.s === t.est.s) {
        u.t += atual.pend + texto;
      } else {
        atual.runs.push({ t: (u ? atual.pend : "") + texto, b: t.est.b, i: t.est.i,
                          c: t.est.c, f: t.est.f, s: t.est.s });
      }
      atual.pend = "";
    });
    return linhas.filter(function (l) { return l.runs.length; });
  }

  function visivel(cs) {
    return cs.visibility !== "hidden" && cs.display !== "none" && parseFloat(cs.opacity) !== 0;
  }

  window.__pptx = function () {
    var secs = Array.prototype.slice.call(document.querySelectorAll('section[class*="slide"]'));
    var visivelSec = secs.filter(function (s) { return s.getBoundingClientRect().width > 2; });
    return {
      janela: [window.innerWidth, window.innerHeight, window.devicePixelRatio],
      slide: visivelSec.length
        ? [Math.round(visivelSec[0].getBoundingClientRect().width),
           Math.round(visivelSec[0].getBoundingClientRect().height)]
        : [0, 0],
      slides: secs.map(function (sec, idx) {
        var sr = sec.getBoundingClientRect();
        var grupos = [];
        if (sr.width > 2) coletar(sec, grupos);
        var itens = [];
        grupos.forEach(function (g) {
          var cs = getComputedStyle(g.dono);
          if (!visivel(cs)) return;
          var lns = linhas(g.nos);
          if (!lns.length) return;
          var pr = g.dono.getBoundingClientRect();
          var ps = cs;
          var esqPai = pr.left + parseFloat(ps.paddingLeft || 0);
          var dirPai = pr.right - parseFloat(ps.paddingRight || 0);
          var esq = Math.min.apply(null, lns.map(function (l) { return l.esq; }));
          var dir = Math.max.apply(null, lns.map(function (l) { return l.dir; }));
          var eg = esq - esqPai, dg = dirPai - dir;
          var al = /center/.test(ps.textAlign) ? "center"
                 : /right|end/.test(ps.textAlign) ? "right"
                 : (Math.abs(eg - dg) < 4 && eg > 4) ? "center"
                 : (dg < eg - 4) ? "right" : "left";
          var lh = ps.lineHeight === "normal"
            ? parseFloat(ps.fontSize) * 1.2 : parseFloat(ps.lineHeight);
          itens.push({
            align: al,
            lh: Math.round(lh * 100) / 100,
            fs: parseFloat(ps.fontSize),
            ls: parseFloat(ps.letterSpacing) || 0,
            linhas: lns.map(function (l) {
              return {
                x: Math.round((l.esq - sr.left) * 100) / 100,
                y: Math.round((l.topo - sr.top) * 100) / 100,
                w: Math.round((l.dir - l.esq) * 100) / 100,
                h: Math.round((l.base - l.topo) * 100) / 100,
                runs: l.runs,
              };
            }),
          });
          /* Atributo nao mexe em layout: e assim que a tinta e apagada depois,
             sem que a peca se mova um pixel. */
          g.dono.setAttribute("data-pptx", "1");
        });
        return { n: idx + 1, itens: itens };
      }),
    };
  };

  window.__pptxEsconder = function () {
    var dados = window.__pptx();
    /* As setas e tracos do deck vivem em ::before/::after. Como eles herdam a
       cor, apagar a tinta os apagaria junto. Guardo a cor de cada um numa
       propriedade inline (que tambem nao mexe em layout) e devolvo depois. */
    document.querySelectorAll("[data-pptx], [data-pptx] *").forEach(function (el) {
      [["::before", "b"], ["::after", "a"]].forEach(function (par) {
        var cs = getComputedStyle(el, par[0]);
        var c = cs.content;
        if (c && c !== "none" && c !== "normal") {
          el.style.setProperty("--pptx-" + par[1], cs.color);
        }
      });
    });
    var st = document.createElement("style");
    st.textContent =
      "[data-pptx],[data-pptx] *{color:transparent!important;" +
      "-webkit-text-fill-color:transparent!important;text-shadow:none!important}" +
      '[style*="--pptx-b"]::before{color:var(--pptx-b)!important;' +
      "-webkit-text-fill-color:var(--pptx-b)!important}" +
      '[style*="--pptx-a"]::after{color:var(--pptx-a)!important;' +
      "-webkit-text-fill-color:var(--pptx-a)!important}";
    document.head.appendChild(st);
    return dados;
  };
})();
