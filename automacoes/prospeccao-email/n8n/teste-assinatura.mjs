/**
 * Teste de mecanismo: monta um e-mail no molde real, com a assinatura embutida,
 * e manda para um endereço nosso. Serve para conferir na caixa de entrada se a
 * imagem aparece de fato embutida (cid) e se o texto de fallback fica legível.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/teste-assinatura.mjs destino@exemplo.com
 *
 * Workflow temporário: é criado, executado e apagado na mesma rodada.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, '../../..');

const destino = process.argv[2];
if (!destino) throw new Error('faltou o e-mail de destino');

const env = Object.fromEntries(
  readFileSync(resolve(raiz, 'automacoes/.env'), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
);
const API = env.N8N_API_URL;
const KEY = env.N8N_API_KEY;
const h = { 'X-N8N-API-KEY': KEY, 'Content-Type': 'application/json' };

const molde = readFileSync(resolve(raiz, 'automacoes/prospeccao-email/template-email.html'), 'utf8');

const corpo = `
<p style="margin:0 0 16px 0;">À Secretaria Municipal de Saúde de [cidade],</p>
<p style="margin:0 0 16px 0;">Este é um <strong>e-mail de teste do mecanismo de envio</strong>. O texto abaixo
existe só para mostrar como um parágrafo comum fica no molde: espaçamento, tamanho de letra,
largura da coluna e contraste. Nenhuma carta de verdade foi enviada nesta mensagem.</p>
<p style="margin:0 0 16px 0;">O que precisa ser conferido aqui: se a assinatura da montanha aparece logo
abaixo deste texto sem precisar clicar em "exibir imagens"; se os dados de contato em texto, embaixo da
imagem, estão legíveis e clicáveis; e se nada estourou a largura da tela no celular.</p>
<p style="margin:0 0 6px 0;">Com respeito,</p>
<p style="margin:0 0 2px 0;">Mallu Vasconcellos e equipe de relacionamento PAAPS Brasil</p>
<p style="margin:0; font-size:13px; color:#7a5a3a;">PAAPS Brasil - Rede de Saúde Mental Coletiva para as políticas públicas</p>
`.trim();

const html = molde.replace('{{CORPO}}', corpo);

const workflow = {
  name: 'TEMP - teste de assinatura',
  settings: { executionOrder: 'v1', timezone: 'America/Sao_Paulo' },
  nodes: [
    {
      id: 'gatilho',
      name: 'Disparar teste',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [240, 300],
      parameters: { httpMethod: 'POST', path: 'teste-assinatura-paaps', responseMode: 'responseNode', options: {} }
    },
    {
      id: 'buscar',
      name: 'Buscar assinatura',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [500, 300],
      parameters: {
        url: `${API}/webhook/assinatura-paaps`,
        options: { response: { response: { responseFormat: 'file', outputPropertyName: 'assinatura' } } }
      }
    },
    {
      id: 'montar',
      name: 'Montar e-mail',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [760, 300],
      parameters: {
        jsCode: `const assinatura = $input.first().binary.assinatura;
return [{
  json: {
    para: ${JSON.stringify(destino)},
    assunto: "[TESTE] Molde de e-mail PAAPS Brasil com assinatura",
    html: ${JSON.stringify(html)}
  },
  binary: { assinatura }
}];`
      }
    },
    {
      id: 'enviar',
      name: 'Enviar (SMTP)',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1020, 300],
      parameters: {
        fromEmail: 'PAAPS Brasil <relacionamento@paaps.com.br>',
        toEmail: '={{ $json.para }}',
        subject: '={{ $json.assunto }}',
        emailFormat: 'html',
        html: '={{ $json.html }}',
        options: { appendAttribution: false, attachments: 'assinatura' }
      },
      credentials: { smtp: { id: 'esX7Pt3LmeH2IWC5', name: 'SMTP account' } }
    },
    {
      id: 'ok',
      name: 'Responder',
      type: 'n8n-nodes-base.respondToWebhook',
      typeVersion: 1,
      position: [1280, 300],
      parameters: { respondWith: 'json', responseBody: '={{ { "enviado": true } }}' }
    }
  ],
  connections: {
    'Disparar teste': { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Montar e-mail', type: 'main', index: 0 }]] },
    'Montar e-mail': { main: [[{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]] },
    'Enviar (SMTP)': { main: [[{ node: 'Responder', type: 'main', index: 0 }]] }
  }
};

const criar = await fetch(`${API}/api/v1/workflows`, { method: 'POST', headers: h, body: JSON.stringify(workflow) });
if (!criar.ok) throw new Error(`criar falhou: ${criar.status} ${await criar.text()}`);
const { id } = await criar.json();
console.log(`workflow temporário: ${id}`);

await fetch(`${API}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: h });
await new Promise((r) => setTimeout(r, 1500));

const disparo = await fetch(`${API}/webhook/teste-assinatura-paaps`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
console.log(`disparo: ${disparo.status} ${await disparo.text()}`);

await fetch(`${API}/api/v1/workflows/${id}/deactivate`, { method: 'POST', headers: h });
await fetch(`${API}/api/v1/workflows/${id}`, { method: 'DELETE', headers: h });
console.log('workflow temporário apagado');
console.log(`confira a caixa de entrada de ${destino}`);
