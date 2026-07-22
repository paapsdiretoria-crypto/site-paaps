# Ditado por voz local

Aperta um atalho, fala, aperta de novo: o texto aparece onde o cursor estiver.
Claude Code, Notion, Google Docs, e-mail, qualquer campo de texto.

Roda inteiro dentro do MacBook. Nenhum áudio e nenhuma transcrição sai da máquina,
não depende de internet e não tem assinatura.

## Como usar

1. Clica no lugar onde você quer que o texto apareça.
2. Aperta o atalho. Toca um `tin`: está gravando.
3. Fala.
4. Aperta o atalho de novo. Toca um `pop`: em cerca de 2 segundos o texto é colado.

Se nada for reconhecido, toca um som grave e nada é colado.

Pelo terminal, se precisar:

```
ditado            alterna entre gravar e transcrever
ditado status     diz se está gravando
ditado cancelar   descarta a gravação em andamento
```

O atalho é **⌘;** e já está armado.

## Trocar a tecla

Edita a linha `local MOD, TECLA` em `~/.hammerspoon/init.lua` e depois clica em
**Reload Config** no ícone do martelo, na barra de menu.

## Permissões

Duas, pedidas uma vez só:

- **Microfone**: para gravar a sua voz.
- **Acessibilidade**, concedida ao **Hammerspoon**: para colar na janela ativa.

Atenção ao caminho da acessibilidade, porque os Ajustes do Sistema têm dois lugares
com esse nome e só um serve:

- **Privacidade e Segurança** > **Acessibilidade**: a lista de apps. É esta.
- Barra lateral > **Acessibilidade**: VoiceOver, Zoom, tamanho de texto. Não serve.

Se o Hammerspoon não estiver na lista, o botão **+** embaixo dela resolve.

## Se a colagem não acontecer

O texto transcrito **sempre** vai para a área de transferência antes da colagem.
Se a permissão de acessibilidade ainda não estiver concedida, o texto não se perde:
basta colar na mão com `cmd+V`.

## Ajustes

Dá para mudar o comportamento por variável de ambiente:

| Variável | Padrão | Para quê |
|---|---|---|
| `DITADO_MODELO` | `~/.local/share/whisper-models/ggml-medium.bin` | trocar o modelo |
| `DITADO_IDIOMA` | `pt` | trocar o idioma |
| `DITADO_MIC` | `MacBook Pro` | usar outro microfone |
| `DITADO_LIMITE` | `300` | teto de segundos por gravação |
| `DITADO_SEM_COLAR` | vazio | transcreve e para no clipboard, sem colar (teste) |

### Modelo: medium ou small

Os dois estão instalados em `~/.local/share/whisper-models/`.

| Modelo | Tempo (frase de 5s) | Quando usar |
|---|---|---|
| `ggml-medium.bin` | ~2,2s | padrão; melhor em português, aguenta sotaque e ruído |
| `ggml-small.bin` | ~0,8s | quando velocidade importar mais que precisão |

Medido nesta máquina, com Metal ativo, modelo já em cache de disco.

## Como está montado

```
⌘;
  -> ~/.hammerspoon/init.lua    (Hammerspoon registra a tecla no sistema)
     -> ~/bin/ditado            (link para este repositório)
        -> ffmpeg        grava do microfone em wav 16 kHz mono
        -> volumedetect  recusa silêncio antes de transcrever
        -> whisper-cpp   transcreve local, na GPU, via Metal
        -> pbcopy        põe o texto na área de transferência
     -> Hammerspoon      envia cmd+V com a permissão dele mesmo
```

### Por que Hammerspoon e não uma Ação Rápida do Automator

A primeira versão usava o menu de Serviços do macOS, e **não funcionava**. Duas razões:

1. O atalho de Serviço passa pelo menu Serviços de cada aplicativo e é engolido quando
   o próprio app já usa aquela combinação. O script nunca era chamado.
2. A colagem dependia do `osascript`, que nesta máquina não tem permissão de
   acessibilidade: `osascript não tem permissão para acionar teclas (1002)`.

O Hammerspoon resolve os dois: registra a tecla acima de qualquer aplicativo e digita
com a permissão concedida a ele. Nenhum passo depende de `osascript`.

### Alucinação em silêncio

O Whisper inventa legenda de filme quando recebe silêncio, tipicamente
"Legendas pela comunidade Amara.org". Por isso o volume médio é medido antes da
transcrição e qualquer coisa abaixo de -50 dB é recusada sem chamar o modelo.

### Vocabulário

Termos do contexto PAAPS são passados ao whisper via `--prompt`, senão "Claude" sai
como "Claudio" e "ditando" como "de Tando". A lista fica na variável `VOCAB`, no
começo do script, e precisa ler como frase: prompt picotado em lista solta faz o
modelo repetir termo que não foi dito.

O índice do microfone é resolvido **pelo nome**, nunca fixado no código: quando o
iPhone entra ou sai por Continuidade, os números de dispositivo mudam de posição
e um índice fixo passaria a gravar da fonte errada.

A gravação é solta do processo pai com `nohup` e `disown`. Sem isso, o `ffmpeg`
morreria junto com o atalho e a gravação duraria zero segundo.

## Consertos feitos em 22/07/2026

O `whisper-cpp` estava quebrado desde a instalação. Ele foi compilado dentro de
`/tmp` e depois movido para `~/.local/opt`, mas o binário continuava procurando
`libwhisper.1.dylib` no caminho antigo:

```
Library not loaded: @rpath/libwhisper.1.dylib
tried: '/tmp/whisper.cpp/build/bin/libwhisper.1.dylib' (no such file)
```

Corrigido trocando o `rpath` por `@loader_path`, que é relativo ao próprio binário
e não quebra se a pasta mudar de lugar de novo, seguido de reassinatura:

```bash
install_name_tool -rpath /tmp/whisper.cpp/build/bin @loader_path <binário>
codesign -f -s - <binário>
```

Aplicado em `whisper-cli`, `whisper-server`, `whisper-bench`, `whisper-quantize`
e `whisper-vad-speech-segments`.

Os modelos foram copiados de `~/.cache/hyperframes/whisper/models/` para
`~/.local/share/whisper-models/`. O cache do HyperFrames pode ser limpo pela
própria ferramenta a qualquer momento, e o ditado não pode depender disso.

## Se um dia ficar lento demais

Existe um `whisper-server` já compilado e consertado no mesmo lugar. Ele mantém o
modelo carregado na memória e responde por HTTP, o que corta cerca de 0,8s por
transcrição (o tempo de carregar o modelo e inicializar o Metal a cada chamada).

O custo é 1,5 GB de RAM ocupados o tempo todo, num Mac de 16 GB. Por isso a versão
atual não usa: a diferença entre 2,2s e 1,4s não paga esse preço no uso normal.
Se o ditado virar rotina pesada, vale trocar.
