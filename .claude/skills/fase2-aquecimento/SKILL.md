---
name: fase2-aquecimento
description: Use quando alguém RESPONDE a um e-mail de prospecção fria do PAAPS Brasil e a conversa precisa virar reunião. É a Fase 2 do processo de aquisição: da resposta que chegou até a Conversa de Diagnóstico agendada. Ative em "chegou uma resposta", "responderam o e-mail frio", "o que eu respondo pro lead X", "esse lead entrou em Aquecimento", "marca a conversa com fulano", ou quando o aviso `RESPOSTA:` cair na caixa. Não use para escrever o primeiro toque (isso é `email-prospeccao`), para decidir quem prospectar (porteiro/buscador-leads), para inbound espontâneo de WhatsApp e comentário (agente `cs`), nem para proposta comercial depois da reunião.
---

# Fase 2: alguém respondeu

A Fase 1 termina quando o e-mail frio sai. A Fase 2 começa quando alguém responde e termina com data marcada na agenda da Mallu. É o trecho mais curto do funil e o mais caro de errar: tem uma pessoa real do outro lado, que já gastou tempo escrevendo de volta.

## Lei central

**NENHUMA RESPOSTA SAI SEM O GATE DA MALLU. NENHUMA RESPOSTA PROMETE MATERIAL, DATA OU NÚMERO QUE NÃO EXISTA HOJE.**

O gate é diferente do da Fase 1 de propósito. A carta fria saiu sozinha porque erra para um endereço institucional que ainda não conhece a gente. A resposta erra para uma pessoa com nome, que já respondeu uma vez e que a Mallu vai olhar na cara na reunião seguinte. Voltar a tirar o gate é decisão dela, não sua.

**Reafirmado por ela em 21/08/2026, no caso Mantena:** "não envie NADA sem minha autorização.
Precisa ser tudo perfeito. Se for pra ter um 1o case, eu posso mudar as regras do jogo." Ou
seja, automação nesta fase prepara, agenda e trava, mas nunca dispara sozinha. Mesmo com o
texto aprovado, o disparo agendado precisa conferir a caixa antes de sair e cancelar se chegou
mensagem nova do lead, porque o cenário que a Mallu aprovou pode ter mudado no intervalo.

## Gate: onde você não passa

- **Não escreve sem ler a resposta inteira, literal.** O aviso `RESPOSTA:` do n8n traz o texto. Resumo do aviso não basta: leia o que a pessoa escreveu, palavra por palavra, antes de formular qualquer coisa.
- **Não promete o que não existe.** PDF, apresentação, material, portfólio, planilha, prazo ("até sexta") e valor só entram na resposta se o arquivo estiver pronto e você souber onde ele está. Se não está pronto, ou você não promete, ou constrói antes de responder.
- **Não passa valor sem a unidade da entrada** (ver "A porta de entrada"). Nem tabela, nem "depende de vários fatores", nem faixa inventada.
- **Confere o nome do município e da pessoa letra por letra, na última leitura.** Mantena vira Montana, Congonhal vira Congonhas, e o nome trocado desfaz numa linha toda a prova de que estudamos aquela cidade. Vale também para o nome do equipamento e do cargo.
- **Não afirma nada sobre o município que você não checou nesta sessão.** A resposta costuma trazer fatos novos (equipamentos, cargos, projetos em curso): esses são dele, use os dele. Fato que você acrescentar precisa de fonte, como na Fase 1.

## Passo 1: ler quem respondeu, antes de escrever

Três perguntas, respondidas por escrito antes da primeira frase:

1. **Quem é a pessoa?** Nome e cargo, como ela mesma se apresentou. Técnico da rede, chefe de gabinete, secretário e prefeito leem coisas diferentes.
2. **Ela decide, ou ela abre a porta de quem decide?** Um técnico que responde a pedido do secretário é ponte, e ponte se trata como aliado: ele vai repetir internamente o que você escrever. Escreva o que ele consegue defender lá dentro.
3. **O que ela pediu, literalmente?** Conhecer o trabalho, material, preço, ou está dizendo não. A resposta atende esse pedido primeiro, e só depois convida.

Quando a pessoa conta o que o município já tem (equipamentos, cargo instituído, projeto em curso), isso não é ruído: é a leitura da rede chegando de graça. Devolva reconhecendo o que ela construiu, com as palavras dela, e nunca por cima.

## Passo 2: escolher a rota pelo tipo de resposta

