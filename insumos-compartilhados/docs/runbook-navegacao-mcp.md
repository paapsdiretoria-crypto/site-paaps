# Runbook — Navegação real no navegador (MCP)

> Criado em 06/07/2026 para nunca mais repetir o dia 16/06 (8 horas de tentativa e erro
> para o Playwright MCP navegar). Procedimento validado + erros conhecidos e solução.

## Qual ferramenta usar

| Situação | Ferramenta |
|---|---|
| Navegar, clicar, ler página, tirar screenshot em site público | **Claude in Chrome** (MCP oficial `claude-in-chrome`) — preferido, usa o Chrome já logado |
| Automação com o perfil logado (Instagram, Notion web) | Claude in Chrome, ou Playwright MCP em modo `--extension` |
| Análise rápida de texto de página que não bloqueia robôs | WebFetch — **nunca** para benchmark visual/UX (inventa defeitos falsos; regra na memória do projeto) |

## Playwright MCP — configuração que funciona

- Config no `.mcp.json` da raiz: `@playwright/mcp` com `--extension`.
- O token da extensão **não fica no .mcp.json** (repo é público). Ele vem da variável
  `PLAYWRIGHT_MCP_EXTENSION_TOKEN`, definida em `.claude/settings.local.json` → `env`.
- Se o token mudar (extensão reinstalada/corrompida): atualizar SÓ o
  `settings.local.json`, nunca o `.mcp.json`.
- Conflito conhecido: config global em `~/.claude.json` pode brigar com a do projeto e
  quebrar a navegação — checar lá primeiro (memória `project_playwright_mcp_config`).

## Erros conhecidos e o que fazer

| Erro | Causa | Solução |
|---|---|---|
| `Browser is already in use ... use --isolated` | Playwright tentando abrir o Chrome do perfil que já está aberto | Usar modo `--extension` (conecta ao Chrome aberto) OU fechar o Chrome antes. Não insistir: o erro não se resolve repetindo. |
| `TimeoutError: initializeServer: Timeout 180000ms` | Chrome não respondeu ao launch | Modo `--extension` com Chrome já aberto; conferir se a extensão está ativa (ícone na barra). |
| `Target page, context or browser has been closed` | Usuária fechou aba/Chrome no meio | Reabrir a aba e repetir só o último passo. |
| Extensão "corrompida" / token inválido | Extensão reinstalada gera token novo | Pegar o token novo na extensão → atualizar `settings.local.json` → reiniciar o Claude Code. |
| MCP não aparece após mudar config | Config só carrega na inicialização | Reiniciar o Claude Code (Cmd+Q e reabrir). Uma vez, não em loop. |

## Regra de ouro

Se depois de **uma** reinicialização de Claude + Chrome o MCP ainda falhar, parar de
tentar variações e diagnosticar de verdade: ler o erro completo, checar `~/.claude.json`
global × `.mcp.json` do projeto, e registrar o achado neste runbook.
