---
name: ferramenta-local-mallu
description: Use para construir, consertar ou remover qualquer automação que rode na máquina da Mallu (não no repositório, não como agente de conteúdo). Ative em pedidos como "cria um atalho pra…", "faz o Mac avisar quando…", "roda isso automático todo dia", "manda pro Notion sozinho", "quero ditar/clicar/abrir X com uma tecla", "automatiza esse fluxo aqui no meu computador". Não use para agentes de conteúdo, skills, hooks do Claude Code que só editam arquivos do repo, nem para código que roda em servidor.
---

# Automação local na máquina da Mallu

## Lei central

```
PERMISSÃO NÃO SE DEDUZ, SE EXERCITA.
NENHUMA AFIRMAÇÃO SOBRE PERMISSÃO SEM TER EXECUTADO A CAPACIDADE NESTA SESSÃO.
```

## Gate explícito

Antes de dizer a ela que algo "está pronto", "está liberado" ou "vai funcionar":

- A capacidade foi executada de verdade nesta sessão? Um teste que exercita permissão vizinha não vale.
- O caminho de erro foi testado, e não só o caminho feliz?
- O que sobra ligado depois? Está documentado como desligar?

Se qualquer resposta for não, você ainda não terminou.

---

## O RED que originou esta skill

Sessão de 22/07/2026, construção do ditado por voz. Quatro violações reais, todas minhas, todas caras:

| O que fiz | Por que quebrou |
|---|---|
| Declarei acessibilidade concedida após rodar `tell application "System Events" to return name of first process` | Isso exercita permissão de **automação**, não de acessibilidade. Ao enviar uma tecla de verdade: `osascript não tem permissão para acionar teclas (1002)`. A colagem nunca funcionaria. |
| Recomendei ⌥Espaço como atalho "livre no macOS" | Era o atalho global do app do Claude (`accelerator` no `claude_desktop_config.json`). Verifiquei o que a Apple reserva e não o que ela tem instalado. |
| Montei o gatilho como Ação Rápida do Automator | Atalho de Serviço passa pelo menu Serviços de cada app e é engolido. O script nunca foi chamado, e o log provou: nenhuma entrada nova. |
| Recomendei ⌘Ç por ler "Brazilian - Pro" no sistema | Esse layout é justamente o de teclado físico **americano**. Ela não tem tecla Ç. |

Resultado: ela trocou de atalho três vezes, abriu o painel errado dos Ajustes e escreveu "está dando errado, o que vc errou?". O trabalho técnico estava certo desde cedo; o que falhou foi verificação.

---

## Fatos fixos da máquina

Verificados em 22/07/2026. Confirme antes de tratar como verdade se a sessão for muito posterior.

| Item | Valor |
|---|---|
| Máquina | MacBook Pro 13" M1 (`MacBookPro17,1`), 16 GB, Touch Bar |
| Teclas F físicas | não existem (Touch Bar) |
| Teclado | físico americano, layout `Brazilian - Pro`. O ç sai com ⌥C. **Não há tecla Ç.** |
| Homebrew | não instalado. Instalação de app: baixar, verificar assinatura, copiar para `/Applications` |
| Binários em `~/bin` | `ffmpeg`, `ffprobe`, `gh`, `python3` (pyenv 3.12.9), `whisper-cpp`, `ditado` |
| Binários em `~/.local/bin` | `claude`, `codegraph`, `hermes`, `node`, `npm`, `npx` |
| Hammerspoon | `/Applications`, com acessibilidade concedida e "Launch at login" ligado |
| Modelos whisper | `~/.local/share/whisper-models/` (`medium`, `small`) |
| PyTorch | 2.12.1 já instalado no pyenv |

Teclas queimadas, não sugerir de novo: ⌥Espaço (app do Claude), ⌘M (Minimizar), ⌘; (o ditado usa).

---

## Mapa de permissões do macOS

A confusão entre elas foi a causa raiz do RED. Cada capacidade exige uma permissão diferente, concedida ao **app que roda o processo**, não ao script.

