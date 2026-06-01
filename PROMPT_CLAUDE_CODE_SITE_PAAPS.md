Você é uma desenvolvedora web sênior e designer especializada em sites institucionais para o setor de impacto social brasileiro. Sua missão é construir o site completo do PAAPS em HTML/CSS/JavaScript puro, sem frameworks, sem bibliotecas externas além do Google Fonts. O site deve ser totalmente estático, hospedável no HostGator via FTP.

═══════════════════════════════════════
PASTAS DE ASSETS REAIS NO COMPUTADOR — ONDE COLETAR PNGs E FOTOS (BLOCO DE REFERÊNCIA — LEIA E ACESSE ESTAS PASTAS)
═══════════════════════════════════════
Todos os arquivos visuais reais do PAAPS já existem no computador, dentro da pasta raiz do projeto "/Users/mac/SITE PAAPS/". ACESSE estas pastas exatas para coletar os PNGs, JPEGs e fotos necessários para esta home. NÃO invente caminhos, NÃO fabrique imagens: use os arquivos abaixo.

LOGO PAAPS (para gerar o logo.png da raiz — height 48px no header, 40px no footer):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/01 - Logo/01 - Logo sem descritivo/"
  - "Paaps - Logo marrom-8.png"            (logo marrom — usar no header sobre fundo bege)
  - "Paaps - Logo branco-8.png"            (logo branco — usar no footer sobre fundo marrom)
  - "Paaps - Logo marrom + colorido-8.png" (versão com bolinhas coloridas)
  - "Paaps - Logo branco + colorido-8.png"
Logo com descritivo (caso precise da versão com tagline):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/01 - Logo/02 - Logo com descritivo/"

PONTINHOS / BOLINHAS COLORIDAS (os marcadores decorativos amarelo/terracota/oliva/marrom):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/06 - Pontinhos/"
  - "Paaps - Pontinhos colorido -8.png", "Paaps - Pontinhos marrom-8.png", "Paaps - Pontinhos branco-8.png", entre outros.

TEXTURAS (para o noise/textura sutil de fundo e seções):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/04 - Texturas/"
  (Texturas 1 a 5 nas cores: marrom, vermelho, amarelo, verde, lilás, cinza, branco)

GRADIENTES:
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/05 - Gradiente/"

TEMPLATES DE LAYOUT (referência de composição visual):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/07 - Template/"

PALETA DE COR (referência visual oficial da paleta):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/03 - Paleta de Cor/Paaps - Paleta de Cor.jpg"

TIPOGRAFIA (arquivos das fontes oficiais — League Spartan e Helvética):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/02 - Tipografia/"

LOGO ECOA (para o link "ECOA" do rodapé, se necessário):
"/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/01a - Logo Ecoa/"

APLICAÇÃO DA IDENTIDADE VISUAL (mockups e exemplos de aplicação real da marca — usar como referência de estilo e como peças visuais):
"/Users/mac/SITE PAAPS/INSUMOS/APLICAÇÃO DA ID. VISUAL/"
  - "WhatsApp Image 2026-05-24 at 17.37.58.jpeg" e demais .jpeg desta pasta.

FOTOS REAIS (para os blocos foto-placeholder do hero, case e seções — substituir placeholders por estas fotos quando indicado):
"/Users/mac/SITE PAAPS/INSUMOS/FOTOS/"
  - "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/Case de Bela Vista de Minas/"  → fotos do case (Seção 7). Use os arquivos .JPG/.jpg (ex.: "bela-vista3.jpg", "PHOTO-2025-09-19-17-02-45.jpg", "IMG_2450.JPG"); ignore .HEIC e .MOV ou converta os .HEIC para .jpg antes de usar.
  - "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/FOTOS BVMG ISAAC/"            → banco amplo de fotos profissionais de Bela Vista de Minas (208 arquivos .JPG) — boa fonte para o hero e seções de território.
  - "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/MÃES ATÍPICAS RJ/"           → fotos de projeto com população (.jpg).
  - "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/ECOA FOTOS/"                 → fotos da comunidade ECOA (.png).
  - "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/CRAFTSAPIENS (MUNDO DIGITAL)/" → fotos do universo digital (.png/.jpg).
  - "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/OUTRAS FOTOS/"              → fotos diversas (.jpg/.jpeg/.png).

LOGOS DE CLIENTES E PARCEIROS (PNGs para a esteira de logos da Seção 4 / prova social):
"/Users/mac/SITE PAAPS/NOSSOS CLIENTES E PARCEIROS/"
  - "MODELO PROPOSTA PAAPS.png" e "MODELO PROPOSTA PAAPS-2.png" a "MODELO PROPOSTA PAAPS-8.png".
  NOTA: quando NÃO houver um arquivo de logo individual de um cliente específico nesta pasta, renderize o nome do cliente em texto (League Spartan), exatamente como instruído na seção da esteira — nunca fabrique um logo.

CAMISETA PAAPS (fotos da camiseta da equipe — usar como peça de presença territorial / equipe, se fizer sentido):
"/Users/mac/SITE PAAPS/NOSSA CAMISETA PAAPS/"
  - "2.jpg", "3.jpg", "4.jpg", "5.jpg".

DOCUMENTOS-BASE (contexto de marca, posicionamento e pesquisa — leitura de referência, não são imagens):
"/Users/mac/SITE PAAPS/DOCX BASE/"
  - "manual_marca_posicionamento_paaps.docx"
  - "paaps_pesquisa_mercado.docx"

REGRA DE USO DESTE BLOCO: copie os arquivos que for usar para dentro de "paaps-site/imagens/" (e o logo escolhido para "paaps-site/logo.png" na raiz), referenciando-os no HTML por caminho relativo. NÃO altere os arquivos originais nas pastas acima — apenas copie o que precisar.

