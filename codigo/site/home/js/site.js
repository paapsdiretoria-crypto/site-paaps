/* PAAPS : comportamento comum a todas as páginas.
   Progressive enhancement: sem este arquivo o site continua inteiro e legível. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---- menu no celular ---- */
  var botao = document.querySelector('.menu__botao');
  var menu  = document.getElementById('menu');
  if (botao && menu) {
    botao.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- menu que muda de cor conforme a seção que está atrás dele ----
     Sobre foto escura fica sem barra, só as palavras em branco.            */
  (function () {
    var topo = document.querySelector('.topo');
    if (!topo) return;
    var secoes = Array.prototype.slice.call(document.querySelectorAll('[data-tom]'));
    if (!secoes.length) return;

    var pedido = false;
    function ler() {
      pedido = false;
      var linha = topo.getBoundingClientRect().bottom - 4;
      var atras = null;
      secoes.forEach(function (s) {
        var r = s.getBoundingClientRect();
        if (r.top <= linha && r.bottom > linha) atras = s;
      });
      topo.classList.toggle('topo--sobre-foto', !!atras && atras.dataset.tom === 'escuro');
    }
    function aoRolar() {
      if (!pedido) { pedido = true; window.requestAnimationFrame(ler); }
    }
    ler();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
  })();

  /* ---- dados: count-up e a prova que abre no toque e no teclado ----
     O número e a linha de baixo se sustentam sozinhos: o valor final já está
     escrito no HTML, e o count-up só reanima a partir do zero.               */
  (function () {
    var dados = Array.prototype.slice.call(document.querySelectorAll('.dado'));
    if (!dados.length) return;
    var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* No desktop a prova aparece sozinha no hover, só por CSS.
       Aqui é só o caminho do toque: no celular não existe mouse, então um
       toque no dado abre e um toque fora fecha. */
    dados.forEach(function (d) {
      d.addEventListener('click', function (e) {
        e.stopPropagation();
        var estava = d.classList.contains('aberto');
        dados.forEach(function (o) { o.classList.remove('aberto'); });
        if (!estava) d.classList.add('aberto');
      });
    });
    document.addEventListener('click', function () {
      dados.forEach(function (d) { d.classList.remove('aberto'); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') dados.forEach(function (d) { d.classList.remove('aberto'); });
    });

    /* Count-up: sobe do zero ao valor em cerca de 2 segundos. */
    if (reduzido || !('IntersectionObserver' in window)) return;
    var alvos = Array.prototype.slice.call(document.querySelectorAll('[data-conta]'));
    if (!alvos.length) return;

    function contar(el) {
      var bruto = el.getAttribute('data-conta');
      var fim = parseFloat(bruto.replace(',', '.'));
      if (isNaN(fim)) return;
      var casas = (bruto.split(',')[1] || '').length;
      var antes = el.getAttribute('data-antes') || '';
      var depois = el.getAttribute('data-depois') || '';
      var dur = 2000;
      var final = antes + fim.toFixed(casas).replace('.', ',') + depois;

      /* Garantia: o valor certo é escrito de qualquer jeito ao fim do prazo.
         Se a aba estiver oculta, o navegador estrangula o requestAnimationFrame
         e o número congelaria num valor errado. Nenhum número pode ficar errado. */
      var trava = setTimeout(function () { el.textContent = final; }, dur + 150);

      if (document.hidden) { el.textContent = final; clearTimeout(trava); return; }

      var t0 = null;
      function passo(t) {
        if (t0 === null) t0 = t;
        var p = Math.min(1, (t - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = antes + (fim * e).toFixed(casas).replace('.', ',') + depois;
        if (p < 1) { requestAnimationFrame(passo); }
        else { clearTimeout(trava); el.textContent = final; }
      }
      requestAnimationFrame(passo);
    }

    var obs = new IntersectionObserver(function (ent) {
      ent.forEach(function (en) {
        if (en.isIntersecting) { contar(en.target); obs.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    alvos.forEach(function (a) { obs.observe(a); });
  })();

  /* ---- trilha: a barra de capítulos da lateral ----
     Substitui o chapéu em caixa alta, que está proibido. Marca em que seção a
     pessoa está, com o traço proporcional ao tamanho real de cada seção.      */
  (function () {
    var trilha = document.querySelector('.trilha');
    if (!trilha) return;

    var itens = Array.prototype.slice.call(trilha.querySelectorAll('li'));
    var secoes = itens.map(function (li) {
      var a = li.querySelector('a');
      return document.querySelector(a.getAttribute('href'));
    });
    if (secoes.some(function (s) { return !s; })) { trilha.remove(); return; }

    /* Altura do traço proporcional à altura da seção, como capítulo de vídeo. */
    function proporcionar() {
      var total = secoes.reduce(function (t, s) { return t + s.offsetHeight; }, 0);
      if (!total) return;
      itens.forEach(function (li, i) {
        li.style.flexGrow = Math.max(0.35, (secoes[i].offsetHeight / total) * secoes.length);
      });
    }

    var falando = null;
    function anunciar() {
      trilha.classList.add('trilha--falando');
      clearTimeout(falando);
      falando = setTimeout(function () {
        trilha.classList.remove('trilha--falando');
      }, 1600);
    }

    var atual = -1, pedido = false;
    function ler() {
      pedido = false;
      var meio = window.scrollY + window.innerHeight * 0.42;
      var achou = 0;

      secoes.forEach(function (s, i) {
        var topo = s.getBoundingClientRect().top + window.scrollY;
        var alt = s.offsetHeight || 1;
        var p = (meio - topo) / alt;
        itens[i].querySelector('.trilha__b')
                .style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
        if (meio >= topo) achou = i;
      });

      if (achou !== atual) {
        atual = achou;
        itens.forEach(function (li, i) {
          li.setAttribute('aria-current', i === achou ? 'true' : 'false');
        });
        /* O traço clareia quando a seção atual é foto escura. */
        trilha.classList.toggle('trilha--claro',
          secoes[achou].dataset.tom === 'escuro');
        anunciar();
      }
    }
    function aoRolar() {
      if (!pedido) { pedido = true; window.requestAnimationFrame(ler); }
    }

    proporcionar();
    ler();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', function () { proporcionar(); ler(); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { proporcionar(); ler(); });
    }
    window.addEventListener('load', function () { proporcionar(); ler(); });
  })();

  /* ---- revelação no scroll ---- */
  var alvos = document.querySelectorAll('.revela');
  if (!alvos.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Array.prototype.forEach.call(alvos, function (e) { e.classList.add('visivel'); });
    return;
  }
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visivel'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  Array.prototype.forEach.call(alvos, function (e) { obs.observe(e); });
})();
