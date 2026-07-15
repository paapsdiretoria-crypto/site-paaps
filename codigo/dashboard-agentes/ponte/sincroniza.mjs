#!/usr/bin/env node
// Ponte de dados entre o Notion e o dashboard-agentes.
//
// Este script NAO fala com o Notion. Quem le o Banco de Agentes e o agente
// Claude, via MCP (mcp__claude_ai_Notion__notion-query-data-sources). Este
// script apenas recebe o resultado bruto dessa consulta (o array de linhas,
// ou um objeto { results: [...] } no mesmo formato devolvido pelo MCP) e
// normaliza para o formato que o dashboard consome: dados/constelacao.json.
//
// Uso:
//   node sincroniza.mjs entrada.json > constelacao.json
//   node sincroniza.mjs entrada.json saida.json
//   cat entrada.json | node sincroniza.mjs > constelacao.json
//
// Sem dependencias externas: so o que vem no Node.

import { readFileSync, writeFileSync } from 'node:fs';

// --------------------------------------------------------------------------
// 1. Leitura da entrada (arquivo ou stdin)
// --------------------------------------------------------------------------

function lerEntrada() {
  const arqEntrada = process.argv[2];
  let bruto;
  if (arqEntrada) {
    bruto = readFileSync(arqEntrada, 'utf-8');
  } else {
    bruto = readFileSync(0, 'utf-8'); // stdin
  }
  const dado = JSON.parse(bruto);
  if (Array.isArray(dado)) return dado;
  if (Array.isArray(dado.results)) return dado.results;
  throw new Error(
    'Entrada inesperada: esperava um array de linhas ou um objeto { results: [...] }.'
  );
}

// --------------------------------------------------------------------------
// 2. Normalizacao de texto (para comparar nomes de forma tolerante a
//    maiuscula/minuscula, acento e pontuacao, sem inventar equivalencia)
// --------------------------------------------------------------------------

