# Prompt estruturado : Site PAAPS Brasil v1

> Gerado pela skill `meta-architect` em 02/08/2026, a partir do ditado da Mallu nesta data,
> da leitura das duas análises pendentes do Notion, do PAAPS FrameWork, do benchmark ao vivo
> em Yunus e PROSAMES e da curadoria das 33 fotos do acervo Radilson.
>
> **Este arquivo é a memória estruturada do projeto do site.** Quem abrir uma sessão nova para
> trabalhar no site lê este arquivo antes de escrever qualquer linha. Ele não substitui
> `insumos-compartilhados/docs/metodologia-paaps.md` (o que a PAAPS vende) nem
> `codigo/site/DESIGN-SYSTEM.md` (o sistema visual completo): ele os amarra e diz o que fazer.

---

```xml
<instrucao_de_contexto projeto="site-paaps-brasil" versao="1.0" data="2026-08-02">

<contexto_macro>
  <quem_e>
    PAAPS Brasil é a metodologia proprietária da DIGGING (CNPJ 05.983.700/0001-67, sede em
    São Paulo capital). Negócio social e GovTech de Psicologia Social aplicada a políticas
    públicas. Vende para gestão pública (prefeituras, secretarias de saúde, assistência social
    e educação, consórcios e associações de municípios) e, em segundo lugar, para ONGs e
    projetos sociais.
  </quem_e>
  <o_que_o_site_precisa_fazer>
    Um secretário de saúde de um município de 3 a 40 mil habitantes, muitas vezes sem formação
    universitária, precisa entender em 5 segundos o que a PAAPS faz e reconhecer o próprio
    problema. A conversão é uma conversa de 45 minutos, sem custo e sem compromisso.
  </o_que_o_site_precisa_fazer>
  <porque_a_v0_foi_reprovada>
    A primeira home (02/08/2026) foi aprovada como explicação e recusada como landing page:
    "está muito bom, mas é um texto de blog, não uma landing page". A régua da Mallu é
    EXCELÊNCIA; a régua padrão sai baixa. Não publicar nada que não passe por processo de
    design real.
  </porque_a_v0_foi_reprovada>
</contexto_macro>

<variaveis_fixas>
  <raiz>/Users/mac/Documents/SITE PAAPS</raiz>
  <pasta_do_site>codigo/site/home/</pasta_do_site>
  <folha_unica>codigo/site/home/css/paaps.css</folha_unica>
  <fontes_locais>
    codigo/site/home/fontes/ : LeagueSpartan (400/500/600/700/800), NimbusSanL (Reg/Bol),
    Evermore. Embutidas por @font-face. NUNCA Google Fonts.
  </fontes_locais>
  <acervo_radilson>
    insumos-compartilhados/fotos-radilson/ (33 originais, até 2560px)
    codigo/site/home/img/radilson/ (21 tratadas para web)
  </acervo_radilson>
  <acervo_proprio>
    codigo/site/home/img/paaps/ (case-bvmg-*, equipe-*, territorio-*) : fotos de sala,
    treinamento e campo. São as ÚNICAS fotos de treinamento que existem.
  </acervo_proprio>
  <documentos_fonte>
    <doc peso="1">insumos-compartilhados/docs/metodologia-paaps.md</doc>
    <doc peso="1">insumos-compartilhados/docs/o-que-e-a-paaps.md</doc>
    <doc peso="1">codigo/site/DESIGN-SYSTEM.md</doc>
    <doc peso="2">insumos-compartilhados/docs/ficha-juridica-paaps.md</doc>
    <doc peso="2">insumos-compartilhados/nucleo-comum/voz-paaps.md</doc>
  </documentos_fonte>
  <contato>
    WhatsApp 55 11 99523-1724 · relacionamento@paaps.com.br · @paaps.brasil
  </contato>
</variaveis_fixas>

<lexico_fechado>
  <frases_autorizadas>
    <frase>Cuidamos de Funcionários Públicos para uma Saúde Mental Coletiva.</frase>
    <frase tipo="proposito">Transformar o Cuidado no Brasil.</frase>
    <frase tipo="lema">Cuidar da Ponta, impactar o mundo.</frase>
    <frase>Somos a Rede de Saúde Mental para as Políticas Públicas do futuro.</frase>
  </frases_autorizadas>
  <regra>
    Nenhuma expressão nova entra no léxico de posicionamento. Adaptação permitida: cortar o
    começo ou o fim de uma das quatro. "À prova de futuro" só quando o contexto for futuro.
  </regra>
</lexico_fechado>

<proibicoes_absolutas>
  <item id="travessao">Travessão grande em dash. Usar dois-pontos, ponto-e-vírgula ou hífen.</item>
  <item id="expansao">A expansão da sigla PAAPS. Só PAAPS ou PAAPS Brasil.</item>
  <item id="palavras_dificeis">
    Banidas na peça pública, porque a Mallu escreve difícil e o trabalho é traduzir:
    supraestrutura, holístico, íntegro, complexo, rede viva, dispositivo, metodologia
    proprietária, programa. Teste: se um secretário de cidade de 3 mil habitantes precisar
    procurar a palavra, a frase está errada.
  </item>
  <item id="sangue">Metáforas de sangue, ferida física, guerra ou competição. "Estancar o
    sangramento" está proibido: traduzir a ideia, manter a mensagem.</item>
  <item id="coach">Linguagem coachesca: mindset, alta performance, virada de chave, escala,
    leads qualificados, dores da persona.</item>
  <item id="concorrente">
    Nunca citar, comparar ou depreciar: Minerva, Associação Allos, PROSAMES, Bela Vista de
    Minas, Refazenda, Motiva. Nunca usar "cuidar de quem cuida" como eixo: é clichê de mercado
    e assinatura do concorrente.
  </item>
  <item id="absenteismo">Nunca "absenteísmo". Dizer faltas e afastamentos.</item>
  <item id="promessa">Nenhuma promessa ou garantia de resultado.</item>
  <item id="nr1">
    Nunca afirmar que a NR-1 alcança toda a administração pública. As NRs obrigam órgãos
    públicos apenas quanto aos empregados regidos pela CLT; servidor estatutário fica
    formalmente fora. A ressalva é obrigatória sempre que a NR-1 aparecer.
  </item>
  <item id="nao_e_x">
    Estrutura "não é X, é Y": no máximo uma vez por página, e só quando o X negado for crença
    que alguém de verdade tem. Nomear por escrito quem acredita no X antes de usar.
  </item>
</proibicoes_absolutas>

<sistema_visual>
  <hierarquia_de_cor calibrada_em="2026-08-02" autoridade="manda_sobre_o_resto">
    <cor ordem="1" nome="bege"      hex="#f5f1e1">Dominante. O papel. Fundo do site inteiro.</cor>
    <cor ordem="2" nome="marrom"    hex="#442309">A tinta. Texto e seções escuras. CTA primário.</cor>
    <cor ordem="3" nome="amarelo"   hex="#f7c31c">Palavra-chave e destaque pontual e profissional.</cor>
    <cor ordem="4" nome="oliva"     hex="#aea349">Cor chapada, detalhe, fundo menos aparente.</cor>
    <cor ordem="5" nome="terracota" hex="#cb4710">Bem secundária. Uso raro.</cor>
    <cor ordem="6" nome="roxo"      hex="#bcb6f2">Quase nunca.</cor>
    <revogacao>
      Terracota NÃO é mais o CTA primário nem a cor de link padrão, ao contrário do que dizem
      as versões antigas do DESIGN-SYSTEM.md e do paaps-site/.
    </revogacao>
  </hierarquia_de_cor>

  <tipografia>
    <titulo familia="League Spartan" caixa="ALTA" peso="700" tracking="-0.005em"/>
    <corpo  familia="Nimbus Sans (Helvetica)" peso="400 e 700" tracking="0"/>
    <palavra_chave familia="Evermore" uso="raro e pontual"/>
    <regra>Helvetica é a fonte real das peças. Nunca League Spartan no corpo de texto.</regra>
    <regra>Nunca recriar o logo em League Spartan: o logotipo é Evermore.</regra>
  </tipografia>

  <foto_de_tela_cheia regra_dura="sim">
    Foto ocupa a tela inteira. Texto por cima em League Spartan CAIXA ALTA, cor bege
    (ou marrom se a foto for clara). Aplicar fundo preto com 70 por cento de transparência,
    leve, só o suficiente para escurecer a foto e garantir a leitura.
    Classes já implementadas: .sobre-foto, .sobre-foto--clara, .sobre-foto--uniforme.
  </foto_de_tela_cheia>

  <legenda_de_foto obrigatoriedade="toda foto, sem exceção">
    <caso tipo="propria">Nome do case. Ex.: Desterro do Melo, Minas Gerais : capacitação de equipe</caso>
    <caso tipo="terceiro">Crédito ao fotógrafo. Ex.: Foto: Radilson Carlos Gomes, fotógrafo do SUS</caso>
    <caso tipo="desconhecida">
      Aplicar a foto, escrever a legenda com "Referência a confirmar" e SINALIZAR a pendência
      na entrega, em lista, sem gastar token explicando.
    </caso>
    <fotos_confirmadas_do_radilson>
      ACS-Quilombola-Quilombo-do-Aurá-PA · Visita-Domiciliar-Gurupi-Tocantins ·
      PSF-Periferia-Sao-Paulo · Mãe-Coruja-Pernambucana-PE · ESF-Soure-Ilha-do-Marajó ·
      Atenção-PSF-Jaraguá · psf6
    </fotos_confirmadas_do_radilson>
  </legenda_de_foto>

  <fotografia decisao_da_mallu="2026-08-02">
    O acervo Radilson é PRETO E BRANCO (30 das 33). Mallu aprovou seguir em P&B para essas
    fotos. Fotos próprias da PAAPS entram em cor. A lei "foto em cor" dos carrosséis não vale
    para o site.
    Três fotos coloridas (RAD_0472, RAD_0589, RAD_1282) parecem não ser do Brasil: NÃO usar
    até confirmar origem com o Radilson.
    NÃO EXISTE nenhuma foto de treinamento no acervo Radilson. Página de Treinamentos usa
    exclusivamente acervo próprio.
  </fotografia>

  <movimento>
    Fade-in escalonado e hover discreto, animando só transform e opacity. Durações 200 a 500ms
    em microinteração, 400 a 800ms em transição de seção.
    Proibido: parallax pesado, 3D, WebGL, loop de fundo.
    Obrigatório: @media (prefers-reduced-motion: reduce) e a página inteira legível sem JS.
  </movimento>
</sistema_visual>

<regras_de_copy>
  <afunilamento principio="o mais importante">
    Primeiro objetivo, acessível e imaginativo, capaz de fazer a pessoa VISUALIZAR.
    Depois aprofundar de forma pedagógica, guiando o leitor numa trajetória de aprendizagem.
    A primeira impressão tem que ser objetiva. A densidade vem depois, nunca na abertura.
  </afunilamento>
  <estrategia_imagine>
    Blocos de Cuidado e de Integração de Rede abrem com "Imagine que...". Frases curtas,
    uma por linha, entrando em cadência. Objetivo declarado pela Mallu: comover.
  </estrategia_imagine>
  <nomear_sem_culpar>
    Demonstrar que a PAAPS sabe que o problema acontece e que o gestor também sabe, SEM dar
    exemplo específico. Nunca escrever que a escola e o CAPS não se dão bem, nem que o CRAS e
    o CREAS não se falam. Nomear o fenômeno, nunca os culpados.
    A tese: o problema não é uma pessoa, é uma cultura, uma forma como as pessoas se
    acostumaram a trabalhar.
  </nomear_sem_culpar>
  <dado>
    Tríade obrigatória: número grande + legenda em FRASE INTEIRA (nunca rótulo solto) + uma
    linha de fontes para o bloco inteiro, não por número.
    Todo dado nasce do PAAPS FrameWork e precisa ser falseável.
  </dado>
</regras_de_copy>

<arquitetura_de_paginas>
  <menu>Treinamentos · Como Atuamos · Urgências e Eventos Extremos · Contato</menu>

  <pagina id="home" arquivo="home/index.html">
    <h1>Cuidamos de Funcionários Públicos para uma Saúde Mental Coletiva.</h1>
    <hero>Foto de tela cheia: img/radilson/hero-estrada.jpg (enfermeira e agente comunitária
      numa estrada de terra, céu carregado). Legenda com crédito Radilson.</hero>
    <sequencia>
      1. Hero com faixa de prova ao pé (números, separada por fio a 12 por cento).
      2. O que é a PAAPS, em linguagem curta.
      3. Duas portas de público: gestão pública primeiro, ONGs e projetos sociais depois.
      4. Bloco de dado (faltas e afastamentos).
      5. As três frentes, cada uma levando à sua página.
      6. Prova de campo: Desterro do Melo.
      7. Quem entrega.
      8. A fundadora: breve, humana, impactante. ÚNICO lugar onde a Mallu aparece.
      9. Como se contrata + CTA da conversa de 45 minutos.
    </sequencia>
  </pagina>

  <pagina id="treinamentos" arquivo="home/treinamentos/index.html">
    <nome_decidido>
      O nome é TREINAMENTOS. Não é "Formações": passa ar de palestra. Alternativa aceita:
      capacitação.
    </nome_decidido>
    <argumento ordem="obrigatoria">
      1. Primeiro a gente conhece a realidade, e a PAAPS conhece a realidade das políticas
         públicas por dentro. Isso precisa ficar claro.
      2. A equipe não sai igual. A equipe treina, a equipe faz caso. A gente traz exercício
         real, caso real, a realidade para dentro do lugar de aprendizagem.
      3. A gente cria cultura de aprendizado, para continuar acontecendo depois que a PAAPS sai.
    </argumento>
    <contra_exemplo>
      A capacitação que foi boa no dia e, na segunda-feira, tudo voltou a ser como era.
      Esse é o argumento que o gestor de cidade pequena reconhece.
    </contra_exemplo>
    <base_teorica origem="Notion, página Formação &amp; Capacitação do PAAPS FrameWork">
      A universidade não forma para pensar em sistema: a equipe multiprofissional aprende a
      conduzir o caso e não aprende a ler a instituição que produz o caso.
      Freeman et al., PNAS, 2014, 225 estudos: aprendizagem ativa sobe 6 por cento a média e a
      aula expositiva eleva a reprovação em 55 por cento.
      Menos de 3 em cada 10 empregadores consideram recém-formados preparados para aplicar o
      que sabem em situação real.
      Tabela de contraste pronta para virar seção: treinamento corporativo importado (conteúdo
      pronto, aula expositiva, avaliação de satisfação, foco no indivíduo) versus capacitação
      PAAPS (problema real da equipe, oficina psicossocial e pesquisa-ação, devolutiva técnica
      para a gestão, foco na rede).
    </base_teorica>
    <proibicao_local>
      NUNCA citar Minerva nem o vocabulário dela (Preparar → Engajar → Aplicar → Impactar,
      teto de 5 minutos, far transfer) em peça pública.
    </proibicao_local>
    <temas>
      Fluxo, encaminhamento e matriciamento de casos · comunicação · construção de equipe na
      rede pública · temas sanitaristas · reforma psiquiátrica · violência de gênero, violência
      contra a mulher e saúde da mulher · questões raciais e saúde da população negra · saúde
      da população LGBTQIAPN+.
      Existem treinamentos prontos e ainda assim a primeira pergunta é sempre "qual é a sua
      demanda?". Servem a qualquer organização, inclusive empresas.
    </temas>
    <quem_entrega>
      Rede de profissionais de universidades e pesquisa, montada por tema, toda treinada na
      metodologia da PAAPS antes de ir a campo. Consultores com mais de 25 anos de carreira
      executiva. Professores e educadores com mestrado ou doutorado.
    </quem_entrega>
    <design>
      Reaproveitar as fotos de sala do acervo próprio: post-its, caneta, gente trabalhando em
      mesa, projetor. São as únicas que mostram treinamento acontecendo.
    </design>
  </pagina>

  <pagina id="como-atuamos" arquivo="home/como-atuamos/index.html">
    <renomeacao>Era "Projeto PAAPS". Virou "Como Atuamos".</renomeacao>
    <funcao>
      Explica o que é contratar a PAAPS. Dá a ideia de programa sem usar a palavra programa.
      São duas frentes, e é escolha da Mallu não chamar de programa.
    </funcao>
    <abertura traducao_exigida="sim">
      Ideia original da Mallu, que NÃO pode aparecer com estas palavras:
      "O PAAPS pensa a sua cidade como um psicólogo pensa o seu caso clínico. Pensamos a sua
      cidade como uma rede viva, complexa, e queremos atuar da maneira mais íntegra e holística
      possível."
      A tradução precisa carregar: a cidade é olhada inteira, com o mesmo cuidado e o mesmo
      método com que um psicólogo olha uma pessoa, antes de propor qualquer coisa.
      A leitura vem antes da proposta.
    </abertura>
    <logica_que_decide_o_caminho>
      A PAAPS lê a rede e o que encontra determina por onde começar.
      Se a equipe está sofrendo, adoecida, em sofrimento de saúde mental → caminho do CUIDADO.
      Se a equipe está madura mas não se comunica, não se integra, e o cidadão sente isso →
      caminho da INTEGRAÇÃO DE REDE.
    </logica_que_decide_o_caminho>

    <bloco id="cuidado" formato="caixa grande sobre foto">
      <imagine>
        Imagine que a PAAPS chega para a primeira conversa com a sua equipe e encontra gente
        adoecida. Imagine que há choro. Imagine que há desespero. Imagine que há desesperança
        dentro da equipe que deveria cuidar do cidadão.
      </imagine>
      <resposta>O que a PAAPS faz: a PAAPS cuida.</resposta>
      <entregaveis>
        1. Psicoterapia online de qualidade para todas as pessoas da equipe contratada.
        2. Plantão psicológico nas unidades, no próprio ambiente de trabalho, com privacidade,
           ética e regulamentação, ativo em pelo menos um dia por semana.
        3. Grupos de apoio à equipe. Grupos humanos, onde se elabora e se aprende a se cuidar,
           para fortalecer uma equipe fragmentada e isolada.
      </entregaveis>
      <foto>Radilson, imagem bonita que comova. Candidatas: escuta-ausculta.jpg (clara, pede
        texto marrom), visita-marajo.jpg, visita-gurupi.jpg.</foto>
    </bloco>

    <bloco id="integracao-de-rede" formato="caixa grande sobre foto">
      <imagine>
        Imagine uma rede que deveria trabalhar junta e não se comunica. Que deveria se apoiar e
        não se apoia. Onde o encaminhamento trava, e quem sente isso é o cidadão.
      </imagine>
      <tese>O problema não é uma pessoa. O problema é uma cultura.</tese>
      <o_que_a_paaps_faz>Escuta, faz compartilhar, constrói acordos.</o_que_a_paaps_faz>
      <entregaveis>
        Acordos · fluxos · a manutenção desses fluxos · a manutenção das relações · pessoas
        escolhidas dentro de cada equipe como representantes de comunicação em momentos-chave ·
        realinhamento de fluxos · debate de casos em ambiente seguro, respeitoso, com acordos e
        mediado por especialistas da PAAPS.
      </entregaveis>
      <foto>psf-periferia-sp.jpg (três lugares da rede na mesma porta) ou psf-jaragua.jpg.</foto>
    </bloco>

    <componente_mapa status="a construir depois do site">Ver bloco componente_mapa_da_cidade.</componente_mapa>
  </pagina>

  <pagina id="urgencias" arquivo="home/urgencias/index.html">
    <titulo decidido_pela_mallu="2026-08-02">Urgências e Eventos Extremos</titulo>
    <visao_de_futuro>
      Cada vez mais o mundo terá desastres ligados ao clima, às mudanças climáticas, à violência
      na sociedade e a emergências de fato. É um mundo que precisa saber atuar nessas horas.
      A página pode ter foco mais climático.
    </visao_de_futuro>
    <posicao>
      A PAAPS não é uma equipe que apenas atende. É quem pensa e estrutura a política de como
      lidar com essas situações. Evitar a palavra "contenção".
    </posicao>
    <argumento_1>
      Contra a equipe que chega e vai embora: uma equipe externa atende a população e, seis
      meses ou um ano depois, sai do território. A equipe local fica sem controle do que foi
      feito.
    </argumento_1>
    <argumento_2>
      Contra o voluntariado sem estrutura: chegam muitos profissionais voluntários, nada é
      registrado, e meses depois a população volta ao abandono porque a equipe local não tem
      controle do que aconteceu.
    </argumento_2>
    <o_que_a_paaps_faz>
      A PAAPS orquestra. Treina a equipe local. Muitas vezes faz os atendimentos e os
      acolhimentos. Constrói a política estratégica e coletiva na qual é especializada, com uma
      rede de profissionais especializados. Tudo em diálogo permanente com a gestão, com
      registro e com dados, para que o trabalho dure, não termine quando a gestão terminar, e
      sirva inclusive como proteção para o município que sofreu o desastre.
    </o_que_a_paaps_faz>
    <tom>
      Muito respeitoso. Nada de tragédia como vitrine. Ninguém aparece em sofrimento na foto:
      a dor fica no texto e no dado, a imagem carrega a resposta.
    </tom>
    <referencias>
      Estética: Yunus. Dados e sensibilidade: a forma como o concorrente apresenta dados,
      combinada com os argumentos e a metodologia que só a PAAPS tem. Nunca citar o concorrente.
    </referencias>
    <foto>palafitas-chuva.jpg (agente comunitária diante de palafitas) e corredor-epi.jpg
      (dois profissionais de EPI de costas, ninguém identificável).</foto>
    <ancora_legal_util>
      Política Nacional de Proteção e Defesa Civil, Lei 12.608/2012: prevenção, preparação,
      resposta e recuperação. Fala a língua do gestor e sustenta o argumento de que não basta
      chegar e atender.
    </ancora_legal_util>
  </pagina>

  <pagina id="contato" arquivo="home/contato/index.html">
    <campo obrigatorio="sim" origem="pedido explícito da Mallu">
      Número estimado de funcionários contemplados.
    </campo>
    <campos>
      Nome · cargo · município ou organização · e-mail · telefone ou WhatsApp ·
      tipo de organização (prefeitura, secretaria, consórcio, ONG, empresa) ·
      número estimado de funcionários contemplados ·
      "Em uma frase: o que está acontecendo com a sua equipe hoje?"
    </campos>
    <cta>Agendar a conversa de 45 minutos, sem custo e sem compromisso.</cta>
  </pagina>
</arquitetura_de_paginas>

<componente_mapa_da_cidade prioridade="depois do site pronto" status="v0 reprovada pela Mallu">
  <objetivo>
    Mostrar, de forma didática e iterativa com o usuário, uma camada de cuidado por cima da
    rede que já existe na cidade. NUNCA usar a palavra supraestrutura na tela.
  </objetivo>
  <cena>
    Mapa BONITO de uma cidade com igreja típica mineira. Espalhados pela cidade: CAPS I,
    CAPS III, CAPS AD, CRAS, CREAS, postinho e residência terapêutica.
  </cena>
  <lupa>
    Uma lupa percorre a cidade. Antes: revela servidores adoecidos desabafando nos corredores.
    Depois que a rede de cuidado desce: revela os mesmos servidores em psicoterapia, em grupo e
    em treinamento, conseguindo cuidar melhor da população.
  </lupa>
  <interacao>Iterativa conforme o usuário desce a página.</interacao>
  <estado_atual>
    Implementado em codigo/site/home/mapa/ (HTML, CSS e JS). A cidade e a igreja renderizam bem;
    a Mallu avaliou o conjunto como "bem ruim ainda". Refazer o desenho e a narrativa antes de
    embutir em Como Atuamos. Defeito já corrigido: offsetTop devolvia zero porque o pai
    posicionado era a própria seção.
  </estado_atual>
</componente_mapa_da_cidade>

<inteligencia_externa>
  <analise origem="Notion" nome="Simulação de UX: 3 personas x 12 sites" data="2026-06-16">
    <persona>Cláudia, 52, Secretária de Saúde de município de 40 mil habitantes em MG. Duas
      assistentes sociais pediram afastamento na semana.</persona>
    <persona>Célia, 43, psicóloga, líder de projeto em ONG com verba de edital aprovada.</persona>
    <persona>Camila, 36, RH e ESG em empresa de 800 pessoas, com mandato de NR-01.</persona>
    <recomendacao>Reconhecimento em 5 segundos: três portas de público na primeira dobra, cada
      uma com linguagem, caso e CTA próprios.</recomendacao>
    <recomendacao>Humanização antes do método.</recomendacao>
    <recomendacao>Objeções respondidas no corpo da página: funciona em município com orçamento
      pequeno? tem condição para ONG com edital aprovado? está em conformidade com a NR-1?</recomendacao>
    <recomendacao>Métrica sempre com contexto humano: município, número de servidores, período,
      resultado e o que mudou para a equipe.</recomendacao>
    <recomendacao>Fluxo emocional antes do informativo: abrir pela ferida coletiva, não pela
      metodologia.</recomendacao>
    <recomendacao decisao_pendente="comercial">Faixa de investimento visível, ancorada por porte.</recomendacao>
  </analise>

  <analise origem="Notion" nome="Padrões de Design da oferta B2G/B2B" data="2026-06-16">
    <achado>Quatro concorrentes usam a mesma cena do senhor sorridente no campo. A foto deixou
      de diferenciar. O acervo documental próprio da PAAPS é vantagem estrutural.</achado>
    <achado>Menu quase universal "Sobre · Soluções · Publicações · Contato" não diz para quem o
      site é. Navegar por público, não por categoria interna.</achado>
    <achado>Grade de pilares abstratos vira parede de texto que o gestor pula. Usar a sequência
      dor → caso → resultado.</achado>
    <achado gravidade="alta">Concorrentes renderizam áreas em branco quando o JS não dispara; um
      deles exibe contadores de impacto em zero. A primeira dobra da PAAPS precisa ser estática
      e à prova de falha, e nenhum número essencial pode zerar.</achado>
  </analise>

  <benchmark origem="navegação ao vivo" data="2026-08-02">
    <yunus veredicto="referência estética legítima, péssima referência de dado">
      Não tem bloco de números em lugar nenhum. Paleta de um acento só sobre branco quase total.
      Caixa alta só em eyebrow e botão, sempre com tracking generoso. Site praticamente estático.
      EVITAR: o h1 do Yunus é o eyebrow de 14px e a manchete real é um span de 44px; quebra
      semântica, leitor de tela e SEO. EVITAR: recorte poligonal irregular nas fotos e banco de
      imagem internacional.
    </yunus>
    <prosames veredicto="referência de dado e sensibilidade">
      <padrao>Faixa de prova fechando o hero, separada por fio a 12 por cento, em flex-wrap, que
        quebra sozinha no celular.</padrao>
      <padrao>Stat card: número grande + caption em frase inteira + uma linha de fontes para o
        bloco todo, não por card.</padrao>
      <padrao>Chip de legenda pinado no canto da foto, dizendo lugar e situação. Transforma
        imagem em registro documental e mata a leitura de estética da tragédia.</padrao>
      <padrao>Número-herói pareado com parágrafo que nomeia a cidade, terminando em linha
        discreta de procedência do dado.</padrao>
      <padrao>Ritmo de capítulo por alternância de fundo com padding fixo.</padrao>
      <evitar>Opacidade como recurso de hierarquia: a linha de procedência do dado é o texto
        menos legível da página deles. Usar cor sólida com contraste medido.</evitar>
      <evitar>92 elementos servidos com opacity zero inline, sem noscript e sem nenhuma regra de
        prefers-reduced-motion na página inteira.</evitar>
    </prosames>
    <alerta_estrategico>
      O concorrente já usa os MESMOS dados que a PAAPS pretende usar: 546 mil afastamentos,
      recorde, mais os municípios de Minas. Repetir o mesmo conjunto na mesma forma faz a PAAPS
      parecer derivada. Diferencial disponível: o recorte SUS + assistência social + educação é
      mais largo que o do concorrente, e a tese da PUC-MG é lastro que só a PAAPS tem.
    </alerta_estrategico>
  </benchmark>
</inteligencia_externa>

<dados_autorizados>
  <dado fonte="Ministério da Previdência Social, 2025, divulgado jan/2026">
    546.254 benefícios por transtornos mentais e comportamentais · mais 15,66 por cento sobre
    2024 · Minas Gerais é o 2º estado, com 83.321 · 63,46 por cento são mulheres, exatamente
    quem sustenta a ponta da rede.
  </dado>
  <dado fonte="SUS">220 milhões de pessoas, 76 por cento dependendo diretamente ·
    265 mil agentes comunitários · CAPS de 424 em 2004 para 3.013 em 2018.</dado>
  <dado fonte="Censo SUAS">8.357 unidades de CRAS · CREAS em perto de 3.000 municípios.</dado>
  <dado fonte="Freeman et al., PNAS, 2014, 225 estudos">Aprendizagem ativa sobe 6 por cento a
    média; a aula expositiva eleva a reprovação em 55 por cento.</dado>
  <caso fonte="campo próprio, 2024">
    Desterro do Melo (MG), cerca de 3 mil habitantes, 95 por cento dependente de repasses
    externos. Um ano inteiro de campo em 6 instituições · mais de 120 pais e cuidadores numa
    única dinâmica de Dia da Família · os 3 candidatos a prefeito assinaram juntos a Carta de
    Compromisso Melo 2050 · documentado com diários de campo, registros e supervisão.
  </caso>
  <lastro fonte="PUC-MG, 2026">
    Tese: Os Saberes das Encruzilhadas e os Servidores Públicos da Linha de Frente: o Binômio
    Violência-Cuidado na Fronteira Epistêmica.
  </lastro>
</dados_autorizados>

<fronteiras_e_contingencias>
  <fronteira>Não publicar nada sem o gate da Mallu. Ela é o julgamento final.</fronteira>
  <fronteira>Nenhuma foto de terceiro sem crédito. Nenhuma foto de pessoa em situação íntima de
    saúde sem autorização explícita: mesma régua dos 4 logos autorizados.</fronteira>
  <fronteira>Nenhum segredo em arquivo commitado.</fronteira>
  <contingencia se="não achar a fonte de uma foto">
    Aplicar com legenda "Referência a confirmar" e listar a pendência na entrega.
  </contingencia>
  <contingencia se="um dado não estiver no FrameWork">
    Não inventar. Deixar o espaço marcado e perguntar.
  </contingencia>
  <contingencia se="o JS falhar">
    A página inteira continua legível e nenhum número zera.
  </contingencia>
</fronteiras_e_contingencias>

<pendencias_de_decisao_da_mallu>
  <pendencia id="investimento">Faixa de investimento visível no site? É decisão comercial,
    não de design.</pendencia>
  <pendencia id="fotos-origem">Confirmar com o Radilson a origem de RAD_0472, RAD_0589 e
    RAD_1282, que parecem não ser do Brasil.</pendencia>
  <pendencia id="hero-resolucao">A melhor candidata a hero (psf6) tem só 1494px. Pedir o
    original em alta ao Radilson.</pendencia>
  <pendencia id="mapa">Redesenhar o mapa da cidade. A v0 foi reprovada.</pendencia>
</pendencias_de_decisao_da_mallu>

<chain_of_thought momento="antes de escrever qualquer linha de copy ou de código">
  Pare e responda internamente, nesta ordem:
  1. Qual página, qual seção, e qual é a pergunta que o gestor tem na cabeça nesse ponto?
  2. Estou na fase objetiva e imaginativa, ou já posso aprofundar? A abertura precisa ser
     objetiva.
  3. Alguma palavra que vou usar está na lista de banidas? Um secretário de cidade de 3 mil
     habitantes entenderia sem procurar no dicionário?
  4. Se estou usando um dado, ele veio do FrameWork? Tem legenda em frase inteira? A fonte está
     declarada uma vez para o bloco?
  5. Se estou usando uma foto, ela tem legenda com crédito? Alguém aparece em sofrimento?
  6. A cor que escolhi respeita a ordem bege, marrom, amarelo, oliva, terracota, roxo?
  Só avance depois de responder as seis.
</chain_of_thought>

</instrucao_de_contexto>
```

---

## Estado da implementação em 02/08/2026

| Item | Situação |
|---|---|
| `css/paaps.css` | Escrito. Fontes locais, hierarquia de cor nova, `.sobre-foto`, `.legenda`, reduced-motion. |
| `fontes/` | 8 arquivos copiados de `nucleo-comum/fontes/`. |
| `img/radilson/` | 21 fotos tratadas para web a partir do acervo de 33. |
| `img/paaps/` | 6 fotos próprias, incluindo sala de treinamento. |
| `mapa/` | v0 construída e reprovada. Refazer. |
| Home | A refazer sobre a base nova. |
| Treinamentos, Como Atuamos, Urgências, Contato | A escrever. |
| `home/index.html` (v0) | Tem duas imagens quebradas: aponta para `img/case.jpg` e `img/equipe.jpg`, que não existem (o arquivo real é `caso.jpg` e não há `equipe.jpg`). |
