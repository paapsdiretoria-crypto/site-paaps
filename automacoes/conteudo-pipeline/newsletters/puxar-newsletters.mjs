#!/usr/bin/env node
/**
 * Puxa as newsletters recentes da caixa relacionamento@paaps.com.br (Outra Saúde, Senado
 * Notícias, financiamento de ONGs, etc.) e escreve um arquivo que o Radar lê como PRIMEIRO
 * insumo do ciclo, antes de qualquer busca na web.
 *
 * Reaproveita a mesma senha e o mesmo host/porta já testados em
 * automacoes/prospeccao-email/n8n/criar-credencial-imap.mjs (TITAN_SENHA em automacoes/.env).
 * Não pede nada novo à Mallu. Implementa um cliente IMAP mínimo em Node puro (sem dependência
 * nova pra instalar): LOGIN, SELECT, SEARCH por data, FETCH de cabeçalho + corpo, com
 * decodificação básica de MIME (multipart, quoted-printable, base64, HTML→texto).
 *
 * Uso:
 *   node automacoes/conteudo-pipeline/newsletters/puxar-newsletters.mjs [dias] [pasta-imap]
 *
 * Sem argumento: últimos 7 dias, pasta INBOX. Escreve em
 * conteudo/ciclos/<AAAA-MM-DD-de-hoje>/B0-newsletters.md
 *
 * Limitação conhecida: extração de texto de HTML é regex, não um parser de verdade. Serve
 * pra dar ao Radar o assunto e o conteúdo legível da newsletter, não pra reproduzir o
 * e-mail formatado. Se uma newsletter específica sair ilegível, abra-a no webmail e ajuste
 * a extração aqui — não invente conteúdo que a extração não trouxe.
 */

import { connect } from 'node:tls';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../..'); // .../SITE PAAPS

