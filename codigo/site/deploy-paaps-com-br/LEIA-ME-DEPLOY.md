# Como colocar o site no ar em paaps.com.br

Esta pasta guarda **só esta instrução**. O site em si mora em `codigo/site/home/`, que é
onde ele é construído e editado.

## Antes de subir, peça o pacote

O pacote de publicação é **gerado na hora**, a partir de `home/`, para nunca subir uma
versão velha. Peça no chat: **"gera o pacote de deploy do site"**. Em segundos você recebe
uma pasta pronta, com a Home, as quatro páginas internas e tudo que o site precisa para
funcionar.

Antes existia uma cópia do site aqui dentro. Ela saiu porque cópia envelhece: ficavam dois
sites iguais no computador, e quem editasse o errado publicaria o que não quis.

Os formulários de cadastro (Contato e o de dentro de Como Atuamos) já estão ligados no Notion e no
seu e-mail. Não precisa configurar banco de dados nem nada: isso já está funcionando.

## Passo a passo (HostGator, pelo cPanel)

1. Entra no cPanel da conta HostGator onde o domínio paaps.com.br está apontado.
2. Abre o **"Gerenciador de Arquivos"** (File Manager).
3. Entra na pasta **`public_html`** (é a pasta que o domínio paaps.com.br mostra pra quem visita).
4. **Se já existir o site antigo em WordPress ali dentro:** mova tudo que já existe pra uma pasta
   de backup antes de continuar (ex.: cria uma pasta `_wordpress-antigo` e arrasta tudo pra lá). Não
   apague nada, só tira do caminho, pra poder voltar se precisar.
5. Envia (upload) o arquivo **`paaps-site-deploy.zip`** (está aqui do lado deste LEIA-ME) para
   dentro de `public_html`. É só esse um arquivo, não precisa selecionar os 98 arquivos um por um.
6. Ainda dentro do Gerenciador de Arquivos, clica com o botão direito em `paaps-site-deploy.zip`
   e escolhe **"Extract"** (Extrair). Ele extrai o `index.html` e as pastas direto dentro de
   `public_html`.
7. Apaga o `paaps-site-deploy.zip` de dentro de `public_html` depois de extrair (só ele, não as
   pastas que saíram dele).
8. Pronto. Abre paaps.com.br no navegador pra conferir.

Se o domínio ainda não estiver apontando pra essa conta HostGator (às vezes o registro.br aponta
pra outro lugar), isso é configuração de DNS no registro.br, separada deste passo a passo — me avisa
se precisar de ajuda com isso, é rápido de checar.

## Depois de subir, testar isto (2 minutos)

- Abrir as 5 páginas pelo menu: Home, Como Atuamos, Treinamentos, Urgências e Eventos Extremos,
  Contato.
- Preencher o formulário da página Contato uma vez, de teste, e conferir que:
  - Apareceu a mensagem "Recebemos o seu cadastro" no lugar do formulário.
  - Chegou um e-mail de aviso na sua caixa.
  - O cadastro apareceu no Notion, na base (EMP) Leads.
- Testar o menu no celular (as três linhas no canto), abrir e fechar.

Se algo não bater com isso, me chama antes de considerar o deploy fechado.
