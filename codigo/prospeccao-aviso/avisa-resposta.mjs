#!/usr/bin/env node
// Avisa na tela do Mac quando um lead da prospeccao fria responde.
//
// Como funciona: o n8n detecta a resposta na caixa relacionamento@paaps.com.br,
// atualiza o CRM e cria uma Atividade chamada "Resposta recebida: <lead>".
// Este script olha essa base de tempos em tempos e transforma cada Atividade
// nova em notificacao nativa do macOS.
//
// Ele so LE o Notion. Nunca escreve nada.
//
// Uso manual:
//   node avisa-resposta.mjs           roda uma vez
//   node avisa-resposta.mjs --teste   dispara uma notificacao de exemplo e sai
//   node avisa-resposta.mjs --desde-o-inicio   ignora o marco e olha os ultimos 7 dias

import { readFileSync, writeFileSync, mkdirSync, existsSync, appendFileSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = dirname(fileURLToPath(import.meta.url));
const ENV = join(AQUI, '..', '..', 'automacoes', '.env');
const PASTA_ESTADO = join(homedir(), '.paaps');
const ESTADO = join(PASTA_ESTADO, 'estado-aviso-resposta.json');
const LOG = join(PASTA_ESTADO, 'aviso-resposta.log');

const BASE_ATIVIDADES = '22244cb5-2e00-81e2-9071-db3762e265a6';
const PREFIXO = 'Resposta recebida:';
const VERSAO_API_NOTION = '2022-06-28';

function registrar(linha) {
  const carimbo = new Date().toISOString();
  const texto = `${carimbo}  ${linha}\n`;
  process.stdout.write(texto);
  try {
    mkdirSync(PASTA_ESTADO, { recursive: true });
    appendFileSync(LOG, texto);
  } catch {
    // se nem o log grava, seguir em silencio e nao derrubar o servico
  }
}

function lerToken() {
  const doAmbiente = process.env.NOTION_TOKEN;
  if (doAmbiente && doAmbiente.trim()) return doAmbiente.trim();

  if (!existsSync(ENV)) return null;
  const linha = readFileSync(ENV, 'utf8')
    .split('\n')
    .find((l) => l.startsWith('NOTION_TOKEN='));
  if (!linha) return null;

  const valor = linha.slice('NOTION_TOKEN='.length).trim().replace(/^["']|["']$/g, '');
  return valor || null;
}

function lerEstado() {
  try {
    return JSON.parse(readFileSync(ESTADO, 'utf8'));
  } catch {
    return {};
  }
}

function gravarEstado(estado) {
  mkdirSync(PASTA_ESTADO, { recursive: true });
  writeFileSync(ESTADO, JSON.stringify(estado, null, 2));
}

function notificar(titulo, mensagem) {
  // Aspas duplas quebram o AppleScript; troca por aspas simples antes de passar.
  const limpo = (t) => String(t).replace(/"/g, "'").replace(/\\/g, '');
  const script =
    `display notification "${limpo(mensagem)}" ` +
    `with title "${limpo(titulo)}" sound name "Submarine"`;

  return new Promise((resolve) => {
    execFile('osascript', ['-e', script], (erro) => {
      if (erro) registrar(`FALHA ao notificar: ${erro.message}`);
      resolve();
    });
  });
}

async function buscarRespostas(token, desde) {
  const corpo = {
    filter: {
      and: [
        { property: 'Tipo', select: { equals: 'PROSPECÇÃO' } },
        { timestamp: 'created_time', created_time: { after: desde } },
      ],
    },
    sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
    page_size: 50,
  };

  const resposta = await fetch(`https://api.notion.com/v1/databases/${BASE_ATIVIDADES}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': VERSAO_API_NOTION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(corpo),
  });

  if (!resposta.ok) {
    const detalhe = await resposta.text();
    throw new Error(`Notion respondeu ${resposta.status}: ${detalhe.slice(0, 300)}`);
  }

  const dados = await resposta.json();
  return (dados.results || [])
    .map((pagina) => ({
      id: pagina.id,
      criadoEm: pagina.created_time,
      titulo: (pagina.properties?.Atividade?.title || []).map((t) => t.plain_text).join(''),
      descricao: (pagina.properties?.Descrição?.rich_text || []).map((t) => t.plain_text).join(''),
    }))
    .filter((a) => a.titulo.startsWith(PREFIXO));
}

async function principal() {
  const modoTeste = process.argv.includes('--teste');
  const desdeOInicio = process.argv.includes('--desde-o-inicio');

  if (modoTeste) {
    await notificar('PAAPS: um lead respondeu', 'Prefeitura de Exemplo respondeu a carta de prospecção.');
    registrar('Notificação de teste disparada.');
    return;
  }

  const token = lerToken();
  if (!token) {
    registrar('PARADO: NOTION_TOKEN vazio em automacoes/.env. Sem ele não dá para ler o CRM.');
    process.exitCode = 1;
    return;
  }

  const estado = lerEstado();
  const seteDiasAtras = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();

  // Na primeira execução o marco vira "agora": ninguém quer 30 notificações de uma vez.
  if (!estado.ultimoVisto && !desdeOInicio) {
    gravarEstado({ ultimoVisto: new Date().toISOString(), jaAvisados: [] });
    registrar('Primeira execução: marco inicial gravado. A partir daqui, só o que for novo avisa.');
    return;
  }

  const desde = desdeOInicio ? seteDiasAtras : estado.ultimoVisto;
  const jaAvisados = new Set(estado.jaAvisados || []);

  let respostas;
  try {
    respostas = await buscarRespostas(token, desde);
  } catch (erro) {
    registrar(`FALHA ao consultar o Notion: ${erro.message}`);
    process.exitCode = 1;
    return;
  }

  const novas = respostas.filter((r) => !jaAvisados.has(r.id));

  for (const r of novas) {
    const lead = r.titulo.slice(PREFIXO.length).trim() || 'um lead';
    const detalhe = r.descricao.slice(0, 180) || 'Abra o CRM para ver a mensagem.';
    await notificar(`${lead} respondeu`, detalhe);
    registrar(`Avisado: ${lead}`);
    jaAvisados.add(r.id);
  }

  if (!novas.length) registrar('Nada novo.');

  gravarEstado({
    ultimoVisto: new Date().toISOString(),
    // guarda só os 200 últimos: o marco de tempo já evita reprocessar o resto
    jaAvisados: [...jaAvisados].slice(-200),
  });
}

principal().catch((erro) => {
  registrar(`FALHA inesperada: ${erro.stack || erro.message}`);
  process.exitCode = 1;
});
