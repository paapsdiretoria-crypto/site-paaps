# CLAUDE.md — automacoes/

> Lido ao abrir esta pasta. Herda o CLAUDE.md da raiz `SITE PAAPS/` (identidade, voz,
> proibições, epistemologia). Este arquivo cuida só do que é próprio daqui: **a
> orquestração**. Se algo aqui contradiz a raiz, a raiz vence, exceto nas regras de
> segredo e dado pessoal, que são mais duras nesta pasta.

---

## O que esta pasta é

O repositório da **receita** das automações do negócio: lógica de fluxo, moldes de texto,
prompts, rubricas, configurações. O bolo (dados de pessoas, chaves, mídia) vive fora.

Um teste de uma linha, para qualquer arquivo novo: *se vazasse amanhã, alguém sofreria
dano?* Se sim, o arquivo está na pasta errada.

## O que NUNCA entra aqui

- Chave, token, senha, `client_secret`. Vivem no `.env` local, listados sem valor no
  `.env.example`.
- Dado pessoal sob LGPD: nome, e-mail, CPF de lead ou servidor; lista de prefeituras;
  resposta de formulário. Vivem no CRM do Notion ou em planilha privada.
- Binário pesado: vídeo, foto da galeria do Mac, PDF grande.

Ao registrar configuração que contenha segredo, mascarar como `[removido]`.

---

## As 5 frentes e o estado real

| Pasta | Frente | Estado verificado (20/07/2026) |
|---|---|---|
| `prospeccao-email/` | E-mail frio para prefeituras | 7 documentos, runbook operacional completo. Falta executar |
| `conteudo-pipeline/` | Carrosséis, reels, vídeos de 40s | Agentes prontos em `.claude/agents/`. Orquestração inexistente |
| `funil-leads/` | Formulário do site para o CRM | Só README. Destino decidido (Notion, base Leads) |
| `trafego-pago/` | LinkedIn, Google, Meta Ads | Só README. Windsor AI pode dispensar ferramenta nova |
| `crescimento-instagram/` | Seguidores para a ECOA | Só README. Sentinela já cobre parte da análise |

Mais `WORKFLOWS Miro/` (PDF e JPG do desenho de fluxo) e `.env.example`.

**Ordem sugerida no README raiz:** começar por `funil-leads/`, por ser a mais simples e
por destravar as frentes 1 e 5.

---

## O contrato de orquestração

Toda automação desta pasta obedece à mesma anatomia. Um agente que não consegue preencher
as seis linhas abaixo ainda não está pronto para rodar.

| Campo | O que declara |
|---|---|
| **Gatilho** | O que faz o fluxo começar (cron, webhook, sessão aberta pela Mallu) |
| **Entrada** | O que ele lê, e de onde (CRM, arquivo, internet) |
| **Saída** | O que produz, e onde pousa (base do Notion, arquivo, fila do n8n) |
| **Gate** | Quem aprova antes de a saída virar ação no mundo |
| **Marca** | O registro que o fluxo deixa para não se repetir (ver cooldown abaixo) |
| **Falha** | O que acontece quando não dá certo, e quem fica sabendo |

### Divisão de trabalho fixa

- **Claude Code:** o cérebro que personaliza. Pesquisa, escreve, pontua. Roda em sessão
  aberta pela fundadora, nunca sozinho.
- **Mallu:** o gate. Aprova, corrige ou recusa.
- **n8n:** o braço mecânico. Captura, dispara, recebe webhook, atualiza o CRM.
- **Notion:** a fonte única da verdade. As automações alimentam e leem o CRM; não o
  substituem, não criam base espelho.

Regra de fonte única: uma base de verdade só, até algo concreto exigir a segunda. Vale
para o Notion contra Supabase e para qualquer par futuro.

---

## O gate de aprovação é lei do ecossistema

Escrito primeiro em `prospeccao-email/regras-prospeccao.md` (decisão da Mallu em
15/07/2026), vale para toda automação que produza texto público ou toque uma pessoa de
fora.

