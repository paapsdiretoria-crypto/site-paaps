/**
 * Cria no n8n a credencial que dá ao fluxo acesso de escrita ao CRM do Notion.
 *
 * Sem ela, o n8n envia o e-mail mas não consegue gravar a Atividade PROSPECÇÃO nem mover
 * o Lead de "0. Alvo" para "1. Cadastrado". O cooldown de 60 dias deixaria de existir e o
 * mesmo lead levaria e-mail repetido na leva seguinte.
 *
 * ANTES de rodar, uma vez só, no Notion (só a dona do workspace pode fazer isto):
 *
 *   1. Abrir https://www.notion.so/profile/integrations e clicar em "New integration".
 *      Nome: PAAPS CRM (n8n). Workspace: o da PAAPS. Tipo: interna.
 *   2. Em "Capabilities", marcar Read content, Update content e Insert content.
 *   3. Copiar o "Internal Integration Secret" (começa com ntn_).
 *   4. Colar em automacoes/.env, na linha:  NOTION_TOKEN=ntn_...
 *      O .env é ignorado pelo git; o valor nunca entra em arquivo commitado.
 *   5. Dar acesso do CRM à integração: abrir no Notion cada uma das três bases,
 *      menu "..." do canto superior direito -> Connections -> Connect to -> PAAPS CRM (n8n):
 *        (EMP) Leads, (EMP) Contato, (EMP) Atividades.
 *      Sem este passo 5 o token existe mas enxerga um workspace vazio.
 *
 * Depois:  node automacoes/prospeccao-email/n8n/criar-credencial-notion.mjs
 */

import { lerEnv } from './lib-leva.mjs';

const env = lerEnv();
const API = env.N8N_API_URL;
const h = { 'X-N8N-API-KEY': env.N8N_API_KEY, 'Content-Type': 'application/json' };

const token = env.NOTION_TOKEN;
if (!token) {
  console.error('\nNOTION_TOKEN não está em automacoes/.env.');
  console.error('Siga os 5 passos no comentário do topo deste arquivo e rode de novo.\n');
  process.exit(1);
}

const NOME = 'Notion PAAPS (CRM)';

// Confere o token E o acesso a cada base do CRM antes de guardar. Testar só o token não
// serve de nada: o erro comum não é token inválido, é token válido que enxerga um
// workspace vazio porque as bases não foram conectadas à integração. Melhor descobrir
// aqui do que na segunda de manhã, com o e-mail já enviado e o CRM mudo.
// Atenção: são os IDs de DATABASE (os que a API entende), não os de data source/coleção
// que aparecem como collection:// nas ferramentas do Notion. Confundir os dois devolve 404
// mesmo com a base já conectada.
const BASES = {
  '(EMP) Leads': '22244cb5-2e00-816a-b854-f1a1bf4aa934',
  '(EMP) Contato': '22244cb5-2e00-816d-8f74-d5b28d9ae706',
  '(EMP) Atividades': '22244cb5-2e00-81e2-9071-db3762e265a6'
};
const cabecalho = { Authorization: `Bearer ${token}`, 'Notion-Version': '2022-06-28' };

let faltando = [];
for (const [nome, dbId] of Object.entries(BASES)) {
  const r = await fetch(`https://api.notion.com/v1/databases/${dbId}`, { headers: cabecalho });
  if (r.status === 401) {
    console.error(`\nO Notion recusou o token (401). Confira se copiou o segredo inteiro.\n`);
    process.exit(1);
  }
  if (r.ok) {
    console.log(`  ok    ${nome}`);
  } else {
    console.log(`  FALTA ${nome}  (${r.status})`);
    faltando.push(nome);
  }
}

if (faltando.length) {
  console.error('\nO token é válido, mas estas bases ainda não estão conectadas à integração:');
  faltando.forEach((n) => console.error(`  - ${n}`));
  console.error('\nNo Notion: Conexões -> PAAPS CRM (n8n) -> aba "Acesso a conteúdo" -> adicionar');
  console.error('as bases que faltam. Depois rode este script de novo.\n');
  process.exit(1);
}
console.log('token válido e as 3 bases do CRM estão acessíveis.');

const lista = await (await fetch(`${API}/api/v1/credentials?limit=100`, { headers: h })).json();
const existente = (lista.data || []).find((c) => c.name === NOME);

let id;
if (existente) {
  const r = await fetch(`${API}/api/v1/credentials/${existente.id}`, {
    method: 'PUT',
    headers: h,
    body: JSON.stringify({ name: NOME, type: 'notionApi', data: { apiKey: token } })
  });
  if (!r.ok) throw new Error(`PUT falhou: ${r.status} ${await r.text()}`);
  id = existente.id;
  console.log(`credencial atualizada: ${id}`);
} else {
  const r = await fetch(`${API}/api/v1/credentials`, {
    method: 'POST',
    headers: h,
    body: JSON.stringify({ name: NOME, type: 'notionApi', data: { apiKey: token } })
  });
  if (!r.ok) throw new Error(`POST falhou: ${r.status} ${await r.text()}`);
  id = (await r.json()).id;
  console.log(`credencial criada: ${id}`);
}

console.log('\nAgora rode de novo o montar-leva.mjs para o workflow apontar para ela:');
console.log('  node automacoes/prospeccao-email/n8n/montar-leva.mjs 2026-07-27');
