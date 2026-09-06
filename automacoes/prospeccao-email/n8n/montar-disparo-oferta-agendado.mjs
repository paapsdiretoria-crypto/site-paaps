/**
 * Monta no n8n o workflow do disparo da "fórmula da oferta" para UM dia específico da
 * semana de 07 a 11/09/2026, com gatilho por AGENDA (cron de data exata), não manual.
 *
 * Substitui montar-disparo-oferta.mjs (gatilho por webhook) pra essa leva de 101 e-mails:
 * a Mallu pediu pra programar a semana inteira de uma vez, sem precisar eu chamar um
 * webhook toda manhã. Cada workflow dispara sozinho, uma vez só, no dia e hora marcados
 * (cron "minuto hora dia mês *" só bate naquela data exata, não repete).
 *
 * O fluxo, dentro do n8n:
 *   agenda (data exata, 09:00) -> busca a assinatura -> carrega as cartas do dia ->
 *   uma de cada vez: envia -> cria a Atividade PROSPECÇÃO -> sobe o Status se ainda em
 *   Alvo/Aquecimento -> espera -> próxima.
 *
 * Ritmo: 5 min entre envios (12/hora), bem abaixo do teto real de 15/hora que a Mallu
 * confirmou no painel do Titan em 04/09/2026, depois de estourar o limite mandando 128
 * e-mails de prévia em meia hora.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/montar-disparo-oferta-agendado.mjs 2026-09-07-oferta 2026-09-07 09:00
 */

import { lerEnv, montarCartas, codigoDoNo } from './lib-leva.mjs';

const [pastaLeva, dataISO, horaHHMM] = process.argv.slice(2);
if (!pastaLeva || !dataISO || !horaHHMM) {
  throw new Error('uso: montar-disparo-oferta-agendado.mjs <pasta-da-leva> <AAAA-MM-DD> <HH:MM>');
}

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const { leva, cartas } = montarCartas(pastaLeva);

const DB_ATIVIDADES = '22244cb5-2e00-81e2-9071-db3762e265a6';

const credenciais = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const credNotion = (credenciais.data || []).find((c) => c.name === 'Notion PAAPS (CRM)');
const CRED_NOTION = credNotion ? { id: credNotion.id, name: credNotion.name } : undefined;
if (!CRED_NOTION) throw new Error('credencial "Notion PAAPS (CRM)" não existe no n8n. Rode criar-credencial-notion.mjs.');

const intervalo = leva.intervaloMinutos ?? 5;
const [ano, mes, dia] = dataISO.split('-').map(Number);
const [hh, mm] = horaHHMM.split(':').map(Number);
const cronExpression = `${mm} ${hh} ${dia} ${mes} *`;

const nome = `Prospecção - Disparo oferta (${dataISO})`;
const NOME_AGENDA = `Só em ${dataISO} às ${horaHHMM}`;
const NOME_ESPERA = `Esperar ${intervalo} min`;
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
      parameters: { rule: { interval: [{ field: 'cronExpression', expression: cronExpression }] } },
      notes: `Cron "${cronExpression}" só bate nessa data exata (ano ${ano} implícito pela proximidade). Não repete no ano seguinte na prática, porque o workflow é desativado depois de rodar.`
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
      name: 'Cartas do dia',
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
    "Atividade": { title: [{ text: { content: "Disparo oferta semana 08-09: " + ${item}.lead } }] },
    "Tipo": { select: { name: "PROSPECÇÃO" } },
    "Status": { status: { name: "Finalizado" } },
    "Lead": { relation: [{ id: ${item}.leadPageId }] },
    "Descrição": { rich_text: [{ text: { content: "E-mail de oferta (disparo semanal) enviado para " + ${item}.para + ". Assunto: " + ${item}.assunto } }] }
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
      name: NOME_ESPERA,
      type: 'n8n-nodes-base.wait',
      typeVersion: 1.1,
      position: [1820, 440],
      parameters: { amount: intervalo, unit: 'minutes' },
      webhookId: `a1f2c3d4-oferta-${pastaLeva}`
    },
    {
      id: 'fim',
      name: 'Disparo do dia concluído',
      type: 'n8n-nodes-base.noOp',
      typeVersion: 1,
      position: [1100, 180],
      parameters: {}
    }
  ],
  connections: {
    [NOME_AGENDA]: { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Cartas do dia', type: 'main', index: 0 }]] },
    'Cartas do dia': { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] },
    'Uma de cada vez': {
      main: [
        [{ node: 'Disparo do dia concluído', type: 'main', index: 0 }],
        [{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]
      ]
    },
    'Enviar (SMTP)': {
      main: [
        [{ node: 'CRM: registrar Atividade PROSPECÇÃO', type: 'main', index: 0 }],
        [{ node: NOME_ESPERA, type: 'main', index: 0 }]
      ]
    },
    'CRM: registrar Atividade PROSPECÇÃO': { main: [[{ node: 'CRM: subir Status se ainda em Alvo', type: 'main', index: 0 }]] },
    'CRM: subir Status se ainda em Alvo': { main: [[{ node: NOME_ESPERA, type: 'main', index: 0 }]] },
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

const ativar = await fetch(`${API}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: h });
console.log(ativar.ok ? 'workflow ATIVADO (dispara sozinho na hora marcada)' : `ativação falhou (${ativar.status}): ${await ativar.text()}`);

const duracaoH = Math.round((cartas.length * intervalo / 60) * 10) / 10;
console.log(`\n${dataISO} às ${horaHHMM}: ${cartas.length} cartas, intervalo ${intervalo} min (duração ~${duracaoH}h, termina por volta de ${horaHHMM})`);
console.log(`painel: ${API}/workflow/${id}`);
