# Handoff: onde tudo parou em 27/07/2026

## Contexto

Sessão de 27/07 fez duas coisas: reescreveu a skill orquestradora para a arquitetura de árvore de dois troncos, e retomou o carrossel do @paaps.brasil sobre as mulheres na base do cuidado, que agora está parado esperando decisão da Mallu sobre cinco perguntas da Tecelã.

---

## 1. Skill orquestradora: o que mudou (feito)

**Arquivo:** `.claude/skills/paaps-orquestrador-conteudo/SKILL.md`
**Espelho situacional:** `conteudo/CLAUDE.md` (já atualizado com o diagrama e as pendências)

Mudanças aplicadas:

- **Árvore de dois troncos** substituiu o modelo de fluxo único com bifurcação no fim.
  - Tronco A: a Mallu puxa o gancho. Setting/ambiente, depois contexto situado. Entrega um lote que serve aos dois perfis. Gate de voz roda peça a peça dentro do lote.
  - Tronco B: PAAPS por frequência. Começa no Radar, porque o perfil precisa se posicionar perante a atualidade mesmo quando a criatividade dela está em outro lugar.
- **Seção 2 nova, julgamento de entrada:** tabela de sinais para decidir o tronco antes de executar qualquer coisa, registrada no artefato `T`.
- **Radar com dois modos:** propositivo (Tronco B, sem tema) e dirigido (serviço ao Tronco A, com norte nas palavras-chave dela, podendo propor substituir a tese).
- **Tecelã com três modos** e sempre acionada: aprendizado (toda rodada, mesmo sem escrever), co-construtora (quando a tese está aberta ou a Mallu pede), raciocínio fechado (padrão do Tronco B automático).
- **Guardrail 7 novo:** acionar o agente que já existe. Fecha a porta que permitia criar execução paralela para tarefa que já tem dono.
- **Tabela de roteamento corrigida:** apontava para skills inexistentes (`mallu-paaps-conteudo`, `paaps-carrossel`, `paaps-ecoa-psi-social`, `paaps-atualidades-pesquisa`, `criar-legendas`). Agora aponta só para agentes e skills reais.

---

## 2. Carrossel em andamento: mulheres na base do cuidado

**Pasta da rodada:** `conteudo/ciclos/2026-07-27/`

| Arquivo | O que é | Status |
|---|---|---|
| `T-decisao-de-tronco.md` | Classifica a rodada como Tronco B com origem atípica (sobra do ciclo de 15/07, sem Radar) | pronto |
| `A0-campo-afetivo.md` | Trilha e referência visual. Ancora em "Maria, Maria" | pronto |
| `A1-nucleo-fonte.md` | Afeto situado, âncora teórica, duas frases quentes em disputa | pronto |
| `DEC.md` | Gate de voz: @paaps.brasil, carrossel, desdobramento no LinkedIn institucional | pronto |
| `A2-argumento-tecela.md` | Argumento em modo co-construtora | **entregue, aguardando a Mallu** |
| `A3` em diante | Escrita, fotos, montagem | não existe ainda |

**Tese da peça, em uma linha:** o Estado exige de mulheres, desproporcionalmente mulheres negras, o trabalho de sustentação relacional que segura a rede pública de pé, e só reconhece que aquilo era trabalho quando o corpo delas para.

**Frase quente que a Tecelã defende:** "O corpo dela só entrou na planilha depois que parou de funcionar." Ela bateu nessa contra a alternativa mais longa, porque o "dela" já carrega o gênero sem precisar de frase de apoio.

**O que a Tecelã acrescentou ao A1:** a mediação que faltava. O atestado é mediação de chegada; antes dele existe a desqualificação histórica do cuidado como trabalho, que é o que explica por que o atestado virou a única porta.

**Memória dela:** `.claude/agent-memory/tecela/ciclo-2026-07-27.md`

---

## 3. As cinco perguntas que travam a peça

Estão na seção 9 do `A2-argumento-tecela.md`. Resumo:

1. Nomear "mulher negra" com dado rastreável, com dado do campo dela (Bela Vista, outras redes), ou só estruturalmente sem número?
2. A citação da servidora de 23 anos fica (ilustrando estrutura, sem afirmar a raça dela), ou busca-se um relato com recorte racial já declarado pela própria pessoa?
3. A camada racial entra na capa ou no meio do carrossel?
4. Quanto da ponte com Tereza de Benguela (25/07) entra aqui? A Tecelã propõe só a frase mínima: "quem sustenta o território raramente é quem tem o cargo de sustentar".
5. A hipótese de segregação ocupacional por contrato dentro do SUS/SUAS entra como afirmação, ou fica como fio de pesquisa?

---

## 4. Pendência de QA que ficou aberta

O `A2-argumento-tecela.md` passou no teste do travessão (zero ocorrências), mas **furou a proibição da estrutura "não é X, é Y"** em cerca de 18 pontos. Dois deles são graves porque estão em frase-núcleo que iria para a copy:

- linha 194: "A pergunta que decide se isso muda alguma coisa não é quanto. É de quem."
- linha 306: "A pergunta que decide isso não é quanto sofrimento existe. É de quem."

