/**
 * Monta no n8n o workflow que dispara uma leva de prospecção fria em dia e hora marcados.
 *
 * Lê:   automacoes/prospeccao-email/levas/<data>/leva.json   (as cartas já aprovadas)
 *       automacoes/prospeccao-email/template-email.html      (o molde HTML)
 * Cria: um workflow n8n com Schedule Trigger, envio espaçado e assinatura embutida.
 *
 * O workflow nasce e permanece DESATIVADO de propósito. Enquanto estiver desativado,
 * o horário passa e nada sai. Ativar é o gesto da Mallu, e é o gate: ativar equivale
 * a dizer "pode enviar". Ver a seção "O gate de aprovação" em regras-prospeccao.md.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/montar-leva.mjs 2026-07-27
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, '../../..');
const pastaLeva = process.argv[2];
if (!pastaLeva) throw new Error('faltou a data da leva, por exemplo: 2026-07-27');

const env = Object.fromEntries(
  readFileSync(resolve(raiz, 'automacoes/.env'), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
);
const API = env.N8N_API_URL;
const KEY = env.N8N_API_KEY;
const h = { 'X-N8N-API-KEY': KEY, 'Content-Type': 'application/json' };

const base = resolve(raiz, 'automacoes/prospeccao-email');
const leva = JSON.parse(readFileSync(resolve(base, `levas/${pastaLeva}/leva.json`), 'utf8'));
const molde = readFileSync(resolve(base, 'template-email.html'), 'utf8');

/** Converte o corpo em texto (parágrafos separados por linha em branco) para HTML de e-mail. */
function corpoParaHtml(texto) {
  return texto
    .trim()
    .split(/\n\s*\n/)
    .map((p) => {
      const linha = p.trim().replace(/\n/g, '<br>');
      return `<p style="margin:0 0 16px 0;">${linha}</p>`;
    })
    .join('\n');
}

const cartas = leva.cartas.map((c) => {
  if (!c.para || !c.para.includes('@')) throw new Error(`carta sem e-mail de destino: ${c.lead}`);
  if (!c.assunto) throw new Error(`carta sem assunto: ${c.lead}`);
  return {
    lead: c.lead,
    leadPageId: c.leadPageId || null,
    para: c.para,
    assunto: c.assunto,
    html: molde.replace('{{CORPO}}', corpoParaHtml(c.corpo))
  };
});

const intervalo = leva.intervaloMinutos ?? 12;
const [hora, minuto] = (leva.hora || '07:00').split(':').map(Number);
const diaDaSemana = leva.diaDaSemana ?? 1; // 1 = segunda

const nome = `Prospecção - Leva ${pastaLeva} (${leva.hora || '07:00'})`;

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
      name: `Toda segunda às ${leva.hora || '07:00'}`,
      type: 'n8n-nodes-base.scheduleTrigger',
      typeVersion: 1.2,
      position: [220, 320],
      parameters: {
        rule: { interval: [{ field: 'weeks', triggerAtDay: [diaDaSemana], triggerAtHour: hora, triggerAtMinute: minuto }] }
      },
      notes: 'Fuso America/Sao_Paulo, definido nas settings do workflow.'
    },
    {
      id: 'assinatura',
      name: 'Buscar assinatura',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [460, 320],
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
      position: [700, 320],
      parameters: {
        jsCode: `// Cartas aprovadas no gate da Mallu. Geradas por montar-leva.mjs a partir de
// automacoes/prospeccao-email/levas/${pastaLeva}/leva.json. Não editar aqui: editar o
// arquivo no repositório e rodar o script de novo, senão o repositório e o n8n divergem.
const cartas = ${JSON.stringify(cartas, null, 2)};

const assinatura = $input.first().binary.assinatura;
return cartas.map((c) => ({ json: c, binary: { assinatura } }));`
      }
    },
    {
      id: 'fila',
      name: 'Uma de cada vez',
      type: 'n8n-nodes-base.splitInBatches',
      typeVersion: 3,
      position: [940, 320],
      parameters: { batchSize: 1, options: {} },
      notes: 'Envio espaçado, nunca em rajada (cadencia.md).'
    },
    {
      id: 'enviar',
      name: 'Enviar (SMTP)',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1200, 420],
      parameters: {
        fromEmail: 'PAAPS Brasil <relacionamento@paaps.com.br>',
        toEmail: '={{ $json.para }}',
        subject: '={{ $json.assunto }}',
        emailFormat: 'html',
        html: '={{ $json.html }}',
        options: { appendAttribution: false, attachments: 'assinatura' }
      },
      credentials: { smtp: { id: 'esX7Pt3LmeH2IWC5', name: 'SMTP account' } },
      onError: 'continueRegularOutput',
      notes: 'Se um envio falhar, os outros seguem. O erro fica no log da execução.'
    },
    {
      id: 'intervalo',
      name: `Esperar ${intervalo} min`,
      type: 'n8n-nodes-base.wait',
      typeVersion: 1.1,
      position: [1440, 420],
      parameters: { amount: intervalo, unit: 'minutes' },
      webhookId: 'a1f2c3d4-0000-4000-8000-000000000001'
    },
    {
      id: 'fim',
      name: 'Leva concluída',
      type: 'n8n-nodes-base.noOp',
      typeVersion: 1,
      position: [1200, 200],
      parameters: {},
      notes: 'Depois daqui, registrar no CRM a Atividade PROSPECÇÃO de cada lead e mover o Status de "0. Alvo" para "1. Cadastrado". Hoje isso é feito pelo escrivão em sessão do Claude Code: o n8n ainda não tem credencial do Notion.'
    }
  ],
  connections: {
    [`Toda segunda às ${leva.hora || '07:00'}`]: { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Cartas aprovadas', type: 'main', index: 0 }]] },
    'Cartas aprovadas': { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] },
    'Uma de cada vez': {
      main: [
        [{ node: 'Leva concluída', type: 'main', index: 0 }],
        [{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]
      ]
    },
    'Enviar (SMTP)': { main: [[{ node: `Esperar ${intervalo} min`, type: 'main', index: 0 }]] },
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

console.log('');
console.log(`cartas na leva: ${cartas.length}`);
cartas.forEach((c) => console.log(`  ${c.lead}  ->  ${c.para}`));
console.log('');
console.log(`primeiro envio ${leva.hora || '07:00'}, um a cada ${intervalo} min`);
console.log(`ATENÇÃO: o workflow está DESATIVADO. Nada sai enquanto ele não for ativado.`);
console.log(`${API}/workflow/${id}`);
