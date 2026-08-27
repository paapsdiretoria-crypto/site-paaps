/**
 * Monta no n8n o workflow que dispara a leva da pesquisa de TCC às unidades do SUAS-BH.
 *
 * O fluxo, dentro do n8n:
 *   agenda (data marcada) -> busca a assinatura acadêmica -> carrega as cartas ->
 *   uma unidade de cada vez: envia -> espera -> próxima -> ao fim, resumo para a Mallu.
 *
 * Diferença dura em relação ao disparo da prospecção: aqui NÃO existe nó de Notion. Um CRAS
 * não é lead. Se ele entrasse no CRM, viraria contagem de funil comercial e ficaria travado
 * pelo cooldown de 60 dias que o porteiro lê. Ver automacoes/pesquisa-tcc-bh/PLANO.md.
 *
 * Lê:   unidades-bh.json + carta-unidades.md + template-email-pesquisa.html
 * Cria: um workflow n8n, DESATIVADO.
 *
 * Nasce e permanece DESATIVADO de propósito: ativar é o gesto da Mallu, e é o gate.
 * Enquanto estiver desativado, a hora passa e nada sai.
 *
 * Rodar:  node automacoes/pesquisa-tcc-bh/n8n/montar-leva-pesquisa.mjs
 */

import { lerEnv, montarCartas, codigoDoNo } from './lib-pesquisa.mjs';

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const { leva, cartas } = montarCartas();

const [ano, mes, dia] = leva.dataDisparo.split('-').map(Number);
const [hh, mm] = leva.hora.split(':').map(Number);
const intervalo = leva.intervaloMinutos ?? 8;
const cron = `${mm} ${hh} ${dia} ${mes} *`;

const NOME_AGENDA = `${leva.dataDisparo} às ${leva.hora}`;
const NOME_ESPERA = `Esperar ${intervalo} min`;
const NOME_LOTE = 'Uma unidade de cada vez';
const nome = `Pesquisa TCC - Leva ${leva.dataDisparo} (${leva.hora})`;

// A credencial de SMTP é procurada pelo nome no próprio n8n, para o script não guardar id
// que muda de instância para instância.
const credenciais = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const credSmtp = (credenciais.data || []).find((c) => c.type === 'smtp' || c.name === 'SMTP account');
if (!credSmtp) throw new Error('credencial SMTP não encontrada no n8n; sem ela o envio não sai');
const SMTP = { smtp: { id: credSmtp.id, name: credSmtp.name } };