| O que chegou | O que você faz |
|---|---|
| Interesse aberto ("queremos conhecer o trabalho") | Resposta curta, reconhece o que a rede já tem, nomeia a porta de entrada, oferece horários. |
| Pede material ou apresentação | Manda o que existe hoje (site e páginas reais, conferidas nesta sessão). Se o material pedido não existe, não invente prazo: ofereça a conversa como o caminho mais curto, e sinalize à Mallu que falta a peça. |
| Pede valores | Não foge e não inventa: nomeia o Diagnóstico 360 como unidade contratável e explica que o valor exato sai com o porte da rede. O número só sai com a Mallu tendo confirmado (ver "A porta de entrada"). |
| Sou o setor errado / fale com fulano | Agradece, pede o encaminhamento e o contato certo, e cadastra a pessoa nova em (EMP) Contato. O lead continua em Aquecimento. |
| Recusa clara | Agradece em duas linhas, sem insistir e sem "posso te mandar mais um material?". Status vai para `4. Perdido`. Volta ao pool frio só depois de 60 dias. |
| Descadastro | Agradece, marca descadastro. Nunca mais entra em leva nenhuma. |
| Autorresposta (férias, protocolo, "a prefeitura agradece seu contato") | Ignora, não responde. **Confere o CRM:** o filtro do n8n pode ter lido o protocolo como resposta de gente e movido o lead para Aquecimento. Se moveu, devolve para `1. Cadastrado`, desmarca `Respondeu?` e apaga a Atividade da falsa resposta, senão o lead sai do pool para sempre e a taxa de resposta do funil sobe sozinha. |
| Erro de entrega | Não é resposta: corrige o endereço em (EMP) Contato antes do próximo toque. O lead volta a `0. Alvo` se a carta nunca chegou. |

## Passo 3: escrever a resposta

A carta fria já convenceu. A resposta não repete o argumento, ela marca a conversa. Estrutura de quatro movimentos, e nada além disso:

1. **Agradece nomeando o que ele disse.** Uma frase, específica ao que ele contou. Genérico ("agradecemos o contato") desperdiça a única prova de que você leu.
2. **Reconhece o que a rede já construiu.** Quando o município já faz alguma coisa, esse é o ponto de partida do nosso trabalho, e dizer isso desarma a leitura de que viemos ensinar. Quando não faz, pule este movimento em vez de inventar elogio.
3. **Nomeia a porta de entrada em duas ou três frases.** O que é o Diagnóstico 360 e o que a gestão tem na mão quando ele termina.
4. **Convida com horário na mesa.** Ver o passo 4.

Regras de escrita, todas herdadas da voz PAAPS Brasil:

- **Curta.** A resposta cabe em uma tela. O e-mail que precisa de rolagem para chegar ao convite não marca reunião.
- **Uma pergunta só.** Pedir três dados por e-mail transfere dever de casa para quem respondeu e adia a conversa. O que você quer saber, você pergunta na reunião.
- Mantenha o assunto original da conversa: é resposta na mesma thread, não e-mail novo.
- Escreva com conectivos, sobretudo "só então" para carregar a ordem do método. Sem lista justaposta, sem estrutura binária, sem afirmar o que dá para mostrar.
- **Servidores Públicos, Trabalhadores, Profissionais do Cuidado.** Nunca "colaborador", nunca "Servidor" sozinho.
- **Sem travessão grande.** Dois pontos, ponto e vírgula ou hífen.
- Sem promessa de resultado, sem "capacidade instalada", sem vocabulário de coach, sem chapéu em caixa alta.
- Case com nome de cliente só dentro dos quatro autorizados (Allos, Desterro do Melo, Refazenda, Motiva). O resto vai anonimizado: "um município de pequeno porte no interior de Minas, em cinco meses".
- Assinatura: **Mallu Vasconcellos e equipe de relacionamento PAAPS Brasil**, da caixa `relacionamento@paaps.com.br`.

## Passo 4: o agendamento, que é o produto desta fase

O convite é a Conversa de Diagnóstico: 45 minutos, por vídeo, gratuita e sem compromisso.

1. **Ofereça dois ou três horários concretos**, tirados da agenda real da Mallu nesta sessão. Nunca devolva "me diga dois horários que funcionem para você": isso empurra o trabalho para quem respondeu e alonga o ciclo em dias.
2. **Peça o e-mail para o convite do Google Agenda**, com esta abertura: o convite vai por lá, e ele fica à vontade para adicionar pelo próprio link quem mais quiser que participe.
3. Nunca invente data. Use a data e a hora da sessão como referência para "esta semana", "terça", "amanhã".
4. Confirmado o horário, o convite sai do Google Agenda com o link da chamada, e a Mallu marca `Teve reunião?` no CRM quando acontecer.

## A porta de entrada: Diagnóstico 360

**O nome que vai para o lead é Diagnóstico 360.** "NR-1" é o driver legal que explica por que a demanda existe agora, e vive no nosso raciocínio interno e na conversa com quem cuida de gestão de pessoas. Nomear o produto pela norma encolhe o que a gente faz ao tamanho de uma obrigação, e trava na primeira prefeitura que perguntar se NR alcança estatutário.

