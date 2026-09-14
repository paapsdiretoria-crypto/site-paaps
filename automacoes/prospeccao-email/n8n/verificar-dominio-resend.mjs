/**
 * Pede pro Resend reverificar o domínio paaps.com.br (DKIM + SPF) depois que os 3
 * registros de DNS foram adicionados manualmente no cPanel/HostGator (04/09/2026),
 * e mostra o status atual de cada registro.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/verificar-dominio-resend.mjs
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, '../../..');

function lerEnv() {
  return Object.fromEntries(
    readFileSync(resolve(raiz, 'automacoes/.env'), 'utf8')
      .split('\n')
      .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
      .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
  );
}

const env = lerEnv();
if (!env.RESEND_API_KEY) throw new Error('RESEND_API_KEY ausente em automacoes/.env');

const headers = {
  Authorization: `Bearer ${env.RESEND_API_KEY}`,
  'Content-Type': 'application/json'
};

const DOMINIO = 'paaps.com.br';

const lista = await (await fetch('https://api.resend.com/domains', { headers })).json();
const dominio = (lista.data || []).find((d) => d.name === DOMINIO);
if (!dominio) throw new Error(`Domínio ${DOMINIO} não encontrado na conta Resend`);

console.log(`Status atual do domínio antes de reverificar: ${dominio.status}`);

const verificar = await fetch(`https://api.resend.com/domains/${dominio.id}/verify`, {
  method: 'POST',
  headers
});
console.log(`Pedido de reverificação: HTTP ${verificar.status}`);

// Espera alguns segundos e busca o detalhe com o status de cada registro individual
await new Promise((r) => setTimeout(r, 4000));

const detalhe = await (
  await fetch(`https://api.resend.com/domains/${dominio.id}`, { headers })
).json();

console.log(`\nStatus geral do domínio: ${detalhe.status}`);
for (const rec of detalhe.records || []) {
  console.log(`  ${rec.record} (${rec.type}) ${rec.name}: ${rec.status}`);
}
