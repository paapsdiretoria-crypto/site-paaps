// Cliente da ponte: conecta no servidor-ponte por WebSocket.
//
// Se o servidor existe E tem chave de API, ele nos manda eventos reais dos
// agentes (pensando/fazendo/achando/estado), e o dashboard passa a mostrar
// execução de verdade. Se não há servidor, ou não há chave, tudo continua em
// simulação: o dashboard funciona aberto direto no navegador, sem servidor.
//
// Esta camada só TRADUZ os eventos da ponte para os mesmos ganchos que a
// simulação já usa. Assim a cena e a interface não sabem (nem precisam saber)
// se o que veem é real ou encenado.

export class PonteCliente {
  constructor() {
    this.ws = null;
    this.temChave = false;
    this.conectado = false;
    this.aoStatus = () => {};
    this.aoEvento = () => {};
  }

  conectar() {
    // Se a página foi aberta pelo file:// (sem servidor), não há o que conectar.
    if (location.protocol === 'file:') {
      this.aoStatus({ conectado: false, temChave: false, motivo: 'arquivo-local' });
      return;
    }
    try {
      this.ws = new WebSocket(`ws://${location.host}`);
    } catch {
      this.aoStatus({ conectado: false, temChave: false, motivo: 'sem-servidor' });
      return;
    }

    this.ws.addEventListener('open', () => {
      this.conectado = true;
    });

    this.ws.addEventListener('message', (ev) => {
      let msg;
      try {
        msg = JSON.parse(ev.data);
      } catch {
        return;
      }
      if (msg.tipo === 'ola') {
        this.temChave = msg.temChave;
        this.aoStatus({ conectado: true, temChave: msg.temChave });
      } else {
        this.aoEvento(msg);
      }
    });

    // Se o servidor não está de pé, o socket falha. Não é erro: é o modo
    // simulação, que é o padrão honesto quando não há execução por trás.
    this.ws.addEventListener('error', () => {
      this.aoStatus({ conectado: false, temChave: false, motivo: 'sem-servidor' });
    });

    this.ws.addEventListener('close', () => {
      this.conectado = false;
      this.aoStatus({ conectado: false, temChave: this.temChave, motivo: 'fechado' });
    });
  }

  _enviar(obj) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(obj));
  }

  rodar(agente) {
    this._enviar({ tipo: 'rodar', agente });
  }

  interromper(id) {
    this._enviar({ tipo: 'interromper', id });
  }

  mensagem(id, texto) {
    this._enviar({ tipo: 'mensagem', id, texto });
  }
}
