# Pendências do pitch Serasa

> Escrito em 22/08/2026, no fim da sessão, antes de um compact.
> Prazo da inscrição: **31/08/2026**. Deck em `index-v4.html` + `pitch.css`.
> Servir por HTTP na pasta `codigo/site` e abrir `?solo=N` para isolar um slide.

---

## 1. Estrutural: um slide que ainda não existe

**Slide novo: a parceria com a Serasa.** Decidido pela Mallu nesta sessão, ainda não
construído.

| Campo | Definição |
|---|---|
| Onde entra | **logo depois do slide 12, Tecnologia (app Ponto de Apoio)**. O deck vai a 19 slides |
| Do que trata | o que a PAAPS e a Serasa fazem juntas, e **principalmente que dado da Serasa a PAAPS vai usar** |
| O que já existe pronto para ele | o bloco de indicadores que saiu do slide 17, guardado abaixo |

O bloco de indicadores foi retirado do fecho porque não era lugar dele. Ele é isto, e
entra no slide novo:

```html
<p class="pedido__i rev rev--2">O que vamos medir junto, no <b>Ponto de Apoio</b>, em cada município onde a Roda entrar:</p>
<div class="pedido rev rev--2">
  <span><b>Absenteísmo</b> faltas e afastamentos</span>
  <span><b>Presenteísmo</b> trabalhar adoecido</span>
  <span><b>Solidão</b> no trabalho</span>
  <span><b>Qualidade</b> do atendimento à população</span>
</div>
```

O CSS `.pedido` e `.pedido__i` continua em `pitch.css` e funciona.

**O que falta decidir com a Mallu para esse slide:** qual dado da Serasa entra
(inadimplência por faixa de renda? score? base de endividamento do servidor?), e se o
pedido concreto de contrapartida vive nele ou no fecho.

---

## 2. O que ficou pendente e não é estrutural

- **Slide 17: segunda versao, 22/08/2026.** O vermelho saiu do slide inteiro. O texto
  virou uma carta curta, endereçada, toda em branco, em tres degraus: "Serasa Experian e
  ACE Cortex," / "Essa é Celina. Ela é Agente Comunitária de Saúde, e caminha às mais
  remotas casas do Brasil todos os dias, a 2 salários mínimos." / "NOS AJUDEM A CUIDAR
  DELA?" em caixa alta. Abaixo do filete, a marca pequena e a linha de contato. Ficou so a
  coluna de ODS da direita. **Sairam:** a frase "A PERGUNTA MAIS URGENTE DO SÉCULO XXI É
  QUEM CUIDA DE QUEM CUIDA?", a chamada anterior sobre o guarda-chuva, todo o vermelho, e
  a coluna de ODS da esquerda.
  **PENDENTE DE CONFIRMACAO: o nome "Celina".** A foto e documental, de uma pessoa real,
  do acervo do Radilson Carlos Gomes. Se o nome nao for o dela de verdade, a peca esta
  atribuindo nome e salario a uma pessoa identificavel. Confirmar com a Mallu antes de
  qualquer envio.
  **Verificado:** o piso nacional do Agente Comunitario de Saude e de 2 salarios minimos
  desde a EC 120/2022, entao "a 2 salarios minimos" se sustenta. Existe PEC na Camara para
  subir a 3 para quem tem formacao, ainda nao aprovada.
  **Verificado:** o parceiro se escreve **ACE Cortex**, sem acento (a Mallu ditou "Córtex").

- **Redução das legendas de fonte no deck inteiro.** Era o item grande do plano de ajuste
  fino e só foi feito nos slides que a pesquisa obrigou a mexer (09, 10, 11). Regra dela:
  pode encurtar, mas **nenhuma informação pode ficar sem fonte**, e a fonte precisa ser
  falseável numa busca simples com as palavras-chave usadas.
- **Pente-fino de copy slide a slide.** Ainda não começou. Ela avisou duas vezes que a
  rodada de copy fina viria depois do visual.
- **O "em até X%" do pedido.** Sem base para número de redução. A única referência
  possível é o efeito do estudo britânico (19%), mas é o efeito **deles**, não promessa
  nossa, e transformar um no outro derruba a peça.
- **Slide 16, a escala da foto.** A Mallu achou que aparece grande demais. Não tem solução
  por enquadramento: a foto é retrato (900x1600) num slide deitado, o `object-fit` amplia
  2,13 vezes e só cabe um terço da altura. Só resolve com outra foto, na horizontal.
- **PDF final.** O último exportado está obsoleto. Ao exportar, conferir que o blur das
  caixas de vidro aparece assentado (o `--virtual-time-budget` do script já cobre isso).

---

## 3. Decisões desta sessão que não podem ser desfeitas por engano

- **A capa não tem recorte 3D.** Foi tentado e abandonado: a pasta da agente é escura
  contra o chão escuro e não existe borda para segmentar. A capa é a foto do Radilson
  inteira, com véu leve. Os arquivos `img/capa-pessoas.png` e as classes `.capa-pessoas` e
  `.capa-palavra` continuam no repositório mas estão desligados por CSS.
