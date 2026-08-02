/* ==========================================================================
   MAPA DA REDE : etapas por rolagem + lupa que segue o ponteiro
   Progressive enhancement: sem este arquivo a seção continua legível.
   ========================================================================== */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var mapa = document.getElementById('mapa');
  if (!mapa) return;

  var trilho    = mapa.querySelector('.mapa__trilho');
  var svg       = mapa.querySelector('.mapa__svg');
  var passos    = Array.prototype.slice.call(mapa.querySelectorAll('.mapa__passo'));
  var botoes    = Array.prototype.slice.call(mapa.querySelectorAll('.mapa__btn'));
  var alvos     = Array.prototype.slice.call(mapa.querySelectorAll('.lupa-alvo'));
  var cabo      = mapa.querySelector('.lupa__cabo');
  var servicos  = Array.prototype.slice.call(mapa.querySelectorAll('.servico'));
  var TOTAL     = passos.length;
  var reduzido  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- prepara o traçado dos fios para eles se desenharem, não aparecerem --- */
  mapa.querySelectorAll('.malha__fios path, .malha__descidas path').forEach(function (p) {
    var c = Math.ceil(p.getTotalLength());
    p.style.setProperty('--comp', c);
    p.style.strokeDasharray  = c;
    p.style.strokeDashoffset = c;
  });

  /* ---------------------------------------------------------------- etapas */
  var etapaAtual = -1;

  function irPara(n) {
    n = Math.max(0, Math.min(TOTAL - 1, n));
    if (n === etapaAtual) return;
    etapaAtual = n;
    mapa.setAttribute('data-etapa', String(n));
    passos.forEach(function (p, i) { p.classList.toggle('ativo', i === n); });
    botoes.forEach(function (b, i) { b.setAttribute('aria-current', i === n ? 'true' : 'false'); });
  }

  /* Topo do trilho em relação ao documento. offsetTop não serve: o pai posicionado
     é a própria seção, e devolveria zero. */
  function topoDoTrilho() {
    return trilho.getBoundingClientRect().top + window.scrollY;
  }

  /* Botões: rolam até a posição da etapa, o que mantém texto e rolagem em acordo. */
  botoes.forEach(function (b) {
    b.addEventListener('click', function () {
      var n = parseInt(b.getAttribute('data-ir'), 10);
      if (reduzido || !trilho) { irPara(n); return; }
      var curso = trilho.offsetHeight - window.innerHeight;
      if (curso <= 0) { irPara(n); return; }
      window.scrollTo({
        top: topoDoTrilho() + (curso * (n + 0.5)) / TOTAL,
        behavior: 'smooth'
      });
    });
  });

  /* Etapa derivada da posição de rolagem dentro do trilho. */
  var pedido = false;
  function lerRolagem() {
    pedido = false;
    if (!trilho) return;
    var curso = trilho.offsetHeight - window.innerHeight;
    if (curso <= 0) return;
    var p = (window.scrollY - topoDoTrilho()) / curso;
    irPara(Math.floor(Math.max(0, Math.min(0.999, p)) * TOTAL));
  }
  function aoRolar() {
    if (!pedido) { pedido = true; window.requestAnimationFrame(lerRolagem); }
  }

  if (reduzido) {
    irPara(TOTAL - 1);
  } else {
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
    lerRolagem();
    irPara(etapaAtual < 0 ? 0 : etapaAtual);
  }

  /* ------------------------------------------------------------------ lupa */
  var PARADAS = [
    [430, 470], [150, 520], [790, 500], [1050, 470],
    [930, 610], [620, 620], [320, 600]
  ];
  var idx = 0, relogio = null, seguindo = false;

  function posicionar(x, y) {
    alvos.forEach(function (c) {
      c.setAttribute('cx', x.toFixed(1));
      c.setAttribute('cy', y.toFixed(1));
    });
    if (cabo) {
      var k = 104 * 0.7071;
      cabo.setAttribute('d', 'M' + (x + k) + ' ' + (y + k) +
                             ' L' + (x + k + 34) + ' ' + (y + k + 34));
    }
  }

  function passear() {
    idx = (idx + 1) % PARADAS.length;
    posicionar(PARADAS[idx][0], PARADAS[idx][1]);
  }
  function ligarPasseio() {
    if (relogio || reduzido) return;
    relogio = setInterval(passear, 2400);
  }
  function desligarPasseio() {
    if (relogio) { clearInterval(relogio); relogio = null; }
  }

  /* Converte a posição do ponteiro para o sistema de coordenadas do SVG.
     Cuida do preserveAspectRatio="meet", que encaixa a ilustração inteira. */
  function paraSVG(clientX, clientY) {
    var r  = svg.getBoundingClientRect();
    var vw = 1200, vh = 532, minX = 0, minY = 148;
    var escala = Math.min(r.width / vw, r.height / vh);
    var lx = minX + (clientX - r.left - (r.width  - vw * escala) / 2) / escala;
    var ly = minY + (clientY - r.top  - (r.height - vh * escala) / 2) / escala;
    return [Math.max(minX - 220, Math.min(minX + vw + 220, lx)),
            Math.max(minY - 90,  Math.min(minY + vh + 90,  ly))];
  }

  function seguir(e) {
    var p = paraSVG(e.clientX, e.clientY);
    posicionar(p[0], p[1]);
  }

  if (svg && !reduzido) {
    svg.addEventListener('pointerenter', function () {
      seguindo = true;
      desligarPasseio();
      mapa.classList.add('mapa--seguindo');
    });
    svg.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;   /* no toque, rolar tem prioridade */
      seguir(e);
    });
    svg.addEventListener('pointerleave', function () {
      seguindo = false;
      mapa.classList.remove('mapa--seguindo');
      ligarPasseio();
    });
    /* No toque: um toque leva a lupa até o ponto tocado, sem travar a rolagem. */
    svg.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'touch') return;
      desligarPasseio();
      seguir(e);
      setTimeout(ligarPasseio, 4200);
    });

    /* Só passeia quando a seção está em tela, para não gastar quadro à toa. */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
          if (en.isIntersecting && !seguindo) ligarPasseio(); else desligarPasseio();
        });
      }, { threshold: 0.15 }).observe(mapa);
    } else {
      ligarPasseio();
    }

    posicionar(PARADAS[0][0], PARADAS[0][1]);
  }

  /* Teclado: os serviços viram alvos navegáveis, para quem não usa ponteiro. */
  servicos.forEach(function (g, i) {
    var alvo = PARADAS[i] || PARADAS[0];
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    var texto = g.querySelector('.etiqueta');
    g.setAttribute('aria-label', 'Olhar dentro do serviço ' +
      (texto ? texto.textContent.trim() : 'da rede'));
    function focar() { desligarPasseio(); posicionar(alvo[0], alvo[1]); }
    g.addEventListener('focus', focar);
    g.addEventListener('click', focar);
    g.addEventListener('blur', ligarPasseio);
  });
})();
