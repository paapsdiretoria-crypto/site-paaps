# Moldes de e-mail

> Rascunho de trabalho, a co-construir com a fundadora.

Os moldes são os textos-base de e-mail com lacunas a preencher na personalização, do tipo
`{cidade}`, `{nome_da_secretaria}` e `{nome_do_gestor}`. Cada lacuna é substituída pelo
dado real do lead só na hora do envio, dentro do fluxo n8n; o dado real nunca fica escrito
neste repositório.

## Fonte da verdade: Notion

A copy final dos moldes vive na página do Notion **MENSAGENS DE PROSPECÇÃO**
(`https://app.notion.com/p/33c44cb52e00807185c6e7b3e7da5577`), já ligada ao CRM. Esta
pasta guarda a estrutura e as notas de uso, não a versão canônica do texto. Quando um
molde for versionado aqui para uso em fluxo, ele é importado do Notion, com a origem
registrada.

## Carta-Mallu: o molde-âncora

A Carta-Mallu (base no TCC PUC-Minas) é o molde-âncora da frente. Uso sempre com indicação
nomeada e personalização real, nunca massificada. O placeholder dela está em
`carta-mallu.md`.

## Lacunas conhecidas (rascunho)

| Lacuna | O que preenche |
|---|---|
| `{cidade}` | Município do lead |
| `{nome_da_secretaria}` | Secretaria-alvo dentro da prefeitura |
| `{nome_do_gestor}` | Nome de quem recebe (persona Cláudia Martins / RH Genuíno) |
| `{gancho_local}` | Fato verificável do município usado na personalização |

A lista completa de lacunas e as regras de fallback (o que fazer quando um dado falta)
ficam pendentes de definição com a fundadora.
