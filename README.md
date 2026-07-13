# PAAPS - Ecossistema de Psicologia Social para Gestão Pública

Repositório central da PAAPS: site institucional, produção de conteúdo por equipe de
agentes, e as automações de negócio. Este README é a placa na porta: mostra o que é
cada pasta e por onde começar. As instruções detalhadas de trabalho ficam no
`CLAUDE.md` (mapa mestre lido pelo Claude Code).

> **Repositório PRIVADO.** Desde julho/2026 este repo é privado, porque passa a conter
> a orquestração de automações que lidam com chaves de anúncio, e-mails e dados
> pessoais de leads e de servidores de prefeituras (LGPD). Conteúdo proprietário da
> PAAPS; uso não autorizado proibido.

---

## O que é a PAAPS

Negócio social que cria e implementa projetos em psicologia, saúde mental e impacto
social em rede para a gestão pública (B2G). Posicionamento: a Rede da Saúde Mental
Coletiva para as Prefeituras à prova de futuro. CEO Founder: Mallu Vasconcellos.

Projetos do ecossistema: PAAPS, TEAtrar, ECOA (comunidade de aprendizagem), Periódico
da Rede PAAPS, Plantão Psicológico, e o case de prova de conceito de Bela Vista de
Minas.

---

## Mapa das pastas

| Pasta | O que é |
|---|---|
| `site/` | Site institucional (HTML/CSS/JS) e material de referência de design |
| `conteudo/` | Equipe de agentes de conteúdo, ciclos, eventos, dashboard de analytics |
| `automacoes/` | **As 5 frentes de automação do negócio** (ver `automacoes/README.md`) |
| `insumos-compartilhados/` | Acervo comum: voz da marca, identidade, docs institucionais |
| `sessoes/` | Logs automáticos de cada dia de trabalho (gerados por hook) |
| `.claude/` | Agentes, skills e configuração do Claude Code |

---

## As 5 frentes de automação

Detalhe completo em [`automacoes/README.md`](automacoes/README.md):

1. **Tráfego pago** - campanhas em LinkedIn, Google e Meta Ads (Facebook + Instagram).
2. **Pipeline de conteúdo** - carrosséis, roteiros de reels e vídeos de 40s, por agentes.
3. **Crescimento no Instagram** - ganhar seguidores e afunilar para a Comunidade ECOA.
4. **Funil de leads** - formulário de pesquisa no site ligado à captação.
5. **Prospecção fria** - e-mails personalizados para prefeituras do Brasil.

---

## Regra de ouro dos segredos

Nenhuma chave, senha, token ou lista de dados pessoais entra neste repositório, mesmo
sendo privado. O padrão:

- As chaves reais ficam em um arquivo `.env` local, que o `.gitignore` proíbe de subir.
- O repositório guarda só o `.env.example`: a lista dos nomes das chaves, com valores
  falsos, para quem for configurar saber o que preencher.
- Dados de leads e de prefeituras (nomes, e-mails, cidades) vivem no CRM ou em planilha
  privada, nunca aqui.

---

## Como o trabalho é salvo

Um hook automático (auto-push) commita e envia tudo ao GitHub ao final de cada sessão do
Claude Code. Um agendador do macOS (`com.paaps.autopush`), quando ativado, faz o mesmo a
cada 15 minutos, mesmo com o Claude fechado. Backup manual, se necessário:

```bash
cd "/Users/mac/Documents/SITE PAAPS"
git add -A && git commit -m "descrição da alteração" && git push
```

---

## Estado e próximos passos

O plano de ação consolidado (o que já foi feito e o que falta, com prioridade) está em
[`PLANO-DE-ACAO.md`](PLANO-DE-ACAO.md).
