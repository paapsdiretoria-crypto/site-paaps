/**
 * Abre, dentro do workflow de retorno que JÁ existe, um desvio para as respostas da pesquisa.
 *
 * Por que não um workflow novo: um segundo gatilho IMAP na mesma caixa do Titan disputaria a
 * marcação de lido com o que já roda, e um dos dois perderia mensagem. Uma caixa, um gatilho.
 *
 * O que muda no workflow "Prospecção - Retorno (quem respondeu)":
 *   antes:  É resposta de gente? --(sim)--> Achar o contato pelo e-mail --> ... --> CRM
 *   depois: É resposta de gente? --(sim)--> É unidade do TCC?
 *                                              |--(sim)--> Avisar: RESPOSTA TCC   (fim, sem CRM)
 *                                              |--(não)--> Achar o contato pelo e-mail --> ...
 *
 * Nada da triagem existente é alterado: férias, boletim e erro de entrega seguem o mesmo
 * caminho de sempre, para a prospecção e para a pesquisa.
 *
 * Idempotente: rodar de novo só atualiza a lista de endereços.
 *
 * Rodar:  node automacoes/pesquisa-tcc-bh/n8n/ligar-aviso-resposta-tcc.mjs
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { lerEnv, base } from './lib-pesquisa.mjs';

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const NOME_ALVO = 'Prospecção - Retorno (quem respondeu)';
const NOME_IF = 'É unidade do TCC?';
const NOME_AVISO = 'Avisar: RESPOSTA TCC';
const NOME_ORIGEM = 'É resposta de gente?';
const NOME_SEGUINTE = 'Achar o contato pelo e-mail';

// Endereços que fazem a resposta ser da pesquisa: as unidades da leva mais quem indicou.
const dados = JSON.parse(readFileSync(resolve(base, 'unidades-bh.json'), 'utf8'));
const emails = [
  ...dados.unidades.map((u) => u.email),
  ...(dados.indicacao?.emails || [])
].filter((e) => e && e.includes('@')).map((e) => e.toLowerCase());

if (!emails.length) throw new Error('nenhum endereço de unidade para vigiar');

const lista = await (await fetch(`${API}/api/v1/workflows?limit=250`, { headers: h })).json();
const meta = (lista.data || []).find((w) => w.name === NOME_ALVO);
if (!meta) throw new Error(`workflow "${NOME_ALVO}" não encontrado`);

const wf = await (await fetch(`${API}/api/v1/workflows/${meta.id}`, { headers: h })).json();

if (!wf.nodes.some((n) => n.name === NOME_ORIGEM)) throw new Error(`nó "${NOME_ORIGEM}" não existe; o workflow mudou de forma`);
if (!wf.nodes.some((n) => n.name === NOME_SEGUINTE)) throw new Error(`nó "${NOME_SEGUINTE}" não existe; o workflow mudou de forma`);

const smtpDeAlgumNo = wf.nodes.find((n) => n.credentials?.smtp)?.credentials;
if (!smtpDeAlgumNo) throw new Error('nenhum nó com credencial SMTP para copiar');

const noIf = {
  id: 'tcc_ehunidade',
  name: NOME_IF,
  type: 'n8n-nodes-base.if',
  typeVersion: 2.2,
  position: [960, 60],
  parameters: {
    conditions: {
      options: { caseSensitive: true, leftValue: '', typeValidation: 'strict', version: 2 },
      conditions: [
        {
          id: 'cond-tcc',
          leftValue: `={{ ${JSON.stringify(emails)}.includes(String($json.remetenteEmail || '').toLowerCase()) }}`,
          rightValue: '',
          operator: { type: 'boolean', operation: 'true', singleValue: true }
        }
      ],
      combinator: 'and'
    },
    options: {}
  },
  notes: 'Endereços das unidades da pesquisa de TCC, escritos por ligar-aviso-resposta-tcc.mjs a partir de automacoes/pesquisa-tcc-bh/unidades-bh.json. Para mudar a lista, editar o JSON e rodar o script de novo.'
};

const noAviso = {
  id: 'tcc_avisar',
  name: NOME_AVISO,
  type: 'n8n-nodes-base.emailSend',
  typeVersion: 2.1,
  position: [1220, 40],
  parameters: {
    fromEmail: 'Maria Luiza Vasconcellos Barbosa <relacionamento@paaps.com.br>',
    toEmail: 'paapsdiretoria@gmail.com',
    subject: '=RESPOSTA TCC: {{ $json.remetenteNome }}',
    emailFormat: 'html',
    html: `={{ '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6"><p><strong>' + $json.remetenteNome + '</strong> respondeu o e-mail da pesquisa.</p><p style="color:#666">' + $json.remetenteEmail + '</p><p style="color:#666;margin:0 0 6px">Assunto</p><p>' + $json.assunto + '</p><p style="color:#666;margin:0 0 6px">O que escreveram</p><div style="border-left:3px solid #d8d2c4;padding-left:14px;white-space:pre-wrap">' + $json.trecho + '</div><p style="margin-top:20px;color:#888;font-size:13px">É unidade da pesquisa de TCC, então o CRM não foi tocado de propósito. Responder direto na caixa do Titan.</p></div>' }}`,
    options: { appendAttribution: false }
  },
  credentials: smtpDeAlgumNo,
  onError: 'continueRegularOutput',
  notes: 'Resposta de unidade da pesquisa. Não passa pelo CRM: um CRAS não é lead.'
};

// substitui se já existir, senão acrescenta
wf.nodes = wf.nodes.filter((n) => n.name !== NOME_IF && n.name !== NOME_AVISO);
wf.nodes.push(noIf, noAviso);

// a saída "sim" de "É resposta de gente?" passa a cair no IF novo
wf.connections[NOME_ORIGEM].main[0] = [{ node: NOME_IF, type: 'main', index: 0 }];
wf.connections[NOME_IF] = {
  main: [
    [{ node: NOME_AVISO, type: 'main', index: 0 }],
    [{ node: NOME_SEGUINTE, type: 'main', index: 0 }]
  ]
};
delete wf.connections[NOME_AVISO];

const corpo = { name: wf.name, nodes: wf.nodes, connections: wf.connections, settings: wf.settings };
const r = await fetch(`${API}/api/v1/workflows/${meta.id}`, { method: 'PUT', headers: h, body: JSON.stringify(corpo) });
if (!r.ok) throw new Error(`PUT falhou: ${r.status} ${await r.text()}`);

// gatilho IMAP só re-registra depois de desligar e ligar
await fetch(`${API}/api/v1/workflows/${meta.id}/deactivate`, { method: 'POST', headers: h });
const a = await fetch(`${API}/api/v1/workflows/${meta.id}/activate`, { method: 'POST', headers: h });
console.log(a.ok ? 'workflow atualizado e reativado' : `NÃO REATIVOU: ${a.status} ${await a.text()}`);
console.log(`\n${emails.length} endereços viram "RESPOSTA TCC":`);
for (const e of emails) console.log('  ' + e);
