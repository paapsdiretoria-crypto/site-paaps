---
name: precificacao-paaps
description: Use para consultar ou informar o preço de qualquer serviço do PAAPS Brasil (Roda de Equipe, Treinamento, Plantão Psicológico, Psicoterapia Individual) numa proposta, e-mail, pitch, resposta a lead ou orçamento. Ative em "quanto custa", "qual o valor da Roda de Equipe", "monta o orçamento de X grupos", "responde quanto custa o plantão/a psicoterapia", "fecha o pacote de equipes". Não use para fechar preço final sozinho (sempre precisa do gate da Mallu antes de sair para o lead), nem para estimar quantas equipes um município tem (isso é conta de campo, à parte, com fonte própria), nem para conceder desconto abaixo do que está registrado sem decisão escrita dela.
---

# Régua de preço do PAAPS Brasil

**A régua vive aqui, não na memória de quem escreve.** Nenhuma proposta, e-mail ou resposta
menciona valor sem consultar esta skill primeiro.

## Lei central

```
NENHUM AGENTE INVENTA VALOR, NENHUM AGENTE FECHA PREÇO SOZINHO, NENHUM AGENTE DESCONTA
ABAIXO DO REGISTRADO SEM DECISÃO ESCRITA DA MALLU
```

## A régua vigente (ditada pela Mallu em 14/09/2026)

| Serviço | Unidade | Valor |
|---|---|---|
| Roda de Equipe PAAPS, presencial, 1h30 | por grupo de até 12 participantes | R$ 1.250,00 |
| Roda de Equipe PAAPS, em pacote de 5 grupos ou mais | por grupo de até 12 participantes | **R$ 1.100,00** |
| Treinamentos | formatos variados | a orçar, caso a caso |
| Plantão Psicológico | por 8h de plantão | R$ 1.550,00 |
| Psicoterapia Individual | por sessão | entre R$ 120,00 e R$ 250,00, podendo variar conforme a quantidade de beneficiários |

Estes são os únicos cinco valores registrados. Qualquer serviço que não esteja nesta
tabela (por exemplo, um Diagnóstico 360 sob medida ou um Programa Contínuo mensal fechado
para uma rede inteira) não tem preço-padrão: é orçamento caso a caso, decidido com a Mallu
na Conversa de Diagnóstico, nunca calculado sozinho por analogia com esta tabela.

## Como aplicar cada linha

### Roda de Equipe: o degrau de 5 grupos é a única variável de volume

- 1 a 4 grupos contratados: R$ 1.250,00 por grupo, sem exceção.
- 5 grupos ou mais, no mesmo pacote: R$ 1.100,00 por grupo, para todos os grupos do
  pacote, não só a partir do quinto.
- **Exemplo:** um lead pede 3 Rodas de Equipe soltas → 3 × R$ 1.250,00 = R$ 3.750,00. O
  mesmo lead fecha um pacote de 6 → 6 × R$ 1.100,00 = R$ 6.600,00, nunca R$ 1.250,00 nos
  4 primeiros e R$ 1.100,00 só nos 2 últimos.
- **Cada grupo é de até 12 participantes.** Um grupo operativo funciona bem entre 10 e 12
  pessoas: abaixo de 8 ele esvazia, acima de 12 deixa de ser grupo e vira plateia, e quem
  fala pouco some (ver `automacoes/prospeccao-email/respostas/mantena-calculo-equipes.md`).
  Isso importa para responder "quantos grupos preciso para minha equipe de N pessoas": a
  conta é N ÷ 11, arredondando para o número de grupos reais que a rede tem (equipes que
  trabalham juntas de verdade), nunca dividindo por 7 (tamanho de uma eSF no papel) ou por
  outro número que infle a contagem.

### Treinamentos: nunca um número fixo

Formato varia (carga horária, tema, presencial ou remoto, número de turmas), então não
existe valor de tabela. A resposta correta para quem pergunta é "vamos desenhar o formato
junto e te trazer o orçamento", nunca um número chutado por analogia com a Roda de Equipe.

### Plantão Psicológico: valor fechado por período de 8h

- R$ 1.550,00 cobre 8h corridas de plantão, presencial ou o formato acordado.
- **Exemplo:** um órgão pede cobertura de plantão em 2 dias de 8h → 2 × R$ 1.550,00 =
  R$ 3.100,00.

