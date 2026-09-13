# Prompt de disparo semanal: Carrossel completo da semana, @paaps.brasil

> **Este arquivo é a fonte única do prompt que a Routine (gatilho agendado) dispara toda
> semana.** Antes dele, esse prompt só existia dentro da configuração do gatilho (ou colado
> à mão numa sessão), sem versão auditável no repositório. Foi assim que uma sessão sem o
> repositório clonado recebeu uma cópia desatualizada e alucinou seções e arquivos que nunca
> existiram (ver `2026-09-07-diagnostico-sessao-sem-repo.md` na mesma pasta). Daqui pra
> frente: **qualquer alteração no disparo semanal se edita AQUI, versionado e revisável, nunca
> só dentro da configuração do gatilho.**
>
> A skill `.claude/skills/paaps-orquestrador-conteudo/SKILL.md` continua sendo a fonte da
> verdade do FLUXO (quem chama quem, guardrails, contratos de entrega). Este arquivo é a
> fonte da verdade do DISPARO (o texto exato que a rotina agendada recebe toda segunda-feira).
> Se os dois divergirem, a skill manda sobre o fluxo e este arquivo se corrige para
> acompanhar; nunca o contrário.

## O que foi corrigido nesta versão (07/09/2026), e por quê

Comparado ao prompt antigo que rodava direto na configuração do gatilho, quatro pontos
tinham ficado desatualizados em relação ao que o repositório e os agentes reais dizem hoje.
Cada um foi conferido arquivo por arquivo antes de corrigir (não por suposição):

1. **Newsletters não vêm de uma página do Notion.** O prompt antigo mandava rodar
   `notion-fetch` numa página "B0 — Newsletters". Isso nunca existiu como página do Notion:
   o mecanismo real é o script `automacoes/conteudo-pipeline/newsletters/puxar-newsletters.mjs`,
   que lê a caixa IMAP `relacionamento@paaps.com.br` e escreve
   `conteudo/ciclos/<hoje>/B0-newsletters.md` (ver `radar.md`, "Primeiro movimento, sempre").
   Corrigido no Passo 1 abaixo.
2. **A busca aberta na internet (Fiocruz Imagens, Agência Brasil, Flickr) continua suspensa.**
   O prompt antigo testava `curl` em `fiocruz.br` e `agenciabrasil.ebc.com.br` e, se desse 200,
   tratava isso como se tivesse "liberado" o MODO 2 do `buscador-fotos.md`. Isso é uma mistura
   de dois problemas diferentes: o MODO 2 foi suspenso em 25/07/2026 por decisão da Mallu porque
   **falta ferramenta de navegador de verdade** para o Flickr (que devolve tela de login em
   requisição crua), não porque faltava rede. Rede aberta não resolve isso. A reabertura do
   MODO 2 é decisão dela, registrada no próprio `buscador-fotos.md`, não um teste automático de
   `curl`. Corrigido: o Passo 0 agora testa só o que o `buscador-fotos.md` realmente usa (o
   webhook do PhotoBank), e o card de curadoria de foto segue a hierarquia real MODO 1 → 1B →
   1C, nunca tenta MODO 2.
3. **Faltava a legenda obrigatória.** A skill orquestradora, seção 6 e 6.1, calibrada em
   04/09/2026, é explícita: "nenhuma entrega sai sem a legenda junto", gerada pela skill
   `legendas-otimizadas` a partir do texto já aprovado pelo crítico. O prompt antigo não
   tinha esse passo. Adicionado como parte fixa de cada peça, antes do gate final da Mallu.
4. **A ordem dos agentes estava errada.** O prompt antigo rodava `tecela` antes de
   `paaps-brasil`. A ordem real (seção 6 da skill) é `radar` e `paaps-brasil` em **paralelo**,
   e só depois `tecela`. Corrigido na cadeia do Passo 3.

Duas notas de bônus, fora do prompt em si mas relevantes para quem operar esta automação:
`conteudo/CLAUDE.md` tinha uma nota antiga dizendo que `critico-conteudo` era "placeholder
vazio". Não é: o arquivo tem conteúdo completo e específico (histórico de rodadas, doutrina
de leitura isolada). A nota foi corrigida no próprio arquivo nesta mesma sessão.

---

## PARTE 0 : pré-condições (checar sempre, antes de qualquer busca de pauta ou escrita)

