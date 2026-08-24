---
name: project-organizacoes-varridas
description: Organizações já varridas e com ficha estrutural levantada na prospecção fria; e a limitação de o buscador não ter MCP do Notion na sessão
metadata:
  type: project
---

# Organizações já varridas (só o nome da organização, nunca o contato)

## 1ª leva, interior de MG, ficha estrutural fechada em 26/07/2026

Todas com e-mail institucional verificado em página `.gov.br` (ou portal da própria
entidade) e nome do titular publicado na mesma página:

- Prefeitura de Diamantina (MG)
- Prefeitura de Salinas (MG)
- Prefeitura de Bocaiúva (MG)
- Prefeitura de Janaúba (MG)
- AMM : Associação Mineira de Municípios

**Why:** eram os 5 leads que travavam o disparo de segunda-feira da 1ª leva; sem e-mail
institucional verificado a carta-fria não podia sair.
**How to apply:** não varrer esses 5 de novo. Se um deles voltar à fila, o que precisa ser
revalidado é só o nome do titular (secretário muda) e o sinal conjuntural, não a rota do
e-mail nem o porte.

Os quatro municípios ficam na faixa de 40 mil a 71 mil habitantes (Censo 2022), ou seja,
acima da faixa "médio" da ficha e bem acima do case Bela Vista de Minas. A estratégia de
escrita deles não é a de município muito pequeno.

## 2ª leva, norte/nordeste de MG, enriquecidas em 31/07/2026

Já estavam no CRM como `Status = 0. Alvo` desde 24/07/2026, sem e-mail. Fecharam nome +
cargo + e-mail institucional + gancho, todos em página `.gov.br` do próprio município:

- Prefeitura de Taiobeiras (MG)
- Prefeitura de Porteirinha (MG)
- Prefeitura de Monte Azul (MG): **exceção, ver abaixo, não reusar o e-mail sem checar**
- Prefeitura de Espinosa (MG)
- Prefeitura de Riacho dos Machados (MG)

**Why:** o pool de elegíveis da semana tinha só 2 leads com e-mail; faltavam 3 para fechar
a meta de 5 cartas.
**How to apply:** não varrer essas 5 de novo. Se voltarem à fila, revalidar só o nome do
titular. As rotas de e-mail estão em [[reference-fontes-email-institucional]].

**Atualização de 24/08/2026, só para Monte Azul (MG):** o e-mail fechado aqui
(`smas.saude@monteazul.mg.gov.br`) voltou como bounce em 03/08 por falta de MX no
domínio: o site `.gov.br` existe, mas o domínio não recebe e-mail de verdade. Lead voltou
a `0. Alvo` no CRM. Quando Monte Azul (MG) voltar à fila, **não reaproveitar esse e-mail
direto**: confirmar que o domínio tem MX antes de cadastrar de novo, e se não tiver,
procurar canal alternativo (gmail pessoal do titular, telefone da secretaria). **Atenção
ao nome:** existe também a "Associação Comunitária Monte Azul", ONG da zona sul de São
Paulo (ver [[project_referral_politico_monte_azul]]), que é organização totalmente
diferente, sem nenhuma relação com esta prefeitura de Minas Gerais: mesmo nome, cidades e
instituições diferentes, não confundir os dois leads. As outras quatro desta leva
(Taiobeiras, Porteirinha, Espinosa, Riacho dos Machados) não têm esse problema conhecido.

### Ficaram de fora, e por quê (não é lista morta, é lista com motivo)

- **Coração de Jesus**: portal lista as secretarias sem titular nem e-mail próprio. Só um
  gmail geral de gabinete. Sem nome + cargo, não fecha o gatilho D0.
- **Jaíba**: `/portal/secretarias` traz e-mail por secretaria mas **nenhum nome de
  titular**. Falta só a pessoa: se aparecer o nome em outra fonte oficial, fecha rápido.
- **Rio Pardo de Minas** e **Novo Cruzeiro**: o CMS ofusca o e-mail e o WebFetch devolve
  placeholder. O titular está publicado nos dois. Falta só o endereço legível.
- **Grão Mogol**: página de secretarias sem contato por secretaria.

