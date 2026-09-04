/**
 * Monta no n8n o workflow do disparo PONTUAL da "fórmula da oferta" (04 e 07/09/2026):
 * mesmo texto-molde para todos, personalização leve (saudação), gatilho por webhook em vez
 * de agenda semanal (é ação de um dia só, não recorrente como montar-leva.mjs).
 *
 * O fluxo, dentro do n8n:
 *   webhook -> busca a assinatura -> carrega as cartas da leva -> uma de cada vez:
 *   envia -> cria a Atividade PROSPECÇÃO -> move o Lead de "0. Alvo"/Aquecimento para
 *   "1. Cadastrado" só se ainda não estava -> espera -> próxima.
 *
 * Fica ATIVO depois de criado (ao contrário de previa-leva.mjs, que dispara e apaga na
 * hora): o disparo real leva horas pra terminar (64 cartas * 3 min = ~3h12), então o
 * workflow precisa continuar vivo pra completar os nós de espera.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/montar-disparo-oferta.mjs 2026-09-04-oferta
 * Depois: chamar o webhook devolvido pra começar de fato o envio.
 */

import { lerEnv, montarCartas, codigoDoNo } from './lib-leva.mjs';

const pastaLeva = process.argv[2];
if (!pastaLeva) throw new Error('faltou a data da leva, por exemplo: 2026-09-04-oferta');

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const { leva, cartas } = montarCartas(pastaLeva);

const DB_ATIVIDADES = '22244cb5-2e00-81e2-9071-db3762e265a6';

const credenciais = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const credNotion = (credenciais.data || []).find((c) => c.name === 'Notion PAAPS (CRM)');
const CRED_NOTION = credNotion ? { id: credNotion.id, name: credNotion.name } : undefined;
if (!CRED_NOTION) throw new Error('credencial "Notion PAAPS (CRM)" não existe no n8n. Rode criar-credencial-notion.mjs.');

const intervalo = leva.intervaloMinutos ?? 3;
const WEBHOOK_PATH = `disparo-oferta-${pastaLeva}`;
const nome = `Prospecção - Disparo pontual oferta (${pastaLeva})`;

const item = `$('Uma de cada vez').item.json`;

