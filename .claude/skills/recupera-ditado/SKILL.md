---
name: recupera-ditado
description: Use quando Mallu quiser ler de volta um ditado por voz já gravado. Ative em "recupera meu último ditado", "o que eu ditei hoje/ontem", "acha o ditado onde eu falei sobre X", "lista meus ditados", "cadê aquilo que eu ditei". Não use para gravar, transcrever ou consertar o ditado (isso é `codigo/ditado/ditado.sh` e a skill `ferramenta-local-mallu`).
---

# Recuperar ditado

Os ditados por voz da Mallu ficam SÓ em `/Users/mac/Ditado/AAAA-MM-DD.md`, um arquivo por dia, cada fala num bloco `## HH:MM`. Essa pasta fica **fora do repositório de propósito**: ela dita saúde, renda e reflexão pessoal.

## Lei central

O DITADO É MATERIAL PESSOAL. Recupera, mostra no chat e para por aí. Nunca commita, nunca cola em log de sessão, Notion, CRM ou qualquer superfície compartilhada sem Mallu pedir explicitamente naquela mensagem.

## Gate

Antes de dizer "não achei" ou "não tem ditado", você tem que ter listado `/Users/mac/Ditado/`. Não achar no repositório não é achar: os ditados nunca estão no git. Se você fez grep no repo e não olhou `/Users/mac/Ditado/`, você não procurou.

## Onde estão

- Pasta: `/Users/mac/Ditado/` (fora do repo, ignorada pelo git)
- Um arquivo por dia: `AAAA-MM-DD.md` (ex.: `2026-07-23.md`)
- Dentro, cada ditado é um bloco:
  ```
  ## 13:32

  texto da fala transcrita
  ```
- O **último ditado** é o último bloco `## HH:MM` do arquivo de data mais recente.

## Como recuperar (Bash com caminho absoluto literal)

No modo don't-ask, Bash composto com `$HOME` ou com pipe pra `head`/`cat` é negado. Use caminho absoluto literal e comandos simples; para ler conteúdo, prefira a ferramenta **Read**, não `cat`.

| Pedido | Como fazer |
|---|---|
| Listar os dias que têm ditado | `ls -t /Users/mac/Ditado/*.md` |
| Ler o último ditado | `ls -t /Users/mac/Ditado/*.md` pega o arquivo mais novo; abre com **Read**; o último ditado é o último bloco `## HH:MM` |
| Ditado de uma data | Abre `/Users/mac/Ditado/AAAA-MM-DD.md` com **Read** |
| Buscar por conteúdo | **Grep** com `path: /Users/mac/Ditado`, `output_mode: content`, `-B`/`-A` pra pegar o cabeçalho `## HH:MM` do bloco |

## Processo

1. `ls -t /Users/mac/Ditado/*.md` para ver o que existe e qual é o mais recente.
2. Se o pedido é "último": abre o arquivo mais novo com Read, pega o último bloco `## HH:MM`.
3. Se é por data: abre o arquivo daquela data.
4. Se é por conteúdo: Grep dentro de `/Users/mac/Ditado`, mostra os blocos que casam com o horário de cada um.
5. Devolve o texto no chat, citando data e horário do bloco. Se for longo ou tiver vários, resume o que existe e entrega o pedido exato.
6. Oferece próximos passos úteis (colar no clipboard, mandar outro trecho). Não empurra o conteúdo pra lugar nenhum sozinha.

## Tabela de racionalizações

| Pensamento | O que está acontecendo |
|---|---|
| "Vou grep no repositório pra achar o ditado" | Ditado nunca está no git. É `/Users/mac/Ditado/`. Grep no repo sempre volta vazio e te faz dizer "não achei" errado. |
| "Já que recuperei, salvo no Notion/log pra não perder" | Não. É material pessoal. Só se ela pedir naquela mensagem. |
| "Uso `$HOME/Ditado` no bash" | No don't-ask isso é negado. Caminho absoluto literal `/Users/mac/Ditado/`. |
| "Faço `cat` do arquivo" | Use Read. `cat` é bloqueado e a Read já numera as linhas. |
| "O arquivo é grande, resumo tudo" | Ela pediu um ditado específico. Entrega ele inteiro; resume só o resto. |
