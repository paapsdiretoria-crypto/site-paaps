# Saber na hora que alguém respondeu

Tudo já está montado e testado, menos duas coisas que só você pode fazer, porque envolvem
uma senha e o seu celular. São os dois passos abaixo. Dá para fazer em uns 10 minutos.

Depois deles, quando um secretário responder uma carta, três coisas acontecem sozinhas:
o celular apita, o Mac mostra o aviso na tela e o CRM registra que aquele lead respondeu.

---

## Passo 1: deixar o n8n ler a caixa relacionamento@

O n8n já sabe **enviar** por essa caixa. Falta dar a ele permissão de **ler**, que é como
ele percebe que chegou resposta.

**1.1.** Abra o arquivo de chaves. No terminal, cole isto e aperte Enter:

```
open -a TextEdit "/Users/mac/Documents/SITE PAAPS/automacoes/.env"
```

**1.2.** No fim do arquivo, acrescente uma linha com a senha do e-mail
`relacionamento@paaps.com.br` no Titan. É a mesma senha que o envio já usa:

```
TITAN_SENHA=coloque-a-senha-aqui
```

Sem espaço antes ou depois do `=`. Salve com ⌘S e feche.

> Esse arquivo nunca sobe para o GitHub: ele está na lista de ignorados justamente por
> guardar senha. A senha fica só na sua máquina e dentro do n8n.

**1.3.** No terminal, cole isto e aperte Enter:

```
cd "/Users/mac/Documents/SITE PAAPS" && node automacoes/prospeccao-email/n8n/criar-credencial-imap.mjs
```

O comando testa a conexão antes de guardar qualquer coisa. Se a senha estiver errada, ele
avisa e não cria nada. Dando certo, ele mesmo liga o workflow de retorno e escreve:

```
Pronto. O workflow de retorno está LIGADO e vigiando a caixa.
```

Se aparecer erro de senha, quase sempre é uma destas três: o Titan está com
"Ativar Titan em outros apps" desligado; existe verificação em duas etapas e é preciso usar
a senha de aplicativo; ou entrou um espaço sobrando na linha.

---

## Passo 2: fazer o celular apitar

Todo aviso de resposta chega no `paapsdiretoria@gmail.com` com o assunto começando em
`RESPOSTA:`. Isso é de propósito: é o que permite filtrar sem erro.

### 2.1. Criar a etiqueta e o filtro (no computador)

1. Abra o Gmail no navegador, com a conta `paapsdiretoria@gmail.com`.
2. Na barra de busca do topo, clique no ícone de **filtros** (as linhinhas à direita).
3. No campo **Contém as palavras**, escreva: `subject:(RESPOSTA:)`
4. Clique em **Criar filtro** (canto inferior direito do quadro).
5. Marque **Aplicar o marcador** e escolha **Novo marcador**. Nome: `PROSPECÇÃO Respondeu`
6. Marque também **Marcar sempre como importante**.
7. Clique em **Criar filtro**.

### 2.2. Ligar a notificação só dessa etiqueta (no celular)

No **iPhone**, o app Gmail notifica por etiqueta:

1. Abra o app **Gmail**.
2. Toque no menu (três riscos, canto superior esquerdo) e desça até **Configurações**.
3. Toque na conta `paapsdiretoria@gmail.com`.
4. Toque em **Notificações de marcadores**.
5. Toque em `PROSPECÇÃO Respondeu` e ligue **Notificar**.

Se preferir silenciar o resto do e-mail e deixar só este passando, na mesma tela de
**Notificações** da conta escolha **Nenhuma** para a Caixa de entrada e mantenha o marcador
`PROSPECÇÃO Respondeu` ligado.

---

## Como testar que ficou de pé

O jeito honesto de testar é usar uma caixa sua que não seja o Gmail da diretoria:

1. De um e-mail pessoal qualquer, escreva para `relacionamento@paaps.com.br`.
2. Assunto: qualquer coisa. Corpo: qualquer coisa.
3. Em até um minuto deve chegar um e-mail no `paapsdiretoria@gmail.com` com assunto
   começando em `RESPOSTA:`, e o celular deve apitar.

Como esse endereço pessoal não está em `(EMP) Contato`, o aviso vai chegar marcado como
**fora do CRM**, e o CRM não será alterado. É o comportamento certo: ele avisa mesmo
quando não reconhece quem escreveu.

Para testar o caminho completo, com CRM e tudo, é preciso que a resposta venha do e-mail
de um contato cadastrado. Isso acontece naturalmente na primeira resposta de verdade.

---

## O que cada peça faz, se um dia precisar mexer

| Peça | Onde vive | Papel |
|---|---|---|
| `Prospecção - Retorno (quem respondeu)` | n8n, id `0SWJgkHYp5MCCIYq` | vigia a caixa, atualiza o CRM, dispara o aviso |
| `Titan IMAP (relacionamento@)` | credencial no n8n | a permissão de ler a caixa |
| `Notion PAAPS (CRM)` | credencial no n8n | a permissão de escrever no CRM |
| Filtro `PROSPECÇÃO Respondeu` | Gmail | o que faz o celular apitar |
| `com.mallu.aviso-resposta` | seu Mac | a notificação na tela, a cada 5 min |

Para desligar o aviso da tela sem mexer no resto, veja
`codigo/prospeccao-aviso/README.md`.