Ou seja: os 5 restantes não são secos, estão **a um dado de fechar**. Numa próxima rodada,
atacar Jaíba (falta nome) e Rio Pardo/Novo Cruzeiro (falta e-mail legível) antes de sair
procurando município novo.

## 3ª leva, norte de MG, cadastradas e enviadas em 05/08/2026 (rotina diária, sem a Mallu)

Pool de `0. Alvo` com contato pronto estava zerado (Coração de Jesus e Jaíba já tinham carta
aprovada; os outros `0. Alvo` do CRM são leads antigos e desconexos do recorte atual, sem
Contato). Fui buscar e fechei nome + cargo + e-mail + gancho para três municípios novos,
todos já cadastrados como `1. Cadastrado` com carta `Aprovada`:

- **Prefeitura de Mato Verde**: e-mail institucional da Secretaria de Saúde em página
  `/portal/secretarias`. Gancho: nove unidades de saúde (um ambulatório + oito UBS/apoio),
  nenhuma é CAPS.
- **Prefeitura de São João do Paraíso**: e-mail institucional em página individual do
  departamento. Gancho: repasse SES-MG de 2024 para dois leitos de saúde mental do hospital
  municipal, dentro de pacote regional de R$ 807,8 mil.
- **Prefeitura de Mirabela**: e-mail institucional em duas páginas do site (`contato` e
  `quem-e-quem`), mas **grafado com acento** (`saúde@mirabela.mg.gov.br`) nas duas. Usei a
  normalização sem acento no cadastro (`saude@mirabela.mg.gov.br`) por ser o formato
  tecnicamente válido mais provável, mas é inferência minha, não o dado ao pé da letra.
  **Conferir se a carta voltar por endereço inexistente**: pode ser preciso testar a
  variante acentuada, ou achar rota alternativa de contato. Gancho: hospital municipal
  selecionado pela SES-MG para ~R$ 737 mil/ano (Rede de Urgência e Atenção Psicossocial),
  repasse a partir de maio/2025.

**Why:** o estoque de cartas `Aprovada` tinha caído para 2 (rodada extra de 12:00 do mesmo
dia esvaziou a fila); a rotina precisava fechar 3 para voltar a 5 antes do disparo das
07:30 do próximo dia útil.
**How to apply:** não varrer esses 3 de novo. Se voltarem à fila (não respondeu em 60 dias),
revalidar só o nome do titular e, no caso de Mirabela, resolver a dúvida do e-mail antes de
reenviar.

### Fonte de gancho nova: notícias da SES-MG sobre repasse a hospital específico

`saude.mg.gov.br/noticias/...` e `saude.mg.gov.br/<seção>/story/...` renderam gancho bom
(valor exato, hospital nomeado) em duas cartas desta leva, mas **nenhuma das duas URLs abriu
por WebFetch** (mesmo padrão 404/homepage já registrado para `/story/` em
[[reference-fontes-email-institucional]], agora confirmado também para `/noticias/`). O fato
foi confirmado por duas buscas (`WebSearch`) independentes convergindo no mesmo valor em cada
caso, não por leitura direta da página. Usei mesmo assim, com a ressalva declarada na nota de
cada carta, conforme já autorizado no `APRENDIZADO.md` da carta-fria. **Vale como fonte
consultável, não como fonte que abre no clique.**

## Sinal legislativo: buraco conhecido desta leva

Nenhum dos 4 municípios teve lei ou projeto de lei de saúde mental do servidor localizável
por busca aberta. O campo fica **em branco**, não preenchido por suposição.

**Why:** a ficha manda deixar em branco o dado sem fonte, e chamar de "lei" o que é projeto
(ou inventar que existe) queima a credibilidade da carta inteira.
**How to apply:** para a próxima leva, montar o topo da fila pelo Diário Oficial dos
Municípios Mineiros, não pelo buscador aberto; e não prometer ao porteiro que a fila
híbrida terá sinal legislativo em cidade pequena de MG achável por busca comum.

## Limitação operacional da sessão (verificar antes de confiar)

