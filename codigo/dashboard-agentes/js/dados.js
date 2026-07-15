// Carrega a constelação a partir do Notion (via dados/constelacao.json, gerado
// pela ponte) e monta o grafo do fluxo.
//
// Nada de agente escrito à mão aqui. Esse foi o erro da primeira versão: o
// roster mudou duas vezes em uma hora e o dashboard virou ficção. A única coisa
// nomeada neste arquivo é o AGENTE FINAL de cada fluxo, porque "onde o fluxo
// termina" é decisão de produto, não fato do Notion. Todo o resto (quem entra,
// em que ordem, quem é paralelo a quem) é derivado do grafo.

import { TRILHAS } from './trilhas.js';

/** Fluxos disponíveis. A chave é o id do agente que fecha o fluxo. */
export const FLUXOS = {
  carrossel: {
    nome: 'Produção de Conteúdo',
    final: 'copywriter-paaps'
  }
};

export async function carregarConstelacao(fluxo = 'carrossel') {
  const resp = await fetch('dados/constelacao.json');
  if (!resp.ok) {
    throw new Error(
      'Não achei dados/constelacao.json. Rode a ponte de sincronização com o Notion antes de abrir o dashboard.'
    );
  }
  const bruto = await resp.json();
  const porId = new Map(bruto.agentes.map((a) => [a.id, a]));

  const final = FLUXOS[fluxo].final;
  if (!porId.has(final)) {
    throw new Error(`O agente final do fluxo ("${final}") não existe no Banco de Agentes do Notion.`);
  }

  // O fluxo é todo mundo que desemboca no agente final: sobe a árvore pelo
  // recebe_de. Assim, renomear um agente do meio não quebra nada, e o laço
  // critico-design x aplicador-visual (que é outro fluxo) fica de fora sozinho.
  const doFluxo = new Set();
  (function subir(id) {
    if (doFluxo.has(id)) return;
    doFluxo.add(id);
    (porId.get(id)?.recebe_de ?? []).forEach(subir);
  })(final);

  const agentes = bruto.agentes
    .filter((a) => doFluxo.has(a.id))
    .map((a) => ({
      ...a,
      // A trilha vem do .md do agente, não do Notion: o Notion não guarda etapa.
      trilha: TRILHAS[a.id]?.etapas ?? [],
      alerta: TRILHAS[a.id]?.alerta ?? null,
      tokens: 0
    }));

  const tubos = bruto.tubos.filter((t) => doFluxo.has(t.de) && doFluxo.has(t.para));

  atribuirProfundidade(agentes, tubos);
  posicionar(agentes);

  return {
    nome: FLUXOS[fluxo].nome,
    geradoEm: bruto.gerado_em,
    agentes,
    tubos,
    porId: new Map(agentes.map((a) => [a.id, a]))
  };
}

/**
 * Profundidade de cada agente: o maior caminho até ele a partir de uma raiz.
 * É o que faz Radar e @paaps.brasil (ambos sem dependência) ficarem lado a lado
 * na mesma coluna, em vez de enfileirados.
 */
function atribuirProfundidade(agentes, tubos) {
  const deps = new Map(agentes.map((a) => [a.id, []]));
  tubos.forEach((t) => deps.get(t.para)?.push(t.de));

  const calculado = new Map();
  const calcular = (id, visitando = new Set()) => {
    if (calculado.has(id)) return calculado.get(id);
    // Guarda contra ciclo: um laço no grafo não pode travar a tela.
    if (visitando.has(id)) return 0;
    visitando.add(id);
    const entradas = deps.get(id) ?? [];
    const d = entradas.length ? Math.max(...entradas.map((e) => calcular(e, visitando) + 1)) : 0;
    visitando.delete(id);
    calculado.set(id, d);
    return d;
  };

  agentes.forEach((a) => (a.profundidade = calcular(a.id)));
}

/** Posição 3D: coluna pela profundidade, e os paralelos empilhados na coluna. */
function posicionar(agentes) {
  const colunas = new Map();
  agentes.forEach((a) => {
    if (!colunas.has(a.profundidade)) colunas.set(a.profundidade, []);
    colunas.get(a.profundidade).push(a);
  });

  const PASSO_X = 7.4;
  const PASSO_Y = 4.6;
  const maxProf = Math.max(...agentes.map((a) => a.profundidade));

  colunas.forEach((naColuna, prof) => {
    naColuna.forEach((a, i) => {
      // Centraliza a constelação e empilha os paralelos em torno do eixo.
      a.pos = {
        x: (prof - maxProf / 2) * PASSO_X + 4,
        y: (i - (naColuna.length - 1) / 2) * PASSO_Y,
        // Profundidade real: quem é paralelo também se afasta em Z, para os
        // tubos não se sobreporem num plano chapado.
        z: (i - (naColuna.length - 1) / 2) * 2.2 - prof * 0.8
      };
    });
  });
}
