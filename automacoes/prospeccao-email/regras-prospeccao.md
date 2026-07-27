# Regras de prospecção fria: o que o Claude Code faz quando o n8n dá o toque

> Runbook operacional. O Claude Code lê este arquivo ao receber o toque do n8n e executa a
> rotina abaixo. Sem Hermes: só **Claude Code** (personalização, em sessão) e **n8n**
> (captura de gatilho, disparo via Resend e retorno de eventos). Fonte única da verdade: o
> CRM no Notion. Este arquivo guarda a lógica, nunca os dados das pessoas.

## Bases do CRM usadas

| Base | Papel | Data source |
|---|---|---|
| **(EMP) Leads** | A organização (prefeitura/secretaria). Funil B2B/B2G. | `collection://22244cb5-2e00-811b-8203-000b10c4de63` |
| **(EMP) Contato** (Lista de Contatos) | A pessoa/gestor e o **e-mail**, ligada ao Lead pela relação `Lead`. | `collection://22244cb5-2e00-81c5-80a5-000b89e7d710` |
| **(EMP) Atividades** | O **log de toques**. Cada e-mail frio vira uma linha aqui. | `collection://22244cb5-2e00-812f-bbd1-000bd0566b0d` |

Guia completo dos databases: página Notion `35644cb52e0081729d35cd1d52deff18`.

## Quem pesquisa o quê (divisão por velocidade do dado)

Dois agentes encostam em pesquisa. Para não duplicarem nem se contradizerem, a divisão é
por quão rápido o dado envelhece, não por assunto:

- **Buscador-leads:** a ficha estrutural (dado que muda devagar): porte, status jurídico,
  de onde vem a verba, secretaria e decisor, e-mail institucional, e a **existência** de
  lei/projeto de saúde do servidor. Qualifica o lead e serve por meses.
- **Carta-fria:** o gancho conjuntural (dado que precisa estar fresco): a notícia da
  semana, o edital recém-saído, o dado de afastamento mais recente, e o **status atual** da
  lei/projeto. Revalida no instante do envio, com o critério de veracidade de sempre: fato
  publicado, com link, nada inferido.

A ficha completa dos sete dados por município, a estratégia de escrita por porte e o
detalhamento do sinal legislativo estão em `personalizacao/ficha-municipio.md`.

## A esteira de Status (a escada do lead)

`0. Alvo` (fila do buscador, nunca contatado) → **e-mail de prospecção sai** → `1. Cadastrado`
(já tocado; só recebe re-prospecção depois de 60 dias, e se respondeu não recebe mais) →
**respondeu** → `Aquecimento` (saiu do pool frio, virou conversa humana) → **após reunião de
venda, com algo concreto sendo negociado** → `2. Negociação` → **fechou** → `3. Cliente`.
`4. Perdido` fica fora da linha.

A prospecção fria só age nas duas primeiras etapas: manda o primeiro e-mail para quem está
em `0. Alvo` e a re-prospecção para quem está em `1. Cadastrado` com o cooldown vencido. De
`Aquecimento` em diante é a Mallu, no toque humano.

**Inbound espontâneo:** quem chega direto no nosso e-mail manifestando interesse, sem a gente
ter prospectado, entra em `Aquecimento` (manifestou interesse, ainda sem reunião). Segue para
`2. Negociação` só depois da reunião de venda.

## A regra dos 2 meses (dedup, sem mexer no schema)

A (EMP) Leads não tem campo de "data do último contato" e, por decisão da fundadora, não
vamos criar um. Em vez disso, usamos o que já existe:

- **Cada e-mail frio enviado vira uma Atividade** ligada ao Lead, com `Tipo = PROSPECÇÃO`
  (opção que já existe na base). O `createdTime` automático dessa Atividade **é a data do
  toque**.
- **Um lead só é elegível se NÃO tiver nenhuma Atividade `PROSPECÇÃO` nos últimos 60 dias.**
- Vale **mesmo que o lead tenha respondido**: respondeu e avançou, sai do pool e vira
  conversa humana; respondeu e não avançou, só recebe novo toque frio depois de 60 dias.

