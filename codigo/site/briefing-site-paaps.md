# Briefing do site PAAPS : handoff para quem for construir

> Consolidado em 02/08/2026, a partir de uma sessão inteira de calibração com a Mallu.
> Leia junto: `insumos-compartilhados/docs/o-que-e-a-paaps.md` (o que a PAAPS é) e
> `insumos-compartilhados/docs/metodologia-paaps.md` (o que vende e como explica).
> A hierarquia de cor está no topo de `codigo/site/DESIGN-SYSTEM.md` e manda sobre o resto dele.

---

## 1. O que mudou e invalidou material antigo

- **PAAPS Brasil é nome próprio.** A expansão "Programa de Aceleração Ativa de Projetos Sociais"
  saiu de toda peça pública; vive só no contrato social. "Aceleração" comunica velocidade, e a
  PAAPS comunica cuidado.
- **`codigo/site/paaps-site/` está reprovado.** Não usar como base. Reaproveitável só o mecânico:
  a esteira de nomes, os marcadores de pontinhos, a estrutura de pastas.
- **`PROMPT_CLAUDE_CODE_SITE_PAAPS.md` está obsoleto.**
- O `DESIGN-SYSTEM.md` v1.0 contradizia a calibração nova em vários pontos. A seção de hierarquia
  no topo dele é a correção e tem precedência.

## 2. Léxico fechado: só estas 4 frases de posicionamento

- **Cuidamos de Funcionários Públicos para uma Saúde Mental Coletiva.** (título da home)
- **Propósito: Transformar o Cuidado no Brasil.**
- **Lema: Cuidar da Ponta, impactar o mundo.**
- **Somos a Rede de Saúde Mental para as Políticas Públicas do futuro.**

Adaptação permitida: cortar o começo ou o fim de uma delas. **Nenhuma expressão nova entra**, nem
que seja boa, nem que venha de material interno da PAAPS. "À prova de futuro" só quando o contexto
realmente discute futuro.

**Palavras-chave a repetir no site:** treinamento, capacitação, profissionais da rede pública,
população, funcionário público, agente público, **postinho**, território, políticas públicas,
prefeituras, municipais, município, rede.

## 3. Proibido, sem exceção

- **Travessão grande `—`**: em nenhum lugar, nem em código, comentário ou commit. Usar `:` `;` `-`.
- **Palavras difíceis:** supraestrutura, holístico, íntegro, rede viva, dispositivo, metodologia
  proprietária, programa, absenteísmo (dizer **faltas e afastamentos**).
- **Metáforas de sangue, ferimento, guerra e competição.**
- **Linguagem coachesca:** mindset, alta performance, virada de chave, escala, fórmula.
- **Promessa ou garantia de resultado.** Leitura individualista ou meritocrática.
- **"Cuidar de quem cuida" como eixo**: virou clichê de mercado e é a assinatura do concorrente.
  Uso pontual, no máximo.
- **Nunca citar:** Minerva (nem o vocabulário dela), Associação Allos, PROSAMES, Bela Vista de
  Minas, Refazenda Rio Xopotó, Motiva/CCR.
- **Nunca comparar ou depreciar concorrente.** Afirmar o que a PAAPS faz e deixar o contraste
  aparecer sozinho.

## 4. Quem lê o site

Gestor público e gestor de ONG de **município pequeno**, muitos sem formação universitária.
Existe uma linha tênue: certas coisas impressionam e aproximam, outras assustam e afastam.
**Teste:** se um secretário de uma cidade de 3 mil habitantes precisar procurar uma palavra, a
frase está errada.

O que toca esse gestor: "a capacitação foi boa no dia e na segunda-feira tudo voltou ao que era".
O que afasta: dado macro da OCDE, jargão de metodologia, nome de universidade estrangeira.

**Dois clientes:** gestão pública (primeiro, mais peso) e ONGs/projetos sociais (segundo).
**Duas formas de comprar:** o conjunto, ou um item avulso.

## 5. O diferencial, e por que ele ganha

A PAAPS conhece a rede por dentro, com nome e sigla: postinho, Atenção Básica, CAPS, CRAS, CREAS,
proteção social básica, média e alta complexidade, escola, matriciamento. É prova de pertencimento
que o concorrente não consegue imitar.

> Um oferece atendimento para o servidor que já adoeceu.
> A PAAPS redesenha a rede que está adoecendo as equipes.

## 6. Arquitetura: 5 páginas, nada mais

```
HOME  (explica a PAAPS + as duas portas de público dentro dela + seção da fundadora)
  ├── TREINAMENTOS
  ├── COMO ATUAMOS   (dentro: Cuidado e Integração de Rede)
  ├── EMERGÊNCIAS    (título a definir com a Mallu)
  └── CONTATO
```

Risco a evitar: amplitude. O visitante precisa dizer numa frase o que a PAAPS vende.

**Copy afunila:** objetiva, acessível e imaginativa nas primeiras dobras; a densidade só cresce
depois, de forma pedagógica. A v1 foi reprovada por parecer "texto de blog".

## 7. Design

**Hierarquia de cor, nesta ordem:** bege `#f5f1e1` dominante · marrom `#442309` · amarelo `#f7c31c`
em palavra-chave · verde oliva `#aea349` em fundo discreto · terracota `#cb4710` raro · roxo quase
nunca.

