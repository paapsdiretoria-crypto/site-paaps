# Aviso de resposta da prospecção

Quando um secretário responde uma carta da prospecção fria, três coisas precisam acontecer
sem ninguém lembrar de olhar nada: o CRM registra, a Mallu é avisada, e o lead sai do pool
frio. Esta pasta cuida da segunda parte, a que aparece na tela do Mac.

## Como as peças se encaixam

```
resposta do secretário
        ↓
caixa relacionamento@paaps.com.br (Titan)
        ↓
n8n: workflow "Prospecção - Retorno (quem respondeu)"
        ├─→ atualiza (EMP) Leads: Status = Aquecimento, Respondeu? = sim
        ├─→ cria Atividade "Resposta recebida: <lead>" em (EMP) Atividades
        └─→ manda e-mail de aviso para paapsdiretoria@gmail.com
                ↓                              ↓
        push no celular              este script, a cada 5 min
        (filtro do Gmail)            → notificação na tela do Mac
```

O n8n roda na nuvem e não consegue tocar no Mac. Por isso o aviso na tela funciona ao
contrário: este script consulta o Notion de tempos em tempos e transforma cada Atividade
nova de resposta em notificação.

Com o Mac fechado, o push do Gmail no celular chega igual. O aviso na tela aparece quando
a máquina voltar. Nenhum dos dois depende do outro.

## O que o script faz

`avisa-resposta.mjs` só LÊ o Notion. Nunca escreve nada.

A cada execução ele pergunta ao CRM quais Atividades do tipo PROSPECÇÃO com título
começando em `Resposta recebida:` foram criadas depois da última olhada. Para cada uma,
dispara uma notificação nativa do macOS com nome do lead e trecho da mensagem.

Estado e log ficam em `~/.paaps/`, fora do repositório:

| Arquivo | O que é |
|---|---|
| `estado-aviso-resposta.json` | até onde já olhou e o que já avisou (evita repetir) |
| `aviso-resposta.log` | histórico legível de cada execução |
| `aviso-resposta.err.log` | erro do LaunchAgent; vazio significa saudável |

Na primeira execução ele grava um marco e não avisa nada retroativo, senão a primeira
rodada despejaria dezenas de notificações de uma vez.

## Rodar na mão

```bash
cd "/Users/mac/Documents/SITE PAAPS/codigo/prospeccao-aviso"

node avisa-resposta.mjs                 # olha o que há de novo agora
node avisa-resposta.mjs --teste         # dispara uma notificação de exemplo
node avisa-resposta.mjs --desde-o-inicio # varre os últimos 7 dias, ignorando o marco
```

## O serviço automático

Instalado como LaunchAgent `com.mallu.aviso-resposta`, roda a cada 5 minutos e também ao
ligar o Mac.

```bash
launchctl list | grep com.mallu     # segunda coluna 0 significa saudável
tail -20 ~/.paaps/aviso-resposta.log
```

## Desligar

Para parar por um tempo:

```bash
launchctl bootout gui/$(id -u)/com.mallu.aviso-resposta
```

Para remover de vez:

```bash
launchctl bootout gui/$(id -u)/com.mallu.aviso-resposta
rm ~/Library/LaunchAgents/com.mallu.aviso-resposta.plist
rm -rf ~/.paaps
```

Remover isto não afeta o CRM nem o push do celular: o n8n continua registrando e enviando
o aviso por e-mail do mesmo jeito. Some só a notificação na tela.

## Depende de

- `NOTION_TOKEN` em `automacoes/.env`, com a integração conectada a `(EMP) Atividades`
- Node em `/Users/mac/.local/bin/node`
- O workflow de retorno ligado no n8n; sem ele nenhuma Atividade de resposta é criada e o
  script fica em silêncio para sempre, sem erro nenhum