function normalizaTexto(txt) {
  if (!txt) return '';
  return txt
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function slugDoArquivo(arquivo) {
  if (!arquivo) return null;
  const base = arquivo.split('/').pop() || '';
  return base.replace(/\.md$/i, '');
}

function paraBool(valor) {
  return valor === '__YES__' || valor === true;
}

function paraLista(valor) {
  if (!valor) return [];
  return valor
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

// --------------------------------------------------------------------------
// 3. Resolucao de topologia: "Recebe de" / "Passa para" sao texto livre no
//    Notion. Aqui eles sao quebrados em fragmentos e cada fragmento so vira
//    um id resolvido se, depois de normalizado, bater EXATAMENTE com o id ou
//    o nome de algum agente conhecido. Casamento parcial (substring) fica de
//    fora de proposito: e melhor deixar um fragmento como nao-resolvido do
//    que resolver errado (ex.: "Mallu" nao pode virar "mallu-linkedin").
// --------------------------------------------------------------------------

function quebraFragmentos(textoOriginal) {
  if (!textoOriginal) return [];
  const parenteses = [...textoOriginal.matchAll(/\(([^()]*)\)/g)].map((m) => m[1]);
  const semParenteses = textoOriginal.replace(/\([^()]*\)/g, ' ');

  const fragmentosPrincipais = semParenteses
    .split(/[+/,]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((texto) => ({ texto, origem: 'principal' }));

  const fragmentosParentese = parenteses
    .flatMap((p) => p.split(/[+/,]/))
    .map((s) => s.trim())
    .filter(Boolean)
    .map((texto) => ({ texto, origem: 'parenteses' }));

  return [...fragmentosPrincipais, ...fragmentosParentese];
}

function resolveTexto(textoOriginal, indiceAgentes, agenteAtualId, campo, agenteNomeAtual) {
  const resolvidos = new Set();
  const naoResolvidos = [];

  if (!textoOriginal) {
    return { resolvidos: [], naoResolvidos };
  }

  const fragmentos = quebraFragmentos(textoOriginal);

  for (const { texto } of fragmentos) {
    const chave = normalizaTexto(texto);
    if (!chave) continue;

    const idEncontrado = indiceAgentes.get(chave);
    if (idEncontrado && idEncontrado !== agenteAtualId) {
      resolvidos.add(idEncontrado);
    } else if (!idEncontrado) {
      naoResolvidos.push({
        agente: agenteAtualId,
        agente_nome: agenteNomeAtual,
        campo,
        fragmento: texto,
        texto_original: textoOriginal
      });
    }
  }

  return { resolvidos: [...resolvidos], naoResolvidos };
}

// --------------------------------------------------------------------------
// 4. Normalizacao principal
// --------------------------------------------------------------------------

function normaliza(linhas) {
  const semArquivo = [];
  const candidatos = [];

  for (const linha of linhas) {
    const arquivo = linha['Arquivo'] || null;
    const id = slugDoArquivo(arquivo);
    const nome = linha['Nome'] || null;

    if (!id) {
      semArquivo.push({
        nome,
        notas: linha['Notas'] || null,
        status: linha['Status'] || null,
        motivo:
          'Campo "Arquivo" vazio no Notion: sem .md correspondente, nao da para gerar um id ' +
          'estavel e o registro nao vira no do dashboard.'
      });
      continue;
    }

    candidatos.push({
      id,
      nome,
      camada: linha['Camada'] || null,
      status: linha['Status'] || null,
      arquivo,
      aprovado: paraBool(linha['Aprovado por Mallu']),
      memory: paraBool(linha['Memory']),
      tools: paraLista(linha['Tools']),
      notas: linha['Notas'] || '',
      url_notion: linha['url'] || null,
      _recebeDeTexto: linha['Recebe de'] || null,
      _passaParaTexto: linha['Passa para'] || null
    });
  }

  // indice de resolucao: id normalizado -> id ; nome normalizado -> id
  const indiceAgentes = new Map();
  for (const c of candidatos) {
    indiceAgentes.set(normalizaTexto(c.id), c.id);
    if (c.nome) indiceAgentes.set(normalizaTexto(c.nome), c.id);
  }

  const naoResolvidos = [];
  const agentes = candidatos.map((c) => {
    const recebe = resolveTexto(c._recebeDeTexto, indiceAgentes, c.id, 'recebe_de', c.nome);
    const passa = resolveTexto(c._passaParaTexto, indiceAgentes, c.id, 'passa_para', c.nome);
    naoResolvidos.push(...recebe.naoResolvidos, ...passa.naoResolvidos);

    return {
      id: c.id,
      nome: c.nome,
      camada: c.camada,
      status: c.status,
      arquivo: c.arquivo,
      aprovado: c.aprovado,
      memory: c.memory,
      tools: c.tools,
      notas: c.notas,
      recebe_de: recebe.resolvidos,
      passa_para: passa.resolvidos,
      url_notion: c.url_notion
    };
  });

  // tubos: um por par (de -> para), deduplicados, derivados tanto de
  // passa_para quanto de recebe_de (as duas colunas descrevem a mesma
  // topologia de dois lados, e devem concordar).
  const parIndice = new Map();
  const addTubo = (de, para) => {
    if (!de || !para || de === para) return;
    const chave = `${de}=>${para}`;
    if (!parIndice.has(chave)) parIndice.set(chave, { de, para });
  };
  for (const a of agentes) {
    for (const paraId of a.passa_para) addTubo(a.id, paraId);
    for (const deId of a.recebe_de) addTubo(deId, a.id);
  }
  const tubos = [...parIndice.values()];

  return {
    gerado_em: new Date().toISOString(),
    fonte: 'Notion · Banco de Agentes',
    agentes,
    tubos,
    nao_resolvidos: naoResolvidos,
    sem_arquivo: semArquivo
  };
}

// --------------------------------------------------------------------------
// 5. Execucao
// --------------------------------------------------------------------------

function main() {
  const linhas = lerEntrada();
  const resultado = normaliza(linhas);
  const saidaJson = JSON.stringify(resultado, null, 2) + '\n';

  const arqSaida = process.argv[3];
  if (arqSaida) {
    writeFileSync(arqSaida, saidaJson, 'utf-8');
  } else {
    process.stdout.write(saidaJson);
  }
}

main();