Esta rotina roda como sessão nova a cada disparo, sem memória do que rodou antes. Ela só
começa a produzir se TODOS os itens abaixo forem verdadeiros. Qualquer item falso não é
motivo para improvisar: pare e siga direto para a Parte 3, item correspondente.

1. **Repositório clonado de verdade.** `git rev-parse --is-inside-work-tree` retorna `true`
   e `git remote -v` aponta para `github.com/paapsdiretoria-crypto/site-paaps`. Se isso
   falhar, é bloqueio total: nada mais roda.
2. **Arquivos-base existem nos caminhos reais** (confira com `test -f`, não assuma):
   - `.claude/skills/paaps-orquestrador-conteudo/SKILL.md` (seções 6 e 6.1)
   - `insumos-compartilhados/nucleo-comum/anatomia-do-carrossel-aprovado.md`
   - `insumos-compartilhados/nucleo-comum/mapa-fontes-foto.md`
   - `insumos-compartilhados/nucleo-comum/modelos-slide-paaps.md`
   - `.claude/agents/radar.md`, `paaps-brasil.md`, `tecela.md`, `copywriter-paaps.md`,
     `critico-conteudo.md`, `buscador-fotos.md`, `aplicador-visual.md`, `mallu-reels.md`
   - `.claude/skills/legendas-otimizadas/SKILL.md`
   - `conteudo/templates/carrossel-paaps/render.sh` e `template.html`
   - `automacoes/conteudo-pipeline/newsletters/puxar-newsletters.mjs`
   - `automacoes/.env` com a variável `TITAN_SENHA` (sem imprimir o valor em log nenhum)
3. **`render.sh` roda.** `./conteudo/templates/carrossel-paaps/render.sh` sem argumento deve
   reclamar de parâmetro faltando (erro esperado), não de dependência ausente. Se faltar
   Chromium, o próprio script já procura em três lugares (Chrome de macOS, Chromium do PATH,
   Chromium do Playwright em `PLAYWRIGHT_BROWSERS_PATH`); se nenhum existir, é bloqueio.
4. **Push de escrita autorizado** na branch `main` (a convenção deste repositório é push
   direto, documentada no `CLAUDE.md` raiz, seção GitHub: "Auto-push ativo").
5. **Conectores Notion e Google Drive habilitados nesta sessão** (não só conectados na
   conta). Teste com uma chamada simples de cada um antes de depender deles no fluxo.
6. **Rede de saída liberada para o webhook do PhotoBank**
   (`https://n8n.srv1850231.hstgr.cloud/webhook/photobank-resolver`). Isso é tudo que o
   Passo 0 precisa testar: **não** teste `fiocruz.br` nem `agenciabrasil.ebc.com.br`, essas
   fontes não estão em uso (MODO 2 do `buscador-fotos.md` segue suspenso, ver nota acima).

### 0.1 Diagnóstico rápido

Rode e registre o resultado de cada checagem acima antes de prosseguir. Se qualquer uma
falhar, vá direto para a Parte 3 com o item exato que falhou. Nunca prossiga "só com texto"
fingindo que os outros passos rodaram.

---

## PARTE 1 : a tarefa

Você vai montar o carrossel completo da semana do PAAPS (a "receita da semana" da seção 6.1
da skill orquestradora): **2 carrosséis @paaps.brasil + 1 card único + 1 roteiro de Reel**,
texto e imagem, de ponta a ponta, sozinho, sem esperar aprovação intermediária da Mallu (ela
revisa só no final, peça a peça, nunca as 4 juntas de uma vez sem ela ter visto nenhuma).

Nenhuma foto de placeholder, nenhum slide sem imagem de verdade: tudo sai montado em PNG real,
inclusive o card único (1 slide só, mesmo template, `./render.sh <pasta> 1`).

**Regra de tema (Mallu, crítica):** os 2 carrosséis e o card nascem de **3 ângulos
genuinamente diferentes** entre si (mediação de fundo diferente, não só redação diferente).
Só o Reel pode repetir tema, aprofundando um debate que já apareceu em qualquer uma das
outras 3 peças, em vez de abrir um quarto tema. Confira a distinção do ângulo antes de
escrever a segunda peça, não depois.

### Passo 0. Newsletters primeiro, sempre antes de qualquer busca web

```
node automacoes/conteudo-pipeline/newsletters/puxar-newsletters.mjs
```

