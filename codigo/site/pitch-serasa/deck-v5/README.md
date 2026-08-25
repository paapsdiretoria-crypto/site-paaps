# pitch-paaps

Esta pasta é uma cópia do projeto aberto `pitch`, da empresa Midday
(https://github.com/midday-ai/pitch). Ela guarda o **desenho** do pitch deck deles:
o fundo quase preto, os cards, a grade, os tamanhos de letra e a navegação por
setas. O texto e as imagens que aparecem na tela ainda são os da Midday, em
inglês. Eles ficam aqui só como referência visual, para serem substituídos aos
poucos pelo conteúdo da PAAPS.

Nada nesta pasta se conecta com banco de dados, agenda ou serviço externo. Toda a
camada de dados do projeto original foi retirada: o que sobrou é desenho.

O que cada nível de letra, cor e medida significa está anotado no arquivo
`DESIGN-MIDDAY.md`, aqui do lado.

## Como abrir o deck no computador

Abra o aplicativo **Terminal** do Mac. Ele fica em Aplicativos, dentro da pasta
Utilitários; ou aperte Command e barra de espaço juntos, escreva `Terminal` e dê
Enter.

Copie e cole cada bloco abaixo no Terminal, um de cada vez, apertando Enter
depois de cada um e esperando ele terminar antes de passar para o próximo.

**Passo 1.** Entrar na pasta do projeto:

```
cd "/Users/mac/Documents/SITE PAAPS/codigo/pitch-paaps"
```

**Passo 2.** Instalar as peças que o projeto usa. Este passo só precisa ser feito
na primeira vez, e demora cerca de um minuto:

```
npm install
```

**Passo 3.** Ligar o deck:

```
npm run dev
```

Depois do passo 3 o Terminal vai mostrar uma linha parecida com
`Local: http://localhost:3000`. Abra o navegador e vá para esse endereço:

```
http://localhost:3000
```

O deck aparece em tela cheia. Passe de slide com as setas do teclado, ou com as
setinhas da barrinha que fica embaixo.

Se a tela aparecer branca em vez de preta, é o Mac que está no modo claro. O
desenho da Midday só existe em modo escuro. Vá em Ajustes do Sistema, Aparência,
e escolha Escuro.

## Como desligar

Volte para a janela do Terminal onde você escreveu `npm run dev` e aperte a tecla
**control** junto com a tecla **C**. O deck sai do ar na hora.

Da próxima vez que quiser abrir de novo, basta repetir o passo 1 e o passo 3. O
passo 2 não precisa ser refeito.

## O que foi retirado do projeto original

- A leitura das estrelas do GitHub e dos números de uso da Midday. Os números do
  slide de tração agora são fixos, escritos direto no arquivo
  `src/components/pitch/section-traction.tsx`, no alto do arquivo.
- O contador de visualizações, que na Midday vinha de um banco de dados. Agora é
  um número fixo em `src/components/pitch/pitch-carousel.tsx`.
- A agenda do Cal.com, que ocupava o último slide. No lugar dela ficou um card
  vazio, marcado como espaço reservado, em
  `src/components/pitch/section-book.tsx`.
- O arquivo de senhas e chaves (`.env-template`). O projeto não usa mais nenhuma
  chave, então não existe nada para configurar.

## Um aviso sobre o slide de demonstração

O quarto slide toca um vídeo que ainda está hospedado no servidor da Midday. Ele
depende de internet e um dia pode sair do ar, porque não é nosso. Quando o
conteúdo da PAAPS entrar, esse slide precisa apontar para um vídeo nosso ou ser
substituído por outra coisa.
