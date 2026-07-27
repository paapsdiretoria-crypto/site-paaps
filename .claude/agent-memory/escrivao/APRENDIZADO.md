# APRENDIZADO do Escrivão

> Memória viva do Escrivão. O que o registro real ensinou sobre a ordem das coisas, sobre o
> cooldown de 60 dias e sobre o que estraga a contagem que o porteiro lê.

## A ordem nunca se inverte: o caminho de registro vem antes do disparo (27/07/2026)

A 1ª leva de prospecção fria saiu no dia 27/07/2026 (5 e-mails, execução 15 do workflow
`Prospecção - Leva 2026-07-27`, todos confirmados pelo SMTP com `250 2.0.0 Ok: queued` e
`rejected: []`). **O registro no CRM falhou na hora**: a credencial do Notion no n8n ainda não
existia, então o nó do escrivão não tinha como gravar as Atividades.

Durante essas horas, o estado do mundo foi o pior possível dentro da regra dos 60 dias:

- os 5 e-mails **saíram de verdade**, então as prefeituras foram tocadas;
- nenhuma Atividade `PROSPECÇÃO` existia, então **o cooldown não existia**;
- os 5 leads continuavam em `0. Alvo`, ou seja, **virgens aos olhos do porteiro**.

Se uma nova leva tivesse rodado antes do conserto, o porteiro teria lido a fila e reapresentado
Diamantina, Salinas, AMM, Janaúba e Bocaiúva como se nunca tivessem sido tocadas: carta repetida
para a mesma caixa institucional, na mesma semana. É exatamente o dano que a regra dos 60 dias
existe para impedir.

**A lição:** o disparo nunca deveria ter sido armado antes do caminho de registro estar de pé.
Enviar é irreversível; registrar é o que torna o envio legível para o resto do fluxo. Uma etapa
irreversível não pode ser ligada antes da etapa que a torna rastreável.

**Regra que fica:** antes de ativar qualquer leva no n8n, conferir que o caminho de gravação no
CRM está de pé de ponta a ponta (credencial do Notion válida, nó do escrivão apontando para ela,
data sources corretas). Sem isso, a leva não roda. Não é detalhe de configuração: é pré-condição
do envio.

**Corolário sobre o incidente:** quando o envio confirma e o registro falha, isso é incidente que
se avisa na hora, não pendência que se resolve depois. O intervalo entre um e outro é uma janela
de toque duplicado aberta.

**Status da causa raiz:** corrigida. A credencial existe e o workflow aponta para ela, então o
registro da próxima leva acontece dentro do n8n, sem intervenção manual. O registro desta leva foi
feito à mão pelo escrivão, com a data real de envio anotada na `Descrição` de cada Atividade.

## O que o registro manual retroativo ensina sobre o createdTime

O `createdTime` da Atividade é automático e é o que o porteiro lê como data do toque. Num registro
retroativo, ele marca o dia do registro, não o dia do envio. Nesta leva os dois caíram no mesmo dia
(27/07/2026), então a contagem ficou correta. Se algum dia o conserto atrasar e cair em outro dia,
o cooldown fica mais curto do que deveria e a data real de envio precisa constar na `Descrição`
para quem for auditar. Mais um motivo para o registro nunca ficar para depois.

## Checagem de duplicata antes de criar (sempre)

Antes de criar uma Atividade, consultar `(EMP) Atividades` filtrando por `Tipo = PROSPECÇÃO` e
conferir se já existe linha recente para aquele lead. Um toque = uma Atividade. Uma linha a mais
silencia o lead por 60 dias sem que nenhum e-mail tenha saído, e isso é tão ruim quanto não
registrar. Na leva de 27/07 a checagem foi feita: as Atividades `PROSPECÇÃO` mais recentes na base
eram de abril/2026 e nenhuma apontava para os 5 leads.
