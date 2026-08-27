/**
 * Escreve em previa/ o e-mail exato que cada unidade vai receber, em HTML, para a Mallu
 * abrir no navegador antes de aprovar. Não envia nada e não fala com o n8n.
 *
 * Rodar:  node automacoes/pesquisa-tcc-bh/n8n/previa-pesquisa.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { montarCartas, base } from './lib-pesquisa.mjs';

const { cartas } = montarCartas({ permitirLacunas: true });
const pasta = resolve(base, 'previa');
mkdirSync(pasta, { recursive: true });

for (const c of cartas) {
  const arquivo = c.unidade.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
  // A assinatura é servida pelo n8n em runtime; na prévia ela vira o arquivo local.
  // Alvo é o src inteiro, não o "cid:assinatura" solto: o texto solto aparece também no
  // comentário do molde, e replace de string troca só a primeira ocorrência, que seria o
  // comentário. A prévia sairia sem assinatura e o erro passaria por design.
  const ALVO = 'src="cid:assinatura"';
  if (!c.html.includes(ALVO)) throw new Error(`o molde perdeu ${ALVO}; a assinatura não entraria no e-mail`);
  const html = c.html.replaceAll(ALVO, 'src="../../../insumos-compartilhados/assinatura-email/assinatura-pesquisa-mallu.jpg"');
  // A prévia é HTML puro, sem cliente de e-mail de verdade por trás, então não há como
  // mostrar um anexo de PDF de fato. Uma faixa avisa que ele vai junto, para não parecer
  // que a carta de anuência ficou de fora do envio real.
  const avisoAnexo = `<div style="font:12px Helvetica,Arial;padding:8px 14px;background:#eef6ea;border-top:1px solid #cfe3c7;color:#3b6b2c">📎 Vai anexado como PDF: <b>Carta de Anuência - SUAS BH.pdf</b> (a prévia não mostra o anexo, só o e-mail)</div>`;
  writeFileSync(resolve(pasta, `${arquivo}.html`), `<!doctype html><meta charset="utf-8"><title>${c.assunto}</title>\n<div style="font:13px Helvetica,Arial;padding:10px 14px;background:#fffbe6;border-bottom:1px solid #e6d9a8"><b>Para:</b> ${c.para || '<span style=\"background:#ffe27a;padding:1px 5px\">FALTA O E-MAIL</span>'} &nbsp;&nbsp; <b>Assunto:</b> ${c.assunto}</div>\n${html}\n${avisoAnexo}`);
  console.log(`${c.unidade}  ->  ${c.para}`);
}
console.log(`\n${cartas.length} prévias em automacoes/pesquisa-tcc-bh/previa/`);
