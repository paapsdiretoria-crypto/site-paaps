// Servidor-ponte da Constelação PAAPS.
//
// Faz três coisas, e só elas:
//   1. serve o dashboard (os arquivos estáticos da pasta acima);
//   2. mantém um WebSocket aberto com a página;
//   3. quando a Mallu aciona o fluxo, EXECUTA os agentes de verdade e transmite
//      cada coisa que eles pensam/fazem/acham, ao vivo, para a tela.
//
// Sem ANTHROPIC_API_KEY, o item 3 fica desligado: o servidor avisa a página que
// está sem chave, e o dashboard roda em simulação (nada é executado nem cobrado).
// A chave não aparece em nenhum log: só é lida do .env para dentro do SDK.
//
// Por que cada agente roda como uma query própria, e não como subagente: o
// stream interno de um subagente não volta para o pai (só a chamada volta), e o
// visor precisa ver o pensamento do agente. Rodando cada um como query separada,
// o visor vê tudo, e Radar e @paaps.brasil rodam de fato em paralelo.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ_DASH = path.resolve(AQUI, '..'); // pasta do dashboard
const RAIZ_PROJETO = path.resolve(AQUI, '..', '..', '..'); // SITE PAAPS/

carregarEnv(path.join(AQUI, '.env'));
const PORTA = Number(process.env.PORTA) || 8777;
const CHAVE = (process.env.ANTHROPIC_API_KEY || '').trim();

// ---------------------------------------------------------------- servidor http

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const servidor = http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = '/index.html';

  // Trava de segurança: nada fora da pasta do dashboard é servido.
  const alvo = path.normalize(path.join(RAIZ_DASH, rel));
  if (!alvo.startsWith(RAIZ_DASH)) {
    res.writeHead(403).end('proibido');
    return;
  }

  fs.readFile(alvo, (erro, dados) => {
    if (erro) {
      res.writeHead(404).end('não encontrado');
      return;
    }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(alvo)] || 'application/octet-stream' });
    res.end(dados);
  });
});

// -------------------------------------------------------------------- websocket

const wss = new WebSocketServer({ server: servidor });
const execucoes = new Map(); // id do agente -> handle da query em andamento

wss.on('connection', (ws) => {
  enviar(ws, { tipo: 'ola', temChave: !!CHAVE });
  if (!CHAVE) {
    enviar(ws, {
      tipo: 'aviso',
      texto:
        'Servidor sem ANTHROPIC_API_KEY. Rodando em simulação: nada é executado nem cobrado. ' +
        'Para execução real, cole a chave em ponte/.env e reinicie.'
    });
  }

  ws.on('message', async (bruto) => {
    let msg;
    try {
      msg = JSON.parse(bruto.toString());
    } catch {
      return;
    }

    if (msg.tipo === 'rodar') {
      if (!CHAVE) {
        enviar(ws, { tipo: 'sem-chave' });
        return;
      }
      rodarAgente(ws, msg.agente).catch((e) =>
        enviar(ws, { tipo: 'erro', agente: msg.agente?.id, texto: String(e?.message || e) })
      );
    }

    if (msg.tipo === 'interromper') {
      const h = execucoes.get(msg.id);
      if (h?.interrupt) await h.interrupt().catch(() => {});
    }

    if (msg.tipo === 'mensagem') {
      const h = execucoes.get(msg.id);
      // Input em streaming: só existe enquanto o agente está rodando de verdade.
      if (h?.enviarInput) h.enviarInput(msg.texto);
    }
  });
});

// ------------------------------------------------------------- execução do agente

