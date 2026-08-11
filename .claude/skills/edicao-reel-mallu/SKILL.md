---
name: edicao-reel-mallu
description: Use para editar um vídeo JÁ GRAVADO da Mallu e transformar em Reel do perfil PESSOAL @malluvasconcellos, com a identidade dela (Impact + Times New Roman, bege e vinho, revelação palavra a palavra com clique). Ative em "edita esse vídeo pro meu perfil", "monta o reel do malluvasconcellos", "põe as legendas da minha identidade nesse vídeo". Para vídeo do @paaps.brasil use `edicao-reel-paaps`, que tem regras DIFERENTES e incompatíveis. Não use para criar vídeo do zero a partir de URL, produto ou texto.
---

# Edição de Reel @malluvasconcellos

Edita um vídeo que a Mallu já gravou para o perfil PESSOAL dela. A imagem toca por baixo,
intocada; por cima entra a identidade tipográfica dela.

**Não confundir com `edicao-reel-paaps`.** Aquela skill é da instituição e tem regras que
aqui estão proibidas (League Spartan, halo forte, texto nunca sobre o rosto, painel de
marca). Compartilham só a infraestrutura: HyperFrames, o gate de QA, o corte de silêncios,
e a lei do congelamento.

O registro de COMO cada decisão foi tomada com a Mallu, com a discussão inteira, está em
`DECISOES.md`, nesta mesma pasta. Este arquivo é o operacional.

---

## Lei central (herdada)

```
CONGELE A IMAGEM APROVADA. TRILHA E SFX SÃO SEMPRE UM RE-MUX, NUNCA UM RE-RENDER.
NÃO ESCUREÇA O VÍDEO. NÃO MUDE NADA QUE ELA NÃO PEDIU.
```

Depois que o visual mudo está aprovado em `output.mp4`, toda rodada de áudio é um
`ffmpeg` de ~10s com `-c:v copy`.

---

## 1. Identidade

### Perfil

`@malluvasconcellos`, um só. Os handles `@amalluvasconcellos` e `@psimalluvasconcellos`
espalhados pelo repositório são trocas antigas do MESMO perfil.

Posicionamento: marca pessoal, **sem "Psi"**. Ela ainda é estudante e não quer sugerir que
já é psicóloga formada, e ainda não decidiu se vai usar o Instagram para captar pacientes.
**Identidade de AUTORA e de pensamento, nunca de consultório:** sem CTA de agendamento,
sem CRP no rodapé, sem estética de perfil de terapeuta.

### Paleta

```css
--m-bege:      #f5f1e0;  /* TEXTO padrão */
--m-lilas:     #bcb6f2;  /* acento frio, uso restrito */
--m-rosa:      #c42443;  /* acento vivo, meio-tom */
--m-vinho:     #6f0d33;  /* DESTAQUE */
--m-terracota: #cb4710;  /* compartilhado com o PAAPS */
--m-marrom:    #442309;  /* compartilhado com o PAAPS */
```

### Cor do texto

> **Tudo BEGE. As palavras de destaque em VINHO, e só elas. Linha inteira em vinho SÓ
> quando o fundo for branco e não houver contraste nenhum para o bege.**

"Não houver contraste nenhum" vira número: **contraste do bege abaixo de 3:1**, medido no
próprio vídeo (ver seção 3), nunca estimado no olho.

### Sombra

> **Sombra colorida é PROIBIDA.** Nada de halo vinho, contorno de marca, glow.
> O máximo é preto padrão, muito suave: teto em `0 1px 3px rgba(0,0,0,0.25)`.

Se dá para ver a sombra olhando o frame, está forte demais. Isso invalida a receita de
halo do `edicao-reel-paaps`.

### Nenhum painel, nunca

Nenhum modo tem caixa, painel ou campo de cor atrás do texto. Se a frase não lê sobre o
cenário daquele trecho, o beat muda de lugar, não ganha fundo.

### Tipografia

| Fonte | Modos | Papel |
|---|---|---|
| `Impact` | A, C, E | A voz alta. SEMPRE caixa alta, `letter-spacing` -0,015em. |
| `Times New Roman` | B, D | O pensamento formulado. Caixa mista, 4 estilos. |

Peso único no Impact: hierarquia sai de TAMANHO e COR, nunca de peso. As duas são da
Monotype e vêm com o macOS: copiar de `/System/Library/Fonts/Supplemental/` para
`public/fonts/` e **não commitar**. Fallbacks OFL: `Anton` e `Tinos`.

---

## 2. Os cinco modos

