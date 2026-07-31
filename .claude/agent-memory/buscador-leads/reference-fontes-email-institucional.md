---
name: reference-fontes-email-institucional
description: Onde o e-mail institucional público costuma estar publicado, por tipo de órgão, e quais portais renderam ou vieram secos na varredura de prefeituras de MG
metadata:
  type: reference
---

# Onde o e-mail institucional mora, por tipo de órgão

Levantado na 1ª leva (jul/2026) e ampliado na 2ª leva (31/07/2026, norte de MG). Serve para
não varrer portal vazio de novo.

## Prefeituras de MG: as rotas que rendem

Não existe um CMS único. São **quatro famílias de CMS** convivendo. Tentar nesta ordem, e
não desistir na primeira 404:

1. `https://www.<cidade>.mg.gov.br/portal/secretarias` : página-índice com **nome do
   secretário + e-mail + telefone de cada secretaria** na mesma tela. É o filão.
   Rendeu em Diamantina, Salinas, Taiobeiras, Espinosa, Jaíba, Novo Cruzeiro.
2. `.../portal/secretarias/<id>/secretaria-municipal-de-<área>/` : ficha individual, mesmo
   conteúdo. Rendeu em Salinas.
3. `https://<cidade>.mg.gov.br/prefeitura/secretarias-estrutura-organizacional` : variante
   com nome do titular por secretaria. Rendeu em Porteirinha (trouxe Administração, Saúde
   e Assistência Social de uma vez).
4. `https://<cidade>.mg.gov.br/estrutura-organizacional/secretaria-de-<área>` : ficha por
   secretaria. Rendeu em Monte Azul.
5. `https://<cidade>.mg.gov.br/<área>/` (WordPress, sem prefixo): rota curtíssima, uma
   página por secretaria com titular + e-mail. Rendeu em Riacho dos Machados
   (`/administracao/`, `/saude/`), enquanto o `/secretarias/` do mesmo site só trazia o
   e-mail geral. **Quando o índice não tem nome, ir na página individual.**
6. `https://<cidade>.mg.gov.br/secretariasAll` : variante. Rendeu em Bocaiúva.
7. `.../cidade/telefones-uteis` : rede de segurança, mas costuma trazer só `gabinete@` e
   `prefeitura@`.

Prefixos reais já encontrados: `saude@`, `secsaude@`, `gestaosaude@`, `smas.saude@`,
`gabinete@`, `administracao@`, `social@`, `governo@`, `setorpessoal@`, `ouvidoria@`.
Não há padrão único, nem entre municípios vizinhos. Confirma a regra de nunca deduzir.

Cuidado: parte das prefeituras publica e-mail de secretaria em **gmail** (Espinosa: saúde e
assistência social). É publicado em fonte oficial, mas prefira o endereço no domínio
`.mg.gov.br` quando houver os dois na mesma página.

## Duas armadilhas novas do WebFetch (2ª leva)

- **Bloqueio de período eleitoral.** Sites de prefeitura de MG passaram a devolver
  "PERÍODO ELEITORAL: Conteúdo bloqueado conforme a legislação durante o período eleitoral
  de 20/07/2026 a 06/10/2026" no lugar do corpo das **notícias**. Páginas institucionais
  (secretarias, leis/decretos, serviços) continuam abrindo. Efeito prático: até outubro de
  2026, **gancho local não sai de notícia**; sai de lei/decreto, página de estrutura da
  rede de saúde e lista de unidades. Aconteceu em Taiobeiras.
- **E-mail ofuscado pelo CMS.** Alguns portais protegem o endereço e o WebFetch devolve
  literalmente `[email protected]`. Aconteceu em Rio Pardo de Minas e Novo Cruzeiro. O
  e-mail existe mas não é legível por essa rota: ou achar outra página do mesmo site, ou
  deixar o município de fora. **Nunca reconstruir o endereço por dedução.**

## Domínio: conferir antes de concluir que o município não tem site

O domínio nem sempre é o nome da cidade. Rio Pardo de Minas responde em
`riopardo.mg.gov.br`, e `riopardodeminas.mg.gov.br` **não resolve DNS**. Quando der
ENOTFOUND ou 404, buscar o domínio real antes de desistir.

## Associações de municípios (AMM e congêneres)

- Página `/contato` traz e-mail geral e o de comunicação.
- Nome e mandato do presidente saem da sala de imprensa da própria entidade.
- Domínio duplo: a AMM responde em dois domínios, e um devolve 404 em rota que existe no
  outro. Tentar o domínio irmão antes de concluir que a página não existe.

## Fontes secas (não repetir)

- `cidades-e-estados` do IBGE por WebFetch: **403**. Não insistir.
- Páginas `panorama` do IBGE Cidades: renderizadas por JS.
- Agregadores privados (prefeituras.org, cidade-brasil): o e-mail bate com o oficial, mas
  não valem como citação. Só servem para achar a rota; citar sempre a página `.gov.br`.
- Notícias do SES-MG por URL direta: `saude.mg.gov.br/.../story/<id>-<slug>` aparece na
  busca mas devolve **404** no WebFetch, nos dois domínios (com e sem `www`). Serve para
  saber que o fato existe, não para citar.
- Sinal legislativo de saúde mental do servidor por busca aberta: **seco** em 9 municípios
  já testados do norte/nordeste de MG. O caminho é o Diário Oficial dos Municípios
  Mineiros, não o buscador.
- `graomogol.mg.gov.br/portal/secretarias`: a página existe mas não publica contato por
  secretaria.
- `coracaodejesus.mg.gov.br/portal/secretarias`: lista as 9 secretarias sem nome nem
  e-mail próprio; só um gmail geral de gabinete.

## Onde o gancho local costuma estar (com o bloqueio eleitoral ativo)

Por ordem de rendimento na 2ª leva:

1. `/portal/leis_decretos/<id>/` : decreto de convocação de conferência municipal, decreto
   de nomeação de concurso. O de nomeação é ouro, porque costuma detalhar a exigência de
   **atestado de sanidade física e mental** e inspeção médica admissional.
2. `/cidadao/unidades-de-saude` ou `/postos-de-saude-e-hospitais` : lista das unidades com
   CNES. Dá para ver se o município tem CAPS ou não, e quantas ESF. **A ausência de CAPS é
   gancho tão bom quanto a presença**, porque joga a demanda de saúde mental na atenção
   básica.
3. Página da própria Secretaria de Saúde: quando ela lista "Saúde Mental" como
   departamento da estrutura, isso já é fato citável.

Ver [[project-organizacoes-varridas]].