**Texto sobre foto:** bege ou amarelo (marrom se a foto for clara), **League Spartan CAIXA ALTA**,
sobre preto a **70% de transparência**, leve.

**Fontes:** Helvetica/Nimbus Sans no corpo (400 e 700, letter-spacing 0), League Spartan em título,
Evermore em palavra-chave. Todas embutidas por `@font-face` de
`insumos-compartilhados/nucleo-comum/fontes/`. **Nunca Google Fonts.**

**Regras técnicas que vieram do benchmark:**
- Primeira dobra **estática**, sem depender de JavaScript. Nenhum número pode zerar se o script
  falhar (o concorrente e o DESIS erram nisso e a prova social deles some).
- Navegação por público, não por categoria interna.
- Sequência dor → caso → resultado, nunca grade de pilares abstratos.
- Um pedido por bloco, nunca dois CTAs competindo.
- Nunca mais de duas seções seguidas com o mesmo fundo.
- Muita foto ocupando a tela inteira com texto por cima.

**Referências:** Agenda Pública (bloco de solução, paleta) · Oré (foto alta no centro com cards de
público ladeando: é o padrão das duas portas) · Dengo (respiro, coluna dupla calma) ·
Yunus (estética da página de emergências) · O Futuro das Coisas (formulário qualificador no hero).

## 8. Foto

**Toda foto tem legenda, sem exceção.**
- Própria: nome do case. Ex.: *Bela Vista de Minas, Minas Gerais : capacitação de equipe*
- De terceiro: crédito. Ex.: *Foto: Radilson Carlos Gomes, fotógrafo do SUS*
- Autoria não localizada: aplicar com legenda e **sinalizar a pendência na entrega**

**Radilson Carlos Gomes, fotógrafo do SUS**, é a espinha visual do site. 33 fotos em 2560px em
`insumos-compartilhados/fotos-radilson/`. São gente de verdade, SUS de verdade, Brasil de verdade.
Acervo próprio: `insumos-compartilhados/fotos/` (316 fotos), Mallu em `fotos/FOTOS mallu/`.

**A Mallu aparece só na seção dela na home:** breve, humana, impactante. Em nenhum outro lugar.

**Nenhum logo de terceiro no site.** Só os da PAAPS. Clientes viram nome escrito em esteira.
Credibilidade por texto: "consultores com mais de 25 anos de carreira executiva" e "professores e
educadores com mestrado ou doutorado".

## 9. Dados autorizados

Fonte: o **PAAPS FrameWork** no Notion. O que não estiver lá exige pesquisa nova por fonte oficial.

**Faltas e afastamentos** (Min. da Previdência, 2025, divulgado jan/2026): 546.254 benefícios por
transtornos mentais · +15,66% sobre 2024 · Minas Gerais é o 2º estado, 83.321 · **63,46% são
mulheres**, exatamente quem sustenta a ponta.

**SUS:** 220 milhões de pessoas · 265 mil agentes comunitários · CAPS de 424 (2004) a 3.013 (2018).
**Assistência social:** 8.357 CRAS · CREAS em ~3.000 municípios (Censo SUAS).
**Formação:** Freeman et al., PNAS 2014, 225 estudos.

**NR-1** (Portaria MTE 1.419/2024, autuação desde 26/05/2026): entra como mudança de fase, **nunca
como susto**, e nunca como argumento principal. **Ressalva obrigatória:** as NRs obrigam órgãos
públicos apenas quanto a empregados regidos pela CLT; servidor estatutário fica formalmente fora.
Nunca afirmar que a NR-1 alcança toda a administração pública.

**Case:** Desterro do Melo (MG), 2024. ~3 mil habitantes, um posto de saúde, duas escolas. Um ano
em 6 instituições · 120+ pais no Dia da Família · os 3 candidatos a prefeito assinaram a Carta
Melo 2050. É prova, não é o foco. **O foco é o que a PAAPS faz.**

## 10. Fila da próxima sessão

1. Importar o design system pelo MCP `claude_design` (já registrado no `.mcp.json`; precisa de
   `/mcp` para autorizar numa sessão interativa)
2. Refazer a home: título novo, copy afunilada, paleta correta, foto de tela cheia com texto por cima
3. Resolver "supraestrutura" pela ideia de **ELO** ("a rede pública cuida da população; a PAAPS
   cuida da rede")
4. O mapa ilustrado e iterativo da cidade mineira, com a rede por cima e a lupa que revela os
   servidores: antes adoecidos no corredor, depois em psicoterapia e treinamento
5. Definir o título da página de Emergências
6. Ler as duas análises pendentes no Notion: "Cuidar de Quem Cuida" e "Simulação de UX, 3 personas
   × 12 sites"

## 11. Pendências que só a Mallu resolve

- Título da página de Emergências
- Autoria das fotos `lema.jpg` e `caso.jpg` (Desterro do Melo)
- Faixa de investimento por porte de município (ninguém no mercado mostra preço; seria vantagem)
- Lista final de clientes para a esteira de nomes
- Quem decide e com que dinheiro compra, do lado das ONGs
