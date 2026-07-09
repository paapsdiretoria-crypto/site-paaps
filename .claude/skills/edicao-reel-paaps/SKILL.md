---
name: edicao-reel-paaps
description: Use para editar um vídeo JÁ GRAVADO da Mallu (fala à câmera, depoimento, entrevista de campo) e transformar em Reel/TikTok PAAPS com legendas em cadência, cards de dados, b-roll, trilha e SFX. Ative em frases como "edita esse vídeo que gravei", "usa /talking-head-recut nesse vídeo", "põe legendas PAAPS e trilha nesse depoimento", "transforma o brutos/X.mov em Reel". Não use para criar vídeo do zero a partir de URL, produto ou texto (isso é /product-launch-video, /website-to-video, /faceless-explainer) nem para só queimar legenda literal (isso é /embedded-captions).
---

# Edição de Reel PAAPS (vídeo gravado da Mallu)

Edita um vídeo que a Mallu já gravou: a imagem dela toca por baixo, intocada, e por cima entram legendas em cadência, cards de dados, b-roll, trilha e SFX. Constrói sobre `/talking-head-recut`, mas carrega as regras da Mallu que aquela skill genérica não conhece — cada uma custou uma rodada de retrabalho no Reel "A distribuição do cuidado não".

## Lei central

```
CONGELE A IMAGEM APROVADA. TRILHA E SFX SÃO SEMPRE UM RE-MUX, NUNCA UM RE-RENDER.
NÃO ESCUREÇA O VÍDEO. NÃO PONHA TEXTO SOBRE O ROSTO. NÃO MUDE NADA QUE ELA NÃO PEDIU.
```

Depois que o visual mudo está aprovado em `output.mp4`, toda rodada de áudio é `ffmpeg` de ~10s. Re-renderizar a composição para trocar música é destruir trabalho aprovado.

## Gate

Antes de entregar qualquer versão, confirme na própria mensagem:

- `hyperframes lint` e `validate` passaram com 0 erros nesta rodada — sem isso, não afirme que renderizou.
- Nenhum overlay cruza a faixa central do rosto. Se um card não cabe em cima nem embaixo, ele encolhe ou sai — não invade o centro.
- Nenhuma camada escurece o fundo (sem scrim, sem dim, sem overlay preto). Legibilidade vem de text-shadow e de painéis de marca localizados só atrás de número.
- Todo texto está em League Spartan ou Evermore. Qualquer outra fonte é violação.
- A trilha veio da biblioteca do HeyGen e dura ≥ a duração do vídeo. Faixa que faz loop não passa.
- O corte de b-roll não tem SFX em cima.
- Você não alterou nenhum elemento que a Mallu não pediu para alterar nesta rodada.
- Você LEU o relatório de contraste WCAG do `validate` — não só o contador de erros. Falha de contraste sobre a parede clara = cor por backdrop errada (ver regra 11).
- Você rodou `npx hyperframes snapshot public --at <beats>` e ABRIU os PNGs: sem colisão de camadas, sem texto sobre rosto, corte do b-roll horizontal conferido, palavra Evermore inteira (sem clipe).
- O vídeo funciona 100% no MUDO (silent-first) e o hook aparece legível nos primeiros ~1,5s.

## Regras inegociáveis