Isso escreve `conteudo/ciclos/<hoje>/B0-newsletters.md`. Leia esse arquivo primeiro: ele é
o sinal do que está circulando na área da Mallu antes de qualquer varredura ampla. Vazio,
ou o script falhar por falta de `TITAN_SENHA` (ver Parte 3, item 3.1), não é erro fatal:
documente e siga para a busca web do `radar` normalmente.

Teste também, antes de qualquer curadoria de foto, o webhook do PhotoBank:

```
curl -sSL -o /dev/null -w "%{http_code}\n" "https://n8n.srv1850231.hstgr.cloud/webhook/photobank-resolver?page_id=teste" --max-time 10
```

Um 200 ou um erro de negócio do próprio n8n (ex. `object_not_found`) conta como "webhook
acessível" (MODO 1B do `buscador-fotos.md` disponível). Timeout, `EGRESS_BLOCKED` ou 403 de
política de rede significam que só o MODO 1C (Google Drive) está disponível para foto nesta
rodada: registre isso, não insista, não tente contornar indo para o MODO 2 (suspenso).

### Passo 1. Leitura obrigatória antes de qualquer escrita

`.claude/skills/paaps-orquestrador-conteudo/SKILL.md` inteira (seções 3, 6 e 6.1
especialmente), `insumos-compartilhados/nucleo-comum/anatomia-do-carrossel-aprovado.md`,
`insumos-compartilhados/nucleo-comum/mapa-fontes-foto.md`,
`insumos-compartilhados/nucleo-comum/modelos-slide-paaps.md`.

### Passo 2. Mapeamento de pauta

Com o `B0-newsletters.md` em mãos, acione `radar` (modo propositivo, sem tema definido) e
`paaps-brasil` **em paralelo** (não em sequência: essa é a ordem real da seção 6 da skill,
não a ordem antiga deste prompt). O radar mapeia pautas suficientes para os 3 ângulos
distintos; o paaps-brasil traz a leitura de performance real do perfil.

### Passo 3. Cadeia de agentes, uma vez por peça (as 3 peças de carrossel/card)

Para CADA uma das 3 peças (carrossel 1, carrossel 2, card), rode como sub-agentes (Task),
nesta ordem, que é a ordem real da seção 6/6.1 da skill:

`tecela` → `copywriter-paaps` → `critico-conteudo` (até aprovar, ou 5 rodadas: se reprovar
5 vezes seguidas, pare essa peça específica, registre a última crítica pendente, siga com as
outras) → `buscador-fotos` → `aplicador-visual` (monta o HTML e roda `render.sh`: 8 slides
para os carrosséis, 1 slide para o card) → skill `legendas-otimizadas` (gera a legenda de
postagem a partir do texto **já aprovado** pelo crítico, nunca de rascunho). **Nenhuma peça
está completa sem essa legenda:** calibrado pela Mallu em 04/09/2026, entrega sem legenda
não é entrega parcial aceitável, é entrega incompleta.

Depois das 3 peças, escreva o roteiro de Reel (`mallu-reels`), decidindo se aprofunda uma
das 3 ou não (Passo "REGRA DE TEMA" acima).

### Passo 4. Curadoria de foto: regras aprendidas na marra, não repita os erros

