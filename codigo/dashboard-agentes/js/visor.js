// O visor do capacete é a televisão do agente.
//
// Decisão de design: o texto é desenhado num canvas 2D e aplicado como textura
// no visor. É o que permite tipografia nítida (League Spartan de verdade) numa
// superfície curva. A curvatura é sutil de propósito: visor muito abaulado
// distorce a letra e a tela deixa de ser legível, que é a única coisa que a
// tela precisa ser.
//
// Três faixas, porque "o que o agente está pensando" são três coisas distintas
// e misturá-las vira ruído:
//   PENSANDO  o raciocínio corrente
//   FAZENDO   a chamada de ferramenta crua
//   ACHANDO   o que voltou

import * as THREE from 'three';

const L = 512; // largura do canvas
const A = 340; // altura

const COR = {
  fundoLigado: '#0d0a06',
  fundoRepouso: '#080604',
  ambar: '#f7c31c',
  oliva: '#aea349',
  terracota: '#cb4710',
  bege: '#f5f1e1',
  begeRosa: '#bbada2'
};

export class Visor {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = L;
    this.canvas.height = A;
    this.ctx = this.canvas.getContext('2d');

    this.textura = new THREE.CanvasTexture(this.canvas);
    this.textura.colorSpace = THREE.SRGBColorSpace;
    this.textura.anisotropy = 8;

    this.estado = {
      nome: '',
      etapa: '',
      pensando: '',
      fazendo: '',
      achando: '',
      progresso: 0,
      acordado: false,
      pausado: false,
      simulacao: true
    };

