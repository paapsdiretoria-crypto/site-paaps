/**
 * Garante que o Claude Code consiga disparar e-mail avulso (fora do fluxo de prospecção)
 * pelo Titan, via o webhook genérico "Prospecção - Disparo (SMTP)" (nRq9R176vuXJ0aw0).
 *
 * O nó "Webhook - E-mails aprovados" desse workflow exige um header de autenticação, mas
 * a credencial original (criada direto no n8n, fora de qualquer script) não deixa o nome
 * do header visível pela API do n8n: só o valor de PROSPECCAO_WEBHOOK_TOKEN sobreviveu no
 * .env. Este script cria uma credencial NOVA, com nome de header conhecido, reaproveitando
 * o mesmo valor de token (não é preciso gerar um novo segredo), e pendura essa credencial
 * no nó do webhook. Depois disso, qualquer sessão futura sabe exatamente que header mandar.
 *
 * Rodar de novo é seguro: se a credencial "PAAPS Webhook Token" já existir, ele atualiza.
 *
 *   cd "/Users/mac/Documents/SITE PAAPS"
 *   node automacoes/prospeccao-email/n8n/criar-credencial-envio-geral.mjs
 */

import { readFileSync } from 'node:fs';

const env = Object.fromEntries(
  readFileSync(new URL('../../.env', import.meta.url), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')), l.slice(l.indexOf('=') + 1).trim()])
);

const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const NOME = 'PAAPS Webhook Token';
const HEADER_NOME = 'X-Webhook-Token';
const WF = 'nRq9R176vuXJ0aw0'; // Prospecção - Disparo (SMTP)

const token = env.PROSPECCAO_WEBHOOK_TOKEN;
if (!token) {
  console.error('\nPROSPECCAO_WEBHOOK_TOKEN não está em automacoes/.env.');
  process.exit(1);
}

const lista = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const existente = (lista.data || []).find((c) => c.name === NOME);

const dados = { name: HEADER_NOME, value: token };

let id;
if (existente) {
  const r = await fetch(`${API}/api/v1/credentials/${existente.id}`, {
    method: 'PATCH',
    headers: h,
    body: JSON.stringify({ name: NOME, type: 'httpHeaderAuth', data: dados }),
  });
  if (!r.ok) throw new Error(`PATCH falhou: ${r.status} ${await r.text()}`);
  id = existente.id;
  console.log(`credencial atualizada: ${id}`);
} else {
  const r = await fetch(`${API}/api/v1/credentials`, {
    method: 'POST',
    headers: h,
    body: JSON.stringify({ name: NOME, type: 'httpHeaderAuth', data: dados }),
  });
  if (!r.ok) throw new Error(`POST falhou: ${r.status} ${await r.text()}`);
  id = (await r.json()).id;
  console.log(`credencial criada: ${id}`);
}

const wf = await (await fetch(`${API}/api/v1/workflows/${WF}`, { headers: h })).json();
const gatilho = wf.nodes.find((n) => n.type === 'n8n-nodes-base.webhook');
if (!gatilho) throw new Error('não achei o nó de webhook no workflow de envio');
gatilho.credentials = { httpHeaderAuth: { id, name: NOME } };

const put = await fetch(`${API}/api/v1/workflows/${WF}`, {
  method: 'PUT',
  headers: h,
  body: JSON.stringify({
    name: wf.name,
    nodes: wf.nodes,
    connections: wf.connections,
    settings: wf.settings || {},
  }),
});
if (!put.ok) throw new Error(`PUT do workflow falhou: ${put.status} ${await put.text()}`);
console.log('credencial ligada ao webhook de envio geral.');

const ativar = await fetch(`${API}/api/v1/workflows/${WF}/activate`, { method: 'POST', headers: h });
console.log(
  ativar.ok
    ? `\nPronto. Webhook LIGADO em POST /webhook/prospeccao-disparo, header "${HEADER_NOME}: <PROSPECCAO_WEBHOOK_TOKEN>".`
    : `\nCredencial pronta, mas a ativação falhou (${ativar.status}). Ligue na mão pelo botão do n8n.`
);