Em 26/07/2026 **e de novo em 31/07/2026** a sessão do buscador subiu **sem o MCP do Notion**: só WebSearch, WebFetch,
Read, Write, Edit. Não deu para criar o registro em (EMP) Contato nem editar o corpo da
página do Lead; a entrega virou payload pronto no relatório, para o porteiro ou a Mallu
cadastrarem.

**Why:** o gatilho D0 exige o cadastro em (EMP) Contato, e o agente não conseguiu executá-lo.
**How to apply:** conferir no início do ciclo se as ferramentas do Notion estão na sessão.
Se não estiverem, avisar o porteiro logo no começo, e não no fim, para ele decidir se
reabre a sessão com o MCP ou se assume o cadastro. Essa limitação pode ter sido corrigida:
checar antes de assumir que ainda vale.

## 4ª leva, 10/08/2026: rodada semanal completa, 25 cartas em duas ondas

**Onda 1 (16 municípios, Norte de Minas/Jequitinhonha), fechadas com e-mail e gancho verificados:**
Itacarambi, Montezuma, Presidente Kubitschek, Gouveia, Rubelita, Pedras de Maria da Cruz,
Indaiabira, Vargem Grande do Rio Pardo, Santo Antônio do Retiro, São Gonçalo do Rio Preto,
Ninheira, Grão Mogol, Novorizonte, Fruta de Leite, Berizal, Congonhas do Norte.

**Achado reaproveitável: a Carta de Serviços de um CAPS regional lista nominalmente os
municípios atendidos.** Rendeu quase toda a onda 1: Diamantina lista 14 municípios (CAPS
Renascer), Salinas lista 15 (CAPSi), Januária lista 4 (CAPS AD). É gancho verificável,
específico e honesto para qualquer município da lista ainda não tocado, sem precisar achar
notícia nenhuma (o que importa com o bloqueio eleitoral ativo). Da lista de Diamantina ainda
sobram sem e-mail confirmado: Carbonita, Coluna, Alvorada, Couto de Magalhães de Minas, Felício
dos Santos, Santo Antônio do Itambé, Senador Modestino Gonçalves.

**Ficaram cadastrados como `0. Alvo` com contato de saúde confirmado mas sem gancho ainda**
(prontos para a próxima rodada sem precisar buscar contato de novo): Nova Porteirinha, Mantena,
Icaraí de Minas. Datas ficou cadastrada só com ouvidoria geral, sem nome.

**Onda 2 (9 municípios, fora do Norte de Minas para variar o mapa):**
- Vale do Rio Doce: Aimorés, Conselheiro Pena, Resplendor (gancho: Plano de Ação do Programa
  Especial de Saúde do Rio Doce, jul/2025, cobre vários municípios da região pós-Fundão; mina
  reaproveitável do mesmo jeito que os CAPS regionais).
- Triângulo/Alto Paranaíba: São Gotardo, Rio Paranaíba (CISALP, consórcio regional de saúde),
  Ibiá.
- Sul de Minas: Piranguçu, Virgínia.
- Zona da Mata: Rio Pomba (destinatário só institucional, sem nome confirmado).

**Descartados na onda 2, por motivo:**
- E-mail ofuscado por CMS ou só gabinete geral sem gancho à altura: Guiricema, Astolfo Dutra,
  Ervália, Coimbra, Guidoval, Divino das Laranjeiras.
- Já constava em `(EMP) Leads`: Mantena (pesquisa completa feita, mas descartada por duplicidade;
  se Mantena voltar à fila, o material já está pronto: falta só achar o gancho, contato já
  confirmado na 4ª leva, ver acima).

**Why:** estoque de `Aprovada` zerado no início da rodada (todas as 20 cartas anteriores já
tinham saído como `Enviada`); meta de 25 para a semana inteira (n8n dispara 5/dia, seg a sex).
**How to apply:** para a próxima rodada, atacar primeiro a lista de Diamantina/Salinas/Januária
que ainda sobra (município com CAPS regional já mapeado, só falta e-mail), depois Nova
Porteirinha/Mantena/Icaraí de Minas (só falta gancho), antes de sair varrendo região nova.

Rotas e fontes em [[reference-fontes-email-institucional]].