const REMETENTE = leva.remetente;
const AVISO_PARA = leva.avisarEm || 'paapsdiretoria@gmail.com';
const item = `$('${NOME_LOTE}').item.json`;

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
      parameters: { rule: { interval: [{ field: 'cronExpression', expression: cron }] } },
      notes: `Dispara uma vez, em ${leva.dataDisparo} às ${leva.hora}, fuso America/Sao_Paulo. ATENÇÃO: mudar o cron pela API não re-registra o gatilho no agendador. Depois de alterar, desativar e reativar o workflow, senão o horário novo nunca vale.`
    },
    {
      id: 'assinatura',
      name: 'Buscar assinatura',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [420, 320],
      parameters: {
        url: `${API}/webhook/assinatura-pesquisa`,
        options: { response: { response: { responseFormat: 'file', outputPropertyName: 'assinatura' } } }
      },
      notes: 'Vem do workflow "Pesquisa TCC - Asset: assinatura acadêmica". É o cartão SEM marca PAAPS. Entra embutida no e-mail por cid.'
    },
    {
      id: 'anuencia',
      name: 'Buscar anuência',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [530, 320],
      parameters: {
        url: `${API}/webhook/anuencia-tcc`,
        options: { response: { response: { responseFormat: 'file', outputPropertyName: 'anuencia' } } }
      },
      notes: 'Vem do workflow "Pesquisa TCC - Asset: carta de anuência". Encadeado depois da assinatura para o item chegar em "Preparar fila" com os dois binários juntos. PDF da DGTE, anexado em todo e-mail da leva.'
    },
    {
      id: 'fila',
      name: 'Preparar fila',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 320],
      parameters: { jsCode: codigoDoNo(cartas) }
    },
    {
      id: 'lote',
      name: NOME_LOTE,
      type: 'n8n-nodes-base.splitInBatches',
      typeVersion: 3,
      position: [880, 320],
      parameters: { batchSize: 1, options: { reset: false } },
      notes: 'Saída de cima = acabou a fila. Saída de baixo = a próxima unidade.'
    },
    {
      id: 'enviar',
      name: 'Enviar (SMTP)',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1140, 440],
      parameters: {
        fromEmail: REMETENTE,
        toEmail: `={{ ${item}.para }}`,
        subject: `={{ ${item}.assunto }}`,
        emailFormat: 'html',
        html: `={{ ${item}.html }}`,
        options: { appendAttribution: false, attachments: 'assinatura,anuencia' }
      },
      credentials: SMTP,
      onError: 'continueErrorOutput',
      notes: 'Saída de cima = enviou. Saída de baixo = falhou, e aí a unidade vira aviso na hora, para você reenviar na mão. A leva não para por causa de uma unidade.'
    },
    {
      id: 'avisar_falha',
      name: 'Avisar: não saiu',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1400, 600],
      parameters: {
        fromEmail: REMETENTE,
        toEmail: AVISO_PARA,
        subject: `=FALHOU TCC: {{ ${item}.unidade }}`,
        emailFormat: 'html',
        html: `={{ '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6"><p>O e-mail para <strong>' + ${item}.unidade + '</strong> não saiu.</p><p style="color:#666">' + ${item}.para + '</p><p>Erro: ' + ($json.error || 'sem detalhe') + '</p><p style="margin-top:20px;color:#888;font-size:13px">As outras unidades da leva seguem normalmente.</p></div>' }}`,
        options: { appendAttribution: false }
      },
      credentials: SMTP,
      onError: 'continueRegularOutput'
    },
    {
      id: 'espera',
      name: NOME_ESPERA,
      type: 'n8n-nodes-base.wait',
      typeVersion: 1.1,
      position: [1660, 440],
      parameters: { amount: intervalo, unit: 'minutes' },
      webhookId: 'a1f3c0de-7b21-4c55-9a10-pesquisa000001',
      notes: 'Intervalo entre um envio e o outro. Seis e-mails saindo no mesmo segundo do mesmo domínio é o desenho de um disparo em massa, e é assim que filtro de prefeitura lê.'
    },
    {
      id: 'resumo',
      name: 'Montar resumo',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1140, 180],
      parameters: {
        jsCode: `// A fila é a fonte: lista o que a leva tinha. Falha de unidade vira e-mail próprio
// na hora, então este resumo é o "acabou", não o "deu tudo certo".
const fila = $('Preparar fila').all().map((i) => i.json);
const linhas = fila.map((c) => '<li>' + c.unidade + ' &nbsp;<span style="color:#888">' + c.para + '</span></li>').join('');
return [{
  json: {
    assunto: 'Leva TCC enviada: ' + fila.length + ' unidades',
    html: '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6">'
      + '<p>A leva da pesquisa saiu para <strong>' + fila.length + ' unidades</strong>:</p>'
      + '<ul>' + linhas + '</ul>'
      + '<p style="margin-top:20px;color:#888;font-size:13px">Se alguma tivesse falhado, você teria recebido um e-mail com assunto FALHOU TCC. '
      + 'As respostas chegam com assunto RESPOSTA TCC.</p></div>'
  }
}];`
      }
    },
    {
      id: 'avisar',
      name: 'Avisar a Mallu',
      type: 'n8n-nodes-base.emailSend',
      typeVersion: 2.1,
      position: [1400, 180],
      parameters: {
        fromEmail: REMETENTE,
        toEmail: AVISO_PARA,
        subject: '={{ $json.assunto }}',
        emailFormat: 'html',
        html: '={{ $json.html }}',
        options: { appendAttribution: false }
      },
      credentials: SMTP,
      onError: 'continueRegularOutput'
    }
  ],
  connections: {
    [NOME_AGENDA]: { main: [[{ node: 'Buscar assinatura', type: 'main', index: 0 }]] },
    'Buscar assinatura': { main: [[{ node: 'Buscar anuência', type: 'main', index: 0 }]] },
    'Buscar anuência': { main: [[{ node: 'Preparar fila', type: 'main', index: 0 }]] },
    'Preparar fila': { main: [[{ node: NOME_LOTE, type: 'main', index: 0 }]] },
    [NOME_LOTE]: {
      main: [
        [{ node: 'Montar resumo', type: 'main', index: 0 }],
        [{ node: 'Enviar (SMTP)', type: 'main', index: 0 }]
      ]
    },
    'Enviar (SMTP)': {
      main: [
        [{ node: NOME_ESPERA, type: 'main', index: 0 }],
        [{ node: 'Avisar: não saiu', type: 'main', index: 0 }]
      ]
    },
    'Avisar: não saiu': { main: [[{ node: NOME_ESPERA, type: 'main', index: 0 }]] },
    [NOME_ESPERA]: { main: [[{ node: NOME_LOTE, type: 'main', index: 0 }]] },
    'Montar resumo': { main: [[{ node: 'Avisar a Mallu', type: 'main', index: 0 }]] }
  }
};

const lista = await (await fetch(`${API}/api/v1/workflows?limit=250`, { headers: h })).json();
const existente = (lista.data || []).find((w) => w.name === nome);

let id;
if (existente) {
  const r = await fetch(`${API}/api/v1/workflows/${existente.id}`, { method: 'PUT', headers: h, body: JSON.stringify(workflow) });
  if (!r.ok) throw new Error(`PUT falhou: ${r.status} ${await r.text()}`);
  id = existente.id;
  console.log(`atualizado: ${id}`);
} else {
  const r = await fetch(`${API}/api/v1/workflows`, { method: 'POST', headers: h, body: JSON.stringify(workflow) });
  if (!r.ok) throw new Error(`POST falhou: ${r.status} ${await r.text()}`);
  id = (await r.json()).id;
  console.log(`criado: ${id}`);
}

console.log(`\nWorkflow "${nome}" montado e DESATIVADO.`);
console.log(`${cartas.length} unidades na fila, ${intervalo} min entre uma e outra:`);
for (const c of cartas) console.log(`  ${c.unidade}  ->  ${c.para}`);
console.log(`\nPara sair: abrir o workflow no n8n e ligar a chave. Enquanto estiver desligado, nada sai.`);
