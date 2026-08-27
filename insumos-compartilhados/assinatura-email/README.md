# Assinatura de e-mail PAAPS

| Arquivo | Variante | Quando usar |
|---|---|---|
| `assinatura-paaps-a-montanha.png` / `.jpg` | **A - Montanha.** Foto da serra de Minas em cor cheia, lockup centrado, na mesma linguagem do banner institucional do site | Padrão. Prospecção, apresentação, primeiro contato |
| `assinatura-email-640.jpg` | **A comprimida para envio automático.** Mesmo desenho, compressão mais firme (106 KB contra 247 KB) | É esta que a automação usa. Não trocar por engano pelas de cima |
| `assinatura-paaps-b-editorial.png` / `.jpg` | **B - Editorial.** Sem foto: painel marrom com o logo branco, dados no off-white arenoso | Conversa já em andamento, e-mail curto do dia a dia, quando a assinatura grande pesa |
| `assinatura-pesquisa-mallu.png` / `.jpg` | **Pesquisa (acadêmica).** Não é assinatura PAAPS: sem logo, sem @paaps.brasil, sem LinkedIn da empresa, sem as linhas de posicionamento. Marrom sobre papel, filete vertical, `PESQUISADORA · PSICOLOGIA PUC MINAS` | **Só** nos e-mails da pesquisa de TCC da Mallu. Nunca em e-mail institucional ou de prospecção. Ver `automacoes/pesquisa-tcc-bh/PLANO.md` |

> **Aprovada em 26/07/2026** como assinatura padrão dos e-mails, inclusive os da
> prospecção fria disparada pelo n8n.

Tamanho de tela: 640 × 348 px (A), 620 × 222 px (B) e 480 × 184 px (pesquisa). Exportado em 2× para não serrilhar em
tela retina.

**Use o `.jpg` no e-mail.** É o mesmo desenho, muito mais leve (A: 247 KB contra 1,1 MB do PNG).
Assinatura pesada demora a carregar e alguns servidores cortam. O PNG fica guardado como
arquivo-mestre.

---

## Como colocar no e-mail

### Titan (relacionamento@paaps.com.br)

1. Abrir o webmail do Titan e clicar na engrenagem (canto superior direito) → **Configurações**.
2. Ir em **Assinatura** e ligar a opção de assinatura.
3. Na barra do editor, clicar no ícone de **imagem** e escolher o arquivo `.jpg` desta pasta.
4. Salvar. O Titan passa a inserir a assinatura em todo e-mail novo.

### Gmail

1. Engrenagem → **Ver todas as configurações** → aba **Geral**.
2. Rolar até **Assinatura** → **Criar nova**.
3. Clicar no ícone de imagem na barra do editor, aba **Upload**, escolher o `.jpg`.
4. Escolher a assinatura criada em "PARA NOVOS E-MAILS" e em "PARA RESPOSTA/ENCAMINHAMENTO".
5. Rolar até o fim da página e clicar **Salvar alterações**.

### Detalhe importante

Assinatura em imagem não tem link clicável: o endereço fica legível, mas a pessoa precisa
copiar. Duas saídas: deixar assim, ou colar a imagem e escrever abaixo dela uma linha de texto
simples com o site e o WhatsApp. Se a assinatura precisar ser toda clicável, é preciso a versão
em HTML em vez de imagem. É só pedir.

### Nos e-mails que o n8n dispara (prospecção fria)

Aqui não tem passo manual: a assinatura já entra sozinha em todo e-mail da leva.

Como está montado, em uma frase: um workflow do n8n guarda a imagem e a serve numa URL
fixa; o workflow da leva busca essa URL e embute a imagem no e-mail.

| Peça | Onde |
|---|---|
| Workflow que guarda a imagem | n8n, `PAAPS - Asset: assinatura de e-mail` (ativo) |
| URL fixa da assinatura | `https://n8n.srv1850231.hstgr.cloud/webhook/assinatura-paaps` |
| Molde do e-mail | `automacoes/prospeccao-email/template-email.html` |