- **Sistema de vidro:** toda caixa do deck é tinte creme + blur, exceto o roadmap, que
  mantém fundo destacado de propósito.
- **Slide 13:** eixo do roadmap a 48,7% da altura (marcado a caneta por ela), chave
  acoplada logo abaixo, e as duas placas de fase soltas no pé da página.
- **Slide 16:** os chips COO, CMO e CXO foram removidos. No lugar, a frase dela, literal:
  "A escala conta com uso seguro de Inteligência Artificial para operações."
- **Gênero:** é sempre **a PAAPS** e **da PAAPS**. Zero ocorrências masculinas no deck.
- **Point of Care Foundation fechou** (fim de 2025, removida do registro em 15/06/2026).
  Quem licencia as rodas hoje é o Schwartz Center. Verificação completa em
  `VERIFICACAO-SCHWARTZ-POINT-OF-CARE.md`.

---

## 4. Riscos abertos

- **A ata nº 41/2026 é oportunidade e concorrente ao mesmo tempo.** O slide 08 a usa como
  prova de que existe verba, mas ela também é um caminho pronto para o município contratar
  a vencedora (SOMENTE S.A., teleatendimento) por adesão, sem licitar.
- **Marca "Ponto de Apoio":** existe registro vivo no INPI na classe 41, que é o campo da
  DIGGING. Precisa de advogado de propriedade industrial. Detalhe na seção 5 do arquivo de
  verificação.
- **O CRF do FGTS vence em 03/09/2026.** Cobre a inscrição de 31/08, mas por pouco.

---

## 5. Revisao pagina a pagina, iniciada em 22/08/2026

Status que a Mallu deu, slide a slide:

| Slide | Status |
|---|---|
| 01 Capa | **Aprovado**, nada a fazer |
| 02 Problema | **Pendente**: ver a caixa de alerta abaixo |
| 03 Como a PAAPS e a Serasa se conversam | Ela tem alteracoes de copy, ainda nao ditadas |
| 04 Por que agora | **Aprovado**, nada a mudar |
| 05 Solucao | **Refeito nesta sessao** (titulo, subtitulo, terceira caixa) |
| 10 Go to market | Layout aprovado; ela ainda tem alteracoes de copy |
| 11 Concorrencia | Troca feita; ela quer reescrever o slide inteiro, e **nao quer citar Unimed, Conexa e Zenklub pelo nome** |
| 12 Tecnologia | **Aprovado**: uma linha, League Spartan caixa alta, sem Evermore |
| 13 Roadmap | **Aprovado** |
| 17 Fecho | **Aprovado** |

### A troca de argumentos entre o 05 e o 11 (feita)

- **Subiu para o 05:** a regua da OMS (formar gestores e trabalhar a equipe = recomendacao
  forte x intervencao individual = evidencia baixa a muito baixa), agora com a frase de
  alerta em vermelho: "E o unico produto que o mercado vende hoje para a Rede Publica de
  Cuidado brasileira."
- **Desceu para o 11:** o argumento de que sessao individual trata o adoecimento que o
  trabalho produz como culpa de quem nao aguentou. Entrou no titulo, **em carater
  provisorio**: o titulo antigo citava a evidencia da OMS, que nao mora mais ali.
- **Saiu do deck:** os dados 29% / 32% / 31% / 26% e as fontes Heart 2016, Nature Mental
  Health 2024 e Holt-Lunstad 2015.

### ALERTA sobre o slide 02

Os numeros **97%** (educacao), **81%** (saude, Sao Paulo) e **60,3%** (afastamentos) nao tem
rastro em nenhum documento do repositorio: existem so dentro do HTML. E a linha de fonte
credita "Apeoesp, Sao Paulo, 2026", mas a **Apeoesp e o sindicato dos professores do estado
de Sao Paulo**, entao ela nao pode ser a fonte do numero da saude. Item B1 do
`CHECKLIST-PITCH.md`, aberto desde o comeco e nunca respondido.

### Frase sem casa

"Tudo que uma equipe precisa esta nela mesma. A PAAPS desvela as potencias: a solucao ja
existe, so precisa do contexto certo para emergir." Saiu do titulo do slide 05 e a Mallu
quer decidir para onde vai.

### Riscos de afirmacao no novo subtitulo do slide 05

Tres pontos que um avaliador tecnico pode cobrar, registrados para ela decidir:

1. "O unico tratamento eficaz ... e a Roda de Equipe": a recomendacao forte da OMS e para a
   **categoria** (formar gestores e trabalhar a equipe), nao para a Roda de Equipe da PAAPS.
2. "impacta significativamente": "significativamente" e termo estatistico, e a PAAPS ainda
   nao tem tamanho de efeito proprio medido.
3. "o efeito cascata no cuidado prestado a populacao e direto e mensuravel": e justamente o
   que o Ponto de Apoio vai medir, entao hoje e capacidade futura, nao resultado medido.
