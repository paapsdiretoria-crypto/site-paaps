# Plano: e-mails para a rede socioassistencial de BH (pesquisa de TCC)

> Aberto em 27/08/2026. Campanha da **pesquisa da Mallu**, não da PAAPS.
> Nada sai sem ela ativar o workflow.

---

## 1. Por que isto não pode entrar no fluxo da prospecção

O disparo diário que já roda (`Prospecção - Disparo diário (07:00)`) faz três coisas depois
de cada envio: grava uma Atividade `PROSPECÇÃO` no CRM, move o Lead de `0. Alvo` para
`1. Cadastrado` e arma o cooldown de 60 dias que o porteiro lê.

Se um CRAS entrar por ali, ele vira lead comercial da PAAPS no Notion, entra na contagem do
funil e fica bloqueado para prospecção real por 60 dias. Um CRAS não é lead: é campo de
pesquisa. Por isso a campanha ganha **workflow próprio, sem nenhum nó de Notion**.

| | Prospecção PAAPS | Pesquisa TCC |
|---|---|---|
| Remetente | relacionamento@paaps.com.br | o mesmo (ver decisão em aberto, seção 6) |
| Fonte da lista | Notion, base (EMP) Leads | arquivo local `unidades-bh.json` |
| Registro pós-envio | CRM + cooldown 60 dias | só log da execução no n8n |
| Assinatura | `assinatura-email-640.jpg` (montanha) | `assinatura-pesquisa-mallu.jpg` (nova) |
| Rodapé | "PAAPS Brasil, rede de saúde mental..." | rodapé acadêmico, sem marca |
| Cadência | 5 por dia, 07:00 | ver seção 4 |

---

## 2. As seis etapas, na ordem

### Etapa 1 : a lista vira arquivo
Você me manda as unidades (CRAS, CREAS, Centro POP, Unidade de Acolhimento, o que for).
Eu transformo em `unidades-bh.json` com um registro por unidade:

```json
{ "unidade": "CRAS Cabana", "tipo": "CRAS", "regional": "Oeste",
  "email": "...", "responsavel": "", "tratamento": "Prezada coordenação" }
```

O campo `tratamento` existe porque nem sempre se sabe o nome de quem coordena, e
"Prezado(a) coordenador(a)" impessoal é o que se usa quando não se sabe.

### Etapa 2 : conferir cada endereço antes de disparar
E-mail de unidade pública muda, e endereço morto volta como bounce. Bounce em série é o
que derruba a reputação do domínio paaps.com.br, que é o mesmo domínio da prospecção
comercial. Conferência antes do disparo, na fonte oficial da PBH, um por um.

### Etapa 3 : o texto do e-mail
Registro acadêmico e formal, na primeira pessoa, sem nada de linguagem de venda. Estrutura
padrão de convite de pesquisa (é o que um gestor de dispositivo reconhece e responde):

1. Quem escreve, curso, instituição, orientação.
2. Título e pergunta da pesquisa, em duas linhas.
3. O que exatamente se pede à unidade, e quanto tempo consome.
4. Cuidados éticos: participação voluntária, sigilo, anonimização, TCLE, número do CAAE
   se houver aprovação no CEP.
5. O que a unidade recebe de volta (devolutiva dos resultados costuma ser o que faz
   coordenação responder).
6. Um pedido único e claro no fim, com prazo.

Escrevo o primeiro rascunho quando você me passar os dados da seção 5. Você lê e calibra
antes de qualquer coisa ir para o n8n.

### Etapa 4 : assinatura
Feita e fechada: `insumos-compartilhados/assinatura-email/assinatura-pesquisa-mallu.html`,
`.png` e `.jpg`. Cartão acadêmico limpo, decidido por você em 27/08/2026: sem logo, sem
`@paaps.brasil`, sem LinkedIn da empresa, sem "Saúde mental coletiva", sem "Políticas
públicas do futuro" e sem "CEO Founder". Ficou monocromático, marrom sobre papel, com o
filete vertical no lugar do painel do logo.