1. **Nunca escurecer** o vídeo ou o fundo. O cenário sempre aparece. Legibilidade é text-shadow forte no tipo + painel marrom localizado só atrás de número amarelo.
2. **Texto nunca sobre o rosto.** Overlays vivem na faixa de cima e na faixa de baixo (acima da UI do Reel). O centro fica livre.
3. **Só duas fontes:** League Spartan (estrutura, CAPS, números) e Evermore (a palavra emblemática, minúscula, apoio). Zero Helvetica, Arial ou fonte de sistema.
4. **Margens de segurança de Reel** (1080×1920): top ~140, esquerda ~84, direita ~150, baixo ~430.
5. **Legenda em cadência:** ≤4 palavras por linha, palavra-chave em terracota com underline, revelação sincronizada à fala.
6. **Trilha: a faixa que a Mallu largou na pasta vence.** Se ela deixou um arquivo de áudio próprio na pasta do vídeo (ex.: Alex Productions, chosic.com), aplique esse — não saia caçando no HeyGen. Só busque no HeyGen (`searchSounds`, nunca MusicGen) quando ela não trouxe faixa. A faixa deve durar ≥ duração do vídeo (nunca dar loop), **entrar suavemente** (fade-in longo, ~4s), volume baixo e duckada sob a voz. Piano solo somber foi rejeitado por soar deprimente — o que funcionou foi cinematográfico morno e esperançoso (Alex Productions "The Long Way Home"). Calibre por LUFS.
7. **SFX** sutis e pontuais:
   - Whoosh entrando nas CAPS (mantém).
   - No corte de b-roll, um whoosh **nostálgico e revertido** (swell que puxa pra memória), volume quase imperceptível (~0.06) — não disputa com a cena/memória representada. (Whoosh seco e punchy no b-roll continua proibido; o nostálgico revertido é o certo.)
   - Em beats de virada ("não", CTA), **pop / botão estilo cartoon**, não impact-bass grave (soou pesado demais).
8. **Logo do CTA:** `paaps-branco-cor.png` (as cabeças coloridas). Nunca o PNG com a assinatura "autoria e impacto social em rede".
9. **Citação de dado** em lower-third, formato ABNT (CFP, República.org, IBGE).
10. **Não invente asset.** Se o b-roll ou a foto não estão em `brutos/`, peça o upload explícito. Não gere substituto.
11. **Cor por backdrop.** A Mallu filma quase sempre sobre PAREDE CLARA — creme ali é ilegível (o validador acusou 6 falhas de contraste no vídeo 02). Sobre fundo claro: texto neutro **marrom `#442309`** + halo claro (text-shadow creme/areia) + acento terracota. Sobre footage escura/variável (b-roll): **creme** + halo escuro forte + acento amarelo. Legendas da faixa de baixo ficam **sempre creme** (caem sobre camisa/cabelo escuros). Helper pronto: `backdrop_colors()` no `_paaps-toolkit/paaps_reel.py`.
12. **1 palavra emblemática em Evermore por reel.** A identidade PAAPS pede a palavra-conceito em Evermore (minúscula, line-height ≥1.05, nunca cortada). O vídeo 02 saiu sem nenhuma — regressão; não repetir. Helper: `palavra_evermore()`.

## Processo

### 1. Briefing (antes de tocar em arquivo)
Pergunte de saída, numa mensagem: a tese/frase-âncora, os números a destacar e suas fontes ABNT, os momentos de b-roll e quais clipes, o aspecto (9:16 default) e a referência de trilha. Áudio de b-roll gravado no vento entra mudo — avise que vai tirar. Não avance sem a âncora definida.

### 2. Ingest e transcrição
`ffprobe` para metadata; extraia o áudio; `hyperframes transcribe --model medium` para `transcript.json` (flat word array). Corrija o ASR preservando os timestamps. Agrupe em linhas de legenda ≤4 palavras.

### 3. Ritmo pela legenda
Meça a densidade da fala (palavras por 5s, maiores respiros). Fala contínua sem pausas longas pede trilha de tapete legato sustentado, não faixa com ataques rítmicos. Esse número decide o caráter da música e a pauta de cards.

### 4. Layout
Gere a composição (`public/index.html`) com faixas cima/baixo, painéis de marca atrás de número, CAPS cinéticas (League Spartan + palavra Evermore), âncora, cards de dado com count-up, CTA com o logo correto. Aplique o design system em `hyperframes/handoff-designsystem/` — leia o spec antes.

### 5. Valide e renderize mudo
`hyperframes lint` e `hyperframes validate` até 0 erros. Renderize o visual sem áudio em `output.mp4`. A partir daqui a imagem está congelada.

### 6. Áudio (re-mux)
Busque a trilha no HeyGen com `searchSounds(query, "music", headers, {limit})` — rode 5-6 frasings do brief, dedupe por `audio_url`, ranqueie por `score` e por LRA baixo (dinâmica plana, sem crescendo). Escolha faixa ≥ duração do vídeo. Calibre o volume por LUFS (`loudnorm print_format=summary`), não por multiplicador cru. Monte voz (lip-sync) + música duckada (`sidechaincompress`) + SFX num `ffmpeg` que copia o vídeo (`-c:v copy`). Meça LUFS e True Peak no fim.

