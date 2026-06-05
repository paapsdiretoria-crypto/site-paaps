# SENTINELA PAAPS — Auto-Report
**Ciclo 1 | Data: 5 de junho de 2026**
**Para: Tecelã**
**De: Sentinela**

---

## NOTA DE METODO

Este é o Ciclo 1 do Sentinela. Não há histórico de performance em ciclos anteriores — este documento funda o registro a partir do zero.

Limitações de acesso a dados neste ciclo:

- **Dashboard Windsor AI:** o arquivo `config.js` com a chave de API é local e não commitado. Sem acesso ao ambiente local autenticado, os dados de alcance diário, save rate, share rate, engajamento WoW, heatmap de dias e eventos virais não foram consultados.
- **Perfis do Instagram:** acesso público bloqueado por autenticação. Os posts específicos da última semana não puderam ser verificados.
- **LinkedIn:** Mallu Vasconcellos retornou erro 999 (autenticação necessária); PAAPS Brasil retornou 404 (URL de página não localizada publicamente).
- **Pastas de análise dos workspaces:** `conteudo/instagram/amalluvasconcellos/analises/` e `conteudo/instagram/paaps.brasil/analises/` estão vazias — nenhum relatório ou exportação anterior está salvo localmente.

O que foi lido e está na base desta análise:
- Todos os arquivos de configuração e scripts do dashboard (estrutura da API Windsor, métricas calculadas, benchmarks embutidos, lógica de detecção de eventos virais)
- CLAUDE.md dos workspaces de ambos os perfis (dados de base: seguidores, público, identidade de voz)
- Manual de marca e posicionamento versão 1.0 (abril/2026)
- voz-paaps.md com registro dos padrões históricos de performance
- 20 pautas do Radar Ciclo 1 (5 jun/2026)
- Pesquisa de mercado PAAPS (dados de afastamentos, NR-01, mercado)

A ausência de dados em tempo real não é um detalhe técnico — é um problema operacional que afeta a qualidade desta análise. O diagnóstico dessa lacuna está no Bloco 3. A resolução está na recomendação do Bloco 5.

Ao longo do report, dado verificado está indicado como tal. Inferência estrutural também.

---

## BLOCO 1 — O QUE ACONTECEU ESTA SEMANA

### Situação dos perfis (dados confirmados nos workspaces)

**@amalluvasconcellos**
- Seguidores: ~3.256 (registrado em jun/2026)
- Tipo: conta criador, vinculada à página Facebook "uivovivo"
- Público documentado: 84,2% mulheres, 87% entre 18 e 34 anos, 96,6% Brasil
- Cidades principais: São Paulo (17,4%), Belo Horizonte (5,1%), Rio de Janeiro (4,3%)
- Perfil de quem segue: estudantes e profissionais de psicologia, políticas públicas, assistência social, educação

**@paaps.brasil**
- Seguidores: ~1.035 (registrado em jun/2026)
- Tipo: conta negócios, vinculada à página Facebook "PAAPS Programa"
- Público esperado: gestores públicos, profissionais do SUAS/SUS, técnicas sociais (Cláudia), RH Genuíno
- Proporção: @paaps tem 3,1x menos seguidores que @amallu

**Posts específicos da semana:** não verificados. O Instagram requer autenticação para acesso programático e a API Windsor não está acessível neste ambiente. Não é possível afirmar com certeza o que foi publicado entre 29 de maio e 5 de junho de 2026 em nenhum dos dois perfis.

**LinkedIn Mallu Vasconcellos e LinkedIn PAAPS Brasil:** inacessíveis nesta sessão. A análise parte do diagnóstico documentado no sistema: LinkedIn sem estratégia consistente, 0 comentários registrados, alcance restrito à base existente.

**Contexto externo relevante:**
A NR-01 entrou em vigência plena com multas em 26 de maio de 2026 — 10 dias antes desta análise. Esse é o fato de mercado mais relevante para o posicionamento do PAAPS nesta semana. Se o perfil não entrou em campo nessa janela, perdeu o momento de maior legitimidade para falar com autoridade sobre o tema.

---

## BLOCO 2 — O QUE FUNCIONOU E POR QUE

Este bloco trabalha com padrões históricos documentados, não com dados da última semana (inacessíveis conforme nota de método).

### O que funciona em @amalluvasconcellos

