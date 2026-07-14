# Plano de ação: deixar o GitHub pronto para as automações PAAPS

Documento vivo. Consolida o diagnóstico do repositório (julho/2026) e o caminho até as 5
frentes de automação. Legenda de responsável:

- **[FEITO]** já executado.
- **[COLAR COMANDO]** você pede ao Claude Code em português e ele faz.
- **[CLICAR NO SITE]** você faz pelo site do GitHub ou do serviço.
- **[DECISÃO SUA]** depende de uma escolha de negócio sua.

---

## Fase 0: segurança e base (a porta da casa)

1. **[FEITO]** Tornar o repositório privado. Concluído em julho/2026 via `gh`; conferido
   `isPrivate: true`. Fecha o risco de chaves e dados de pessoas expostos na internet.
2. **[FEITO]** Criar o `README.md` da raiz explicando o projeto e cada pasta.
3. **[FEITO]** Criar a estrutura `automacoes/` com as 5 frentes, `README.md` de cada uma
   e o `.env.example`.
4. **[FEITO]** Adicionar `.env` ao `.gitignore` para as chaves reais nunca subirem.
5. **[FEITO]** Remover o token de baixo risco vazado em `sessoes/sessao-2026-06-16.md`.
6. **[FEITO]** Vacinar contra novos vazamentos em log. O token de junho não veio do
   hook (que grava só nomes de arquivos), e sim das notas de handoff escritas no log do
   dia. A vacina certa foi uma regra nas proibições do `CLAUDE.md`, que o Claude lê toda
   sessão: nunca escrever valor de token, chave ou senha em nenhum arquivo commitado;
   mascarar como `[removido]`.

## Fase 1: decisões de negócio (destravam a construção)

7. **[DECISÃO SUA]** Destino do dashboard agora que o repo é privado. O GitHub Pages
   gratuito só serve repo público, então o dashboard pode ter saído do ar. Opções:
   assinar GitHub Pro (cerca de US$ 4/mês), mover só a pasta do dashboard para um repo
   público separado, ou hospedar em outro serviço gratuito (Netlify). Qualquer uma
   funciona.
8. **[DECIDIDO]** Onde os leads moram: **Notion**, no CRM que já existe (página Leads &
   Clientes, base Leads). Fonte única de verdade. **Supabase fica para depois**, só quando
   o app Next.js precisar de banco de verdade. Sem espelho Supabase para Notion agora.
9. **[DECIDIDO / PARCIAL]** Remetente da prospecção: **relacionamento@paaps.com.br**
   (criado). Domínio principal é seguro dado o funil qualificado e de baixo volume. Falta:
   configurar SPF/DKIM/DMARC no domínio e escolher a ferramenta de disparo.
10. **[DECIDIDO]** OpenClaw e Hermes Agent descartados. Revisão de 14/07: a prospecção
    fria (frente 5) roda com **Claude Code + n8n, só isso**, do jeito mais personalizado e
    simples possível. Divisão de trabalho: o **Claude Code** é o cérebro de personalização
    (pesquisa cada lead em sessão, escreve o e-mail na voz PAAPS a partir da Carta-Mallu, dá
    a nota 0 a 100); o **n8n** é o orquestrador da parte mecânica (dispara via Resend com
    cadência e warm-up, recebe os webhooks de entregue/aberto/respondido, atualiza o CRM no
    Notion e avisa quando um lead responde). Os agentes Claude continuam como o cérebro de
    conteúdo. **Consequência prática:** a personalização acontece quando a fundadora abre a
    sessão do Claude Code, não é serviço 24 horas; o n8n cuida do disparo e do retorno de
    respostas. Sem cérebro local via Ollama, sem chave de API de LLM nova.
    Ferramenta de apoio instalada em 14/07: **CodeGraph**
    (github.com/colbymchenry/codegraph), grafo de código local e pré-indexado que dá ao
    Claude Code (e a outros agentes) um mapa do repositório sem precisar ler arquivo por
    arquivo. Ver `automacoes/README.md`.

## Fase 2: primeira automação (sugestão: frente 4, a mais simples)

11. **[COLAR COMANDO]** Construir o formulário de pesquisa no site
    (`site/paaps-site/`), com texto de consentimento LGPD.
12. **[CLICAR NO SITE + COLAR COMANDO]** Montar no n8n o fluxo que recebe a resposta e
    grava no destino da decisão 8; exportar o JSON e commitar em
    `automacoes/funil-leads/fluxos/`.

## Fase 3: as demais frentes, uma por vez

13. Frente 1 (tráfego pago): avaliar reaproveitar o Windsor AI antes de montar do zero.
14. Frente 5 (prospecção): configurar SPF/DKIM/DMARC no domínio antes do primeiro envio.
15. Frente 2 (pipeline de conteúdo): orquestrar os agentes já existentes num fluxo único.
16. Frente 3 (crescimento): expandir a análise do Sentinela e desenhar o funil para a
    ECOA. Interação com pessoas permanece humana.

---

## Regras que valem para todas as fases

- Nenhuma chave, senha, token ou dado pessoal entra no repositório. Chaves no `.env`;
  dados de pessoas no CRM ou planilha privada.
- Workflows do n8n: exportar como JSON e commitar na subpasta da frente; conferir que
  saiu sem credencial.
- Ao fechar uma entrega relevante, pedir um commit com mensagem que descreva o que foi
  feito (o auto-push cobre o resto).
- Mudança em automação que já gasta dinheiro real passa por rascunho (branch) antes de
  valer.
