# Assinatura de e-mail PAAPS

Duas variantes, ambas em PNG pronto para colar no e-mail:

| Arquivo | Variante | Quando usar |
|---|---|---|
| `assinatura-paaps-a-campo.png` | **A - Campo.** Foto do PhotoBank em monocromia quente, à esquerda | Prospecção, primeiro contato, quem ainda não conhece a PAAPS: mostra o trabalho antes de falar dele |
| `assinatura-paaps-b-editorial.png` | **B - Editorial.** Sem foto, painel marrom com o logo em branco | Conversa já em andamento, troca institucional, e-mail curto do dia a dia |

Tamanho de tela: 620 × 252 px (A) e 620 × 222 px (B).
Arquivo exportado em 2× (1244 px e 1240 px de largura) para não serrilhar em tela retina.

---

## Como colocar no e-mail

### Titan (relacionamento@paaps.com.br)

1. Abrir o webmail do Titan e clicar na engrenagem (canto superior direito) → **Configurações**.
2. Ir em **Assinatura** e ligar a opção de assinatura.
3. Na barra do editor, clicar no ícone de **imagem** e escolher o PNG desta pasta.
4. Salvar. O Titan já insere a assinatura em todo e-mail novo.

### Gmail

1. Engrenagem → **Ver todas as configurações** → aba **Geral**.
2. Rolar até **Assinatura** → **Criar nova**.
3. Clicar no ícone de imagem na barra do editor, aba **Upload**, escolher o PNG.
4. Escolher a assinatura criada em "PARA NOVOS E-MAILS" e em "PARA RESPOSTA/ENCAMINHAMENTO".
5. Rolar até o fim da página e clicar **Salvar alterações**.

### Detalhe importante

Assinatura em PNG é imagem: os links **não** ficam clicáveis. Duas saídas:

- deixar como está (o endereço fica legível, a pessoa copia); ou
- colocar a imagem e, logo abaixo dela, uma linha de texto simples com o link do site e do WhatsApp.

Se em algum momento a assinatura precisar ser toda clicável, é preciso a versão em HTML em vez de PNG. É só pedir.

---

## Como o arquivo foi construído

- `assinatura-a-campo.html` e `assinatura-b-editorial.html`: a peça em si.
- `base.css`: paleta, tipografia e os elementos de marca (divisor tricolor, marcadores quadrados, grão), tudo conforme `nucleo-comum/identidade-aplicada.md`. Nenhuma cor fora da paleta, nenhum `border-radius` acima de 4px, sombra nenhuma: só bordas, como manda o sistema Periódico.
- `assets/`: logo (marrom+colorido e branco), League Spartan e a foto tratada.

### Regenerar os PNG depois de editar o HTML

Copiar e colar no Terminal, com a pasta do projeto aberta:

```bash
cd "/Users/mac/Documents/SITE PAAPS/insumos-compartilhados/assinatura-email"
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=2 --default-background-color=00000000 \
  --window-size=622,254 --screenshot=assinatura-paaps-a-campo.png assinatura-a-campo.html
"$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=2 --default-background-color=00000000 \
  --window-size=622,224 --screenshot=assinatura-paaps-b-editorial.png assinatura-b-editorial.html
```

Se a altura do cartão mudar no CSS, mudar também o `--window-size` (largura e altura do cartão + 2px de borda).

### Trocar nome, cargo ou contato

Abrir o `.html` no TextEdit e mexer só no texto entre as tags, na parte de baixo do arquivo:
`Mallu Vasconcellos`, `CEO Founder · Psicóloga social` e as três linhas de contato. Depois rodar o comando acima.

### Trocar a foto da variante A

A foto atual é a entrada **"paaps - vivência 1 - Roda"** do PhotoBank PAAPS no Notion
(arquivo de origem `DSC03075-3.jpg`, acervo próprio, roda em Bela Vista de Minas).
Corte quadrado central, sem rosto em primeiro plano, tratada em monocromia quente pelo CSS
(a convenção de foto P&B da marca; o tratamento é feito na hora de gerar o PNG, o arquivo em
`assets/` continua original).

Para trocar: substituir `assets/foto-photobank.jpg` por outro quadrado do PhotoBank e regenerar.
Antes de usar qualquer foto de pessoa identificável em peça pública, vale a regra dura do
PhotoBank: licença de acervo não é autorização de uso de imagem.
