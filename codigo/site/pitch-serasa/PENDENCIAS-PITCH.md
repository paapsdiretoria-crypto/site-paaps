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
