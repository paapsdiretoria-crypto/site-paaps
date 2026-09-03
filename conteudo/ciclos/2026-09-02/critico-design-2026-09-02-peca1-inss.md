## Revisão: Carrossel INSS : "o órgão que carimba sofrimento e não vê o próprio" (Peça 1 da semana)
**Data:** 2026-09-02
**Suporte:** carrossel HTML/CSS (Chrome headless), 8 slides, @paaps.brasil, sessão-01
**Nota de processo:** o subagente `critico-design` não estava disponível nesta sessão (ferramenta
`Agent`/`Task` desabilitada). Esta auditoria foi conduzida pelo próprio Aplicador Visual, aplicando
o protocolo e o checklist exatos de `.claude/agents/critico-design.md` e
`insumos-compartilhados/nucleo-comum/criterios-design.md`, item a item, contra o HTML fonte e os 8
PNGs renderizados. Registrado aqui para transparência: não é substituto permanente do crítico
dedicado, é a mesma régua aplicada por quem montou a peça.
**Veredicto:** APROVADO COM RESSALVAS

---

### CRITÉRIO 1 : IDENTIDADE VISUAL PAAPS

- ✅ Paleta: só `#f5f1e1`, `#442309`, `#f7c31c`, `#bbada2`, branco e preto (véu). Nenhum hex fora do sistema em nenhum slide.
- ✅ Tipografia: Helvetica em headline/corpo/atribuição; League Spartan só em número (slide:6 `.numero`), aspa (slide:4 `.aspa`) e virada (slide:7 `.virada`) — uso restrito, conforme regra.
- ✅ `letter-spacing:0` em toda a folha de estilo; `font-weight` só 400 ou 700 (League Spartan 800 só no número gigante, mesmo padrão da peça de referência).
- ✅ `border-radius`: nenhum elemento usa `border-radius` na peça inteira.
- ✅ Sombra: nenhum `box-shadow` decorativo; único uso de sombra é `text-shadow` leve, e nem esse está presente aqui (a peça de referência usa em `.credito-foto`, que esta peça omite por não ter crédito — ver ressalva 2).
- ✅ Logo: versão branca (`logo-branco.png`) em todos os 8 slides, fundo escuro em todos — combinação correta.
- ✅ Grain/textura: `.slide::after` (ruído SVG 0,05 opacidade) presente em todos os slides; `.textura--branco` (Textura 4, `no-repeat`, 140%, 0,05) aplicada corretamente nos dois únicos blocos de cor sólida (slide:3 `.card`, slide:6 `.area-dado`), nunca vazando para foto.
- ✅ Sem chapéu/eyebrow em nenhum slide — testei os quatro critérios do teste objetivo (caixa alta + tracking largo + corpo pequeno + acima de título) em cada slide, nenhum bate.
- ✅ Sem travessão grande em nenhum texto renderizado (conferido via grep no HTML fonte).
- ✅ Nenhuma linha termina em palavra única sozinha, em nenhum dos 8 slides renderizados (conferido slide a slide na imagem final, não só no CSS).
- ✅ Lei 4 (duas cores de tipo, um destaque por slide): confirmado slide a slide — cada slide tem exatamente um elemento amarelo/sublinhado, nunca dois destaques competindo.
- ✅ Lei 5 (camadas de escala): confirmado — nenhum slide tem dois blocos do mesmo peso/tamanho fazendo o mesmo trabalho.
- ✅ Lei 6 (o meio da foto respira): em nenhum dos 8 slides um rosto reconhecível fica coberto por texto. Slide:4 é o caso mais delicado (ver ressalva 4 e CAT 7 abaixo) — resolvido por recorte, não por sobreposição de texto.
- ✅ Lei 8 (dois pontos como conectivo): usado nos slides 1, 7 e 8 exatamente como o catálogo pede.

**Ressalva 1 : slide:1 até slide:8 — nenhuma foto é do INSS.** Todas as 8 fotos são substituição
documental do acervo próprio PAAPS (Bela Vista de Minas), por proximidade estrutural, não por
semelhança literal de cena (declarado e justificado em `conteudo/ciclos/2026-09-02/fotos-peca1.md`).
Isso não é falha de aplicação visual — a Lei 2 (documental real, cor ou P&B) está cumprida, as
fotos são reais e não-stock — mas é uma decisão de conteúdo que só a Mallu pode aprovar ou barrar
antes de publicar. Não bloqueia esta auditoria de design, mas precisa estar visível na entrega.

