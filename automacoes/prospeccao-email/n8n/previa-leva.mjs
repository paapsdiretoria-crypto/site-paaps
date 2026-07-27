/**
 * Manda a leva inteira para UM endereço nosso, para a Mallu ler no celular exatamente
 * o que a prefeitura vai receber. É o gate de aprovação em forma de e-mail.
 *
 * Nenhuma prefeitura recebe nada aqui: todos os e-mails vão para o endereço passado
 * no comando, e o assunto leva o prefixo [PRÉVIA].
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/previa-leva.mjs 2026-07-27 destino@exemplo.com
 */

import { lerEnv, montarCartas } from './lib-leva.mjs';

const [pastaLeva, destino] = process.argv.slice(2);
if (!pastaLeva || !destino) throw new Error('uso: previa-leva.mjs <data-da-leva> <e-mail de destino>');

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const { cartas } = montarCartas(pastaLeva);

// Mesmo conteúdo, destino trocado e assunto marcado. O corpo NÃO é alterado.
const previa = cartas.map((c) => ({
  ...c,
  para: destino,
  assunto: `[PRÉVIA ${c.lead}] ${c.assunto}`
}));

const workflow = {
  name: 'TEMP - prévia da leva',
  settings: { executionOrder: 'v1', timezone: 'America/Sao_Paulo' },
  nodes: [
    {
      id: 'gatilho',
      name: 'Disparar prévia',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [240, 300],
      parameters: { httpMethod: 'POST', path: 'previa-leva-paaps', responseMode: 'responseNode', options: {} }
    },
    {
      id: 'assinatura',
      name: 'Buscar assinatura',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [480, 300],
      parameters: {
        url: `${API}/webhook/assinatura-paaps`,
        options: { response: { response: { responseFormat: 'file', outputPropertyName: 'assinatura' } } }
      }
    },
    {
      id: 'cartas',
      name: 'Cartas',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [720, 300],
      parameters: {
        jsCode: `const cartas = ${JSON.stringify(previa, null, 2)};
const assinatura = {
  ...$input.first().binary.assinatura,
  mimeType: "image/jpeg",
  fileName: "assinatura-paaps.jpg",
  fileExtension: "jpg"
};
return cartas.map((c) => ({ json: c, binary: { assinatura } }));`
      }
    },
    {
      id: 'enviar',
      name: 'Enviar (SMTP)',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [960, 300],
      parameters: {
        fromEmail: 'PAAPS Brasil <relacionamento@paaps.com.br>',
        toEmail: '={{ $json.para }}',
        subject: '={{ $json.assunto }}',
        emailFormat: 'html',
        html: '={{ $json.html }}',
        options: { appendAttribution: false, attachments: 'assinatura' }
      },
      credentials: { smtp: { id: 'esX7Pt3LmeH2IWC5', name: 'SMTP account' } },
      onError: 'continueRegularOutput'
    },
    {
      id: 'ok',
      name: 'Responder',
      type: 'n8n-nodes-base.respondToWebhook',
      typeVersion: 1,
      position: [1200, 300],
      parameters: { respondWith: 'json', responseBody: '={{ { "enviados": true } }}' }
    }
  ],
  connections: {
    'Disparar prévia': { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Cartas', type: 'main', index: 0 }]] },
    Cartas: { main: [[{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]] },
    'Enviar (SMTP)': { main: [[{ node: 'Responder', type: 'main', index: 0 }]] }
  }
};

const criar = await fetch(`${API}/api/v1/workflows`, { method: 'POST', headers: h, body: JSON.stringify(workflow) });
if (!criar.ok) throw new Error(`criar falhou: ${criar.status} ${await criar.text()}`);
const { id } = await criar.json();

await fetch(`${API}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: h });
await new Promise((r) => setTimeout(r, 1500));

const disparo = await fetch(`${API}/webhook/previa-leva-paaps`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: '{}'
});
console.log(`disparo: ${disparo.status} ${await disparo.text()}`);

await fetch(`${API}/api/v1/workflows/${id}/deactivate`, { method: 'POST', headers: h });
await fetch(`${API}/api/v1/workflows/${id}`, { method: 'DELETE', headers: h });

console.log(`\n${previa.length} prévias enviadas para ${destino}:`);
previa.forEach((c) => console.log(`  ${c.lead}  (iria para ${cartas.find((x) => x.lead === c.lead).para})`));
console.log('\nnenhuma prefeitura recebeu nada.');
