/**
 * Imprime em JSON as cartas da leva real (mesma função que monta o envio de verdade),
 * para o serviço de sincronização com o Titan reconstruir a MESMA mensagem que saiu, sem
 * duplicar lógica de template em Python.
 *
 * Não fala com o n8n, não envia nada: só lê os arquivos locais e monta.
 *
 * Rodar:  node automacoes/pesquisa-tcc-bh/n8n/exportar-cartas-json.mjs
 */

import { montarCartas } from './lib-pesquisa.mjs';

const { cartas } = montarCartas();
process.stdout.write(JSON.stringify(cartas));