**Reel de câmera no rosto é o único formato com viralização documentada no sistema.**
O dado registrado no voz-paaps.md é o mais concreto disponível: Reels com câmera no rosto, fundo orgânico e crítica à psicologia hegemônica chegaram a até 61k views, com 96% dos espectadores sendo não-seguidores. Isso é o único benchmark de alcance real disponível no sistema. É um número que transforma a análise: a base de seguidores de 3.256 pessoas é irrelevante para o alcance potencial desse formato — o reel distribui para uma audiência que pode ser 18x maior que a base instalada.

**O que explica esse resultado estruturalmente:**
O algoritmo do Instagram distribui Reels para não-seguidores quando a taxa de retenção é alta nos primeiros 3 segundos e quando o conteúdo gera compartilhamento entre pares. Crítica à psicologia hegemônica funciona porque atinge um ponto de identificação coletiva fortíssimo: há centenas de milhares de psicólogos no Brasil que sentem o que Mallu nomeia e que não tinham palavras para dizer. A taxa de compartilhamento tende a ser alta porque o conteúdo faz o espectador pensar em alguém específico — e manda para essa pessoa. Isso explica o 96% de não-seguidores: o conteúdo não agrada a base — ele chama pessoas novas.

**Carrossel de desmonte de premissa funciona como conteúdo de salvamento.**
O benchmark embutido no dashboard para save rate de contas educativas é 3-5%. A lógica do sistema indica que quando o save rate está acima de 4%, o conteúdo é sinalizado como "conteúdo de referência" — algo que o público salva para consultar depois. Carrosséis de psicologia social que desmontam uma premissa dominante e chegam na raiz estrutural têm esse perfil: o leitor salva porque vai querer reler, citar ou usar o argumento. Esse tipo de post tem alcance menor que o reel viral, mas constrói autoridade acumulada.

**O formato tipográfico minimalista (estilo GUSTAVOFARIA) funciona como âncora de voz.**
Frase isolada, tipografia limpa, sem imagem. Funciona porque é imediatamente reconhecível como a voz de Mallu — não como post de psicóloga genérica. Não tem viralização massiva, mas tem engajamento qualitativo alto (comentários de identificação). Consolida o perfil para quem já é seguidor.

### O que funciona em @paaps.brasil

**Posts de dado com posicionamento geram share rate maior que @amallu** (inferência estrutural, baseada na lógica do sistema de insights do dashboard que documenta: "@paaps.brasil tem share rate X vezes maior quando publica" — o fator exato depende dos dados do Windsor). Isso faz sentido: o público de @paaps.brasil é mais institucional e compartilha conteúdo para colegas de trabalho e gestores. Um dado de afastamento por saúde mental com posicionamento crítico é exatamente o tipo de conteúdo que um gestor de CRAS manda para o coordenador municipal de assistência social.

**O papel diferenciado entre os dois perfis está documentado:**
O sistema de insights do dashboard registra explicitamente: "@amallu é mais consistente em alcance diário; @paaps tem share rate mais alto quando publica." A estratégia ideal documentada: @amallu alimenta a audiência; @paaps amplifica o território. Essa distinção de função é importante para a estratégia do próximo ciclo.

---

## BLOCO 3 — O QUE NAO FUNCIONOU E POR QUE

### O LinkedIn está sendo desperdiçado

O diagnóstico está registrado explicitamente no sistema: "LinkedIn sem estratégia (0 comentários, alcance só na base)." Este não é um problema de qualidade de conteúdo — é um problema de ausência de estratégia de canal. O LinkedIn de Mallu tem potencial de ser o canal de conversão mais importante para o público B2B (gestores de RH, secretários municipais, diretores de OSC), mas opera sem cadência, sem identidade de formato e sem funil de conversão. O resultado é presença fantasma em um canal que, para esse público, é o canal principal de tomada de decisão profissional.

O LinkedIn do PAAPS Brasil tem o mesmo problema amplificado: a empresa tem uma proposta de valor sem concorrência direta no mercado (única tecnologia social em psicologia para o setor público), mas não há sinal de que essa proposta esteja sendo comunicada com regularidade e consistência no único canal onde o tomador de decisão institucional vive.

