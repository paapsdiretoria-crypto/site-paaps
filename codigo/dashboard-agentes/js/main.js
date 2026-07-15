// Costura: liga o motor do fluxo à cena 3D e à interface.

import { Cena } from './cena.js';
import { Fluxo, MODO, AGENTES } from './fluxo.js';

const cena = new Cena(document.getElementById('cena'));
const fluxo = new Fluxo();

const el = {
  botao: document.getElementById('botao'),
  valorGeral: document.getElementById('valor-geral'),
  barraGeral: document.getElementById('barra-geral'),
  tripulacao: document.getElementById('tripulacao'),
  registro: document.getElementById('registro'),
  dica: document.getElementById('dica'),
  ficha: document.getElementById('ficha'),
  fichaConteudo: document.getElementById('ficha-conteudo'),
  fecharFicha: document.getElementById('fechar-ficha'),
  consoleEl: document.getElementById('console'),
  consoleNome: document.getElementById('console-nome'),
  consoleMsg: document.getElementById('console-msg'),
  consoleEnviar: document.getElementById('console-enviar'),
  consoleSair: document.getElementById('console-sair'),
  consoleNota: document.getElementById('console-nota'),
  botaoPausar: document.getElementById('botao-pausar')
};

const pct = (n) => Math.round(n * 100) + '%';

const SELO = {
  pronto: 'Pronto',
  parcial: 'Etapas 01–02',
  'em-construcao': 'Em construção'
};

// ------------------------------------------------------- coluna da tripulação

const fichas = new Map();

AGENTES.forEach((a) => {
  const card = document.createElement('article');
  card.className = 'ficha-lista painel';
  card.innerHTML = `
    <div class="cabeca">
      <span class="ponto"></span>
      <span class="nome">${a.nome}</span>
      <span class="cargo">${a.cargo}</span>
    </div>
    <p class="etapa" data-etapa>Em repouso</p>
    <div class="barra" data-barra><i></i></div>
    <div class="rodape">
      <span class="selo ${a.estado}">${SELO[a.estado]}</span>
      <span data-pct>0%</span>
    </div>`;
  card.addEventListener('click', () => abrirFicha(a));
  card.addEventListener('mouseenter', () => cena.olharPara(a.id));
  el.tripulacao.appendChild(card);
  fichas.set(a.id, card);
});

// ------------------------------------------------------------------ renderiza

function renderizar() {
  const simulando = fluxo.modo === MODO.SIMULACAO;
  const geral = fluxo.progressoGeral;
  el.valorGeral.textContent = pct(geral);
  el.barraGeral.querySelector('i').style.width = pct(geral);
  el.barraGeral.classList.toggle('carregando', fluxo.rodando);

  el.botao.textContent = fluxo.rodando ? 'Interromper' : 'Acionar fluxo';
  el.botao.classList.toggle('rodando', fluxo.rodando);

  AGENTES.forEach((a) => {
    const card = fichas.get(a.id);
    const p = fluxo.progresso.get(a.id) || 0;
    const ativo = fluxo.agenteAtual?.id === a.id && fluxo.rodando;

    card.classList.toggle('ativa', ativo);
    card.classList.toggle('concluida', fluxo.concluidos.has(a.id));
    card.querySelector('[data-etapa]').textContent = fluxo.etapa.get(a.id);
    card.querySelector('[data-barra]').classList.toggle('carregando', ativo);
    card.querySelector('[data-barra] i').style.width = pct(p);
    card.querySelector('[data-pct]').textContent = pct(p);

    // A televisão do capacete. Em simulação, PENSANDO mostra a etapa real da
    // trilha, e as outras duas faixas dizem a verdade: não há execução por trás.
    cena.atualizarVisor(a.id, {
      nome: a.nome,
      acordado: ativo,
      etapa: fluxo.etapa.get(a.id),
      pensando: fluxo.etapa.get(a.id),
      fazendo: simulando ? 'sem execução real: aguardando o servidor-ponte' : '',
      achando: simulando ? 'nenhum dado colhido nesta simulação' : '',
      progresso: p,
      pausado: fluxo.pausado && ativo,
      simulacao: simulando
    });
  });

  el.botaoPausar.textContent = fluxo.pausado ? 'Retomar' : 'Pausar';
  el.botaoPausar.classList.toggle('ativa', fluxo.pausado);
  el.botaoPausar.disabled = !fluxo.rodando;

  if (el.ficha.classList.contains('aberta') && fichaAberta) abrirFicha(fichaAberta, true);
}

// -------------------------------------------------------- registro de bordo

function registrar(texto, tipo = 'passo') {
  const li = document.createElement('li');
  li.className = tipo;
  const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  li.innerHTML = `<span class="hora">${hora}</span>${texto}`;
  el.registro.prepend(li);
  while (el.registro.children.length > 60) el.registro.lastChild.remove();
}

// --------------------------------------------------------------------- ficha

let fichaAberta = null;

