---
name: busca-trilha-pixabay
description: Use quando um vídeo do ecossistema PAAPS (reel, institucional) precisar de trilha sonora (BGM) e ainda não tiver uma escolhida. Primeiro passo sempre é olhar o banco local em `hyperframes/trilhas/`; só sai buscando no Pixabay se não achar nada lá. Ativar em "que trilha uso nesse vídeo", "procura uma música pro reel", "preciso de uma trilha acolhedora/documentário/piano". Não confundir com SFX (clique, whoosh, digitação) que tem banco próprio em `hyperframes/skills/hyperframes-media/assets/sfx/`.
---

# Busca de trilha sonora (Pixabay + banco local PAAPS)

## Limite real, dito de cara

Eu não ouço áudio. Não existe ferramenta neste ambiente que me deixe escutar uma
faixa e julgar se ela é "acolhedora" ou "intensa" de verdade. Tudo que eu faço aqui
é ler metadado: nome da faixa, tags do Pixabay, e onde a Mallu já usou uma faixa
parecida antes. **Quem escuta e decide é sempre a Mallu.** Meu trabalho é reduzir
o trabalho dela até o momento de ouvir: achar candidatas plausíveis pelo texto,
nunca fingir ter validado o clima.

## Passo 1: o banco local primeiro

`hyperframes/trilhas/README.md` cataloga toda trilha já usada ou já escolhida no
ecossistema, organizada em duas famílias (ver o README para a definição exata):

- `piano-esperancoso/`: honesto, tranquilo, cuidadoso. Constrói afeto ou fecha com
  cuidado.
- `documentario-intenso/`: sensação de reportagem, tese sendo construída, tração
  rítmica. Vídeo argumentativo.

Leia o README, veja se alguma faixa já catalogada serve pelo contexto do vídeo novo
(tema, quem fala, se é institucional ou pessoal). Se servir, é isso: copiar pro
projeto, sem sair procurando trilha nova.

## Passo 2: se não achar, buscar no Pixabay

Playlist de referência da Mallu (o que ela já ouviu e aprovou o tom geral):
`https://pixabay.com/pt/playlists/my-favorite-33598158/`. Olhar ali primeiro antes
de buscar solto no site: é o gabarito mais confiável do que ela considera "som
PAAPS".

Pixabay bloqueia fetch automatizado direto (retorna 403 pra requisição de servidor).
Formas de buscar:

1. **Navegador (Chrome MCP)**, se a extensão estiver conectada: abrir
   `pixabay.com/pt/music/search/?q=<termo>`, ler os títulos e tags de cada faixa
   candidata (Pixabay mostra gênero/mood na própria página).
2. **Sem navegador conectado**: buscar pelo nome de faixas parecidas via WebSearch
   (título + "pixabay"), ou pedir pra Mallu abrir e mandar o link/nome.

Termos de busca por família:

| Família | Termos em inglês (Pixabay é majoritariamente indexado em inglês) |
|---|---|
| Piano esperançoso | `hopeful piano`, `calm piano`, `gentle piano background`, `warm piano` |
| Documentário intenso | `documentary piano`, `building tension piano`, `analytical documentary underscore` |

**Nunca escolher sozinho e finalizar a montagem com a faixa.** Levar 2-3
candidatas com link e as tags do próprio Pixabay, a Mallu ouve e decide. Só depois
disso a faixa entra na composição.

## Passo 3: baixar e organizar

Quando a Mallu confirmar a faixa (ou já tiver baixado ela mesma, como fez em
11/08/2026 largando os arquivos direto na pasta do projeto):

1. Copiar o arquivo pro `assets/bgm/` (ou `public/`, seguir o padrão do projeto)
   do vídeo em edição.
2. Copiar TAMBÉM pro `hyperframes/trilhas/<família>/`, mantendo o nome original do
   Pixabay (ele carrega o ID da faixa, útil pra achar de novo ou creditar).
3. Adicionar uma linha na tabela do `hyperframes/trilhas/README.md`: arquivo,
   fonte, onde foi usada, e a nota de contexto (o que a Mallu disse ao escolher,
   nunca uma descrição de som inventada por mim).

## Licença

Faixas do Pixabay usadas aqui são da licença padrão Pixabay (uso comercial livre,
sem exigir atribuição, mas não pode revender a faixa isolada nem registrá-la como
sua). Não precisa negociar por faixa; só não vale re-hospedar a faixa crua em outro
banco de música pra download.