### 7. Handoff
Abra o `final.mp4`. Diga qual trilha aplicou e por quê (score, LRA, duração). Deixe as alternativas baixadas prontas para troca. Registre o log de sessão e os aprendizados.

## Regras aprendidas (v2 — vídeo 02, jul/2026)

### Toolkit reutilizável
Não copie e adapte `gen_reel.py` à mão a cada vídeo. Use `hyperframes/videos/_paaps-toolkit/`:
`ingest.py` (brutos → projeto: classifica principal/b-roll/trilha, transcoda, copia fontes/logo/gsap, transcreve, gera `beats_template.py` — nunca sobrescreve projeto existente) → editar beats → `paaps_reel.py` (biblioteca com tokens, cor por backdrop, `scene()`, componentes aprovados) → `mux.py` (re-mux com os defaults v7). O `README.md` do toolkit tem o fluxo ponta-a-ponta.

### Padrão anti-seek `scene()`
Cada cena = clip container (posição; o framework gerencia visibilidade por `data-start`/`data-duration`) + inner `<div class="sc">` que recebe os fades e o hard-kill (`tl.set opacity:0`). Animar opacidade direto no clip quebra o seek do render. O fade de saída não pode terminar exatamente na borda de início de outro clip — deixe ≥1 frame de folga.

### B-roll horizontal (1920×1080) em 9:16
Entra full-frame com `object-fit:cover` (center-crop); ajuste `object-position` se o corte decapitar a cena — e SEMPRE confira o corte no snapshot. Crossfade entre b-rolls exige **tracks diferentes** (overlap na mesma track é erro de lint).

### Gate de QA expandido (lint não basta)
`lint` (0 erros) + `validate` (0 erros **e ler o relatório de contraste WCAG** — é ele que acusa creme sobre parede clara) + `snapshot --at <beats>` **com conferência visual dos PNGs**: colisão de camadas, texto sobre rosto, corte de b-roll horizontal, Evermore sem clipe. Só depois renderizar mudo.

### Contemporaneidade e retenção
- **Hook nos primeiros ~1,5s:** o primeiro beat visual legível entra antes de 1,5s — é o que segura o scroll.
- **Silent-first:** a maioria assiste no mudo. O reel precisa se sustentar 100% sem áudio (legendas + cards contam a história sozinhos).
- **Frame de capa:** escolher explicitamente o frame de capa do post ao entregar (um beat de big-type legível, nunca rosto em transição).
- **Legenda do post:** ao entregar o `final.mp4`, fazer handoff para a skill `legendas-otimizadas` (SEO/GEO) — o reel não sobe sem legenda otimizada.

## Regras aprendidas (v3 — vídeo 04, jul/2026)

### Geração de legenda e RITMO (nunca adiantar a fala)
- **`data-start` da legenda = início da PALAVRA falada** (`q(L['start'])`), nunca antes. Legenda que aparece antes do som quebra o sincronismo e denuncia edição automática.
- **≥2 frames de folga entre legendas consecutivas.** Bug real no vídeo 01: `q(nxt-1/FPS)` deixava overlap de 0,4 ms por drift de arredondamento (dur em 3 casas + start em 4). Use `e = min(e, q(nxt) - 2.0/FPS)`.
- **Janela calculada em tempo ORIGINAL, depois remapeada.** Ao cortar trecho, compute o clamp de OFF-windows e de próxima-legenda em tempo original e só então aplique o remap `rt()` — comparar tempo remapeado com OFF original bagunça tudo.
- **≤4 palavras/linha, quebra na pontuação, revelação palavra-a-palavra** (`stagger` ~0.05). A cadência acompanha a fala; não despeje a frase inteira de uma vez.
- **OFF-windows:** quando um card/CAPS/split grande domina a tela, a legenda normal SOME naquele intervalo (não competir na mesma faixa).

