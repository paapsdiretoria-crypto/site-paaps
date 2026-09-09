# Fotos : Peça 1 da semana (v2) : INSS, o órgão que reconhece o sofrimento do país e não vê o próprio

**Data desta curadoria:** 09/09/2026
**Perfil:** @paaps.brasil
**Fonte da copy:** `conteudo/ciclos/2026-09-02/copy-peca1-inss-v2.md` (rodada 2, 96/100 no Crítico de Conteúdo)
**Esta é a v2 da curadoria.** A v1 (`fotos-peca1.md`, mesmo diretório) está mantida intacta, mas **obsoleta**: puxou as 8 fotos inteiras do mesmo evento próprio da PAAPS (Bela Vista de Minas, novembro/2025), incluindo uma com a Mallu reconhecível, e isso foi reprovado explicitamente por ela nesta rodada de correção porque as três peças da semana ("INSS", "ACS" e "envelhecimento") saíram todas do mesmo campo único. Não reusei nenhuma decisão da v1.

---

## 1. O que eu verifiquei sobre o ambiente antes de escolher qualquer foto

Sigo a Lei 2 e 3 da minha ficha: nenhuma afirmação de ausência sem prova, nenhuma foto descrita sem ter sido aberta.

### 1.1 PhotoBank do Notion (MODO 1) : indisponível nesta sessão, verificado, não presumido

O conjunto de ferramentas efetivamente carregado nesta sessão é: `Read`, `Write`, `Edit`, `Bash`, `mcp__Google_Drive__search_files`, `mcp__Google_Drive__download_file_content`, `mcp__Google_Drive__get_file_metadata`. **Não há nenhuma ferramenta MCP do Notion na minha lista de funções invocáveis** (nem `notion-fetch`, nem `notion-query-data-sources`, nem `notion-update-page`). Isso não é uma suposição: é a lista de tools que me foi entregue no início desta conversa, e não existe forma de eu chamar uma função que não está declarada.

Testei se pelo menos a rede até a infraestrutura do PhotoBank estava aberta (independente de eu ter ou não a ferramenta certa), para não confundir "sem ferramenta" com "rede bloqueada":

```bash
curl -s -m 15 -o /dev/null -w "HTTP_CODE:%{http_code}\n" "https://n8n.srv1850231.hstgr.cloud/webhook/photobank-resolver?page_id=test"
# HTTP_CODE:500 (erro de workflow por page_id inválido, não bloqueio de proxy)

curl -s -m 15 -o /dev/null -w "HTTP_CODE:%{http_code}\n" "https://api.notion.com/v1/search"
# HTTP_CODE:400 (erro de autenticação, não bloqueio de proxy)
```

**Conclusão honesta:** a rede está aberta (diferente do bloqueio de proxy do MODO 1C original), mas isso não me dá nenhum caminho de consulta ao PhotoBank. O webhook do MODO 1B só resolve um `page_id` que eu já tenha em mãos; sem uma ferramenta de query ao Notion, não tenho como descobrir nenhum `page_id` de foto cadastrada. Não tentei "adivinhar" ids nem usar qualquer credencial: não tenho nenhuma, e não seria legítimo. **O PhotoBank do Notion está genuinamente fora do meu alcance nesta sessão.**

### 1.2 Disco local (Mac da Mallu) : não existe neste ambiente

```bash
ls insumos-compartilhados/fotos            # No such file or directory
ls "projetos/minerva/BANCO DE FOTOS"       # No such file or directory
```

Confirmado: este é um checkout do repositório git, e as pastas de fotos (que no `.gitignore` são explicitamente "não commitadas") simplesmente não existem aqui. Isso inclui a pasta `REDE PÚBLICA BRASILEIRA` com as 33 fotos documentais já auditadas em `.claude/agent-memory/buscador-fotos/MEMORY.md` (ACS-Quilombola, Visita-Domiciliar-Gurupi, PSF-Periferia-São Paulo etc.) — são exatamente as candidatas mais fortes para uma peça de servidor público federal em sobrecarga, e nenhuma delas está acessível aqui.

### 1.3 Google Drive (MODO 1C) : única fonte real disponível, e é toda acervo próprio da PAAPS

Busquei ativamente por qualquer acervo documental de rede pública ou de imprensa que pudesse substituir o Notion/disco:

