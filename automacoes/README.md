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

- **n8n**: plataforma de automação de fluxos (a principal). Cada fluxo é exportado como
  um arquivo JSON e commitado na subpasta da frente correspondente. Antes de commitar,
  conferir que o JSON saiu sem credenciais (o n8n separa credenciais do fluxo por
  padrão, mas a conferência é obrigatória).
- **Hermes Agent** (Nous Research): instalado, ainda sem ativação nem tarefa definida.
  OpenClaw foi descartado. Antes de ativar o Hermes, definir o trabalho dele (candidato:
  personalização dos e-mails da frente 5). O padrão de segredos acima vale para ele.
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