### Palavras-chave e destaque (Evermore + laranja-avermelhado)
- **Destaque de palavra-chave = terracota `#cb4710`** (o laranja-avermelhado da paleta). Na legenda em cadência: terracota + underline. É o único realce de palavra dentro do corpo da legenda.
- **Números/acento vivo = amarelo `#f7c31c`** (sobre fundo escuro/b-roll). Nunca amarelo como texto de palavra sobre fundo claro (contraste ruim) — nesse caso a palavra-chave é terracota.
- **1 palavra emblemática em Evermore por reel** (minúscula, manuscrita) — a palavra-conceito (ex.: "estrutura", "latino-americana"). Contraste com o resto em League Spartan. Cabe na margem, nunca cortada (reduza a fonte antes de empilhar).
- Escolha as palavras-chave pelo PESO (misoginia, opressão, estrutura, coletivo, território, rede, SUS…), não por frequência.

### B-roll de IMAGEM (foto) e split-screen
- **B-roll = espelho EXATO da pasta `brutos/`.** Use TODOS os arquivos de imagem/vídeo que estão na pasta do vídeo; REMOVA de `public/` qualquer b-roll que não esteja mais na pasta. O nome do arquivo sinaliza o momento (`tranquei a faculdade`, `entrepredios`, `b-rollnafaculdade`, `estudando`, `fotosubstituir` = campo, `foto2substituir` = aula).
- **Foto horizontal → 9:16 com FUNDO BORRADO** (não center-crop): `scale=cover + gblur` como fundo + a foto inteira em `scale=decrease` centralizada por cima. Preserva o coletivo (foto de grupo com muita gente — center-crop decapita metade). ffmpeg `-loop 1 -t <dur>` vira mp4 curto que entra no pipeline de b-roll de vídeo.
- **Duas fotos horizontais no mesmo momento emblemático → SPLIT-SCREEN** (empilhadas: cada uma numa metade 1080×960, `object-fit:cover`, divisória amarela de ~6px). Ex.: as 2 fotos de faculdade em "eu sairia da FACULDADE hoje". Ken-burns sutil em direções opostas (scale 1.0↔1.07) dá vida sem jitter.
- **Ken-burns** nas fotos estáticas (scale ~1.0→1.06 pela GSAP no clip) — foto parada 3-4s sem movimento morre no feed.
- B-roll de vídeo horizontal continua center-crop (conferir no snapshot); vertical, cover direto.

### Corte de trecho (remover parte da fala) — remap `rt()`
Quando a Mallu pede para cortar um trecho (ex.: a ilha na Bahia): crie `input-video-cut.mp4` (ffmpeg `trim`+`concat`), defina `CUT_START/CUT_END/GAP` e um `rt(t)` que devolve `t` se `t<=CUT_START` senão `t-GAP`; **redefina `q()` para aplicar `rt`** (todo tempo de tween passa por lá), emita `data-start` via `rt()`, e as durações ficam invariantes (nada mantido cruza o corte). Cards que lideram o áudio (ex.: "80%") reancoram junto. Um b-roll pode MASCARAR o jump-cut do splice. Detalhes na memória `paaps-video-assets.md`.

### Cenário misto no mesmo vídeo
Um vídeo da Mallu pode trocar de cenário/figurino no meio (madeira escura → área externa clara; cozinha → rua). A **cor por backdrop vale por TRECHO**, não pelo vídeo todo. Solução robusta: halo escuro reforçado (`0 0 4-5px rgba(0,0,0,0.9)` + camadas) faz creme/amarelo ler tanto no escuro quanto no céu claro sem trocar a cor.

## Racionalizações que sinalizam desvio