- `title contains 'REDE' and mimeType = folder'` → achei `REDE PÚBLICA - BRASIL` (id `16ERZZlcKjIRBMggzhJ_abtj6HF686XUx`). Consulta `parentId = '16ERZZlcKjIRBMggzhJ_abtj6HF686XUx' and mimeType contains 'image/'` → **0 resultados**. É biblioteca de PDF teórico (CREPOP, RAPS), não acervo fotográfico, confirmando o que já estava registrado no `MEMORY.md`.
- `mimeType = folder and title contains 'FOTO'` → devolveu só `FOTOGRAFIA` (pasta-mãe) com três subpastas: `FOTOS BVMG ISAAC`, `OUTRAS FOTOS`, `ECOA FOTOS` (esta última exclusiva do Interlocutor ECOA, não usei).
- `title contains 'INSS'` → achei uma pasta vazia `Carrossel - INSS Burnout` (criada 03/09/2026, sem arquivos dentro — provavelmente destino de entrega nunca usado de uma rodada anterior).
- Busca ampla por imagem com título contendo `ACS`, `ESF`, `UBS`, `CRAS`, `CAPS`, `RAD_`, `quilombo`, `Marajó`, `previdência`, `perícia`, `agência` → **0 resultados** em toda a conta do Drive.
- `title contains 'Banco de Imagens' or 'Photo Bank'` → **0 resultados**.

**Conclusão, com prova:** a única fotografia real acessível nesta sessão é o acervo próprio da PAAPS, um único evento (workshop/roda de conversa da PAAPS com servidores públicos de Bela Vista de Minas, indoor, novembro/2025, pasta `FOTOS BVMG ISAAC`, 208 arquivos) mais uma pasta pequena e majoritariamente não fotográfica (`OUTRAS FOTOS`, com material de Refazenda). **Nenhuma foto de agência do INSS, sala de perícia, guichê, painel de senha, fila de atendimento previdenciário ou mesmo de rede pública de saúde genérica (UBS/CAPS/CRAS documental) existe em nenhuma fonte que eu consegui abrir nesta sessão.**

---

## 2. A decisão que isso obriga : cap duro no acervo próprio, aplicado com rigor

Você pediu explicitamente: **no máximo 1-2 fotos do mesmo evento/campo no total para esta peça inteira**, e **no máximo 1 foto onde a Mallu apareça reconhecível**. Isso, combinado com o fato de que a única fonte real disponível é exatamente aquele evento único já superusado na semana passada, significa que **não posso responsavelmente preencher os 9 slides com foto real nesta sessão**.

Isso é diferente do que a v1 fez (forçar as 8 fotos do mesmo evento em todos os slides). Prefiro parar e avisar (Regra 3 da minha ficha) a repetir o erro que você já corrigiu. Escolhi usar meu orçamento de 2 fotos do acervo próprio nos dois slides onde a estrutura do argumento (não o cenário literal) tem alguma correspondência real, e declaro os outros 7 slides como bloqueio de ambiente, não como omissão silenciosa.

---

## 3. Slide a slide

### Slide 1 : Capa
**Cena pedida:** mãos sobre teclado, tela com documento aberto, pilha de processos físicos, mesa de atendimento/perícia do INSS, luz de escritório público pela manhã.

**Sem candidata responsável nesta sessão.** Nenhuma fonte acessível mostra mesa de atendimento previdenciário, teclado com documento ou pilha de processos físicos. Usar uma foto do workshop de Bela Vista de Minas aqui seria puramente decorativo, sem carregar a estrutura da cena (a capa é a que mais precisa da cena literal, porque ainda não há texto de apoio explicando o desvio). **Bloqueio de ambiente: recomendo deixar sem foto até uma sessão com PhotoBank/disco, ou decisão sua sobre alternativa.**

### Slide 2 : Voz real do campo (citação de Miucha Cicaroni)
**Cena pedida:** prioridade 1, foto real e identificável de Miucha Cicaroni (Agência Pública, mar. 2026). Sem isso, cena documental equivalente de mesa de atendimento/perícia.

**Não busquei a foto real dela**: exigiria abrir a reportagem da Agência Pública na internet, e o MODO 2 (busca na internet) segue suspenso por decisão sua desde 25/07/2026 — não tentei contornar isso com `curl`, mesmo a rede estando aberta, porque a suspensão é uma decisão sua, não uma limitação técnica que eu deva resolver sozinho.

**Sem candidata documental equivalente nesta sessão** (mesmo motivo do slide 1). **Bloqueio de ambiente.** Se usar uma foto do acervo próprio aqui, o risco é o mesmo que a v1 já cometeu e você reprovou: confundir quem é a pessoa citada. Não repito esse erro.