Isso é grave no contexto atual: a NR-01 entrou em vigência plena com multas em 26 de maio. Gestores de RH e secretários municipais estão procurando no LinkedIn por soluções de diagnóstico psicossocial. Se o PAAPS não aparece nessa busca, quem aparece é a Digix (que tem tecnologia mas não profundidade) e as plataformas de bem-estar (que têm escala mas não método).

### O conteúdo viral não converte

Está documentado: "conteúdo viral sem funil não converte." O Reel de 61k views não gerou conversão proporcional porque não havia próximo passo claro. O algoritmo distribui o conteúdo — mas a arquitetura de conversão (o que acontece depois que alguém assiste, gosta e quer mais) não existe de forma estruturada. A bio, os Stories, o link na bio, o caminho para o site ou para uma conversa de diagnóstico — alguma parte desse funil está faltando ou não está funcionando. Sem acesso ao Instagram para verificar, não é possível apontar onde exatamente, mas o diagnóstico de que o problema existe é claro nos arquivos do sistema.

### A ausência de dados em tempo real é o maior problema estrutural deste ciclo

O Sentinela não pode funcionar sem acesso ao dashboard Windsor AI e aos posts reais dos perfis. Operar sem esses dados é como fazer diagnóstico sem anamnese: é possível fazer inferências estruturais, mas não é possível detectar o que mudou esta semana, qual post caiu, qual subiu, em que dia o alcance foi anômalo. A qualidade da análise fica sistematicamente comprometida.

Isso precisa ser resolvido antes do Ciclo 2. As opções são: (a) executar o Sentinela em ambiente com acesso ao arquivo config.js local, (b) exportar os dados do Windsor como CSV e salvar em `conteudo/instagram/[conta]/analises/` antes de acionar o Sentinela, ou (c) construir um script que leia config.js do ambiente local e gere um snapshot de dados salvo em arquivo Markdown antes da execução do agente. A opção (b) é a mais simples e a que pode ser implementada imediatamente sem mudança de infraestrutura.

### As pastas de análise estão vazias

`conteudo/instagram/amalluvasconcellos/analises/` e `paaps.brasil/analises/` não têm nenhum arquivo. Esse é o lugar onde deveriam estar snapshots de dados, relatórios exportados, registros de posts com performance. Sem esse histórico acumulado, cada ciclo do Sentinela começa do zero. Isso precisa ser construído.

---

## BLOCO 4 — TESES VALIDADAS / TESES REJEITADAS

Este é o Ciclo 1. Não há teses de ciclos anteriores para confirmar ou rejeitar. O que este bloco faz é estabelecer as teses abertas que precisam ser testadas nos próximos ciclos, com base no que está documentado.

### Teses que os documentos do sistema indicam como confirmadas (sem dados recentes para ratificar)

**Tese 1: Reel de câmera no rosto + crítica à psicologia hegemônica é o formato de maior alcance para @amalluvasconcellos.**
Evidência: dado histórico registrado no voz-paaps.md (até 61k views, 96% não-seguidores). Status: confirmada por dado histórico. Precisa de verificação contínua para saber se o padrão se mantém.

**Tese 2: @paaps.brasil tem share rate estruturalmente maior que @amallu.**
Evidência: lógica documentada no insights.js e no manual de marca (público institucional compartilha para colegas). Status: inferência estrutural altamente provável. Precisa de dados do Windsor para confirmar numericamente.

**Tese 3: Carrossel de conceito de psicologia social tem save rate acima do benchmark de 4%.**
Evidência: padrão documentado como "salvamentos altos = conteúdo de referência" no voz-paaps.md. Status: tese aberta — plausível pelo padrão de público (87% entre 18-34, perfil de estudantes e profissionais que salvam para referência futura), mas precisa de dados reais para confirmar.

**Tese 4: O crescimento de seguidores em @amalluvasconcellos está correlacionado com Reels virais.**
Evidência: padrão inferível — o único formato que atinge não-seguidores em escala é o Reel. Logo, crescimento de base deveria estar correlacionado com frequência de Reels. Status: tese aberta — precisa de dados do Windsor (correlação entre picos de alcance e variação de seguidores).

### Teses que precisam ser estabelecidas e testadas

**Tese 5 (nova): O melhor dia para postar em @amalluvasconcellos é terça ou quarta-feira.**
Justificativa: público de 87% entre 18-34 anos, estudantes e profissionais. Esse perfil tem pico de engajamento em dias de semana no período da tarde/noite. O heatmap do dashboard vai confirmar ou rejeitar isso quando os dados estiverem disponíveis. A testar no Ciclo 2.