Um toque = uma Atividade `PROSPECÇÃO` datada. É essa marca que arma o cooldown. Sem ela, o
lead voltaria à fila na semana seguinte.

## Quem entra e quem nunca entra no pool da semana

**Entra** um lead que reúne tudo:

1. `Status = 0. Alvo` (nunca contatado, primeiro toque), ou `Status = 1. Cadastrado` /
   `4. Perdido` com o cooldown de 60 dias vencido (re-prospecção).
2. Bate o ICP (ver `icp/README.md`: prefeitura/secretaria com servidores expostos a
   sofrimento coletivo, sinal de necessidade, gancho local verificável).
3. Tem e-mail institucional público em (EMP) Contato.
4. Não tem Atividade `PROSPECÇÃO` nos últimos 60 dias.

**Nunca entra:**

- `Aquecimento`, `2. Negociação`, `3. Cliente` ou `5. Finalizado`: já respondeu ou está no funil humano.
- Quem recebeu toque há menos de 60 dias.
- Quem pediu descadastro.

## Passo a passo ao receber o toque do n8n

1. **Ler a meta da semana.** Padrão: 15 e-mails (ver `cadencia.md`); respeitar o warm-up de
   volume no começo.
2. **Montar o pool de elegíveis** consultando o CRM: Leads em `0. Alvo` (primeiro toque) e
   Leads em `1. Cadastrado` / `4. Perdido` com o cooldown de 60 dias vencido (re-prospecção),
   que batem o ICP, com e-mail em (EMP) Contato, e **sem Atividade PROSPECÇÃO nos últimos 60
   dias**. Excluir quem respondeu (`Aquecimento` em diante), o funil humano e os descadastrados.
3. **Se o pool for menor que a meta, fazer busca ativa na internet** por novas organizações
   do ICP. Fontes: sites `.gov.br` de prefeituras e câmaras, diários oficiais, portais de
   transparência, órgãos de estatística (IBGE/MTE/INSS) e o Diário Oficial dos Municípios de
   MG (AMM-MG) para o sinal legislativo. **Ordem híbrida da fila:** primeiro os municípios
   que já têm lei ou projeto de lei de saúde mental do servidor; depois completar até a meta
   pelo porte (interior de MG, pequeno a médio) e pela dor de afastamento. Preencher a ficha
   dos sete dados (`personalizacao/ficha-municipio.md`) na página do Lead. Para cada
   organização nova:
   - Cadastrar em **(EMP) Leads**: `Nome`, `Status = 0. Alvo`,
     `Como conheceu? = vendas/buscaativa`, `Criativo` conforme a oferta.
   - Cadastrar o gestor/contato em **(EMP) Contato**: `Nome`, `Email` (institucional
     público), vínculo pela relação `Lead`.
   - Só e-mail institucional público. Nunca raspar dado pessoal sensível.
4. **Revisar os já contatados (checagem final anti-repetição):** para cada candidato,
   confirmar de novo que não há Atividade `PROSPECÇÃO` com menos de 60 dias. Quem falhar, sai
   da fila.
5. **Personalizar (Claude Code, em sessão):** pesquisar cada lead (gancho local honesto e
   verificável), montar o e-mail a partir da Carta-Mallu na voz PAAPS, dar nota 0 a 100. Só
   seguem os que passam do corte de qualidade.
6. **Aprovação da Mallu (gate humano).** Nenhum e-mail sai sem ela ver. Cada prospect é
   personalizado e exige atenção dela no começo, até o agente aprender a escrever. Ver a
   seção "O gate de aprovação" abaixo.
7. **Entregar ao n8n os e-mails aprovados** (só os aprovados), que dispara via Resend com a
   cadência e o warm-up de `cadencia.md`.
