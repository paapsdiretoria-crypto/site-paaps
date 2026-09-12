---
setor: 2-identidade
tipo: proibicao
resumo: Valor real de segredo ou dado pessoal nunca pode ser escrito em arquivo que vai pro git
status: vivo
atualizado: 2026-09-12
fontes: [CLAUDE.md, automacoes/.env.example]
---

# Segredo em arquivo commitado: proibido

**Nunca colar token, chave de API, senha, `client_secret` ou dado pessoal em nenhum
arquivo do repositório.** Vale para log de sessão, nota de handoff, README, código,
comentário e mensagem de commit.

## Onde cada coisa mora de verdade

- **Chave e token:** só no `.env`, que é ignorado pelo git. Modelo em
  `automacoes/.env.example`.
- **Dado de pessoa** (e-mail ou CPF de lead, de servidor, de participante): no CRM do
  Notion ou em planilha privada. Nunca no repo.

## Quando precisar registrar a configuração

Documentar a forma, mascarando o valor: `RESEND_API_KEY=[removido]`. A documentação
serve pra saber que a variável existe, não pra guardar o conteúdo dela.

## Quando o segredo precisa ser obtido

A skill `pede-segredo-a-mallu` monta um `.command` de dois cliques que grava direto no
`.env` e testa. **Eu nunca digito nem vejo o valor**, e ela nunca edita arquivo de
configuração na mão.

## Ligações

[[regra-de-workspace]] · [[hooks-e-auto-push]]