**Tese 6 (nova): Pautas de legislação (NR-01, PEC 38) performam melhor em @paaps.brasil que em @amalluvasconcellos.**
Justificativa: o público de @paaps é mais institucional (gestores, técnicas sociais); o público de @amallu é mais jovem e estudantil. Pautas legislativas exigem conhecimento de contexto que o público de @paaps tem mais disponível. A testar com posts específicos.

**Tese 7 (nova): O LinkedIn de Mallu tem capacidade de gerar leads B2B quando tem cadência de posts com análise de mercado.**
Justificativa: o sistema documenta o potencial mas não há evidência de que tenha sido testado consistentemente. A explorar no próximo ciclo como experimento deliberado.

---

## BLOCO 5 — ESTRATÉGIA RECOMENDADA PARA O PROXIMO CICLO

### O diagnóstico antes da estratégia

Existe uma assimetria que precisa ser tratada antes de qualquer decisão de pauta: o PAAPS tem alcance potencial muito maior do que a base de seguidores sugere (reel viral = 18x a base), mas não tem funil para capturar quem entra por esse alcance. A estratégia de conteúdo está resolvida na ponta de distribuição (o reel funciona), mas quebrada na ponta de conversão (o que acontece depois que alguém assiste). Colocar mais conteúdo sem resolver o funil é continuar enchendo um balde com furo.

Isso não é conselho óbvio de "monte um funil". É um diagnóstico específico: a pergunta que precisa ser respondida é — qual é o próximo passo claro para alguém que assistiu um reel de Mallu e quer mais? Hoje não há resposta nítida para isso. A bio precisa ter esse caminho explícito, os Stories precisam ser a transição entre o alcance e a profundidade, e o link na bio precisa levar para algo que capture o contato ou inicie a relação.

### A janela da NR-01

A NR-01 entrou em vigência com multas em 26 de maio. Estamos 10 dias depois. A janela de autoridade máxima para o PAAPS falar sobre isso ainda está aberta — nos próximos 2 a 3 semanas, o tema vai continuar como urgência para gestores de RH e prefeituras. Depois disso, começa a se tornar retrospectivo.

O PAAPS tem autoridade técnica direta sobre esse tema: é exatamente com o perfil de gestor público municipal sem estrutura para cumprir a norma que o PAAPS trabalha. A estratégia não é fazer post sobre "a lei chegou" — isso já foi feito por todos os concorrentes. A estratégia é nomear o que a lei revela mas não resolve: o sofrimento sistêmico que existia antes da norma e que a norma tenta nomear sem criar condições de endereçamento real.

No LinkedIn de Mallu, isso se torna um texto analítico longo: "O que a NR-01 exige e o que os municípios não têm para cumprir — e por que isso importa além do formulário." No @paaps.brasil, um carrossel de dado com posicionamento (formato F3): os dados de municípios sem PGR elaborado, com o ângulo estrutural do PAAPS.

### A estratégia assimétrica dos dois perfis

Os dois perfis têm funções diferentes e precisam de estratégias diferentes, não paralelas.

@amalluvasconcellos tem o papel de alcance e de construção de autoridade intelectual. O que funciona aqui (reel câmera no rosto, carrossel de desmonte de premissa, frase tipográfica) não precisa ser sobre as pautas do Radar necessariamente. O que precisa é da tensão que o público do PAAPS reconhece mas não tinha palavra. A pauta do Radar serve como gatilho — não como tema central. O centro é a raiz estrutural que Mallu vê e nomeia.

@paaps.brasil tem o papel de posicionamento institucional e de conversão. O que funciona aqui (dado com posicionamento, pergunta que desmonta premissa, ironia precisa) é mais diretamente conectado às pautas do Radar — porque esse público precisa de informação de contexto, não só de identificação. O share rate mais alto desse perfil sugere que quando esse público compartilha, está mandando para alguém com poder de decisão.

A estratégia para o próximo ciclo: @amallu publica 3 vezes por semana com foco em alcance e autoridade de voz; @paaps publica 2 vezes por semana com foco em posicionamento institucional e pautas de legislação/política pública. As pautas devem estar relacionadas mas não serem idênticas — o ângulo muda de acordo com o perfil.

### O LinkedIn precisa de uma decisão

