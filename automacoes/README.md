# Automações PAAPS

Esta pasta guarda a **orquestração** das automações do negócio: a lógica dos fluxos, os
prompts, os moldes de texto e as configurações. Cada frente tem uma subpasta própria.

O que NUNCA entra aqui:

- Chaves, senhas e tokens reais. Eles moram no arquivo `.env` local (proibido de subir
  pelo `.gitignore`). Este repositório só guarda o `.env.example`, que lista os nomes
  das chaves com valores falsos.
- Dados pessoais: listas de leads, e-mails de servidores, respostas de formulário. Isso
  vive no CRM ou em planilha privada. O repo guarda a receita, nunca os dados das
  pessoas.

## Ferramentas

- **Claude Code**: o **cérebro de personalização** da prospecção fria. Em sessão, faz a
  pesquisa individual de cada lead (gancho local honesto), escreve o e-mail a partir do
  molde-âncora Carta-Mallu na voz PAAPS e dá a nota 0 a 100. É a fonte da qualidade
  personalizada; não é serviço que roda sozinho, personaliza quando a fundadora abre a
  sessão.
- **n8n**: o **orquestrador da parte mecânica**. Recebe os e-mails já personalizados,
  dispara via Resend com cadência e warm-up, e recebe de volta os webhooks (entregue,
  aberto, respondido) para atualizar o CRM e avisar a fundadora quando um lead responde.
  Cada fluxo é exportado como um arquivo JSON e commitado na subpasta da frente
  correspondente. Antes de commitar, conferir que o JSON saiu sem credenciais (o n8n
  separa credenciais do fluxo por padrão, mas a conferência é obrigatória).
- **CodeGraph** (github.com/colbymchenry/codegraph): grafo de código local e
  pré-indexado (SQLite), instalado em 14/07. Dá ao Claude Code (e a outros agentes) um
  mapa do repositório via MCP em vez de ler arquivo por arquivo. 100%
  local, sem chave de API. Em 14/07 todo o código do ecossistema foi consolidado na pasta
  `codigo/` (fora dela ficam conteúdo, briefings e assets de marca), e o CodeGraph indexa
  só essa pasta: `codegraph install` e depois `codegraph init codigo`. O servidor MCP já
  está apontado para `codigo/` no `.mcp.json` da raiz (`serve --mcp --path codigo`). Ver
  o CLAUDE.md da raiz.
- **Agentes Claude** (`.claude/agents/`): o cérebro de conteúdo, já construído.
- **Windsor AI**: já em uso no dashboard; tem escrita em Meta, Google, LinkedIn e TikTok
  Ads, então parte da frente 1 pode nem precisar de ferramenta nova.
- **Site**: Next.js + Vercel + shadcn (stack em adoção). O formulário de lead da frente 4
  nasce aqui e conversa com o n8n.

## CRM já existe no Notion

O funil comercial não começa do zero: a base **Leads & Clientes** no Notion
(`https://app.notion.com/p/22244cb52e008124b5d6ce15f650eced`) já modela 9 etapas de funil,
status, personas, ofertas e as bases Leads, Clientes, Propostas e Lista de Contatos. As
automações alimentam e leem esse CRM; não o substituem.

## As 5 frentes

| Pasta | Frente | Status |
|---|---|---|
| `trafego-pago/` | Campanhas em LinkedIn, Google e Meta Ads | a construir |
| `conteudo-pipeline/` | Carrosséis, roteiros de reels, vídeos de 40s (por agentes) | agentes já existem; orquestração a construir |
| `crescimento-instagram/` | Ganhar seguidores e afunilar para a ECOA | a construir |
| `funil-leads/` | Formulário de pesquisa no site ligado à captação | a construir |
| `prospeccao-email/` | E-mails personalizados para prefeituras | a construir |

Cada subpasta tem um `README.md` explicando o que precisa existir e o cuidado principal.