| Para fazer isto | Precisa de | Como testar de verdade |
|---|---|---|
| Digitar ou clicar por software | Acessibilidade | Envie uma tecla. Erro `1002` significa negado. |
| Ler janelas e botões de outro app | Automação | `tell application "System Events" to get name of every window` |
| Gravar o microfone | Microfone | Grave 0,5s e meça o volume. Silêncio digital (perto de -91 dB) significa negado; ruído de sala (-60 dB) significa concedido. |
| Mostrar notificação | nenhuma especial para `osascript` | `display notification` retorna sem erro |
| Ler `~/Documents`, `TCC.db`, Mail | Acesso Total ao Disco | Tente ler. "authorization denied" significa negado. |

Duas armadilhas que custaram tempo real:

**`osascript` não tem acessibilidade nesta máquina.** Qualquer automação que dependa de `System Events` para digitar ou clicar vai falhar. Quem digita é o Hammerspoon, com a permissão dele.

**Existem dois "Acessibilidade" nos Ajustes do Sistema.** O que tem lista de apps é **Privacidade e Segurança > Acessibilidade**. O item da barra lateral é VoiceOver e Zoom, e não lista app nenhum. Sempre dê o caminho completo a ela, senão ela abre o errado e conclui que o app não está lá.

---

## Escolha do mecanismo

Escolha pela tabela, não por preferência.

| Tipo de automação | Mecanismo | Onde mora |
|---|---|---|
| Gatilho por tecla | **Hammerspoon** | `~/.hammerspoon/init.lua` |
| Rodar em horário ou intervalo | **LaunchAgent** | `~/Library/LaunchAgents/com.mallu.<nome>.plist` |
| Reagir ao fim de uma conversa | **hook do Claude Code** | `.claude/settings.json`, evento `Stop` |
| Avisar na tela | `hs.notify` (Hammerspoon) ou `osascript -e 'display notification'` | junto do script |
| Avisar por som | `afplay /System/Library/Sounds/<nome>.aiff` | junto do script |
| Escrever no Notion | **MCP Notion** já conectado | chamada direta, sem script |

### Gatilho por tecla: sempre Hammerspoon

Ordem de confiabilidade, testada: Hammerspoon primeiro, Atalhos da Apple depois, **Serviços do Automator nunca**. O atalho de Serviço depende do menu Serviços do app em foco e é engolido em silêncio.

Antes de propor qualquer combinação:

1. Liste os apps instalados e procure atalho global nos arquivos de configuração deles. O do Claude fica em `~/Library/Application Support/Claude/claude_desktop_config.json`, campo `accelerator`.
2. Descarte o que o macOS já usa em todo app: ⌘M, ⌘N, ⌘W, ⌘Q, ⌘Z, ⌘,, ⌘.
3. Lembre que ⌃+letra é edição de texto em qualquer campo (⌃A, ⌃E, ⌃K, ⌃D) e comando de terminal. Ela vive no terminal.
4. Lembre que ⌥+letra **digita caractere** no layout dela.
5. Proponha uma, com o motivo de estar livre. Não ofereça três para ela escolher: ela não tem como avaliar o risco de cada uma.

### Agendamento: LaunchAgent

Nome sempre `com.mallu.<nome>`. Aponte para script dentro de `codigo/`, nunca para caminho de área de trabalho ou pasta temporária. Sempre com `StandardErrorPath` gravando log, senão a falha some.

Depois de instalar, `launchctl list | grep com.mallu` e confirme status 0. Status diferente de 0 significa que já está falhando.

### Notificação

Prefira `hs.notify` quando o Hammerspoon já estiver no fluxo: a permissão dele já está resolvida e o aviso é clicável. Use `osascript` para script solto.

Para o artefato financeiro (`projetos/artefato-financeiro/`), respeite a arquitetura dele: o app não acessa rede e os dados só entram e saem pelos botões Exportar e Importar. Uma automação pode **ler** `raio-x-financeiro.json` e avisar (vencimento próximo, meta estourada), mas não pode escrever no app. O clique de importar continua sendo dela.

### Registro pós-sessão no Notion

O hook `Stop` já escreve em `sessoes/sessao-YYYY-MM-DD.md` e já commita. Mandar para o Notion **estende esse fluxo**, não cria um paralelo: leia o arquivo do dia e publique. Duas fontes de verdade para a mesma sessão é o começo de divergência silenciosa.

