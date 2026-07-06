# Melhorias no Setup do Claude Code — Diagnóstico

> Gerado em 2026-07-06 a partir da análise de ~60 transcrições de sessão (06/jun–06/jul),
> em todos os diretórios de trabalho (SITE PAAPS, Mallu-Pessoal, Projeto Minerva,
> Portfólio Lúcia, hyperframes, home), mais auditoria completa do setup (pastas, hooks,
> skills, agentes, git, segredos, memória, MCP).
> Ordenado por impacto. Cada grupo tem: evidência, decisão (correção / skill nova /
> automação / nada) e status de execução.

---

## 1. Skills próprias nunca carregam — formato errado (CORREÇÃO) ✅ executado

**O problema de maior alavancagem de todo o diagnóstico.** As 14 skills PAAPS em
`.claude/skills/` estão como arquivos soltos (`copy-carrossel.md`, `meta-architect.md`…),
mas o Claude Code só carrega skills no formato **pasta + `SKILL.md`**
(`copy-carrossel/SKILL.md`). Resultado: só as skills symlink (hyperframes etc.), que já
vêm em pasta, funcionam. Todas as suas skills autorais falham com "Unknown skill".

**Evidência:** ~14 erros `Unknown skill` ao longo do mês (legendas-otimizadas 3×,
meta-architect 2×, find-skills 2×, frontend-design, notion-knowledge-capture,
notion-research-documentation, evita-padrao-ia…), e sua pergunta literal em 12/jun:
*"toda vez que eu chamo as skills, está dando erro - porque?"* — a causa nunca foi
corrigida, só contornada (o Claude lia o arquivo manualmente e imitava a skill).

**Ação:** converter cada `nome.md` → `nome/SKILL.md` (o frontmatter já está correto);
mesma coisa para `site/.claude/skills/frontend-design.md`.

## 2. Hook de auto-push perde trabalho silenciosamente (CORREÇÃO) ✅ executado

O hook usa `git diff --quiet HEAD` para detectar mudanças — mas `git diff` **não enxerga
arquivos novos (untracked)**. Se a sessão só criou arquivos novos (caso comum: novo
carrossel, novo log, nova skill), o hook conclui "nada mudou" e não commita nem faz push.
O CLAUDE.md promete "auto-push ativo", então ninguém confere — trabalho fica para trás.

**Evidência:** `sessoes/sessao-2026-07-06.md` criado pelo hook às 13:49 de hoje e nunca
commitado. Problema secundário: o log de sessão registra `git status --short` cru,
que se autopolui (registra o próprio log) e duplica blocos idênticos.

**Ação:** trocar a detecção por `git status --porcelain` (vê untracked); mensagem de
commit passa a listar as áreas alteradas em vez do genérico "auto: atualização do site"
(84% do histórico atual é essa mensagem, que já escondeu até uma remoção de 22 arquivos).
Log de sessão passa a excluir a própria pasta `sessoes/` do status.

## 3. Segredos expostos em repositório PÚBLICO (CORREÇÃO de segurança) ⚠️ parcial

O repo `paapsdiretoria-crypto/site-paaps` é público. Encontrado:

1. **Token da extensão Playwright commitado** em `.mcp.json` (raiz) —
   `PLAYWRIGHT_MCP_EXTENSION_TOKEN` em texto claro. ✅ removido do arquivo (agora lê de
   variável de ambiente definida em `.claude/settings.local.json`, que não é commitado).
   ➜ **Pendente seu:** gerar token novo na extensão (o antigo está publicado no histórico).
2. **PDF de 59 MB no histórico do repo** (`02 CARROSSEIS - NOVA ESTÉTICA PAAPS.pdf`,
   commitado 08/jun, deletado 03/jul, mas segue no histórico — o `.git` pesa 86 MB).
   ➜ **Pendente decisão sua:** limpar exige reescrever o histórico e force-push
   (`git filter-repo`) — reversível só com backup; não executei sem confirmação.
3. **Chave Windsor dentro da allowlist** de `.claude/settings.local.json` (entrada de
   permissão `curl ... api_key=9dee...`). Arquivo é local (não commitado), mas é chave em
   claro desnecessária. ✅ entrada removida.
4. **Chaves em texto puro no `~/.claude/settings.json` global** (Notion, Pluggy) e o
   token Notion colado no chat em 15/jun. Local-only, risco menor. ➜ recomendação:
   rotacionar a chave Notion quando puder (ficou registrada em transcrição).

