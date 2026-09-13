# Ciclo 2026-09-02 — Carrossel completo da semana, @paaps.brasil

Rodada em sandbox de nuvem, sem Mac local, sem webhook n8n (bloqueado pela política de rede
da sessão), sem MODO 1B do PhotoBank. Todas as fotos vieram do MODO 1C (Google Drive, acervo
próprio da PAAPS), documentado em cada `fotos-pecaN.md`. Duas pautas foram descartadas em
tempo real por correção da Mallu (ver histórico abaixo) antes de chegar à versão final.

## Os 3 ângulos, e por que são de fato distintos

| # | Peça | Ângulo | O que o distingue dos outros dois |
|---|---|---|---|
| 1 | Carrossel, 8 slides | O INSS, única instituição do Brasil que confere reconhecimento oficial ao sofrimento psíquico do trabalho, perdeu 56% do próprio quadro em 20 anos e seus servidores vivem onda de burnout | Foco institucional: uma organização específica que falha em cuidar de quem cuida por dentro, enquanto processa o cuidado de fora |
| 2 | Carrossel, 8 slides | A rotatividade de quase 40% dos Agentes Comunitários de Saúde, a ponta viva do SUS | Foco na categoria profissional mais precarizada da rede, e no desenho legal que converte vínculo comunitário em pré-requisito de trabalho não remunerado como tal |
| 3 | Card único | O Brasil envelhece em todo o território, mas a rede de cuidado ao idoso cresceu só onde o Estado já era historicamente forte (Sul/Sudeste) | Foco demográfico e federativo: o tamanho da demanda de cuidado que está vindo, não quem já está sustentando cuidado hoje |

Nenhuma das três compartilha mediação central com as outras: a Peça 1 é sobre reconhecimento
assimétrico dentro de uma instituição; a Peça 2 é sobre um vínculo social convertido em
pré-requisito de contratação; a Peça 3 é sobre desigualdade federativa de investimento público.

## Histórico: duas pautas descartadas antes da versão final da Peça 1

1. **NR-1 aplicada ao servidor público estatutário.** Primeira tentativa da Peça 1 argumentava
   que a NR-1 passaria a proteger o servidor público a partir de mai/2026. A Mallu corrigiu
   pessoalmente: "NR-1 não entra no serviço público". Peça descartada inteira, sem reaproveitar
   nenhuma frase.
2. **Dado de 2025 desatualizado.** Segunda tentativa usava o levantamento ANAMT/INSS (divulgado
   em jan/2026, sobre dados de 2025) como se fosse atualidade. A Mallu reclamou: estamos em
   setembro de 2026, é notícia velha. Descartada, substituída pela reportagem da Agência Pública
   (mar/2026) sobre o próprio INSS, ainda em curso (CPI aberta).

## Notas do Crítico de Conteúdo (nota final de cada peça)

- **Peça 1 (INSS):** 35 → 87 → **100/100** em 4 rodadas. Achados corrigidos: dado sem fonte
  visível no slide, figura retórica repetida, pergunta de capa ecoada 4x, vazio de agência
  ("ninguém mede"), zero voz humana real (resolvido com a fala real e verificada de Miucha
  Cicaroni, servidora do INSS, Agência Pública mar/2026), duas frases de impacto no mesmo bloco,
  e um intervalo de calendário (2006-2026) inventado a partir de "vinte anos" que a fonte não
  confirma com ano-base exato.
- **Peça 2 (ACS):** 45 → **97/100** em 2 rodadas. Achados corrigidos: atribuição de citação
  (era "fala de campo", na verdade "comentário público"), figura de negação por contraste
  repetida, slide 6 empilhando mais de uma frase de impacto, academicismo não traduzido
  (referência a Foucault sem explicação), concordância de gênero quebrada entre slides.
- **Peça 3 (card envelhecimento):** 83 → **97/100** em 2 rodadas. Achados corrigidos: alegação
  de centros-dia por cidade sem fonte específica amarrada, cadeia de fonte dos números
  demográficos precisava citar o IBGE como origem primária, não só o jornal.

## Fotos: o que é real, o que é escolha de segunda opção

- **Peça 1 (INSS):** as 8 fotos são TODAS substituição documental (acervo Bela Vista de
  Minas/Refazenda). Não existe, nesta sessão de nuvem, nenhum acervo de ambiente institucional
  do INSS (escritório, fila, guichê). Detalhes em `fotos-peca1.md`.
- **Peça 2 (ACS):** slides 4 e 6 têm foto real e adequada à cena pedida (evento em Bela Vista
  de Minas). Slides 1, 2, 3, 5, 7, 8 são escolha de segunda opção: o acervo de campo
  específico de ACS (rua, porta, casa, visita domiciliar) só existe no Mac local da Mallu,
  fora de alcance aqui. Detalhes em `fotos-peca2.md`.
- **Peça 3 (card):** 1 foto real (vínculo intergeracional, acervo Bela Vista), com alertas
  abertos: licença não declarada, projeto de origem incerto, rosto identificável sem
  consentimento confirmado. Detalhes em `fotos-peca3.md`.

## Reel

Roteiro em `roteiro-reel.md`: aprofunda a Peça 1 (INSS), generalizando a pergunta final do
carrossel para qualquer órgão da rede que quem assiste reconheça. Não abre tema novo.

## Entrega

PNGs finais das 3 peças enviados diretamente à Mallu (SendUserFile), não pelo Drive: o upload
direto via `mcp__Google_Drive__create_file` exige colar o binário inteiro em base64 dentro da
própria chamada de ferramenta, sem parâmetro de caminho de arquivo, e para PNGs de 900KB-1,7MB
isso ultrapassa de forma não confiável o que cabe numa única geração de texto (documentado em
`.claude/agent-memory/aplicador-visual/limite-upload-drive-sandbox-02-09.md`). Pastas do post
foram criadas no Drive (algumas vazias, uma com upload parcial), mas o link não substitui os
arquivos que a Mallu já recebeu diretamente no chat.