O que o Diagnóstico 360 é, na frase que a rede entende: a leitura da rede, feita em diálogo profundo com as equipes, que devolve à gestão e aos técnicos o retrato dos riscos psicossociais, as prevalências e uma leitura honesta de como o trabalho daquela rede está em termos de saúde mental, junto com o desenho dos caminhos a considerar. Contratação única e simples, feita por psicólogos sistêmicos e sociais.

Essa é também a unidade de precificação: valor unitário, contratação única, dentro do limite da **dispensa simples** (Decreto nº 12.807/2025, art. 75, II: R$ 65.492,11 em 2026 para serviços comuns). Entrar por dispensa é o que faz a venda acontecer sem depender do procurador do município, em duas a quatro semanas de papelada leve, em vez dos meses de um pregão.

Depois do Diagnóstico vem a continuidade (execução própria ou licença), e isso não entra na resposta de Fase 2. Uma coisa por vez.

> **Valor unitário: pendente de confirmação da Mallu.** Enquanto ela não fixar o número, a resposta nomeia a unidade e o caminho de dispensa, e o valor sai na conversa. Nenhum número vai por e-mail antes disso.

> **Cuidado com o argumento da NR-1 diante de quadro estatutário.** As Normas Regulamentadoras alcançam o vínculo celetista, e boa parte do quadro municipal é estatutária. Antes de usar a NR-1 como obrigação legal com uma prefeitura específica, confirme como aquele município enquadra o próprio quadro. O Diagnóstico 360 não depende disso para se defender: ele se sustenta pela leitura da rede, pelas faltas e afastamentos e pela qualidade do atendimento que chega ao cidadão.

## Passo 5: o CRM, depois que a resposta sai

O n8n já fez a parte dele quando a resposta chegou: moveu o lead para `Aquecimento`, marcou `Respondeu?` e registrou a Atividade. Falta o que só a Fase 2 sabe:

1. **Cadastrar quem respondeu em (EMP) Contato**, ligado ao Lead, com nome, cargo e e-mail. Muitas vezes é uma pessoa diferente da que recebeu a carta, e é ela quem conduz daqui em diante.
2. **Registrar a nossa réplica como Atividade** ligada ao Lead. **Nunca com `Tipo = PROSPECÇÃO`**: esse tipo é a marca que arma o cooldown de 60 dias e existe só para toque frio. Marcar a réplica como PROSPECÇÃO corrompe o dedup.
3. **Conferir que o lead saiu de qualquer leva agendada.** Em `Aquecimento` o porteiro já o exclui, mas a leva da semana pode ter sido montada antes. Segundo e-mail frio para quem respondeu queima o lead.
4. **Anotar o aprendizado** em `.claude/agent-memory/carta-fria/APRENDIZADO.md`: qual gancho, qual porte e qual assunto trouxeram resposta. É isso que desloca a ênfase das próximas cartas.

## Fronteiras: o que a Fase 2 não faz

- Não manda proposta comercial, contrato nem minuta. Isso nasce depois da reunião.
- Não faz a leitura do território por e-mail. O diagnóstico é o serviço, não um brinde de pré-venda.
- Não responde dúvida metodológica profunda por escrito. Isso é conversa, e conversa é o que estamos marcando.
- Não trata sofrimento individual de quem escreve. Se aparecer risco, para tudo: acolhe, aponta CVV 188, CAPS ou UBS, SAMU 192 em emergência, e avisa a Mallu.

## Tabela de racionalizações

| Pensamento | O que está acontecendo |
|---|---|
| "Ele pediu material, mando o deck que já existe" | O deck de investidor tem 112 MB e foi escrito para outro leitor. Material que não existe para este leitor não se improvisa. |
| "Prometo o PDF para sexta e a gente faz até lá" | Você acabou de criar um prazo para outra pessoa cumprir. Só promete o que está pronto. |
| "Ele perguntou preço, respondo que depende de vários fatores" | Isso é evasiva com cara de resposta. Nomeie a unidade (Diagnóstico 360, dispensa) e puxe para a conversa. |
| "Peço os dados por e-mail para já chegar com número" | Dever de casa para quem respondeu. Os dados saem da conversa, em 45 minutos, sem ele trabalhar. |
| "Melhor ele escolher o horário que preferir" | Agenda em aberto adia. Dois ou três horários na mesa marcam. |
| "É só um agradecimento curto, não precisa de gate" | Todo texto que sai assinado pela Mallu passa por ela nesta fase. |
| "A resposta veio de um técnico, o importante é falar com o secretário" | O técnico é quem vai defender a ideia lá dentro. Passar por cima dele fecha a porta que ele acabou de abrir. |
| "Aproveito e já explico tudo que a PAAPS faz" | A carta fria já convenceu. A resposta marca a reunião. |