function abrirFicha(agente, apenasAtualiza = false) {
  fichaAberta = agente;
  const p = fluxo.progresso.get(agente.id) || 0;
  el.fichaConteudo.innerHTML = `
    <span class="rotulo">Tripulante · ${SELO[agente.estado]}</span>
    <h2>${agente.nome}</h2>
    <p class="subcargo">${agente.cargo}</p>

    <section class="numeros">
      <div><span class="rotulo">Tokens gastos</span><b>${agente.tokens.toLocaleString('pt-BR')}</b></div>
      <div><span class="rotulo">Trilha</span><b>${Math.round(p * 100)}%</b></div>
    </section>

    <section>
      <span class="rotulo">Especialista em</span>
      <p>${agente.especialista}</p>
    </section>

    <section>
      <span class="rotulo">Missão</span>
      <p>${agente.missao}</p>
    </section>

    <section>
      <span class="rotulo">Características psicológicas</span>
      <ul>${agente.psicologia.map((x) => `<li>${x}</li>`).join('')}</ul>
    </section>

    <section>
      <span class="rotulo">Trilha de execução</span>
      <ul>${agente.trilha.map((x) => `<li>${x}</li>`).join('')}</ul>
    </section>

    ${agente.alerta ? `<section><div class="aviso-box">${agente.alerta}</div></section>` : ''}`;

  if (!apenasAtualiza) {
    el.ficha.classList.add('aberta');
    cena.olharPara(agente.id);
  }
}

el.fecharFicha.addEventListener('click', () => {
  el.ficha.classList.remove('aberta');
  fichaAberta = null;
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') el.fecharFicha.click();
});

// --------------------------------------------------------------- dica hover

cena.aoPassarMouse = (agente, x, y) => {
  if (!agente) {
    el.dica.classList.remove('visivel');
    return;
  }
  el.dica.textContent = agente.nome;
  el.dica.style.left = x + 'px';
  el.dica.style.top = y + 'px';
  el.dica.classList.add('visivel');
};

// ------------------------------------------------------------------ console

let atracado = null;

function atracar(agente) {
  atracado = agente;
  cena.atracar(agente.id);
  el.consoleNome.textContent = agente.nome;
  el.consoleEl.classList.add('aberto');
  renderizar();
}

function soltar() {
  atracado = null;
  cena.desatracar();
  el.consoleEl.classList.remove('aberto');
}

// O console é HTML e a âncora é 3D, então ele precisa perseguir o capacete a
// cada quadro. Some quando o astronauta sai de quadro ou vai para trás da câmera.
function seguirCapacete() {
  requestAnimationFrame(seguirCapacete);
  if (!atracado) return;
  const p = cena.posicaoTela(atracado.id);
  if (!p) {
    el.consoleEl.style.opacity = '0';
    return;
  }
  el.consoleEl.style.opacity = '';
  // Preso dentro da janela: atracado no capacete, a âncora sai do quadro e o
  // console sumia junto justo quando ele é mais necessário.
  const larg = el.consoleEl.offsetWidth;
  const alt = el.consoleEl.offsetHeight;
  const x = Math.min(Math.max(p.x, larg / 2 + 12), window.innerWidth - larg / 2 - 12);
  const y = Math.min(Math.max(p.y, 70), window.innerHeight - alt - 16);
  el.consoleEl.style.left = x + 'px';
  el.consoleEl.style.top = y + 'px';
}
seguirCapacete();

function enviar(modo) {
  const texto = el.consoleMsg.value.trim();
  if (!texto || !atracado) return;
  fluxo.enviarMensagem(atracado.id, texto, modo);
  el.consoleMsg.value = '';
  el.consoleNota.textContent =
    'Guardada na fila deste agente. Entrega real depende do servidor-ponte.';
}

el.consoleEnviar.addEventListener('click', () => enviar('enfileirar'));
el.consoleMsg.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') enviar('enfileirar');
  e.stopPropagation();
});
el.consoleSair.addEventListener('click', soltar);

el.consoleEl.querySelector('[data-acao="interromper"]').addEventListener('click', () => {
  if (!el.consoleMsg.value.trim()) {
    el.consoleNota.textContent = 'Escreva a nova direção antes de interromper.';
    return;
  }
  enviar('interromper');
});

el.botaoPausar.addEventListener('click', () => {
  if (fluxo.pausado) fluxo.retomar();
  else fluxo.pausar();
});

cena.aoClicar = (agente) => atracar(agente);

// ------------------------------------------------------------ ganchos do fluxo

fluxo.aoMudar = renderizar;
fluxo.aoRegistrar = registrar;
fluxo.aoDormir = (id) => cena.definirDesperto(id, false);
fluxo.aoConversar = (a, b, ligado) => cena.definirTuboAtivo(a, b, ligado);
fluxo.aoTerminar = () => cena.apagarTudo();

fluxo.aoAcordar = (id) => {
  cena.definirDesperto(id, true);
  cena.olharPara(id, true);
};

el.botao.addEventListener('click', () => {
  if (fluxo.rodando) {
    fluxo.parar();
    cena.apagarTudo();
  } else {
    fluxo.iniciar();
  }
});

registrar('Constelação PAAPS pronta. Tripulação em repouso.', 'marco');
renderizar();