**Para trocar a assinatura dos e-mails automáticos:** regenerar a imagem (comando mais
abaixo), depois rodar no Terminal:

```bash
cd "/Users/mac/Documents/SITE PAAPS"
node automacoes/prospeccao-email/n8n/criar-asset-assinatura.mjs
```

Isso substitui a imagem no n8n. Não precisa mexer em workflow nenhum: as levas seguintes
já saem com a assinatura nova.

**Duas decisões de construção, para quem for mexer depois:**

1. A imagem vai **embutida** no e-mail, não como link para um servidor. Webmail de
   prefeitura costuma bloquear imagem que vem de fora, e a assinatura chegaria como um
   quadrado vazio.
2. Abaixo da imagem vai o **mesmo contato em texto**, clicável. Se ainda assim algum
   cliente de e-mail bloquear a imagem, o e-mail continua tendo endereço, telefone e site
   legíveis. Nunca tirar essa linha achando que é repetição: ela é o plano B.

---

## O desenho

A variante A copia a linguagem do banner institucional do site: foto da serra **em cor cheia**,
tudo centrado num eixo, chamada em terracota em caixa baixa com ponto final, linha de
posicionamento em branco caixa alta espaçada, logo branco com os pontinhos coloridos apoiado na
crista da montanha. O contato entra abaixo do logo, sobre a parte escura da imagem.

Foto: `montanha.webp` do site (`paaps.com.br/wp-content/uploads/2026/01/montanha.webp`), salva
em `assets/foto-montanha-minas.jpg`. Sem filtro: cor original.

Logo: sempre a versão com **pontinhos coloridos**. Marrom + colorido em fundo claro, branco +
colorido em fundo escuro. Nunca a que traz o descritivo embaixo (ver
`nucleo-comum/identidade-aplicada.md` seção 3.1).

Arquivos-fonte: `assinatura-a-montanha.html`, `assinatura-b-editorial.html` e `base.css`
(paleta, League Spartan, divisor tricolor, marcadores quadrados, grão).

### Regenerar os arquivos depois de editar o HTML

Copiar e colar no Terminal:

```bash
cd "/Users/mac/Documents/SITE PAAPS/insumos-compartilhados/assinatura-email"
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=2 --default-background-color=00000000 \
  --window-size=640,348 --screenshot=assinatura-paaps-a-montanha.png assinatura-a-montanha.html
"$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=2 --default-background-color=00000000 \
  --window-size=622,224 --screenshot=assinatura-paaps-b-editorial.png assinatura-b-editorial.html
"$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=2 --default-background-color=00000000 \
  --window-size=482,186 --screenshot=assinatura-pesquisa-mallu.png assinatura-pesquisa-mallu.html
sips -s format jpeg -s formatOptions 82 assinatura-paaps-a-montanha.png --out assinatura-paaps-a-montanha.jpg
sips -s format jpeg -s formatOptions 88 assinatura-paaps-b-editorial.png --out assinatura-paaps-b-editorial.jpg
sips -s format jpeg -s formatOptions 88 assinatura-pesquisa-mallu.png --out assinatura-pesquisa-mallu.jpg
```

Se a altura do cartão mudar no CSS, mudar também o `--window-size`.

> **Armadilha do cartão de pesquisa:** o filete horizontal (`.risco`) é um `div` de 1px dentro
> de um flex column. Se a altura do cartão ficar menor que o conteúdo, ele encolhe para zero e
> some do render, sem erro nenhum. Por isso ele leva `flex:none`. Ao mexer no texto, conferir
> se a linha continua aparecendo antes de dar por pronto.

### Trocar nome, cargo, contato ou a chamada

Abrir o `.html` no TextEdit e mexer só no texto entre as tags, na parte de baixo do arquivo.
Depois rodar o comando acima.

### Trocar a foto

Substituir `assets/foto-montanha-minas.jpg` e regenerar. Se a nova foto tiver o horizonte em
outra altura, ajustar o `object-position` da regra `.cartao > .foto` no HTML: o segundo número
sobe ou desce o enquadramento, e o que importa é o logo cair sobre a parte escura da imagem.
