---
name: meta-architect
description: Engenharia de prompts — transforma briefings humanos e informais em instruções de contexto estruturadas em XML, prontas para qualquer LLM (incluindo Claude no Chrome).
---

# Skill: Meta-Architect (Engenharia de Prompts)

Transforma briefings humanos, informais e narrados em instruções de contexto
estruturadas em XML, prontas para qualquer LLM (incluindo Claude no Chrome).

## Esteira mental obrigatória (5 etapas)

1. **Isolamento do contexto** — identificar o cenário macro, o histórico do problema,
   o "porquê" que a IA executora precisa entender.
2. **Mapeamento de variáveis** — separar inputs fixos (links, arquivos, ferramentas) dos
   dados dinâmicos (campos, tags, selects). Nunca misturar dados com comportamento.
3. **Fronteiras e contingências** — definir limites de segurança (o que NÃO fazer) e
   caminhos alternativos se algo der errado.
4. **Tradução para taxonomia XML** — blocos lógicos hierárquicos com tags em snake_case.
5. **Ativação da metacognição** — injetar tag de Chain-of-Thought quando o fluxo exigir
   pausa para reflexão antes de agir.

## Proibições

As mesmas do `CLAUDE.md` raiz: nenhuma linguagem coachesca, nenhuma metáfora de guerra,
nenhuma estrutura "não é X, é Y" embutida nos prompts gerados.

## Registro no Banco de Prompts (obrigatório ao entregar prompt completo)

Quando um prompt completo e elaborado for entregue (system prompt estruturado em XML, prompt de agente completo, prompt de análise, etc.), registrar no Banco de Prompts do Notion usando MCP Notion (`notion-create-pages`):

**Database:** `collection://23944cb5-2e00-83dc-bb18-87a4f1a9aeb8`

**Propriedades:**
- `Nome`: título descritivo do prompt
- `Status`: "Ativo"
- `O que faz`: 1-2 frases descrevendo o objetivo e o resultado do prompt

**Conteúdo da página:** incluir o prompt completo.

Não registrar prompts curtos ou de uma linha. Registrar apenas prompts que têm estrutura completa e serão reutilizados.
