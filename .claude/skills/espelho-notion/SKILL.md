---
name: espelho-notion
description: Sincroniza agentes, skills e hooks do repositório para as databases do Notion, com conteúdo COMPLETO (nunca resumo). Acione em "atualiza o Notion", "espelha o projeto no Notion", "sincroniza o banco de agentes/skills", ou após criar/alterar qualquer agente, skill ou hook.
---

# Espelho do Projeto no Notion — PAAPS

O Notion é a interface onde Mallu lê, aprova e altera manualmente os textos dos agentes
e skills. O espelho só tem valor se for **literal e completo**.

## Regra de ouro

**Transcrever o texto INTEGRAL de cada arquivo. Nunca resumir, nunca parafrasear,
nunca "sintetizar os pontos principais".** Se o arquivo tem 300 linhas, a página do
Notion tem as 300 linhas. (Regra criada após 3 sessões de retrabalho em jun/2026:
"Quem te pediu para fazer um resumo?")

## O que sincronizar

| Fonte no repo | Destino no Notion |
|---|---|
| `.claude/agents/*.md` | Banco de Agentes |
| `.claude/skills/*/SKILL.md` | Banco de Skills |
| Hooks em `.claude/settings.json` | Banco de Hooks |
| CLAUDE.md raiz (quando pedido) | Banco de Prompts — Cérebro da I.A. |

Tudo fica sob a página de operações `SITE INSTITUCIONAL` (URL no CLAUDE.md raiz).
Atenção: já houve confusão entre "Banco de Hooks" e "Banco de Prompts" com nome de
exibição duplicado — confirmar pelo conteúdo da database, não só pelo título.

## Processo

1. Buscar as databases no Notion (via MCP) e listar o que já existe.
2. Comparar com os arquivos do repo: novos, alterados, deletados.
3. Para cada item: criar ou atualizar a página com o conteúdo integral do arquivo
   (frontmatter incluído, em bloco de código, seguido do corpo formatado).
4. Marcar itens deletados do repo como "arquivado" no Notion (não apagar).
5. Relatar ao final: quantos criados, atualizados, arquivados — com links.

## Quando rodar

- Sempre que um agente, skill ou hook for criado ou alterado (oferecer proativamente).
- Sob demanda, quando Mallu pedir.
