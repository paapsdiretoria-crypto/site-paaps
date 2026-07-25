# Assinatura de e-mail PAAPS

| Arquivo | Variante | Quando usar |
|---|---|---|
| `assinatura-paaps-a-montanha.png` / `.jpg` | **A - Montanha.** Foto da serra de Minas em cor cheia, lockup centrado, na mesma linguagem do banner institucional do site | Padrão. Prospecção, apresentação, primeiro contato |
| `assinatura-paaps-b-editorial.png` / `.jpg` | **B - Editorial.** Sem foto: painel marrom com o logo branco, dados no off-white arenoso | Conversa já em andamento, e-mail curto do dia a dia, quando a assinatura grande pesa |

Tamanho de tela: 640 × 348 px (A) e 620 × 222 px (B). Exportado em 2× para não serrilhar em
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
sips -s format jpeg -s formatOptions 82 assinatura-paaps-a-montanha.png --out assinatura-paaps-a-montanha.jpg
sips -s format jpeg -s formatOptions 88 assinatura-paaps-b-editorial.png --out assinatura-paaps-b-editorial.jpg
```

Se a altura do cartão mudar no CSS, mudar também o `--window-size`.

### Trocar nome, cargo, contato ou a chamada

Abrir o `.html` no TextEdit e mexer só no texto entre as tags, na parte de baixo do arquivo.
Depois rodar o comando acima.

### Trocar a foto

Substituir `assets/foto-montanha-minas.jpg` e regenerar. Se a nova foto tiver o horizonte em
outra altura, ajustar o `object-position` da regra `.cartao > .foto` no HTML: o segundo número
sobe ou desce o enquadramento, e o que importa é o logo cair sobre a parte escura da imagem.
