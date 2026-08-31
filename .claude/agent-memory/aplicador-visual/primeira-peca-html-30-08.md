# Primeira peça montada em HTML — 30–31/08/2026

Até esta rodada, este agente estava escrito inteiro em torno do Canva/MCP. A peça "De quem
é esse trabalho" foi montada do zero em HTML/CSS puro e fotografada slide a slide com Chrome
headless (mesmo método de `.claude/skills/exporta-html-pdf/`), sem tocar no Canva. A Mallu
aprovou o resultado e decidiu que **HTML vira o caminho oficial**; Canva passa a ser exceção,
para quando ela quiser editar manualmente depois.

**O que rendeu 7 rodadas de correção**, cada uma nomeada em
`insumos-compartilhados/nucleo-comum/anatomia-do-carrossel-aprovado.md` (Parte 4): véu de
legibilidade em gradiente e em cor de marca (devia ser sólido e preto), sobrancelha acima do
título, legenda repetida ao lado do logo (era metadado de handoff, não texto pra renderizar),
frase inventada no fechamento de um slide, concordância quebrada entre slides vizinhos,
opacidade de textura errada três vezes seguidas até "estampa de onça", texto estourando a
borda por não conferir na imagem renderizada.

**O que fica de régua permanente**, com os números exatos calibrados contra print real dela:
véu preto sólido (nunca gradiente, nunca cor de marca), textura só na superfície clara
(Textura 4, `no-repeat`, `background-size:140%`, opacidade 0,05 por cima do que já vem no
arquivo), crédito de foto no topo esquerdo em Helvetica 16px, fonte de dado no rodapé
esquerdo em Helvetica 700, logo sempre no rodapé direito, nunca a linha `@perfil · tema`.

**Antes de calibrar visual pela segunda vez**, montar grade de teste isolada (HTML à parte,
várias combinações lado a lado) e escolher sozinho qual sobrevive, em vez de gastar uma
rodada dela por tentativa. Mesmo assim, a palavra final continua sendo o print real dela.

Ver `insumos-compartilhados/nucleo-comum/anatomia-do-carrossel-aprovado.md` para a peça
inteira, o texto de todos os 8 slides e a constituição visual completa.