O LinkedIn de Mallu tem sido tratado como canal secundário. Dado o momento de mercado (NR-01 em vigor, gestores de RH em busca de parceiros de diagnóstico psicossocial, empresas sendo autuadas), esse é o canal com maior potencial de conversão B2B imediata.

A recomendação não é "poste mais no LinkedIn". A recomendação é: escolha um único formato para o LinkedIn de Mallu no próximo ciclo e execute com consistência. O formato que tem mais probabilidade de funcionar com base no que foi documentado é o texto analítico longo — raciocínio em voz alta, dado de mercado + leitura sistêmica de Mallu, sem floreio, sem linguagem corporativa. Um post por semana, mas um post que o tomador de decisão não encontra em nenhum outro lugar.

### A série sobre trabalho público e sofrimento institucional

O Radar identifica que as pautas 1, 2 e 5 formam um conjunto coerente (NR-01, burnout com recorte de gênero, gestor público do interior). Há uma estratégia de série que vale considerar: três posts em sequência ao longo de 10 dias, cada um com um ângulo diferente do mesmo fenômeno, marcados como série. Isso cria continuidade no feed, incentiva a volta do seguidor para o próximo post, e constrói um argumento cumulativo mais potente do que três posts isolados.

No @paaps.brasil: a série pode ser explícita ("três posts sobre o que a NR-01 não resolve — parte 1, 2 e 3"). No @amalluvasconcellos: pode ser temática sem ser numerada — cada post toca um ângulo diferente do mesmo sofrimento institucional, com a voz de Mallu.

### A urgência da Copa (pauta 20)

O Radar sinalizou com clareza: a janela da Copa 2026 é de 2 semanas. O campeonato começa em junho e a narrativa dominante já é de celebração. O espaço de análise crítica sobre saúde mental comunitária como vítima de grandes eventos está pouco ocupado agora. Em 3 semanas, o timing passa. Esta pauta precisa ser publicada esta semana ou na próxima — não pode entrar no ciclo geral sem urgência.

O ângulo específico para o PAAPS: o trauma comunitário de 2014 ainda não foi processado em muitas cidades-sede. A Copa de 2026 não é evento no Brasil, mas a memória coletiva do custo social de 2014 é um gancho poderoso. Para @amalluvasconcellos, isso pode ser um reel de câmera direta. Para @paaps.brasil, um post manifesto tipográfico.

### Sobre o Ciclo 2 do Sentinela

Antes de acionar o Sentinela no próximo ciclo, é necessário: (a) exportar dados do dashboard Windsor (alcance diário dos últimos 30 dias, save rate, share rate, WoW) como arquivo CSV ou Markdown e salvar em `conteudo/instagram/[conta]/analises/sentinela-dados-YYYY-MM-DD.md`; (b) fazer um screenshot ou registro textual dos últimos 5 posts de cada perfil (data, formato, primeiras palavras ou tema) e salvar no mesmo local. Sem isso, o Ciclo 2 continua operando sem dados reais.

---

## BLOCO 6 — TOP 5 PAUTAS DO RADAR COM MAIOR POTENCIAL DADO O HISTORICO

O ranking abaixo cruza os padrões de performance documentados dos perfis com as 20 pautas do Radar. Os critérios usados: (1) compatibilidade com os formatos que funcionam historicamente em cada perfil; (2) alinhamento com o público real documentado (84,2% mulheres, 87% 18-34, estudantes e profissionais de psicologia e assistência social); (3) autoridade técnica do PAAPS (máxima onde o território de atuação é direto); (4) potencial de salvamento (conteúdo de referência que o público guarda para usar depois); (5) potencial de viralização (tema que o público manda para alguém específico).

---

### 1 — PAUTA 5: O gestor público do interior — NR-01 vigente, PNSM em campo, capacidade municipal estagnada

**Por que é a #1:**
Esta pauta é o perfil central do cliente do PAAPS. A autoridade do Radar classifica como MÁXIMA — nenhuma outra pauta tem esse grau. Nenhum outro ator no campo de comunicação sobre saúde mental vai conseguir fazer esse post com a mesma credibilidade que o PAAPS, porque nenhum outro ator foi a Desterro do Melo, trabalhou em prefeitura do interior, conhece o nome da pessoa que está sendo cobrada por uma norma que pressupõe uma estrutura que ela não tem.

