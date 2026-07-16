// Costura: carrega a constelação do Notion, liga o motor à cena e à interface.

import { Cena } from './cena.js';
import { Fluxo, MODO, ESTADO } from './fluxo.js';
import { carregarConstelacao } from './dados.js';
import { PonteCliente } from './ponte.js';

const el = {
  botao: document.getElementById('botao'),
  valorGeral: document.getElementById('valor-geral'),
  barraGeral: document.getElementById('barra-geral'),
  tripulacao: document.getElementById('tripulacao'),
  registro: document.getElementById('registro'),
  dica: document.getElementById('dica'),
  fluxoNome: document.querySelector('.fluxo-nome'),
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

const ROTULO_ESTADO = {
  [ESTADO.REPOUSO]: 'Em repouso',
  [ESTADO.TRABALHANDO]: 'Trabalhando',
  [ESTADO.AGUARDANDO_MALLU]: 'Aguardando Mallu',
  [ESTADO.CONCLUIDO]: 'Entregou',
  [ESTADO.ABORTADO]: 'Abortado'
};

function registrar(texto, tipo = 'passo') {
  const li = document.createElement('li');
  li.className = tipo;
  const hora = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  li.innerHTML = `<span class="hora">${hora}</span>${texto}`;
  el.registro.prepend(li);
  while (el.registro.children.length > 60) el.registro.lastChild.remove();
}

// ------------------------------------------------------------------- arranque

let cena, fluxo, dados;
let atracado = null;
let consoleAssentado = false;
let fichaAberta = null;
const fichas = new Map();

try {
  dados = await carregarConstelacao('carrossel');
} catch (erro) {
  // Sem os dados do Notion não há dashboard. Falhar dizendo o motivo é melhor
  // que subir uma tela bonita mostrando agentes que não existem mais.
  registrar(erro.message, 'aviso');
  el.botao.disabled = true;
  el.botao.textContent = 'Sem dados';
  throw erro;
}

cena = new Cena(document.getElementById('cena'), dados);
fluxo = new Fluxo(dados);

el.fluxoNome.textContent = `Fluxo 01 · ${dados.nome}`;

// ------------------------------------------------------- ponte de execução real

const ponte = new PonteCliente();

// A ponte decide o modo. Sem servidor ou sem chave, fica simulação: o dashboard
// funciona igual, só não executa nem cobra nada.
ponte.aoStatus = ({ conectado, temChave, motivo }) => {
  const antes = fluxo.modo;
  fluxo.modo = conectado && temChave ? MODO.REAL : MODO.SIMULACAO;
  if (fluxo.modo === antes) return;

  if (fluxo.modo === MODO.REAL) {
    registrar('Ponte conectada com chave de API: execução REAL ligada. Cada ciclo gasta crédito.', 'marco');
  } else if (motivo === 'sem-servidor' || motivo === 'arquivo-local') {
    registrar('Sem servidor-ponte: modo simulação. Abra pelo ABRIR-DASHBOARD.command para execução real.', 'aviso');
  } else if (conectado && !temChave) {
    registrar('Ponte conectada, mas sem ANTHROPIC_API_KEY: modo simulação. Cole a chave em ponte/.env.', 'aviso');
  }
  renderizar();
};

// Cada evento real do servidor entra no motor, que o traduz para os ganchos.
ponte.aoEvento = (ev) => {
  if (ev.tipo === 'aviso') return registrar(ev.texto, 'aviso');
  if (ev.tipo === 'erro') return registrar(`Erro em ${ev.id || 'ponte'}: ${ev.texto}`, 'aviso');
  fluxo.receberEvento(ev);
};

// O motor, no modo real, delega para a ponte em vez de rodar o relógio.
fluxo.aoRodarReal = (a) => ponte.rodar(a);

// pensando/fazendo/achando de verdade vão direto para a televisão do agente.
fluxo.aoFala = (id, faixa, texto) => cena.atualizarVisor(id, { [faixa]: texto });

ponte.conectar();

// ------------------------------------------------------- coluna da tripulação

dados.agentes.forEach((a) => {
  const card = document.createElement('article');
  card.className = 'ficha-lista painel';
  card.innerHTML = `
    <div class="cabeca">
      <span class="ponto"></span>
      <span class="nome">${a.nome}</span>
      <span class="cargo">${a.camada}</span>
    </div>
    <p class="etapa" data-etapa>Em repouso</p>
    <div class="barra" data-barra><i></i></div>
    <div class="rodape">
      <span class="selo ${a.status === 'Ativo' ? 'pronto' : 'em-construcao'}">${a.status}</span>
      <span data-pct>0%</span>
    </div>`;
  card.addEventListener('click', () => abrirFicha(a));
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

  dados.agentes.forEach((a) => {
    const card = fichas.get(a.id);
    const p = fluxo.progresso.get(a.id) || 0;
    const est = fluxo.estado.get(a.id);
    const ativo = est === ESTADO.TRABALHANDO;
    const semTrilha = !(a.trilha ?? []).length;

    card.classList.toggle('ativa', ativo || est === ESTADO.AGUARDANDO_MALLU);
    card.classList.toggle('concluida', est === ESTADO.CONCLUIDO);
    card.querySelector('[data-etapa]').textContent = fluxo.etapa.get(a.id);
    card.querySelector('[data-barra]').classList.toggle('carregando', ativo);
    card.querySelector('[data-barra] i').style.width = pct(p);
    // Sem trilha declarada não existe porcentagem honesta: mostra o traço.
    card.querySelector('[data-pct]').textContent = semTrilha && ativo ? '- -' : pct(p);

    // No modo real, as faixas fazendo/achando são preenchidas pelos eventos da
    // ponte (aoFala), não aqui: por isso só mandamos o placeholder em simulação.
    const dadosVisor = {
      nome: a.nome,
      acordado: ativo || est === ESTADO.AGUARDANDO_MALLU,
      etapa: fluxo.etapa.get(a.id),
      progresso: p,
      semProgresso: semTrilha,
      pausado: est === ESTADO.AGUARDANDO_MALLU,
      simulacao: simulando
    };
    if (simulando) {
      // Em simulação, o motor é a única fonte: PENSANDO espelha a etapa, e as
      // outras faixas dizem a verdade (não há execução por trás).
      dadosVisor.pensando = fluxo.etapa.get(a.id);
      dadosVisor.fazendo = 'sem execução real: aguardando o servidor-ponte';
      dadosVisor.achando = 'nenhum dado colhido nesta simulação';
    }
    // No modo real, pensando/fazendo/achando são donos de aoFala: não os toco
    // aqui, senão o raciocínio real seria sobrescrito pela etapa a cada quadro.
    cena.atualizarVisor(a.id, dadosVisor);
  });

  // O botão do console muda de papel conforme o agente atracado.
  if (atracado) {
    const est = fluxo.estado.get(atracado.id);
    if (est === ESTADO.AGUARDANDO_MALLU) {
      el.botaoPausar.textContent = 'Validar e seguir';
      el.botaoPausar.disabled = false;
      el.botaoPausar.dataset.papel = 'liberar';
    } else {
      el.botaoPausar.textContent = fluxo.pausarNoHandoff
        ? 'Retomar no handoff'
        : 'Pausar no handoff';
      el.botaoPausar.disabled = !fluxo.rodando;
      el.botaoPausar.dataset.papel = 'handoff';
    }
    el.botaoPausar.classList.toggle('ativa', fluxo.pausarNoHandoff);
  }

  if (el.ficha.classList.contains('aberta') && fichaAberta) abrirFicha(fichaAberta, true);
}

// --------------------------------------------------------------------- ficha

function abrirFicha(agente, apenasAtualiza = false) {
  fichaAberta = agente;
  const p = fluxo.progresso.get(agente.id) || 0;
  const est = fluxo.estado.get(agente.id);
  const trilha = agente.trilha ?? [];

  el.fichaConteudo.innerHTML = `
    <span class="rotulo">${agente.camada} · ${agente.status}</span>
    <h2>${agente.nome}</h2>
    <p class="subcargo">${ROTULO_ESTADO[est]}</p>

    <section class="numeros">
      <div><span class="rotulo">Tokens gastos</span><b>${agente.tokens.toLocaleString('pt-BR')}</b></div>
      <div><span class="rotulo">Trilha</span><b>${trilha.length ? Math.round(p * 100) + '%' : '- -'}</b></div>
    </section>

    <section>
      <span class="rotulo">O que o Notion diz</span>
      <p>${agente.notas || 'Sem notas no Banco de Agentes.'}</p>
    </section>

    <section>
      <span class="rotulo">Ferramentas</span>
      <p>${(agente.tools ?? []).join(', ') || 'não declaradas'}</p>
    </section>

    <section>
      <span class="rotulo">Trilha de execução</span>
      ${
        trilha.length
          ? `<ul>${trilha
              .map((e) => `<li>${e.texto}${e.portao ? ' <b>(para e espera você)</b>' : ''}</li>`)
              .join('')}</ul>`
          : '<p>Este agente não declara etapas em sequência, então o progresso dele não é mensurável. O visor mostra o que ele está fazendo, sem porcentagem.</p>'
      }
    </section>

    ${agente.alerta ? `<section><div class="aviso-box">${agente.alerta}</div></section>` : ''}

    <section>
      <span class="rotulo">Origem</span>
      <p><a href="${agente.url_notion}" target="_blank" rel="noopener">Ficha no Notion</a><br>
      <code>${agente.arquivo}</code></p>
    </section>`;

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

// ------------------------------------------------------------------ console

function atracar(agente) {
  atracado = agente;
  consoleAssentado = false;
  cena.atracar(agente.id);
  el.consoleNome.textContent = agente.nome;
  el.consoleEl.classList.add('aberto');
  el.consoleNota.textContent = '';
  renderizar();
}

function soltar() {
  atracado = null;
  cena.desatracar();
  el.consoleEl.classList.remove('aberto');
}

// O console é HTML e a âncora é 3D, então ele persegue o capacete até a câmera
// assentar. Depois disso ele congela: alvo que foge do cursor não se clica.
function seguirCapacete() {
  requestAnimationFrame(seguirCapacete);
  if (!atracado) return;
  if (consoleAssentado && !cena.emMovimento()) return;

  const p = cena.posicaoTela(atracado.id);
  if (!p) {
    el.consoleEl.style.opacity = '0';
    return;
  }
  el.consoleEl.style.opacity = '';

  const larg = el.consoleEl.offsetWidth;
  const alt = el.consoleEl.offsetHeight;
  const x = Math.min(Math.max(p.x, larg / 2 + 12), window.innerWidth - larg / 2 - 12);
  const y = Math.min(Math.max(p.y, 70), window.innerHeight - alt - 16);
  el.consoleEl.style.left = x + 'px';
  el.consoleEl.style.top = y + 'px';
  if (!cena.emMovimento()) consoleAssentado = true;
}
seguirCapacete();

function enviar(modo) {
  const texto = el.consoleMsg.value.trim();
  if (!texto || !atracado) return;
  fluxo.enviarMensagem(atracado.id, texto, modo);

  if (fluxo.modo === MODO.REAL) {
    // No modo real a mensagem chega ao agente que está rodando. Interromper
    // pede o interrupt do SDK primeiro; a nova direção segue como input.
    if (modo === 'interromper') ponte.interromper(atracado.id);
    ponte.mensagem(atracado.id, texto);
    el.consoleNota.textContent =
      modo === 'interromper' ? 'Interrompido: a nova direção foi enviada.' : 'Enviada ao agente.';
  } else {
    el.consoleNota.textContent =
      'Guardada na fila deste agente. Entrega real depende do servidor-ponte.';
  }
  el.consoleMsg.value = '';
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
  if (el.botaoPausar.dataset.papel === 'liberar') {
    fluxo.liberar(atracado.id);
    return;
  }
  fluxo.pausarNoHandoff = !fluxo.pausarNoHandoff;
  registrar(
    fluxo.pausarNoHandoff
      ? 'O fluxo vai parar antes de acordar o próximo agente.'
      : 'O fluxo volta a seguir sozinho nos handoffs.',
    'aviso'
  );
  // Se já estava parado esperando, destrava agora.
  if (!fluxo.pausarNoHandoff) fluxo._acordarProntos();
  renderizar();
});

// ------------------------------------------------------------ ganchos e hover

cena.aoPassarMouse = (agente, x, y) => {
  if (!agente) return el.dica.classList.remove('visivel');
  el.dica.textContent = agente.nome;
  el.dica.style.left = x + 'px';
  el.dica.style.top = y + 'px';
  el.dica.classList.add('visivel');
};

cena.aoClicar = (agente) => atracar(agente);

fluxo.aoMudar = renderizar;
fluxo.aoRegistrar = registrar;
fluxo.aoDormir = (id) => cena.definirDesperto(id, false);
fluxo.aoConversar = (a, b, ligado) => cena.definirTuboAtivo(a, b, ligado);
fluxo.aoTerminar = () => cena.apagarTudo();
fluxo.aoAcordar = (id) => {
  cena.definirDesperto(id, true);
  // Enquadra TODO MUNDO que está trabalhando, não só quem acabou de acordar:
  // com Radar e @paaps.brasil em paralelo, seguir um só deixava o outro fora
  // de quadro. Se a Mallu está atracada em alguém, a câmera não se mexe:
  // atracar é um ato de atenção e o fluxo não arranca ela de lá.
  if (!atracado) cena.enquadrar(fluxo.trabalhando.map((a) => a.id));
};

el.botao.addEventListener('click', () => {
  if (fluxo.rodando) {
    fluxo.parar();
    cena.apagarTudo();
  } else {
    fluxo.iniciar();
  }
});

registrar(
  `Constelação carregada do Notion: ${dados.agentes.length} agentes, ${dados.tubos.length} tubos.`,
  'marco'
);
renderizar();
