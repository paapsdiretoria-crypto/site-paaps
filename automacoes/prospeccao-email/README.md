# Frente 5: Prospecção fria por e-mail

E-mails personalizados para prefeituras do Brasil inteiro.

## Estrutura desta pasta

- `icp/` : o perfil ideal de cliente (prefeituras, secretarias, personas Cláudia Martins
  e RH Genuíno) e os critérios de qualificação. Sem dados reais de leads.
- `moldes/` : os moldes de e-mail com lacunas, tipo `{cidade}`, `{nome_da_secretaria}`,
  `{nome_do_gestor}`. Contém o placeholder da Carta-Mallu (molde-âncora).
- `hermes/` : o papel do Hermes como personalizador, o prompt de personalização e a
  rubrica de score 0 a 100.
- `fluxos/` : o JSON do n8n que preenche as lacunas e envia, sem credenciais.
- `cadencia.md` : quantos e-mails por dia, intervalo entre eles, warm-up de volume,
  quando parar a sequência, texto de descadastro.
- `metricas.md` : o que o dashboard de controle acompanha e de onde vêm os números.

> Os arquivos das subpastas são rascunhos de trabalho, a co-construir com a fundadora.

## Onde ficam os dados

A lista de prefeituras com nomes e e-mails de servidores é dado pessoal sob LGPD: fica em
planilha privada, nunca no repositório. O repo guarda só os moldes e os fluxos.

## Remetente decidido: relacionamento@paaps.com.br

E os moldes de e-mail saem da página do Notion **MENSAGENS DE PROSPECÇÃO**
(`https://app.notion.com/p/33c44cb52e00807185c6e7b3e7da5577`), já ligada ao CRM. A
Carta-Mallu (TCC PUC-Minas) é o molde-âncora, usada sempre com indicação nomeada, nunca
massificada.

## Cuidados grandes

1. **Autenticação de domínio (obrigatória antes do primeiro envio).** SPF, DKIM e DMARC
   são três selos técnicos que provam ao Gmail que o e-mail é seu mesmo. Configurados uma
   vez no painel do domínio paaps.com.br. Sem eles, mesmo e-mail bom cai em spam.
2. **Domínio principal está OK aqui, por causa da estratégia.** O CRM deixa explícito:
   este funil não é disparo em massa, é originação qualificada, poucas conversas, muitas
   por indicação. Volume baixo e altamente personalizado protege a reputação do domínio,
   então usar relacionamento@paaps.com.br é seguro. Se um dia o volume crescer para
   centenas de e-mails frios por dia, aí sim vale um subdomínio irmão; hoje não precisa.
3. **Link de descadastro** em todo envio, e volume subindo devagar no começo.

Status: a construir. Pendente: escolher a ferramenta de disparo (Gmail via API, ou um
serviço dedicado tipo Resend/Brevo) quando formos montar o fluxo.
