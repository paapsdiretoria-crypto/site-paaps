---
tags: [projetos, runbook]
origem: "Trabalho"
resumo: "Como o sistema de prospecção fria opera: esteira de status, dedup de 60 dias, cadência e gate de aprovação"
serve-para: ["[[prospeccao-e-vendas]]"]
status: vivo
atualizado: 2026-09-12
aliases: [prospecção, carta fria, funil, cooldown de 60 dias]
---

# Prospecção fria: como o sistema opera

Fontes (ficam em `automacoes/prospeccao-email/`, fora do cofre Obsidian):
`regras-prospeccao.md`, `cadencia.md`, `metricas.md`, `avisos-de-resposta.md`,
`setup-resend-dominio.md`.

Runbook operacional que o Claude Code lê ao receber o toque do n8n pra rodar a
prospecção fria de prefeituras e secretarias (funil B2B/B2G). Fonte única de verdade:
o CRM no Notion, nunca um arquivo do repo.

## A esteira de status do lead

`0. Alvo` (nunca contatado) → e-mail sai → `1. Cadastrado` (só recebe re-prospecção
depois de 60 dias, e nunca mais se respondeu) → respondeu → `Aquecimento` (vira
conversa humana) → depois de reunião com algo concreto → `2. Negociação` → fechou →
`3. Cliente`. `4. Perdido` fica fora da linha. A prospecção fria só age nas duas
primeiras etapas.

## O dedup sem mexer em schema

A base de Leads não tem campo de "último contato" e a fundadora decidiu não criar um.
Em vez disso, cada e-mail vira uma Atividade `PROSPECÇÃO` datada, ligada ao lead. Um
lead só é elegível se não tiver Atividade `PROSPECÇÃO` nos últimos 60 dias, mesmo que
tenha respondido e não avançado. O toque só é registrado na **saída de sucesso** do
envio, nunca antes: e-mail que falhou não marca cooldown.

## Meta e cadência

**15 e-mails por semana** (decisão de 15/07/2026, revista de uma proposta inicial de
100). O gargalo real é a atenção da Mallu no gate de aprovação, não a capacidade do
agente de escrever: a meta é o que ela consegue revisar bem. Cerca de 3 por dia útil,
distribuídos, nunca em rajada. Todo envio carrega link de descadastro, honrado de
imediato.

## O gate de aprovação, e como ele afrouxa

Bloqueante, nunca aviso: nenhum e-mail vai pro n8n sem a Mallu ver o lead, o gancho
com fonte, o texto inteiro e a nota de 0 a 100. Ela aprova, corrige ou recusa um a um;
recusado volta ao pool sem gastar cooldown. Toda correção dela vira log de
aprendizado. O gate começa revisando 100% e só afrouxa (pra amostragem, depois
exceção) por decisão explícita dela, nunca por conta do agente.

## Como o sistema sabe que alguém respondeu

Não existe webhook de "respondido" em nenhum serviço de e-mail (Resend, Titan e afins
avisam entrega/abertura/erro, não resposta). Detectar resposta é sempre ler a caixa:
um workflow n8n vigia `relacionamento@paaps.com.br` por IMAP e separa três casos:
resposta de gente (atualiza CRM + avisa), erro de entrega (avisa sem tocar no CRM),
resposta automática (ignora em silêncio). O aviso chega por dois caminhos
independentes: um e-mail com assunto `RESPOSTA:` etiquetado no Gmail (avisa o celular
mesmo com o Mac fechado) e um serviço local no Mac que consulta o CRM a cada 5
minutos.

## Infraestrutura de envio

Resend dispara a partir de `relacionamento@paaps.com.br`; a autenticação do domínio
(SPF, DKIM, DMARC) é feita direto no painel da Cloudflare, que também hospeda o DNS.
Como o domínio não tinha caixa de entrada própria, as respostas são roteadas pelo
Cloudflare Email Routing pra `paapsdiretoria@gmail.com`, que a Mallu já abre todo dia.

## Métricas planejadas (ainda não fechadas)

Funil proposto: enviados, entregues, abertos, respondidos, reuniões marcadas,
descadastros. Fluxo de dado: webhook do disparador → n8n → CRM Notion, que
permanece a fonte única mesmo para o dashboard de controle. Pendente: confirmar
exatamente quais eventos de webhook o Resend expõe, e o desenho do dashboard.

## Status em 12/09/2026

Regras fechadas desde 14/07/2026. Por memória de sessão mais recente, o disparo via
n8n já funciona; falta ligar porteiro, carta-fria, gate e escrivão no fluxo
automático (ver `Segundo Cérebro/Mapa/mapa-do-ecossistema.md`, e o histórico completo de
prospecção na memória de sessão do Claude, fora deste cofre).

## Onde isso serve

Em [[prospeccao-e-vendas]].
