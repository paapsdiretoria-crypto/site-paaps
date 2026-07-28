---
name: lacunas-operacionais
description: Pendências de coleta e limitações de ferramenta do agente paaps-brasil (15/07/2026)
metadata:
  type: project
---

# Lacunas operacionais a resolver

1. **IDs dos 3 posts fixados: DESCONHECIDOS.** A API não expõe o flag. Pedir à Mallu uma vez e registrar aqui (para nunca pedir de novo). Enquanto isso, o corpus roda só com os 16 recentes.
2. **Playwright indisponível quando rodo como subagente** (sessão 15/07/2026: só Bash/Read/Write/WebFetch). Sem ele, Etapa 2.1 (slides 2+) não é executável; a receita do Chrome exige as ferramentas mcp__playwright__*. Alternativa parcial usada: capa via `media_url` do Windsor + curl + Read com visão (funciona bem; URLs do CDN expiram, baixar na hora).
3. **Slides 2 a 10 dos 3 posts-pódio (07/07, 02/07, 18/06) nunca foram transcritos**, incluindo o post de 3,0% de conversão: prioridade da próxima sessão com Chrome.
4. **Comentários só foram lidos na janela 15/06 a 15/07** (85 comentários). Abril e maio sem leitura.
5. **Audiência do parceiro Dr. Yago Torres (@dryagotorres) não dimensionada.**
6. **"Você viu o olhar de Germânio há 1 mês" (post 18/06): não há post de 18/05 no feed** do @paaps.brasil. Onde o público viu (stories? @amalluvasconcellos?) segue não rastreado.

# Receita de coleta validada (15/07/2026)

- Pré-voo: curl no conector `instagram` checando `Free plan`/`Upgrade here` funcionou; plano destravado, 1 fonte / 1 conta (paaps.brasil, id 17841475334462205).
- Métricas de post e tabela de comentários (`comment_text`, `comment_like_count`, `comment_reply_count`, `comment_parent_id`) vêm no MESMO endpoint, só trocando `fields`. 35 posts desde 01/01/2026 vieram num único call.
- `media_follows` em Reel vem vazio (limitação, não zero). Post com menos de ~48h ou reach < 100: fora dos rankings.

7. **Rede via Bash bloqueada quando rodo como subagente (27/07/2026).** Nesta execução, até um
   `curl` de teste em example.com foi negado pela permissão do ambiente (Bash em modo don't-ask).
   Não é o bloqueio de plano Free (que devolve texto de upsell): é a ferramenta de rede em si,
   indisponível para mim, do mesmo jeito que o Playwright já esteve indisponível em 15/07. Sem
   ela, não há como puxar Windsor nem confirmar performance de posts publicados após meu último
   corpus coletado ao vivo. Registrar de novo se voltar a acontecer; se não se repetir, foi caso
   isolado desta chamada.
8. **Peça de 15/07 (carrossel "quem cuida da RAPS") nunca teve performance coletada.** Publicada
   3 dias depois do corte do corpus de 15/07 (30/03 a 12/07); nenhuma sessão desde então voltou
   a puxar o Windsor para medi-la. Prioridade do próximo ciclo com acesso real: reach, follows,
   saves, comentários novos dela.
9. **`voz-paaps.md` registra "84,2% mulheres, 87% entre 18-34 anos" em seção que não separa
   @paaps.brasil de @amalluvasconcellos.** Não confirmado a qual conta pertence esse dado
   demográfico. Relevante para qualquer peça sobre gênero: confirmar a fonte antes de citar.

**How to apply:** abrir cada ciclo checando os itens 1 a 3 (e agora 7 a 9); fechar cada ciclo atualizando este arquivo.
