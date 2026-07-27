# Os scripts do n8n da prospecção

Tudo aqui roda com `node <arquivo>` a partir da raiz do projeto. Nenhum deles pede
conhecimento técnico: é copiar, colar no Terminal e ler o que aparece.

| Script | O que faz | Quando rodar |
|---|---|---|
| `criar-credencial-notion.mjs` | Dá ao n8n acesso de escrita ao CRM | Uma vez só, e de novo se o token for trocado |
| `criar-asset-assinatura.mjs` | Publica a assinatura numa URL fixa | Sempre que a assinatura mudar |
| `montar-leva.mjs <data>` | Monta o workflow que dispara a leva | Toda vez que as cartas da leva mudarem |
| `previa-leva.mjs <data> <e-mail>` | Manda a leva inteira para um e-mail nosso | Antes de aprovar, para ler o que a prefeitura vai ler |
| `teste-assinatura.mjs <e-mail>` | Manda um e-mail de teste do molde | Só quando mexer no `template-email.html` |

## A ordem, quando é tudo novo

```bash
cd "/Users/mac/Documents/SITE PAAPS"
node automacoes/prospeccao-email/n8n/criar-credencial-notion.mjs
node automacoes/prospeccao-email/n8n/criar-asset-assinatura.mjs
node automacoes/prospeccao-email/n8n/montar-leva.mjs 2026-07-27
node automacoes/prospeccao-email/n8n/previa-leva.mjs 2026-07-27 paapsdiretoria@gmail.com
```

Depois de ler as prévias e aprovar, **ativar o workflow no n8n**. Ativar é o gate: enquanto
estiver desativado, a segunda-feira passa e nada sai.

## Onde mora cada coisa

- **A copy**: `levas/<data>/<municipio>.md`, seções `## Assunto` e `## Corpo`. É a única fonte
  do texto. Editar aqui e rodar `montar-leva.mjs` de novo.
- **A logística** (destinatário, ordem, horário, intervalo): `levas/<data>/leva.json`.
- **O molde HTML**: `../template-email.html`.
- **A assinatura**: `insumos-compartilhados/assinatura-email/assinatura-email-640.jpg`.

Editar direto no n8n é o caminho errado: na próxima vez que o `montar-leva.mjs` rodar, a
edição feita lá é sobrescrita. Editar sempre no repositório e rodar o script.

## Três armadilhas já pagas

1. **A marca `{{CORPO}}` só pode aparecer uma vez no molde.** Citada também num comentário, o
   script troca a citação e o e-mail sai com a marca crua no corpo. Já aconteceu. Hoje o script
   quebra de propósito se houver mais de uma.
2. **O tipo do anexo da assinatura é forçado no código.** A URL não termina em `.jpg`, então o
   anexo sairia como arquivo genérico e o cliente de e-mail penduraria um anexo misterioso em
   vez de desenhar a assinatura.
3. **E-mail que falhou não grava no CRM.** O registro está pendurado na saída de sucesso do
   envio. Se estivesse na saída comum, um envio que falhou marcaria o cooldown de 60 dias e o
   lead ficaria dois meses sem receber nada, por um e-mail que nunca chegou.
