#!/bin/bash
# ditado: ditado por voz local, offline, com whisper.cpp
#
# Funciona em alternancia: a primeira chamada comeca a gravar, a segunda
# para, transcreve e cola o texto onde o cursor estiver.
#
#   ditado          alterna entre gravar e transcrever
#   ditado status   diz se esta gravando
#   ditado cancelar descarta a gravacao em andamento
#
# Nada sai da maquina: audio e transcricao ficam so aqui.

set -uo pipefail

# O Hammerspoon roda este script com "zsh -c" a partir de um processo aberto pelo
# launchd, que nao tem LANG definido. Sem locale UTF-8, o pbcopy assume Mac OS
# Roman e le a saida do whisper errado: "a" com acento (bytes C3 A1) vira "√°".
# Fixar o locale aqui garante acento correto seja quem for que chame o script.
export LANG=pt_BR.UTF-8
export LC_ALL=pt_BR.UTF-8

FFMPEG="$HOME/bin/ffmpeg"
WHISPER="$HOME/bin/whisper-cpp"
MODELO="${DITADO_MODELO:-$HOME/.local/share/whisper-models/ggml-medium.bin}"
IDIOMA="${DITADO_IDIOMA:-pt}"
MIC_NOME="${DITADO_MIC:-MacBook Pro}"
LIMITE_SEG="${DITADO_LIMITE:-300}"

# Vocabulario do contexto. O whisper usa isso para enviesar o reconhecimento,
# entao nomes proprios e jargao do PAAPS param de virar palavra parecida
# ("Claude" saia como "Claudio", "ditando" saia como "de Tando").
# Precisa ler como frase, nao como lista solta: prompt picotado faz o modelo
# repetir termo que nao foi dito.
VOCAB="${DITADO_VOCAB:-Conversa de trabalho da Mallu Vasconcellos, da PAAPS. Fala sobre Claude, Claude Code, Notion, Instagram, carrossel, psicologia social, saúde mental, servidores públicos, prefeitura, gestão pública, políticas públicas, ECOA, TEAtrar e a Rede PAAPS.}"

# Onde toda ditada fica guardada. Fora do repositorio: e material pessoal.
ARQUIVO_DIR="${DITADO_ARQUIVO:-$HOME/Ditado}"

DIR="${TMPDIR:-/tmp}/ditado"
mkdir -p "$DIR"
PIDFILE="$DIR/gravando.pid"
WAV="$DIR/fala.wav"
LOG="$DIR/ditado.log"

registra() { printf '[%s] %s\n' "$(date '+%H:%M:%S')" "$*" >>"$LOG"; }
som()      { afplay "/System/Library/Sounds/$1.aiff" >/dev/null 2>&1 & }
aviso()    { osascript -e "display notification \"$1\" with title \"Ditado\"" >/dev/null 2>&1; }

# Descobre o indice do microfone pelo NOME. O numero muda sozinho quando o
# iPhone entra ou sai por Continuidade, entao nunca deve ser fixado no codigo.
indice_do_mic() {
  local lista audio idx
  lista=$("$FFMPEG" -hide_banner -f avfoundation -list_devices true -i "" 2>&1)
  audio=$(printf '%s\n' "$lista" | sed -n '/AVFoundation audio devices/,$p')
  idx=$(printf '%s\n' "$audio" | grep -F "$MIC_NOME" | head -1 | sed -E 's/.*\[([0-9]+)\].*/\1/')
  if [ -z "$idx" ]; then
    # Sem o microfone preferido, cai para o primeiro da lista.
    idx=$(printf '%s\n' "$audio" | grep -E '\[[0-9]+\]' | head -1 | sed -E 's/.*\[([0-9]+)\].*/\1/')
    registra "microfone '$MIC_NOME' nao encontrado, usando indice $idx"
  fi
  printf '%s' "${idx:-0}"
}

# A presenca do arquivo de estado marca a sessao de gravacao, e nao o processo
# vivo. Se o ffmpeg morrer sozinho (teto de tempo, dispositivo removido), a fala
# ja gravada continua valendo: perder o audio dela e inaceitavel.
esta_gravando() {
  [ -f "$PIDFILE" ]
}

comeca() {
  local idx
  idx=$(indice_do_mic)
  registra "gravando pelo dispositivo :$idx"
  rm -f "$WAV"
  # nohup + disown: o atalho encerra o processo pai assim que o script retorna,
  # e sem isso o ffmpeg morreria junto e a gravacao duraria zero segundo.
  nohup "$FFMPEG" -hide_banner -loglevel error -f avfoundation -i ":$idx" \
            -t "$LIMITE_SEG" -ar 16000 -ac 1 -c:a pcm_s16le -y "$WAV" >>"$LOG" 2>&1 &
  echo $! >"$PIDFILE"
  disown 2>/dev/null
  som Tink
}

