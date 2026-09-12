---
setor: 1-fundadora
tipo: perfil
resumo: A campanha de e-mail da pesquisa de TCC da Mallu na rede socioassistencial de BH, separada de propósito do funil comercial da PAAPS
status: vivo
atualizado: 2026-09-12
---

# Pesquisa de TCC na rede socioassistencial de BH

Fontes (ficam em `automacoes/pesquisa-tcc-bh/`, fora do cofre Obsidian): `PLANO.md`,
`carta-unidades.md`, `carta-psb-regional-noroeste.md`, `carta-deac.md`.

**Campanha da pesquisa acadêmica da Mallu (TCC em Psicologia, PUC Minas), não da
PAAPS.** Usa a mesma infraestrutura de disparo (domínio, Titan, n8n) da prospecção
fria, mas com workflow, assinatura e regras de registro completamente separados, de
propósito.

## Por que não pode entrar no fluxo comercial

O disparo da prospecção grava Atividade `PROSPECÇÃO`, move o lead pra
`1. Cadastrado` e arma cooldown de 60 dias. Um CRAS não é lead comercial, é campo de
pesquisa: se entrasse por aquele fluxo, viraria estatística do funil B2B/B2G da PAAPS
por engano. Por isso a campanha tem workflow próprio no n8n, sem nenhum nó de Notion,
lista de destinatários num arquivo local (`unidades-bh.json`, fora do git por conter
dado de unidade pública), e registro só em log de execução, nunca no CRM.

## A assinatura não carrega a marca PAAPS

Decisão de 27/08/2026: o cartão anterior citava a empresa em oito lugares antes da
primeira frase (logo, domínio, redes, "Saúde mental coletiva", "CEO Founder"). Um
convite de pesquisa assinado assim lê como abordagem comercial disfarçada, o que
prejudica tanto a pesquisa quanto a PAAPS. Ficou um cartão acadêmico limpo, cargo
`PESQUISADORA · PSICOLOGIA PUC MINAS`. O único traço que resta da PAAPS é o domínio do
e-mail remetente, que é o login que já existe.

## O método de escrita e verificação

- **Texto:** registro acadêmico e formal, primeira pessoa, estrutura de convite de
  pesquisa (quem escreve e orienta, pergunta da pesquisa, o que se pede e quanto tempo
  consome, cuidados éticos com TCLE e CAAE, o que a unidade recebe de volta,
  um pedido único com prazo). Sem linguagem de venda.
- **Cada unidade recebe e-mail individual, nunca cópia oculta em lote:** 40 endereços
  em Cco é o padrão que qualquer filtro institucional reconhece como spam.
- **Verificação por dispositivo antes de disparar:** simular a leitura de cada
  destinatário, procurando frase que denuncie lote ou pedido fora do perfil daquela
  unidade. Achou incongruência real numa diretoria de alta complexidade (DEAC), que não
  faz cuidado direto de linha de frente: o convite original não fazia sentido pra ela e
  foi reescrito como pedido de indicação de caminho, não de participação direta.
- **Trava de segurança no montador:** qualquer lacuna sobrando em colchetes
  (`[ASSIM]`) impede o disparo da leva inteira. Endurecida depois de um bug real
  (só reconhecia colchete em caixa alta, um placeholder minúsculo escaparia).
- **Confirmação humana em camadas, não uma vez só:** mesmo depois de aprovar o envio,
  a Mallu pediu pra reler tudo de novo antes de ativar de fato, e o workflow foi
  desativado por precaução até a releitura confirmar.

## Estado em 28/08/2026 (última atualização das fontes)

Cinco unidades saíram no workflow `Pesquisa TCC - Leva 2026-08-28 (07:20)`: CRAS
Pedreira Prado Lopes, CRAS Vila Califórnia, CREAS Noroeste, Proteção Social Básica
Regional Noroeste e DEAC, com 8 minutos de intervalo entre cada envio. Cópia de tudo
que sai é gravada em Enviados no Titan por `codigo/prospeccao-enviados/` via IMAP
APPEND (nunca por SMTP, estruturalmente não duplica), mas ficou **bloqueada por uma
permissão do macOS (Acesso Total ao Disco)** que só a Mallu pode resolver.

A Hospedagem Social Além Paraíba ficou de fora: os dois e-mails que a Mallu passou
eram de uma secretaria municipal homônima a 300 km de BH, não da unidade certa, e a
PBH não publica e-mail de Hospedagem Social. Segue marcada `pular: true` em
`unidades-bh.json`, aguardando indicação de contato certo.
