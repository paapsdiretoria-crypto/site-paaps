# Frente 4: Funil de leads

Formulário de pesquisa no site para captar leads, ligado ao funil de captação. Sugestão
de começar por esta frente: é a mais simples e destrava as frentes 1 e 5.

## O que precisa existir

- No site (`site/paaps-site/`): o HTML do formulário de pesquisa. Hoje a página de
  contato só tem links de WhatsApp; o formulário ainda vai ser construído.
- Aqui em `funil-leads/`:
  - `fluxos/` : o JSON do n8n que recebe cada resposta do formulário e grava direto no
    Notion, na base **Leads** (id `22244cb52e008142b15bf53c15ae38c0`), como novo card no
    status **1. Cadastrado** (a primeira etapa do funil de 9 etapas que já existe no CRM).
  - `mapa-do-funil.md` : o que acontece depois que o lead chega (mensagem de boas-vindas,
    encaminhamento, etiqueta).

## Cuidado principal (absoluto)

As RESPOSTAS do formulário (nomes, e-mails, cidades) nunca, em hipótese alguma, entram no
repositório. Elas vivem no CRM ou na planilha privada. O repo guarda o formulário vazio,
jamais o formulário respondido.

O formulário precisa de um texto de consentimento (LGPD): a pessoa autoriza o uso dos
dados dela antes de enviar.

## Destino decidido: Notion (fonte única de verdade)

Os leads moram no CRM que já existe no Notion, na página **Leads & Clientes**
(`https://app.notion.com/p/22244cb52e008124b5d6ce15f650eced`), base **Leads**. Esse CRM
já modela todo o processo comercial: 9 etapas de funil, status EMP (1. Cadastrado ate
5. Finalizado), personas, ofertas. O formulário do site apenas alimenta a porta de
entrada desse funil.

**Por que Notion, e não Supabase, por enquanto.** O CRM já está construído e é operado à
mão pela Mallu no Notion. Manter uma única fonte de verdade evita o problema clássico de
duas bases que discordam entre si. Supabase entra só quando o app do site (Next.js)
precisar de um banco de verdade para funções que o Notion não faz bem (consultas
rápidas, login de usuário, grande volume). Regra: uma fonte de verdade só, até algo
concreto exigir a segunda. Enquanto isso, nada de espelho Supabase para Notion.

Status: a construir. O schema exato da base Leads será lido no momento de montar o
formulário, para os campos baterem.
