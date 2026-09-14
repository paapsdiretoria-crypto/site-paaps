---
tags: [metodo, email, automacao]
origem: "Calibrado pela Mallu em 12/08/2026 e 14/09/2026"
resumo: "E-mail em nome da PAAPS sai sempre por relacionamento@paaps.com.br via Titan, nunca por Gmail, e a ferramenta certa muda por caso"
serve-para: [prospeccao-e-vendas, paaps-ai-first]
status: vivo
atualizado: 2026-09-14
---

# Envio de e-mail institucional

Todo e-mail em nome da PAAPS sai por **relacionamento@paaps.com.br**, pelo Titan. A caixa
**paapsdiretoria@gmail.com** (conectada por MCP) só recebe: é o destino das notificações do
CRM e das respostas que caem fora do fluxo automático, nunca um canal de envio. Nunca
compor ou responder um e-mail oficial da PAAPS a partir dela.

## Qual ferramenta usar, por caso

| Situação | Ferramenta |
|---|---|
| Prospecção fria, primeiro toque, dentro do lote da semana | Fluxo automático já existente: cartas em `(EMP) Cartas de Prospecção` com Estado="Aprovada", disparadas pelo workflow n8n `Prospecção - Disparo diário`, de segunda a sexta |
| Resposta a alguém que já escreveu (thread existe na INBOX do Titan) | `automacoes/prospeccao-email/responder-lead.py`. Apesar do nome, é genérico: qualquer `--para/--assunto/--corpo`. Acha o Message-ID/References da mensagem original por IMAP (mantém a thread do lado de quem recebe), envia por SMTP do Titan e **grava a cópia na pasta Enviados por IMAP**, porque SMTP puro nunca deixa cópia lá sozinho. Roda sem `--enviar` primeiro (só gera prévia), dispara de verdade só com `--enviar`, e só depois do "OK" explícito da Mallu para o texto |
| E-mail avulso 100% novo, sem thread prévia (ex: primeiro contato institucional fora da prospecção) | Workflow n8n `Prospecção - Disparo (SMTP)` (id `nRq9R176vuXJ0aw0`), webhook `POST /webhook/prospeccao-disparo`, corpo `{"to","subject","html","from?"}`. Não grava cópia em Enviados sozinho |

## O que nunca fazer

- **Nunca dizer "não consigo enviar" ou "só te dou o texto pronto".** As duas ferramentas
  acima já existem prontas. Checar isso antes de responder sobre capacidade.
- **Nunca construir um workflow n8n novo e descartável para um envio avulso.** Aconteceu
  em 14/09/2026 (resposta a Luiz Henrique Pádua, Yunus): sessão criou workflow do zero em
  vez de usar as ferramentas da tabela acima. O e-mail saiu de verdade (SMTP aceitou), mas
  sem thread e sem nenhum registro em lugar nenhum, porque o workflow não tinha o passo de
  gravar cópia. Pior ainda: o workflow foi apagado logo depois de disparar, o que apagou
  junto o log de execução, a única evidência técnica que sobrava. Nunca apagar workflow ou
  execução antes de confirmar e registrar o resultado.
- **Nunca inventar destinatário ou assunto sem confirmar a thread certa** antes de disparar
  uma resposta.

## Onde isso serve

Toda vez que a Mallu pedir para mandar, responder ou "disparar" um e-mail em nome da
PAAPS, por fora ou dentro do fluxo de prospecção fria. Detalhe técnico completo (estado do
webhook, credencial pendente, decisões datadas): `automacoes/CLAUDE.md`, tabela de
decisões. Ver também [[metodologia-paaps]] para o método de campo em geral.