termina() {
  local pid texto tamanho i
  pid=$(cat "$PIDFILE" 2>/dev/null)
  rm -f "$PIDFILE"

  # SIGINT faz o ffmpeg fechar o cabecalho do wav direito. Um kill seco
  # deixaria o arquivo truncado e o whisper nao leria.
  kill -INT "$pid" 2>/dev/null
  for i in $(seq 1 60); do
    kill -0 "$pid" 2>/dev/null || break
    sleep 0.05
  done
  som Pop

  if [ ! -s "$WAV" ]; then
    registra "arquivo vazio: microfone sem permissao?"
    aviso "Nao gravou nada. Verifique a permissao de microfone."
    som Basso
    return 1
  fi

  tamanho=$(stat -f%z "$WAV")
  if [ "$tamanho" -lt 16000 ]; then
    registra "audio curto demais ($tamanho bytes)"
    som Basso
    return 1
  fi

  # Whisper alucina legenda de filme quando recebe silencio ("Legendas pela
  # comunidade Amara.org" e parentes). Barrar antes de transcrever e mais
  # confiavel do que tentar filtrar a invencao depois.
  #
  # Usa o PICO e nao a media: numa ditada longa ela pensa, pausa e retoma, entao
  # a media desaba mesmo havendo fala boa no meio. Media como criterio jogaria
  # fora justamente a ditada mais valiosa, que e a mais longa.
  volume=$("$FFMPEG" -hide_banner -i "$WAV" -af volumedetect -f null - 2>&1 \
    | sed -n 's/.*max_volume: \(-*[0-9.]*\) dB.*/\1/p' | head -1)
  if [ -n "$volume" ] && [ "${volume%.*}" -lt -40 ] 2>/dev/null; then
    registra "silencio (pico $volume dB), nada a transcrever"
    som Basso
    return 1
  fi

  texto=$("$WHISPER" -m "$MODELO" -l "$IDIOMA" -nt -np -t 4 --prompt "$VOCAB" -f "$WAV" 2>>"$LOG" | tr '\n' ' ')
  # O whisper marca ruido e silencio entre colchetes. Isso nao e fala.
  texto=$(printf '%s' "$texto" \
    | sed -E 's/\[[^]]*\]//g' \
    | sed -E 's/\((música|musica|silêncio|silencio|risos|aplausos)\)//gI' \
    | tr -s '[:space:]' ' ' \
    | sed -E 's/^ +//; s/ +$//')

  if [ -z "$texto" ]; then
    registra "nenhuma fala reconhecida"
    som Basso
    return 1
  fi

  registra "transcrito: $texto"

  # Rede de segurança: toda fala transcrita vira arquivo antes de qualquer
  # tentativa de colar. Se a colagem falhar, se a janela tiver mudado ou se ela
  # apertar outra coisa sem querer, o raciocinio nao se perde.
  # Fica FORA do repositorio de proposito: ela dita saude, renda e reflexao
  # pessoal, e isso nao entra no git.
  mkdir -p "$ARQUIVO_DIR"
  {
    printf '\n## %s\n\n' "$(date '+%H:%M')"
    printf '%s\n' "$texto"
  } >> "$ARQUIVO_DIR/$(date '+%Y-%m-%d').md"

  # O texto fica no clipboard de proposito: se a colagem falhar por falta de
  # permissao de acessibilidade, ainda da para colar na mao com cmd+V.
  printf '%s' "$texto" | pbcopy

  # DITADO_SEM_COLAR=1 transcreve e para no clipboard, sem mexer na janela
  # ativa. Serve para testar o ciclo sem despejar texto onde nao deve.
  if [ -n "${DITADO_SEM_COLAR:-}" ]; then
    printf '%s\n' "$texto"
    return 0
  fi
  osascript -e 'tell application "System Events" to keystroke "v" using command down' 2>>"$LOG"
}

case "${1:-alterna}" in
  status)
    esta_gravando && echo "gravando" || echo "parado"
    ;;
  cancelar)
    if esta_gravando; then
      kill -INT "$(cat "$PIDFILE")" 2>/dev/null
      rm -f "$PIDFILE" "$WAV"
      som Basso
      echo "cancelado"
    else
      echo "nao estava gravando"
    fi
    ;;
  alterna)
    if esta_gravando; then termina; else comeca; fi
    ;;
  *)
    echo "uso: ditado [status|cancelar]" >&2
    exit 2
    ;;
esac