═══════════════════════════════════════
PROTOCOLO DE EXECUÇÃO À PROVA DE ERROS — LEIA ANTES DE QUALQUER CÓDIGO
═══════════════════════════════════════
Antes de gerar qualquer arquivo, internalize estas travas. Elas se repetem ao longo do prompt de propósito — não as ignore por já tê-las lido.
TRAVA 1 — FIDELIDADE LEXICAL: Use EXCLUSIVAMENTE os nomes de serviços, descrições, números e nomes de clientes que constam neste prompt. NÃO parafraseie descrições de serviço. NÃO invente clientes, percentuais ou metodologias. Se um dado não está aqui, ele não existe no site.
TRAVA 2 — VOCABULÁRIO PROIBIDO (bloqueio absoluto): NUNCA escreva, em nenhum arquivo, copy, alt-text, comentário ou placeholder: GovTech, startup, consultoria, mindset, escuta ativa, empoderamento, alta performance, virada de chave, gatilhos mentais, escala, leads, solução disruptiva, inovação que transforma vidas. NÃO use a estrutura de frase "não é X, é Y" em nenhuma headline ou parágrafo.
TRAVA 3 — SEM METÁFORA DE GUERRA OU COMPETIÇÃO: nenhuma copy pode usar batalha, conquista, território como disputa, arma, linha de frente como combate. "Território" aqui significa território de cuidado e presença — nunca disputa.
TRAVA 4 — ENQUADRAMENTO ESTRUTURAL: toda copy parte do sistema que adoece coletivamente, nunca do mérito ou da superação individual. O PAAPS cuida de quem sustenta a rede pública — não "empodera vencedores".
TRAVA 5 — FIDELIDADE VISUAL: paleta e tipografia são fechadas. NÃO introduza nenhuma cor fora da paleta declarada. NÃO troque as fontes.
═══════════════════════════════════════
IDENTIDADE: QUEM É O PAAPS
═══════════════════════════════════════
O PAAPS é um coletivo de psicólogas sociais e sistêmicas especializadas em saúde mental coletiva como política pública. Não é uma consultoria. Não é uma startup. Não é uma ONG. É uma equipe técnica especializada que entra no território, vincula com quem está lá e trabalha junto — com método, com presença e com comprometimento de longo prazo.
NUNCA use os termos: GovTech, startup, consultoria, mindset, escuta ativa, empoderamento.
Tagline oficial: "A rede de saúde mental para as políticas públicas do futuro."
Frase de posicionamento: "Quem cuida de quem faz a rede pública acontecer?"
O PAAPS existe desde 2014 e é operado pela DIGGING DESENVOLVIMENTO E CAPACITAÇÃO ORGANIZACIONAL E INDIVIDUAL LTDA — CNPJ 05.983.700/0001-67.
Email institucional: paaps@digging.com.br
WhatsApp: https://wa.me/5511995231724
Instagram: @paaps.brasil
RESULTADOS REAIS (MVP Bela Vista de Minas / Desterro do Melo, MG — 5 meses):
- +56% de aderência em processos de psicoterapia de servidoras públicas
- +150% de aderência em atividades e oficinas grupais
- +130h de ações e intervenções grupais
- +400h de Plantão Psicológico disponibilizados
═══════════════════════════════════════
KPIs DE IMPACTO PERCEBIDO PELAS EQUIPES — DADOS DE PESQUISA INTERNA (usar na seção de Case e/ou em destaque numérico)
═══════════════════════════════════════
Estes são os indicadores de percepção das equipes atendidas, medidos junto às equipes de programas sociais e políticas públicas. São DIFERENTES dos números de aderência/horas acima — e somam credibilidade. Use-os exatamente assim, sem arredondar nem inventar:
Frase de introdução obrigatória ao bloco (use literal ou muito próxima):
"Nossos projetos com as equipes de programas sociais e políticas públicas apresentam, em média:"
- 56% — "se sentem mais seguros para a execução do seu trabalho no dia a dia."
- +150% — "de crescimento na aderência de servidores em atividades e oficinas grupais — em 5 meses de PAAPS."
- 98% — "das equipes afirmam estarem mais colaborativas no dia a dia, e o trabalho estar sendo mais leve."
- 100% — "afirma reconhecer mudanças expressivas em pelo menos 1 de seus colegas de trabalho."
NOTA DE USO: O número 56% aparece em dois contextos distintos (aderência à psicoterapia E sensação de segurança na execução do trabalho). NÃO os funda. Quando usar o bloco de percepção das equipes, mantenha o enunciado de "segurança para execução do trabalho". Quando usar o bloco de aderência do MVP, mantenha "aderência à psicoterapia de servidoras".
═══════════════════════════════════════
CLIENTES E PARCEIROS — LISTA COMPLETA REAL (usar na esteira de logos e/ou seção de prova social)
═══════════════════════════════════════
Use a lista real e completa. NÃO invente logos nem omita os abaixo. Quando não houver arquivo de logo, renderize o nome em texto (League Spartan) — nunca um logo fabricado.
[REFERÊNCIA DE PASTA — ADIÇÃO: os PNGs de clientes/parceiros estão em "/Users/mac/SITE PAAPS/NOSSOS CLIENTES E PARCEIROS/". Acesse esta pasta para coletar os logos disponíveis; para os clientes sem arquivo de logo nela, renderize o nome em texto (League Spartan), como já instruído.]
Prefeituras e poder público:
- Prefeitura de Bela Vista de Minas (MG)
- Prefeitura de Desterro do Melo (MG)
Institutos, ONGs e redes de assistência:
- Beneficência Portuguesa de São Paulo (BP)
- Rede Divina Providência (BH) — Lar dos Meninos, CEDIPRO e Lar dos Idosos
- Associação Allos
- Programa Afluentes — Empresa Águas do Rio
Empresas e parceiros corporativos:
- Boehringer Ingelheim
- Grupo Boticário
- Cosan
- Raízen
- Signify (Philips)
- ComBio Energias Renováveis
- Jive
- Motiva
- Rodobens
- Globenet
- Origami
- PROMIP — Manejo Integrado de Pragas
- SP Ventures
- Neolaw
Assinatura da seção de prova social (texto grande, estilo institucional):
"Criação e implementação de projetos em psicologia e saúde coletiva."
E a chamada que abre a seção: "Quem já confiou sua equipe em nossas mãos:"
═══════════════════════════════════════
OS SERVIÇOS — NOMES E DESCRIÇÕES EXATAS
═══════════════════════════════════════
PRODUTO 1: PROGRAMA PAAPS
Para prefeituras, ONGs e empresas que querem cuidado contínuo das suas equipes. Composto por três dispositivos integrados:
1. GRUPOS TERAPÊUTICOS
Dispositivo contínuo de cuidado psicológico integrado à rotina institucional. O grupo processa coletivamente o que adoece em silêncio — nomeia o que é vivido mas não dito, elabora impactos emocionais compartilhados e sustenta o trabalho no tempo. Conduzido por psicólogas especializadas em Psicologia Social-Comunitária. Metodologia: Grupos Operativos e Psicodrama. Formados por afinidade, setor ou equipe — sempre após diagnóstico territorial profundo. A composição dos grupos (por afinidade, por equipe, por setor, ou recortes como grupo de mulheres ou grupo de Agentes Comunitários de Saúde) é definida por análise de prioridade: onde o sofrimento coletivo está mais sensível e os conflitos mais presentes.
2. PLANTÃO PSICOLÓGICO NA REDE
Dispositivo itinerante de acolhimento qualificado no tempo real do trabalho. É um momento de escuta individual, qualificada, conduzida por profissionais treinadas em metodologias de plantão psicológico contextualizado, para situações emergenciais ou pontuais que exigem acolhimento mais imediato. Funciona na borda entre o não-dito e o urgente — legitima o sofrimento, reorganiza decisões, abre porta para cuidados mais intensivos. Circula pelos equipamentos públicos da cidade. Necessita de 2 a 3 horas de antecedência de aviso e atende em até 48h, presencial ou online. Conduzido por psicólogas com treinamento específico para esta modalidade.
3. CAPACITAÇÕES VIVENCIAIS PARA SERVIDORAS
O grupo não recebe soluções prontas. Ele produz junto. Metodologia dos Grupos Operativos articulada à Psicologia Social-Comunitária latino-americana. As capacitações são pensadas para serem rotineiras e frequentes — não eventos isolados — e funcionam aliando e criando vínculo entre diferentes setores. O conhecimento é sempre coconstruído a partir das vivências que já existem no território: nunca a partir de quem "já sabe" ensinando quem "não sabe". A marca é o aprender pelo sentido e pelo sentimento de experienciar a vivência, não pela teoria abstrata. Formato: encontros únicos (1h30 a 2h) ou ciclos de até 6 encontros.
   EXEMPLOS REAIS DE TEMAS DE CAPACITAÇÃO (usar estes — são mais precisos que qualquer genérico; renderize como lista de exemplos vivos, deixando claro que novos temas são coconstruídos conforme a realidade do município):
   - Temperamentos humanos — traça tipos psicológicos de forma didática para aprender a lidar com a diferença entre o eu e o outro.
   - Gênero, machismo e assédio moral no trabalho — adaptado ao setor (na assistência social, na saúde, no atendimento ao público). Nota de linguagem: em prefeituras, o enquadramento costuma ser "machismo no ambiente de trabalho" e "assédio moral", mais do que o termo "gênero" isolado.
   - Prevenção e cuidado em saúde mental — estratégias de cuidado com a saúde mental do outro e de si mesma.
   - Inclusão e manejo com crianças autistas.
   - Uso de redes sociais e TikTok como questão do território — quando isso emerge como demanda local.
   - E o que a realidade daquele município pedir — os temas são sempre adequados ao que está acontecendo na cidade.
