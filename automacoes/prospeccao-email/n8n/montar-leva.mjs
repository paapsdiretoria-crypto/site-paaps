/**
 * Monta no n8n o workflow que dispara uma leva de prospecção fria em dia e hora marcados
 * E registra o resultado no CRM sozinho, sem ninguém abrir o Claude Code depois.
 *
 * O fluxo completo, dentro do n8n:
 *   agenda (segunda 07:00) -> busca a assinatura -> carrega as cartas aprovadas ->
 *   uma de cada vez: envia -> cria a Atividade PROSPECÇÃO no CRM -> move o Lead de
 *   "0. Alvo" para "1. Cadastrado" -> espera -> próxima.
 *
 * A Atividade PROSPECÇÃO é o que arma o cooldown de 60 dias que o porteiro lê. Se ela
 * não for gravada, o mesmo lead volta para a fila na semana seguinte e leva e-mail
 * repetido. Por isso o registro mora aqui dentro, no mesmo fluxo do envio, e não numa
 * sessão manual depois.
 *
 * Lê:   levas/<data>/leva.json + levas/<data>/*.md + template-email.html
 * Cria: um workflow n8n, DESATIVADO.
 *
 * O workflow nasce e permanece DESATIVADO de propósito: ativar é o gesto da Mallu, e é
 * o gate. Enquanto estiver desativado, o horário passa e nada sai.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/montar-leva.mjs 2026-07-27
 */

import { lerEnv, montarCartas, codigoDoNo } from './lib-leva.mjs';

const pastaLeva = process.argv[2];
if (!pastaLeva) throw new Error('faltou a data da leva, por exemplo: 2026-07-27');

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const { leva, cartas } = montarCartas(pastaLeva);

// IDs das bases do CRM no Notion (formato da API, com hífens)
const DB_ATIVIDADES = '22244cb5-2e00-81e2-9071-db3762e265a6';

// A credencial do Notion é procurada pelo nome, no próprio n8n. Se ainda não existir, o
// workflow é montado assim mesmo (com o envio funcionando) mas avisa alto: sem ela o CRM
// não é atualizado e o cooldown de 60 dias não existe.
const credenciais = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const credNotion = (credenciais.data || []).find((c) => c.name === 'Notion PAAPS (CRM)');
const CRED_NOTION = credNotion ? { id: credNotion.id, name: credNotion.name } : undefined;

const intervalo = leva.intervaloMinutos ?? 12;
const hora = leva.hora || '07:00';
const [hh, mm] = hora.split(':').map(Number);
const diaDaSemana = leva.diaDaSemana ?? 1; // 1 = segunda

const NOME_AGENDA = `Toda segunda às ${hora}`;
const NOME_ESPERA = `Esperar ${intervalo} min`;
const nome = `Prospecção - Leva ${pastaLeva} (${hora})`;

/** O item que está sendo processado agora, lido do nó da fila. */
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
      id: 'agenda',
      name: NOME_AGENDA,
      type: 'n8n-nodes-base.scheduleTrigger',
      typeVersion: 1.2,
      position: [200, 320],
      parameters: {
        rule: { interval: [{ field: 'weeks', triggerAtDay: [diaDaSemana], triggerAtHour: hh, triggerAtMinute: mm }] }
      },
      notes: 'Fuso America/Sao_Paulo, definido nas settings do workflow.'
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
      },
      notes: 'Vem do workflow "PAAPS - Asset: assinatura de e-mail". Entra embutida (cid) no e-mail.'
    },
    {
      id: 'leva',
      name: 'Cartas aprovadas',
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
      notes: 'Envio espaçado, nunca em rajada (cadencia.md).'
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
      notes:
        'Saída de cima = enviou, e só então o CRM é atualizado. Saída de baixo = falhou, e aí NADA é gravado no CRM: o lead continua "0. Alvo" e entra na próxima leva. É o que impede o cooldown de marcar um e-mail que nunca chegou.'
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
    "Atividade": { title: [{ text: { content: "Prospecção fria: " + ${item}.lead } }] },
    "Tipo": { select: { name: "PROSPECÇÃO" } },
    "Status": { status: { name: "Finalizado" } },
    "Lead": { relation: [{ id: ${item}.leadPageId }] },
    "Descrição": { rich_text: [{ text: { content: "E-mail frio enviado para " + ${item}.para + ". Assunto: " + ${item}.assunto } }] }
  }
}) }}`,
        options: {}
      },
      credentials: { notionApi: CRED_NOTION },
      onError: 'continueRegularOutput',
      notes:
        'Esta linha é o que arma o cooldown de 60 dias lido pelo porteiro. O createdTime dela é a data do toque.'
    },
    {
      id: 'status',
      name: 'CRM: Alvo -> Cadastrado',
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
      notes: 'Sobe o lead um degrau na esteira. De "Aquecimento" em diante quem conduz é a Mallu.'
    },
    {
      id: 'intervalo',
      name: NOME_ESPERA,
      type: 'n8n-nodes-base.wait',
      typeVersion: 1.1,
      position: [1820, 440],
      parameters: { amount: intervalo, unit: 'minutes' },
      webhookId: 'a1f2c3d4-0000-4000-8000-000000000001'
    },
    {
      id: 'fim',
      name: 'Leva concluída',
      type: 'n8n-nodes-base.noOp',
      typeVersion: 1,
      position: [1100, 180],
      parameters: {}
    }
  ],
  connections: {
    [NOME_AGENDA]: { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Cartas aprovadas', type: 'main', index: 0 }]] },
    'Cartas aprovadas': { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] },
    'Uma de cada vez': {
      main: [
        [{ node: 'Leva concluída', type: 'main', index: 0 }],
        [{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]
      ]
    },
    'Enviar (SMTP)': {
      main: [
        [{ node: 'CRM: registrar Atividade PROSPECÇÃO', type: 'main', index: 0 }],
        [{ node: NOME_ESPERA, type: 'main', index: 0 }]
      ]
    },
    'CRM: registrar Atividade PROSPECÇÃO': { main: [[{ node: 'CRM: Alvo -> Cadastrado', type: 'main', index: 0 }]] },
    'CRM: Alvo -> Cadastrado': { main: [[{ node: NOME_ESPERA, type: 'main', index: 0 }]] },
    [NOME_ESPERA]: { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] }
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

console.log(`\ncartas na leva: ${cartas.length}`);
cartas.forEach((c) => console.log(`  ${c.lead}  ->  ${c.para}`));
console.log(`\nprimeiro envio ${hora}, um a cada ${intervalo} min`);
console.log('o workflow está DESATIVADO: nada sai enquanto não for ativado.');
console.log(`${API}/workflow/${id}`);

if (!CRED_NOTION) {
  console.log('\n' + '='.repeat(72));
  console.log('FALTA A CREDENCIAL DO NOTION. O envio funciona, o registro no CRM não.');
  console.log('Sem ela, a Atividade PROSPECÇÃO não é gravada, o cooldown de 60 dias não');
  console.log('existe e o mesmo lead volta para a fila na leva seguinte.');
  console.log('');
  console.log('Como resolver, uma vez só:');
  console.log('  node automacoes/prospeccao-email/n8n/criar-credencial-notion.mjs');
  console.log('(o passo a passo do Notion está no comentário do topo desse arquivo)');
  console.log('='.repeat(72));
}
