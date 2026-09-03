## Revisão: Peça 3 (card único) : envelhecimento populacional
**Data:** 2026-09-02
**Suporte:** estática (HTML/CSS renderizado em PNG, 1080×1350)
**Peça:** `conteudo/instagram/paaps.brasil/entregas/2026-09-SETEMBRO/sessao-03-card/export/slide-01.png`
**Veredicto:** APROVADO COM RESSALVA

> Nota de execução: nesta sessão o toolset disponível não incluía a ferramenta de subagente
> (Agent/Task). A auditoria abaixo foi conduzida pelo Aplicador Visual seguindo o protocolo
> literal de `.claude/agents/critico-design.md` (mesmos arquivos-fonte, mesmo checklist, mesmo
> formato de saída), não por uma chamada real ao agente critico-design. Registrar essa
> substituição para a Mallu decidir se quer uma segunda passada por um critico-design de
> verdade antes de publicar.

---

### CRITÉRIO 1 : IDENTIDADE VISUAL PAAPS

- ✅ Paleta: só `--cor-marrom`, `--cor-branco`, `--cor-amarelo` e rgba(255,255,255) em uso. Nenhum hex fora do sistema.
- ✅ Tipografia: Helvetica em headline/apoio/rodapé; League Spartan carregada via @font-face mas não usada neste slide (não há label/tag), o que é coerente, não uma falta.
- ✅ `letter-spacing:0` em todo o CSS; peso só 400 (apoio) e 700 (headline, rodapé).
- ✅ Border-radius: nenhum elemento com raio, 0 em tudo.
- ✅ Logo: `logo-branco.png` sobre fundo marrom escuro — versão correta para o fundo.
- ✅ Grain/textura: `.textura--branco` presente sobre o card, opacidade 0,05, `no-repeat`, `background-size:140%` — exatamente os valores calibrados na anatomia de referência, não inventados.
- ✅ Lei 5 (um destaque por slide): só "35,2 MILHÕES" em amarelo. "Não em Maceió. Não em João Pessoa." está em itálico sem cor, então não compete como segundo murro — correção já aplicada na rodada 2 do crítico de conteúdo, confirmada aqui na peça final.
- ✅ Lei 6 (meio da foto respira): nenhum texto sobre a foto; o corpo inteiro senta na área sólida abaixo. Nenhum rosto ou gesto coberto.
- ⚠️ Lei 3 (crédito nomeado): **omitido corretamente**, não por descuido. `fotos-peca3.md` já registra "sem crédito conhecido" e a regra manda omitir a linha quando a origem não é rastreável, nunca inventar. Tecnicamente conforme a Lei 3 e ao precedente da peça de referência (2 fotos sem crédito, aprovadas). Mas isso é diferente de "sem problema": ver ressalva de proveniência abaixo, que é sobre direito de imagem, não sobre a regra de design.

### CRITÉRIO 2 : WEB INTERFACE GUIDELINES (17 categorias, transpostas para peça estática)

- CAT 1 Acessibilidade: N/A direto (peça é imagem), mas hierarquia visual clara (foto → headline → apoio → fonte) cumpre o equivalente.
- CAT 5 Tipografia: números em formato pt-BR ("35,2 milhões", "16,6%"), sem reticências literais "...", sem aspas retas soltas. ✅
- CAT 6 Conteúdo/densidade: ⚠️ o parágrafo de apoio renderiza em ~5 linhas, acima da referência "máx. 4 linhas de corpo" da tabela de transposição. Não bloqueante: é card único (formato mais denso por natureza, já justificado no comentário do próprio `index.html`), a fonte é 24px/1.44 e o contraste é alto, então a leitura não é comprometida. Registro como ponto de atenção se "card único" virar padrão de produção.
- CAT 7 Imagens: crédito ausente por regra (ver Lei 3 acima), não por omissão; nenhum elemento essencial da foto cortado (as duas mulheres inteiras, gesto e rostos visíveis; o crop já remove o homem desfocado ao fundo, conforme a nota de entrega do Buscador).
- CAT 10/11 Touch & Safe areas: corpo mínimo 16px (rodapé) e 24px (apoio), acima do equivalente a 14px CSS; nenhum elemento essencial encostado na borda (padding 52/64/44px); logo e rodapé não colidem no render final.
- CAT 13 Locale: datas como "abr. 2026" / "mai. 2026", consistente com o padrão de citação já usado no corpus; números em vírgula decimal pt-BR.
- CAT 16 Copy: voz ativa, sujeito estrutural nomeado ("o Estado escolheu investir"), sem "não é X, é Y".
- CAT 17 Anti-padrões: sem chapéu/eyebrow, sem gradiente, sem sombra dramática, sem fonte de sistema.

---

### ❌ CRÍTICOS (corrigir antes de publicar)
Nenhum.

### ⚠️ MÉDIOS (corrigir se possível, não bloqueia)
1. Densidade do parágrafo de apoio (5 linhas) acima da referência de 4 linhas por bloco — aceitável neste formato de card único, mas vira pauta se o formato repetir.
2. Crédito de foto ausente por regra (Lei 3), mas a proveniência da foto (projeto de origem incerto, licença não declarada, consentimento de imagem não confirmado) é uma pendência de direito de imagem, não de design. Fora do escopo deste crítico, mas bloqueia a publicação até a Mallu decidir — repetido na entrega final abaixo.

### ⭐ EXCELÊNCIA (preservar e replicar)
- Resolução do slide "denso" sem overlay/véu: como o texto inteiro mora numa área sólida abaixo da foto (não sobre ela), o card não precisou de véu escurecido nem comprometeu a legibilidade — mais limpo que forçar overlay sobre a cena.
- Hierarquia de destaque única (amarelo só em "35,2 MILHÕES") mantida mesmo com um segundo trecho de cadência forte ("Não em Maceió. Não em João Pessoa."), que ficou em itálico sem cor.
- Rodapé com duas fontes, cada uma amarrada à alegação específica que sustenta, cumprindo a régua de rastreabilidade sem virar bloco único genérico.