### Psicoterapia Individual: a faixa nunca é o lugar de cortar qualidade

- Piso: R$ 120,00 por sessão. Teto: R$ 250,00 por sessão.
- O valor dentro da faixa pode variar conforme a quantidade de beneficiários (mais
  beneficiários pode puxar o valor por sessão para o piso da faixa, nunca abaixo dele).
- **Qualidade psicoterapêutica é prioridade, não é onde se corta**: mesmo negociando um
  volume grande de beneficiários, o piso de R$ 120,00 por sessão é o mínimo aceitável.
  Pedido de valor abaixo de R$ 120,00 não se resolve sozinho: volta para a Mallu.

## O gate: por que nenhum destes números sai sozinho

Vale a mesma lógica de `automacoes/CLAUDE.md` (o gate de aprovação é lei do ecossistema)
aplicada a preço:

1. **Cotar dentro da régua acima não precisa de aprovação prévia**: os cinco valores já
   são a decisão dela. Usar o número certo, para o serviço certo, na unidade certa, está
   liberado.
2. **Qualquer coisa fora da régua (Treinamento, Diagnóstico, Programa Contínuo, pacote
   fora do padrão, desconto adicional) passa pela Mallu antes de ir para o lead.** Nunca
   estimar por analogia e mandar. O caminho documentado disso são as duas notas de caso
   em `automacoes/prospeccao-email/respostas/` (`mantena-margem-e-precificacao.md` e
   `mantena-calculo-equipes.md`): mostram como ela mesma fecha um orçamento sob medida,
   discutindo margem, custo de campo e supervisão técnica com CRP antes de decidir um
   número, e não é processo que um agente reproduz sozinho.
3. **Nunca fechar preço final com o lead sem o gate dela.** O agente pode calcular,
   redigir a proposta com os números certos e levar para ela revisar; quem confirma o
   valor ao cliente é sempre a Mallu, ou alguém autorizado por ela naquele envio.
4. **Nunca descontar abaixo do que está registrado sem decisão escrita dela**, nem no
   piso da Psicoterapia Individual, nem no valor de pacote da Roda de Equipe. Pedido de
   desconto maior é motivo para levar a decisão a ela, não para negociar sozinho.

## O que esta skill nunca faz

- Nunca inventa um sexto serviço ou uma sexta unidade de cobrança que não esteja na
  tabela.
- Nunca usa os valores históricos específicos de um caso (por exemplo, os R$ 1.000 a
  R$ 1.200 por equipe/mês ou os R$ 8.000 e R$ 20 mil discutidos para Mantena nas notas
  fonte) como se fossem a régua geral: aqueles números foram uma negociação de caso único,
  com margem calculada para aquele contrato, e já foram substituídos por esta régua para
  o que ela cobre (Roda de Equipe).
- Nunca calcula o número de equipes de um município dividindo o total de pessoas por 7
  (tamanho de eSF no papel): usa o tamanho real de grupo operativo, 10 a 12 pessoas.
- Nunca corta o piso da Psicoterapia Individual para fechar um volume maior de
  beneficiários.
- Nunca confirma preço final a um lead sem o gate da Mallu.

## Racionalizações que sinalizam desvio

| Pensamento | O que está acontecendo |
|---|---|
| "É só um pacote um pouco diferente, arredondo o valor por analogia" | Fora da régua é orçamento caso a caso com a Mallu, nunca estimativa por analogia. |
| "O lead quer desconto, mas é um cliente grande, deve valer a pena" | Desconto abaixo do registrado exige decisão escrita dela, tamanho do cliente não decide sozinho. |
| "Já calculei os grupos, posso mandar a proposta direto" | Calcular e redigir está liberado; confirmar o valor final ao lead é sempre o gate dela. |
| "Uso 7 pessoas por equipe, é o tamanho oficial da eSF" | O tamanho que importa é o do grupo operativo (10 a 12), não o do quadro no papel. |
| "Baixo a psicoterapia pra R$ 100 porque são muitos beneficiários" | O piso de R$ 120,00 é fixo; volume não é motivo pra furar o piso. |

## Onde isso serve

Em `email-prospeccao` e `fase2-aquecimento` sempre que a conversa chegar perto de preço;
em qualquer proposta comercial, pitch ou orçamento escrito para prefeitura, secretaria,
associação, cooperativa, instituto ou empresa; e em qualquer resposta de lead que pergunte
"quanto custa".
