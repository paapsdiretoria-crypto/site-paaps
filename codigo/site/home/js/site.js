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
