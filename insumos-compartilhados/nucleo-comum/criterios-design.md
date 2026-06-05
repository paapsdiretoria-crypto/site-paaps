# Critérios de Design — Lista de Verificação do Crítico de Design

Este arquivo é a lista de checagem que o **Crítico de Design** aplica antes de qualquer peça fechar. É verificável item a item — não é guia de inspiração, é protocolo de aprovação.

**Fonte:** Partes 1.4, 2.2, 6 da skill paaps-brand-design + princípios de qualidade-frontend.md aplicados ao Canva (instrução da Mallu, jun/2026).

---

## 1. Checklist de Aprovação — Aplicar a Toda Peça

### Identidade visual
- [ ] Paleta: todas as cores são da paleta PAAPS? Nenhum hex fora do sistema?
- [ ] Tipografia: League Spartan em títulos, labels e elementos de interface?
- [ ] Border-radius: 4px em TUDO? Nenhum elemento com mais de 4px?
- [ ] Logo: está na versão certa para o fundo (marrom em fundo claro / branco em fundo escuro)?
- [ ] Grain texture: presente no body (obrigatório em peças web)?

### Texto sobre imagem (regra crítica)
- [ ] O texto sobreposto é legível? Contraste suficiente para leitura em tela pequena?
- [ ] Há overlay (marrom ou terracota) quando necessário para garantir leitura?
- [ ] Nenhum elemento de texto está "perdido" sobre área de cor similar?

### Fotografia
- [ ] A foto é real, documental, territorial? (Nunca stock genérico)
- [ ] O crédito do fotógrafo está visível na peça? (Não pode faltar)
- [ ] A foto passou pelo critério de escala humana? (Rostos, mãos, cotidiano do cuidado)
- [ ] Se a foto é do acervo PAAPS (`insumos-compartilhados/fotos/`): a pasta de origem foi registrada?

### Hierarquia visual
- [ ] O olho percorre a peça na ordem certa: marcador → label → título → conteúdo?
- [ ] Não há mais de dois pesos tipográficos num mesmo elemento?
- [ ] O elemento mais importante é o maior/mais contrastante da composição?

### Canva (checklist adicional para carrosséis)
- [ ] Crédito `@paaps.brasil · [tema]` está no slide de fechamento?
- [ ] O texto não sangra fora dos limites do slide?
- [ ] As regiões de cor no texto (branco vs amarelo) foram preservadas após a edição?
- [ ] A foto tem filtro P&B aplicado?
- [ ] O placeholder de foto foi substituído pela foto real?

### Web (checklist adicional para HTML/CSS)
- [ ] Grain texture no body?
- [ ] Breakpoints respeitados (≤960px, ≤768px, ≤480px — nunca criar novos)?
- [ ] Máximo 4 delays de animação (delay máximo: 0.4s)?
- [ ] Nenhuma sombra de card no estilo Periódico (usar bordas)?

---

## 2. Anti-padrões Visuais — O Que Reprovar Imediatamente

### Reprovar e devolver ao agente produtor
- ❌ Gradiente roxo, azul ou qualquer gradiente de texto
- ❌ `border-radius` maior que 4px em cards ou botões
- ❌ Sombra `box-shadow` no lugar de `border` (no contexto Periódico)
- ❌ Fonte Inter, Roboto ou system-ui como fonte principal
- ❌ Cor fora da paleta (exceto #25D366 para WhatsApp)
- ❌ Logo colorido sobre fundo escuro
- ❌ Foto de stock genérico (handshake, laptop aberto, sorriso corporativo em escritório)
- ❌ Texto sem crédito de fotógrafo quando há foto
- ❌ Texto sobreposto sobre área clara sem overlay — ilegível

---

## 3. Princípios de Qualidade de Design Aplicados ao Canva

*Estes princípios vêm de `qualidade-frontend.md` e se aplicam igualmente a peças digitais e a carrosséis no Canva — instrução explícita da Mallu.*

**Tipografia distinta:**
- No Canva: escolher peso e tamanho que criem contraste real com o corpo — nunca tamanho uniforme em todos os elementos
- Headline deve dominar a composição visualmente; se não domina, aumentar

**Layout que foge do genérico:**
- No Canva: evitar composição centralizada com foto no meio e texto em cima/baixo em tamanhos iguais — isso é o padrão "IA"
- O que funciona: texto que sangra, foto que ocupa mais de 60% do frame, assimetria intencional

**Composição espacial:**
- Espaço em branco (ou preto) é um elemento ativo — não preenchimento por preguiça
- No Canva: um slide com muito respiro pode ser mais poderoso que um lotado de informação

**Ruptura de grid:**
- No Canva: elementos que "escapam" levemente do grid criam tensão visual positiva
- Aplicar com intenção: o que escapa deve ser o elemento mais importante

---

## 4. Sensações-Alvo por Contexto

O Crítico de Design verifica não só se os itens técnicos estão corretos, mas se a peça provoca a sensação certa:

**Dashboard (equipe interna):**
*"Este é meu aliado estratégico de manhã."* — não austero, tem alma. Insights em linguagem PAAPS, não tabela fria.

**Site institucional (primeiros 3 segundos):**
*"Curiosidade — é tão bom que não parece verdade. Esperança."* — sem elemento que grite "clique aqui". Convida, não empurra.

**Instagram:**
*"Reconhecimento + choque de precisão."* — "Alguém finalmente nomeou isso."

Se a peça não provoca a sensação certa, algo está errado mesmo que os itens técnicos estejam todos marcados.
