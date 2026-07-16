// Motor do fluxo agêntico.
//
// Executa um GRAFO, não uma fila: acorda de uma vez todo agente cujas
// dependências já terminaram. É por isso que o Radar e o @paaps.brasil sobem
// juntos, e a Tecelã só acorda quando os DOIS entregarem.
//
// Estado de hoje: MODO.SIMULACAO. As trilhas são as etapas reais de cada agente
// (derivadas dos .md), mas nada está sendo executado. Quando o servidor-ponte
// existir, `_rodarAgente` deixa de percorrer a trilha no relógio e passa a
// escutar os anúncios `>>> ETAPA <id>` que os agentes emitem. A interface toda
// continua igual: é por isso que o motor é separado da cena.

export const MODO = {
  SIMULACAO: 'simulacao',
  REAL: 'real'
};

export const ESTADO = {
  REPOUSO: 'repouso',
  TRABALHANDO: 'trabalhando',
  AGUARDANDO_MALLU: 'aguardando-mallu',
  CONCLUIDO: 'concluido',
  ABORTADO: 'abortado'
};

export class Fluxo {
  constructor(dados) {
    this.dados = dados;
    this.modo = MODO.SIMULACAO;
    this.rodando = false;
    this.pausarNoHandoff = false;

    this.estado = new Map();
    this.progresso = new Map();
    this.etapa = new Map();
    this.passo = new Map();
    // Mensagens da Mallu por agente. Em simulação elas NÃO são entregues: ficam
    // aqui marcadas como não entregues, para a ponte despejá-las no contexto do
    // agente quando existir. Enfileirar de verdade e fingir entrega são coisas
    // diferentes; esta é a primeira.
    this.mensagens = new Map();

    this.aoMudar = () => {};
    this.aoAcordar = () => {};
    this.aoDormir = () => {};
    this.aoConversar = () => {};
    this.aoRegistrar = () => {};
    this.aoTerminar = () => {};
    this.aoRodarReal = () => {}; // dispara a execução real de um agente na ponte
    this.aoFala = () => {}; // pensando/fazendo/achando para o visor

    this.reiniciar();
  }

  get agentes() {
    return this.dados.agentes;
  }

  reiniciar() {
    this.rodando = false;
    this.pausarNoHandoff = false;
    this._timers?.forEach((t) => clearTimeout(t));
    this._timers = [];
    this.agentes.forEach((a) => {
      this.estado.set(a.id, ESTADO.REPOUSO);
      this.progresso.set(a.id, 0);
      this.etapa.set(a.id, 'Em repouso');
      this.passo.set(a.id, 0);
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
        'Modo simulação: as trilhas são as etapas reais dos agentes, a execução não.',
        'aviso'
      );
    }
    this._acordarProntos();
  }

  parar() {
    this.rodando = false;
    this._timers.forEach((t) => clearTimeout(t));
    this._timers = [];
    this.agentes.forEach((a) => {
      if (this.estado.get(a.id) === ESTADO.TRABALHANDO) {
        this.estado.set(a.id, ESTADO.REPOUSO);
        this.aoDormir(a.id);
      }
    });
    this.aoRegistrar('Fluxo interrompido pela Mallu.', 'aviso');
    this.aoMudar();
  }

  /** Progresso do ciclo inteiro: a bateria da missão. */
  get progressoGeral() {
    const total = this.agentes.reduce((s, a) => s + (this.progresso.get(a.id) || 0), 0);
    return this.agentes.length ? total / this.agentes.length : 0;
  }

  get trabalhando() {
    return this.agentes.filter((a) => this.estado.get(a.id) === ESTADO.TRABALHANDO);
  }

  /** Um agente está pronto quando todo mundo de quem ele recebe já concluiu. */
  _pronto(a) {
    if (this.estado.get(a.id) !== ESTADO.REPOUSO) return false;
    return (a.recebe_de ?? []).every((dep) => this.estado.get(dep) === ESTADO.CONCLUIDO);
  }

  _acordarProntos() {
    if (!this.rodando) return;

    const prontos = this.agentes.filter((a) => this._pronto(a));

    if (!prontos.length) {
      const restam = this.agentes.some((a) =>
        [ESTADO.TRABALHANDO, ESTADO.AGUARDANDO_MALLU].includes(this.estado.get(a.id))
      );
      if (!restam) this._encerrar();
      return;
    }

    if (this.pausarNoHandoff) {
      this.aoRegistrar(
        `Pausado antes de acordar: ${prontos.map((a) => a.nome).join(', ')}.`,
        'aviso'
      );
      this.aoMudar();
      return;
    }

    prontos.forEach((a) => this._rodarAgente(a));
    this.aoMudar();
  }

  _rodarAgente(a) {
    this.estado.set(a.id, ESTADO.TRABALHANDO);
    this.passo.set(a.id, 0);

    // Acende os tubos de quem alimenta este agente: o parecer chegando.
    (a.recebe_de ?? []).forEach((dep) => {
      this.aoConversar(dep, a.id, true);
      this._timers.push(
        setTimeout(() => {
          this.aoConversar(dep, a.id, false);
          // O anterior só dorme depois de entregar de fato.
          if (!this._alimentaAlguemAtivo(dep)) this.aoDormir(dep);
        }, 3200)
      );
    });

    this.aoAcordar(a.id);
    this.aoRegistrar(`${a.nome} acordou. ${a.camada}.`, 'acorda');
    if (a.alerta) this.aoRegistrar(a.alerta, 'aviso');

    // No modo real, quem move a barra são os eventos da ponte, não o relógio.
    // O motor só dispara a execução e espera; `receberEvento` cuida do resto.
    if (this.modo === MODO.REAL) {
      this.aoRodarReal(a);
      return;
    }
    this._avancar(a);
  }

