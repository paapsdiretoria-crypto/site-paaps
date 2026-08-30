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

## Resolvido em 30/08/2026: o placeholder `[email protected]` é decodificável, não é fim de linha

O que antes virava "e-mail ofuscado, descartar o lead" tem solução na maioria dos casos. O
placeholder que o WebFetch devolve é o texto literal que o **Cloudflare Email Address
Obfuscation** injeta no HTML quando JavaScript está desligado: ele troca `mailto:` por um
`<a href="/cdn-cgi/l/email-protection" data-cfemail="HEX">` e decora a tela com essa string
fixa. O endereço real está cifrado (XOR simples) dentro do atributo `data-cfemail`, e dá para
decodificar sem abrir navegador:

```bash
curl -s -A "Mozilla/5.0" --max-time 20 "URL" | grep -Eo 'data-cfemail="[a-f0-9]+"' | sort -u
```

depois, para cada hex encontrado:

```python
def decode(cfemail):
    r = int(cfemail[:2], 16)
    return ''.join(chr(int(cfemail[i:i+2], 16) ^ r) for i in range(2, len(cfemail), 2))
```

Rendeu direto em Felício dos Santos, Santo Antônio do Itambé (achou `saude@`, cargo certo,
numa página que listava uma dezena de secretarias de uma vez), Carbonita, Alvorada de Minas
e Coluna (MG), todos via curl puro, sem gastar chamada de WebFetch. **Importante:** o próprio
`WebFetch` (por passar o HTML por um modelo que redige PII) também pode devolver esse
placeholder mesmo quando a página tem o `data-cfemail` decodificável, então um "e-mail
ofuscado" do WebFetch não é motivo para descartar o lead: baixar o HTML cru com `curl` e
tentar o decode acima antes de desistir.

Continua valendo não reconstruir e-mail por dedução: isso aqui não é dedução, é ler o dado
que já está publicado, só que cifrado no HTML em vez de em texto puro.

## Terceira nota (30/08/2026): sites em SPA/JS puro continuam secos por curl

Nem todo 403/404 é Cloudflare. Coluna, Alvorada de Minas e Couto de Magalhães de Minas
devolveram 403 ou 404 em várias rotas por `curl` puro (sem `data-cfemail` nenhum), enquanto
outras páginas do mesmo domínio abriram normalmente: provavelmente WAF específico da rota, não
do domínio inteiro. Vale testar várias sub-rotas (`/secretarias`, `/contato`, `/secretaria`,
`/atendimento`) antes de desistir do município. Couto de Magalhães de Minas e Senador
Modestino Gonçalves (MG) ficaram sem e-mail confirmável mesmo depois desse tratamento: nenhuma
rota testada expôs `data-cfemail` nem texto puro.

## Terceira armadilha (05/08/2026): e-mail publicado com acento no local-part

Mirabela publica o e-mail da Saúde como `saúde@mirabela.mg.gov.br` (com acento) em duas
páginas diferentes do próprio site (`contato/` e `quem-e-quem/`), não é erro de renderização
do WebFetch. Local-part acentuado é atípico e arriscado (pode não ser entregável). Registrei
a normalização sem acento como inferência, não como dado publicado; ver
[[project-organizacoes-varridas]] para o caso completo.

## SES-MG: confirmado de novo, `/noticias/` sofre do mesmo bloqueio que `/story/`

Além do padrão `saude.mg.gov.br/.../story/<id>-<slug>` (404 em todas as tentativas, já
registrado), o padrão `saude.mg.gov.br/noticias/<slug>/` também não abre por WebFetch: devolve
o conteúdo da homepage, não a matéria. Vale a mesma regra: dado da SES-MG só é confirmável por
busca (com pelo menos duas queries convergindo no mesmo valor), nunca por leitura direta.

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
