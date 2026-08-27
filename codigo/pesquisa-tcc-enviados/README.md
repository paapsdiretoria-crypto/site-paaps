# A pasta Enviados da pesquisa de TCC

## O problema, o mesmo de sempre

O n8n dispara por SMTP puro, e SMTP só entrega ao destinatário: não grava cópia em
"Enviados". Sem isso, a Mallu não teria como ler, dentro do próprio Titan, o que saiu em
nome dela para as unidades da pesquisa.

Já existe o mesmo conserto para a prospecção comercial, em
`codigo/prospeccao-enviados/`. Este é o irmão dele para a campanha de TCC, com uma
diferença de arquitetura: **aqui não existe Notion**. A pesquisa foi desenhada de
propósito sem CRM (ver `automacoes/pesquisa-tcc-bh/PLANO.md`, seção 1: unidade do SUAS não
é lead), então não há uma base para ler "o que foi enviado".

## De onde vem a certeza do que saiu

Da própria **execução do workflow no n8n**. `sincroniza-titan-pesquisa.py` lê a última
execução de `Pesquisa TCC - Leva 2026-08-28 (07:20)` (id fixo no topo do script) e olha o
nó `Enviar (SMTP)`: cada envio que teve sucesso ali vira cópia em Enviados; cada um que
falhou (já teria virado um aviso `FALHOU TCC` na hora) não vira nada.

**Achado ao construir isto, 27/08/2026:** o nó `Enviar (SMTP)` substitui o item pela
resposta do próprio SMTP (envelope, `messageId`, accepted/rejected). Ele **não repassa** o
campo `unidade` que entrou. Por isso o script casa pelo **e-mail do envelope**, não pelo
nome da unidade, e só depois busca a unidade correspondente nas cartas locais.

**Achado bom, no mesmo lugar:** essa resposta do SMTP carrega o `messageId` **real** que
foi usado no envio de verdade. O script usa esse mesmo id na cópia gravada em vez de gerar
um novo. Se a unidade responder o e-mail, a resposta chega com `In-Reply-To` apontando
para esse id, e o Titan tem uma chance real de encadear a conversa com a cópia enviada.
(O serviço da prospecção não tem esse dado, porque a fonte dele é o Notion, desligado da
execução do n8n; usa um Message-ID sintético.)

O **texto** de cada carta não vem da execução do n8n (que só guarda a resposta do SMTP):
vem de `exportar-cartas-json.mjs`, que chama a mesma função (`montarCartas`) que gerou o
e-mail que saiu de verdade. Garante que a cópia é o mesmo molde, não uma reconstrução à
parte.

```
n8n: execução da leva                 exportar-cartas-json.mjs
  nó "Enviar (SMTP)"                    (mesma função que montou
  e-mail + messageId real  ──┐          o envio de verdade)
                              ├── casa por e-mail ──► grava em Enviados
  cartas locais (.md/.json) ──┘         com o messageId real
```

## Por que isto NUNCA pode duplicar o envio real

O script fala com o Titan só por **IMAP**, e só usa **APPEND**, que escreve uma mensagem
direto numa pasta da própria caixa. Não existe SMTP aqui, não existe relay, não existe
destinatário sendo tocado. Rodar este script cem vezes seguidas nunca manda um e-mail a
mais para nenhuma unidade do SUAS — o pior que pode acontecer é tentar gravar a mesma
cópia duas vezes na pasta Enviados da própria Mallu, e nem isso ocorre, pelo motivo
abaixo.

## Por que não duplica nem a cópia

Cada mensagem gravada leva o cabeçalho `X-PAAPS-Carta`, com uma chave determinística
(`tcc-bh-2026-08-28::<nome-da-unidade-em-slug>`). Antes de gravar, o script lê esse
cabeçalho em tudo que já está na pasta Enviados e pula o que já tem cópia. Rodar dez vezes
seguidas dá o mesmo resultado de rodar uma.

## Usar na mão

```bash
python3 "/Users/mac/Documents/SITE PAAPS/codigo/pesquisa-tcc-enviados/sincroniza-titan-pesquisa.py" --ensaio
```

`--ensaio` mostra o que gravaria sem gravar nada. Sem a palavra, grava.

## Serviço automático

Registrado como `com.mallu.sincroniza-titan-pesquisa`, rodando a cada 15 minutos a partir
de 27/08/2026 à noite — já ligado antes mesmo do disparo de amanhã, para não depender de
ninguém lembrar de rodar na hora certa. Com o Mac desligado no horário do disparo (07:20),
ele grava assim que o Mac ligar de novo: a fonte é a execução do n8n, que não desaparece.

```bash
launchctl list | grep sincroniza-titan-pesquisa
launchctl unload ~/Library/LaunchAgents/com.mallu.sincroniza-titan-pesquisa.plist
launchctl load ~/Library/LaunchAgents/com.mallu.sincroniza-titan-pesquisa.plist
```

## Estado e log

| Arquivo | O que é |
|---|---|
| `~/.paaps/sincroniza-titan-pesquisa.log` | histórico de tudo que foi gravado |
| `~/.paaps/sincroniza-titan-pesquisa.out.log` | saída do serviço |
| `~/.paaps/sincroniza-titan-pesquisa.err.log` | erro do serviço |

Sem arquivo de estado: a memória do que já foi gravado mora na própria caixa, no
cabeçalho `X-PAAPS-Carta`.

## Se a leva mudar (nova data, novo horário, nova lista)

`WORKFLOW_ID` no topo do script está fixo no id da leva de 28/08/2026 07:20
(`RcGxbk8co4RuhbtT`). Uma leva nova (segunda rodada, com a Hospedagem Social por exemplo)
ganha um workflow novo no n8n, com id novo: atualizar `WORKFLOW_ID` e, se quiser, também
`CAMPANHA` (para as chaves de dedup não colidirem com a leva anterior).

## O que este script nunca faz

Não envia e-mail, não altera o n8n, não apaga nada da caixa. Ele só acrescenta cópia na
pasta Enviados, e só do que o SMTP já confirmou ter entregue.