---

## Processo

1. **Inventarie antes de construir.** `ls ~/Library/LaunchAgents`, `launchctl list | grep com.mallu`, `cat ~/.hammerspoon/init.lua`, hooks em `.claude/settings.json`. Pode já existir, ou pode existir quebrado.
2. **Verifique as permissões que o desenho exige**, exercitando cada uma. Se faltar, isso vira o primeiro passo da entrega, não uma surpresa no fim.
3. **Verifique colisão**: tecla, porta de rede, nome de LaunchAgent, nome de arquivo.
4. **Construa dentro de `codigo/`**, com link em `~/bin`. Ferramenta fora do repositório não tem backup nem histórico.
5. **Teste cada camada isolada**, e nunca dispare efeito visível na tela dela durante o teste. Um `cmd+V` de teste vai parar na janela que estiver aberta na frente dela. Deixe uma variável de ambiente que interrompe antes do efeito (padrão: `FERRAMENTA_SEM_EFEITO=1`).
6. **Teste o caminho de erro**: entrada vazia, silêncio, arquivo faltando, permissão negada. Ferramenta que só foi testada no caminho feliz vai falhar calada.
7. **Reduza o passo manual ao mínimo** e dê o caminho de UI exato, item por item, incluindo em qual painel e sob qual seção. Ela não programa: instrução aproximada custa uma rodada inteira.
8. **Registre**: README ao lado do código, memória do projeto, e uma linha no inventário de automações.
9. **Ensine a desligar** no mesmo texto em que entrega. Toda automação precisa de instrução de remoção.

---

## Manutenção: automação abandonada vira zumbi

Caso real encontrado nesta máquina em 22/07/2026:

```
com.mallu.openfinance-mcp  ->  ~/Desktop/Mallu-Pessoal/mcp-openfinance/server.py
```

O MCP foi descontinuado e o arquivo não existe mais, mas o LaunchAgent continua carregado e falhando a cada login, com status 2. Ninguém percebe porque falha em silêncio.

Ao encerrar qualquer ferramenta local, remova as três pontas: o `plist` (com `launchctl bootout`), o bloco no `init.lua`, e o link em `~/bin`. Ao encontrar um zumbi durante o inventário, avise a ela e ofereça remover.

---

## Tabela de racionalizações

| Pensamento | O que está acontecendo |
|---|---|
| "A permissão provavelmente já está concedida" | Você está deduzindo. Exercite a capacidade. Foi exatamente assim que a acessibilidade passou batida. |
| "Esse teste é equivalente, prova a mesma coisa" | Ler UI e digitar tecla são permissões diferentes. Teste a capacidade exata que a ferramenta usa. |
| "Essa tecla parece livre" | Livre no macOS não significa livre na máquina dela. Verifique os apps instalados. |
| "Ofereço três opções e ela escolhe" | Ela não tem como avaliar risco de colisão de atalho. Escolha uma e explique por quê. |
| "Ela clica isso rapidinho nos Ajustes" | Cada passo manual é um ponto de falha e uma rodada de conversa. Reduza ao mínimo e dê o caminho exato. |
| "Funcionou no meu teste" | Áudio sintético não é a voz dela; caminho feliz não é uso real. Peça um teste real antes de declarar pronto. |
| "Depois eu documento" | Foi assim que nasceu o `com.mallu.openfinance-mcp`. Documente junto, ou vira zumbi. |
| "É só um scriptzinho, não precisa de repo" | Fora de `codigo/` não há backup, histórico nem contexto. |
| "Só essa vez eu pulo o inventário" | O inventário é o que impede construir em cima de algo já quebrado. |

---

## Antes de entregar

- [ ] Cada permissão necessária foi exercitada nesta sessão
- [ ] Caminho de erro testado
- [ ] Nenhum teste disparou efeito na tela dela
- [ ] Colisão de tecla, porta e nome verificada
- [ ] Código em `codigo/`, com README ao lado
- [ ] Passo manual reduzido, com caminho de UI completo
- [ ] Instrução de remoção escrita
- [ ] Inventário atualizado e zumbis reportados
- [ ] Texto passado pela `evita-padrao-ia-imersao-claude`
