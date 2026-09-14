/**
 * Cria (ou corrige) os 3 registros de DNS que o Resend pede pra autenticar o domínio
 * paaps.com.br (DKIM + SPF), e pede pro Resend reverificar. Sem esses 3 registros o
 * e-mail sai mas não é autenticado: quem recebe (Gmail, Outlook, e-mail de prefeitura)
 * não confirma que é legítimo, e o destino mais provável é spam ou rejeição silenciosa.
 *
 * Achado em 03/09/2026: o domínio está "failed" no Resend desde a criação (15/07/2026),
 * provavelmente porque a restauração do domínio naquele mês resetou a zona de DNS antes
 * desses registros terem sido adicionados.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/consertar-dns-resend.mjs
 * (chamado pelo "CONSERTAR DNS DO EMAIL.command", nunca direto por alguém que não seja dev)
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, '../../..');

function lerEnv() {
  const env = Object.fromEntries(
    readFileSync(resolve(raiz, 'automacoes/.env'), 'utf8')
      .split('\n')
      .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
      .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
  );
  return env;
}

const env = lerEnv();
if (!env.CLOUDFLARE_API_TOKEN) throw new Error('CLOUDFLARE_API_TOKEN ausente em automacoes/.env');
if (!env.RESEND_API_KEY) throw new Error('RESEND_API_KEY ausente em automacoes/.env');

const CF = 'https://api.cloudflare.com/client/v4';
const cfHeaders = {
  Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}`,
  'Content-Type': 'application/json'
};
const resendHeaders = {
  Authorization: `Bearer ${env.RESEND_API_KEY}`,
  'Content-Type': 'application/json'
};

const DOMINIO = 'paaps.com.br';

// Os 3 registros que o Resend pediu para este domínio (confirmados via GET /domains do Resend
// em 03/09/2026). Se o Resend um dia pedir registros diferentes, este script vai criar os
// errados: nesse caso, buscar de novo em GET /domains/{id} antes de rodar.
const REGISTROS = [
  {
    type: 'TXT',
    name: 'resend._domainkey',
    content:
      'p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdmJfa4iPt8HMeinLOrMQH9UNDgA6Tow0z3tj0JWvbFHbUEMnz7KXRvEyIMlrrt9dEFJA4QTvIXRjAZF7IEj69SgWwnqew19x+8PSWxQBH6+z6cNVBIUPA5su7RMh+ntmZevDuqEDXjKiGrVZCul3OdTXNF4y4jLKKysrDvkm8LwIDAQAB'
  },
  { type: 'MX', name: 'send', content: 'feedback-smtp.sa-east-1.amazonses.com', priority: 10 },
  { type: 'TXT', name: 'send', content: 'v=spf1 include:amazonses.com ~all' }
];

async function cf(path, options = {}) {
  const r = await fetch(`${CF}${path}`, { headers: cfHeaders, ...options });
  const j = await r.json();
  if (!j.success) throw new Error(`Cloudflare ${path} falhou: ${JSON.stringify(j.errors)}`);
  return j;
}

console.log('Verificando o token do Cloudflare...');
await cf('/user/tokens/verify');

console.log(`Achando a zona de ${DOMINIO}...`);
const zonas = await cf(`/zones?name=${DOMINIO}`);
if (!zonas.result.length) throw new Error(`Zona ${DOMINIO} não encontrada nesta conta Cloudflare`);
const zoneId = zonas.result[0].id;

console.log('Lendo registros de DNS já existentes...');
const existentes = (await cf(`/zones/${zoneId}/dns_records?per_page=100`)).result;

for (const reg of REGISTROS) {
  const nomeCompleto = `${reg.name}.${DOMINIO}`;
  const igual = existentes.find(
    (e) => e.type === reg.type && e.name === nomeCompleto && e.content === reg.content
  );
  if (igual) {
    console.log(`OK, já existe e está certo: ${reg.type} ${nomeCompleto}`);
    continue;
  }

  const mesmoTipoNome = existentes.find((e) => e.type === reg.type && e.name === nomeCompleto);
  const corpo = {
    type: reg.type,
    name: reg.name,
    content: reg.content,
    ttl: 1, // "Auto" na API do Cloudflare
    ...(reg.priority ? { priority: reg.priority } : {})
  };

  if (mesmoTipoNome) {
    console.log(`Existe mas com valor diferente, corrigindo: ${reg.type} ${nomeCompleto}`);
    await cf(`/zones/${zoneId}/dns_records/${mesmoTipoNome.id}`, {
      method: 'PUT',
      body: JSON.stringify(corpo)
    });
  } else {
    console.log(`Criando: ${reg.type} ${nomeCompleto}`);
    await cf(`/zones/${zoneId}/dns_records`, { method: 'POST', body: JSON.stringify(corpo) });
  }
}

console.log('Pedindo pro Resend reverificar o domínio...');
const listaResend = await (
  await fetch('https://api.resend.com/domains', { headers: resendHeaders })
).json();
const dominioResend = (listaResend.data || []).find((d) => d.name === DOMINIO);
if (!dominioResend) throw new Error(`Domínio ${DOMINIO} não encontrado na conta Resend`);

const verificar = await fetch(`https://api.resend.com/domains/${dominioResend.id}/verify`, {
  method: 'POST',
  headers: resendHeaders
});
if (!verificar.ok) {
  console.log(`Aviso: pedido de reverificação ao Resend retornou ${verificar.status}, mas os registros de DNS já foram criados/corrigidos. O Resend reverifica sozinho de tempos em tempos.`);
}

console.log('DNS_OK: os 3 registros foram criados ou corrigidos no Cloudflare.');
console.log('A verificação de DNS propaga em minutos a horas. Rode este mesmo script de novo mais tarde, ou confira em resend.com > Domains, pra ver quando o status virar "verified".');