- **Hierarquia real, nesta ordem:** MODO 1/1B (PhotoBank do Notion, Story "Inside the
  World's Largest Public Health System", ~25 fotos documentais, a maioria Radilson Carlos
  Gomes/Flickr Ministério da Saúde; consulte com `notion-query-data-sources` antes de
  qualquer outra coisa) → MODO 1C (Google Drive, pastas `FOTOS BVMG ISAAC` e afins, acervo
  próprio da PAAPS, quando o webhook n8n estiver bloqueado) → nunca MODO 2 (busca aberta na
  internet), que segue suspenso por decisão da Mallu até ela reabrir explicitamente.
  Acervo próprio entra por último e pontual: **no máximo 1-2 fotos por peça** ("cartucho
  precioso").
- Para cada slide, escolha você mesmo a melhor candidata e registre nas notas finais por
  que escolheu essa e não outra.
- **Nunca aplique foto sem checar resolução nativa contra a caixa do slide** (`width:1080px`
  fixo, altura varia por slide, confira `#sN .foto{height:...}` no CSS). Baixe, rode
  `file arquivo.jpg`, só aplique se `largura_original >= 1080` E
  `altura_original >= altura_da_caixa`. Não bateu, descarte e ache outra.
- **Nunca corte rosto no meio.** Mosaico de fotos em grade quase nunca cabe numa caixa
  estreita (560-760px) sem cortar rosto: evite, prefira retrato único ou cena única.
- Fotógrafo confirmado na fonte leva crédito visível no slide. Sem confirmação, entra sem
  essa linha: nunca invente autoria.
- Depois de renderizar, **abra o PNG final com Read** (não só confie no CSS) para confirmar
  visualmente que não ficou borrado nem com rosto cortado.

### Passo 5. Entrega, de três jeitos (use a data real do disparo)

a) **Commit** em `conteudo/instagram/paaps.brasil/entregas/AAAA-MM-MÊS/sessao-01/`
   (carrossel 1), `sessao-02/` (carrossel 2), `sessao-03-card/` (card), cada um com
   `index.html`, `fotos/`, `export/` (PNGs). Mais `conteudo/ciclos/AAAA-MM-DD/README.md`
   com o ângulo de cada peça (prova de que os 3 são diferentes), notas do crítico, escolhas
   de foto e a legenda de cada peça. `git add` só desses arquivos, commit
   `auto: carrossel completo da semana - AAAA-MM-DD`, push em `main`.
b) `SendUserFile` com os PNGs finais das 3 peças mais o texto do roteiro de Reel e as 4
   legendas: é a entrega principal e confiável. Tente também subir a mesma pasta para o
   Drive (`aplicador-visual.md`, seção "Entrega final: Drive", pasta raiz
   `1ryTwtQF1LMt1JXQ5BAbzk48frI5i3Q3R`) se a ferramenta responder normalmente; se o upload
   falhar por limite de tamanho de payload, não insista mais que uma tentativa extra
   (ver Parte 3, item 3.4).
c) Se o Notion estiver disponível: página nova, subpágina de
   `https://app.notion.com/p/38044cb52e0080b1a07de17b31d00cd2`, título
   "Conteúdos da Semana — AAAA-MM-DD", com o texto e a legenda de cada peça, o ângulo de
   cada uma, o link do Drive (se subiu) e a justificativa de cada escolha de foto.

### Passo 6. Travamento

Se qualquer passo travar de um jeito que impeça entregar as 3 peças visuais montadas com
foto real (não só texto), ou não conseguir 3 ângulos de verdade distintos: pare e diga
exatamente onde travou e por quê. Não entregue só texto como se fosse completo, não force 3
ângulos artificialmente parecidos só para cumprir a regra, não invente foto, crédito, dado
ou link.

### Passo 7. Limites e fechamento

Não abra PR, não mexa em nenhum workflow do n8n, não mexa em nenhum arquivo fora do
listado. Encerre com um resumo de 6-9 linhas: os 3 ângulos escolhidos (prova de que são
diferentes), notas do crítico, quantas fotos reais entraram em cada peça e de qual fonte,
se o Reel aprofundou alguma das 3, se a legenda saiu em todas as 4 peças, link do commit,
link do Drive/Notion se subiu.

---

## PARTE 2 : permissões e acesso que esta rotina precisa ter de fábrica

- Ambiente `acesso-completo-conteudos` (`env_0132afDAK9tXJ3q2gbfXRwTf`), com repositório
  clonado a partir de `https://github.com/paapsdiretoria-crypto/site-paaps`, branch `main`,
  push direto sem aprovação manual (ninguém revisa em tempo real).
- Bash/Read/Write/Edit liberados sem prompt de confirmação (o próprio Passo 1 assume
  execução "sozinho, sem esperar aprovação intermediária").
- Conector **Notion** habilitado, leitura no PhotoBank e na subpágina de destino
  (`38044cb52e0080b1a07de17b31d00cd2`), escrita para criar a subpágina de entrega.
- Conector **Google Drive** habilitado, permissão de criar pasta e subir arquivo na pasta
  raiz do carrossel PAAPS (`1ryTwtQF1LMt1JXQ5BAbzk48frI5i3Q3R`).
- Saída de rede liberada para `n8n.srv1850231.hstgr.cloud` (webhook do PhotoBank). Não é
  necessário liberar `fiocruz.br` nem `agenciabrasil.ebc.com.br`: essas fontes não estão em
  uso enquanto o MODO 2 do `buscador-fotos.md` seguir suspenso.