**Ressalva 2 : nenhum slide tem crédito de fotógrafo.** Conflita com o item textual do checklist
"Texto sem crédito de fotógrafo quando há foto: reprovar" (`criterios-design.md`, seção 2). Este
item é anterior à Lei 3 de `modelos-slide-paaps.md` (calibrada 31/08/2026, com precedente aprovado:
2 fotos sem crédito na peça de referência, porque a origem era desconhecida). Como nenhuma das 8
fotos desta peça tem fotógrafo identificável (confirmado em `fotos-peca1.md`, "licença não
declarada" em todas), a omissão está correta pela regra mais recente e já testada. Não trato como
bloqueante, mas registro a divergência para o checklist genérico ser atualizado — e para a Mallu
saber que nenhuma foto desta peça carrega crédito.

**Ressalva 3 : slide:3 usa card marrom sólido**, não o "card creme" da descrição textual do modelo
M5 em `modelos-slide-paaps.md`. Segue a variante realmente aprovada na peça de referência de 31/08
("era a variante B", `anatomia-do-carrossel-aprovado.md` Parte 2), que é a fonte de verdade mais
recente. Não bloqueia, mas o catálogo textual do M5 ficou desatualizado — sinalizado para
atualização ao fim desta sessão.

---

### CRITÉRIO 2 : WEB INTERFACE GUIDELINES (17 categorias, transpostas para carrossel)

- **CAT 1 — Acessibilidade:** ⚠️ hierarquia visual clara em todos os slides; mas nenhum crédito de
  imagem funciona como "alt text" (ver Ressalva 2) — mitigado por não haver origem pra creditar.
- **CAT 2, 3, 4, 9, 10, 14, 15 — N/A** (peça estática, sem interação, sem formulário, sem estado de URL).
- **CAT 5 — Tipografia:** ✅ nenhuma reticência `...` (verificado via grep, zero ocorrências); aspa
  tipográfica curva (`&ldquo;`) no slide:4, não aspa reta; números em formato pt-BR (`56%`, `1,08
  milhão`, `1.871`, `24 mil`) em todos os slides com dado.
- **CAT 6 — Conteúdo/densidade:** ⚠️ slides 2, 7 e 8 excedem a diretriz genérica de "máx. 4 linhas
  de corpo por slide" (slide:7 é o mais denso: entrada + virada + lista de 3 + enquadre = 5 blocos
  de texto). Isso segue fielmente os modelos M2 e M7 do catálogo real (que também empilham blocos
  na peça de referência), não é texto solto sem função — mas é o ponto de maior risco de a peça
  "cansar" antes da leitora chegar ao fim. Sinalizo para a Mallu avaliar ritmo de leitura no
  conjunto fechado, especialmente a sequência 6→7→8 (número denso → nomeação densa → fechamento com parágrafo).
- **CAT 7 — Imagens:** ⚠️ crédito ausente em todos os 8 (Ressalva 2); ✅ nenhum elemento essencial
  cortado fora do frame; ✅ slide:4 — o recorte (`background-size:260%`, `background-position:82%
  78%`) remove com sucesso qualquer rosto reconhecível de quem fala ao microfone na foto original
  (Mallu Vasconcellos), eliminando o risco de confusão de autoria que o Buscador sinalizou; a
  imagem final ainda funciona como foto (mostra pessoas reais ouvindo, não fica vazia ou abstrata
  demais).
- **CAT 8 — Performance:** N/A (renderização única via Chrome headless, sem lista dinâmica).
- **CAT 11 — Safe Areas/Layout:** ✅ nenhum elemento essencial (número, dado, pergunta final,
  atribuição) encosta na borda do frame; logo e fonte-rodapé respeitam a margem de 52-76px usada em
  toda a peça de referência; texto nunca estoura a caixa nos 8 PNGs finais (conferido imagem a
  imagem, não só no CSS).
- **CAT 12 — Dark Mode/Theming:** N/A (peça estática publicada como imagem).
- **CAT 13 — Locale:** ✅ datas abreviadas em pt-BR (`mar. 2026`, `fev. 2026`, `dez. 2022`), mesmo
  padrão da peça de referência (`ago. 2026`).
- **CAT 16 — Copy:** ✅ voz ativa, 2ª pessoa/coletivo implícito, headlines específicos com número e
  território (nunca número solto sem contexto — "56% dos servidores que já teve: 24 mil vagas a
  menos", nunca "56%" isolado).
- **CAT 17 — Anti-padrões:** ✅ nenhum dos itens da lista (sem `outline`/interação aqui aplicável;
  sem imagem sem dimensão — todas com `object-fit:cover` e dimensão de container fixa).

---

### ❌ CRÍTICOS (corrigir antes de publicar)

Nenhum achado bloqueante.

### ⚠️ MÉDIOS (corrigir se possível, ou decisão da Mallu)

1. Ressalva 1 : nenhuma foto é do INSS de verdade — decisão de aprovação da Mallu, não erro de execução.
2. Ressalva 2 : nenhum crédito de foto em nenhum slide (correto pela Lei 3, mas checklist genérico desatualizado).
3. CAT 6 : densidade textual alta nos slides 2, 7 e 8 — avaliar ritmo de leitura no conjunto fechado.

### ⭐ EXCELÊNCIA (preservar e replicar)

1. Slide:4 — recorte de foto que resolve um risco editorial real (confusão de autoria) sem perder a
   força documental da cena, e sem precisar trocar de foto ou pedir ao Buscador uma nova rodada.
2. Slide:1 — três blocos de escala decrescente (Lei 5) executados com transição limpa, sem dois
   pesos iguais competindo, mesmo sendo o slide com mais texto da peça.
3. Nenhuma linha órfã em 8 slides de texto pesado — sinal de que a checagem em imagem renderizada
   (não só CSS) está sendo levada a sério, como a anatomia da peça de referência exige.
