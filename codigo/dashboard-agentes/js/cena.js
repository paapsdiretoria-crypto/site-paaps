// Cena 3D: espaço sideral, astronautas e os tubos que os ligam.
// Toda a geometria é procedural (nenhum arquivo de modelo externo para baixar).

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { AGENTES, TUBOS } from './agentes.js';

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
  constructor(canvas) {
    this.canvas = canvas;
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
    this.scene.fog = new THREE.FogExp2(COR.fundo, 0.028);

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 400);
    this.camera.position.set(0, 3.2, 26);

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
    this.controls.minDistance = 8;
    this.controls.maxDistance = 60;
    this.controls.target.set(0, 1, 0);

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

    // O visor é a "cara": esconde que não há rosto e reflete a luz do trabalho.
    const visor = new THREE.Mesh(
      new THREE.SphereGeometry(0.44, 32, 32, Math.PI * 0.28, Math.PI * 1.44, Math.PI * 0.24, Math.PI * 0.5),
      new THREE.MeshPhysicalMaterial({
        color: COR.visor,
        roughness: 0.08,
        metalness: 0.9,
        emissive: COR.amarelo,
        emissiveIntensity: 0
      })
    );
    visor.position.z = 0.02;
    capacete.add(visor);
    // A lâmpada de dentro do capacete: apagada = dormindo, acesa = trabalhando.
    const lampada = new THREE.PointLight(COR.amarelo, 0, 6);
    lampada.position.set(0, 0, 0.2);
    capacete.add(lampada);

    // Anel de luz da testa
    const anel = new THREE.Mesh(
      new THREE.TorusGeometry(0.4, 0.05, 12, 32),
      new THREE.MeshStandardMaterial({
        color: COR.marrom,
        emissive: COR.amarelo,
        emissiveIntensity: 0,
        roughness: 0.4
      })
    );
    anel.rotation.x = Math.PI / 2;
    anel.position.y = 0.3;
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

    g.userData = {
      agente,
      capacete,
      visor,
      lampada,
      anel,
      led,
      membros: { bracoE, bracoD, pernaE, pernaD },
      fase: Math.random() * Math.PI * 2,
      acordado: 0, // 0 = dormindo, 1 = desperto (interpolado)
      tremor: 0
    };
    return g;
  }

  _montarTripulacao() {
    const passo = 7.4;
    const inicio = (-(AGENTES.length - 1) * passo) / 2;

    AGENTES.forEach((agente, i) => {
      const a = this._construirAstronauta(agente);
      // Espalha em X, com variação de altura e profundidade para que a fila
      // não pareça um desfile plano.
      a.position.set(
        inicio + i * passo,
        Math.sin(i * 1.7) * 1.1,
        Math.cos(i * 0.9) * 2.6 - i * 0.6
      );
      a.rotation.y = Math.sin(i * 2.1) * 0.35;
      this.scene.add(a);
      this.astronautas.set(agente.id, a);
    });
  }

  // --------------------------------------------------------------------- tubos

  _montarTubos() {
    TUBOS.forEach(([origemId, destinoId]) => {
      const a = this.astronautas.get(origemId);
      const b = this.astronautas.get(destinoId);
      if (!a || !b) return;

      // A curva desce entre os dois: é uma mangueira com peso, não um cabo reto.
      const p0 = a.position.clone().add(new THREE.Vector3(0.5, -0.1, 0.4));
      const p3 = b.position.clone().add(new THREE.Vector3(-0.5, -0.1, 0.4));
      const meio = p0.clone().lerp(p3, 0.5);
      const curva = new THREE.CatmullRomCurve3([
        p0,
        p0.clone().lerp(meio, 0.5).add(new THREE.Vector3(0, -1.5, 1.2)),
        meio.clone().add(new THREE.Vector3(0, -2.1, 1.6)),
        p3.clone().lerp(meio, 0.5).add(new THREE.Vector3(0, -1.5, 1.2)),
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

  /** Liga ou desliga o pulso de luz de um tubo. */
  definirTuboAtivo(origemId, destinoId, ativo) {
    const t = this.tubos.find((x) => x.origemId === origemId && x.destinoId === destinoId);
    if (t) t.ativo = ativo;
  }

  apagarTudo() {
    this.astronautas.forEach((_, id) => this.definirDesperto(id, false));
    this.tubos.forEach((t) => (t.ativo = false));
  }

  /** Aproxima a câmera do agente em foco, sem tirar o controle da mão da Mallu. */
  olharPara(id) {
    const a = this.astronautas.get(id);
    if (a) this.alvoCamera = a.position.clone();
  }

  // ------------------------------------------------------------------- quadro

  _quadro() {
    const t = this.relogio.getElapsedTime();

    this.astronautas.forEach((a) => {
      const d = a.userData;
      const acordar = d.alvoAcordado ?? 0;
      d.acordado += (acordar - d.acordado) * 0.05;
      d.tremor *= 0.88;

      // Flutuação: lenta e pesada quando dorme, mais viva quando trabalha.
      const ritmo = 0.5 + d.acordado * 0.9;
      const amp = 0.16 + d.acordado * 0.1;
      a.position.y = (d.baseY ??= a.position.y);
      a.position.y = d.baseY + Math.sin(t * ritmo + d.fase) * amp;
      a.rotation.z = Math.sin(t * ritmo * 0.6 + d.fase) * 0.08;

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
      d.lampada.intensity = d.acordado * 3.4 * pulsa;
      d.visor.material.emissiveIntensity = d.acordado * 0.55 * pulsa;
      d.anel.material.emissiveIntensity = d.acordado * 1.2 * pulsa;
      d.led.material.emissiveIntensity = 0.2 + d.acordado * 1.6 * pulsa;
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

    if (this.alvoCamera) {
      this.controls.target.lerp(this.alvoCamera, 0.05);
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    if (this.hover) this.hover.userData.tremor = 0.09;
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
