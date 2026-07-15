// Cena 3D: espaço sideral, astronautas e os tubos que os ligam.
// Toda a geometria é procedural (nenhum arquivo de modelo externo para baixar).

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Visor } from './visor.js';

const COR = {
  fundo: 0x0b0805,
  traje: 0xf5f1e1,
  trajeSombra: 0xbbada2,
  marrom: 0x442309,
  terracota: 0xcb4710,
  oliva: 0xaea349,
  amarelo: 0xf7c31c,
  visor: 0x1a1208
};

export class Cena {
  /** Gradiente radial branco→transparente, gerado uma vez e reusado por todos. */
  static texturaHalo() {
    if (Cena._halo) return Cena._halo;
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, 'rgba(255,255,255,0.95)');
    g.addColorStop(0.25, 'rgba(255,255,255,0.35)');
    g.addColorStop(0.55, 'rgba(255,255,255,0.09)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    Cena._halo = new THREE.CanvasTexture(c);
    return Cena._halo;
  }

  constructor(canvas, dados) {
    this.canvas = canvas;
    // A constelação vem do Notion, via dados/constelacao.json. Nenhum agente é
    // escrito à mão aqui: foi assim que a primeira versão virou ficção quando
    // dois agentes foram renomeados.
    this.dados = dados;
    this.astronautas = new Map();
    this.tubos = [];
    this.relogio = new THREE.Clock();
    this.hover = null;
    this.aoClicar = () => {};
    this.aoPassarMouse = () => {};

    this._montarPalco();
    this._montarEstrelas();
    this._montarTripulacao();
    this._montarTubos();
    this._montarInteracao();

    window.addEventListener('resize', () => this._redimensionar());
    this._redimensionar();
    this.renderer.setAnimationLoop(() => this._quadro());
  }

  _montarPalco() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(COR.fundo);
    // A névoa é o que dá a sensação de distância: o agente do fim da fila
    // literalmente se perde no escuro.
    this.scene.fog = new THREE.FogExp2(COR.fundo, 0.019);

    this.camera = new THREE.PerspectiveCamera(46, 1, 0.1, 400);
    // Abre mostrando a constelação inteira; ao acionar o fluxo, a câmera fecha
    // sozinha no agente que estiver trabalhando.
    this.camera.position.set(4, 2.2, 25);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    // 0.7 é o que permite encostar no capacete para ler o visor. Com o padrão
    // alto (4), a atracagem era silenciosamente cancelada e o texto ficava
    // com uns 4px na tela: bonito e ilegível.
    this.controls.minDistance = 0.7;
    this.controls.maxDistance = 60;
    this.controls.target.set(4, 0.4, 0);
    // Recuo inicial no eixo X, até a Mallu mexer na câmera.
    this._recuoX = 0;

    // Luz ambiente baixa: no espaço, o que não é iluminado some.
    this.scene.add(new THREE.AmbientLight(0xf5f1e1, 0.18));

    const sol = new THREE.DirectionalLight(0xfff4dd, 2.1);
    sol.position.set(-14, 16, 12);
    sol.castShadow = true;
    sol.shadow.mapSize.set(2048, 2048);
    sol.shadow.camera.far = 80;
    this.scene.add(sol);

    // Contraluz terracota: separa o traje do preto do fundo.
    const contra = new THREE.DirectionalLight(COR.terracota, 1.1);
    contra.position.set(16, -6, -14);
    this.scene.add(contra);

