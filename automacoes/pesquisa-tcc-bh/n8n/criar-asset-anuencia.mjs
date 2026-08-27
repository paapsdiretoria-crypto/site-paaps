/**
 * Cria (ou atualiza) no n8n o workflow que serve a Carta de Anuência do SUAS em PDF.
 *
 * Mesmo padrão da assinatura: o arquivo mora num asset com URL fixa, e o workflow da leva
 * só busca essa URL. Assim a leva não carrega 190 KB de base64 dentro de um nó de código,
 * que é o que a deixaria impossível de reler e de editar.
 *
 * O PDF fica em automacoes/pesquisa-tcc-bh/anuencia-suas.pdf, FORA do git (documento com
 * nome e assinatura de pessoa, regra do automacoes/CLAUDE.md).
 *
 * Rodar:  node automacoes/pesquisa-tcc-bh/n8n/criar-asset-anuencia.mjs
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { lerEnv, base } from './lib-pesquisa.mjs';

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const caminho = resolve(base, 'anuencia-suas.pdf');
const pdf = readFileSync(caminho).toString('base64');
console.log(`lido: ${(pdf.length / 1024).toFixed(0)} KB em base64`);

const workflow = {
  name: 'Pesquisa TCC - Asset: carta de anuência',
  settings: { executionOrder: 'v1', timezone: 'America/Sao_Paulo' },
  nodes: [
    {
      id: 'pedido',
      name: 'GET anuência',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [260, 300],
      parameters: { httpMethod: 'GET', path: 'anuencia-tcc', responseMode: 'responseNode', options: {} },
      notes: 'URL fixa da carta de anuência. Só serve o arquivo, não recebe dado.'
    },
    {
      id: 'arquivo',
      name: 'Anuência (binário)',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [560, 300],
      parameters: {
        jsCode:
          'const b64 = "' + pdf + '";\n' +
          'return [{\n' +
          '  json: { asset: "anuencia-suas" },\n' +
          '  binary: {\n' +
          '    data: {\n' +
          '      data: b64,\n' +
          '      mimeType: "application/pdf",\n' +
          '      fileName: "Carta de Anuencia - SUAS BH.pdf",\n' +
          '      fileExtension: "pdf"\n' +
          '    }\n' +
          '  }\n' +
          '}];'
      },
      notes: 'Carta de Anuência da Diretoria de Gestão do Trabalho e Educação Permanente (DGTE). Vai anexada em todo e-mail da leva.'
    },
    {
      id: 'entrega',
      name: 'Devolver arquivo',
      type: 'n8n-nodes-base.respondToWebhook',
      typeVersion: 1,
      position: [860, 300],
      parameters: { respondWith: 'binary', options: {} }
    }
  ],
  connections: {
    'GET anuência': { main: [[{ node: 'Anuência (binário)', type: 'main', index: 0 }]] },
    'Anuência (binário)': { main: [[{ node: 'Devolver arquivo', type: 'main', index: 0 }]] }
  }
};

const lista = await (await fetch(`${API}/api/v1/workflows?limit=250`, { headers: h })).json();
const existente = (lista.data || []).find((w) => w.name === workflow.name);

let id;
if (existente) {
  const r = await fetch(`${API}/api/v1/workflows/${existente.id}`, { method: 'PUT', headers: h, body: JSON.stringify(workflow) });
  if (!r.ok) throw new Error(`PUT falhou: ${r.status} ${await r.text()}`);
  id = existente.id;
  console.log(`atualizado: ${id}`);
} else {
  const r = await fetch(`${API}/api/v1/workflows`, { method: 'POST', headers: h, body: JSON.stringify(workflow) });
  if (!r.ok) throw new Error(`POST falhou: ${r.status} ${await r.text()}`);
  id = (await r.json()).id;
  console.log(`criado: ${id}`);
}

const a = await fetch(`${API}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: h });
console.log(a.ok ? 'ativado' : `falha ao ativar: ${a.status} ${await a.text()}`);
console.log(`URL da anuência: ${API}/webhook/anuencia-tcc`);
