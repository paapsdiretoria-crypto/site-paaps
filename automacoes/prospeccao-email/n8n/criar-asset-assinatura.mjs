/**
 * Cria (ou atualiza) no n8n o workflow que serve a assinatura de e-mail do PAAPS Brasil.
 *
 * Por que existe: a assinatura precisa ir EMBUTIDA no e-mail (cid:), não como link
 * externo, senão o Outlook das prefeituras bloqueia a imagem. Para embutir, o n8n
 * precisa da imagem como binário. Este workflow guarda a imagem em base64 num
 * lugar só e a entrega por uma URL fixa; o workflow da leva semanal apenas busca
 * essa URL e continua leve, fácil de reler e de editar toda semana.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/criar-asset-assinatura.mjs
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, '../../..');

// credenciais: só do .env, nunca escritas em arquivo commitado
const env = Object.fromEntries(
  readFileSync(resolve(raiz, 'automacoes/.env'), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
);

const API = env.N8N_API_URL;
const KEY = env.N8N_API_KEY;
if (!API || !KEY) throw new Error('N8N_API_URL ou N8N_API_KEY ausente em automacoes/.env');

const imagem = readFileSync(
  resolve(raiz, 'insumos-compartilhados/assinatura-email/assinatura-email-640.jpg')
).toString('base64');

const workflow = {
  name: 'PAAPS - Asset: assinatura de e-mail',
  settings: { executionOrder: 'v1', timezone: 'America/Sao_Paulo' },
  nodes: [
    {
      id: 'pedido',
      name: 'GET assinatura',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [260, 300],
      parameters: {
        httpMethod: 'GET',
        path: 'assinatura-paaps',
        responseMode: 'responseNode',
        options: {}
      },
      notes: 'URL pública fixa da assinatura. Só serve a imagem da marca, não recebe dado.'
    },
    {
      id: 'imagem',
      name: 'Assinatura (binário)',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [560, 300],
      parameters: {
        jsCode:
          'const b64 = "' +
          imagem +
          '";\n' +
          'return [{\n' +
          '  json: { asset: "assinatura-paaps-a-montanha" },\n' +
          '  binary: {\n' +
          '    data: {\n' +
          '      data: b64,\n' +
          '      mimeType: "image/jpeg",\n' +
          '      fileName: "assinatura-paaps.jpg",\n' +
          '      fileExtension: "jpg"\n' +
          '    }\n' +
          '  }\n' +
          '}];'
      },
      notes:
        'Fonte: insumos-compartilhados/assinatura-email/assinatura-email-640.jpg (variante A, montanha, aprovada 26/07/2026). Para trocar a assinatura, rode de novo o criar-asset-assinatura.mjs.'
    },
    {
      id: 'entrega',
      name: 'Devolver imagem',
      type: 'n8n-nodes-base.respondToWebhook',
      typeVersion: 1,
      position: [860, 300],
      parameters: { respondWith: 'binary', options: {} }
    }
  ],
  connections: {
    'GET assinatura': { main: [[{ node: 'Assinatura (binário)', type: 'main', index: 0 }]] },
    'Assinatura (binário)': { main: [[{ node: 'Devolver imagem', type: 'main', index: 0 }]] }
  }
};

const h = { 'X-N8N-API-KEY': KEY, 'Content-Type': 'application/json' };

// se já existe um workflow com esse nome, atualiza em vez de duplicar
const lista = await (await fetch(`${API}/api/v1/workflows?limit=250`, { headers: h })).json();
const existente = (lista.data || []).find((w) => w.name === workflow.name);

let id;
if (existente) {
  const r = await fetch(`${API}/api/v1/workflows/${existente.id}`, {
    method: 'PUT',
    headers: h,
    body: JSON.stringify(workflow)
  });
  if (!r.ok) throw new Error(`PUT falhou: ${r.status} ${await r.text()}`);
  id = existente.id;
  console.log(`atualizado: ${id}`);
} else {
  const r = await fetch(`${API}/api/v1/workflows`, {
    method: 'POST',
    headers: h,
    body: JSON.stringify(workflow)
  });
  if (!r.ok) throw new Error(`POST falhou: ${r.status} ${await r.text()}`);
  id = (await r.json()).id;
  console.log(`criado: ${id}`);
}

// webhook só responde na URL de produção com o workflow ativo
const a = await fetch(`${API}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: h });
console.log(a.ok ? 'ativado' : `falha ao ativar: ${a.status} ${await a.text()}`);
console.log(`URL da assinatura: ${API}/webhook/assinatura-paaps`);
