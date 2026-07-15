// Motor do fluxo agêntico de produção de conteúdo.
//
// Estado de hoje: o dashboard existe, mas os agentes ainda não são disparados de
// verdade a partir do navegador. Um HTML estático não tem como executar o Claude
// Code. Por isso este motor roda em MODO SIMULAÇÃO: ele percorre as trilhas reais
// de cada agente, no tempo, para que o controle visual já esteja de pé e validado.
//
// Quando a ponte de execução real existir, só uma coisa muda aqui: `_avancar`
// passa a ler o progresso de um arquivo de estado em vez de inventá-lo. A
// interface inteira continua igual. É por isso que o motor é separado da cena.

import { AGENTES, TUBOS } from './agentes.js';

export const MODO = {
  SIMULACAO: 'simulacao',
  REAL: 'real'
};

export class Fluxo {
  constructor() {
    this.modo = MODO.SIMULACAO;
    this.rodando = false;
    this.indiceAtual = -1;
    this.progresso = new Map(); // id -> 0..1
    this.etapa = new Map(); // id -> texto da etapa corrente
    this.concluidos = new Set();

    // Ganchos que a interface preenche.
    this.aoMudar = () => {};
    this.aoAcordar = () => {};
    this.aoDormir = () => {};
    this.aoConversar = () => {};
    this.aoRegistrar = () => {};
    this.aoTerminar = () => {};

    this.reiniciar();
  }

  reiniciar() {
    this.rodando = false;
    this.indiceAtual = -1;
    this.concluidos.clear();
    AGENTES.forEach((a) => {
      this.progresso.set(a.id, 0);
      this.etapa.set(a.id, 'Em repouso');
      a.tokens = 0;
    });
    this.aoMudar();
  }

  iniciar() {
    if (this.rodando) return;
    this.reiniciar();
    this.rodando = true;
    this.aoRegistrar('Fluxo de produção de conteúdo iniciado.', 'marco');
    if (this.modo === MODO.SIMULACAO) {
      this.aoRegistrar(
        'Modo simulação: as trilhas são reais, a execução dos agentes ainda não.',
        'aviso'
      );
    }
    this._proximoAgente();
  }

  parar() {
    this.rodando = false;
    clearTimeout(this._timer);
    this.aoRegistrar('Fluxo interrompido pela Mallu.', 'aviso');
    this.aoMudar();
  }

  get agenteAtual() {
    return this.indiceAtual >= 0 ? AGENTES[this.indiceAtual] : null;
  }

  /** Progresso do ciclo inteiro, 0..1: a bateria geral da missão. */
  get progressoGeral() {
    const total = AGENTES.reduce((s, a) => s + (this.progresso.get(a.id) || 0), 0);
    return total / AGENTES.length;
  }

  _proximoAgente() {
    if (!this.rodando) return;

    const anterior = this.agenteAtual;
    this.indiceAtual++;

    if (this.indiceAtual >= AGENTES.length) {
      this.rodando = false;
      if (anterior) this.aoDormir(anterior.id);
      this.aoRegistrar('Ciclo completo: briefing de conteúdo pronto.', 'marco');
      this.aoTerminar();
      this.aoMudar();
      return;
    }

    const atual = this.agenteAtual;

    if (anterior) {
      // Handoff: os dois ficam acesos e o tubo pulsa enquanto passam o bastão.
      this.concluidos.add(anterior.id);
      this.aoConversar(anterior.id, atual.id, true);
      this.aoRegistrar(`${anterior.nome} passa o parecer para ${atual.nome}.`, 'handoff');
      this._timer = setTimeout(() => {
        this.aoConversar(anterior.id, atual.id, false);
        this.aoDormir(anterior.id);
      }, 3200);
    }

    this.aoAcordar(atual.id);
    this.aoRegistrar(`${atual.nome} acordou. ${atual.cargo}.`, 'acorda');
    if (atual.alerta) this.aoRegistrar(atual.alerta, 'aviso');

    this.passoAtual = 0;
    this.aoMudar();
    this._avancar();
  }

  _avancar() {
    if (!this.rodando) return;
    const a = this.agenteAtual;
    if (!a) return;

    const totalPassos = a.trilha.length;
    if (this.passoAtual >= totalPassos) {
      this.progresso.set(a.id, 1);
      this.etapa.set(a.id, 'Entrega concluída');
      this.aoMudar();
      this._timer = setTimeout(() => this._proximoAgente(), 900);
      return;
    }

    this.etapa.set(a.id, a.trilha[this.passoAtual]);
    this.progresso.set(a.id, this.passoAtual / totalPassos);
    this.aoRegistrar(`${a.nome}: ${a.trilha[this.passoAtual]}`, 'passo');
    this.aoMudar();

    // Cada etapa tem duração própria: coleta e pesquisa demoram mais que um
    // fechamento. Números só valem para a simulação.
    const duracao = 1800 + Math.random() * 2200;
    const inicio = performance.now();
    const base = this.passoAtual / totalPassos;
    const fatia = 1 / totalPassos;

    const tick = () => {
      if (!this.rodando) return;
      const decorrido = performance.now() - inicio;
      const frac = Math.min(decorrido / duracao, 1);
      this.progresso.set(a.id, base + fatia * frac);
      a.tokens += Math.round(40 + Math.random() * 90);
      this.aoMudar();
      if (frac < 1) {
        this._raf = requestAnimationFrame(tick);
      } else {
        this.passoAtual++;
        this._avancar();
      }
    };
    tick();
  }
}

export { AGENTES, TUBOS };