  /**
   * Recebe um evento do servidor-ponte (execução real) e o traduz para o mesmo
   * vocabulário da simulação. É o único ponto onde o "real" entra no motor.
   */
  receberEvento(ev) {
    const a = this.dados.porId.get(ev.id);
    if (!a) return;

    if (ev.tipo === 'estado') {
      if (typeof ev.progresso === 'number') this.progresso.set(a.id, ev.progresso);
      if (ev.etapa) this.etapa.set(a.id, ev.etapa);
      if (ev.usage?.output_tokens) a.tokens = (a.tokens || 0) + ev.usage.output_tokens;

      if (ev.estado === 'concluido') return this._concluir(a);
      if (ev.estado === 'abortado') {
        this.estado.set(a.id, ESTADO.ABORTADO);
        this.aoRegistrar(`${a.nome} abortou: ${ev.etapa}.`, 'aviso');
        this.aoDormir(a.id);
        this.aoMudar();
        this._timers.push(setTimeout(() => this._acordarProntos(), 700));
        return;
      }
      this.aoMudar();
    }

    // pensando / fazendo / achando alimentam o visor via aoFala.
    if (['pensando', 'fazendo', 'achando'].includes(ev.tipo)) {
      this.aoFala(a.id, ev.tipo, ev.texto);
    }
  }

  /** Evita apagar um agente que ainda está passando parecer para outro. */
  _alimentaAlguemAtivo(id) {
    return this.agentes.some(
      (o) =>
        (o.recebe_de ?? []).includes(id) && this.estado.get(o.id) === ESTADO.TRABALHANDO
    );
  }

  _avancar(a) {
    if (!this.rodando) return;

    const trilha = a.trilha ?? [];
    const i = this.passo.get(a.id);

    if (!trilha.length) {
      // Sem trilha declarada não existe porcentagem honesta. Segue o mesmo
      // princípio do próprio @paaps.brasil com os Reels: não mensurável nunca
      // vira zero, e nunca vira um número inventado.
      this.etapa.set(a.id, 'Trabalhando (progresso não mensurável)');
      this.progresso.set(a.id, 0);
      this.aoMudar();
      this._timers.push(setTimeout(() => this._concluir(a), 6000));
      return;
    }

    if (i >= trilha.length) return this._concluir(a);

    const etapa = trilha[i];
    this.etapa.set(a.id, etapa.texto);
    this.progresso.set(a.id, i / trilha.length);
    this.aoRegistrar(`${a.nome}: ${etapa.texto}`, 'passo');
    this.aoMudar();

    // Portão: o agente para e espera a Mallu. É regra dele, não travamento.
    if (etapa.portao) {
      this.estado.set(a.id, ESTADO.AGUARDANDO_MALLU);
      this.aoRegistrar(`${a.nome} aguarda a validação da Mallu.`, 'marco');
      this.aoMudar();
      return;
    }

    const duracao = 1800 + Math.random() * 2200;
    const inicio = performance.now();
    const base = i / trilha.length;
    const fatia = 1 / trilha.length;

    const tick = () => {
      if (!this.rodando || this.estado.get(a.id) !== ESTADO.TRABALHANDO) return;
      const frac = Math.min((performance.now() - inicio) / duracao, 1);
      this.progresso.set(a.id, base + fatia * frac);
      a.tokens += Math.round(40 + Math.random() * 90);
      this.aoMudar();
      if (frac < 1) requestAnimationFrame(tick);
      else {
        this.passo.set(a.id, i + 1);
        this._avancar(a);
      }
    };
    tick();
  }

  /** Destrava um agente parado num portão (a Mallu validou a primeira rodada). */
  liberar(id) {
    const a = this.dados.porId.get(id);
    if (!a || this.estado.get(id) !== ESTADO.AGUARDANDO_MALLU) return;
    this.estado.set(id, ESTADO.TRABALHANDO);
    this.passo.set(id, this.passo.get(id) + 1);
    this.aoRegistrar(`Mallu validou. ${a.nome} seguiu.`, 'marco');
    this._avancar(a);
  }

  _concluir(a) {
    this.estado.set(a.id, ESTADO.CONCLUIDO);
    this.progresso.set(a.id, 1);
    this.etapa.set(a.id, 'Entrega concluída');
    this.aoRegistrar(`${a.nome} entregou.`, 'marco');
    this.aoMudar();
    if (!(a.passa_para ?? []).length) this.aoDormir(a.id);
    this._timers.push(setTimeout(() => this._acordarProntos(), 700));
  }

  _encerrar() {
    this.rodando = false;
    this.aoRegistrar('Ciclo completo.', 'marco');
    this.aoTerminar();
    this.aoMudar();
  }

  enviarMensagem(id, texto, modo) {
    if (!this.mensagens.has(id)) this.mensagens.set(id, []);
    this.mensagens.get(id).push({ texto, modo, hora: new Date().toISOString(), entregue: false });

    const a = this.dados.porId.get(id);
    this.aoRegistrar(`Mallu → ${a?.nome}: "${texto}"`, 'mensagem');

    if (this.modo === MODO.SIMULACAO) {
      this.aoRegistrar(
        'Mensagem guardada, não entregue: em simulação não há agente rodando para receber.',
        'aviso'
      );
    }
    this.aoMudar();
  }
}