    const preenche = new THREE.PointLight(COR.oliva, 60, 90);
    preenche.position.set(0, -10, 8);
    this.scene.add(preenche);
  }

  _montarEstrelas() {
    // Três camadas de estrelas em profundidades diferentes: a paralaxe ao girar
    // a câmera é o que vende o volume do espaço.
    [
      { qtd: 1400, raio: 120, tam: 0.28, cor: 0xf5f1e1, op: 0.9 },
      { qtd: 900, raio: 190, tam: 0.5, cor: 0xbbada2, op: 0.55 },
      { qtd: 400, raio: 260, tam: 0.9, cor: 0xaea349, op: 0.3 }
    ].forEach(({ qtd, raio, tam, cor, op }) => {
      const pos = new Float32Array(qtd * 3);
      for (let i = 0; i < qtd; i++) {
        const v = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        )
          .normalize()
          .multiplyScalar(raio * (0.7 + Math.random() * 0.3));
        v.toArray(pos, i * 3);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: cor,
        size: tam,
        sizeAttenuation: true,
        transparent: true,
        opacity: op,
        depthWrite: false,
        fog: false
      });
      this.scene.add(new THREE.Points(geo, mat));
    });
  }

  // ---------------------------------------------------------------- astronauta

  _construirAstronauta(agente) {
    const g = new THREE.Group();

    const traje = new THREE.MeshStandardMaterial({
      color: COR.traje,
      roughness: 0.62,
      metalness: 0.06
    });
    const juncao = new THREE.MeshStandardMaterial({
      color: COR.trajeSombra,
      roughness: 0.8,
      metalness: 0.1
    });
    const equipamento = new THREE.MeshStandardMaterial({
      color: COR.marrom,
      roughness: 0.45,
      metalness: 0.35
    });
    const acento = new THREE.MeshStandardMaterial({
      color: COR.terracota,
      roughness: 0.5,
      metalness: 0.2
    });

    const peca = (geo, mat, x, y, z) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      m.receiveShadow = true;
      g.add(m);
      return m;
    };

    // Torso e quadril
    peca(new THREE.CapsuleGeometry(0.52, 0.62, 6, 24), traje, 0, 0, 0);
    peca(new THREE.CylinderGeometry(0.42, 0.46, 0.22, 24), juncao, 0, -0.62, 0);

    // Capacete: casca opaca + bolha de vidro + visor dourado
    const capacete = new THREE.Group();
    capacete.position.set(0, 1.02, 0);
    g.add(capacete);

    const cranio = new THREE.Mesh(new THREE.SphereGeometry(0.46, 32, 32), traje);
    cranio.castShadow = true;
    capacete.add(cranio);

    const bolha = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.05,
        metalness: 0,
        transmission: 0.92,
        thickness: 0.4,
        transparent: true,
        opacity: 0.35,
        clearcoat: 1
      })
    );
    capacete.add(bolha);

    // O visor é a televisão do agente: a textura vem do canvas do Visor.
    const tv = new Visor();
    tv.atualizar({ nome: agente.nome });
    const visor = new THREE.Mesh(
      Visor.geometria(),
      new THREE.MeshBasicMaterial({ map: tv.textura, toneMapped: false })
    );
    // z = 0.53 põe a tela do lado de FORA da bolha de vidro (raio 0.5) e do
    // crânio (raio 0.46). Dentro da bolha, a refração do vidro duplicava o
    // texto num fantasma e a tela ficava impossível de ler.
    visor.position.z = 0.53;
    capacete.add(visor);

    // O bezel é desenhado dentro do canvas, em visor.js. Como anel 3D ele
    // passava na frente dos cantos do visor (que são abaulados para trás) e
    // cortava o texto do cabeçalho.
    // A lâmpada de dentro do capacete: apagada = dormindo, acesa = trabalhando.
    const lampada = new THREE.PointLight(COR.amarelo, 0, 6);
    lampada.position.set(0, 0, 0.2);
    capacete.add(lampada);

    // Coroa de luz no alto do capacete. Fica no topo, e não na testa, porque na
    // testa ela atravessava o visor bem no meio da leitura.
    const anel = new THREE.Mesh(
      new THREE.TorusGeometry(0.2, 0.035, 12, 32),
      new THREE.MeshStandardMaterial({
        color: COR.marrom,
        emissive: COR.amarelo,
        emissiveIntensity: 0,
        roughness: 0.4
      })
    );
    anel.rotation.x = Math.PI / 2;
    anel.position.y = 0.42;
    capacete.add(anel);

    // Mochila de vida (PLSS) e seus tanques
    peca(new THREE.BoxGeometry(0.78, 0.9, 0.36), equipamento, 0, 0.05, -0.52);
    peca(new THREE.CylinderGeometry(0.1, 0.1, 0.7, 12), acento, -0.22, 0.05, -0.74);
    peca(new THREE.CylinderGeometry(0.1, 0.1, 0.7, 12), acento, 0.22, 0.05, -0.74);

    // Painel de controle no peito
    peca(new THREE.BoxGeometry(0.42, 0.26, 0.1), equipamento, 0, 0.18, 0.5);
    const led = new THREE.Mesh(
      new THREE.CircleGeometry(0.045, 16),
      new THREE.MeshStandardMaterial({
        color: COR.oliva,
        emissive: COR.oliva,
        emissiveIntensity: 0.2
      })
    );
    led.position.set(0.12, 0.18, 0.56);
    g.add(led);

    // Braços e pernas em Group para poder animar a articulação
    const membro = (compr, x, y, rz) => {
      const pivo = new THREE.Group();
      pivo.position.set(x, y, 0);
      pivo.rotation.z = rz;
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, compr, 6, 16), traje);
      m.position.y = -compr / 2 - 0.16;
      m.castShadow = true;
      pivo.add(m);
      const ponta = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 16), juncao);
      ponta.position.y = -compr - 0.3;
      pivo.add(ponta);
      g.add(pivo);
      return pivo;
    };

    const bracoE = membro(0.62, -0.62, 0.42, 0.5);
    const bracoD = membro(0.62, 0.62, 0.42, -0.5);
    const pernaE = membro(0.7, -0.26, -0.72, 0.14);
    const pernaD = membro(0.7, 0.26, -0.72, -0.14);

    // Faixa terracota no braço: identifica o agente como tripulação PAAPS.
    const faixa = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.035, 8, 20), acento);
    faixa.rotation.x = Math.PI / 2;
    faixa.position.y = -0.5;
    bracoD.add(faixa);

    // Halo: brilho atrás do astronauta, sempre virado para a câmera. Precisa de
    // queda suave nas bordas, senão vira um disco chapado com cara de planeta.
    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(5.4, 5.4),
      new THREE.MeshBasicMaterial({
        map: Cena.texturaHalo(),
        color: COR.amarelo,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        fog: false
      })
    );
    halo.position.set(0, 0.4, -1.4);
    g.add(halo);

    g.userData = {
      agente,
      capacete,
      visor,
      tv,
      lampada,
      anel,
      led,
      halo,
      membros: { bracoE, bracoD, pernaE, pernaD },
      fase: Math.random() * Math.PI * 2,
      acordado: 0, // 0 = dormindo, 1 = desperto (interpolado)
      tremor: 0
    };
    return g;
  }

  _montarTripulacao() {
    this.dados.agentes.forEach((agente, i) => {
      const a = this._construirAstronauta(agente);
      // A posição vem do grafo (coluna = profundidade), calculada em dados.js.
      // Quem não depende de ninguém fica na mesma coluna, lado a lado: é assim
      // que Radar e @paaps.brasil aparecem como paralelos, e não enfileirados.
      a.position.set(agente.pos.x, agente.pos.y, agente.pos.z);
      a.rotation.y = Math.sin(i * 2.1) * 0.22;
      this.scene.add(a);
      this.astronautas.set(agente.id, a);
    });
  }

  // --------------------------------------------------------------------- tubos

  _montarTubos() {
    this.dados.tubos.forEach(({ de: origemId, para: destinoId }) => {
      const a = this.astronautas.get(origemId);
      const b = this.astronautas.get(destinoId);
      if (!a || !b) return;

      // A curva desce entre os dois: é uma mangueira com peso, não um cabo reto.
      const p0 = a.position.clone().add(new THREE.Vector3(0.5, -0.1, 0.4));
      const p3 = b.position.clone().add(new THREE.Vector3(-0.5, -0.1, 0.4));
      const meio = p0.clone().lerp(p3, 0.5);
      // A barriga é proporcional ao vão: com os agentes em colunas, distâncias
      // diferentes precisam de sobras diferentes, senão o tubo curto vira laço e
      // o tubo longo vira corda esticada.
      const vao = p0.distanceTo(p3);
      const barriga = Math.min(2.1, vao * 0.26);
      const curva = new THREE.CatmullRomCurve3([
        p0,
        p0.clone().lerp(meio, 0.5).add(new THREE.Vector3(0, -barriga * 0.72, 1.2)),
        meio.clone().add(new THREE.Vector3(0, -barriga, 1.6)),
        p3.clone().lerp(meio, 0.5).add(new THREE.Vector3(0, -barriga * 0.72, 1.2)),
        p3
      ]);

      const malha = new THREE.Mesh(
        new THREE.TubeGeometry(curva, 90, 0.11, 12, false),
        new THREE.MeshStandardMaterial({
          color: COR.trajeSombra,
          roughness: 0.55,
          metalness: 0.25,
          emissive: COR.amarelo,
          emissiveIntensity: 0
        })
      );
      malha.castShadow = true;
      this.scene.add(malha);

      // O pulso: a informação viajando. Vai e volta, sem parar, enquanto os dois
      // estiverem conversando.
      const pulso = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: COR.amarelo })
      );
      pulso.visible = false;
      const brilho = new THREE.PointLight(COR.amarelo, 0, 5);
      pulso.add(brilho);
      this.scene.add(pulso);

      this.tubos.push({ origemId, destinoId, curva, malha, pulso, ativo: false, t: 0 });
    });
  }

  // --------------------------------------------------------------- interatividade

  _montarInteracao() {
    this.raycaster = new THREE.Raycaster();
    this.ponteiro = new THREE.Vector2();

    this.canvas.addEventListener('pointermove', (e) => {
      const r = this.canvas.getBoundingClientRect();
      this.ponteiro.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this.ponteiro.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      this._testarHover(e.clientX, e.clientY);
    });

    this.canvas.addEventListener('pointerleave', () => {
      this.hover = null;
      this.aoPassarMouse(null);
      this.canvas.style.cursor = 'grab';
    });

    this.canvas.addEventListener('click', () => {
      if (this.hover) this.aoClicar(this.hover.userData.agente);
    });
  }

  _testarHover(clientX, clientY) {
    this.raycaster.setFromCamera(this.ponteiro, this.camera);
    const alvos = [...this.astronautas.values()];
    const hits = this.raycaster.intersectObjects(alvos, true);

    let achado = null;
    if (hits.length) {
      let o = hits[0].object;
      while (o && !o.userData.agente) o = o.parent;
      achado = o || null;
    }

    if (achado !== this.hover) {
      this.hover = achado;
      this.canvas.style.cursor = achado ? 'pointer' : 'grab';
      this.aoPassarMouse(achado ? achado.userData.agente : null, clientX, clientY);
    } else if (achado) {
      this.aoPassarMouse(achado.userData.agente, clientX, clientY);
    }
  }

  // ------------------------------------------------------------------ estado

  /** Acorda ou faz dormir um astronauta. */
  definirDesperto(id, desperto) {
    const a = this.astronautas.get(id);
    if (a) a.userData.alvoAcordado = desperto ? 1 : 0;
  }

  /** Manda conteúdo para a televisão (o visor) de um agente. */
  atualizarVisor(id, dados) {
    const a = this.astronautas.get(id);
    if (a) a.userData.tv.atualizar(dados);
  }

  /**
   * Atraca a câmera de frente para o capacete, na distância de leitura do visor.
   * Sem isto o visor é bonito e ilegível: é o preço de a tela viver na cena.
   */
  atracar(id) {
    const a = this.astronautas.get(id);
    if (!a) return;
    this.atracado = id;
    const alvo = new THREE.Vector3(a.position.x, (a.userData.baseY ?? a.position.y) + 1.02, a.position.z);
    this.alvoCamera = alvo;
    // Frente do capacete: o astronauta tem rotação própria, então a posição de
    // leitura sai do eixo dele, não do eixo do mundo.
    // 1.6 é medido do CENTRO do capacete, e a tela fica 0.53 à frente dele:
    // sobra ~1.05 até o visor, a distância em que a letra fica legível sem que
    // a câmera entre dentro da cabeça.
    const frente = new THREE.Vector3(0, 0, 1).applyQuaternion(a.quaternion).multiplyScalar(1.6);
    this._alvoPos = alvo.clone().add(frente);
    this._recuoX = frente.x;
    this._alvoZ = null;
  }

  desatracar() {
    this.atracado = null;
    this._alvoPos = null;
  }

  /**
   * Enquadra um conjunto de agentes. Com o fluxo paralelo, "seguir quem acordou"
   * deixou de fazer sentido: acordam dois ao mesmo tempo, e a câmera ficava
   * indo atrás do último. Aqui ela abre o suficiente para caber o grupo todo.
   */
  enquadrar(ids) {
    if (this.atracado || !ids?.length) return;

    const caixa = new THREE.Box3();
    ids.forEach((id) => {
      const a = this.astronautas.get(id);
      if (a) caixa.expandByPoint(new THREE.Vector3(a.position.x, a.userData.baseY ?? a.position.y, a.position.z));
    });
    if (caixa.isEmpty()) return;

    const centro = caixa.getCenter(new THREE.Vector3());
    const tam = caixa.getSize(new THREE.Vector3());
    // Raio do grupo mais a folga do corpo do astronauta.
    const raio = Math.max(tam.x, tam.y, 2) / 2 + 2.4;
    const fovV = (this.camera.fov * Math.PI) / 180;
    const distV = raio / Math.tan(fovV / 2);
    const distH = raio / Math.tan(Math.atan(Math.tan(fovV / 2) * this.camera.aspect));

    this.alvoCamera = centro;
    this._recuoX = 0;
    this._alvoPos = centro.clone().add(new THREE.Vector3(0, 0.6, Math.max(distV, distH) + 2));
  }

  /** A câmera ainda está indo para algum lugar? Usado para saber quando assentar o HTML. */
  emMovimento() {
    return this._alvoPos != null || this._alvoZ != null;
  }

  /** Onde o capacete de um agente está na tela, para ancorar HTML nele. */
  posicaoTela(id) {
    const a = this.astronautas.get(id);
    if (!a) return null;
    const v = new THREE.Vector3();
    a.userData.capacete.getWorldPosition(v);
    v.y -= 0.62; // ancora abaixo do queixo, para não tapar o visor
    v.project(this.camera);
    if (v.z > 1) return null; // atrás da câmera
    const r = this.canvas.getBoundingClientRect();
    return {
      x: r.left + ((v.x + 1) / 2) * r.width,
      y: r.top + ((-v.y + 1) / 2) * r.height
    };
  }

  /** Liga ou desliga o pulso de luz de um tubo. */
  definirTuboAtivo(origemId, destinoId, ativo) {
    const t = this.tubos.find((x) => x.origemId === origemId && x.destinoId === destinoId);
    if (t) t.ativo = ativo;
  }

  apagarTudo() {
    this.astronautas.forEach((_, id) => this.definirDesperto(id, false));
    this.tubos.forEach((t) => (t.ativo = false));
  }

  /**
   * Move o foco para um agente. `aproximar` fecha a câmera nele (usado quando o
   * agente acorda); sem isso, só desliza o alvo e preserva o enquadramento que a
   * Mallu escolheu na mão.
   */
  olharPara(id, aproximar = false) {
    const a = this.astronautas.get(id);
    if (!a) return;
    this._recuoX = this.camera.position.x - this.controls.target.x;
    this.alvoCamera = new THREE.Vector3(a.position.x, a.userData.baseY ?? a.position.y, a.position.z);
    if (aproximar) this._alvoZ = a.position.z + 12;
  }

  // ------------------------------------------------------------------- quadro

  _quadro() {
    const t = this.relogio.getElapsedTime();

    this.astronautas.forEach((a) => {
      const d = a.userData;
      const acordar = d.alvoAcordado ?? 0;
      d.acordado += (acordar - d.acordado) * 0.05;
      d.tremor *= 0.88;

      // Atracado, o agente se estabiliza e para de flutuar. Não é firula: a
      // flutuação sacode o visor e o console ancorado nele, e ler ou clicar
      // num alvo que balança 150px é impossível.
      const parado = this.atracado === d.agente.id ? 1 : 0;
      d.estabilizado = (d.estabilizado ?? 0) + (parado - (d.estabilizado ?? 0)) * 0.06;
      const firmeza = 1 - d.estabilizado * 0.94;

      // Flutuação: lenta e pesada quando dorme, mais viva quando trabalha.
      const ritmo = 0.5 + d.acordado * 0.9;
      const amp = (0.16 + d.acordado * 0.1) * firmeza;
      a.position.y = (d.baseY ??= a.position.y);
      a.position.y = d.baseY + Math.sin(t * ritmo + d.fase) * amp;
      a.rotation.z = Math.sin(t * ritmo * 0.6 + d.fase) * 0.08 * firmeza;

      // Ao passar o mouse, o astronauta é sacudido de leve.
      if (d.tremor > 0.001) {
        a.position.x = (d.baseX ??= a.position.x) + (Math.random() - 0.5) * d.tremor;
        a.position.y += (Math.random() - 0.5) * d.tremor;
        a.rotation.z += (Math.random() - 0.5) * d.tremor * 0.4;
      } else {
        a.position.x = d.baseX ?? a.position.x;
      }

      // Membros: soltos e caídos no sono, recolhidos e ativos acordado.
      const { bracoE, bracoD, pernaE, pernaD } = d.membros;
      const balanco = Math.sin(t * ritmo + d.fase) * 0.12;
      bracoE.rotation.z = 0.5 + d.acordado * 0.55 + balanco;
      bracoD.rotation.z = -0.5 - d.acordado * 0.55 - balanco;
      bracoE.rotation.x = balanco * 0.6;
      bracoD.rotation.x = -balanco * 0.6;
      pernaE.rotation.z = 0.14 + d.acordado * 0.18 - balanco * 0.5;
      pernaD.rotation.z = -0.14 - d.acordado * 0.18 + balanco * 0.5;

      // A luz do trabalho, com uma pulsação sutil para não parecer estática.
      const pulsa = 0.75 + Math.sin(t * 3 + d.fase) * 0.25;
      d.lampada.intensity = d.acordado * 9 * pulsa;
      d.anel.material.emissiveIntensity = d.acordado * 2.6 * pulsa;
      d.led.material.emissiveIntensity = 0.2 + d.acordado * 2.4 * pulsa;
      // O halo é o que faz "acordado" ser legível de longe, mesmo com o
      // astronauta pequeno na tela.
      d.halo.material.opacity = d.acordado * 0.5 * pulsa;
      d.halo.lookAt(this.camera.position);
    });

    // Pulsos percorrendo os tubos, ida e volta.
    this.tubos.forEach((tb, i) => {
      tb.malha.material.emissiveIntensity +=
        ((tb.ativo ? 0.5 : 0) - tb.malha.material.emissiveIntensity) * 0.08;
      tb.pulso.visible = tb.ativo;
      if (!tb.ativo) return;
      tb.t += 0.006;
      const vaiVolta = Math.abs(((tb.t + i * 0.3) % 2) - 1); // triângulo 0→1→0
      tb.pulso.position.copy(tb.curva.getPointAt(vaiVolta));
      const brilho = tb.pulso.children[0];
      brilho.intensity = 7 + Math.sin(t * 9) * 2.5;
    });

    // Redesenho das televisões: 8 quadros por segundo bastam para o texto e o
    // ponto piscando, e poupam o custo de repintar 4 canvas a 60fps.
    if (t - (this._ultimoDesenho ?? 0) > 0.12) {
      this._ultimoDesenho = t;
      this.astronautas.forEach((a) => a.userData.tv.desenhar());
    }

    if (this._alvoPos) {
      // Atracado: a câmera vai para a frente do capacete, em posição de leitura.
      this.controls.target.lerp(this.alvoCamera, 0.07);
      this.camera.position.lerp(this._alvoPos, 0.07);
      // Chegou: solta a câmera, senão a atracagem briga com o mouse da Mallu.
      if (this.camera.position.distanceTo(this._alvoPos) < 0.06) this._alvoPos = null;
    } else if (this.alvoCamera) {
      // A câmera desliza junto com o alvo, mantendo a distância que a Mallu
      // escolheu no scroll. Só o eixo X acompanha: girar continua sendo dela.
      this.controls.target.lerp(this.alvoCamera, 0.045);
      const desejadoX = this.alvoCamera.x + this._recuoX;
      this.camera.position.x += (desejadoX - this.camera.position.x) * 0.045;
    }

    // Aproximação: age uma vez e se desliga, devolvendo o zoom para o scroll.
    if (this._alvoZ != null) {
      this.camera.position.z += (this._alvoZ - this.camera.position.z) * 0.04;
      if (Math.abs(this._alvoZ - this.camera.position.z) < 0.3) this._alvoZ = null;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    // Sacode ao passar o mouse, menos no agente atracado: lá a Mallu está lendo.
    if (this.hover && this.atracado !== this.hover.userData.agente.id) {
      this.hover.userData.tremor = 0.09;
    }
  }

  _redimensionar() {
    const l = this.canvas.clientWidth;
    const a = this.canvas.clientHeight;
    if (!l || !a) return;
    this.camera.aspect = l / a;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(l, a, false);
  }
}
