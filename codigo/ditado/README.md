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

## Falta um passo, e só você pode fazer

O macOS não deixa nenhum programa definir um atalho de teclado global sozinho.
A Ação Rápida já está instalada e registrada; falta escolher a tecla:

1. Abre **Ajustes do Sistema** > **Teclado** > **Atalhos de Teclado…**
2. Na lista da esquerda, clica em **Serviços**.
3. Abre a seção **Geral** e procura **Ditado**.
4. Clica em **nenhum** do lado direito e aperta a combinação que você quer.

Sugestão: `⌃⌥D` (control + option + D). Evite teclas que digitam sozinhas.

Na primeira vez que o atalho rodar, o macOS vai pedir duas permissões. As duas são
necessárias e pedidas uma vez só:

- **Microfone**: para gravar a sua voz.
- **Acessibilidade**: para colar o texto na janela ativa.

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
atalho
  -> ~/Library/Services/Ditado.workflow   (Ação Rápida do Automator)
     -> ~/bin/ditado                      (link para este repositório)
        -> ffmpeg          grava do microfone em wav 16 kHz mono
        -> whisper-cpp     transcreve local, na GPU, via Metal
        -> pbcopy          põe o texto na área de transferência
        -> osascript       envia cmd+V para a janela ativa
```

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