8. **No envio confirmado de cada e-mail:** registrar a Atividade `PROSPECÇÃO` no lead (a marca
   que arma o cooldown de 60 dias) e mover o `Status` do lead de `0. Alvo` para `1. Cadastrado`.

   > **Automatizado desde 26/07/2026.** Este passo roda dentro do próprio workflow da leva no
   > n8n, logo depois do envio de cada e-mail, e não em sessão do Claude Code. Ninguém precisa
   > abrir nada depois do disparo. O registro está pendurado na **saída de sucesso** do nó de
   > envio: e-mail que falhou não grava nada, o lead continua `0. Alvo` e volta na próxima leva.
   > Isso impede que o cooldown marque um toque que nunca chegou.
   >
   > Depende da credencial `Notion PAAPS (CRM)` existir no n8n. Ver
   > `n8n/criar-credencial-notion.mjs`. Sem ela o e-mail sai e o CRM não é atualizado, que é o
   > pior dos mundos: o `montar-leva.mjs` avisa em letras garrafais quando ela está faltando.
9. **Retorno:** o n8n recebe os webhooks (entregue, aberto, respondido) e atualiza o CRM.
   Quando um lead **responde**, o n8n **avisa a Mallu no WhatsApp** e o lead sai do pool frio:
   `Status = Aquecimento`. Vira conversa humana; passa a `2. Negociação` só após a reunião de
   venda, com algo concreto sendo negociado para o projeto.

## O gate de aprovação (passo 6)

Decisão da Mallu em 15/07/2026. **Cada prospect é personalizado e precisa da atenção dela no
começo, até o agente saber como escrever.** Isto não é burocracia: é o mecanismo pelo qual o
agente aprende a voz.

- **Nenhum e-mail vai para o n8n sem aprovação.** O gate é bloqueante, não um aviso.
- A Mallu recebe o lote com, para cada e-mail: o lead, o gancho local **com a fonte**, o texto
  inteiro, o assunto e a nota 0 a 100.
- Ela pode **aprovar**, **corrigir** ou **recusar** cada um, individualmente. Recusado não vai
  e o lead volta ao pool para a semana seguinte, sem gastar o cooldown (o cooldown só é armado
  por e-mail que saiu de verdade, no passo 8).
- **Toda correção dela vira aprendizado**, registrado no log da carta-fria por situação: o que
  ela cortou, o que reescreveu e por quê. É esse log que faz o gate ficar mais leve com o tempo.

### Como o gate afrouxa

O gate começa em 100% e só diminui quando a Mallu decidir, nunca por conta do agente:

| Fase | O que ela revisa | Quando muda |
|---|---|---|
| **Início (hoje)** | todos os e-mails, um por um | é o estado atual |
| **Amostragem** | uma parte do lote, por amostra | quando ela vier corrigindo pouco e disser que pode |
| **Exceção** | só os de nota baixa ou gancho frágil | decisão explícita dela |

O agente **nunca** avança de fase sozinho. Na dúvida, o gate é integral.

## Modelo da Atividade de toque (para registrar no passo 8)

- Base: (EMP) Atividades.
- `Atividade` (título): `E-mail frio - {nome_da_organizacao} - {data}`.
- `Tipo`: `PROSPECÇÃO`.
- `Lead`: vínculo com a organização em (EMP) Leads.
- `Descrição`: molde usado, assunto e a nota 0 a 100 da personalização.
- `Status`: `Finalizado`.

## Cuidados fixos

- **LGPD:** nome, e-mail e CPF de pessoa vivem só no CRM. Nunca em arquivo do repo nem em log
  de sessão. Este runbook guarda a lógica, não os dados.
- **Descadastro:** honrado na hora; o contato sai da fila e não volta.
- **Voz PAAPS:** estrutural e sistêmica, sem linguagem coachesca, sem a estrutura "não é X, é
  Y", sem travessão grande. Ver `nucleo-comum/voz-paaps.md` e `moldes/carta-mallu.md`.

Status: regras definidas em 14/07. Pendente: montar os fluxos JSON no n8n (captura, disparo
Resend, retorno de eventos, aviso no WhatsApp) e ligar o canal de WhatsApp.
