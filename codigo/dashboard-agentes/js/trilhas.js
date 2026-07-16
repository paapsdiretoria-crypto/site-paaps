// A trilha de cada agente: as etapas que ele de fato percorre.
//
// O Notion guarda o roster e a topologia, mas não guarda etapa. Estas trilhas
// foram DERIVADAS do corpo de cada `.claude/agents/*.md`, não inventadas: cada
// etapa aqui corresponde a algo que o agente já declara que faz. Os agentes
// anunciam a etapa em que entram (linha `>>> ETAPA <id>`), e a ponte lê esse
// anúncio para mover a barra. É isso que faz o progresso ser medido e não
// estimado por cronômetro.
//
// Se você mudar a trilha aqui, mude o anúncio no .md do agente também: os dois
// precisam falar dos mesmos ids, senão a barra trava.

export const TRILHAS = {
  'paaps-brasil': {
    // Fonte: paaps-brasil.md, "Pré-voo" + "ETAPA 01" + "ETAPA 02".
    etapas: [
      { id: 'pre-voo', texto: 'Pré-voo: o acesso ao dado está vivo?' },
      { id: '1.1', texto: 'Definindo o conjunto de posts' },
      { id: '1.2', texto: 'Puxando as métricas' },
      { id: '1.3', texto: 'Validando antes de acreditar' },
      { id: '1.4', texto: 'Ranqueando sem reduzir a um número só' },
      { id: '1.5', texto: 'Marcando as colaborações' },
      { id: '2.1', texto: 'Transcrevendo o roteiro literal dos carrosséis' },
      { id: '2.2', texto: 'Extraindo a mensagem central' },
      { id: '2.3', texto: 'Lendo as imagens escolhidas' },
      { id: '2.4', texto: 'Reconstruindo o momento da publicação' },
      { id: '2.5', texto: 'Lendo o que os comentários revelam' }
    ],
    alerta:
      'Etapas 03+ ainda não escritas: serão construídas com a Mallu depois da primeira ' +
      'execução real, sobre o que os dados revelarem. O pré-voo aborta se o Windsor ' +
      'devolver a mensagem de limite de plano em vez de dados.'
  },

  radar: {
    // Fonte: radar.md, "Antes de começar", "O que você busca" (os 4 blocos de
    // escopo), "Protocolo de verificação", "Parâmetro de aprovação", "Entrega".
    etapas: [
      { id: 'memoria', texto: 'Lendo a memória: que pautas já foram usadas' },
      { id: 'politica', texto: 'Varrendo política e legislação' },
      { id: 'pesquisas', texto: 'Varrendo pesquisas e relatórios' },
      { id: 'viral', texto: 'Varrendo viral e cultura nos perfis de referência' },
      { id: 'geopolitica', texto: 'Varrendo geopolítica e conjuntura' },
      { id: 'duplo-vinculo', texto: 'Aplicando a Regra do Duplo Vínculo' },
      { id: 'aprovacao', texto: 'Aplicando o parâmetro de aprovação' },
      { id: 'campos', texto: 'Escrevendo os 6 campos das 20 pautas' },
      { id: 'priorizacao', texto: 'Montando a priorização e as observações à Tecelã' },
      { id: 'entrega', texto: 'Salvando o ciclo e atualizando a memória' }
    ]
  },

  tecela: {
    // Fonte: tecela.md, "Como você tece: os cinco movimentos". O próprio agente
    // diz "este é o seu procedimento, não pule etapa": é trilha de verdade.
    etapas: [
      { id: 'recebe', texto: 'Lendo o Radar e o @paaps.brasil' },
      { id: 'm1', texto: '1. Desnaturalizar: desde quando isso é assim?' },
      { id: 'm2', texto: '2. Nomear a contradição: que conflito move isso?' },
      { id: 'm3', texto: '3. Reconstituir a totalidade: qual o lugar disto no todo?' },
      { id: 'm4', texto: '4. Achar as mediações: o que está entre uma coisa e outra?' },
      { id: 'm5', texto: '5. Tomar o movimento: o que isto está virando?' },
      { id: 'entrega', texto: 'Entregando os fios que sustentam a peça' }
    ]
  },

  'copywriter-paaps': {
    // Fonte: copywriter-paaps.md, "O que você recebe", "Como você escreve a
    // primeira versão", "Estrutura", "Entrega".
    etapas: [
      { id: 'tecela', texto: 'Lendo o raciocínio da Tecelã' },
      { id: 'radar', texto: 'Lendo o factual e as fontes do Radar' },
      { id: 'corpus', texto: 'Pedindo o corpus ao @paaps.brasil: o que já converteu' },
      { id: 'eixo', texto: 'Definindo o eixo e a peça anterior de referência de forma' },
      { id: 'capa', texto: 'Escrevendo a capa: uma tensão, não uma informação' },
      { id: 'argumento', texto: 'Escrevendo a lógica geral do argumento' },
      // O agente PARA aqui por regra dura e espera a Mallu. Não é travamento.
      { id: 'primeira-rodada', texto: 'Entregando a primeira rodada', portao: true },
      { id: 'slides', texto: 'Desenvolvendo os slides 2 a N' },
      { id: 'virada', texto: 'Escrevendo a virada e a proposição' },
      { id: 'legenda', texto: 'Escrevendo a legenda e as referências' },
      { id: 'entrega', texto: 'Salvando e reportando o eixo e onde a Tecelã ficou apertada' }
    ],
    alerta:
      'Regra dura do agente: ele entrega só a primeira rodada (capa + lógica do argumento) ' +
      'e PARA, aguardando a validação da Mallu. O astronauta fica em "aguardando Mallu", ' +
      'não travado.'
  },

  'buscador-fotos': {
    // Fonte: buscador-fotos.md, "MODO 1: escolher fotos do PhotoBank" (1.1 a 1.5).
    // MODO 2 (alimentar o PhotoBank pelo Flickr) é o desvio de quando falta foto:
    // fica de fora da trilha principal para o progresso não mentir sobre o que
    // é o caminho comum no fluxo de carrossel.
    etapas: [
      { id: '1.1', texto: 'Lendo o carrossel como quem vai ilustrar' },
      { id: '1.2', texto: 'Buscando no PhotoBank' },
      { id: '1.3', texto: 'Julgando o contexto: a foto carrega a estrutura do argumento' },
      { id: '1.4', texto: 'Checando repetição (não repetir foto em 60 dias)' },
      { id: '1.5', texto: 'Checando licença e exposição de pessoa identificável' },
      { id: 'entrega', texto: 'Entregando uma foto por slide, com URL, crédito e licença' }
    ],
    alerta:
      'Se o PhotoBank não tiver a foto certa, o agente entra no MODO 2 (busca no ' +
      'Flickr do Ministério da Saúde e cadastra a foto nova). Esse desvio não está na ' +
      'barra: a trilha mostra o caminho comum, de escolha no acervo.'
  },

  'aplicador-visual': {
    // Fonte: aplicador-visual.md, "Passo a passo (MCP Canva)", "Inserção de foto",
    // "Anti-padrões", a chamada ao critico-design e "Entrega final: Drive".
    etapas: [
      { id: 'recebe', texto: 'Lendo o texto do Copywriter e as fotos do Buscador' },
      { id: 'copia', texto: 'Copiando o template no Canva (DAHLWb1s8U0)' },
      { id: 'texto', texto: 'Aplicando o texto com find_and_replace_text (preserva a cor)' },
      { id: 'fotos', texto: 'Inserindo as fotos por tipo de slide' },
      { id: 'identidade', texto: 'Conferindo paleta, League Spartan e os 3 modos visuais' },
      { id: 'anti-padroes', texto: 'Checando os anti-padrões de reprovação automática' },
      { id: 'critico', texto: 'Chamando o critico-design para auditar antes de entregar' },
      { id: 'export', texto: 'Exportando os slides em PNG' },
      { id: 'drive', texto: 'Entregando no Drive, em pasta própria dentro do mês atual' }
    ],
    alerta:
      'O filtro P&B é passo manual: não existe no MCP do Canva e precisa ser declarado ' +
      'na entrega. O agente não reescreve texto nem troca foto por conta própria: devolve ' +
      'ao Copywriter ou ao Buscador.'
  }
};