const workflow = {
  name: nome,
  settings: {
    executionOrder: 'v1',
    timezone: 'America/Sao_Paulo',
    saveDataErrorExecution: 'all',
    saveDataSuccessExecution: 'all',
    saveExecutionProgress: true
  },
  nodes: [
    {
      id: 'gatilho',
      name: 'Começar o disparo',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [200, 320],
      parameters: { httpMethod: 'POST', path: WEBHOOK_PATH, responseMode: 'onReceived', options: {} },
      notes: 'Disparado uma vez, na hora combinada com a Mallu. Não é agenda recorrente.'
    },
    {
      id: 'assinatura',
      name: 'Buscar assinatura',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [420, 320],
      parameters: {
        url: `${API}/webhook/assinatura-paaps`,
        options: { response: { response: { responseFormat: 'file', outputPropertyName: 'assinatura' } } }
      }
    },
    {
      id: 'leva',
      name: 'Cartas da leva',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 320],
      parameters: { jsCode: codigoDoNo(cartas, pastaLeva) }
    },
    {
      id: 'fila',
      name: 'Uma de cada vez',
      type: 'n8n-nodes-base.splitInBatches',
      typeVersion: 3,
      position: [860, 320],
      parameters: { batchSize: 1, options: {} },
      notes: 'Envio espaçado, nunca em rajada.'
    },
    {
      id: 'enviar',
      name: 'Enviar (SMTP)',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1100, 440],
      parameters: {
        fromEmail: 'PAAPS Brasil <relacionamento@paaps.com.br>',
        toEmail: `={{ ${item}.para }}`,
        subject: `={{ ${item}.assunto }}`,
        emailFormat: 'html',
        html: `={{ ${item}.html }}`,
        options: { appendAttribution: false, attachments: 'assinatura' }
      },
      credentials: { smtp: { id: 'esX7Pt3LmeH2IWC5', name: 'SMTP account' } },
      onError: 'continueErrorOutput',
      notes: 'Saída de cima = enviou. Saída de baixo = falhou, e nada é gravado no CRM.'
    },
    {
      id: 'atividade',
      name: 'CRM: registrar Atividade PROSPECÇÃO',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1340, 340],
      parameters: {
        method: 'POST',
        url: 'https://api.notion.com/v1/pages',
        authentication: 'predefinedCredentialType',
        nodeCredentialType: 'notionApi',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: `={{ JSON.stringify({
  parent: { database_id: "${DB_ATIVIDADES}" },
  properties: {
    "Atividade": { title: [{ text: { content: "Disparo oferta 04-09: " + ${item}.lead } }] },
    "Tipo": { select: { name: "PROSPECÇÃO" } },
    "Status": { status: { name: "Finalizado" } },
    "Lead": { relation: [{ id: ${item}.leadPageId }] },
    "Descrição": { rich_text: [{ text: { content: "E-mail de oferta (disparo pontual) enviado para " + ${item}.para + ". Assunto: " + ${item}.assunto } }] }
  }
}) }}`,
        options: {}
      },
      credentials: { notionApi: CRED_NOTION },
      onError: 'continueRegularOutput'
    },
    {
      id: 'status',
      name: 'CRM: subir Status se ainda em Alvo',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1580, 340],
      parameters: {
        method: 'PATCH',
        url: `=https://api.notion.com/v1/pages/{{ ${item}.leadPageId }}`,
        authentication: 'predefinedCredentialType',
        nodeCredentialType: 'notionApi',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: '={{ JSON.stringify({ properties: { "Status": { select: { name: "1. Cadastrado" } } } }) }}',
        options: {}
      },
      credentials: { notionApi: CRED_NOTION },
      onError: 'continueRegularOutput',
      notes: 'Sempre seguro escrever "1. Cadastrado" aqui: quem já estava lá fica igual, quem estava em Alvo sobe um degrau.'
    },
    {
      id: 'intervalo',
      name: `Esperar ${intervalo} min`,
      type: 'n8n-nodes-base.wait',
      typeVersion: 1.1,
      position: [1820, 440],
      parameters: { amount: intervalo, unit: 'minutes' },
      webhookId: `a1f2c3d4-oferta-${pastaLeva}`
    },
    {
      id: 'fim',
      name: 'Disparo concluído',
      type: 'n8n-nodes-base.noOp',
      typeVersion: 1,
      position: [1100, 180],
      parameters: {}
    }
  ],
  connections: {
    'Começar o disparo': { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Cartas da leva', type: 'main', index: 0 }]] },
    'Cartas da leva': { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] },
    'Uma de cada vez': {
      main: [
        [{ node: 'Disparo concluído', type: 'main', index: 0 }],
        [{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]
      ]
    },
    'Enviar (SMTP)': {
      main: [
        [{ node: 'CRM: registrar Atividade PROSPECÇÃO', type: 'main', index: 0 }],
        [{ node: `Esperar ${intervalo} min`, type: 'main', index: 0 }]
      ]
    },
    'CRM: registrar Atividade PROSPECÇÃO': { main: [[{ node: 'CRM: subir Status se ainda em Alvo', type: 'main', index: 0 }]] },
    'CRM: subir Status se ainda em Alvo': { main: [[{ node: `Esperar ${intervalo} min`, type: 'main', index: 0 }]] },
    [`Esperar ${intervalo} min`]: { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] }
  }
};

const lista = await (await fetch(`${API}/api/v1/workflows?limit=250`, { headers: h })).json();
const existente = (lista.data || []).find((w) => w.name === nome);

let id;
if (existente) {
  const r = await fetch(`${API}/api/v1/workflows/${existente.id}`, { method: 'PUT', headers: h, body: JSON.stringify(workflow) });
  if (!r.ok) throw new Error(`PUT falhou: ${r.status} ${await r.text()}`);
  id = existente.id;
  console.log(`workflow atualizado: ${id}`);
} else {
  const r = await fetch(`${API}/api/v1/workflows`, { method: 'POST', headers: h, body: JSON.stringify(workflow) });
  if (!r.ok) throw new Error(`POST falhou: ${r.status} ${await r.text()}`);
  id = (await r.json()).id;
  console.log(`workflow criado: ${id}`);
}

const ativar = await fetch(`${API}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: h });
console.log(ativar.ok ? 'workflow ATIVADO (webhook pronto pra receber o disparo)' : `ativação falhou (${ativar.status}): ${await ativar.text()}`);

console.log(`\ncartas na leva: ${cartas.length}`);
console.log(`intervalo entre envios: ${intervalo} min (duração total estimada: ${Math.round((cartas.length * intervalo) / 60 * 10) / 10}h)`);
console.log(`\nwebhook pra começar o disparo:\n${API}/webhook/${WEBHOOK_PATH}`);
console.log(`\npainel: ${API}/workflow/${id}`);