| Pensamento | O que está acontecendo |
|---|---|
| "Um scrim escuro deixa a legenda mais legível" | Ela pediu para mostrar o cenário. Use text-shadow e painel localizado. |
| "Esse card só cabe se descer um pouco sobre o rosto" | O rosto é intocável. Encolha o card ou tire. |
| "Já que estou aqui, aproveito e melhoro esse outro trecho" | Ela disse para não mudar o que não pediu. Toque só no solicitado. |
| "Vou caçar a trilha perfeita no HeyGen" | Se ela deixou uma faixa na pasta, é essa. Aplique a dela antes de buscar. |
| "O MusicGen local resolve mais rápido que logar no HeyGen" | MusicGen entregou loop de 2 notas e foi rejeitado 3 vezes. Use a faixa da Mallu ou a biblioteca do HeyGen. |
| "Essa faixa de 30s dá para repetir em loop" | Loop foi a queixa mais forte. Faixa ≥ duração do vídeo. |
| "Piano solo introspectivo combina com o tema sério" | Piano solo somber soou deprimente. Ela quer cinematográfico morno e esperançoso. |
| "Um whoosh seco no corte da ilha dá impacto" | No b-roll o SFX é nostálgico e revertido, quase imperceptível. Whoosh punchy ali continua fora. |
| "Impact-bass grave dá peso no 'não' e no CTA" | Soou pesado demais. Nesses beats o certo é pop/botão estilo cartoon. |
| "Para trocar a música é só re-renderizar" | Re-render descarta a imagem aprovada. Áudio é sempre re-mux. |
| "Helvetica no descritivo é discreto, ninguém nota" | Só League Spartan e Evermore. Qualquer outra fonte sai. |
| "Creme fica elegante sobre a parede clara" | Ilegível — 6 falhas de contraste no vídeo 02. Sobre fundo claro o neutro é marrom `#442309` + halo claro. |
| "O lint passou, está pronto" | Lint não vê contraste nem colisão. Falta validate (ler o WCAG) + snapshot dos beats com conferência visual. |
| "Copio o gen_reel.py do último vídeo e adapto" | Frágil e lento. O `_paaps-toolkit/` (ingest → beats → paaps_reel → mux) existe para isso. |
| "Esse reel não pede palavra em Evermore" | Pede. 1 palavra-conceito em Evermore por reel é identidade, não enfeite. |
| "O b-roll horizontal se resolve com object-fit" | Só com conferência: o center-crop pode decapitar a cena. Snapshot antes de aprovar. |
| "A legenda pode entrar um instante antes, pra preparar" | Não. `data-start` = início da palavra falada. Adiantar denuncia edição automática. ≥2 frames de folga entre legendas. |
| "Foto de grupo eu corto no centro pra caber no 9:16" | Center-crop decapita metade do coletivo. Fundo borrado preserva todos; 2 fotos horizontais → split-screen. |
| "Uso os b-rolls que já transcodei nas rodadas anteriores" | B-roll é espelho EXATO da pasta `brutos/`. Remova os que saíram da pasta; use os que entraram. O nome sinaliza o momento. |
| "Amarelo destaca bem a palavra-chave" | Palavra-chave na legenda é terracota `#cb4710` (+ underline). Amarelo é para número/acento sobre fundo escuro. |

## Artefatos de referência

O Reel "A distribuição do cuidado não" (`hyperframes/videos/reel-distribuicao-cuidado/`) é a implementação-mãe: `gen_reel.py` (gerador com o design system aplicado), `mux_reel.sh` (receita de mix parametrizável) e os logs `SESSAO-*.md`. A memória `paaps-video-assets.md` guarda as regras duras e a receita de trilha.

O Reel do vídeo 02 (`hyperframes/videos/reel-video02-serie01/gen_reel.py`) é a referência visual mais atual: cor por backdrop, padrão anti-seek `scene()`, selos-diagnóstico, selo clínico e módulo de follow. **Para reels novos, parta do `hyperframes/videos/_paaps-toolkit/`** (`ingest.py` → `paaps_reel.py` → `mux.py`; fluxo completo no `README.md` do toolkit) em vez de copiar `gen_reel.py` à mão.

**Receita de mix aprovada (v7, ffmpeg — reproduzível em `mux_reel.sh`):** trilha "The Long Way Home" (Alex Productions) em `volume=0.18`, `afade in d=4.0` (entrada suave), `afade out st=68.4 d=3.1`, `sidechaincompress threshold=0.05:ratio=9:attack=18:release=400` duckada sob a voz → mix final **-22.5 LUFS / -4.9 dBTP**. SFX: 4 whooshes de CAPS (adelay 21150/24350/32680/58040, vol 0.24), 2 whooshes sutis de card (380/48100, vol 0.11), whoosh nostálgico revertido no b-roll (`areverse`, adelay 41800, vol 0.06), pop no "não" e no CTA (adelay 9350/63450, vol 0.30). Vídeo copiado sem recodificar (`-c:v copy`). Voz vem de `public/input-video.mp4` (lip-sync com `output.mp4`).