### Slide 3 : Nomeação ("sofrimento documentado")
**Cena pedida:** mesa com processos físicos empilhados, ou tela com fila de processos digitais; foco nas mãos passando de um processo pro outro, sem pausa visível.

**Candidata única, fraca, com ressalva forte — decisão sua, não minha:**

- **`IMG_7862.JPG`** (`FOTOS BVMG ISAAC`, id `1teeAZc3Aj2gkj1NVTONg7TfOuBVcWjfW`)
  - **O que eu vi:** close-up de uma mão feminina (esmalte azul-claro, pulseira dourada fina) apontando/tocando um post-it rosa numa parede coberta de dezenas de post-its rosa e verde-limão escritos à mão (dinâmica de grupo do workshop). A pessoa está de perfil, cabelo escuro longo ondulado cobrindo a maior parte do rosto, olhando de perto para a parede. Ao fundo à direita, uma cortina listrada e, na sombra, outra pessoa parcialmente visível.
  - **Por que essa, com ressalva:** é a única imagem real acessível que mostra uma **mão engajada, de perto, com um documento escrito** (mesmo sendo post-it, não processo) — carrega uma fração da ideia de "mão processando papel um de cada vez". **Não atende a cena pedida de forma nenhuma além disso:** não é mesa, não é processo, não é fila, é parede de dinâmica de grupo.
  - Acervo: próprio PAAPS (Bela Vista de Minas, workshop nov/2025) · ⚠ licença não declarada (sem PhotoBank nesta sessão para checar)
  - Usos: não verificável (sem Notion nesta sessão)
  - Alertas: rosto majoritariamente coberto pelo cabelo, baixo risco de exposição facial. Identidade da pessoa não confirmada (não é claramente reconhecível como Mallu Vasconcellos, mas também não tenho certeza do contrário).
  - Copiada para `.../sessao-04-inss-v2/fotos/slide-03-candidata-fraca-IMG_7862.jpg`
  - **Se você preferir deixar este slide sem foto a usar uma imagem que não é de mesa/processo, é escolha legítima e talvez mais coerente com a cena que o texto promete.**

### Slide 4 : Mecanismo institucional 1 (56% dos servidores perdidos)
**Cena pedida:** posto de atendimento com vários guichês fechados/vazios ao lado de um único guichê aberto; cadeiras vazias atrás do balcão, luz apagada num dos postos.

**Sem candidata responsável.** Nenhuma fonte acessível mostra guichê, balcão de atendimento ou esvaziamento de posto público. **Bloqueio de ambiente.**

### Slide 5 : Prova (dado em card, requerimentos +26%)
**Cena pedida:** sala de espera de agência do INSS lotada, pessoas preenchendo formulário ou aguardando, painel de senha ao fundo.

**Sem candidata responsável.** Nenhuma fonte acessível mostra sala de espera com painel de senha ou fluxo de atendimento ao público externo (o workshop de Bela Vista de Minas é evento interno para servidores, não atendimento ao usuário). **Bloqueio de ambiente.**

### Slide 6 : Mecanismo institucional 2 (o círculo que se fecha)
**Cena pedida:** mesa de atendimento com pilha alta de processos físicos, servidor desfocado ao fundo atendendo mais uma pessoa — sensação de acúmulo constante.

**Sem candidata responsável.** Mesmo motivo dos slides 4 e 5. **Bloqueio de ambiente.**

### Slide 7 : A virada (a máquina que não lê o próprio sofrimento)
**Cena pedida:** mãos carimbando ou assinando um documento oficial numa mesa de perícia/atendimento — o gesto literal do reconhecimento oficial.

**Sem candidata responsável.** Nenhuma fonte acessível mostra carimbo, assinatura de documento oficial ou mesa de perícia. **Bloqueio de ambiente.** (Esta é a mesma cena que a v1 tentou forçar com uma foto de mão tocando post-it, e chamou de "a candidata mais fraca desta entrega inteira" — concordo com esse julgamento anterior e por isso não repito a tentativa aqui.)

### Slide 8 : O número (1.871 servidores afastados)
**Cena pedida:** fachada ou entrada de uma agência do INSS ao entardecer, placa oficial visível, ou fila esvaziando ao fim do expediente — tempo passando, peso acumulado, sem ninguém em primeiro plano.