1. **Bloqueante.** Nada sai sem ela ver. O gate não é aviso, é porta.
2. **Ela recebe o suficiente para julgar:** o item, a evidência com a fonte, o texto
   inteiro e a nota de qualidade.
3. **Aprovar, corrigir ou recusar, um a um.** Recusado volta à fila sem gastar cooldown,
   porque o cooldown só é armado pelo que saiu de verdade.
4. **Toda correção dela vira log de aprendizado.** O que cortou, o que reescreveu e por
   quê. É esse log que faz o gate ficar mais leve com o tempo.
5. **O agente nunca avança de fase sozinho.** Integral, depois amostragem, depois exceção,
   e só por decisão explícita dela. Na dúvida, integral.

O gargalo do sistema é a atenção da Mallu, não a capacidade de produzir dos agentes. Metas
de volume se calculam a partir do que ela revisa bem. A meta de 15 e-mails por semana
nasceu desse cálculo, e o mesmo raciocínio vale para carrossel, reel e campanha.

## O cooldown: dedup sem mexer em schema

Padrão que resolveu a repetição na frente 5 e serve de modelo. Em vez de criar campo novo
de "último contato", cada toque vira uma **Atividade** datada e ligada ao registro, com
`Tipo = PROSPECÇÃO`. O `createdTime` automático é a data. Elegível é quem não tem Atividade
desse tipo nos últimos 60 dias.

Duas lições que se generalizam: preferir o registro que já existe a criar campo novo, e
sempre deixar marca do que o agente fez, porque sem marca ele repete na semana seguinte.

---

## CRM: as bases usadas

| Base | Papel | Data source |
|---|---|---|
| (EMP) Leads | A organização. Funil B2B/B2G de 9 etapas | `collection://22244cb5-2e00-811b-8203-000b10c4de63` |
| (EMP) Contato | A pessoa e o e-mail, ligada ao Lead | `collection://22244cb5-2e00-81c5-80a5-000b89e7d710` |
| (EMP) Atividades | O log de toques | `collection://22244cb5-2e00-812f-bbd1-000bd0566b0d` |

- Página Leads & Clientes: `https://app.notion.com/p/22244cb52e008124b5d6ce15f650eced`
- Guia dos databases: `35644cb52e0081729d35cd1d52deff18`
- Moldes de mensagem: `https://app.notion.com/p/33c44cb52e00807185c6e7b3e7da5577`
- Base Leads (id para o formulário): `22244cb52e008142b15bf53c15ae38c0`

---

## Decisões já fechadas (não reabrir sem motivo novo)

