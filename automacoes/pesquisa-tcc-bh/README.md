# Pesquisa de TCC : e-mails para a rede socioassistencial de BH

Campanha da pesquisa da Mallu, **não** da PAAPS. Quem assina é a pesquisadora.
O raciocínio inteiro está em `PLANO.md`. Este arquivo é só o passo a passo para rodar.

## Onde está cada coisa

| Arquivo | O que é |
|---|---|
| `carta-unidades.md` | O texto do e-mail. É aqui que se escreve, em lugar nenhum mais |
| `unidades-bh.json` | Quem recebe, em que dia, de quanto em quanto tempo |
| `template-email-pesquisa.html` | O molde visual, sem marca PAAPS |
| `previa/` | O e-mail montado, para abrir no navegador antes de aprovar |
| `n8n/` | Os scripts que falam com o n8n |
| `anuencia-suas.pdf` | A carta de anuência da DGTE, anexada em todo e-mail. Fora do git |

## Os cinco comandos

Copiar e colar no Terminal, um de cada vez.

**1. Ver o e-mail exato que cada unidade vai receber.** Não envia nada.

```bash
cd "/Users/mac/Documents/SITE PAAPS" && node automacoes/pesquisa-tcc-bh/n8n/previa-pesquisa.mjs && open automacoes/pesquisa-tcc-bh/previa/
```

**2. Atualizar a assinatura no n8n,** depois de mexer no cartão acadêmico.

```bash
cd "/Users/mac/Documents/SITE PAAPS" && node automacoes/pesquisa-tcc-bh/n8n/criar-asset-assinatura-pesquisa.mjs
```

**3. Atualizar o anexo da carta de anuência no n8n,** se o PDF mudar.

```bash
cd "/Users/mac/Documents/SITE PAAPS" && node automacoes/pesquisa-tcc-bh/n8n/criar-asset-anuencia.mjs
```

**4. Montar a leva no n8n.** Cria o workflow **desligado**. Nada sai por causa deste comando.

```bash
cd "/Users/mac/Documents/SITE PAAPS" && node automacoes/pesquisa-tcc-bh/n8n/montar-leva-pesquisa.mjs
```

**5. Avisar a lista de endereços que geram "RESPOSTA TCC",** depois de mudar o JSON.

```bash
cd "/Users/mac/Documents/SITE PAAPS" && node automacoes/pesquisa-tcc-bh/n8n/ligar-aviso-resposta-tcc.mjs
```

## Como o e-mail sai de verdade

O comando 3 só monta. Para sair, abrir o n8n, encontrar o workflow
`Pesquisa TCC - Leva <data>` e **ligar a chave**. Enquanto estiver desligada, a hora
marcada passa e nada acontece. Ligar é o gate, e é gesto da Mallu.

## O que o sistema avisa por e-mail

| Assunto que chega | Quando |
|---|---|
| `Leva TCC enviada: N unidades` | Quando a leva termina |
| `FALHOU TCC: <unidade>` | Na hora, se um envio falhar. A leva segue nas outras |
| `RESPOSTA TCC: <quem>` | Quando uma unidade responde |

## Travas que recusam o disparo

O montador para e explica, em vez de mandar e-mail errado para uma unidade pública:

- lacuna em `[COLCHETES]` ainda aberta na carta;
- unidade sem e-mail no JSON;
- a marca do corpo aparecendo mais de uma vez no molde;
- marca `{{ }}` sobrando depois da troca;
- credencial de SMTP ausente no n8n.

A prévia (comando 1) é a única que aceita lacuna, e pinta de amarelo a que faltar.

## Duas armadilhas que já morderam aqui

1. **Texto repetido no comentário do molde.** `{{CORPO}}` e `cid:assinatura` aparecem tanto
   no comentário quanto no HTML de verdade, e `replace` de string troca só a primeira
   ocorrência. Nos dois casos o script pintou o comentário e deixou o alvo real intocado.
   Por isso os dois têm conferência explícita antes de montar.
2. **Cron alterado pela API não re-registra o gatilho.** Depois de mudar data ou hora,
   desligar e ligar o workflow, senão o horário novo nunca vale.
