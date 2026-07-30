---
name: pede-segredo-a-mallu
description: Use quando um fluxo precisar de um segredo que só a Mallu tem (senha de e-mail, token, chave de API, senha de aplicativo) e ele ainda não estiver no `.env`. Ative em "falta a credencial X", "o workflow não liga porque falta senha", "preciso da chave da API", "crie a credencial no n8n", ou sempre que um script falhar por variável ausente no `.env`. Não use para segredo que já está no `.env` (leia de lá), nem para configurar permissão do macOS (isso é `ferramenta-local-mallu`).
---

# Pedir um segredo à Mallu sem nunca tocar nele

O segredo sai da cabeça dela e entra no `.env` sem passar por mim, sem passar pelo chat e sem ela precisar editar arquivo de configuração.

## Lei central

**EU NUNCA DIGITO O VALOR DE UM SEGREDO, E NUNCA MANDO A MALLU EDITAR O `.env` NA MÃO.**

Quem digita é ela, uma vez, numa janela do próprio Mac. Eu escrevo a ferramenta que recebe, guarda e testa.

## Gate: dois pontos onde você não passa

1. **Prestes a escrever o valor de um segredo em qualquer arquivo?** Pare. Mesmo que ela tenha colado no chat, mesmo que o arquivo seja ignorado pelo git, mesmo que ela peça. Credencial que passa por mim vira credencial que passa por um log.
2. **Prestes a mandar ela "abrir o `.env` e acrescentar uma linha"?** Pare. Ela não programa. Editar arquivo de configuração no lugar certo, com a sintaxe certa, é trabalho de programador, e ela vai travar ali.

## A falha que originou esta skill (30/07/2026)

Faltava `TITAN_SENHA` no `.env` para o n8n ler a caixa do `relacionamento@paaps.com.br`. Eu errei duas vezes seguidas:

1. Instruí: "abra `automacoes/.env` e acrescente uma linha `TITAN_SENHA=` seguido da senha". Ela não fez.
2. Ela colou a senha no chat. Recusei escrever, corretamente, e então repeti o mesmo erro em outra roupa: "abra no TextEdit e digite a linha". Resposta dela: "NÃO ENTENDI NADA DESSA PORRA DA SENHA TITAN, FAÇA DIREITO ESSE PASSO A PASSO, ABRIU NUM EDITOR DE TEXTO ALEATÓRIO".

O que funcionou na terceira: um arquivo `.command` que ela abriu com dois cliques, digitou a senha numa janelinha e pronto. Saída real: `conexão OK`, `credencial criada`, `workflow de retorno LIGADO`.

Recusar escrever o segredo estava certo. Devolver o trabalho técnico para ela estava errado. As duas coisas juntas é que fazem a skill.

## O processo

### 1. Confirme que o segredo falta mesmo

Nunca peça sem conferir. Um `grep -c '^NOME_DA_VARIAVEL=' automacoes/.env` responde. Pedir segredo que já está guardado queima a paciência dela e é a forma mais rápida de perder a confiança do fluxo.

### 2. Escreva um `.command` de duas ações

Salve em `automacoes/<frente>/` com nome em português, maiúsculas e espaços, dizendo o que faz: `SALVAR SENHA DO TITAN.command`. Ela vai achar isso no Finder; `setup-imap.sh` ela não acha.

O arquivo faz, nesta ordem:

1. `cd` para a raiz do repositório por caminho **relativo ao próprio script** (`$(dirname "$0")/../../..`), nunca caminho fixo. A pasta já mudou de lugar uma vez e quebrou automação.
2. Confere que o `.env` existe. Se não existe, avisa e para.
3. Pede o valor com uma janela do macOS, campo escondido:
   ```
   osascript -e 'display dialog "..." default answer "" with hidden answer ...'
   ```
   Com botão de Cancelar tratado: cancelou, nada é salvo.
4. Remove uma linha antiga da mesma variável, se houver, para não duplicar.
5. Garante quebra de linha no fim do arquivo antes de acrescentar.
6. Escreve a linha e faz `unset` da variável na memória do script.
7. **Testa de verdade**, chamando o script que usa aquele segredo.
8. Mostra o resultado numa janela: deu certo, ou o que faltou, em português.

### 3. Teste o que dá para testar sem o segredo

Antes de mandar para ela: `chmod +x`, `bash -n` para a sintaxe, e confira que o `cd` relativo acha mesmo o `.env`. Ela recebendo um arquivo que não abre é pior que não receber nada.

### 4. Entregue o arquivo, não o caminho

Mande o arquivo por `SendUserFile`, com uma legenda de duas linhas: o que acontece quando ela clica, e onde ele mora. Não descreva o conteúdo do script.

### 5. Confirme no sistema, não na saída do script

Depois que ela rodar, verifique na fonte: a credencial existe no n8n? O workflow ligou? A variável está no `.env` uma vez só? O `.env` continua ignorado pelo git? A saída do script diz o que o script quis dizer; a API diz o que aconteceu.

## Quando ela colar o segredo no chat mesmo assim

Vai acontecer. Faça as três coisas, sem sermão:

1. Não use o valor. Não escreva em arquivo nenhum.
2. Diga em uma frase por que, e mande o `.command`.
3. **Peça para ela trocar o segredo**, porque o histórico da conversa fica salvo.

## Teste antes de guardar, sempre

Credencial errada guardada é pior que credencial ausente: ela cria um fluxo que existe, parece pronto e falha em silêncio. O script do IMAP faz login de verdade antes de gravar qualquer coisa, e é por isso que ele é o modelo. Se o segredo não tem como ser testado, diga isso na janela final em vez de fingir sucesso.

## Racionalizações que sinalizam desvio

| Pensamento | O que está acontecendo |
|---|---|
| "Ela já colou aqui, é só copiar para o arquivo" | O valor passou pelo chat, o que já é ruim. Escrever agrava. Mande trocar o segredo. |
| "É uma linha só, ela consegue editar o `.env`" | Foi exatamente o que travou em 30/07, duas vezes. Ela não programa. |
| "O `.env` é ignorado pelo git, então não tem risco" | O risco não é o git, é o segredo passar por mim e pelo log. |
| "TextEdit resolve, é só abrir e digitar" | Editor de texto genérico com arquivo de configuração é trabalho de programador com outro nome. |
| "Peço agora e testo depois" | Credencial não testada vira fluxo que falha em silêncio. Teste dentro do mesmo clique. |
| "Escrevo o script mas mando ela rodar pelo terminal" | Dois cliques no Finder. Comando de terminal é a versão difícil da mesma coisa. |
| "Ela pediu, então posso" | O pedido dela não muda o que acontece com o valor depois. |