const env = Object.fromEntries(
  readFileSync(path.join(ROOT, 'automacoes/.env'), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')), l.slice(l.indexOf('=') + 1).trim()])
);

const USUARIO = 'relacionamento@paaps.com.br';
const HOST = 'imap.titan.email';
const PORTA = 993;
const senha = env.TITAN_SENHA;

if (!senha) {
  console.error('\nTITAN_SENHA não está em automacoes/.env.');
  console.error('Ver automacoes/prospeccao-email/n8n/criar-credencial-imap.mjs pros 3 passos.\n');
  process.exit(1);
}

const DIAS = Number(process.argv[2] || 7);
const PASTA_IMAP = process.argv[3] || 'INBOX';

// ---------------------------------------------------------------------------
// Cliente IMAP mínimo: LOGIN, SELECT, UID SEARCH, UID FETCH. Trata literais
// {n}\r\n<n bytes> corretamente, porque corpo de e-mail sempre chega assim.
// ---------------------------------------------------------------------------
class ImapClient {
  constructor(socket) {
    this.socket = socket;
    this.buf = Buffer.alloc(0);
    this.curLine = Buffer.alloc(0);
    this.literalRemaining = 0;
    this.lines = [];
    this.waiting = null;
    this.tagN = 0;
    socket.on('data', (d) => this._onData(d));
  }

  _onData(chunk) {
    this.buf = Buffer.concat([this.buf, chunk]);
    this._pump();
  }

  _pump() {
    for (;;) {
      if (this.literalRemaining > 0) {
        if (this.buf.length < this.literalRemaining) return;
        const lit = this.buf.subarray(0, this.literalRemaining);
        this.curLine = Buffer.concat([this.curLine, lit]);
        this.buf = this.buf.subarray(this.literalRemaining);
        this.literalRemaining = 0;
        continue;
      }
      const idx = this.buf.indexOf('\r\n');
      if (idx === -1) return;
      const lineBytes = this.buf.subarray(0, idx);
      this.buf = this.buf.subarray(idx + 2);
      this.curLine = Buffer.concat([this.curLine, lineBytes]);
      const tail = this.curLine.toString('binary');
      const m = tail.match(/\{(\d+)\}$/);
      if (m) {
        this.literalRemaining = parseInt(m[1], 10);
        this.curLine = Buffer.concat([this.curLine, Buffer.from('\r\n', 'binary')]);
        continue;
      }
      const finished = this.curLine;
      this.curLine = Buffer.alloc(0);
      this._handleLine(finished);
    }
  }

  _handleLine(buf) {
    this.lines.push(buf);
    if (this.waiting) {
      const head = buf.subarray(0, Math.min(buf.length, 40)).toString('binary');
      const re = new RegExp(`^${this.waiting.tag} (OK|NO|BAD)`);
      const m = head.match(re);
      if (m) {
        const collected = this.lines;
        this.lines = [];
        const w = this.waiting;
        this.waiting = null;
        w.resolve({ ok: m[1] === 'OK', status: m[1], lines: collected });
      }
    }
  }

  cmd(command) {
    const tag = `A${++this.tagN}`;
    return new Promise((resolve) => {
      this.waiting = { tag, resolve };
      this.lines = [];
      this.socket.write(`${tag} ${command}\r\n`, 'binary');
    });
  }
}

function conectar() {
  return new Promise((resolve, reject) => {
    const socket = connect({ host: HOST, port: PORTA, servername: HOST }, () => {
      // aguarda a saudação "* OK" antes de considerar pronto
      setTimeout(() => resolve(new ImapClient(socket)), 300);
    });
    socket.setTimeout(20000, () => reject(new Error('timeout conectando ao IMAP')));
    socket.on('error', reject);
  });
}

function dataImap(diasAtras) {
  const d = new Date(Date.now() - diasAtras * 86400000);
  const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${String(d.getDate()).padStart(2, '0')}-${meses[d.getMonth()]}-${d.getFullYear()}`;
}

// ---------------------------------------------------------------------------
// Decodificação MIME básica: quoted-printable, base64, e extração de texto
// legível de HTML (regex, não é parser de verdade — ver limitação no topo).
// ---------------------------------------------------------------------------
function decodeQuotedPrintable(s) {
  return s
    .replace(/=\r\n/g, '')
    .replace(/=([0-9A-Fa-f]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

function htmlParaTexto(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>|<\/div>|<\/tr>|<\/h[1-6]>/gi, '\n')
    .replace(/<a [^>]*href="([^"]+)"[^>]*>/gi, ' [$1] ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extrairHeader(headerRaw, nome) {
  // cabeçalho pode vir dobrado em várias linhas (continuação com espaço/tab no início)
  const unfolded = headerRaw.replace(/\r\n[ \t]+/g, ' ');
  const re = new RegExp(`^${nome}:\\s*(.*)$`, 'im');
  const m = unfolded.match(re);
  return m ? m[1].trim() : '';
}

// Todo o pipeline de extração trabalha em strings "binary" (1 char = 1 byte), porque é
// assim que o parser IMAP consegue fatiar literais por tamanho exato. Isso quer dizer que
// qualquer texto UTF-8 real (acento, emoji) chega como bytes soltos, não como o caractere
// certo. `toUtf8` é a conversão final, e só deve ser aplicada UMA vez, no fim da cadeia —
// aplicar duas vezes ou esquecer de aplicar é o que produz mojibake tipo "Ã§Ã£o".
function toUtf8(binaryStr) {
  return Buffer.from(binaryStr, 'binary').toString('utf8');
}

function decodeAssunto(raw) {
  // assunto pode vir em =?UTF-8?B?...?= (base64) ou =?UTF-8?Q?...?= (quoted-printable).
  // As duas branches devolvem string "binary" (bytes crus), pra ficar consistente com o
  // resto do pipeline — a conversão pra utf8 de verdade acontece uma vez só, no chamador.
  return raw.replace(/=\?([^?]+)\?([BbQq])\?([^?]*)\?=/g, (_, charset, enc, txt) => {
    try {
      if (enc.toUpperCase() === 'B') return Buffer.from(txt, 'base64').toString('binary');
      return decodeQuotedPrintable(txt.replace(/_/g, ' '));
    } catch {
      return txt;
    }
  });
}

function extrairCorpoLegivel(bodyRaw, contentType) {
  const isMultipart = /multipart\//i.test(contentType);
  if (!isMultipart) {
    return corpoDeUmaParte(bodyRaw, contentType);
  }
  const boundaryMatch = contentType.match(/boundary="?([^";]+)"?/i);
  if (!boundaryMatch) return htmlParaTexto(bodyRaw).slice(0, 4000);
  const boundary = boundaryMatch[1];
  const partes = bodyRaw.split(`--${boundary}`);
  let textoPlano = '';
  let textoHtml = '';
  for (const parte of partes) {
    if (!/content-type/i.test(parte)) continue;
    const [headerParte, ...restoArr] = parte.split(/\r?\n\r?\n/);
    const resto = restoArr.join('\n\n');
    const ct = extrairHeader(headerParte, 'Content-Type') || '';
    if (/text\/plain/i.test(ct) && !textoPlano) {
      textoPlano = corpoDeUmaParte(resto, headerParte);
    } else if (/text\/html/i.test(ct) && !textoHtml) {
      textoHtml = corpoDeUmaParte(resto, headerParte);
    }
  }
  // Muita plataforma de newsletter (Mailerlite, Mailchimp etc.) gera uma parte
  // text/plain que só diz "seu app não abre HTML, clique aqui" — curta e inútil como
  // pauta. Se a parte plain for curta demais, o conteúdo de verdade está no HTML.
  const plainParecePauta = textoPlano.replace(/\s+/g, ' ').trim().length > 300;
  const texto = plainParecePauta ? textoPlano : htmlParaTexto(textoHtml) || textoPlano;
  return texto.slice(0, 4000);
}

function corpoDeUmaParte(corpo, headerOuContentType) {
  const cte = (extrairHeader(headerOuContentType, 'Content-Transfer-Encoding') || '').toLowerCase();
  let decodificado = corpo;
  if (cte.includes('base64')) {
    try {
      // devolve "binary" (bytes crus), não utf8 direto — mantém consistência com o resto
      // do pipeline; a conversão final acontece uma vez só, lá no chamador.
      decodificado = Buffer.from(corpo.replace(/\s+/g, ''), 'base64').toString('binary');
    } catch {
      /* mantém como veio */
    }
  } else if (cte.includes('quoted-printable')) {
    decodificado = decodeQuotedPrintable(corpo);
  }
  if (/text\/html/i.test(headerOuContentType)) return htmlParaTexto(decodificado);
  return decodificado.trim();
}

// ---------------------------------------------------------------------------

async function main() {
  console.log(`Conectando em ${USUARIO} @ ${HOST}:${PORTA}...`);
  const c = await conectar();

  const login = await c.cmd(`LOGIN "${USUARIO}" "${senha.replace(/"/g, '\\"')}"`);
  if (!login.ok) {
    console.error('Login IMAP falhou:', login.lines.map((l) => l.toString('binary')).join(' | '));
    process.exit(1);
  }
  console.log('Login OK.');

  const select = await c.cmd(`SELECT "${PASTA_IMAP}"`);
  if (!select.ok) {
    console.error(`Não consegui abrir a pasta "${PASTA_IMAP}".`);
    process.exit(1);
  }

  const desde = dataImap(DIAS);
  const busca = await c.cmd(`UID SEARCH SINCE ${desde}`);
  const linhaSearch = busca.lines.find((l) => l.toString('binary').startsWith('* SEARCH'));
  const uids = linhaSearch
    ? linhaSearch.toString('binary').replace('* SEARCH', '').trim().split(/\s+/).filter(Boolean)
    : [];

  console.log(`${uids.length} mensagem(ns) desde ${desde} em "${PASTA_IMAP}".`);

  const mensagens = [];
  for (const uid of uids) {
    const r = await c.cmd(
      `UID FETCH ${uid} (BODY.PEEK[HEADER.FIELDS (FROM SUBJECT DATE CONTENT-TYPE)] BODY.PEEK[TEXT])`
    );
    const raw = Buffer.concat(r.lines).toString('binary');

    const headerMatch = raw.match(/HEADER\.FIELDS[^\]]*\]\s*\{?\d*\}?\r?\n([\s\S]*?)\r?\n\r?\n/i);
    const headerRaw = headerMatch ? headerMatch[1] : raw;

    const from = extrairHeader(headerRaw, 'From');
    const assuntoRaw = extrairHeader(headerRaw, 'Subject');
    const data = extrairHeader(headerRaw, 'Date');
    const contentType = extrairHeader(headerRaw, 'Content-Type') || 'text/plain';

    const bodyMatch = raw.match(/BODY\[TEXT\]\s*\{(\d+)\}\r?\n/i);
    let corpo = '';
    if (bodyMatch) {
      const inicio = bodyMatch.index + bodyMatch[0].length;
      const tamanho = parseInt(bodyMatch[1], 10);
      const bodyRaw = raw.slice(inicio, inicio + tamanho);
      corpo = extrairCorpoLegivel(bodyRaw, contentType);
    }

    if (!from && !assuntoRaw) continue; // fetch vazio/erro, pula

    // conversão binary→utf8 final e única, aqui, pra "From" (raro ter acento, mas pode vir
    // em encoded-word também), assunto decodificado e corpo.
    mensagens.push({
      from: toUtf8(decodeAssunto(from)),
      subject: toUtf8(decodeAssunto(assuntoRaw)),
      date: data,
      corpo: toUtf8(corpo),
    });
  }

  await c.cmd('LOGOUT');

  const hoje = new Date().toISOString().slice(0, 10);
  const pastaCiclo = path.join(ROOT, 'conteudo/ciclos', hoje);
  mkdirSync(pastaCiclo, { recursive: true });
  const destino = path.join(pastaCiclo, 'B0-newsletters.md');

  const corpoArquivo = [
    `# B0 · Newsletters — ciclo ${hoje}`,
    '',
    `Puxadas de \`${USUARIO}\`, pasta "${PASTA_IMAP}", últimos ${DIAS} dias. ${mensagens.length} mensagem(ns).`,
    '',
    'O Radar lê este arquivo primeiro, antes de qualquer busca na web (ver `radar.md`,',
    'seção de newsletters).',
    '',
    '---',
    '',
    ...mensagens.flatMap((m) => [
      `## ${m.subject || '(sem assunto)'}`,
      '',
      `**De:** ${m.from}`,
      `**Data:** ${m.date}`,
      '',
      m.corpo || '_(corpo não extraído — abrir no webmail se parecer relevante)_',
      '',
      '---',
      '',
    ]),
  ].join('\n');

  writeFileSync(destino, corpoArquivo, 'utf8');
  console.log(`\nEscrito: ${destino}`);
}

main().catch((e) => {
  console.error('\nFalhou:', e.message);
  process.exit(1);
});
