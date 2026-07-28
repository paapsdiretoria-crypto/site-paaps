/**
 * Cria no n8n a credencial que deixa o fluxo LER a caixa relacionamento@paaps.com.br.
 *
 * É ela que faz o workflow "Prospecção - Retorno (quem respondeu)" perceber que alguém
 * respondeu uma carta. Sem ela, o e-mail do secretário fica parado na caixa e ninguém sabe.
 *
 * ANTES de rodar, uma vez só:
 *
 *   1. Abrir automacoes/.env (o arquivo que o git ignora, onde já moram as outras chaves).
 *   2. Acrescentar uma linha com a senha do e-mail relacionamento@paaps.com.br no Titan.
 *      É a MESMA senha que o envio já usa:
 *
 *        TITAN_SENHA=a-senha-do-relacionamento
 *
 *      Se o Titan estiver com verificação em duas etapas, use a senha de aplicativo
 *      gerada lá, e não a senha de entrar no site.
 *   3. Salvar o arquivo.
 *
 * Depois, no terminal:
 *
 *   cd "/Users/mac/Documents/SITE PAAPS"
 *   node automacoes/prospeccao-email/n8n/criar-credencial-imap.mjs
 *
 * O script testa a conexão de verdade antes de guardar qualquer coisa: se a senha estiver
 * errada, ele avisa e não cria credencial nenhuma.
 */

import { connect } from 'node:tls';
import { readFileSync } from 'node:fs';

const env = Object.fromEntries(
  readFileSync(new URL('../../.env', import.meta.url), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')), l.slice(l.indexOf('=') + 1).trim()])
);

const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const USUARIO = 'relacionamento@paaps.com.br';
const HOST = 'imap.titan.email';
const PORTA = 993;
const NOME = 'Titan IMAP (relacionamento@)';

const senha = env.TITAN_SENHA;
if (!senha) {
  console.error('\nTITAN_SENHA não está em automacoes/.env.');
  console.error('Siga os 3 passos no comentário do topo deste arquivo e rode de novo.\n');
  process.exit(1);
}

// Testa a conexão IMAP antes de guardar. Login falso vira credencial quebrada e silenciosa.
function testarImap() {
  return new Promise((resolve) => {
    const socket = connect({ host: HOST, port: PORTA, servername: HOST }, () => {
      socket.write(`a1 LOGIN "${USUARIO}" "${senha.replace(/"/g, '\\"')}"\r\n`);
    });

    let buffer = '';
    const encerrar = (ok, detalhe) => {
      try {
        socket.write('a2 LOGOUT\r\n');
        socket.end();
      } catch {
        // socket já pode ter caído; não importa para o resultado
      }
      resolve({ ok, detalhe });
    };

    socket.setTimeout(15000, () => encerrar(false, 'o servidor não respondeu em 15 segundos'));
    socket.on('error', (e) => encerrar(false, e.message));

    socket.on('data', (chunk) => {
      buffer += chunk.toString();
      if (/^a1 OK/m.test(buffer)) encerrar(true, 'login aceito');
      else if (/^a1 (NO|BAD)/m.test(buffer)) {
        const linha = (buffer.match(/^a1 (NO|BAD).*/m) || [''])[0];
        encerrar(false, linha.trim());
      }
    });
  });
}

console.log(`testando ${USUARIO} em ${HOST}:${PORTA} ...`);
const teste = await testarImap();

if (!teste.ok) {
  console.error(`\nA conexão falhou: ${teste.detalhe}`);
  console.error('\nO que costuma ser:');
  console.error('  - a senha em TITAN_SENHA está errada ou tem espaço sobrando;');
  console.error('  - o Titan está com "Ativar Titan em outros apps" desligado;');
  console.error('  - existe verificação em duas etapas e falta a senha de aplicativo.');
  console.error('\nNenhuma credencial foi criada.\n');
  process.exit(1);
}
console.log('conexão OK: a caixa aceita ser lida pelo n8n.');

const lista = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const existente = (lista.data || []).find((c) => c.name === NOME);

const dados = { user: USUARIO, password: senha, host: HOST, port: PORTA, secure: true };

let id;
if (existente) {
  const r = await fetch(`${API}/api/v1/credentials/${existente.id}`, {
    method: 'PATCH',
    headers: h,
    body: JSON.stringify({ name: NOME, type: 'imap', data: dados }),
  });
  if (!r.ok) throw new Error(`PATCH falhou: ${r.status} ${await r.text()}`);
  id = existente.id;
  console.log(`credencial atualizada: ${id}`);
} else {
  const r = await fetch(`${API}/api/v1/credentials`, {
    method: 'POST',
    headers: h,
    body: JSON.stringify({ name: NOME, type: 'imap', data: dados }),
  });
  if (!r.ok) throw new Error(`POST falhou: ${r.status} ${await r.text()}`);
  id = (await r.json()).id;
  console.log(`credencial criada: ${id}`);
}

// Pendura a credencial no nó de gatilho do workflow de retorno e liga o workflow.
const WF = '0SWJgkHYp5MCCIYq';
const wf = await (await fetch(`${API}/api/v1/workflows/${WF}`, { headers: h })).json();

const gatilho = wf.nodes.find((n) => n.type === 'n8n-nodes-base.emailReadImap');
if (!gatilho) throw new Error('não achei o nó de gatilho IMAP no workflow de retorno');
gatilho.credentials = { imap: { id, name: NOME } };

const put = await fetch(`${API}/api/v1/workflows/${WF}`, {
  method: 'PUT',
  headers: h,
  body: JSON.stringify({
    name: wf.name,
    nodes: wf.nodes,
    connections: wf.connections,
    settings: wf.settings || {},
  }),
});
if (!put.ok) throw new Error(`PUT do workflow falhou: ${put.status} ${await put.text()}`);
console.log('credencial ligada ao workflow de retorno.');

const ativar = await fetch(`${API}/api/v1/workflows/${WF}/activate`, { method: 'POST', headers: h });
console.log(
  ativar.ok
    ? '\nPronto. O workflow de retorno está LIGADO e vigiando a caixa.'
    : `\nA credencial ficou pronta, mas a ativação falhou (${ativar.status}). Ligue na mão pelo botão do n8n.`
);
