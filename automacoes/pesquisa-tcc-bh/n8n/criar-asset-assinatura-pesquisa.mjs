/**
 * Cria (ou atualiza) no n8n o workflow que serve a assinatura ACADÊMICA da pesquisa.
 *
 * É um asset separado do da PAAPS de propósito. Se as duas assinaturas dividissem a mesma
 * URL, regenerar uma trocaria a outra sem ninguém perceber, e a prospecção comercial sairia
 * assinada como pesquisadora, ou o CRAS receberia o cartão da empresa.
 *
 *   PAAPS    -> /webhook/assinatura-paaps     (criar-asset-assinatura.mjs, na prospecção)
 *   Pesquisa -> /webhook/assinatura-pesquisa  (este arquivo)
 *
 * Rodar:  node automacoes/pesquisa-tcc-bh/n8n/criar-asset-assinatura-pesquisa.mjs
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { lerEnv, raiz } from './lib-pesquisa.mjs';

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const imagem = readFileSync(
  resolve(raiz, 'insumos-compartilhados/assinatura-email/assinatura-pesquisa-mallu.jpg')
).toString('base64');

const workflow = {
  name: 'Pesquisa TCC - Asset: assinatura acadêmica',
  settings: { executionOrder: 'v1', timezone: 'America/Sao_Paulo' },
  nodes: [
    {
      id: 'pedido',
      name: 'GET assinatura',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [260, 300],
      parameters: { httpMethod: 'GET', path: 'assinatura-pesquisa', responseMode: 'responseNode', options: {} },
      notes: 'URL fixa da assinatura acadêmica. Só serve a imagem, não recebe dado.'
    },
    {
      id: 'imagem',
      name: 'Assinatura (binário)',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [560, 300],
      parameters: {
        jsCode:
          'const b64 = "' + imagem + '";\n' +
          'return [{\n' +
          '  json: { asset: "assinatura-pesquisa-mallu" },\n' +
          '  binary: {\n' +
          '    data: {\n' +
          '      data: b64,\n' +
          '      mimeType: "image/jpeg",\n' +
          '      fileName: "assinatura-pesquisa.jpg",\n' +
          '      fileExtension: "jpg"\n' +
          '    }\n' +
          '  }\n' +
          '}];'
      },
      notes: 'Fonte: insumos-compartilhados/assinatura-email/assinatura-pesquisa-mallu.jpg. Cartão acadêmico, sem marca PAAPS. Para trocar, regenerar a imagem e rodar este script de novo.'
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
console.log(`URL da assinatura: ${API}/webhook/assinatura-pesquisa`);