async function rodarAgente(ws, agente) {
  // O SDK é importado aqui dentro, dinâmico: assim o servidor sobe e serve o
  // dashboard mesmo se o pacote não estiver instalado (modo simulação puro).
  let query;
  try {
    ({ query } = await import('@anthropic-ai/claude-agent-sdk'));
  } catch {
    enviar(ws, {
      tipo: 'erro',
      agente: agente.id,
      texto: 'SDK do Claude não instalado. Rode "npm install" dentro de ponte/.'
    });
    return;
  }

  const totalEtapas = (agente.trilha || []).length;
  let etapaAtual = 0;
  const idsEtapa = (agente.trilha || []).map((e) => e.id);

  emitirEstado(ws, agente.id, 'trabalhando', 0, 'Acordando');

  // Instrução: o próprio .md do agente já descreve tudo. Aqui só damos o gancho
  // de sessão e reforçamos o anúncio de etapa, que é o que move a barra.
  const prompt =
    `Você é o agente "${agente.id}" do PAAPS, definido em ${agente.arquivo}. ` +
    `Execute a sua rotina completa agora, seguindo exatamente o seu próprio arquivo. ` +
    `Anuncie cada etapa com a linha ">>> ETAPA <id>" como o seu arquivo manda.`;

  let interrupt = null;
  const filaInput = [];

  const opcoes = {
    // cwd no projeto: carrega CLAUDE.md, skills e os agentes de .claude/agents.
    cwd: RAIZ_PROJETO,
    settingSources: ['project'],
    // A chave vai para o processo do SDK, nunca para log.
    env: { ...process.env, ANTHROPIC_API_KEY: CHAVE },
    includePartialMessages: false
  };

  const q = query({ prompt, options: opcoes });
  interrupt = q.interrupt?.bind(q);

  execucoes.set(agente.id, {
    interrupt,
    enviarInput: (t) => filaInput.push(t)
  });

  try {
    for await (const m of q) {
      // (a) PENSANDO e (b) FAZENDO vêm do assistente.
      if (m.type === 'assistant') {
        for (const bloco of m.message?.content || []) {
          if (bloco.type === 'text') {
            const anuncio = pegarAnuncioEtapa(bloco.text, idsEtapa);
            if (anuncio) {
              etapaAtual = anuncio.indice + 1;
              const p = totalEtapas ? etapaAtual / totalEtapas : 0;
              emitirEstado(ws, agente.id, 'trabalhando', p, agente.trilha[anuncio.indice].texto);
            }
            const limpo = semAnuncios(bloco.text);
            if (limpo) enviar(ws, { tipo: 'pensando', id: agente.id, texto: limpo });
          }
          if (bloco.type === 'tool_use') {
            enviar(ws, {
              tipo: 'fazendo',
              id: agente.id,
              texto: descreverFerramenta(bloco.name, bloco.input)
            });
          }
        }
      }
      // (c) ACHANDO: o resultado da ferramenta.
      if (m.type === 'user') {
        for (const bloco of m.message?.content || []) {
          if (bloco.type === 'tool_result') {
            enviar(ws, { tipo: 'achando', id: agente.id, texto: resumirResultado(bloco.content) });
          }
        }
      }
      if (m.type === 'result') {
        const p = m.subtype === 'success' ? 1 : etapaAtual / (totalEtapas || 1);
        emitirEstado(
          ws,
          agente.id,
          m.subtype === 'success' ? 'concluido' : 'abortado',
          p,
          m.subtype === 'success' ? 'Entrega concluída' : 'Execução interrompida',
          m.usage
        );
      }
    }
  } finally {
    execucoes.delete(agente.id);
  }
}

// ------------------------------------------------------------------- utilitários

function pegarAnuncioEtapa(texto, ids) {
  const m = texto.match(/>>>\s*ETAPA\s+([\w.-]+)/i);
  if (!m) return null;
  const indice = ids.indexOf(m[1]);
  return indice >= 0 ? { indice } : null;
}

const semAnuncios = (t) => t.replace(/>>>\s*ETAPA\s+[\w.-]+/gi, '').trim();

function descreverFerramenta(nome, input) {
  if (!input) return nome;
  const arg =
    input.query || input.command || input.file_path || input.url || input.pattern || '';
  return arg ? `${nome}(${String(arg).slice(0, 90)})` : nome;
}

function resumirResultado(conteudo) {
  const t = Array.isArray(conteudo)
    ? conteudo.map((b) => b.text || '').join(' ')
    : String(conteudo || '');
  return t.replace(/\s+/g, ' ').trim().slice(0, 160);
}

function emitirEstado(ws, id, estado, progresso, etapa, usage) {
  enviar(ws, { tipo: 'estado', id, estado, progresso, etapa, usage });
}

function enviar(ws, obj) {
  if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(obj));
}

// Lê KEY=VALOR de um .env sem depender de pacote externo.
function carregarEnv(arquivo) {
  try {
    for (const linha of fs.readFileSync(arquivo, 'utf8').split('\n')) {
      const t = linha.trim();
      if (!t || t.startsWith('#')) continue;
      const i = t.indexOf('=');
      if (i === -1) continue;
      const k = t.slice(0, i).trim();
      const v = t.slice(i + 1).trim();
      if (!(k in process.env)) process.env[k] = v;
    }
  } catch {
    // sem .env: segue sem chave, em simulação.
  }
}

// ECONNRESET costuma ser o hotspot do iPhone matando um stream longo. Em vez de
// deixar o processo inteiro cair no meio de um ciclo, tratamos e avisamos.
process.on('uncaughtException', (e) => {
  if (e?.code === 'ECONNRESET') {
    console.error('[ponte] ECONNRESET: a rede derrubou uma conexão longa (hotspot?). O servidor segue de pé.');
    return;
  }
  throw e;
});

servidor.listen(PORTA, () => {
  console.log('');
  console.log('  CONSTELAÇÃO PAAPS · servidor-ponte');
  console.log(`  http://localhost:${PORTA}`);
  console.log(`  chave de API: ${CHAVE ? 'presente (execução real ligada)' : 'ausente (modo simulação)'}`);
  console.log('  para encerrar: feche esta janela.');
  console.log('');
});
