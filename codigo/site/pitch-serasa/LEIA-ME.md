# Pitch Serasa Experian : Impulsiona Startups

Tudo do pitch da inscrição no Impulsiona Startups mora nesta pasta. São duas
versões do mesmo deck, vivas ao mesmo tempo, para poder comparar.

## As duas versões

**Versão 4, a de estudo.** `index-v4.html` mais `pitch.css`. Dezenove slides em
HTML e CSS puro. É onde está toda a pesquisa e todas as fontes. Congelada como
**pitch handout**, em `pitch-handout.html` mais `pitch-handout.css`, que roda
sozinha e não muda mais.

Para abrir:

```bash
cd "/Users/mac/Documents/SITE PAAPS/codigo/site" && python3 -m http.server 8080
```

Depois é só abrir `http://localhost:8080/pitch-serasa/index-v4.html` no navegador.

**Versão 5, a minimalista.** Pasta `deck-v5/`. Dezessete slides, construídos no
desenho da Midday, com as fotos de campo em tela cheia e o véu marrom da casa.

Para abrir:

```bash
cd "/Users/mac/Documents/SITE PAAPS/codigo/site/pitch-serasa/deck-v5" && npm run dev
```

Depois é só abrir `http://localhost:3210` no navegador. Para ver um slide
sozinho, `http://localhost:3210/slide/7`.

Para parar qualquer um dos dois, aperte `control` e `C` na janela do terminal.

## O que mais tem aqui

- `img/` : as fotos e os logos do deck antigo.
- Os arquivos `.md` : pesquisa de mercado, modelo de negócio, cálculo de
  TAM/SAM/SOM, análise financeira e as especificações slide a slide.
- `PAAPS-pitch-impulsiona-serasa.pdf` : a exportação da versão 4.
