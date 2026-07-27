---
name: reference-fontes-email-institucional
description: Onde o e-mail institucional público costuma estar publicado, por tipo de órgão, e quais portais renderam ou vieram secos na varredura de MG
metadata:
  type: reference
---

# Onde o e-mail institucional mora, por tipo de órgão

Levantado na 1ª leva de prospecção fria (interior de MG, jul/2026). Serve para não varrer
portal vazio de novo.

## Prefeituras de MG: o padrão que mais rende

A maioria das prefeituras mineiras de porte pequeno/médio usa um CMS municipal com rota
previsível. Tentar nesta ordem:

1. `https://www.<cidade>.mg.gov.br/portal/secretarias` : página-índice com **nome do
   secretário + e-mail + telefone de cada secretaria**, tudo na mesma tela. É o filão.
   Funcionou em Diamantina e Salinas.
2. `https://www.<cidade>.mg.gov.br/portal/secretarias/<id>/secretaria-municipal-de-saude/`
   : ficha individual da secretaria, mesmo conteúdo. Funcionou em Salinas.
3. `https://<cidade>.mg.gov.br/secretariasAll` : variante de CMS. Funcionou em Bocaiúva.
4. `https://<cidade>.mg.gov.br/prefeitura/secretaria/saude` : outra variante. Funcionou em
   Janaúba, e foi a única rota que trouxe o e-mail da saúde de lá.
5. `.../cidade/telefones-uteis` : lista longa de e-mails da prefeitura inteira. Serve de
   rede de segurança quando a página da secretaria não traz e-mail próprio, mas costuma
   trazer só `gabinete@` e `prefeitura@`, não o da saúde.

Aprendizado duro: a página `telefones-uteis` de Janaúba **não** listava o e-mail da saúde,
e a página da secretaria listava. Não desistir na primeira rota.

Prefixos reais encontrados: `saude@`, `secsaude@`, `gabinete@`, `administracao@`,
`setorpessoal@`. Não há padrão único: `saude@` e `secsaude@` convivem entre municípios
vizinhos. Isso confirma a regra de nunca deduzir endereço por padrão.

## Associações de municípios (AMM e congêneres)

- Página `/contato` do portal traz o e-mail geral institucional e o de comunicação.
- O nome e o mandato do presidente saem da própria sala de imprensa da entidade (notícia
  de eleição e de posse), que é fonte oficial da entidade.
- Cuidado com domínio duplo: a AMM responde em dois domínios ao mesmo tempo, e um deles
  devolve 404 em rotas que existem no outro. Se der 404, tentar o domínio irmão antes de
  concluir que a página não existe.

## Fontes secas (não repetir)

- `cidades-e-estados` do IBGE por WebFetch: devolve **403**. Não insistir.
- Páginas `panorama` do IBGE Cidades: renderizadas por JS, não servem para leitura direta.
- Agregadores privados de dados de prefeitura: trazem e-mail que bate com o oficial, mas
  não valem como fonte citável. Só servem para achar a rota; a citação tem que ser a
  página `.gov.br`.
- Busca por sinal legislativo de saúde mental do servidor nesses 4 municípios: **seca**.
  As câmaras de Diamantina, Salinas, Bocaiúva e Janaúba não têm sistema de proposições
  indexado por busca. Para achar sinal legislativo em cidade pequena de MG, o caminho é o
  Diário Oficial dos Municípios Mineiros, não o buscador aberto.

## O que sempre funciona para porte

API do IBGE, direto, sem passar pelo site:
`https://servicodados.ibge.gov.br/api/v3/agregados/4714/periodos/2022/variaveis/93?localidades=N6[<codigo>]`
devolve a população do Censo 2022. Achar o código em
`https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios`.
Não chutar código IBGE: chutei dois e caí em Santa Luzia e Boa Esperança.

Ver [[project-organizacoes-varridas]].
