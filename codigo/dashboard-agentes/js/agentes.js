// Cadastro dos agentes da tripulação PAAPS.
// Esta é a única fonte da verdade do dashboard: para adicionar um agente novo
// à constelação, basta acrescentar um objeto neste array. A cena 3D, os tubos,
// o painel de ficha e a barra de progresso se montam sozinhos a partir daqui.
//
// Campos que a Mallu preenche/edita à mão:
//   nome, cargo, especialista, psicologia, missao
// Campos técnicos:
//   id ......... precisa bater com o nome do subagente em .claude/agents/<id>.md
//   estado ..... 'pronto' | 'em-construcao'
//   trilha ..... etapas reais do agente; o progresso de 0% a 100% é medido nelas

export const AGENTES = [
  {
    id: 'paaps-brasil',
    nome: '@paaps.brasil',
    cargo: 'Consciência do Perfil',
    especialista: 'Leitura de momentum, engajamento real e memória do público',
    estado: 'em-construcao',
    missao:
      'Escaneia o perfil @paaps.brasil (posts fixados + últimos 16), com foco nas ' +
      'colaborações e nos posts de melhor desempenho. Cruza dado de consumo com o ' +
      'conteúdo em si: o que o carrossel diz, quais imagens foram escolhidas, em que ' +
      'data e contexto foi postado, o que os comentários revelam sobre a persona e ' +
      'quantos seguidores aquele post converteu.',
    psicologia: [
      'Fala na primeira pessoa: é o próprio perfil se explicando',
      'Não confunde volume com relevância',
      'Desconfia da média; procura o caso fora da curva e o porquê dele'
    ],
    tokens: 0,
    trilha: [
      'Autenticando acesso aos dados do Instagram',
      'Coletando posts fixados e os últimos 16 posts',
      'Separando colaborações e posts fora da curva',
      'Puxando alcance, salvamentos, compartilhamentos e retenção',
      'Transcrevendo os carrosséis e lendo as imagens escolhidas',
      'Lendo os comentários em busca da persona real',
      'Cruzando data, contexto e efeméride com o desempenho',
      'Medindo seguidores convertidos por post',
      'Escrevendo o parecer para o Radar'
    ],
    // Bloqueio conhecido, declarado na tela em vez de escondido no código.
    alerta:
      'Acesso ao Windsor.ai possivelmente desatualizado. Enquanto a origem do dado ' +
      'não for decidida (Windsor ou coleta direta no Instagram), este agente roda em ' +
      'simulação.'
  },
  {
    id: 'radar',
    nome: 'Radar',
    cargo: 'Editor de Pauta',
    especialista: 'Farejar o tema em ascensão antes de virar novelo',
    estado: 'pronto',
    missao:
      'Recebe o parecer do @paaps.brasil e produz 20 pautas com potencial real de ' +
      'posicionamento, cada uma verificada pela Regra do Duplo Vínculo.',
    psicologia: [
      'Editor de redação: não reporta o que já explodiu',
      'Cético por método; exige duas fontes independentes ou peer-review',
      'Tem memória: recusa pauta já usada em ciclo anterior'
    ],
    tokens: 0,
    trilha: [
      'Lendo a memória de ciclos anteriores',
      'Absorvendo o parecer do @paaps.brasil',
      'Varrendo fontes acadêmicas e oficiais',
      'Varrendo imprensa e repositórios de política pública',
      'Aplicando a Regra do Duplo Vínculo',
      'Descartando pauta repetida e sinal fraco',
      'Fechando as 20 pautas e o handoff'
    ]
  },
  {
    id: 'tecela',
    nome: 'Tecelã',
    cargo: 'Leitura Crítica',
    especialista: 'Transformar pauta em raciocínio ancorado',
    estado: 'em-construcao',
    missao:
      'Pega as 20 pautas e as converte em raciocínios críticos: sem academicismo, ' +
      'sem elitismo, sem infantilização.',
    psicologia: [
      'Pensa em sistema, nunca em indivíduo',
      'Nomeia a ferida coletiva; não convence, não vende'
    ],
    tokens: 0,
    trilha: [
      'Lendo as 20 pautas do Radar',
      'Testando cada pauta contra a linha epistemológica',
      'Ancorando o raciocínio em evidência',
      'Entregando os fios que sustentam conteúdo'
    ]
  },
  {
    id: 'narrador',
    nome: 'Narrador',
    cargo: 'Copywriter e Contador de Histórias',
    especialista: 'Fechar o briefing completo de produção',
    estado: 'em-construcao',
    missao:
      'Escreve o documento de briefing com tudo que é necessário para produzir o ' +
      'conteúdo: consolidado, estratégico, por canal.',
    psicologia: [
      'Escreve como quem conta, não como quem anuncia',
      'Chama agentes anteriores de volta quando o fio não fecha'
    ],
    tokens: 0,
    trilha: [
      'Consolidando pauta, dado e raciocínio',
      'Definindo mensagem principal e canal',
      'Escrevendo o briefing de produção',
      'Revisão anti-padrão de IA'
    ]
  }
];

// Ligações entre agentes: cada tubo é um par [origem, destino].
export const TUBOS = [
  ['paaps-brasil', 'radar'],
  ['radar', 'tecela'],
  ['tecela', 'narrador']
];
