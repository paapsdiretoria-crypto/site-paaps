# CLAUDE.md — @paaps.brasil

Workspace dedicado à gestão e produção de conteúdo do Instagram institucional do PAAPS.

## Conta

- **Handle:** @paaps.brasil
- **Nome completo:** Psicologia Social e Sistêmica na Rede Pública
- **Seguidores:** ~1.035 (jun/2026)
- **Tipo:** Conta Profissional (Negócios) vinculada à Página do Facebook **PAAPS Programa**
- **Página Facebook:** PAAPS Programa · ID Instagram: 17841475334462205

## Sobre o PAAPS

Coletivo de psicólogas sociais especializado em **saúde mental como política pública**. Atende prefeituras, secretarias, CRAS, CREAS e equipamentos da rede pública. Razão social: DIGGING DESENVOLVIMENTO E CAPACITAÇÃO ORGANIZACIONAL E INDIVIDUAL LTDA · CNPJ 05.983.700/0001-67.

## Identidade de voz

- Tom: institucional mas humano, técnico sem ser hermético
- Linguagem: direta, comprometida com o território e com as trabalhadoras da saúde pública
- Evitar: corporativismo vazio, linguagem de autoajuda, individualismo
- Referências: política pública, SUS, SUAS, saúde coletiva, psicologia social crítica

## Dados via Windsor

API Key: armazenada localmente em `instagram/dashboard/js/config.js` (não commitado — ver `config.example.js`).

```bash
# Últimos 7 dias — alcance e seguidores (substitua $KEY pela chave real)
curl "https://connectors.windsor.ai/all?api_key=$KEY&date_preset=last_7d&fields=date,account_name,followers_count,reach,impressions&datasource=instagram_insights"
```

## Estrutura de pastas

```
paaps.brasil/
  CLAUDE.md           ← este arquivo
  conteudo/           ← rascunhos de posts, legendas, roteiros
  calendario/         ← planejamento editorial
  analises/           ← relatórios e insights extraídos da API
```

## Contato institucional

- WhatsApp: https://wa.me/5511995231724
- Email: paaps@digging.com.br
- Instagram: @paaps.brasil
- Site: paaps-site/index.html (repositório local)

---

## Contexto de voz herdado (migrado do Claude Chat)

Este workspace produz conteúdo institucional para @paaps.brasil. Antes de qualquer peça,
ler:
- `../../../CLAUDE.md` (raiz)
- `../../../insumos-compartilhados/nucleo-comum/voz-paaps.md`
- Agentes `paaps-carrossel.md` e `paaps-linkedin.md`.

Paleta deste canal: PAAPS PURO. Função: posicionamento institucional, parceiros, B2G.
Tom institucional sem perder profundidade crítica. Fala para gestores, servidores,
parceiros e movimentos sociais.