## 4. Prompts-quadro colados repetidamente → SKILLS NOVAS ✅ executado

Você cola os mesmos frameworks de prompt gigantes, de novo e de novo, entre sessões:

- **Simulação de experiência do usuário** (3 personas × 12 sites → Notion): colado
  **5 vezes** em 4 sessões (15–16/jun).
- **Benchmark visual comparativo de UI/UX**: colado 3× (15/jun, em 2 sessões + home).
- **Análise de referências premiadas / motion design**: colado 2×.
- **Auditoria de segurança antes de instalar skill externa**: pedido em toda instalação
  (*"veja se essa skill é segura"* — 4 sessões distintas).

**Ação:** viraram skills invocáveis com o texto que você já usa:
`simulacao-ux`, `benchmark-visual`, `instala-skill-segura`. Em vez de recolar 40 linhas,
você digita `/simulacao-ux yunusns.com`.

## 5. Espelho do projeto no Notion é tarefa manual recorrente (SKILL NOVA) ✅ executado

Em 3 sessões (7, 8 e 9/jun) você pediu — com frustração crescente — que agentes, skills
e hooks fossem espelhados **COMPLETOS** no Notion ("Banco de Prompts — Cérebro da I.A."),
porque *"é lá a interface mais amigável que posso ler e aprovar ou alterar manualmente"*.
Na 3ª sessão a regra ainda não estava sendo cumprida (*"Quem te pediu para fazer um
resumo?"*). Depois disso, você ainda precisou lembrar manualmente (*"lembre-se de
atualizar no banco... no notion"*).

**Ação:** skill `espelho-notion` que sincroniza o conteúdo integral (nunca resumo) de
`.claude/agents/`, `.claude/skills/` e hooks para as databases do Notion, sob demanda.
A URL da página de operações (SITE INSTITUCIONAL) agora está registrada no CLAUDE.md
para nenhuma sessão precisar que você cole o link de novo.

## 6. Documentação divergente da realidade (CORREÇÃO) ✅ executado

O CLAUDE.md raiz — lido por toda sessão — descreve um repo que não existe mais:

- Documenta `conteudo/agentes/` (não existe; agentes estão em `.claude/agents/`).
- Não documenta: `conteudo/ciclos/`, `conteudo/eventos/`, `conteudo/briefings/`,
  `hyperframes/`, `.agents/`, `site/Sites - referências e analise/`.
- Skill `design-parceiro` existe mas está fora da tabela de skills.
- `conteudo/CLAUDE.md` referencia 2× a skill `/mapa-de-contexto` — que você mandou
  **deletar** em 07/jun ("só delete a skill"); a referência ficou.
- `site/CLAUDE.md` define PAAPS com posicionamento antigo ("Programa de Aceleração
  Ativa de Projetos Sociais — coletivo de psicólogas") contradizendo o raiz (GovTech).
- `MEMORY.md` (memória do Claude) não indexa `project_workflow_agentes_v2.md`.

**Ação:** tudo corrigido. Doc divergente é pior que doc ausente: o Claude obedece o que lê.

## 7. Higiene do git (CORREÇÃO) ✅ executado

- `.agents/` está no `.gitignore` mas **595 arquivos continuam rastreados** (gitignore
  não remove o que já foi commitado). ✅ removidos do índice (`git rm --cached`).
- `.playwright-mcp/` na raiz: 680 KB de lixo de debug de 16/jun. ✅ apagado.
- `workflow-paaps.html` solto na raiz. ✅ movido para `conteudo/arquitetura/`.
- Imagens de 2–5 MB rastreadas (`site/paaps-site/imagens/*.jpg`) e ~14 screenshots de
  benchmark commitados. ➜ **nada por agora** (funcionam no site publicado); candidato
  futuro: otimizar/converter para WebP.

## 8. Trabalho PAAPS fragmentado em 6 diretórios (ORGANIZAÇÃO) ⚠️ documentado

Sessões PAAPS aconteceram em raízes sem contexto nenhum (sem CLAUDE.md, sem skills, sem
hooks de auto-push — nada é commitado lá):

- `~/Documents/Claude Projects/Projeto Minerva` — pitch/posicionamento PAAPS (22 e 26/jun).
- `conteudo/dashboard/js/Claude Portfólio Lucia` — um site inteiro construído **dentro
  da pasta js do dashboard** (13/jun).
- `~/` (home) — sessões aplicando skills PAAPS que falham lá (a skill é do projeto).
- `~/Desktop/Mallu Pessoal` — finanças (ok ser separado, mas sem memória: *"já é a 20ª
  vez que eu reinicio o claude"*).
- `SITE PAAPS/hyperframes` aberto como raiz própria — perde o CLAUDE.md do pai.

**Custo real:** nessas sessões o Claude não sabe quem é a PAAPS, não tem proibições de
voz, não tem auto-push. É onde apareceram as maiores frustrações.
**Ação:** regra nova no CLAUDE.md raiz ("abra sempre o Claude na raiz SITE PAAPS; para
projetos novos, crie subpasta aqui"). ➜ **Pendente seu (2 min no Finder):** mover
`Projeto Minerva` para dentro de `SITE PAAPS/` e a pasta `Claude Portfólio Lucia` para
fora do `dashboard/js/` (sugestão: `SITE PAAPS/projetos-externos/portfolio-lucia/`).

## 9. Saga MCP de navegação — runbook para não repetir (CORREÇÃO) ✅ executado

O dia 16/jun inteiro (10 sessões, ~8 h, 8 interrupções, 4 mensagens em CAPS) foi
consumido fazendo o Playwright MCP navegar: erro "Browser is already in use" ≥14×,
timeouts de 180 s, token da extensão colado manualmente 3×, ciclo fechar-Chrome/reabrir-
Claude dezenas de vezes. A solução final (modo `--extension` + token) só sobreviveu
porque você ditou o registro no log à mão.

**Ação:** runbook `insumos-compartilhados/docs/runbook-navegacao-mcp.md` com o
procedimento que funciona, os erros conhecidos e o que fazer em cada um; token agora vem
de variável de ambiente (item 3). Obs.: hoje também existe o MCP "Claude in Chrome"
oficial — o runbook indica quando usar cada um.

## 10. Logs de sessão pobres para handoff (AUTOMAÇÃO leve) ✅ executado

Você usa o log de `sessoes/` como memória entre sessões ("leia o log da última sessão" —
4 sessões só no dia 16), mas o hook grava apenas timestamp + `git status`, que não diz
**o que** foi feito nem **por quê**. As retomadas dependem de você recolar contexto.

**Ação:** hook melhorado (item 2) + instrução no CLAUDE.md: ao encerrar tarefas
relevantes, registrar decisão/estado em `sessoes/` (1–3 linhas) e na memória persistente
do Claude — que já existe e é o mecanismo correto para isso (o log de 16/jun manual
provou o valor).

## 11. Dashboard publicado no Pages está quebrado (DECISÃO PENDENTE) ⚠️

O workflow `deploy-dashboard.yml` publica `conteudo/dashboard/` no GitHub Pages, mas
`js/config.js` (com a chave Windsor) é ignorado — correto não publicar a chave, porém o
dashboard público carrega sem dados (404 no config.js). Você pediu em 12/jun um "link
sempre atualizado para colocar no Notion" — esse link hoje não funciona.

**Opções:** (a) proxy/serverless que esconde a chave; (b) workflow que gera JSON
estático com os dados a cada N horas e publica só os números; (c) aceitar que o
dashboard é local. Recomendo (b). **Não executei — precisa da sua escolha.**

## 12. Permissões locais acumuladas (NADA por agora)

`.claude/settings.local.json` tem ~150 entradas de allowlist hiperespecíficas, muitas de
paths mortos. Além da remoção da entrada com chave (item 3), não vale mexer: não causa
erro, só ruído. Candidato futuro: rodar `/fewer-permission-prompts` numa sessão calma.

---

## Pendências que ficaram com você (resumo)

1. **Rotacionar o token da extensão Playwright** (o antigo está público no GitHub) e,
   quando puder, a chave Notion.
2. **Decidir sobre a limpeza do histórico git** (PDF de 59 MB em repo público) — posso
   executar com `git filter-repo` + force-push quando autorizar.
3. **Mover 2 pastas no Finder** (Projeto Minerva → SITE PAAPS/; Portfólio Lúcia → fora
   do dashboard/js/). Depois me peça para atualizar as referências.
4. **Escolher a opção do dashboard público** (item 11).
5. Reiniciar o Claude Code após esta sessão, para as skills convertidas carregarem.
