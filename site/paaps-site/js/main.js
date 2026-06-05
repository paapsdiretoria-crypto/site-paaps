/* ═══════════════════════════════════════
   PAAPS — main.js
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. HAMBURGER MENU ─────────────────────────────────────────────
  const hamburger = document.querySelector('.header__hamburger');
  const drawer    = document.querySelector('.header__drawer');
  const overlay   = document.querySelector('.header__overlay');

  function abrirDrawer() {
    hamburger.classList.add('aberto');
    drawer.classList.add('aberto');
    overlay.classList.add('aberto');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function fecharDrawer() {
    hamburger.classList.remove('aberto');
    drawer.classList.remove('aberto');
    overlay.classList.remove('aberto');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const aberto = drawer.classList.contains('aberto');
      aberto ? fecharDrawer() : abrirDrawer();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', fecharDrawer);
  }

  // Fechar drawer ao clicar em qualquer link dentro dele
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', fecharDrawer);
    });
  }

  // Fechar com ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('aberto')) {
      fecharDrawer();
    }
  });

  // ── 2. HEADER SCROLL ──────────────────────────────────────────────
  const header = document.querySelector('.header');

  function atualizarHeader() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', atualizarHeader, { passive: true });
  atualizarHeader();

  // ── 3. SCROLL SUAVE ────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const alvo = document.querySelector(this.getAttribute('href'));
      if (alvo) {
        e.preventDefault();
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── 4. ESTEIRA MARQUEE (duplicar para loop perfeito) ──────────────
  document.querySelectorAll('.esteira__track').forEach(function (track) {
    // Só duplica se ainda não foi duplicado
    if (!track.dataset.duplicado) {
      const items = track.innerHTML;
      track.innerHTML = items + items;
      track.dataset.duplicado = 'true';
    }
  });

  // ── 5. INTERSECTION OBSERVER — animações de entrada ───────────────
  const observerOpts = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll('.animar').forEach(function (el) {
    observer.observe(el);
  });

  // ── 6. CONTADOR ANIMADO para números grandes ───────────────────────
  function animarContador(el, destino, duracao) {
    const inicio = performance.now();
    const prefixo = el.dataset.prefixo || '';
    const sufixo  = el.dataset.sufixo  || '';

    function passo(agora) {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      const ease = 1 - Math.pow(1 - progresso, 3);
      const atual = Math.round(ease * destino);
      el.textContent = prefixo + atual + sufixo;
      if (progresso < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  const contadorObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const destino = parseInt(el.dataset.valor, 10);
        if (!isNaN(destino)) {
          animarContador(el, destino, 1400);
        }
        contadorObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-valor]').forEach(function (el) {
    contadorObserver.observe(el);
  });

  // ── 7. ACTIVE STATE no nav ─────────────────────────────────────────
  const pagina = window.location.pathname;
  document.querySelectorAll('.header__nav a, .header__drawer a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && pagina.includes(href) && href !== '/') {
      link.style.color = 'var(--cor-terracota)';
    }
  });

});
