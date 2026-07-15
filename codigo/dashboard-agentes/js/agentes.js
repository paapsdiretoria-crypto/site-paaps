// Cadastro dos agentes da tripulação PAAPS.
// Esta é a única fonte da verdade do dashboard: para adicionar um agente novo
// à constelação, basta acrescentar um objeto neste array. A cena 3D, os tubos,
// o painel de ficha e a barra de progresso se montam sozinhos a partir daqui.
//
// Campos que a Mallu preenche/edita à mão:
//   nome, cargo, especialista, psicologia, missao
// Campos técnicos:
//   id ......... precisa bater com o nome do subagente em .claude/agents/<id>.md
//   estado ..... 'pronto' | 'parcial' | 'em-construcao'
//   trilha ..... etapas reais do agente; o progresso de 0% a 100% é medido nelas

export const AGENTES = [
  {
    // O agente já existe em .claude/agents/decifrador.md. Aqui ele aparece com o
    // nome de guerra que a Mallu pediu: na tela, quem fala é o próprio perfil.
    id: 'decifrador',
    nome: '@paaps.brasil',
    cargo: 'Decifrador · Arqueologia de Performance',
    especialista: 'Descobrir por que uma peça performou, não relatar que ela performou',
    estado: 'parcial',
    missao:
      'Escaneia os posts fixados e os últimos 16 posts do @paaps.brasil, reconstrói ' +
      'cada peça na íntegra (roteiro do carrossel transcrito, imagens, legenda, ' +
      'contexto de data) e cruza com as métricas reais. Foco extra em colaborações. ' +
      'Um post que performa é um encontro entre mensagem, forma e momento: separar os ' +
      'três é o erro que produz relatório inútil.',
    psicologia: [
      'Fala como o próprio perfil: primeira pessoa, sem distância de consultor',
      'Se um achado não muda uma decisão de escrita, imagem ou data, ele não entra',
      'Não credita tudo à data (vira calendário) nem tudo ao texto (vira clone que morre)',
      'Prefere abortar a estimar: dado zerado não vira suposição'
    ],
    tokens: 0,
    // Trilha real, lida de .claude/agents/decifrador.md.
    trilha: [
      'Pré-voo: o acesso ao dado está vivo?',
      '1.1 Definindo o conjunto de posts',
      '1.2 Puxando as métricas',
      '1.3 Validando antes de acreditar',
      '1.4 Ranqueando sem reduzir a um número só',
      '1.5 Marcando as colaborações',
      '2.1 Transcrevendo o roteiro literal dos carrosséis',
      '2.2 Extraindo a mensagem central',
      '2.3 Lendo as imagens escolhidas',
      '2.4 Reconstruindo o momento da publicação',
      '2.5 Lendo o que os comentários revelam',
      'Fechando as fichas para o Radar'
    ],
    // Bloqueio conhecido, declarado na tela em vez de escondido no código.
    alerta:
      'Bloqueado pelo Windsor. O plano Forever Free dá 1 fonte e 1 conta, e há 4 fontes ' +
      'e 6 contas conectadas. Estourado o limite, o Windsor não dá erro: devolve a frase ' +
      'de upsell nos campos de texto e zero em todos os números. Não é login desatualizado, ' +
      'e reconectar OAuth não resolve. Saídas: desconectar até sobrar só instagram → ' +
      'paaps.brasil, ou assinar o Basic. As Etapas 03+ do agente só serão escritas depois ' +
      'da primeira execução com dado real.'
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
  ['decifrador', 'radar'],
  ['radar', 'tecela'],
  ['tecela', 'narrador']
];