A correção estava começando quando a sessão virou. Precisa ser feita antes de o texto chegar no `copywriter-paaps`.

---

## 5. A capa e o primeiro slide

Nesta sessão nenhuma capa ou slide foi entregue para a peça das mulheres no cuidado: ela ainda está na etapa de argumento e não tem texto de slide escrito.

A única capa e slide 1 que existem no repositório são do carrossel anterior, **"Quem cuida da RAPS", de 15/07**, que é o ciclo do qual esta peça nasceu como sobra.

**Pasta:** `conteudo/instagram/paaps.brasil/entregas/2026-07-JULHO/sessao-01-quem-cuida-raps/`
**PNGs:** `slide-01.png` a `slide-08.png`, 1080×1350, modo PAAPS PURO
**Canva:** https://www.canva.com/d/OnQaQnUzCRdMDsr (design `DAHPkTDk4cg`, cópia do template `DAHLWb1s8U0`)
**Texto-fonte:** `conteudo/instagram/paaps.brasil/conteudo/carrossel-2026-07-15-quem-cuida-raps.md`, seção VERSÃO MONTÁVEL
**Ficha da entrega:** `.../sessao-01-quem-cuida-raps/ENTREGA.md`

### Slide 1, CAPA
- Headline: É impossível oferecer vínculo contínuo através de contratos que terminam todo ano.
- Sub em caps: É O VÍNCULO QUE TRATA NO CUIDADO EM LIBERDADE
- Contexto: E a mesma rede é gerida de um jeito que desfaz vínculo: contrato que vence, equipe que roda, número que apressa.
- Crédito: @paaps.brasil · quem cuida da RAPS

### Slide 2, AFIRMAÇÃO (primeiro slide de conteúdo)
- Headline caps: A ÁREA É PESADA. ISSO EXPLICA POUCO.
- Statement caps: O QUE ADOECE MORA NA ORGANIZAÇÃO DO TRABALHO. E ORGANIZAÇÃO SE MUDA.
- Corpo: Com equipe estável, supervisão e tempo, cuidar de quem sofre é ofício. Sem contrato que dura, com meta no lugar de escuta, vira moedor.
- Crédito: @paaps.brasil · quem cuida da RAPS

**Ponte já plantada nessa peça:** o slide 7 termina com "Na base, quem cuida é mulher, desproporcionalmente negra. Dia 25, ela ganha nome." É a porta que a peça atual atravessa.

**Pendências dessa entrega de 15/07 que continuam abertas:** foto do slide 4 nunca encontrada, auditoria do `critico-design` nunca rodada, upload ao Drive pendente, e a peça segue aguardando validação da Mallu.

---

## 6. Onde retomar na próxima sessão

Ordem sugerida:

1. **A Mallu responde as cinco perguntas** da seção 9 do `A2-argumento-tecela.md`. É o que destrava tudo.
2. **Corrigir as ocorrências de "não é X, é Y"** no A2, principalmente as duas frases-núcleo.
3. **Acionar o `radar` em modo dirigido**, com o norte que o `T-decisao-de-tronco.md` já definiu: o que mudou desde 15/07 na NR-01, na CISSP e na PEC 221, e dado do IBGE sobre uso do tempo por gênero e raça (a Tecelã se recusou a colocar número sem edição e ano confirmados). O ciclo do Radar iniciado em 26/07 está parado na etapa `memoria`, vivo.
4. **Acionar o `paaps-brasil`** para a leitura de performance do perfil, que roda em paralelo ao Radar.
5. **Acionar o `copywriter-paaps`** com o A2 fechado, gerando `A3`.
6. Depois: `buscador-fotos`, `aplicador-visual`, `critico-design`, e o gate final da Mallu.

---

## 7. Arquivos de referência que os agentes leem

- `insumos-compartilhados/nucleo-comum/voz-paaps.md` (gabarito de voz e proibições)
- `insumos-compartilhados/nucleo-comum/base-teorica/README.md` (base da Tecelã)
- `insumos-compartilhados/nucleo-comum/afeto-situado-mallu.md` (método quando o gancho não vem dela)
- `insumos-compartilhados/nucleo-comum/identidade-aplicada.md` e `visual-instagram.md` (montagem)
- `.claude/agent-memory/paaps-brasil/baselines-e-padroes.md` (a mecânica de capa validada, 3,0% de conversão no post de 07/07)
- `.claude/agent-memory/copywriter-paaps/APRENDIZADO.md` (registra a sobra que virou esta peça)
- `conteudo/ciclos/tecela-2026-07-15.md` (rodada anterior, item d, semente do recorte de gênero e raça)

---

## 8. Pendências estruturais do fluxo, não desta peça

- `critico-conteudo` é placeholder vazio: o QA final não tem dono, então hoje quem julga o texto é quem escreveu.
- `ecoa` incompleto, fora de produção.
- Nó visual: régua no nível Radilson sem fonte própria que a sustente.
- Corpus de voz pessoal da Mallu não mapeado, o que impede rodar o ramo @amalluvasconcellos sem afeto emprestado do corpus institucional.
- `sentinela` fora do fluxo, arquivo ainda no disco apontando para caminho velho de dashboard.