| Modo | Fonte | Quando | Entrada |
|---|---|---|---|
| **A Manifesto** | Impact | Gancho, virada, âncora. 1 a 2 por reel. | Palavra a palavra + clique |
| **B Editorial sério** | Times | A frase acabada, respiro seco. 1 por reel. | Digitado + leito de datilografia |
| **C Marca d'água** | Impact | Título de bloco, transição. | Fade rápido + whoosh de arraste |
| **D Caderno** | Times | Bastidor e processo. | |
| **E Cadência** | Impact | A legenda corrida. O reel todo. | Fade curto, sem som |

Máximo **três modos por reel**. D não convive com A nem com B.

**A Manifesto.** `line-height` 0,86, alinhado à esquerda. **Sempre palavra por palavra,
clique em todas, sem variante.** Cada palavra é uma PEÇA que MONTA a frase: a palavra que
aparece FICA, não some nem é substituída. O erro a evitar tem nome: legenda tipo karaokê.
A frase montada permanece durante toda a fala mais instantes CURTOS depois. Até 8 palavras.
**O trecho se escolhe pelo SENTIDO** (a oração que remata), escrevendo o texto exato no
gerador; janela de tempo sempre come o remate da frase.

**B Editorial sério.** Centralizado, `line-height` ~1,2. Destaque é **BOLD contra REGULAR
na mesma cor**, nunca troca de cor nem itálico. **É DIGITADO caractere a caractere**, no
ritmo da fala, com leito de datilografia de teclado antigo por baixo, baixinho. Não entra
em bloco. **Carrega a frase INTEIRA da janela**, tirada da própria transcrição. Quebra de
linha NATURAL: quebra manual com `<br/>` sangra para fora do quadro em negrito.

**C Marca d'água.** **Sem transparência**: a translucidez da referência era o meio de um
fade. Fade in e out MUITO rápidos, 0,15 a 0,25s. **A pessoa passa NA FRENTE do texto**, e
isso é o modo, não um detalhe: sem o recorte, o modo C não foi executado. Fazer com
`npx hyperframes remove-background <trecho>.mp4 -o sujeito.webm` e empilhar vídeo → texto →
webm com alfa, **só no trecho**, nunca no vídeo todo.

**D Caderno.** Times, não manuscrita. Linhas em escala crescente, palavra-chave maior em
itálico, card de b-roll no topo.

**E Cadência.** Até 4 palavras por linha. **Entra LIMPA, sem régua.** O grifo é destaque,
não é a aparência padrão. **Sem numeração**, a menos que a fala seja mesmo uma lista.

### O grifo: qual palavra leva

Régua na largura exata da palavra, em vinho. Critério, para decidir sozinho:

1. Nomeia a **estrutura ou a contradição**, não o sentimento nem a intensidade.
   `política pública` leva; `esperança` não. `machista` leva; `bastante` não.
2. Substantivo ou conceito. Nunca advérbio ou adjetivo de ênfase.
3. Escolhida pelo **peso**, nunca pela frequência.
4. **Não repete o que o modo A já gritou** em Impact a 132px. Exceção: quando ela repete a
   tese citando fonte, aí o grifo confirma.
5. Densidade: **5 a 7 por reel de 2 minutos**, uma a cada 15-20s.
6. Nunca dois a menos de 8s um do outro.

Grifo é obrigatório em todo reel. Sem nenhum, a legenda corrida perde o que a diferencia
de legenda automática.

---

## 3. Onde o texto vive

### As zonas da interface do Instagram

**Medidas no iPhone dela em 22/07/2026**, sobre um print do reel publicado. Não são
números de internet.

| Zona | Faixa no vídeo (1080×1920) |
|---|---|
| Corte lateral (não aparece) | `x 0..49` e `x 1031..1080` |
| Barra de status | `y 49..84` |
| **Cabeçalho do Reels** | **`y 155..210`** |
| Trilho de ações | `x 900..1010` |
| @ do perfil | `y 1701..1781` |
| Legenda do post | `y 1821..1861` |

**Caixa de texto segura: `x 90..870`, `y 300..1650`.**

Conversão do print (739×1600): o vídeo vai de `tela_y 0` a `1445`;
`video_y = tela_y × 1,329`; `video_x = tela_x × 1,329 + 49`.
Refazer a medição se ela trocar de aparelho, se o Instagram mudar, ou se o destino for
TikTok.

### As três faixas, e a ancoragem

A tela tem **três** lugares, não dois. Tratar como "ou o rosto, ou o topo do quadro" joga
o texto em cima do cabeçalho do Reels e vira uma papa de palavras.

```
y=0   ┌────────────────────────┐
      │ INTERFACE DO INSTAGRAM │  proibido
y=210 ├────────────────────────┤
      │      folga de 90       │
y=300 ├────────────────────────┤
      │     FAIXA NEUTRA       │  <- o texto de cima mora aqui
y=?   ├────────────────────────┤  topo da cabeça (medir por vídeo)
      │        ROSTO           │
```

