---
name: cria-skill-paaps
description: Use para criar novas skills PAAPS. Aplica o ciclo RED-GREEN-REFACTOR à documentação de comportamento: testa o agente sem a skill antes de escrevê-la, escreve, verifica conformidade, refina para fechar brechas.
---

# Criar Skills PAAPS

## Lei central

Skill que não foi testada sem seu conteúdo não é uma skill. É uma hipótese. Antes de escrever uma linha, rode o cenário de pressão e documente como o agente falha.

```
NÃO ESCREVA A SKILL ANTES DE VER O AGENTE VIOLAR A REGRA QUE ELA PRETENDE ENSINAR
```

---

## Quando usar

Sempre que surgir um padrão de erro recorrente nos agentes (o mesmo desvio aparece em sessões diferentes), uma nova função na cadeia que não tem guia de execução, ou uma regra que está no CLAUDE.md mas precisaria existir como comportamento ativo de agente.

Não crie skill para registrar como você resolveu um problema uma vez. Skill existe para comportamento repetível e transferível.

---

## O ciclo RED-GREEN-REFACTOR para skills

### RED — teste sem a skill

Despache um subagente sem o conteúdo da skill que você pretende criar. Dê a ele a mesma tarefa que a skill vai governar. Documente:

- Qual regra ele violou?
- Qual racionalização usou para não seguir? ("É só uma pergunta simples", "Esse caso é diferente", "Deixa eu ver o código primeiro")
- A violação foi previsível ou surpreendente?

Se o agente acertou sem a skill, você não precisa da skill. Outro mecanismo já governa aquele comportamento.

### GREEN — escreva a skill

A skill resolve exatamente o que o cenário de pressão revelou. Nada mais. Não tente prever todos os casos futuros. Resolva o que você viu falhar.

### REFACTOR — feche brechas sem perder conformidade

Rode o cenário de pressão de novo, agora com a skill. Se o agente encontrou uma saída lateral ("tecnicamente estou cumprindo, mas estou driblando o espírito da regra"), adicione o contra-argumento. Atualize a tabela de racionalizações se necessário.

---

## Anatomia obrigatória de uma skill PAAPS

Todo arquivo de skill deve ter:

**Frontmatter**
```
---
name: nome-em-kebab-case
description: Use quando [gatilho específico]. Ative em frases como [exemplos de acionamento]. Não use para [delimitação clara do escopo].
---
```

A `description` é o que determina se a skill vai ser acionada no momento certo. Escreva o gatilho com precisão cirúrgica. Se a description for vaga, a skill vai ser chamada na hora errada ou nunca.

**Lei central**
Uma frase. O que o agente NÃO pode fazer sem antes cumprir a skill. Em caixa alta se for não-negociável.

**Gate explícito**
O ponto que o agente não pode cruzar sem evidência. "Se não rodou X nessa mensagem, não pode afirmar Y."

**Checklist ou processo**
Sequência de passos que o agente segue. Passos devem ser verificáveis: ações concretas, não intenções.

**Tabela de racionalizações** (quando aplicável)
Os pensamentos que sinalizam que o agente está driblando a skill. Modelado em `evita-padrao-ia-imersao-claude` e em `writing-skills` do Superpowers.

| Pensamento | O que está acontecendo |
|---|---|
| "Esse caso é simples demais" | Racionalização. Execute o processo mesmo assim. |
| "Já sei o que a skill vai dizer" | Skills evoluem. Leia a versão atual. |
| "Só essa vez" | Nunca é só essa vez. |

**Auditoria anti-IA**
Explicitada abaixo.

---

## Auditoria anti-IA antes de salvar

Antes de escrever o arquivo final, passe o texto pela `evita-padrao-ia-imersao-claude`. Skills são documentos internos, não posts, mas texto com cara de IA treina comportamento com cara de IA.

Verifique especificamente:

- Negrito em excesso: skills usam negrito só para gates e leis. Não para ênfase decorativa.
- Gerúndio em cascata: "garantindo que o agente compreenda, executando cada etapa e verificando os resultados" — reescreva como afirmações diretas.
- Listas de três adjetivos: "claro, direto e objetivo" não diz nada. Diga o que o texto faz, não como ele é.
- Abertura com contexto amplo: não comece com "No ecossistema PAAPS, criar skills eficazes é fundamental para...". Abra com o que a skill faz.
- "Não é X, é Y": proibido em todo output PAAPS, inclusive skills.
- Frases de preenchimento: "é importante destacar", "vale ressaltar", "cabe mencionar" — corte.

---

## Estrutura de passos para escrever uma skill nova

1. Identifique o comportamento que falhou (ou o gap que você quer preencher)
2. Escreva o cenário de pressão: qual tarefa, qual agente, qual violação esperada
3. Rode o cenário sem a skill. Documente a falha exata
4. Escreva o frontmatter primeiro: `name` e `description` com gatilho preciso
5. Escreva a lei central: o que não pode acontecer sem a skill
6. Escreva o processo ou checklist que resolve a falha documentada
7. Adicione a tabela de racionalizações com os desvios que você observou no RED
8. Rode o cenário de pressão com a skill. Verifique conformidade
9. Refine para fechar brechas. Não para adicionar escopo novo
10. Passe pela auditoria anti-IA
11. Salve em `.claude/skills/nome-da-skill.md`
12. Adicione a skill na tabela do CLAUDE.md raiz
13. Registre no Banco de Skills do Notion (ver Passo 12 abaixo)

---

## Onde salvar

Skills PAAPS ficam em `.claude/skills/` na raiz do projeto.

Skills específicas para o site ficam em `site/.claude/skills/`.

Após salvar, adicione a skill na tabela de skills disponíveis no CLAUDE.md raiz.

---

## Passo 12 — Registrar no Banco de Skills (Notion)

Após salvar o arquivo, registrar a skill no Banco de Skills do Notion usando o MCP Notion (`notion-create-pages`):

**Database:** `collection://9df44e0a-a9ea-4308-aad9-53f2416a8bb0`

**Propriedades obrigatórias:**
- `Nome`: nome da skill (kebab-case)
- `Status`: "Ativa"
- `Categoria`: "Voz e conteúdo" / "Construção de agentes" / "Gestão de projetos" / "Pesquisa e Notion" / "Infraestrutura" / "Ecossistema externo"
- `Arquivo`: caminho relativo (ex: `.claude/skills/nome.md`)
- `Quando acionar`: extraído da `description` do frontmatter

**Conteúdo da página:** incluir o arquivo completo da skill.

Este passo é obrigatório. Skill sem registro no Notion não é visível para Mallu revisar e aprovar.

---

## O que não pertence numa skill

- Solução de um problema pontual de uma sessão específica
- Configuração técnica (vai em `settings.json`)
- Instrução de canal ou formato (vai no agente de canal)
- Documentação de decisão arquitetural (vai em CLAUDE.md ou em memória)
- Qualquer conteúdo que só faz sentido para Mallu e não para um agente executando a skill de forma autônoma
