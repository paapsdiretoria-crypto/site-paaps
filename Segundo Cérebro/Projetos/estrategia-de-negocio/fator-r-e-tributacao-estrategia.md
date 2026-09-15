---
tags: [projetos, modelo-de-negocio]
origem: "Trabalho"
resumo: "O Fator R decide se a Psicologia da PAAPS paga 12,97% ou 19,05% de imposto, e cada real que sai do CLT para PJ ou IA barateia a operação mas encarece o imposto"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-15
aliases: [Fator R, Anexo III, Anexo V, Simples Nacional, carga tributária]
---

# O Fator R: por que contratar em CLT também é decisão de imposto

**O Fator R é a divisão entre o que a empresa pagou de gente nos últimos 12 meses e o que
faturou no mesmo período. Se ele fica igual ou acima de 28%, a atividade de Psicologia da
PAAPS paga imposto pelo Anexo III (barato); abaixo disso, paga pelo Anexo V (caro).** A
diferença chega a R$ 56.179 por ano já no primeiro município.

## A conta

```
              o que a empresa pagou de gente nos últimos 12 meses
Fator R  =  ────────────────────────────────────────────────────
              o que a empresa faturou nos últimos 12 meses

≥ 28%  →  Anexo III  →  barato
<  28%  →  Anexo V   →  caro
```

"Pagou de gente" é salário, FGTS e pró-labore. **Nota de PJ não entra. Assinatura de IA não
entra. Distribuição de lucros não entra.**

| | Alíquota sobre a receita da atividade de Psicologia | Imposto/ano (1 município) |
|---|---|---|
| Fator R < 28% (Anexo V) | 19,05% | R$ 176.022 |
| Fator R ≥ 28% (Anexo III) | 12,97% | R$ 119.843 |
| **Diferença** | **6,08 pontos** | **R$ 56.179/ano** |

O risco existe só na janela de 3 a 4 meses do começo de um contrato novo, porque o cálculo
olha 12 meses para trás: com a folha do primeiro contrato (2 psicólogos + supervisor +
customer success + pró-labore) o Fator R sobe para cerca de 41%. **Consequência prática:
o pró-labore da sócia que conduz a PAAPS precisa subir antes da assinatura do primeiro
contrato**, porque ele conta 100% no Fator R e, no Simples, custa quase nada à empresa.

## Duas atividades, dois regimes, no mesmo CNPJ

| Atividade | Enquadramento | Depende do Fator R? |
|---|---|---|
| Treinamento e capacitação | Anexo III direto | não |
| Psicologia (Rodas, licenciamento) | Anexo V | sim, sobe ao III com Fator R ≥ 28% |

O objeto social da DIGGING separa as duas (ver [[digging-clausula-govtech]]), o que
significa que **a composição do contrato com a prefeitura afeta a alíquota**: um contrato
que combine grupos (Psicologia) com capacitação de equipes (treinamento) tem parte da
receita já no regime barato por enquadramento direto, sem depender do Fator R. Isso é
conversa técnica com a contadora antes de redigir o primeiro contrato, não decisão a tomar
sozinha.

## CLT, PJ ou IA: a diferença que ninguém vê de fora

| | Custo | Conta no Fator R? |
|---|---|---|
| CLT | salário × 1,39 | **sim** |
| PJ | valor da nota | não |
| IA (orquestração) | assinatura e uso | não |

**Cada real que sai do CLT para PJ ou IA deixa a operação mais barata e o imposto mais
caro.** Um supervisor em CLT ganha duas vezes: custa R$ 1.723 por município contra
R$ 3.000 como PJ, e ainda sustenta o Fator R. A IA orquestradora economiza cerca de
R$ 4.680 por município por mês, mas não conta para o Fator R: o argumento que sustenta
usá-la mesmo assim é que ela substitui a função que não precisa de presença (escala,
rotação, relatório) e não encosta na que precisa (o psicólogo, que continua sendo gente,
morando na cidade).

## Por que dividir o CNPJ da DIGGING e da PAAPS não resolve imposto

Já se cogitou separar o CNPJ da PAAPS para baratear o imposto. Refeita a conta, a economia
é pequena: menos de R$ 11 mil por ano (R$ 7.669 com 1 município, R$ 10.500 com 3). **Não é
motivo para separar nada.** O que continua valendo é o teto do Simples (R$ 4,8 milhões,
compartilhado com a DIGGING) e o argumento societário de separar para um investidor, que é
questão diferente. Ver [[digging-historico-financeiro-2022-2025]].

## O que acontece quando o Simples acaba

Ao sair do Simples (projeção: ano 3), a alíquota sobe para 16% a 19% **e o INSS patronal de
20% volta a ser pago por fora da folha**: o custo por pessoa vai de 1,39 para 1,7 vezes o
salário. É o modelo de contratação local em CLT, o mais bonito da PAAPS, que a saída do
Simples mais penaliza, e é a segunda razão para o licenciamento existir: licença quase não
tem folha por real de receita, então amortece esse golpe. Ver
[[licenciamento-do-metodo-estrategia]].

## Onde isso serve

Em [[estrategia-de-negocio]], para decidir contratação (CLT × PJ × IA) e para redigir
contrato de licença sem perder o regime tributário barato. Não é conteúdo de pitch: é
conversa de mentoria e de contabilidade.