> **Os blocos de cima ancoram pelo PÉ e crescem para CIMA** (CSS `bottom`, nunca `top`).
> Assim ficam sempre junto do rosto e a folga da interface sobra sozinha.

Duas âncoras diferentes, e elas saem da regra dela ("o fim da frase pode pegar um pouco da
testa e do cabelo, mas a frase não pode tampar o rosto"):

| Regime | Modos | Âncora | Pode |
|---|---|---|---|
| **Destaque** | A, B, C | linha da sobrancelha | encostar na testa e no cabelo |
| **Continuação** | E | topo da cabeça | rosto 100% limpo |

A legenda corrida alterna entre a faixa neutra e o **peito**, escolhido pelo enquadramento
real do trecho. Quando um bloco de destaque está na tela, ela vai obrigatoriamente para o
peito: não disputam a mesma faixa.

**Se o bloco não couber na faixa neutra, ele encolhe ou desce para o peito. Nunca sobe.**

---

## 4. Som

Três gestos, três sons. Todos pequenos, físicos e baixos, calibrados por LUFS.

| Gesto | Som | Volume |
|---|---|---|
| Palavra encaixando (modo A) | **clique de trackpad**, surdo e curto | ~0,13 |
| Modo B | **leito de datilografia** de teclado antigo, em loop sob a janela | ~0,07 |
| Modo C | **whoosh de arraste**, muito rápido e leve | ~0,10 |

Nunca dois SFX no mesmo beat. Clique só no regime de destaque: se toda palavra clica, vira
ruído. Arquivos em `hyperframes/skills/hyperframes-media/assets/sfx/`
(`click-soft`, `typing`, `whoosh-short`).

Trilha: a faixa que a Mallu larga na pasta vence. Sem faixa na pasta, perguntar antes de
sair caçando.

### Os modelos não travam o resto (calibrado 11/08/2026)

**Os modos (seção 2) e a paleta/tipografia (seção 1) são a única coisa fixa.** Eles dizem
o FORMATO de como a legenda aparece, a fonte, a cor. Fora disso, nada aqui é teto: nível de
criatividade na edição e riqueza de efeito sonoro **não são regidos pelo modo**, e prender a
edição a só clique/datilografia/whoosh por excesso de cautela é o erro, não o cuidado.

Ela pediu explicitamente mais camadas de som, amarradas ao que está acontecendo na tela e na
fala, não só ao modo tipográfico:
- **Som na palavra do grifo** (a que já leva a régua vinho), não só nos modos A/B/C.
- **Som na virada de cabeça** ou gesto físico forte dela no vídeo bruto.
- **Tratamento sonoro na entonação mais assertiva** da fala (não precisa ser SFX externo:
  pode ser EQ/compressão pontual, um leve duck da trilha, o que servir o momento).

Cada vídeo tem o próprio tema e os próprios gestos no bruto: o efeito certo nasce olhando
pra ELE, não de um catálogo fixo. Testar, ir ao snapshot, ajustar — isso é o processo normal
daqui, não uma exceção.

**Carimbo (selo de diagnóstico/rótulo em cor Mallu):** existe desde o vídeo 2 e não é um dos
5 modos formais, mas é um recurso válido sempre que o texto for um rótulo/código (igual ao
selo DSM da versão @paaps.brasil). Errar pra pouco aqui já aconteceu: a primeira tentativa
saiu uma caixinha comportada com borda fina, sem presença nenhuma de carimbo real. Um selo de
verdade tem peso: mais contraste com o fundo, talvez leve rotação, borda mais grossa ou dupla,
tipografia que ocupa a caixa. Não sair envergonhado.

O áudio dela costuma chegar em **-0,1 dBTP**, colado no teto de clipe. Limitador leve na
saída, `alimiter` em -1,0 dBTP.

---

## 5. Processo

1. **Ingest.** `ffprobe`; transcodar para `public/input-video.mp4`; extrair `audio-16k.wav`.
2. **Transcrever.** `npx hyperframes transcribe audio-16k.wav -m medium -l pt`.
   **Corrigir o ASR antes de qualquer coisa**: o whisper cola o "E" inicial (`Eagora`,
   `Eisso`, `Eainda`, `Epra`) e em Impact a 132px isso grita. Separar preservando o
   timestamp.
3. **Cortar silêncios e hesitações**, passada global. Só se ela não tiver cortado.
4. **Medir o vídeo** (seção 6). Antes de posicionar qualquer texto.
5. **Mapa de modos.** Marcar onde entra A, B, E na timeline, e escolher os grifos. Antes
   de escrever uma linha de HTML.
6. **Gerar, validar, snapshot** (seção 7).
7. **Renderizar mudo. A partir daqui a imagem congela.**
8. **Re-mux do áudio.**
9. **Handoff:** frame de capa e legenda do post via `legendas-otimizadas`.

---

## 6. Medir antes de posicionar

Duas medições, ~2 minutos, e elas substituem todo chute. Estimar no olho já errou por
150px numa rodada.

**Perfil de luminância** (decide a cor):
```bash
ffmpeg -i public/input-video.mp4 -vf "fps=2,scale=270:480,format=gray" -f rawvideo frames.gray
```
Em numpy: mediana por linha em cada frame, percentil 10 no tempo. Dá a luma de cada faixa
ao longo do vídeo, e daí sai o contraste do bege.

**Anatomia do enquadramento** (decide a posição): extrair frames e marcar `TOPO_CABECA`,
`LINHA_OLHOS`, e onde a roupa clara começa. Refazer a cada vídeo, e por TRECHO se o
cenário mudar no meio.

Cuidado aprendido: num carro, o teto é fundo MÉDIO e a regata é fundo CLARO ao mesmo
tempo. A cor vale por zona, não pelo vídeo inteiro.

---

## 7. Gate

Antes de dizer que está pronto, confirmar na própria mensagem:

- `npx hyperframes lint public` e `validate public` com 0 erros, e o relatório de
  contraste WCAG LIDO, não só o contador
- **Toda palavra falada aparece escrita em algum modo.** Rodar a verificação automática
  (transcrição × texto na tela) e conferir que dá zero. Foi a falha mais visível de todas.
- **Nenhum texto na faixa da interface.** Olhar o snapshot **imaginando a interface do
  Instagram por cima**: o reel nunca é visto no frame isolado, e foi exatamente esse o erro
  do primeiro reel.
- Todo bloco de cima ancorado pelo pé. Se começa colado no topo, está errado.
- Beats de continuação com o rosto limpo; só gancho e destaques encostam na testa
- Legenda corrida sem régua, exceto na palavra de destaque
- Nenhuma sombra colorida. Nenhum painel atrás de texto.
- Nenhum texto vinho sobre fundo escuro, nenhum bege sobre fundo branco
- Toda frase revelada palavra a palavra tem clique; nenhum clique fora do destaque
- Nenhum beat com dois SFX empilhados
- Nenhum modo com opacidade parcial em frame estático (só durante o fade do modo C)
- `snapshot --at <beats>` com os PNGs ABERTOS
- Nenhuma fonte fora de Impact e Times New Roman; nenhuma cor fora dos seis hex

---

## 8. Armadilhas já pagas

| Sintoma | Causa |
|---|---|
| Blocos de destaque empilhados que nunca somem | Ao clampear o fim do bloco contra a próxima janela OFF, o próprio bloco entra na lista e a duração vira negativa. Comparar só contra as janelas dos OUTROS. |
| Meia frase de transição some da tela | O tempo de leitura do bloco A estava silenciando a legenda corrida. São DUAS janelas: a falada silencia, a de leitura só evita colisão de clipe. |
| Uma oração inteira sem legenda | O modo B estava com a frase condensada. Ele carrega a frase inteira, tirada da transcrição. |
| Linha em negrito sangrando para fora do quadro | Quebra manual com `<br/>` não tem reflow. Deixar quebrar sozinho. |
| Texto some no fundo | Cor decidida no olho em vez de medida. |
| Palavras amontoadas com as do Instagram | Texto colado na borda de cima, em cima do cabeçalho do Reels. |

`lint` e `validate` não pegam quase nenhuma dessas. Quem pega é o snapshot aberto.

---

## 9. Racionalizações que sinalizam desvio

| Pensamento | O que está acontecendo |
|---|---|
| "Um halo vinho deixa o bege legível na parede clara" | Sombra colorida é proibida. Sobre fundo claro a legenda é vinho. |
| "Esse painel atrás resolve o contraste" | Nenhum modo tem painel. Se não lê ali, o beat muda de lugar. |
| "Subo o texto um pouco pra caber" | Acima de 300 é o Instagram que escreve. Encolhe ou desce pro peito. |
| "A largura de 912 dá mais respiro" | 996 fica embaixo dos botões de curtir. A caixa é 90..870. |
| "Condenso a frase pra caber no bloco" | Fala nunca fica sem legenda. Diminui o corpo. |
| "Grifo em toda linha, como na referência" | O grifo é destaque. A legenda corrida entra limpa. |
| "O frame ficou lindo" | O reel não é visto no frame isolado. Imagine a interface por cima. |
| "Pra trocar o som é só re-renderizar" | Áudio é sempre re-mux. |
| "Uma fonte a mais não faz mal" | Só Impact e Times New Roman. |
