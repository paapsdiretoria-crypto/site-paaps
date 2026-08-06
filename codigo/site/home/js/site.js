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

    /* A cutucada é só um lembrete. Depois que a pessoa chega no dado uma vez,
       ele para de chamar para sempre. */
    dados.forEach(function (d) {
      ['pointerenter', 'focusin'].forEach(function (ev) {
        d.addEventListener(ev, function () { d.classList.add('tocado'); }, { once: true });
      });
    });

    /* No desktop a prova aparece sozinha no hover, só por CSS, e o clique não
       participa: se participasse, ela ficaria travada aberta depois que o
       mouse saísse. Este caminho é exclusivo de quem não tem mouse. */
    var semMouse = window.matchMedia('(hover: none)').matches;
    if (semMouse) dados.forEach(function (d) {
      d.addEventListener('click', function (e) {
        e.stopPropagation();
        var estava = d.classList.contains('aberto');
        dados.forEach(function (o) { o.classList.remove('aberto'); });
        if (!estava) d.classList.add('aberto');
      });
    });
    function fecharTodos() {
      dados.forEach(function (d) { d.classList.remove('aberto'); });
    }
    document.addEventListener('click', fecharTodos);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fecharTodos();
    });

    /* Rede de segurança: nenhuma folha pode ficar virada para sempre.
       Se a pessoa liga um mouse, gira o aparelho ou muda o tamanho da janela,
       a marca de "aberto" some. Sem isso, um dado podia ficar mostrando a prova
       e escondendo o próprio número, que é o que não pode acontecer nunca. */
    window.addEventListener('resize', fecharTodos);
    window.addEventListener('blur', fecharTodos);
    document.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse') fecharTodos();
    }, true);

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

  /* ---- ODS: os 8 acendem um a um, colados no movimento de descer ----
     Não é uma animação que dispara e roda sozinha: é o próprio scroll que
     controla. A cada pedacinho que a pessoa desce, mais um objetivo ganha cor.
     Se ela subir de volta, eles apagam na ordem inversa.

     O CSS deixa os 8 acesos por padrão. Só aqui, depois de confirmar que o
     script está mesmo rodando, é que eles são apagados para poder acender.
     Assim, script quebrado ou desligado nunca esconde informação nenhuma.   */
  (function () {
    var listas = Array.prototype.slice.call(document.querySelectorAll('.ods__lista'));
    if (!listas.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    /* Cada grade tem a sua própria faixa de scroll, então a de baixo só começa
       a acender quando chega a vez dela. */
    var grades = listas.map(function (lista) {
      lista.classList.add('ods__lista--cascata');
      return { el: lista, itens: Array.prototype.slice.call(lista.children) };
    });

    var pedido = false;
    function ler() {
      pedido = false;
      grades.forEach(function (g) {
        var r = g.el.getBoundingClientRect();
        /* Começa quando o topo da grade cruza 82% da altura da tela e termina
           quando ela chega a 34%: nessa faixa os passos cabem com folga. */
        var inicio = window.innerHeight * 0.82;
        var fim = window.innerHeight * 0.34;
        var p = (inicio - r.top) / (inicio - fim);
        p = Math.max(0, Math.min(1, p));
        var acesos = Math.round(p * g.itens.length);
        g.itens.forEach(function (li, i) {
          li.classList.toggle('aceso', i < acesos);
        });
      });
    }
    function aoRolar() {
      if (!pedido) { pedido = true; window.requestAnimationFrame(ler); }
    }
    ler();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
  })();

  /* ---- esteiras da comunidade: monta as duas filas e duplica para o loop ---- */
  (function () {
    var a = document.querySelector('.esteira__fila--a');
    var b = document.querySelector('.esteira__fila--b');
    if (!a || !b) return;
    var total = 12, fila = [];
    for (var i = 1; i <= total; i++) {
      fila.push('img/comunidade/c' + (i < 10 ? '0' + i : i) + '.jpg');
    }
    function preencher(el, ordem) {
      var html = ordem.map(function (src) {
        return '<img src="' + src + '" alt="" loading="lazy">';
      }).join('');
      el.innerHTML = html + html;   /* duplicado: o loop fecha sem buraco */
    }
    preencher(a, fila);
    preencher(b, fila.slice().reverse());
  })();

  /* ---- chegada nas seções de foto: o véu escurece e o texto se assenta ---- */
  (function () {
    var secoes = Array.prototype.slice.call(document.querySelectorAll('.sobre-foto--entra'));
    if (!secoes.length) return;
    if (!('IntersectionObserver' in window)) {
      secoes.forEach(function (s) { s.classList.add('dentro'); });
      return;
    }
    var o = new IntersectionObserver(function (ent) {
      ent.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('dentro'); });
    }, { threshold: 0.22 });
    secoes.forEach(function (s) { o.observe(s); });
  })();

  /* ---- a trilha dos entregáveis: o caminho com curvas que acende ----
     O caminho não é fixo no HTML: ele é desenhado a partir da posição real de
     cada ponto, porque os textos têm alturas diferentes e um traçado fixo
     desalinharia. A curva sai de uma Bézier entre um ponto e o seguinte, com o
     desvio lateral alternando de lado para o caminho serpentear.            */
  (function () {
    var caixa = document.querySelector('.trilha-passos');
    if (!caixa) return;
    var svg = caixa.querySelector('.trilha-passos__svg');
    var base = caixa.querySelector('.trilha-passos__base');
    var luz = caixa.querySelector('.trilha-passos__luz');
    var passos = Array.prototype.slice.call(caixa.querySelectorAll('.passo'));
    if (!svg || !base || !luz || !passos.length) return;

    var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var pontos = [];

    function desenhar() {
      var cb = caixa.getBoundingClientRect();
      svg.setAttribute('viewBox', '0 0 ' + Math.round(cb.width) + ' ' + Math.round(cb.height));
      pontos = passos.map(function (p) {
        var b = p.querySelector('.passo__ponto').getBoundingClientRect();
        return { x: b.left - cb.left + b.width / 2, y: b.top - cb.top + b.height / 2 };
      });
      if (pontos.length < 2) return;
      var d = 'M ' + pontos[0].x + ' ' + pontos[0].y;
      for (var i = 1; i < pontos.length; i++) {
        var a = pontos[i - 1], c = pontos[i];
        /* o desvio troca de lado a cada trecho: é o que faz o caminho serpentear */
        var lado = (i % 2 === 1) ? 1 : -1;
        var desvio = Math.min(34, (c.y - a.y) * 0.42) * lado;
        d += ' C ' + (a.x + desvio) + ' ' + (a.y + (c.y - a.y) * 0.42) +
             ', ' + (c.x - desvio) + ' ' + (c.y - (c.y - a.y) * 0.42) +
             ', ' + c.x + ' ' + c.y;
      }
      base.setAttribute('d', d);
      luz.setAttribute('d', d);
      var total = luz.getTotalLength();
      luz.style.strokeDasharray = total;
      luz.style.strokeDashoffset = reduzido ? 0 : total;
      luz.dataset.total = total;
    }

    var pedido = false;
    function ler() {
      pedido = false;
      if (reduzido) { passos.forEach(function (p) { p.classList.add('aceso'); }); return; }
      var cb = caixa.getBoundingClientRect();
      /* a luz começa quando o topo da trilha cruza 76% da tela e termina quando
         o pé dela chega a 46%: a descida da luz acompanha a descida da pessoa */
      var ini = window.innerHeight * 0.76, fim = window.innerHeight * 0.46;
      var p = (ini - cb.top) / ((cb.height) + (ini - fim));
      p = Math.max(0, Math.min(1, p));
      var total = parseFloat(luz.dataset.total || 0);
      luz.style.strokeDashoffset = total * (1 - p);
      /* um ponto acende quando a luz já passou por ele */
      var alcance = cb.height * p;
      passos.forEach(function (passo, i) {
        var y = pontos[i] ? pontos[i].y : 0;
        passo.classList.toggle('aceso', alcance >= y - 8);
      });
    }
    function aoRolar() {
      if (!pedido) { pedido = true; window.requestAnimationFrame(ler); }
    }

    desenhar(); ler();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', function () { desenhar(); ler(); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { desenhar(); ler(); });
    }
    window.addEventListener('load', function () { desenhar(); ler(); });
  })();

  /* ---- a linha amarela que se desenha conforme a pessoa desce ----
     Não é animação que dispara e roda sozinha: é o scroll que controla, então
     ela acompanha o gesto de descer e desfaz ao subir. O CSS já deixa a linha
     inteira quando não há script ou quando o movimento reduzido está ligado. */
  (function () {
    var riscas = Array.prototype.slice.call(document.querySelectorAll('.risca'));
    if (!riscas.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      riscas.forEach(function (r) { r.style.setProperty('--p', 1); });
      return;
    }
    var pedido = false;
    function ler() {
      pedido = false;
      riscas.forEach(function (r) {
        var b = r.getBoundingClientRect();
        /* Começa no instante em que a frase entra pelo pé da tela e fecha quando
           ela chega ao meio: assim o traço já está correndo quando a pessoa
           alcança o quadro da seção, e não depois de passar por ele. */
        var ini = window.innerHeight * 0.98, fim = window.innerHeight * 0.52;
        var p = (ini - b.top) / (ini - fim);
        r.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
      });
    }
    function aoRolar() {
      if (!pedido) { pedido = true; window.requestAnimationFrame(ler); }
    }
    ler();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
  })();

  /* ---- galeria de capas: no toque, a capa vira com um toque ----
     No computador quem vira é o hover, só por CSS. Aqui é o caminho de quem
     não tem mouse. A referência ABNT fica na frente da capa de propósito: ela
     é a informação que não pode depender de gesto nenhum para ser lida.     */
  (function () {
    var obras = Array.prototype.slice.call(document.querySelectorAll('.obra'));
    if (!obras.length) return;
    function fechar() { obras.forEach(function (o) { o.classList.remove('aberto'); }); }
    if (window.matchMedia('(hover: none)').matches) {
      obras.forEach(function (o) {
        o.addEventListener('click', function (e) {
          e.stopPropagation();
          var estava = o.classList.contains('aberto');
          fechar();
          if (!estava) o.classList.add('aberto');
        });
      });
    }
    document.addEventListener('click', fechar);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
    window.addEventListener('resize', fechar);
    window.addEventListener('blur', fechar);
  })();

  /* ---- equipe: no toque, o cartão abre com um toque e fecha com um toque fora ---- */
  (function () {
    var pessoas = Array.prototype.slice.call(document.querySelectorAll('.pessoa'));
    if (!pessoas.length) return;
    if (!window.matchMedia('(hover: none)').matches) return;   /* só no toque */
    pessoas.forEach(function (p) {
      p.addEventListener('click', function (e) {
        e.stopPropagation();
        var estava = p.classList.contains('aberto');
        pessoas.forEach(function (o) { o.classList.remove('aberto'); });
        if (!estava) p.classList.add('aberto');
      });
    });
    document.addEventListener('click', function () {
      pessoas.forEach(function (p) { p.classList.remove('aberto'); });
    });
  })();

  /* ---- quem contrata: o ícone escolhido já chega marcado no formulário ---- */
  (function () {
    var botoes = Array.prototype.slice.call(document.querySelectorAll('[data-perfil]'));
    if (!botoes.length) return;
    botoes.forEach(function (b) {
      b.addEventListener('click', function () {
        var alvo = document.getElementById('perfil-' + b.getAttribute('data-perfil'));
        if (alvo) { alvo.checked = true; }
      });
    });
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

/* ---- queda por item, tela dividida de Treinamentos (observer próprio,
   não mexe no threshold do .revela padrão usado no resto do site) ---- */
(function () {
  var alvos = document.querySelectorAll('.cai');
  if (!alvos.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Array.prototype.forEach.call(alvos, function (e) { e.classList.add('visivel'); });
    return;
  }
  /* rootMargin positivo por baixo: o item já acende um pouco antes de entrar
     de fato na tela, para chegar nítido assim que a pessoa consegue lê-lo. */
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visivel'); obs.unobserve(en.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px 15% 0px' });
  Array.prototype.forEach.call(alvos, function (e) { obs.observe(e); });
})();
