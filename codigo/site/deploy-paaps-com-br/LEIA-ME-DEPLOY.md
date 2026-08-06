# Como colocar o site no ar em paaps.com.br

Esta pasta é o site inteiro, pronto. Não precisa instalar nada, não precisa rodar nenhum comando:
é só subir o **conteúdo de dentro dela** (não a pasta em si) para o servidor.

## O que tem aqui dentro

- `index.html` : a Home
- `treinamentos/`, `como-atuamos/`, `urgencias/`, `contato/` : as outras 4 páginas
- `css/`, `js/`, `fontes/`, `img/` : tudo que o site precisa para funcionar

Os formulários de cadastro (Contato e o de dentro de Como Atuamos) já estão ligados no Notion e no
seu e-mail. Não precisa configurar banco de dados nem nada: isso já está funcionando.

## Passo a passo (HostGator, pelo cPanel)

1. Entra no cPanel da conta HostGator onde o domínio paaps.com.br está apontado.
2. Abre o **"Gerenciador de Arquivos"** (File Manager).
3. Entra na pasta **`public_html`** (é a pasta que o domínio paaps.com.br mostra pra quem visita).
4. **Se já existir o site antigo em WordPress ali dentro:** mova tudo que já existe pra uma pasta
   de backup antes de continuar (ex.: cria uma pasta `_wordpress-antigo` e arrasta tudo pra lá). Não
   apague nada, só tira do caminho, pra poder voltar se precisar.
5. Envia (upload) **todo o conteúdo de dentro desta pasta** `deploy-paaps-com-br` para dentro de
   `public_html` — os arquivos e pastas ficam soltos direto dentro de `public_html`, não dentro de
   uma subpasta `deploy-paaps-com-br/site/...`.
6. Pronto. Abre paaps.com.br no navegador pra conferir.

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
