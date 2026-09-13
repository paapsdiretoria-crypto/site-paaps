---
tags: [metodo, sintese]
origem: "Cofre anterior, reorganizado em 12/09/2026"
resumo: "O fluxo de uma rodada de produção de conteúdo em diagrama, tronco a tronco"
serve-para: ["[[estrategia-de-negocio]]"]
status: vivo
atualizado: 2026-09-12
aliases: [workflow de agentes, fluxo de conteúdo]
---

# Workflow de Agentes : Produção de Conteúdo PAAPS (árvore de dois troncos)

Fluxo completo de uma rodada de produção. Última revisão: 12/09/2026, substitui a
versão de jun/2026 (arquitetura de 4 camadas, aposentada em 27/07/2026). Ver também
`arquitetura_v2.md` pra tabela de agente, arquivo e status.

> O diagrama companheiro `workflow_agentes_conteudo_paaps.svg` e o `workflow-paaps.html`
> ainda desenham a arquitetura antiga. Estão desatualizados, precisam de redesenho.

---

## O que abre toda tarefa

```
Julgamento do orquestrador (skill paaps-orquestrador-conteudo): em qual tronco a
tarefa cai? Decisão registrada no artefato T de cada rodada.
```

## Tronco A : a Mallu puxa o gancho

```
Fase 0 : setting e ambiente
Fase 1 : contexto situado + âncora teórica
   ↓
LOTE DE CONTEÚDOS (serve os dois perfis, roda fora de calendário fixo)
   ↓
gate de voz, peça a peça
   ↓                    ↓
@amalluvasconcellos   @paaps.brasil
```

`conteudo/CLAUDE.md` não fixa qual agente escreve qual peça dentro do lote: os agentes
de canal já existem prontos pra entrar aqui (`mallu-carrossel`, `mallu-linkedin`,
`mallu-reels` pro perfil pessoal; `paaps-linkedin`, `paaps-facebook`, e o próprio
`copywriter-paaps` pro institucional), acionados conforme o formato que o lote pede.

## Tronco B : o PAAPS rodando por frequência

```
radar (2 modos: propositivo padrão, ou dirigido a serviço do Tronco A)
  + paaps-brasil (lê a performance real do próprio perfil)
   ↓
tecela (entra SEMPRE, nos dois troncos, mesmo em modo aprendizado sem escrever nada)
   ↓
copywriter-paaps (escreve a peça final, sucessor do antigo Narrador)
   ↓
critico-conteudo (nota de 0 a 100, decide se segue ou volta pra reescrita)
   ↓
buscador-fotos (cura o PhotoBank, entrega candidatas por slide)
   ↓
aplicador-visual (HTML/CSS fotografado via Chrome headless, mesma técnica do site
institucional: puro, sem framework nem bundler. Canva é exceção pra edição manual)
   ↓
critico-design (avalia a peça montada contra identidade PAAPS e diretrizes de interface)
   ↓
Mallu (gate final, aprova, corrige ou recusa)
```

## Regra que atravessa os dois troncos

- **Nenhum agente publica nada.** Toda peça passa pela aprovação final da Mallu.
- **A Tecelã entra em toda rodada.** Pular apaga uma rodada de aprendizado que não volta.
- **Quando a Mallu não fornece o gancho**, o afeto que inicia a peça é reconstituído por
  `Conhecimento/2-identidade/voz/afeto-situado-mallu.md`, sempre ancorado em artefato
  real, nunca vivência inventada em primeira pessoa.

## Artefatos de handoff

Uma pasta por rodada: `conteudo/ciclos/AAAA-MM-DD/`. Um agente só inicia sua etapa
quando o artefato de entrada existe (`T`, `A0`, `A1`, `A2`, `DEC`, `B1` a `B4`, `QA`,
seção 8 da skill orquestradora). Entregas finais:
`conteudo/instagram/<perfil>/entregas/AAAA-MM-MÊS/<sessão>/`.

## O que mudou da arquitetura de 4 camadas

- A sequência fixa em camadas (Inteligência → Captação → Produção por Canal →
  Aprovação) virou uma decisão de tronco no início de cada tarefa, não um trilho único.
- Sentinela saiu do fluxo.
- Narrador virou Copywriter PAAPS: escreve a peça final direto, não um documento de
  briefing intermediário que a Mallu precisava traduzir depois.
- Aplicador Visual trocou Canva por HTML/CSS fotografado como caminho padrão.

## Onde isso serve

Em [[estrategia-de-negocio]].