- `SendUserFile` liberado sem prompt (entrega principal, não pode depender de aprovação
  manual numa rotina sem supervisão em tempo real).
- **Verificação manual pendente, fora do que este prompt controla:** o modo de permissão
  autônomo (equivalente a `bypassPermissions`/`dontAsk`) do ambiente
  `acesso-completo-conteudos` precisa estar configurado no próprio ambiente, porque a
  ferramenta de criação de rotina usada aqui não expõe esse parâmetro. Se a rotina parar
  pedindo aprovação de ferramenta no meio da madrugada de segunda, é esse ajuste que falta,
  não um bug deste prompt.

---

## PARTE 3 : protocolo anti-travamento (SE X → RESOLVA COM Y)

Nenhuma destas regras autoriza fabricar dado, foto, crédito ou link. Resolver nunca
significa forjar saída: significa contornar de um jeito legítimo, ou parar e reportar.

### 3.1 Ambiente e repositório

- **SE** o repositório não estiver clonado/acessível **→** pare antes de qualquer busca ou
  escrita, registre isso no resumo final com a frase exata "sessão sem repositório do PAAPS
  anexado, automação não rodou", e envie `PushNotification`. Não adivinhe URL de repo, não
  recrie templates do zero.
- **SE** algum arquivo-base da Parte 0 item 2 não existir no caminho esperado **→** confira
  outra branch (`git branch -a`, `git log --all -- <caminho>`); se achar, avise no resumo
  que usou branch não padrão; se não achar em nenhuma, pare e reporte exatamente quais
  arquivos faltam.
- **SE** `render.sh` falhar por dependência de sistema **→** rode a instalação padrão se
  houver uma documentada no repo; se exigir privilégio que a sessão não tem, pare e reporte
  o erro exato de stderr, não substitua por renderização manual fora do template.
- **SE** `puxar-newsletters.mjs` falhar por `TITAN_SENHA` ausente em `automacoes/.env`
  **→** trate como Passo 0 vazio (não é bloqueio), registre no resumo, siga direto para a
  busca web do `radar`. Nunca escreva o valor da senha em nenhum log ou arquivo do repo.
- **SE** o push para `main` falhar por autenticação **→** reporte o erro exato (a Parte 2
  pressupõe esse acesso já concedido; se falhar mesmo assim, é quebra de pré-condição, não
  algo para contornar).
- **SE** o push falhar por a branch remota estar à frente **→**
  `git fetch origin main && git rebase origin/main`, nunca `--force` sem essa atualização,
  reexecute o push; se o rebase gerar conflito em arquivo que esta rotina não criou, pare e
  reporte em vez de resolver adivinhando.

### 3.2 Insumos e pauta

- **SE** o Notion não estiver disponível na sessão **→** siga direto para o `radar` buscar
  pauta na web, registre no resumo (fallback documentado, não erro fatal).
- **SE** o webhook do PhotoBank (`n8n.srv1850231.hstgr.cloud`) não responder **→** use MODO
  1C (Google Drive), registre a lacuna de ambiente no resumo, nunca tente MODO 2.
- **SE**, depois de mapear pautas, só for possível achar 2 ângulos genuinamente distintos
  (não 3) **→** amplie a varredura do radar antes de desistir; se mesmo assim não houver um
  terceiro ângulo honesto, pare e reporte que a regra dos 3 ângulos não pôde ser cumprida
  sem forçar semelhança, sugerindo rodar de novo depois. Nunca publique 3 peças com ângulos
  forçadamente parecidos só para bater a meta numérica.
- **SE** um sub-agente devolver saída fora do contrato (nº errado de slides, campo
  obrigatório faltando, frase quente ausente) **→** reexecute aquele sub-agente específico
  com o feedback exato do que faltou, sem aceitar saída incompleta e sem preencher a lacuna
  por conta própria.
- **SE** `critico-conteudo` reprovar 5 rodadas seguidas sem aprovar uma peça **→** pare de
  tentar essa peça, registre a última crítica pendente no README do ciclo, não publique essa
  peça sem aprovação. Siga com as outras peças que já passaram.

### 3.3 Curadoria de foto

