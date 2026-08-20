# A pasta Enviados do relacionamento@

## O problema, descoberto em 20/08/2026

A caixa de enviados do `relacionamento@paaps.com.br` no Titan tinha **uma única
mensagem**, escrita à mão pelo webmail, enquanto dezenas de cartas de prospecção já
tinham saído de verdade e chegado nas prefeituras.

Não era permissão, nem configuração da conta. **SMTP só entrega ao destinatário.** Quem
grava a cópia em "Enviados" é o programa que envia: o webmail faz isso sozinho, e o n8n,
que dispara por SMTP puro, nunca fez. Por isso a Mallu não conseguia ler o que saía em
nome dela sem abrir o Notion.

## O conserto

`sincroniza-enviados.py` lê a base **(EMP) Cartas de Prospecção** no Notion, que é a
fonte da verdade do que foi enviado (destinatário, assunto, hora do disparo e o texto
integral), remonta cada carta no mesmo molde com a mesma assinatura da montanha e grava
na pasta Enviados por IMAP, com a data original do envio.

Roda sozinho pelo serviço `com.mallu.sincroniza-enviados`, a cada 30 minutos. Com o Mac
desligado nada se perde: na volta ele grava o que ficou para trás.

```
(EMP) Cartas de Prospecção (Notion)          Titan · relacionamento@
  Estado = Enviada                                   │
  Para, Assunto, Enviada em, texto  ──────────────────┘
                                    grava em Enviados, com a data do disparo
```

## Por que não duplica

Cada cópia leva o cabeçalho `X-PAAPS-Carta` com o id da página no Notion. Antes de
gravar, o script lê esse cabeçalho em todas as mensagens da pasta e pula o que já está
lá. Rodar dez vezes seguidas dá o mesmo resultado de rodar uma.

Cada cópia leva também `X-PAAPS-Origem: copia gravada a partir do registro do Notion`.
Isso é honestidade de registro: a mensagem é a mesma que a prefeitura recebeu, montada de
novo a partir do que ficou guardado, e não o objeto original que passou pelo SMTP.

## Usar na mão

```bash
python3 "/Users/mac/Documents/SITE PAAPS/codigo/prospeccao-enviados/sincroniza-enviados.py" --ensaio
```

`--ensaio` mostra o que gravaria sem gravar nada. Sem a palavra, grava.

## Estado e log

| Arquivo | O que é |
|---|---|
| `~/.paaps/sincroniza-enviados.log` | histórico de tudo que foi gravado |
| `~/.paaps/sincroniza-enviados.out.log` | saída do serviço |
| `~/.paaps/sincroniza-enviados.err.log` | erro do serviço |

Não existe arquivo de estado: a memória do que já foi gravado mora na própria caixa, no
cabeçalho `X-PAAPS-Carta`. Um arquivo de estado perdido reconstrói sozinho.

## Ligar, desligar, conferir

```bash
launchctl list | grep sincroniza
launchctl unload ~/Library/LaunchAgents/com.mallu.sincroniza-enviados.plist
launchctl load ~/Library/LaunchAgents/com.mallu.sincroniza-enviados.plist
```

## Primeira execução

20/08/2026: 63 cartas recuperadas, de 03/08 a 20/08. A pasta Enviados foi de 1 para 65
mensagens (63 cartas + a resposta enviada ao Wesley, de Mantena, + a mensagem antiga que
já estava lá).

## O que este script nunca faz

Não envia e-mail, não altera o Notion, não apaga nada da caixa. Ele só acrescenta cópia
na pasta Enviados.
