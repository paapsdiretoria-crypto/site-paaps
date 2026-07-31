---
name: project-organizacoes-varridas
description: Organizações já varridas e com ficha estrutural levantada na prospecção fria; e a limitação de o buscador não ter MCP do Notion na sessão
metadata:
  type: project
---

# Organizações já varridas (só o nome da organização, nunca o contato)

## 1ª leva, interior de MG, ficha estrutural fechada em 26/07/2026

Todas com e-mail institucional verificado em página `.gov.br` (ou portal da própria
entidade) e nome do titular publicado na mesma página:

- Prefeitura de Diamantina (MG)
- Prefeitura de Salinas (MG)
- Prefeitura de Bocaiúva (MG)
- Prefeitura de Janaúba (MG)
- AMM : Associação Mineira de Municípios

**Why:** eram os 5 leads que travavam o disparo de segunda-feira da 1ª leva; sem e-mail
institucional verificado a carta-fria não podia sair.
**How to apply:** não varrer esses 5 de novo. Se um deles voltar à fila, o que precisa ser
revalidado é só o nome do titular (secretário muda) e o sinal conjuntural, não a rota do
e-mail nem o porte.

Os quatro municípios ficam na faixa de 40 mil a 71 mil habitantes (Censo 2022), ou seja,
acima da faixa "médio" da ficha e bem acima do case Bela Vista de Minas. A estratégia de
escrita deles não é a de município muito pequeno.

## 2ª leva, norte/nordeste de MG, enriquecidas em 31/07/2026

Já estavam no CRM como `Status = 0. Alvo` desde 24/07/2026, sem e-mail. Fecharam nome +
cargo + e-mail institucional + gancho, todos em página `.gov.br` do próprio município:

- Prefeitura de Taiobeiras (MG)
- Prefeitura de Porteirinha (MG)
- Prefeitura de Monte Azul (MG)
- Prefeitura de Espinosa (MG)
- Prefeitura de Riacho dos Machados (MG)

**Why:** o pool de elegíveis da semana tinha só 2 leads com e-mail; faltavam 3 para fechar
a meta de 5 cartas.
**How to apply:** não varrer essas 5 de novo. Se voltarem à fila, revalidar só o nome do
titular. As rotas de e-mail estão em [[reference-fontes-email-institucional]].

### Ficaram de fora, e por quê (não é lista morta, é lista com motivo)

- **Coração de Jesus**: portal lista as secretarias sem titular nem e-mail próprio. Só um
  gmail geral de gabinete. Sem nome + cargo, não fecha o gatilho D0.
- **Jaíba**: `/portal/secretarias` traz e-mail por secretaria mas **nenhum nome de
  titular**. Falta só a pessoa: se aparecer o nome em outra fonte oficial, fecha rápido.
- **Rio Pardo de Minas** e **Novo Cruzeiro**: o CMS ofusca o e-mail e o WebFetch devolve
  placeholder. O titular está publicado nos dois. Falta só o endereço legível.
- **Grão Mogol**: página de secretarias sem contato por secretaria.

Ou seja: os 5 restantes não são secos, estão **a um dado de fechar**. Numa próxima rodada,
atacar Jaíba (falta nome) e Rio Pardo/Novo Cruzeiro (falta e-mail legível) antes de sair
procurando município novo.

## Sinal legislativo: buraco conhecido desta leva

Nenhum dos 4 municípios teve lei ou projeto de lei de saúde mental do servidor localizável
por busca aberta. O campo fica **em branco**, não preenchido por suposição.

**Why:** a ficha manda deixar em branco o dado sem fonte, e chamar de "lei" o que é projeto
(ou inventar que existe) queima a credibilidade da carta inteira.
**How to apply:** para a próxima leva, montar o topo da fila pelo Diário Oficial dos
Municípios Mineiros, não pelo buscador aberto; e não prometer ao porteiro que a fila
híbrida terá sinal legislativo em cidade pequena de MG achável por busca comum.

## Limitação operacional da sessão (verificar antes de confiar)

Em 26/07/2026 **e de novo em 31/07/2026** a sessão do buscador subiu **sem o MCP do Notion**: só WebSearch, WebFetch,
Read, Write, Edit. Não deu para criar o registro em (EMP) Contato nem editar o corpo da
página do Lead; a entrega virou payload pronto no relatório, para o porteiro ou a Mallu
cadastrarem.

**Why:** o gatilho D0 exige o cadastro em (EMP) Contato, e o agente não conseguiu executá-lo.
**How to apply:** conferir no início do ciclo se as ferramentas do Notion estão na sessão.
Se não estiverem, avisar o porteiro logo no começo, e não no fim, para ele decidir se
reabre a sessão com o MCP ou se assume o cadastro. Essa limitação pode ter sido corrigida:
checar antes de assumir que ainda vale.

Rotas e fontes em [[reference-fontes-email-institucional]].