| Decisão | Data | Por quê |
|---|---|---|
| Remetente `relacionamento@paaps.com.br`, domínio principal | jul/26 | Volume baixo e personalizado protege a reputação. Subdomínio só se passar de centenas por dia |
| Resend como serviço de disparo | jul/26 | Plano gratuito cobre 100/dia, folga enorme sobre a meta de 15/semana |
| Respostas caem em `paapsdiretoria@gmail.com` via Cloudflare Email Routing | jul/26 | O domínio não tem MX. Resend envia, Cloudflare recebe |
| Meta de 15 e-mails por semana | 15/07/26 | Limite do gate humano, não da capacidade de escrita |
| ~~Meta de 15/semana~~ revogada: **5 por dia** | 30/07/26 | A meta de 15 nasceu do limite de atenção da Mallu lendo carta a carta. Com o gate por rubrica, esse limite deixou de ser o gargalo. Novo gargalo: o tamanho da fila de Alvos, que o buscador precisa reabastecer |
| ~~Gate por amostragem (corte 85)~~ revogado: **gate zero na prospecção** | 02/08/26 | Durou dois dias. Ela leu a primeira rodada automática, aprovou a escrita e tirou a aprovação carta a carta: as 5 do dia saem de segunda a sexta com qualquer nota. Ficam de pé só as 4 reprovações automáticas (integridade, não gosto). Único gate que sobra: resposta de gente |
| Prospecção roda **só de segunda a sexta** | 02/08/26 | Em 01/08 um e-mail saiu num sábado. Prefeitura não lê fim de semana e primeiro toque de sábado se perde. Escrita 17h e 21h (dias úteis), disparo 07:30 (dias úteis) |
| Todo e-mail enviado vira registro legível no Notion | 02/08/26 | O SMTP não deixa cópia na caixa de Enviados: sem esse registro a Mallu não tem como ler o que foi mandado em nome dela. A página da carta guarda o texto, o destinatário e a hora (`Enviada em`), e um aviso por e-mail resume o que saiu no dia |
| Cópia de tudo que sai gravada na pasta Enviados do Titan | 20/08/26 | Descoberto que a pasta tinha 1 mensagem só: SMTP entrega ao destinatário e não grava cópia, e o n8n dispara por SMTP puro. O serviço `com.mallu.sincroniza-enviados` remonta cada carta a partir de (EMP) Cartas de Prospecção e grava em Enviados, com a data do disparo. Ver `codigo/prospeccao-enviados/` |
| Notion como CRM, sem espelho Supabase | jul/26 | Fonte única. Supabase só quando o app exigir banco de verdade |
| Cooldown de 60 dias via Atividade, sem campo novo | 14/07/26 | Usa o schema que já existe |

---

## Divergências conhecidas (corrigir antes de confiar no arquivo)

Doc divergente é pior que doc ausente, porque o agente obedece o que lê.

1. **`metricas.md` está defasado.** Diz "meta: 100/semana", revogado pela decisão de
   15/07 que baixou para 15. Também trata o Resend como "provável", quando já foi
   escolhido.
2. ~~**`personalizacao/` não existe.**~~ **Resolvido em 30/07/26.** A pasta tem
   `ficha-municipio.md` (desde 24/07) e `rubrica-0-100.md` (30/07), que fecha a lacuna:
   os cinco critérios da skill viraram pontos, com quatro reprovações automáticas e o
   corte de 85. O passo 5 do runbook passou a ter critério.
3. **`nucleo-comum/voz-paaps.md` é referenciado por caminho relativo** em
   `regras-prospeccao.md`, mas mora em `insumos-compartilhados/` na raiz. O caminho não
   resolve daqui.

## Lacunas de orquestração (o trabalho de verdade)

1. **`conteudo-pipeline/mapa-do-pipeline.md`.** Radar, Sentinela, Tecelã e Narrador
   existem e nenhum arquivo diz quem chama quem, em que ordem, com que entrada e onde a
   saída pousa. É a frente mais madura em agentes e a mais crua em orquestração.
2. **Verificação de que a skill carrega.** O diagnóstico de 06/07 achou 14 erros
   "Unknown skill" em um mês: o catálogo declarava capacidade que o runtime não tinha.
   Orquestração pede verificação, não declaração. Skill é pasta com `SKILL.md` dentro;
   arquivo `.md` solto não carrega.
3. **Hook de proibições.** Hoje as proibições de voz dependem de o agente lembrar. Um
   hook de `Stop` que faça grep de travessão grande, de "não é X, é Y" e do vocabulário
   coachesco nos arquivos alterados torna a regra determinística.
4. **Nenhum JSON de fluxo do n8n existe ainda.** Todas as pastas `fluxos/` estão vazias.
   Antes de commitar qualquer export, conferir que saiu sem credencial e sem dado pessoal.

---

## Ao trabalhar aqui

- Antes de escrever fluxo novo, preencher as seis linhas do contrato de orquestração.
- Antes de criar campo em base do Notion, procurar o registro que já resolve.
- Antes de propor meta de volume, perguntar quanto a Mallu revisa bem.
- Ao fechar uma decisão, registrar na tabela de decisões deste arquivo, com data e razão.
- Mallu não programa. Entrega com placeholder vago ou passo que exija conhecimento
  técnico prévio está incompleta.