Ainda aberto só o texto exato que você disse que ia escrever.

Depois de fechada, ela vira um asset próprio no n8n (URL fixa separada da assinatura da
prospecção, para uma nunca sobrescrever a outra).

### Etapa 5 : o workflow no n8n
Cópia enxuta do disparo diário, sem os nós de CRM:

```
agenda -> buscar assinatura -> fila de unidades -> uma de cada vez:
   montar o e-mail -> enviar (SMTP Titan) -> esperar N min -> próxima
                                          -> ao fim: resumo do dia para você
```

Nasce **desativado**, como o da prospecção. Ativar é o seu gesto, e é o gate. Enquanto
estiver desativado, a hora passa e nada sai.

### Etapa 6 : receber as respostas
As respostas caem na caixa do Titan. Duas opções, escolha sua:
- **Simples:** você acompanha na caixa e me avisa quem respondeu.
- **Automática:** clono o `Prospecção - Retorno (quem respondeu)`, que lê a caixa por IMAP,
  e ele te avisa no WhatsApp a cada resposta, com uma planilha de controle da coleta à parte.

---

## 3. O que eu NÃO vou fazer

- Mandar tudo em cópia oculta. Um e-mail com 40 endereços em Cco é a definição de spam para
  qualquer filtro institucional, e a maioria nem chega. Cada unidade recebe um e-mail
  individual, endereçado a ela.
- Disparar sem você ler o texto final.
- Cadastrar as unidades no CRM da PAAPS.

---

## 4. Cadência e risco de entrega

O domínio paaps.com.br já dispara 5 e-mails por dia de prospecção às 07:00. A pesquisa
soma em cima disso, no mesmo domínio.

Régua que proponho, a ajustar quando eu souber o tamanho da lista:
- **até 20 unidades:** tudo em 2 dias, 10 por dia, em horário diferente do da prospecção
  (sugiro 14:00), 8 minutos entre um e outro.
- **acima de 20:** 10 por dia até acabar.

Prefeitura de capital costuma ter filtro mais duro que prefeitura pequena. Vale começar com
um lote de teste de 3 unidades e conferir se chegaram antes de soltar o resto.

---

## 5. O que eu preciso que você me diga para escrever o e-mail

Sem isto o texto não fica de pé, porque cada item aparece explicitamente no corpo:

1. **Título e pergunta da pesquisa.** O tema do TCC, e o que você quer descobrir.
2. **O que você pede à unidade.** Entrevista com a coordenação? Questionário online para os
   trabalhadores? Autorização institucional para depois convidar as equipes? Observação de
   campo? Muda o e-mail inteiro.
3. **Tempo que consome** de quem aceitar (ex.: "entrevista de 40 minutos, remota").
4. **Situação no Comitê de Ética.** Tem aprovação? Número do CAAE? Tem carta de anuência
   para a unidade assinar? Se tiver, isso vai logo no começo do e-mail: é o que faz uma
   coordenação de CRAS responder em vez de arquivar.
5. **Curso, campus e orientação.** Nome completo do orientador e e-mail dele, se puder
   aparecer. Convite de pesquisa sem orientação nomeada não passa credibilidade.
6. **Prazo da coleta.** Até quando você precisa das respostas.

---

## 6. As duas decisões, já fechadas (27/08/2026)

**6.1 A assinatura não carrega mais a PAAPS.** O cartão anterior dizia a empresa em oito
lugares antes da primeira frase: logo, `paaps.com.br`, `@paaps.brasil`, o LinkedIn da
empresa, "Saúde mental coletiva", "Políticas públicas do futuro", o cargo de CEO e o
endereço remetente. Um convite de pesquisa assinado assim é lido como abordagem comercial
disfarçada, e aí nem a pesquisa nem a PAAPS ganham. Escolha: **cartão acadêmico limpo**.

**6.2 O "CEO Founder" saiu.** A linha do cargo é `PESQUISADORA · PSICOLOGIA PUC MINAS`.