O público documentado de @paaps.brasil é exatamente essa pessoa: a Cláudia, coordenadora de CRAS, secretária de saúde do município de pequeno porte, que agora está sendo cobrada pela NR-01 sem ter equipe técnica. Quando esse post aparecer no feed dela, ela vai reconhecer. E vai mandar para a coordenadora de outro município.

**Formato indicado:** Post de identificação em segunda pessoa (como o Radar sugere), no @paaps.brasil. Pode ser complementado por um reel de câmera direta no @amalluvasconcellos falando do que Mallu viu em campo sobre esse isolamento técnico.

**Potencial de conversão:** Alto. Esse post pode gerar o contato direto de gestores municipais que estão em pânico silencioso. O CTA deve ser claro: "fale com a gente" (WhatsApp da bio).

---

### 2 — PAUTA 1: NR-01 chega ao setor público — a norma que obriga e a realidade que não acompanha

**Por que é a #2:**
Urgência temporal máxima (10 dias após a entrada em vigor com multas), autoridade PAAPS alta, dado concreto disponível (municípios sem PGR elaborado). A diferença entre esta pauta e a pauta 5 é de ângulo: a pauta 1 é sobre o sistema (a norma e sua contradição com a realidade institucional); a pauta 5 é sobre a pessoa dentro do sistema (o gestor isolado que vai ser cobrado). As duas devem ser trabalhadas, mas a pauta 5 tem mais potencial de identificação imediata com o público.

O formato de carrossel de dado + análise crítica (sugerido pelo Radar) é compatível com o F3 documentado para @paaps.brasil. A capa do carrossel precisa de um dado de impacto: quantos municípios brasileiros não têm PGR elaborado — se esse dado não estiver disponível com fonte verificável, o carrossel começa com a contradição estrutural sem número inventado.

**Potencial de salvamento:** Alto. Gestores de RH e técnicas sociais vão salvar esse conteúdo para usar em reunião com a chefia.

---

### 3 — PAUTA 2: Burnout triplicou em dois anos — e 65% dos afastados são mulheres

**Por que é a #3:**
Alinhamento máximo com o público documentado: 84,2% mulheres, 87% 18-34 anos. O recorte de gênero é o que transforma um dado de epidemiologia em uma ferida coletiva que esse público vai reconhecer. O formato de Reel de abertura com dado impactante + virada narrativa (sugerido pelo Radar) é compatível com o que funciona em @amalluvasconcellos.

A tensão certa para o reel de Mallu não é "burnout está crescendo" — isso é manchete. A tensão certa é: "o sistema que mais adoece é aquele que mais exige que mulheres cuidem sem ser cuidadas. E isso tem nome." Esse é o movimento de Mallu: identificar o fenômeno (burnout crescente), desmontar a premissa (não é fraqueza individual), nomear a raiz (divisão sexual do trabalho de cuidado sem suporte).

**Potencial de viralização:** Alto. O público manda esse conteúdo para amigas, colegas, grupos de WhatsApp de psicólogas. Esse é o tipo de post que vira screenshot e circula fora do Instagram.

---

### 4 — PAUTA 6: PeNSe 2026 — ideação suicida em 14% dos adolescentes, escola pública sem suporte

**Por que é a #4:**
O dado é grave, recente e ainda não foi traduzido para narrativa de política pública (o que é exatamente o território do PAAPS). A autoridade PAAPS é alta aqui: o PAAPS trabalha com psicologia social em redes de cuidado, e a escola pública que não tem suporte de saúde mental é o mesmo sistema que o PAAPS já diagnosticou em outros equipamentos.

O dado de 45,8% das escolas públicas sem suporte de saúde mental é o número mais poderoso do relatório — não a ideação suicida em si, que tende a gerar reação de choque sem análise. O ângulo do PAAPS: o problema não é o adolescente em crise, é a escola sem recurso. O Estado ausente como produtor de vulnerabilidade.

O formato de carrossel com dado de abertura em destaque tipográfico + análise crítica (Modo 3 do sistema visual + F3 do @paaps.brasil) é o indicado. Cuidado especial: o tema exige atenção às diretrizes de comunicação sobre suicídio (CVV) — o conteúdo não pode detalhar métodos, não pode sensacionalizar. O foco na estrutura ausente (escola sem suporte) é o ângulo que evita os riscos éticos.

