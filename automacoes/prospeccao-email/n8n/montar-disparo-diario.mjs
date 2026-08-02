/**
 * Monta no n8n o workflow que dispara, todo dia às 07:30, as cartas que estão APROVADAS
 * na base (EMP) Cartas de Prospecção do Notion.
 *
 * A diferença para o montar-leva.mjs, que ele substitui: aquele carregava uma lista de
 * cartas cravada dentro do próprio workflow, então precisava ser remontado a cada leva e
 * reenviava as mesmas cartas se o gatilho voltasse a rodar. Este não tem lista dentro: ele
 * pergunta ao Notion o que está aprovado agora. Quem escreve as cartas é a rodada agendada
 * do Claude Code, às 18h do dia anterior.
 *
 * O fluxo, dentro do n8n:
 *   agenda 07:30 -> busca a assinatura -> pergunta ao Notion quais cartas estão "Aprovada"
 *   -> uma de cada vez: lê o texto da carta na página -> monta o e-mail no molde ->
 *   envia -> marca a carta como "Enviada" -> cria a Atividade PROSPECÇÃO -> move o Lead
 *   de "0. Alvo" para "1. Cadastrado" -> espera 12 min -> próxima.
 *
 * Três travas que valem mais que o resto:
 *
 *   1. TETO DE 5 POR DIA. A consulta pede no máximo 5 cartas. Se um dia acumular 30
 *      aprovadas, elas saem em 6 dias, e não todas numa manhã. Rajada queima a reputação
 *      do domínio e não tem desfazer.
 *   2. E-MAIL QUE FALHA NÃO GRAVA NADA. O registro no CRM está pendurado na saída de
 *      SUCESSO do envio. Se estivesse na saída comum, um envio falho armaria o cooldown
 *      de 60 dias e o lead ficaria dois meses sem receber nada por um e-mail que nunca
 *      chegou.
 *   3. O TEXTO DA CARTA VEM DA PÁGINA, não de cópia. É o mesmo texto que a Mallu leu e
 *      eventualmente corrigiu no Notion. Corrigir lá é o que vale.
 *
 * Rodar:  node automacoes/prospeccao-email/n8n/montar-disparo-diario.mjs
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { lerEnv, base } from './lib-leva.mjs';

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

// Bases do Notion, no formato da API (com hífens)
const DB_CARTAS = 'c531c0c8-66a2-41ff-a0a4-4559888c19dc'; // (EMP) Cartas de Prospecção
const DB_ATIVIDADES = '22244cb5-2e00-81e2-9071-db3762e265a6'; // (EMP) Atividades

const TETO_POR_DIA = 5;
const INTERVALO_MIN = 12;
const MARCA = '{{CORPO}}';

// O molde é lido aqui e embutido no nó. Mesma trava do montar-leva: se a marca aparecer
// duas vezes (citada num comentário, por exemplo), o replace troca a errada e o e-mail sai
// com a marca crua no corpo. Aconteceu em 26/07/2026.
const molde = readFileSync(resolve(base, 'template-email.html'), 'utf8');
const ocorrencias = molde.split(MARCA).length - 1;
if (ocorrencias !== 1) {
  throw new Error(`template-email.html precisa conter ${MARCA} exatamente 1 vez; encontrei ${ocorrencias}`);
}

const credenciais = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const credNotion = (credenciais.data || []).find((c) => c.name === 'Notion PAAPS (CRM)');
const credSmtp = (credenciais.data || []).find((c) => c.type === 'smtp');
if (!credNotion) throw new Error('credencial "Notion PAAPS (CRM)" não existe no n8n. Rode criar-credencial-notion.mjs.');
if (!credSmtp) throw new Error('credencial SMTP não existe no n8n.');

const CRED_NOTION = { id: credNotion.id, name: credNotion.name };
const CRED_SMTP = { id: credSmtp.id, name: credSmtp.name };

const NOME = 'Prospecção - Disparo diário (07:30)';
const NOME_AGENDA = 'Todo dia às 07:30';
const NOME_ESPERA = `Esperar ${INTERVALO_MIN} min`;
const item = `$('Uma de cada vez').item.json`;

const codigoPreparaFila = `// Transforma a resposta do Notion na fila de envio do dia.
// Cada item é uma carta APROVADA, com o que o envio precisa saber.
const paginas = $input.first().json.results || [];

const cartas = paginas.map((p) => {
  const prop = p.properties;
  const texto = (t) => (t && t.rich_text && t.rich_text[0] ? t.rich_text[0].plain_text : '');
  const rel = prop['Lead'] && prop['Lead'].relation && prop['Lead'].relation[0];
  return {
    cartaPageId: p.id,
    leadPageId: rel ? rel.id : null,
    lead: (prop['Carta'].title[0] ? prop['Carta'].title[0].plain_text : 'sem nome').split(' - ')[0],
    para: prop['Para'] ? prop['Para'].email : null,
    assunto: texto(prop['Assunto']),
    nota: prop['Nota'] ? prop['Nota'].number : null
  };
});

// Carta sem destinatário, sem assunto ou sem lead ligado não sai. Melhor faltar um e-mail
// do que mandar um e-mail quebrado com o nome da Mallu embaixo.
const boas = cartas.filter((c) => c.para && c.para.includes('@') && c.assunto && c.leadPageId);

return boas.map((c) => ({ json: c }));`;

const codigoMontaEmail = `// O texto da carta vem dos blocos da própria página do Notion, que é o que a Mallu leu.
const blocos = $input.first().json.results || [];

const linhaDoBloco = (b) => {
  const conteudo = b[b.type];
  if (!conteudo || !conteudo.rich_text) return null;
  const t = conteudo.rich_text.map((r) => r.plain_text).join('').trim();
  return t.length ? t : null;
};

const paragrafos = blocos.map(linhaDoBloco).filter((t) => t !== null);

if (!paragrafos.length) {
  throw new Error('a página da carta está vazia no Notion: nada para enviar');
}

const corpoHtml = paragrafos
  .map((p) => '<p style="margin:0 0 16px 0;">' + p.replace(/\\n/g, '<br>') + '</p>')
  .join('\\n');

const molde = ${JSON.stringify(molde)};
const html = molde.replace(${JSON.stringify(MARCA)}, corpoHtml);

// A assinatura é reanexada aqui de propósito: o binário não sobrevive à ida ao Notion
// para buscar o texto, então ele é puxado de volta do nó que o baixou.
const assinatura = {
  ...$('Buscar assinatura').first().binary.assinatura,
  mimeType: 'image/jpeg',
  fileName: 'assinatura-paaps.jpg',
  fileExtension: 'jpg'
};

const carta = $('Uma de cada vez').item.json;
return [{ json: { ...carta, html }, binary: { assinatura } }];`;

const codigoResumo = `// Monta o aviso do dia. Sai só se alguma carta saiu de verdade.
const hoje = new Date().toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' }); // AAAA-MM-DD

const linhas = ($input.first().json.results || [])
  .map((p) => {
    const pr = p.properties;
    const env = pr['Enviada em'] && pr['Enviada em'].date ? pr['Enviada em'].date.start : null;
    if (!env) return null;
    const dia = new Date(env).toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' });
    if (dia !== hoje) return null;
    return {
      titulo: pr['Carta'].title[0] ? pr['Carta'].title[0].plain_text : 'sem nome',
      para: pr['Para'] ? pr['Para'].email : '',
      assunto: pr['Assunto'] && pr['Assunto'].rich_text[0] ? pr['Assunto'].rich_text[0].plain_text : '',
      hora: new Date(env).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }),
      link: 'https://www.notion.so/' + p.id.replace(/-/g, '')
    };
  })
  .filter((l) => l !== null);

// Dia sem envio não vira e-mail. Aviso que chega todo dia sem novidade deixa de ser lido.
if (!linhas.length) return [];

const itens = linhas
  .map(
    (l) =>
      '<li style="margin:0 0 14px 0;"><b>' + l.titulo + '</b><br>' +
      'para ' + l.para + ', às ' + l.hora + '<br>' +
      '<i>' + l.assunto + '</i><br>' +
      '<a href="' + l.link + '">ler a carta que saiu</a></li>'
  )
  .join('');

const html =
  '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#222;line-height:1.5;">' +
  '<p>Saíram ' + linhas.length + (linhas.length === 1 ? ' carta' : ' cartas') + ' hoje de manhã:</p>' +
  '<ul style="padding-left:18px;">' + itens + '</ul>' +
  '<p style="color:#666;font-size:13px;">O texto de cada uma está na página do Notion pelo link acima. ' +
  'O servidor de e-mail não guarda cópia em Enviados, então esse registro é o comprovante.</p>' +
  '</div>';

return [{ json: { assunto: 'PAAPS: ' + linhas.length + (linhas.length === 1 ? ' carta saiu' : ' cartas saíram') + ' hoje', html } }];`;

const workflow = {
  name: NOME,
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
      parameters: { rule: { interval: [{ field: 'cronExpression', expression: '30 7 * * 1-5' }] } },
      notes:
        'Segunda a sexta, 07:30, fuso America/Sao_Paulo. Sábado e domingo NÃO: em 01/08/2026 um e-mail saiu num sábado e a Mallu barrou. Prefeitura não lê fim de semana e e-mail frio de sábado queima o primeiro toque.'
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
      notes: 'Vem do workflow "PAAPS - Asset: assinatura de e-mail". Entra embutida no e-mail.'
    },
    {
      id: 'consulta',
      name: 'Cartas aprovadas no Notion',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [640, 320],
      parameters: {
        method: 'POST',
        url: `https://api.notion.com/v1/databases/${DB_CARTAS}/query`,
        authentication: 'predefinedCredentialType',
        nodeCredentialType: 'notionApi',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: JSON.stringify({
          filter: { property: 'Estado', select: { equals: 'Aprovada' } },
          sorts: [{ property: 'Nota', direction: 'descending' }],
          page_size: TETO_POR_DIA
        }),
        options: {}
      },
      credentials: { notionApi: CRED_NOTION },
      notes: `Teto de ${TETO_POR_DIA} por dia. Se acumular aprovada, sai em dias seguidos em vez de tudo numa manhã.`
    },
    {
      id: 'fila',
      name: 'Preparar fila',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [860, 320],
      parameters: { jsCode: codigoPreparaFila }
    },
    {
      id: 'lote',
      name: 'Uma de cada vez',
      type: 'n8n-nodes-base.splitInBatches',
      typeVersion: 3,
      position: [1080, 320],
      parameters: { batchSize: 1, options: {} },
      notes: 'Envio espaçado, nunca em rajada (cadencia.md).'
    },
    {
      id: 'texto',
      name: 'Ler o texto da carta',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1300, 440],
      parameters: {
        url: `=https://api.notion.com/v1/blocks/{{ ${item}.cartaPageId }}/children?page_size=100`,
        authentication: 'predefinedCredentialType',
        nodeCredentialType: 'notionApi',
        options: {}
      },
      credentials: { notionApi: CRED_NOTION },
      notes: 'O texto sai da página do Notion, que é o que a Mallu leu e pôde corrigir.'
    },
    {
      id: 'montar',
      name: 'Montar o e-mail',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1520, 440],
      parameters: { jsCode: codigoMontaEmail },
      notes: 'Molde embutido por montar-disparo-diario.mjs. Editar template-email.html no repositório e rodar o script de novo.'
    },
    {
      id: 'enviar',
      name: 'Enviar (SMTP)',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1740, 440],
      parameters: {
        fromEmail: 'PAAPS Brasil <relacionamento@paaps.com.br>',
        toEmail: `={{ ${item}.para }}`,
        subject: `={{ ${item}.assunto }}`,
        emailFormat: 'html',
        html: '={{ $json.html }}',
        options: { appendAttribution: false, attachments: 'assinatura' }
      },
      credentials: { smtp: CRED_SMTP },
      onError: 'continueErrorOutput',
      notes:
        'Saída de cima = enviou, e só então o CRM é atualizado. Saída de baixo = falhou, e NADA é gravado: a carta continua "Aprovada" e tenta de novo amanhã. É o que impede o cooldown de marcar um e-mail que nunca chegou.'
    },
    {
      id: 'carta_enviada',
      name: 'Carta: Aprovada -> Enviada',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1960, 340],
      parameters: {
        method: 'PATCH',
        url: `=https://api.notion.com/v1/pages/{{ ${item}.cartaPageId }}`,
        authentication: 'predefinedCredentialType',
        nodeCredentialType: 'notionApi',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: `={{ JSON.stringify({
  properties: {
    "Estado": { select: { name: "Enviada" } },
    "Enviada em": { date: { start: new Date().toISOString() } }
  }
}) }}`,
        options: {}
      },
      credentials: { notionApi: CRED_NOTION },
      onError: 'continueRegularOutput',
      notes:
        'Tira a carta da fila e carimba a hora. O SMTP não deixa cópia na caixa de Enviados, então ESTE registro é o único comprovante que a Mallu consegue ler: a página guarda o texto que saiu, para quem e quando.'
    },
    {
      id: 'atividade',
      name: 'CRM: registrar Atividade PROSPECÇÃO',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [2180, 340],
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
      notes: 'Esta linha é o que arma o cooldown de 60 dias lido pelo porteiro. O createdTime dela é a data do toque.'
    },
    {
      id: 'status',
      name: 'CRM: Alvo -> Cadastrado',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [2400, 340],
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
      notes: 'Sobe o lead um degrau. De "Aquecimento" em diante quem conduz é a Mallu.'
    },
    {
      id: 'espera',
      name: NOME_ESPERA,
      type: 'n8n-nodes-base.wait',
      typeVersion: 1.1,
      position: [2620, 440],
      parameters: { amount: INTERVALO_MIN, unit: 'minutes' },
      webhookId: 'b2f3d4e5-0000-4000-8000-000000000002'
    },
    {
      id: 'fim',
      name: 'Dia concluído',
      type: 'n8n-nodes-base.noOp',
      typeVersion: 1,
      position: [1300, 180],
      parameters: {},
      notes: 'Chega aqui também nos dias em que nenhuma carta está aprovada. Dia sem envio é resultado válido.'
    },
    {
      id: 'enviadas_hoje',
      name: 'Buscar o que saiu hoje',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1520, 180],
      parameters: {
        method: 'POST',
        url: `https://api.notion.com/v1/databases/${DB_CARTAS}/query`,
        authentication: 'predefinedCredentialType',
        nodeCredentialType: 'notionApi',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: JSON.stringify({
          filter: { property: 'Estado', select: { equals: 'Enviada' } },
          sorts: [{ property: 'Enviada em', direction: 'descending' }],
          page_size: 20
        }),
        options: {}
      },
      credentials: { notionApi: CRED_NOTION },
      notes: 'A fonte do aviso é o que está gravado como Enviada, não o que entrou na fila. Se um envio falhou, ele não aparece aqui, que é o correto.'
    },
    {
      id: 'resumo',
      name: 'Montar resumo',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1740, 180],
      parameters: { jsCode: codigoResumo }
    },
    {
      id: 'avisar',
      name: 'Avisar a Mallu',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1960, 180],
      parameters: {
        fromEmail: 'PAAPS Brasil <relacionamento@paaps.com.br>',
        toEmail: 'paapsdiretoria@gmail.com',
        subject: '={{ $json.assunto }}',
        emailFormat: 'html',
        html: '={{ $json.html }}',
        options: { appendAttribution: false }
      },
      credentials: { smtp: CRED_SMTP },
      onError: 'continueRegularOutput',
      notes: 'Só sai em dia que teve envio. Dia sem carta não vira e-mail, senão o aviso vira ruído e ela para de ler.'
    }
  ],
  connections: {
    [NOME_AGENDA]: { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Cartas aprovadas no Notion', type: 'main', index: 0 }]] },
    'Cartas aprovadas no Notion': { main: [[{ node: 'Preparar fila', type: 'main', index: 0 }]] },
    'Preparar fila': { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] },
    'Uma de cada vez': {
      main: [
        [{ node: 'Dia concluído', type: 'main', index: 0 }],
        [{ node: 'Ler o texto da carta', type: 'main', index: 0 }]
      ]
    },
    'Ler o texto da carta': { main: [[{ node: 'Montar o e-mail', type: 'main', index: 0 }]] },
    'Montar o e-mail': { main: [[{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]] },
    'Enviar (SMTP)': {
      main: [
        [{ node: 'Carta: Aprovada -> Enviada', type: 'main', index: 0 }],
        [{ node: NOME_ESPERA, type: 'main', index: 0 }]
      ]
    },
    'Carta: Aprovada -> Enviada': { main: [[{ node: 'CRM: registrar Atividade PROSPECÇÃO', type: 'main', index: 0 }]] },
    'CRM: registrar Atividade PROSPECÇÃO': { main: [[{ node: 'CRM: Alvo -> Cadastrado', type: 'main', index: 0 }]] },
    'CRM: Alvo -> Cadastrado': { main: [[{ node: NOME_ESPERA, type: 'main', index: 0 }]] },
    [NOME_ESPERA]: { main: [[{ node: 'Uma de cada vez', type: 'main', index: 0 }]] },
    'Dia concluído': { main: [[{ node: 'Buscar o que saiu hoje', type: 'main', index: 0 }]] },
    'Buscar o que saiu hoje': { main: [[{ node: 'Montar resumo', type: 'main', index: 0 }]] },
    'Montar resumo': { main: [[{ node: 'Avisar a Mallu', type: 'main', index: 0 }]] }
  }
};

const lista = await (await fetch(`${API}/api/v1/workflows?limit=250`, { headers: h })).json();
const existente = (lista.data || []).find((w) => w.name === NOME);

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

// PUT desativa em silêncio. A ativação é sempre explícita, pelo endpoint próprio.
const ativar = await fetch(`${API}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: h });
console.log(ativar.ok ? 'workflow ATIVADO' : `ativação falhou (${ativar.status}): ${await ativar.text()}`);

console.log(`\nteto de ${TETO_POR_DIA} cartas por dia, uma a cada ${INTERVALO_MIN} min a partir das 07:30`);
console.log(`${API}/workflow/${id}`);
