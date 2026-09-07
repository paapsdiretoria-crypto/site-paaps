# Diagnóstico: por que a rotina semanal travou em 07/09/2026

Registro do que causou o travamento que motivou a reconstrução do prompt de disparo
(`prompt-disparo-semanal.md`, mesma pasta). Guardado aqui para não se repetir.

## Causa raiz

A sessão que rodou naquele dia **nunca teve o repositório do PAAPS clonado**. Sem repo, ela
não tinha acesso a nenhum dos arquivos que o disparo referencia: nem a seção 6.1 da skill
orquestradora, nem `insumos-compartilhados/`, nem os agentes (`tecela`, `buscador-fotos`,
`aplicador-visual` etc.), nem `render.sh`. O único arquivo de conteúdo do PAAPS que ela
conseguiu ler foi uma cópia sincronizada e desatualizada de
`paaps-orquestrador-conteudo/SKILL.md`, sem a seção 6.1, guardada fora do repositório em
`~/.claude/skills/synced/`.

A sessão foi honesta sobre isso: em vez de inventar o conteúdo dos arquivos que faltavam,
ela parou e documentou exatamente o que tinha e o que não tinha (ver os dois arquivos que a
Mallu enviou nesta conversa). Esse comportamento (nunca fabricar arquivo que não existiu na
sessão) é o correto e deve se manter.

## Correção estrutural

O prompt de disparo passou a viver versionado no repositório
(`automacoes/conteudo-pipeline/orquestracao/prompt-disparo-semanal.md`), não só dentro da
configuração da rotina agendada. Isso resolve dois problemas de uma vez:

1. **Auditável.** Qualquer pessoa (ou sessão) pode ler o prompt real sem depender de cópia
   sincronizada de skill, que pode ficar desatualizada.
2. **A pré-condição de repositório clonado agora é a primeira checagem do próprio prompt**
   (Parte 0), então uma sessão sem repo para no passo 1, não depois de já ter tentado
   trabalhar com metade dos insumos.

## O que a auditoria de 07/09/2026 encontrou de errado, além da causa raiz

Ao conferir o prompt antigo arquivo por arquivo contra o repositório real (que esta sessão
sim tinha clonado), quatro divergências apareceram entre o texto do disparo e o
comportamento real dos agentes atuais. Estão detalhadas e corrigidas no topo do
`prompt-disparo-semanal.md` ("O que foi corrigido nesta versão"): mecanismo real das
newsletters (script IMAP, não página do Notion), status real do MODO 2 de busca de foto
(suspenso por decisão da Mallu, não por rede), ordem real dos agentes do Tronco B (radar e
paaps-brasil em paralelo, antes da tecela), e a exigência de legenda obrigatória (calibrada
04/09/2026, ausente do prompt antigo).