    this.desenhar();
  }

  /** Geometria do visor: um plano levemente abaulado, para a letra não entortar. */
  static geometria() {
    const g = new THREE.PlaneGeometry(0.62, 0.41, 24, 16);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const y = p.getY(i);
      // Bojo suave nos dois eixos: acompanha o capacete sem virar espelho convexo.
      p.setZ(i, -(x * x) * 0.5 - (y * y) * 0.28);
    }
    g.computeVertexNormals();
    return g;
  }

  atualizar(parcial) {
    Object.assign(this.estado, parcial);
    this.desenhar();
  }

  desenhar() {
    const c = this.ctx;
    const e = this.estado;

    c.fillStyle = e.acordado ? COR.fundoLigado : COR.fundoRepouso;
    c.fillRect(0, 0, L, A);
    this._desenharBezel();

    if (!e.acordado) return this._desenharRepouso();

    this._desenharCabecalho();

    let y = 76;
    y = this._faixa('Pensando', e.pensando || e.etapa, COR.bege, y, 3);
    y = this._faixa('Fazendo', e.fazendo, COR.oliva, y, 2);
    y = this._faixa('Achando', e.achando, COR.ambar, y, 3);

    this._desenharBarra();
    this._desenharVarredura();
  }

  /** Borda da tela, desenhada no canvas: no 3D ela cortava os cantos do visor. */
  _desenharBezel() {
    const c = this.ctx;
    const e = this.estado;
    c.strokeStyle = e.acordado ? 'rgba(174,163,73,0.55)' : 'rgba(187,173,162,0.2)';
    c.lineWidth = 6;
    c.strokeRect(3, 3, L - 6, A - 6);
  }

  _desenharRepouso() {
    const c = this.ctx;
    c.fillStyle = COR.begeRosa;
    c.font = '600 20px "League Spartan", Arial, sans-serif';
    c.textAlign = 'center';
    c.letterSpacing = '6px';
    c.globalAlpha = 0.28 + Math.sin(Date.now() / 900) * 0.14; // respiração do sono
    c.fillText('EM REPOUSO', L / 2, A / 2 + 6);
    c.globalAlpha = 1;
    c.textAlign = 'left';
    c.letterSpacing = '0px';
    this.textura.needsUpdate = true;
  }

  _desenharCabecalho() {
    const c = this.ctx;
    const e = this.estado;

    c.fillStyle = e.pausado ? COR.terracota : COR.ambar;
    c.font = '800 19px "League Spartan", Arial, sans-serif';
    c.letterSpacing = '2px';
    c.fillText((e.nome || '').toUpperCase(), 20, 32);

    // Selo de estado. "SIMULAÇÃO" nunca sai da tela enquanto a execução não for
    // real: a Mallu não pode confundir trilha encenada com dado colhido.
    const selo = e.pausado ? 'PAUSADO' : e.simulacao ? 'SIMULAÇÃO' : 'AO VIVO';
    const corSelo = e.pausado ? COR.terracota : e.simulacao ? COR.begeRosa : COR.ambar;
    c.font = '600 11px "League Spartan", Arial, sans-serif';
    c.letterSpacing = '3px';
    const larg = c.measureText(selo).width + 14;
    c.strokeStyle = corSelo;
    c.lineWidth = 1;
    c.strokeRect(L - larg - 20, 17, larg, 20);
    c.fillStyle = corSelo;
    c.fillText(selo, L - larg - 13, 32);

    // Ponto vivo, piscando, só quando está de fato correndo.
    if (!e.pausado) {
      c.beginPath();
      c.arc(L - larg - 32, 27, 3.5, 0, Math.PI * 2);
      c.globalAlpha = 0.4 + Math.abs(Math.sin(Date.now() / 320)) * 0.6;
      c.fill();
      c.globalAlpha = 1;
    }

    c.strokeStyle = 'rgba(245,241,225,0.16)';
    c.beginPath();
    c.moveTo(20, 48);
    c.lineTo(L - 20, 48);
    c.stroke();
  }

  _faixa(rotulo, texto, cor, y, maxLinhas) {
    const c = this.ctx;

    c.fillStyle = COR.begeRosa;
    c.font = '600 10px "League Spartan", Arial, sans-serif';
    c.letterSpacing = '3px';
    c.fillText(rotulo.toUpperCase(), 20, y);

    c.fillStyle = cor;
    c.font = '500 15px "League Spartan", Arial, sans-serif';
    c.letterSpacing = '0.5px';

    const linhas = this._quebrar(texto || 'aguardando', L - 40, maxLinhas);
    linhas.forEach((linha, i) => c.fillText(linha, 20, y + 20 + i * 19));

    return y + 20 + linhas.length * 19 + 14;
  }

  /** Quebra o texto na largura do visor e corta com reticências no limite. */
  _quebrar(texto, largura, maxLinhas) {
    const c = this.ctx;
    const palavras = String(texto).split(/\s+/);
    const linhas = [];
    let atual = '';

    for (const p of palavras) {
      const teste = atual ? atual + ' ' + p : p;
      if (c.measureText(teste).width > largura && atual) {
        linhas.push(atual);
        atual = p;
        if (linhas.length === maxLinhas) break;
      } else {
        atual = teste;
      }
    }
    if (linhas.length < maxLinhas && atual) linhas.push(atual);

    if (linhas.length === maxLinhas) {
      let ultima = linhas[maxLinhas - 1];
      const sobrou = palavras.join(' ').length > linhas.join(' ').length;
      if (sobrou) {
        while (c.measureText(ultima + '...').width > largura && ultima.length) {
          ultima = ultima.slice(0, -1);
        }
        linhas[maxLinhas - 1] = ultima + '...';
      }
    }
    return linhas;
  }

  _desenharBarra() {
    const c = this.ctx;
    const e = this.estado;
    const y = A - 26;

    // Agente sem trilha declarada não tem porcentagem honesta. Mesmo princípio
    // que o @paaps.brasil aplica aos Reels: não mensurável nunca vira zero.
    if (e.semProgresso) {
      c.fillStyle = COR.begeRosa;
      c.font = '600 10px "League Spartan", Arial, sans-serif';
      c.letterSpacing = '2px';
      c.fillText('PROGRESSO NÃO MENSURÁVEL: SEM ETAPAS DECLARADAS', 20, y + 4);
      return;
    }

    c.fillStyle = 'rgba(245,241,225,0.1)';
    c.fillRect(20, y, L - 40, 6);

    const grad = c.createLinearGradient(20, 0, L - 20, 0);
    grad.addColorStop(0, COR.oliva);
    grad.addColorStop(1, COR.ambar);
    c.fillStyle = grad;
    c.fillRect(20, y, (L - 40) * Math.max(0, Math.min(1, e.progresso)), 6);

    c.fillStyle = COR.begeRosa;
    c.font = '600 10px "League Spartan", Arial, sans-serif';
    c.letterSpacing = '2px';
    c.textAlign = 'right';
    c.fillText(Math.round(e.progresso * 100) + '%', L - 20, y - 7);
    c.textAlign = 'left';
  }

  /** Linhas de varredura: dão o ar de aparelho ligado, não de PDF. */
  _desenharVarredura() {
    const c = this.ctx;
    c.fillStyle = 'rgba(11,8,5,0.16)';
    for (let y = 0; y < A; y += 3) c.fillRect(0, y, L, 1);
    this.textura.needsUpdate = true;
  }
}
