/**
 * Parte comum entre montar a leva agendada e mandar a prévia para a Mallu.
 *
 * Existe para que a prévia que ela lê e o e-mail que sai na segunda sejam construídos
 * pelo MESMO código. Se fossem dois caminhos diferentes, ela aprovaria uma coisa e a
 * prefeitura receberia outra.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
export const raiz = resolve(aqui, '../../..');
export const base = resolve(raiz, 'automacoes/prospeccao-email');

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

/** Negrito **x** e link [texto](url) markdown, na cor de destaque usada no molde. */
function inlineParaHtml(texto) {
  return texto
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#6b4a2c;">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#6b4a2c; text-decoration:underline;">$1</a>');
}

/**
 * Corpo em texto (parágrafos separados por linha em branco) para HTML de e-mail.
 * Bloco em que toda linha começa com "- " vira lista de checkmarks (mesmo desenho do
 * exemplo aprovado em personalizacao/exemplo-email-formula-oferta.html), o resto vira
 * parágrafo normal com negrito/link markdown convertidos.
 */
function corpoParaHtml(texto) {
  return texto
    .trim()
    .split(/\n\s*\n/)
    .map((bloco) => {
      const linhas = bloco.trim().split('\n');
      const ehLista = linhas.length > 0 && linhas.every((l) => /^-\s/.test(l.trim()));
      if (ehLista) {
        const itens = linhas
          .map((l) => l.trim().replace(/^-\s*(✓\s*)?/, ''))
          .map(
            (item, i, arr) => `<tr>
  <td width="22" valign="top" style="padding:0 10px ${i === arr.length - 1 ? 0 : 12}px 0; font-size:15px; line-height:1.68; color:#a9762f;">✓</td>
  <td style="padding:0 0 ${i === arr.length - 1 ? 0 : 12}px 0; font-size:15px; line-height:1.68; color:#3b2109;">${inlineParaHtml(item)}</td>
</tr>`
          )
          .join('\n');
        return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px 0;">
${itens}
</table>`;
      }
      return `<p style="margin:0 0 18px 0;">${inlineParaHtml(bloco.trim()).replace(/\n/g, '<br>')}</p>`;
    })
    .join('\n');
}

/**
 * Assunto e corpo saem do .md da carta, nunca do leva.json: a copy mora em um lugar só,
 * que é o arquivo que a Mallu leu e aprovou. O leva.json guarda só a logística.
 */
function lerCarta(pastaLeva, arquivo) {
  const texto = readFileSync(resolve(base, `levas/${pastaLeva}/${arquivo}`), 'utf8');
  const secao = (titulo) => {
    // \Z (fim de string em regex estilo Python) não existe em JS: vira "Z" literal, e a seção
    // Corpo (sempre a última do arquivo) nunca batia, a menos que o texto tivesse um "Z" maiúsculo
    // em algum lugar. Corrigido dividindo o arquivo por cabeçalho "## " em vez de regex com \Z.
    const partes = texto.split(/^## /m).slice(1);
    const parte = partes.find((p) => p === titulo || p.startsWith(`${titulo}\n`) || p.startsWith(`${titulo}\r\n`));
    if (!parte) throw new Error(`seção "## ${titulo}" não encontrada em ${arquivo}`);
    const quebra = parte.indexOf('\n');
    return (quebra === -1 ? '' : parte.slice(quebra + 1)).trim();
  };
  return { assunto: secao('Assunto').split('\n')[0].trim(), corpo: secao('Corpo') };
}

export function montarCartas(pastaLeva) {
  const leva = JSON.parse(readFileSync(resolve(base, `levas/${pastaLeva}/leva.json`), 'utf8'));
  const molde = readFileSync(resolve(base, 'template-email.html'), 'utf8');

  // A marca precisa existir uma vez só. Se aparecer duas (citada num comentário, por exemplo),
  // o replace troca a errada e o e-mail sai com a marca crua no corpo. Já aconteceu em 26/07/2026:
  // falhar aqui é muito melhor do que descobrir na caixa de entrada de uma prefeitura.
  const ocorrencias = molde.split(MARCA).length - 1;
  if (ocorrencias !== 1) {
    throw new Error(`template-email.html precisa conter ${MARCA} exatamente 1 vez; encontrei ${ocorrencias}`);
  }

  const cartas = leva.cartas.map((c) => {
    if (!c.para || !c.para.includes('@')) throw new Error(`carta sem e-mail de destino: ${c.lead}`);
    const { assunto, corpo } = lerCarta(pastaLeva, c.arquivo);

    // Rede de segurança: lacuna não preenchida jamais pode viajar até a caixa de uma prefeitura.
    const cru = corpo.match(/\[(cidade|nome_do_gestor|nome_da_secretaria|gancho_local)\]/);
    if (cru) throw new Error(`${c.arquivo} ainda tem a lacuna ${cru[0]} sem preencher`);

    return {
      lead: c.lead,
      leadPageId: c.leadPageId || null,
      para: c.para,
      assunto,
      html: molde.replace(MARCA, corpoParaHtml(corpo))
    };
  });

  return { leva, cartas };
}

/** O trecho de código que vira o nó "Cartas aprovadas" no n8n. */
export function codigoDoNo(cartas, pastaLeva) {
  return `// Cartas aprovadas no gate da Mallu. Geradas por montar-leva.mjs a partir de
// automacoes/prospeccao-email/levas/${pastaLeva}/. Não editar aqui: editar os arquivos no
// repositório e rodar o script de novo, senão o repositório e o n8n divergem.
const cartas = ${JSON.stringify(cartas, null, 2)};

// A URL da assinatura não termina em .jpg, então o HTTP Request não deduz o tipo e o anexo
// sai como application/octet-stream. Cliente de e-mail que recebe octet-stream costuma
// pendurar um anexo misterioso em vez de desenhar a imagem embutida. Tipo e nome forçados aqui.
const assinatura = {
  ...$input.first().binary.assinatura,
  mimeType: "image/jpeg",
  fileName: "assinatura-paaps.jpg",
  fileExtension: "jpg"
};
return cartas.map((c) => ({ json: c, binary: { assinatura } }));`;
}