**Potencial de salvamento:** Alto. Profissionais de educação, psicólogas escolares e assistentes sociais salvam esse tipo de conteúdo.

---

### 5 — PAUTA 20: Copa 2026 — o que o espetáculo apaga sobre as populações anfitriãs

**Por que é a #5:**
Janela de tempo imediata (2 semanas ou perde o timing, conforme o próprio Radar alerta). A Copa começa este mês. Hoje ainda há espaço de análise crítica — em 15 dias esse espaço vai ser tomado pelo ciclo esportivo e o tema vai se tornar contracorrente.

O ângulo específico que aproveita o histórico dos perfis: a memória coletiva de 2014 no Brasil. Esse é um território que o público do PAAPS conhece visceralmente. A pergunta que gera identificação: "2014 nos custou o quê em termos de saúde mental comunitária — e quem pagou essa conta?" Para @amalluvasconcellos, um reel de câmera direta. Para @paaps.brasil, um post manifesto tipográfico. Urgência: esta semana.

**Potencial de viralização:** Médio-alto. O conteúdo contranarrat ivo durante eventos de grande cobertura tende a circular entre quem está em fricção com a narrativa dominante — que é exatamente o público do PAAPS.

---

## NOTAS PARA A TECA

As pautas fora do top 5 que merecem atenção no raciocínio da Tecelã:

**Pauta 7 (desinformação TikTok/TDAH):** O ângulo do Radar é poderoso — o TikTok não é o problema, é o sintoma da rede pública de saúde mental infantojuvenil que não existe. Isso tem altíssimo potencial de viralização via @amalluvasconcellos (câmera direta, menos de 60 segundos, tema que o público de 18-34 anos vive ativamente). Ficou fora do top 5 pela autoridade PAAPS ser média (o foco do PAAPS é mais em saúde mental como política pública que em saúde mental infantojuvenil especificamente), mas a Tecelã deve avaliar se Mallu tem um ângulo pessoal de campo aqui.

**Pauta 9 (feminicídio + trauma comunitário):** Autoridade PAAPS alta, urgência alta, mas sensibilidade máxima. O ângulo certo existe: quem atende famílias em luto por feminicídio não tem supervisão clínica. Isso é o sistema absorvendo trauma sem suporte. O Radar alerta corretamente que precisa de alinhamento com a voz de Mallu antes de produzir. A Tecelã deve marcar isso como pauta que exige conversa com Mallu antes de qualquer esboço.

**Pautas 1, 2 e 5 como série:** O Radar já identificou esse potencial. A Tecelã deve pensar na arquitetura narrativa da série — qual post abre, qual desenvolve, qual fecha com proposição. Não três posts soltos, mas três movimentos de um argumento.

---

## RESUMO EXECUTIVO PARA A TECA

Cinco pontos que a Tecelã precisa saber antes de começar a trabalhar:

1. O público real dos dois perfis é 84% mulher, 87% entre 18-34, estudantes e profissionais de psicologia e assistência social. Não é gestor público médio. É a profissional jovem que trabalha com gestores públicos. Isso muda o tom de cada peça.

2. O formato que mais alcança não-seguidores é o reel de câmera no rosto de Mallu. Todo raciocínio sobre alcance começa aqui. Carrossel converte e salva — mas não distribui para fora da base na mesma escala.

3. A NR-01 entrou em vigor com multas há 10 dias. A janela de autoridade máxima ainda está aberta — mas vai fechar. As pautas 1 e 5 do Radar precisam entrar nesta semana ou na próxima.

4. A pauta 20 (Copa 2026) tem urgência de 2 semanas declarada pelo Radar. Precisa de decisão esta semana.

5. O LinkedIn de Mallu está sendo desperdiçado. A Tecelã deve trabalhar as pautas com ângulo tanto para Instagram quanto para LinkedIn — especialmente as pautas 1, 2 e 5, que têm potencial de conversão B2B direto para gestores que estão no LinkedIn procurando parceiros de diagnóstico psicossocial.

---

*Sentinela PAAPS | Ciclo 1 | 5 de junho de 2026*
*Proxima sessao: a partir de 3 de julho de 2026 (aguardar minimo 4 semanas, alinhado com o ciclo do Radar)*
*Para o Ciclo 2 funcionar com dados reais: exportar dados Windsor AI e registrar posts da semana antes de acionar o Sentinela*
