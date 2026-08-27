/**
 * Parte comum entre a prévia que a Mallu lê e a leva que sai de verdade.
 *
 * Existe pelo mesmo motivo da lib da prospecção: se a prévia e o envio fossem construídos
 * por dois caminhos diferentes, ela aprovaria uma coisa e o CRAS receberia outra.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
export const raiz = resolve(aqui, '../../..');
export const base = resolve(raiz, 'automacoes/pesquisa-tcc-bh');

/** Credenciais só do .env, nunca de arquivo commitado. */
export function lerEnv() {
  const env = Object.fromEntries(
    readFileSync(resolve(raiz, 'automacoes/.env'), 'utf8')
      .split('\n')
      .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
      .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
  );
  if (!env.N8N_API_URL || !env.N8N_API_KEY) {
    throw new Error('N8N_API_URL ou N8N_API_KEY ausente em automacoes/.env');
  }
  return env;
}

const MARCA = '{{CORPO}}';

function corpoParaHtml(texto) {
  // **assim** vira negrito. Serve para a ênfase que a Mallu digita em CAPS LOCK no rascunho:
  // caps dela é ênfase de quem escreve, não instrução de tipografia, e caixa alta no corpo de
  // um e-mail formal soa como grito.
  const negrito = (s) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return texto
    .trim()
    .split(/\n\s*\n/)
    .map((p) => `<p style="margin:0 0 16px 0;">${negrito(p.trim().replace(/\n/g, '<br>'))}</p>`)
    .join('\n');
}

function lerCarta() {
  const texto = readFileSync(resolve(base, 'carta-unidades.md'), 'utf8');
  const secao = (titulo) => {
    const m = texto.match(new RegExp(`^## ${titulo}\\s*$([\\s\\S]*?)(?=^## |\\Z)`, 'm'));
    if (!m) throw new Error(`seção "## ${titulo}" não encontrada em carta-unidades.md`);
    return m[1].trim();
  };
  return { assunto: secao('Assunto').split('\n')[0].trim(), corpo: secao('Corpo') };
}

/**
 * Monta um e-mail por unidade. Recusa a leva inteira se algo estiver por fechar: é muito
 * melhor falhar aqui do que descobrir a falha na caixa de entrada de um CRAS.
 */
export function montarCartas(opcoes = {}) {
  const leva = JSON.parse(readFileSync(resolve(base, 'unidades-bh.json'), 'utf8'));
  const molde = readFileSync(resolve(base, 'template-email-pesquisa.html'), 'utf8');

  const ocorrencias = molde.split(MARCA).length - 1;
  if (ocorrencias !== 1) {
    throw new Error(`template-email-pesquisa.html precisa conter a marca do corpo exatamente 1 vez; encontrei ${ocorrencias}`);
  }

  const { assunto: moldeAssunto, corpo: moldeCorpo } = lerCarta();

  // Lacuna em COLCHETES MAIÚSCULOS jamais pode viajar até uma unidade pública.
  // A prévia é a única que pode vê-las, e mesmo assim marcadas em amarelo, para a Mallu
  // conseguir ler o e-mail montado antes de ter todos os dados na mão.
  const LACUNA = /\[[A-ZÀ-Ú_]{3,}\]/;
  const lacuna = (moldeAssunto + moldeCorpo).match(LACUNA);
  if (lacuna && !opcoes.permitirLacunas) throw new Error(`a carta ainda tem a lacuna ${lacuna[0]} sem preencher`);

  // "pular": true tira a unidade da leva sem apagar o registro dela do JSON. Serve para a
  // unidade cujo endereço ainda não temos: a leva sai com as outras, e ela entra depois numa
  // segunda rodada, sem ninguém ter que reescrever a lista.
  const unidades = leva.unidades.filter((u) => !u.pular);

  const semEmail = unidades.filter((u) => !u.email || !u.email.includes('@'));
  if (semEmail.length && !opcoes.permitirLacunas) {
    throw new Error(
      `unidade sem e-mail em unidades-bh.json: ${semEmail.map((u) => u.unidade).join(', ')}. ` +
      `Preencha o endereço ou tire a unidade da leva.`
    );
  }

  const marcar = (t) => opcoes.permitirLacunas
    ? t.replace(new RegExp(LACUNA.source, 'g'), (m) => `<span style="background:#ffe27a;padding:1px 5px;border-radius:3px;font-weight:bold">${m} falta</span>`)
    : t;

  const cartas = unidades.map((u) => {
    const preencher = (t) => t.replaceAll('{{UNIDADE}}', u.unidade).replaceAll('{{TRATAMENTO}}', u.tratamento);
    const corpo = marcar(preencher(moldeCorpo));
    if (corpo.includes('{{')) throw new Error(`sobrou marca sem trocar em ${u.unidade}`);
    return {
      unidade: u.unidade,
      para: u.email,
      assunto: preencher(moldeAssunto),
      semEmail: !u.email || !u.email.includes('@'),
      html: molde.replace(MARCA, corpoParaHtml(corpo))
    };
  });

  return { leva, cartas };
}

/** O trecho que vira o nó "Preparar fila" no n8n. */
export function codigoDoNo(cartas) {
  return `// Cartas aprovadas no gate da Mallu. Geradas por montar-leva-pesquisa.mjs a partir de
// automacoes/pesquisa-tcc-bh/. Não editar aqui: editar os arquivos no repositório e rodar o
// script de novo, senão o repositório e o n8n divergem.
const cartas = ${JSON.stringify(cartas, null, 2)};

// Nenhuma das duas URLs termina na extensão certa, então o HTTP Request não deduz o tipo e
// os anexos saem como application/octet-stream, que o cliente de e-mail pendura como anexo
// misterioso em vez de desenhar embutido (a assinatura) ou nomear direito (a anuência).
// Tipo e nome forçados aqui, lendo de quem entregou cada um: "Buscar assinatura" e
// "Buscar anuência" rodam em sequência e cada item chega com os dois binários somados.
const assinatura = {
  ...$input.first().binary.assinatura,
  mimeType: "image/jpeg",
  fileName: "assinatura-pesquisa.jpg",
  fileExtension: "jpg"
};
const anuencia = {
  ...$input.first().binary.anuencia,
  mimeType: "application/pdf",
  fileName: "Carta de Anuencia - SUAS BH.pdf",
  fileExtension: "pdf"
};
return cartas.map((c) => ({ json: c, binary: { assinatura, anuencia } }));`;
}
