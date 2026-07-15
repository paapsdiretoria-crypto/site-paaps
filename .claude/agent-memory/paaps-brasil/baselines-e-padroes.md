---
name: baselines-e-padroes
description: Baselines de alcance por formato do @paaps.brasil e padrões confirmados por dado (ciclo 15/07/2026)
metadata:
  type: project
---

# Baselines @paaps.brasil (medidos em 15/07/2026, corpus 30/03 a 12/07)

- Carrossel solo típico: alcance mediano ~286 (faixa 159 a 513). Profundidade mediana ~2,9%.
- Outliers solo: 07/07 (13.054, distribuição orgânica por save+share) e 09/06 (3.690).
- Colab: 117x o baseline (02/07, 33.425). Alcance de colab NUNCA é comparável a solo.
- Imagem estática: 1 amostra (327 de alcance, profundidade 5,81%).
- Reels: 2 amostras (96 e 726); `media_follows` não mensurável em Reel (limitação de API, não é zero).

# Padrões confirmados (não gastar análise reprovando)

1. **Capa que nomeia impossibilidade estrutural converte.** Post 07/07/2026 ("Nunca existirá psicólogo clínico suficiente..."): 3,2% na 1ª medição, 3,0% em 15/07 (392 follows / 13.054), taxa estável com o post ainda distribuindo. Confirmado 2x.
2. **Alcance e conversão discordam neste perfil.** Post mais curtido (02/07, 1.781 likes) converteu 0,287%; o 07/07 converteu 3,0% com 1/3 do alcance. Curtida = aplauso; follows/reach é a métrica que importa.
3. **Pergunta diagnóstica com alternativas concretas no fim funciona:** comentários viram diagnóstico de rede ("Falta formação para os servidores"), não elogio.
4. **Colab herda público do parceiro, não converte para o perfil:** 02/07 (Dr. Yago Torres) teve profundidade ABAIXO da mediana solo e conversão 10x menor que o 07/07. Medir parceiro pelo diferencial de conversão, não pelo alcance.

**Why:** achados saíram do ciclo 15/07/2026 ([[ciclo-2026-07-15]], relatório em conteudo/ciclos/paaps-brasil-2026-07-15.md), com dados Windsor validados.
**How to apply:** modo VOZ respeita o padrão 1 e 3 por default; modo ANALISTA re-testa só se surgir dado contrário.
