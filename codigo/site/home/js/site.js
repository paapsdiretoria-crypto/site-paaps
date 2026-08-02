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
