# Workflow de Agentes — Produção de Conteúdo PAAPS (v2)

Fluxo completo de uma sessão de produção. Última revisão: jun/2026.

---

## Camada 1 — Inteligência

```
┌─────────────────────────────────────┐   ┌──────────────────────────────────────────┐
│             RADAR                   │   │             SENTINELA                    │
│  20 pautas em ascensão              │   │  Lê dashboard Windsor + perfis IG/LI     │
│  Não o que explodiu — o que sobe    │   │  Auto-report: o que funcionou/falhou      │
│  Política, legislação, viral,       │   │  Estratégias complexas para o ciclo      │
│  cultura, relatórios, episódios     │   │  Cruza com as 20 pautas do Radar         │
│  Parâmetro: potencial PAAPS +       │   │  Ranqueia top 5 pautas com mais chance   │
│  momento de ascensão                │   │                                          │
└─────────────┬───────────────────────┘   └────────────────────────┬─────────────────┘
              │                                                      │
              └──────────────────────┬───────────────────────────────┘
                                     ↓
┌────────────────────────────────────────────────────────────────────┐
│                          TECELÃ                                     │
│  Conectora criativa — não é Cartógrafo, não é academicista         │
│  Repertório: Foucault, Lélia, Mbembe, bell hooks, Freire + 18 mais │
│  Apresenta a ideia PRIMEIRO — referencia depois (como fotógrafo)   │
│  Entrega: raciocínio crítico por pauta, ângulo por canal           │
└────────────────────────────┬───────────────────────────────────────┘
                             ↓
┌────────────────────────────────────────────────────────────────────┐
│                         NARRADOR                                    │
│  Escreve o documento completo de briefing (briefing-YYYY-MM-DD.md) │
│  Pode chamar Radar, Sentinela, Tecelã para revisão/aprofundamento  │
│  Documento contém: conjuntura, pautas, raciocínios, sacadas,       │
│  direcionamentos por canal, estratégia do Sentinela, pergunta      │
│  aberta para Mallu                                                 │
│  Salva em: conteudo/briefings/                                     │
└────────────────────────────┬───────────────────────────────────────┘
                             ↓
```

---

## Camada 2 — Captação de Mallu

```
Mallu lê o documento do Narrador
  ↓
Fase 1: resposta livre ("Como você se posicionaria nessa semana?")
  ↓
Fase 2: 5-10 escolhas de tom, referências, recorte
  ↓
TRADUTOR (⚠ incompleto) → processa e gera briefing final para canais
```

---

## Camada 3 — Produção por Canal (⚠ agentes incompletos)

```
6 canais em paralelo:
  mallu-linkedin / mallu-reels / paaps-carrossel
  paaps-linkedin / paaps-facebook / ecoa

Cada canal aciona time de apoio:
  critico-conteudo → voz PAAPS
  critico-design   → visual, créditos, legibilidade
  buscador-fotos   → foto documental real
  aplicador-visual → Canva (já documentado em identidade-aplicada.md)
```

---

## Camada 4 — Aprovação

```
Mallu revisa e aprova cada peça
  → aprovação: publicar
  → ajuste pequeno: editar no Canva
  → retrabalho profundo: volta ao Tradutor com novo ângulo
```

---

## Pontos de decisão humana (Mallu)

1. **Camada 2:** lê o documento do Narrador e responde com perspectiva pessoal
2. **Camada 4:** valida tudo antes de publicar

**Gustavo** entra apenas no agente Interlocutor ECOA.

---

## Mudanças da v1

- Radar: 20 temas (não 3), escopo jornalístico amplo, parâmetro de ascensão
- Sentinela: novo agente de inteligência estratégica (não existia)
- Cartógrafo → Tecelã: conectora criativa, não academicista
- Curador → Narrador: escreve documento completo, não lista de 3 temas
- Briefings salvos em `conteudo/briefings/`