PRODUTO 2: ESTRUTURAÇÃO DE PROGRAMA / PROJETO SOCIAL / PROGRAMA ESG
Para quem já tem uma política, um projeto ou um programa em execução — e precisa de uma equipe técnica especializada para estruturá-lo, fortalecê-lo ou implementá-lo com método real. A PAAPS vai ao território, vincula com quem está lá e constrói junto com a população atendida. Sem fórmula pronta. Com Teoria da Mudança, grupos operativos, diagnóstico territorial e suporte psicológico qualificado.
A PAAPS também cria projetos do zero. Quando uma prefeitura, ONG ou empresa (no âmbito ESG) quer criar um projeto de cuidado em saúde mental com uma população ou causa específica — por exemplo, saúde mental dentro de comunidades específicas, aldeias indígenas, ou grupos territorializados — a PAAPS vai até o espaço, dialoga com quem está lá, se vincula, e coconstrói o projeto junto com a população que será atendida. Nessa frente de criação, a ótica é sempre a de psicólogas sociais e sistêmicas, com lugar também de consultoria organizacional: gestão de processos, gestão de comunicação, gestão de pessoas, gestão de riscos psicossociais e gestão de riscos físicos e químicos — sempre dentro do diagnóstico e da coconstrução, nunca como fórmula importada.
Para prefeituras: Estruturação de Programa Municipal (ESF, NASF, AEE, RAPS e outros)
Para ONGs: Criação e Implementação de Projeto Social
Para empresas: Programa ESG com método e presença territorial real
OUTROS SERVIÇOS NO PORTFÓLIO:
- Psicoterapia Semanal como Benefício Institucional (parceria com Associação Allos — online, individual, semanal)
- Programa de Lideranças Humanizadas e Estratégicas (forma o líder-mediador: sustenta conflitos, organiza processos, ativa o coletivo)
- Rodas de Mediação de Conflitos (Círculos de Paz — Justiça Restaurativa. O conflito não é varrido para debaixo do tapete.)
- Preparação para Aposentadoria (transição identitária, subjetiva e social — não encerramento administrativo)
- Programa Esperança (consultoria em Teoria da Mudança para políticas em rede: ESF, NASF, AEE)
- TEAtrar (projeto de teatro para crianças do espectro autista — coord. Gabriela Diniz, atriz e psicóloga)
VIABILIZAÇÃO DE CONTRATAÇÃO PÚBLICA (aparece em todas as páginas de serviço):
1. Licitação Comum
2. Inexigibilidade de Licitação (Art. 74 da Lei 14.133/2021)
3. Dispensa de Licitação (Art. 75)
4. CPSI — Contrato Público de Solução Inovadora
5. Contratos Mensurados por UST — Unidade de Serviço Técnico
═══════════════════════════════════════
PÚBLICO-ALVO E PRIORIDADE COMERCIAL (contexto para tom — não exibir como texto literal)
═══════════════════════════════════════
- Público-alvo principal e validado: prefeituras e municípios de pequeno e médio porte (todos os servidores públicos).
- Público já no radar: ONGs com sedes ou unidades presenciais, ONGs de atendimento ao público (ex.: APAE) e ONGs que executam projetos sociais.
- Público que o PAAPS quer conquistar: empresas — principalmente para o Programa ESG (a empresa traz um projeto e uma população, ou se dialoga com a equipe de estratégia para definir onde o projeto será executado; a PAAPS recebe o financiamento e faz diagnóstico, plano e execução).
Implicação de tom: a home deve falar com naturalidade e autoridade para prefeituras (já é casa), tratar ONGs como par de confiança, e abrir porta para empresas via ESG sem subordinar o discurso ao vocabulário corporativo.
═══════════════════════════════════════
IDENTIDADE VISUAL — REGRAS ABSOLUTAS
═══════════════════════════════════════
NUNCA invente cores fora desta paleta. NUNCA use outras fontes.
CORES (CSS variables obrigatórias):
--cor-fundo: #f5f1e1;         /* bege creme — fundo principal */
--cor-marrom: #442309;        /* marrom escuro — texto principal, logo */
--cor-terracota: #cb4710;     /* terracota — CTAs, destaques quentes */
--cor-oliva: #aea349;         /* verde oliva — destaques positivos */
--cor-amarelo: #f7c31c;       /* amarelo — números, acentos fortes */
--cor-bege-rosa: #bbada2;     /* bege rosado — bordas, elementos secundários */
--cor-lilas: #bcb6f2;         /* lilás — elementos especiais */
--cor-branco: #ffffff;
TIPOGRAFIA:
- Títulos H1/H2: League Spartan (Google Fonts), weight 700, uppercase
- Subtítulos H3: League Spartan, weight 600
- Corpo de texto: Helvetica Neue, Helvetica, Arial, sans-serif — weight 400, 16px, line-height 1.7
- Destaques numéricos: League Spartan 800, tamanho grande
LOGO: arquivo logo.png na raiz do projeto. Height 48px no header, height 40px no footer.
[REFERÊNCIA DE PASTA — ADIÇÃO: o logo.png da raiz deve ser gerado a partir dos arquivos reais em "/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/01 - Logo/01 - Logo sem descritivo/". Use "Paaps - Logo marrom-8.png" para o header (fundo bege) e "Paaps - Logo branco-8.png" para o footer (fundo marrom). As bolinhas/pontinhos coloridos decorativos estão em "/Users/mac/SITE PAAPS/INSUMOS/IDENTIDADE VISUAL/06 - Pontinhos/".]
ESTÉTICA OBRIGATÓRIA:
- Fundo bege (#f5f1e1) como elemento de design — não como espaço vazio
- Fotos a sangue (sem bordas, sem border-radius em imagens grandes)
- Espaçamento generoso: padding mínimo 80px vertical nas seções desktop
- Texturas sutis: adicione um noise texture de 3% de opacidade sobre o fundo bege para dar profundidade
- Tipografia militante: frases curtas em League Spartan uppercase, grandes, com impacto
- Elementos gráficos: use os círculos coloridos do logo (amarelo #f7c31c, terracota #cb4710, oliva #aea349, marrom #442309) como elementos decorativos em seções — bolinhas de 12-16px como separadores ou marcadores
═══════════════════════════════════════
ESTRUTURA DE ARQUIVOS
═══════════════════════════════════════
Crie EXATAMENTE esta estrutura:
paaps-site/
├── index.html
├── logo.png (já existe — não sobrescrever)
├── css/
│   ├── style.css
│   └── components.css
├── js/
│   └── main.js
├── imagens/
│   └── (pasta vazia — placeholder divs para fotos)
├── sobre/
│   └── index.html
├── servicos/
│   └── index.html
├── como-contratar/
│   └── index.html
├── case/
│   └── index.html
└── contato/
    └── index.html
[REFERÊNCIA DE PASTA — ADIÇÃO: para popular a pasta "paaps-site/imagens/" e substituir os placeholders por imagens reais, copie os arquivos das pastas reais do projeto: fotos do hero/território em "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/FOTOS BVMG ISAAC/"; fotos do case em "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/Case de Bela Vista de Minas/" (usar .JPG/.jpg, evitar .HEIC e .MOV); demais fotos em "/Users/mac/SITE PAAPS/INSUMOS/FOTOS/" (ECOA FOTOS, MÃES ATÍPICAS RJ, CRAFTSAPIENS (MUNDO DIGITAL), OUTRAS FOTOS); fotos de equipe/camiseta em "/Users/mac/SITE PAAPS/NOSSA CAMISETA PAAPS/"; mockups de aplicação da marca em "/Users/mac/SITE PAAPS/INSUMOS/APLICAÇÃO DA ID. VISUAL/". NÃO altere os originais — apenas copie o que for usar.]
═══════════════════════════════════════
CSS BASE — style.css
═══════════════════════════════════════
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&display=swap');
:root {
  --cor-fundo: #f5f1e1;
  --cor-marrom: #442309;
  --cor-terracota: #cb4710;
  --cor-oliva: #aea349;
  --cor-amarelo: #f7c31c;
  --cor-bege-rosa: #bbada2;
  --cor-lilas: #bcb6f2;
  --cor-branco: #ffffff;
  --fonte-titulo: 'League Spartan', Arial, sans-serif;
  --fonte-corpo: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --sombra: 0 4px 24px rgba(68,35,9,0.10);
  --max-largura: 1200px;
  --raio: 4px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--fonte-corpo);
  background-color: var(--cor-fundo);
  color: var(--cor-marrom);
  font-size: 16px;
  line-height: 1.7;
  /* noise texture sutil */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
}
.container { max-width: var(--max-largura); margin: 0 auto; padding: 0 40px; }
.secao { padding: 96px 0; }
.secao--escura { background: var(--cor-marrom); color: var(--cor-branco); }
.secao--terracota { background: var(--cor-terracota); color: var(--cor-branco); }
.secao--oliva { background: var(--cor-oliva); color: var(--cor-branco); }
.secao--amarelo { background: var(--cor-amarelo); color: var(--cor-marrom); }
h1 { font-family: var(--fonte-titulo); font-weight: 700; text-transform: uppercase; font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05; letter-spacing: -0.02em; }
h2 { font-family: var(--fonte-titulo); font-weight: 700; text-transform: uppercase; font-size: clamp(1.8rem, 3.5vw, 2.8rem); line-height: 1.1; }
h3 { font-family: var(--fonte-titulo); font-weight: 600; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.03em; }
.btn-primario {
  display: inline-block;
  background: var(--cor-terracota);
  color: var(--cor-branco);
  font-family: var(--fonte-titulo);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 16px 32px;
  border-radius: var(--raio);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}
.btn-primario:hover { opacity: 0.88; transform: translateY(-2px); }
.btn-secundario {
  display: inline-block;
  background: transparent;
  color: var(--cor-terracota);
  font-family: var(--fonte-titulo);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 14px 30px;
  border-radius: var(--raio);
  border: 2px solid var(--cor-terracota);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-secundario:hover { background: var(--cor-terracota); color: var(--cor-branco); }
.btn-branco {
  display: inline-block;
  background: var(--cor-branco);
  color: var(--cor-terracota);
  font-family: var(--fonte-titulo);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 16px 32px;
  border-radius: var(--raio);
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}
.btn-branco:hover { opacity: 0.9; transform: translateY(-2px); }
/* Marcadores coloridos do logo */
.marcadores { display: flex; gap: 8px; align-items: center; margin-bottom: 24px; }
.marcador { width: 12px; height: 12px; border-radius: 50%; }
.marcador--amarelo { background: var(--cor-amarelo); }
.marcador--terracota { background: var(--cor-terracota); }
.marcador--oliva { background: var(--cor-oliva); }
.marcador--marrom { background: var(--cor-marrom); }
═══════════════════════════════════════
COMPONENTES — components.css
═══════════════════════════════════════
/* HEADER */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--cor-fundo);
  border-bottom: 1px solid var(--cor-bege-rosa);
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo img { height: 48px; width: auto; }
.header__nav { display: flex; align-items: center; gap: 32px; }
.header__nav a {
  font-family: var(--fonte-titulo);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cor-marrom);
  text-decoration: none;
  transition: color 0.2s;
}
.header__nav a:hover { color: var(--cor-terracota); }
/* MENU HAMBURGUER MOBILE */
.header__hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
.header__hamburger span { display: block; width: 24px; height: 2px; background: var(--cor-marrom); border-radius: 2px; transition: all 0.3s; }
/* ESTEIRA DE LOGOS (marquee) */
.esteira { overflow: hidden; background: var(--cor-branco); padding: 24px 0; border-top: 1px solid var(--cor-bege-rosa); border-bottom: 1px solid var(--cor-bege-rosa); }
.esteira__track { display: flex; gap: 64px; align-items: center; animation: esteira 24s linear infinite; white-space: nowrap; }
.esteira__track:hover { animation-play-state: paused; }
.esteira__item { font-family: var(--fonte-titulo); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cor-bege-rosa); white-space: nowrap; }
@keyframes esteira { from { transform: translateX(0); } to { transform: translateX(-50%); } }
/* CARDS */
.card { background: var(--cor-branco); border-radius: var(--raio); box-shadow: var(--sombra); padding: 40px 32px; transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(68,35,9,0.15); }
.card__icone { width: 48px; height: 48px; margin-bottom: 24px; }
/* GRID */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; align-items: center; }
.grid-2-1 { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
/* FOTO PLACEHOLDER */
.foto-placeholder { background: var(--cor-marrom); width: 100%; aspect-ratio: 4/3; border-radius: var(--raio); display: flex; align-items: center; justify-content: center; }
.foto-placeholder--hero { aspect-ratio: 16/9; border-radius: 0; }
.foto-placeholder span { font-family: var(--fonte-titulo); font-size: 0.7rem; color: var(--cor-bege-rosa); text-transform: uppercase; letter-spacing: 0.1em; }
/* NÚMERO GRANDE */
.numero-grande { font-family: var(--fonte-titulo); font-weight: 800; font-size: clamp(3rem, 8vw, 6rem); color: var(--cor-amarelo); line-height: 1; }
.numero-grande--terracota { color: var(--cor-terracota); }
/* FAIXA MANIFESTO */
.faixa-manifesto { background: var(--cor-marrom); color: var(--cor-amarelo); padding: 24px 40px; font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.12em; text-align: center; }
/* WHATSAPP FLUTUANTE */
.whatsapp-fixo {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  z-index: 999;
  transition: transform 0.2s;
  text-decoration: none;
}
.whatsapp-fixo:hover { transform: scale(1.08); }
.whatsapp-fixo svg { width: 28px; height: 28px; fill: white; }
/* RODAPÉ */
.footer { background: var(--cor-marrom); color: var(--cor-branco); padding: 72px 40px 40px; }
.footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; max-width: var(--max-largura); margin: 0 auto 48px; }
.footer__logo img { height: 40px; margin-bottom: 16px; filter: brightness(0) invert(1); }
.footer__tagline { font-size: 0.9rem; color: var(--cor-bege-rosa); margin-bottom: 16px; }
.footer__contato a { display: block; color: var(--cor-amarelo); font-family: var(--fonte-titulo); font-size: 0.8rem; text-decoration: none; margin-bottom: 6px; }
.footer__titulo { font-family: var(--fonte-titulo); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cor-bege-rosa); margin-bottom: 16px; }
.footer__links a { display: block; color: var(--cor-branco); text-decoration: none; font-size: 0.9rem; margin-bottom: 8px; transition: color 0.2s; }
.footer__links a:hover { color: var(--cor-amarelo); }
.footer__copy { max-width: var(--max-largura); margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.78rem; color: var(--cor-bege-rosa); display: flex; justify-content: space-between; align-items: center; }
═══════════════════════════════════════
HOME (index.html) — SEÇÕES COMPLETAS
═══════════════════════════════════════
SEÇÃO 1 — HEADER
Logo à esquerda (logo.png, height 48px).
Nav à direita: Sobre | Serviços | Como Contratar | Case | Contato.
Botão "FALE CONOSCO" estilo btn-primario pequeno (padding 10px 20px).
Em mobile: hamburger menu com drawer lateral que aparece da direita.
SEÇÃO 2 — HERO (altura 92vh)
Div com background var(--cor-marrom) como placeholder para foto (class foto-placeholder--hero).
Overlay rgba(68,35,9,0.55) por cima.
Conteúdo centralizado, texto branco.
Marcadores coloridos animados (as 4 bolinhas do logo) acima do H1.
H1: "A rede de saúde mental para as políticas públicas do futuro."
Parágrafo 20px: "Um coletivo de psicólogas sociais e sistêmicas especializadas em saúde mental coletiva como política pública. Desde 2014, dentro do território."
Dois botões: btn-branco "Agendar conversa gratuita de 45 min" (href WhatsApp) e link branco sublinhado "Ver o case Bela Vista de Minas".
Scroll indicator animado (chevron branco pulsando) no canto inferior central.
SEÇÃO 3 — FAIXA MANIFESTO
Background var(--cor-marrom), texto var(--cor-amarelo).
"QUEM CUIDA DE QUEM FAZ A REDE PÚBLICA ACONTECER?"
SEÇÃO 4 — ESTEIRA DE LOGOS (marquee infinito)
Background branco, padding 24px.
Texto antes da esteira: "PRESENTE EM" em League Spartan pequeno, cor bege-rosa.
Items que se repetem duas vezes para loop contínuo (use a LISTA COMPLETA REAL declarada acima — todos os clientes, em texto League Spartan quando não houver logo):
PREFEITURA DE BELA VISTA DE MINAS · PREFEITURA DE DESTERRO DO MELO · BENEFICÊNCIA PORTUGUESA SP · REDE DIVINA PROVIDÊNCIA · ASSOCIAÇÃO ALLOS · ÁGUAS DO RIO · BOEHRINGER INGELHEIM · GRUPO BOTICÁRIO · COSAN · RAÍZEN · SIGNIFY · COMBIO · JIVE · MOTIVA · RODOBENS · GLOBENET · ORIGAMI · PROMIP · SP VENTURES · NEOLAW · DESDE 2014 ·
[REFERÊNCIA DE PASTA — ADIÇÃO: para esta esteira, busque eventuais PNGs de logos em "/Users/mac/SITE PAAPS/NOSSOS CLIENTES E PARCEIROS/"; para todo cliente da lista que não tiver arquivo de logo nessa pasta, mantenha o nome em texto League Spartan, como já instruído acima.]
CSS animation marquee correndo para esquerda, pausando no hover.
SEÇÃO 5 — PROPOSTA DE VALOR (fundo var(--cor-fundo))
Marcadores coloridos + subtítulo "O QUE FAZEMOS".
H2: "Dois caminhos. Um método."
Grid-2 com:
Card esquerdo (fundo branco, sombra): "PROGRAMA PAAPS" — Para prefeituras, ONGs e empresas que querem cuidado contínuo das suas equipes. Três dispositivos integrados: grupos terapêuticos, plantão psicológico na rede, capacitações vivenciais. Link "Conhecer o Programa" em terracota.
Card direito (fundo var(--cor-marrom), texto branco): "ESTRUTURAÇÃO DE PROGRAMA / PROJETO SOCIAL / ESG" — Para quem já tem uma política em execução e precisa de equipe técnica especializada para implementá-la com método real. A PAAPS vai ao território, vincula com quem está lá, e constrói junto. Link "Saiba mais" em amarelo.
SEÇÃO 6 — OS TRÊS DISPOSITIVOS DO PROGRAMA (fundo var(--cor-fundo))
H2: "O Programa PAAPS"
Grid-3 de cards, cada um com ícone SVG em terracota, título em League Spartan, texto:
Card 1 — GRUPOS TERAPÊUTICOS
Ícone: círculos conectados (SVG inline).
"Dispositivo contínuo de cuidado psicológico integrado à rotina institucional. Nomeia o que é vivido mas não dito. Processa coletivamente o que adoece em silêncio."
Card 2 — PLANTÃO PSICOLÓGICO NA REDE
Ícone: relógio + pessoa (SVG inline).
"Acolhimento qualificado e itinerante, no tempo real do trabalho. Na borda entre o não-dito e o urgente. Disponível em até 3h de aviso, presencial ou online."
Card 3 — CAPACITAÇÕES VIVENCIAIS
Ícone: pessoas em roda (SVG inline).
"O grupo não recebe soluções prontas — ele produz junto. Coconstruídas a partir do que já existe no território, com a metodologia dos Grupos Operativos."
SEÇÃO 7 — CASE DE IMPACTO (fundo var(--cor-oliva))
Layout grid-2.
Esquerda: div foto-placeholder (fundo var(--cor-marrom) mais escuro, aspect-ratio 4/3). Label "BELA VISTA DE MINAS, MG".
Direita (texto branco):
Marcadores coloridos.
Label "1º MVP MUNICIPAL VALIDADO".
H2 branco: "Resultados reais. Em 5 meses."
Grid 2x2 de números grandes:
"+56%" subtexto "de aderência à psicoterapia de servidoras"
"+150%" subtexto "de aderência em atividades grupais"
"+130h" subtexto "de ações e intervenções grupais"
"+400h" subtexto "de Plantão Psicológico disponibilizados"
Subtexto: "Prefeitura de Bela Vista de Minas — 5 meses consecutivos de PAAPS."
Botão branco: "Ver o case completo" (href /case/).
SEÇÃO 7B — IMPACTO PERCEBIDO PELAS EQUIPES (NOVA SEÇÃO — fundo var(--cor-fundo), logo após o case)
Marcadores coloridos + subtítulo "O QUE AS EQUIPES RELATAM".
Frase de abertura (parágrafo, cor marrom): "Nossos projetos com as equipes de programas sociais e políticas públicas apresentam, em média:"
Grid 2x2 de números grandes (use a cor --cor-amarelo nos números, igual ao case; subtexto em marrom):
"56%" subtexto "se sentem mais seguros para a execução do seu trabalho no dia a dia."
"+150%" subtexto "de crescimento na aderência de servidores em atividades e oficinas grupais — em 5 meses de PAAPS."
"98%" subtexto "das equipes afirmam estarem mais colaborativas no dia a dia, e o trabalho estar sendo mais leve."
"100%" subtexto "afirma reconhecer mudanças expressivas em pelo menos 1 de seus colegas de trabalho."
ATENÇÃO: NÃO funda o 56% de segurança desta seção com o 56% de aderência à psicoterapia da Seção 7. São indicadores distintos, propositalmente. Mantenha os enunciados exatos.
SEÇÃO 8 — TRILHAS POR TIPO DE CLIENTE (fundo var(--cor-fundo))
H2: "Para quem é o PAAPS"
Grid-3 de cards com borda superior colorida:
Card PREFEITURAS (borda terracota):
Marcador terracota.
"PREFEITURAS"
"Cuidado contínuo das equipes da Saúde, Educação e Assistência Social. Programa PAAPS para servidoras + Estruturação de Programa Municipal."
Viabilização: "Licitação, Inexigibilidade, Dispensa, CPSI, UST."
Card ONGs (borda oliva):
Marcador oliva.
"ONGs"
"Para equipes de ONGs com sede presencial, de atendimento ao público ou execução de projetos sociais. Programa PAAPS + Criação e Implementação de Projeto Social."
Card EMPRESAS (borda lilás):
Marcador lilás.
"EMPRESAS"
"Para empresas que querem investimento ESG com presença territorial real. A PAAPS vai ao território, vincula, e executa o projeto junto com a população atendida."
SEÇÃO 9 — EQUIPE (fundo var(--cor-marrom))
H2 branco: "Uma equipe técnica. Não uma consultora solitária."
Parágrafo branco: "O PAAPS é composto por psicólogas sociais e sistêmicas com especialização em políticas públicas, metodologias de grupo, mediação de conflitos e psicologia social-comunitária latino-americana. Entramos no território como parceiras estratégicas — não como palestrantes que somem depois."
Grid-3 de cards de equipe (fundo rgba branco 0.07, border 1px rgba branco 0.1):
Card 1: ícone circular placeholder para foto (fundo bege-rosa), "EQUIPE TÉCNICA", "Psicólogas sociais e sistêmicas especializadas em intervenção grupal e políticas públicas."
Card 2: ícone placeholder, "SUPERVISÃO CLÍNICA", "Processo contínuo de supervisão que garante qualidade e consistência em cada território."
Card 3: ícone placeholder, "PRESENÇA TERRITORIAL", "Imersão presencial nos seus equipamentos. CRAS, CREAS, UBS, escolas. Pisamos no chão antes de propor qualquer coisa."
SEÇÃO 10 — CTA FINAL (fundo var(--cor-terracota))
Centralizado, texto branco.
Marcadores (brancos, menores: 8px).
H2 branco: "Sua equipe merece cuidado que permanece."
Parágrafo: "45 minutos de conversa gratuita para mapear os desafios da sua gestão. Sem compromisso. Sem fórmula pronta."
Dois botões lado a lado: btn-branco "AGENDAR VIA WHATSAPP" (href WhatsApp) + link branco sublinhado "ou envie um email: paaps@digging.com.br"
SEÇÃO 11 — RODAPÉ (fundo var(--cor-marrom))
Grid 3 colunas:
Col 1: logo.png (filter invert branco) + "Psicologia Social para Políticas Públicas" em bege-rosa + email paaps@digging.com.br em amarelo + "(11) 99523-1724" em amarelo + "DIGGING CNPJ 05.983.700/0001-67" em bege-rosa menor.
Col 2: Título "NAVEGUE" + links: Sobre | Serviços | Como Contratar | Case | Contato | ECOA | TEAtrar.
Col 3: Título "REDES" + "@paaps.brasil no Instagram" + "PAAPS no LinkedIn" + botão WhatsApp.
Copyright: "© 2014–2025 PAAPS — Programa de Aceleração Ativa de Projetos Sociais. Operado pela DIGGING LTDA."
WHATSAPP FLUTUANTE: fixo canto inferior direito, 56x56px, fundo #25D366, ícone SVG branco.
═══════════════════════════════════════
main.js — JAVASCRIPT
═══════════════════════════════════════
1. HAMBURGER MENU: toggle classe .aberto no nav mobile. Fechar ao clicar fora ou em link.
2. ESTEIRA MARQUEE: duplicar os items do track para criar loop infinito perfeito via JS se necessário.
3. SCROLL SUAVE: document.querySelectorAll('a[href^="#"]') com behavior smooth.
4. HEADER SCROLL: adicionar classe .header--scrolled (shadow mais forte) quando scrollY > 60.
5. ANIMAÇÃO DE ENTRADA: usar IntersectionObserver para adicionar classe .visivel em elementos com classe .animar quando entrarem na viewport. CSS:
.animar { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.animar.visivel { opacity: 1; transform: translateY(0); }
═══════════════════════════════════════
RESPONSIVIDADE — MOBILE FIRST
═══════════════════════════════════════
@media (max-width: 768px):
- .header__nav { display: none } — substituído por drawer lateral com hamburger
- .grid-3, .grid-2, .grid-2-1 → grid-template-columns: 1fr
- .container { padding: 0 20px }
- .secao { padding: 64px 0 }
- H1: font-size clamp já cuida — mínimo 2.4rem
- .esteira funciona igual em mobile
- Botões em mobile: width 100% quando em stack vertical
- Footer grid → 1 coluna
@media (max-width: 480px):
- Hero: 100svh
- Botões hero: flex-direction column, gap 12px
═══════════════════════════════════════
EXEMPLOS PRESCRITIVOS — CALIBRAGEM DE COPY (✅ FAÇA / ❌ NÃO FAÇA)
═══════════════════════════════════════
Estes exemplos existem para travar o tom. Toda copy que você gerar deve passar por este filtro antes de entrar no HTML.
DESCRIÇÃO DE SERVIÇO:
❌ "Solução inovadora de bem-estar que empodera servidores e transforma o mindset da equipe."
✅ "Dispositivo contínuo de cuidado que processa coletivamente o que adoece em silêncio."
PLANTÃO:
❌ "Atendimento on-demand com escuta ativa e resposta ágil."
✅ "Acolhimento qualificado e itinerante, no tempo real do trabalho. Disponível em até 3h de aviso."
CAPACITAÇÃO:
❌ "Treinamentos de alta performance para elevar o engajamento e a produtividade da equipe."
✅ "O grupo não recebe soluções prontas — ele produz junto, a partir do que já existe no território."
PROVA SOCIAL / NÚMEROS:
❌ "Resultados que comprovam o ROI do bem-estar corporativo."
✅ "Resultados reais. Em 5 meses." / "Nossos projetos com as equipes apresentam, em média:"
CHAMADA PARA AÇÃO:
❌ "Garanta já sua vaga e dê o próximo passo na virada de chave da sua gestão."
✅ "45 minutos de conversa gratuita para mapear os desafios da sua gestão. Sem fórmula pronta."
REGRA FINAL DE COPY: frases curtas, concretas, que nomeiam o sofrimento estrutural e a presença territorial. Nunca inspiracional-meritocrático. Nunca corporativo-genérico. Nunca a construção "não é X, é Y" em headlines.
═══════════════════════════════════════
CHECKLIST DE VALIDAÇÃO ANTES DE ENTREGAR (execute mentalmente)
═══════════════════════════════════════
Antes de declarar a home pronta, confirme cada item:
[ ] Nenhuma palavra da lista de VOCABULÁRIO PROIBIDO aparece em nenhum arquivo.
[ ] Nenhuma cor fora da paleta declarada foi usada.
[ ] Os números do MVP (Seção 7) e os de percepção das equipes (Seção 7B) estão separados e com enunciados exatos.
[ ] Todos os clientes da LISTA COMPLETA REAL estão na esteira, sem nomes inventados.
[ ] As 5 modalidades de contratação pública aparecem onde previsto.
[ ] Os exemplos de capacitação usados são os REAIS (temperamentos humanos, machismo/assédio, saúde mental, inclusão/autismo, redes sociais) — não genéricos.
[ ] Nenhuma construção "não é X, é Y" em headline.
═══════════════════════════════════════
CRITÉRIOS DE ENTREGA
═══════════════════════════════════════
Ao terminar, me diga:
1. Quais arquivos foram criados e seus caminhos
2. Se há algum erro ou dependência faltando
3. Como visualizar localmente (abrir index.html no navegador)
4. Confirmação item a item do CHECKLIST DE VALIDAÇÃO acima
NÃO crie as páginas internas ainda (sobre, serviços, etc.) — apenas index.html, css/style.css, css/components.css e js/main.js.
Comece agora.
