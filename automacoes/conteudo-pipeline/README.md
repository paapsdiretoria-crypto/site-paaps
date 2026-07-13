# Frente 2: Pipeline de conteúdo

Produção de conteúdo PAAPS automatizada por uma equipe de agentes, orquestrada por um
dashboard único. Cobre: carrosséis (PAAPS e Mallu), roteiros de reels para gravar cara a
cara com a câmera, e vídeos de 40s com b-rolls da galeria do app Fotos do Mac (voz
gravada por cima).

## Esta é a frente mais madura

O que já existe (e fica onde está, não é movido para cá):

- Agentes em `.claude/agents/` : Radar, Sentinela, Tecelã, Narrador, carrossel, reels.
- Skills em `.claude/skills/` : copy-carrossel, legendas-otimizadas, edicao-reel-paaps,
  entre outras.
- Dashboard de analytics em `conteudo/dashboard/`.

## O que precisa existir aqui

- `orquestracao/` : o fluxo que liga os agentes ao dashboard único (o "maestro" que
  dispara Radar depois Sentinela depois Tecelã depois Narrador, e joga o resultado no
  painel). Pode ser um fluxo n8n (JSON) ou um agente orquestrador.
- `mapa-do-pipeline.md` : quem chama quem, em que ordem, e onde cada saída aparece.

## Cuidado principal

Os vídeos e as fotos da galeria do Mac nunca entram no repositório: são binários pesados
e as fotos já estão protegidas pelo `.gitignore`. O repo versiona a receita (prompts,
fluxos, roteiros), nunca o bolo (os arquivos de mídia).

Status: agentes prontos; orquestração a construir.