**Sem candidata responsável.** Nenhuma fonte acessível mostra fachada de prédio público federal, placa oficial ou cena de rua ao entardecer. **Bloqueio de ambiente.**

### Slide 9 : Proposição (pergunta diagnóstica, "que outro serviço...")
**Cena pedida:** cena de outro serviço público, não o INSS (mesa de trabalho de equipe de CRAS, CAPS ou UBS, gente reunida em plantão ou atendimento), esteticamente diferente da agência previdenciária.

Este é o único slide cuja própria copy autoriza sair do registro previdenciário — mas ainda pede a **estética documental do SUS/rede pública** (o acervo do Radilson Carlos Gomes, citado nominalmente nas "Notas para o Buscador de Fotos"), que **não está acessível nesta sessão** (só existe no PhotoBank/disco local). O acervo próprio da PAAPS não reproduz essa estética: é um workshop indoor, cadeiras de escritório, parede de post-its, não território/campo do SUS.

**Candidata de compromisso, com ressalva forte — decisão sua, não minha:**

- **`IMG_7889.JPG`** (`FOTOS BVMG ISAAC`, id `1EKqcrZYcFPCQX2U4aJEPERr9HtQuDdaQ`)
  - **O que eu vi:** mulher de cabelo escuro longo ondulado, blusa branca sem manga, tatuagem no braço, vista de perfil, sorrindo levemente enquanto observa uma parede coberta de post-its rosa e verde-limão. Ao fundo, mais duas mulheres sentadas em cadeiras amarelas de escritório, uma delas com óculos, ambas de perfil, sérias. Luz de sala interna, cortina bege desfocada ao fundo.
  - **Por que essa, com ressalva:** entre as fotos acessíveis, é a que mais carrega **gente pública real, reunida, atenta a um trabalho coletivo** — a estrutura de "rede que se organiza junto", ainda que o registro seja capacitação interna, não atendimento a usuário. **Não atende a cena pedida** literalmente (não é CRAS/CAPS/UBS, não é atendimento) e **não reproduz a estética documental do SUS que a própria copy pede para este slide**.
  - **⚠ Atenção de identidade:** a mulher em primeiro plano tem o mesmo padrão (cabelo escuro ondulado comprido, blusa branca sem manga, tatuagem no braço) já identificado como **Mallu Vasconcellos** em outra foto do mesmo evento (`IMG_7926`, ver `fotos-peca1.md` v1, slide 1). Considero esta a foto que, se usada, ocuparia o seu limite de "no máximo 1 foto onde a Mallu apareça reconhecível" para esta peça. Contexto institucional normal (workshop), não de vulnerabilidade, risco baixo.
  - Acervo: próprio PAAPS (Bela Vista de Minas, workshop nov/2025) · ⚠ licença não declarada
  - Usos: não verificável (sem Notion nesta sessão)
  - Copiada para `.../sessao-04-inss-v2/fotos/slide-09-candidata-fraca-IMG_7889.jpg`
  - **Se você preferir deixar este slide sem foto, ou aguardar uma sessão com acesso ao acervo documental real do SUS (PhotoBank/disco) para trocar por algo como "The home visit" ou "ACS-Quilombola" (já auditadas em `MEMORY.md`), é decisão legítima e provavelmente melhor.**

---

## 4. Resumo para a Mallu

**7 dos 9 slides (1, 2, 4, 5, 6, 7, 8) ficam sem candidata de foto nesta entrega.** Não é omissão: é o resultado de checar, com prova, que nenhuma fonte real acessível nesta sessão (Notion indisponível, disco local inexistente, Google Drive só com o acervo próprio já saturado) cobre as cenas pedidas, e de respeitar o teto que você pediu (no máximo 1-2 fotos do mesmo campo, no máximo 1 com você reconhecível) em vez de forçar o mesmo evento de Bela Vista de Minas em todos os slides como a v1 fez.

**Usei meu orçamento inteiro (2 fotos, ambas do mesmo evento, uma com você reconhecível) em apenas 2 slides** (3 e 9), e mesmo essas duas são candidatas fracas, com ressalva clara de que "deixar sem foto" pode ser a decisão mais coerente.