- **SE** a foto candidata tiver resolução nativa menor que a caixa do slide **→** descarte
  para aquele slide, busque a próxima candidata na mesma fonte antes de subir de nível na
  hierarquia (MODO 1/1B → MODO 1C).
- **SE** nenhuma foto na hierarquia inteira passar no teste de resolução para um slide
  **→** marque o slide com nota explícita de pendência em vez de forçar foto borrada;
  reavalie se a peça ainda cumpre "nenhum slide sem imagem de verdade" antes de entregar.
- **SE** a única foto disponível for mosaico/grade E o slide tiver caixa curta (560-760px)
  **→** descarte para esse slide, prefira retrato único ou cena única; se só houver mosaico,
  trate como "nenhuma foto adequada".
- **SE** a fonte não confirmar o nome do fotógrafo **→** aplique sem linha de crédito, nunca
  invente nome ou assuma que é do mesmo fotógrafo de outra foto da mesma fonte.
- **SE** o acervo próprio da PAAPS já tiver sido usado 2 vezes numa peça **→** não use uma
  terceira vez nessa peça, busque fonte externa mesmo que dê mais trabalho.
- **SE**, ao abrir o PNG final com Read, a imagem sair borrada ou com rosto cortado **→**
  volte para a aplicação visual, troque a foto ou o `object-position`, re-renderize, e só
  considere a peça pronta depois de conferir de novo com Read.

### 3.4 Entrega

- **SE** o upload direto de PNG para o Drive falhar (limite de payload conhecido em sessão
  de nuvem, ver `.claude/agent-memory/aplicador-visual/limite-upload-drive-sandbox-02-09.md`)
  **→** não insista mais que uma tentativa extra; `SendUserFile` já cobre a entrega
  principal; registre no resumo que o Drive não recebeu o upload automático.
- **SE** a criação da página no Notion falhar ou a ferramenta não estiver disponível **→**
  pule a etapa, registre no resumo, não deixe isso bloquear a entrega mínima (commit +
  SendUserFile).
- **SE** já existir uma pasta de entrega para a mesma data (disparo duplicado no mesmo dia)
  **→** confira o conteúdo antes de sobrescrever; se já houver commit completo daquele dia,
  não gere um segundo lote, reporte que o disparo já havia rodado.
- **SE** o orçamento de tempo/turnos acabar no meio do pipeline **→** termine as peças já
  iniciadas antes de começar uma nova, entregue as prontas com nota clara do que faltou e
  por quê; nunca entregue peça pela metade como se estivesse completa.

### 3.5 Regra-mestre para qualquer situação não prevista

Não invente, não force, não finja sucesso. Pare no ponto exato, registre no resumo final
qual arquivo/comando/ferramenta falhou e a mensagem de erro literal, notifique por
`PushNotification` (ninguém acompanha em tempo real). É sempre preferível entregar 1 ou 2
peças de verdade prontas e reportar a terceira como bloqueada, do que entregar 3 peças
fabricadas ou incompletas disfarçadas de completas.

---

## PARTE 4 : checklist final antes de considerar a rodada concluída

- [ ] Diagnóstico de ambiente (Parte 0.1) rodou e passou, ou o bloqueio foi reportado.
- [ ] `B0-newsletters.md` lido (ou ausência documentada) antes de qualquer busca web.
- [ ] `radar` e `paaps-brasil` rodaram em paralelo, antes da `tecela`.
- [ ] 3 ângulos genuinamente distintos, com a prova de distinção escrita no README do ciclo.
- [ ] Cada uma das 3 peças passou por `critico-conteudo` (aprovada, ou excluída com nota).
- [ ] Cada slide tem foto real, resolução conferida, crédito correto ou ausente conforme a
      fonte, sem rosto cortado, conferida com Read no PNG final.
- [ ] Cada uma das 4 peças (2 carrosséis + card + Reel) tem legenda gerada por
      `legendas-otimizadas` a partir do texto já aprovado.
- [ ] Commit feito só com os arquivos da entrega, push em `main` concluído.
- [ ] `SendUserFile` com os PNGs finais e as legendas enviado.
- [ ] Resumo final de 6-9 linhas escrito, cobrindo: os 3 ângulos, notas do crítico, contagem
      de fotos reais por peça e fonte, se o Reel aprofundou alguma das 3, se a legenda saiu
      em todas, link do commit, link do Drive/Notion se subiu, e qualquer travamento parcial
      reportado com clareza.
