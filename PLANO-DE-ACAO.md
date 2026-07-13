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
6. **[FEITO]** Vacinar o hook de log de sessão para mascarar valores que pareçam
   token ou chave antes de gravar no log.

## Fase 1: decisões de negócio (destravam a construção)

7. **[DECISÃO SUA]** Destino do dashboard agora que o repo é privado. O GitHub Pages
   gratuito só serve repo público, então o dashboard pode ter saído do ar. Opções:
   assinar GitHub Pro (cerca de US$ 4/mês), mover só a pasta do dashboard para um repo
   público separado, ou hospedar em outro serviço gratuito (Netlify). Qualquer uma
   funciona.
8. **[DECISÃO SUA]** Onde os leads moram (frente 4): planilha Google, Notion ou CRM.
9. **[DECISÃO SUA]** Ferramenta de disparo e domínio de e-mail (frente 5): Gmail atual ou
   serviço dedicado; domínio principal ou subdomínio irmão.
10. **[DECISÃO SUA]** Confirmar OpenClaw e Hermes Agent. Mandar o link de cada um para o
    Claude Code checar documentação e tratamento de credenciais antes de apostar neles.
    O n8n é a base sólida enquanto isso.

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
