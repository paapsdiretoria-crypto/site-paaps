# DEC : Decisão de bifurcação : 27/07/2026

**Gate da skill `paaps-orquestrador-conteudo`, seção 4. Operado pelo Claude.**

---

## Gate A. Qual voz

**Decisão: ramo paaps (@paaps.brasil).**

Dois motivos, nesta ordem.

1. **O tema é definição de campo, não confissão.** A peça nomeia um mecanismo de gestão pública
   (o atestado como única mediação legível entre trabalhadora e prefeitura) e propõe outra
   mediação. Isso é voz de rede, política pública, B2G. No ramo Mallu o mesmo material viraria
   relato pessoal exposto, e o material de origem não é vivência dela: é comentário de terceira
   pessoa no perfil institucional.

2. **É o ramo em que a substituição da criatividade dela é honesta hoje.** O ramo Mallu exige
   narrativa em primeira pessoa. O corpus mapeado até agora é institucional (peças do
   @paaps.brasil, comentários, campo, base teórica). Para rodar o ramo Mallu sem inventar
   biografia, falta mapear o corpus de voz pessoal dela: reels, carrosséis do
   @amalluvasconcellos e posts do LinkedIn pessoal. **Pendência registrada**, não desculpa: é o
   próximo trabalho de aprendizagem depois desta peça.

## Gate B. Qual canal e formato

**Decisão: carrossel @paaps.brasil, com desdobramento para LinkedIn institucional.**

Formato sustentado por dado próprio: capa que nomeia impossibilidade estrutural é a única
mecânica com conversão confirmada duas vezes neste perfil (post de 07/07/2026, 3,0% estável,
392 follows), e pergunta diagnóstica com alternativas concretas gera comentário que diagnostica
a rede em vez de elogiar. Fonte: `.claude/agent-memory/paaps-brasil/baselines-e-padroes.md`.

## Roteamento da execução

A tabela da seção 5 da skill aponta para `paaps-carrossel (em construção)`. No repositório essa
skill não existe e não precisa existir: o ramo já está implementado como cadeia de agentes.

| Etapa | Quem executa aqui |
|---|---|
| Prova falseável e pauta em ascensão | agente `radar` (o `paaps-atualidades-pesquisa` da skill), acionado sob demanda, não como primeiro passo |
| Raciocínio (5 movimentos sócio-históricos) | agente `tecela` |
| Escrita da peça, slide a slide | agente `copywriter-paaps` + skill `copy-carrossel` |
| Fotos | agente `buscador-fotos` (PhotoBank), escolha final da Mallu |
| Montagem no Canva e export | agente `aplicador-visual`, com `critico-design` obrigatório antes do export |
| Legenda | skill `legendas-otimizadas` |
| QA final da seção 8 | ainda sem dono: o agente `critico-conteudo` é placeholder vazio. Enquanto não existir, rodo o QA eu mesmo e declaro |

## Artefatos

- Entrada: `A0-campo-afetivo.md`, `A1-nucleo-fonte.md` (nesta pasta).
- Próximo a produzir: `A2-rascunho-escrita.md` (Fase 2), depois `A3-deck-slides.md` (Fase 3).
- Gate de saída: checagem dos 6 guardrails da seção 2 da skill, mais as proibições de
  `voz-paaps.md` (a estrutura "não é X, é Y" e o vocabulário coachesco não estão nos 6 e
  continuam valendo).