**O que ainda diz PAAPS:** o domínio do remetente, `relacionamento@paaps.com.br`, que é o
login que temos. Se você tiver e-mail de aluna da PUC Minas, dá para pôr ele no cartão e
como `Reply-To`: o disparo continua saindo pelo Titan, mas a resposta do gestor vai para o
endereço acadêmico, e o e-mail inteiro passa a ser coerente. É meia hora de trabalho.

## Estado de hoje (27/08/2026, fim da tarde)

| Item | Situação |
|---|---|
| Assinatura acadêmica | **pronta.** Cartão limpo, nome completo `MARIA LUIZA VASCONCELLOS BARBOSA`, para bater com os documentos do CEP e do TCLE |
| Asset da assinatura no n8n | **no ar e conferido.** `/webhook/assinatura-pesquisa`, separado do da PAAPS. Devolve os mesmos bytes do arquivo local |
| Carta de anuência (DGTE) | **anexada de verdade.** PDF em `anuencia-suas.pdf` (fora do git), servido por `/webhook/anuencia-tcc`, conferido byte a byte, entra em todo e-mail via `attachments: "assinatura,anuencia"` |
| Molde do e-mail | **pronto.** `template-email-pesquisa.html`, sem logo, sem perfil de rede social, sem rodapé de descadastro |
| Texto da carta | **pronto.** Escrito pela Mallu (rascunho 3), CAAE preenchido, cita a anuência anexada, duração de uma hora, prazo segunda 31/08 |
| Lista de unidades | **5 confirmadas, 1 pendente.** Hospedagem Social Além Paraíba (Rua Além Paraíba 951, Lagoinha, BH) sem e-mail publicado; marcada `pular: true`, entra numa segunda rodada |
| Prévia | **gerada, com aviso do anexo.** Uma por unidade, em `previa/` |
| Aviso de resposta | **no ar.** Desvio dentro do workflow de retorno que já existia: endereços das 5 unidades viram `RESPOSTA TCC`, sem tocar o CRM. Caminho da prospecção conferido intacto |
| Workflow da leva | **monta sem erro com as 5 unidades.** Falta só ativar |

**Para sair:** sua leitura da prévia, e a decisão sobre a Hospedagem (seção 7). Depois, um
comando monta a leva e você liga a chave no n8n.

**Decisão de cadência:** 5 unidades, 28/08 (sexta) às 09:00, 8 minutos entre uma e outra.
Horário diferente do disparo da prospecção, que sai 07:00 do mesmo domínio.

## 7. A Hospedagem Social Além Paraíba: o que os e-mails que você mandou NÃO são

Você passou `psb@alemparaiba.mg.gov.br` e `apoio.smas@alemparaiba.mg.gov.br`. Fui checar antes
de colocar na leva, porque endereço de órgão público muda e um contexto errado é fácil de
confundir. **Os dois são da Secretaria Municipal de Assistência Social do MUNICÍPIO de Além
Paraíba, em Minas Gerais, a cerca de 300 km de Belo Horizonte** (Praça Coronel Breves 164,
telefone (32) 3466-5150). Não é a mesma coisa que a Hospedagem Social Além Paraíba de BH: ali
"Além Paraíba" é o nome da rua (Rua Além Paraíba 951, Lagoinha, 120 vagas, uma das quatro
Hospedagens Sociais da PBH). Escrever para lá seria pedir a um SUAS de outra cidade, fora do
que a anuência da DGTE cobre, então não usei.

A PBH não publica e-mail das Hospedagens Sociais na página institucional. Dois caminhos:

- **Perguntar à Alessandra e à Patrícia**, da Assessoria de Educação Permanente, que já
  indicaram as outras cinco unidades.
- **Perguntar direto ao DEAC**, que é a diretoria de alta complexidade e já está na leva: a
  Hospedagem Social é subordinada a ela.

Marquei a unidade como `pular: true` em `unidades-bh.json`, sem apagar o registro: a leva sai
com as cinco confirmadas, e quando o e-mail vier é só tirar a marca e rodar o montador de novo.