**O que destravaria os outros 7 slides, em ordem de força:**
1. Uma sessão com as ferramentas MCP do Notion carregadas (MODO 1 pleno): consulta ao PhotoBank por `Story = "Inside the World's Largest Public Health System"` traria candidatas reais de rede pública, e mesmo sem imagem literal de INSS, teria mais opções de "mesa de atendimento" genérica do que o Drive tem hoje.
2. Uma sessão rodando no Mac local: a pasta `projetos/minerva/BANCO DE FOTOS/REDE PÚBLICA BRASILEIRA/` tem 33 fotos já auditadas (`MEMORY.md`), incluindo `Visita-Domiciliar-Gurupi-Tocantins` e `PSF-Periferia-Sao-Paulo`, que servem melhor ao slide 9 do que qualquer coisa que eu tenha acesso aqui, mesmo não sendo INSS literal.
3. Você mandar direto uma foto (print de reportagem, foto de agência real, ou até uma foto sua de um evento do PAAPS com o INSS, se existir) para eu cadastrar como página nova do PhotoBank quando o Notion estiver acessível.

## 5. Fontes usadas nesta peça (para você orientar as próximas 2 curadorias, ACS e envelhecimento)

- **Único acervo fotográfico real acessado:** Google Drive, pasta `FOTOS BVMG ISAAC` (id `1j3HMea3pwEWaz4HEuEUFFpuuYmTl0bPr`) — workshop da PAAPS em Bela Vista de Minas, servidores públicos, novembro/2025. **Usei apenas 2 arquivos desta pasta: `IMG_7862.JPG` e `IMG_7889.JPG`.** Nenhum outro arquivo desta pasta foi usado nesta entrega.
- **Não usei nada de `OUTRAS FOTOS`** (Refazenda) nesta peça — fica inteiramente livre para a curadoria do card de envelhecimento, que já usou uma foto de lá na v1 (`DSC03222-74.jpg`).
- **Não usei nada do PhotoBank do Notion nem de qualquer acervo documental público** — genuinamente inacessível nesta sessão, não por escolha.
- **Recomendação para a peça 2 (ACS):** dado que a temática de ACS combina muito mais naturalmente com o workshop de servidores públicos de Bela Vista de Minas do que o INSS combinava, faz sentido que a peça de ACS receba a maior parte do "orçamento" de 1-2 fotos do acervo próprio desta semana — mas **evite reusar especificamente `IMG_7862.JPG` e `IMG_7889.JPG`** (já usadas aqui) e o que já foi usado na v1 da própria peça de ACS (`IMG_7940`, `DSC03222-74`, `DSC03075-3`, `IMG_7745`, `IMG_7730`, `IMG_7721`, `IMG_7993`, `IMG_7994` — ver `fotos-peca2.md`), para não repetir arquivo entre posts da mesma semana.
- **Recomendação para a peça 3 (envelhecimento):** a v1 já escolheu `DSC03222-74.jpg` (`OUTRAS FOTOS`) como candidata final. Se a régua de "1-2 fotos do mesmo campo por peça" também se aplicar a essa, ela já está dentro do teto com só essa foto; não precisa buscar mais no acervo próprio.

## 6. Registro no PhotoBank

**Não realizado.** Sem ferramentas MCP do Notion nesta sessão (verificado, não presumido — ver seção 1.1), não há como consultar nem escrever no PhotoBank. Quando uma sessão com acesso ao Notion existir, registrar:

- `IMG_7862.JPG`: página nova, `Photo`: "Mão apontando post-it em dinâmica de grupo, Bela Vista de Minas"; `Story`: "PAAPS in action! Cases"; `Fonte`: "acervo PAAPS"; `Licença`: "⚠ não verificada"; `Crédito`: "sem crédito"; `Usos`: "2026-09-09 · carrossel INSS v2 · slide 3 (candidata fraca, com ressalva)".
- `IMG_7889.JPG`: página nova, `Photo`: "Roda de post-its com facilitadora, Bela Vista de Minas"; `Story`: "PAAPS in action! Cases"; `Fonte`: "acervo PAAPS"; `Licença`: "⚠ não verificada"; `Crédito`: "sem crédito"; `Usos`: "2026-09-09 · carrossel INSS v2 · slide 9 (candidata fraca, com ressalva; possível imagem reconhecível de Mallu Vasconcellos)".

## Arquivos entregues

- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-04-inss-v2/fotos/slide-03-candidata-fraca-IMG_7862.jpg`
- `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-04-inss-v2/fotos/slide-09-candidata-fraca-IMG_7889.jpg`
- Slides 1, 2, 4, 5, 6, 7 e 8: **sem arquivo entregue nesta rodada.** Bloqueio de ambiente documentado seção a seção acima; decisão de deixar sem foto, aguardar sessão com Notion/disco, ou instruir alternativa é sua.
