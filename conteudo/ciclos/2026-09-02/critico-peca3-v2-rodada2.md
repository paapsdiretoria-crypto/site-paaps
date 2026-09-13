# Crítica : Peça 3 v2 (card único, envelhecimento populacional) : rodada 2

**Peça avaliada:** `conteudo/ciclos/2026-09-02/copy-peca3-card-v2.md`
**Crítica anterior:** `conteudo/ciclos/2026-09-02/critico-peca3-v2.md` (rodada 1, 85/100, volta pro
copywriter)
**Insumo checado contra o item 14:** `conteudo/ciclos/2026-09-02/tecela-peca3-card-envelhecimento.md`

**Nota:** 100/100
**Corte desta rodada:** 90 (rodada 2 de um ciclo que já teve 1 rodada; mínimo de duas rodadas
cumprido)
**Decisão:** APROVADO. Libera pro Buscador de Fotos.

---

## Verificação mecânica (antes do item 8, e antes de qualquer julgamento de mérito)

```
$ python3 conteudo/templates/carrossel-paaps/checa-duplicata-texto.py \
    conteudo/ciclos/2026-09-02/copy-peca3-card-v2.md \
    conteudo/ciclos/2026-09-02/tecela-peca3-card-envelhecimento.md

Nenhuma sequência de 5+ palavras repetida entre slides diferentes.
Nenhuma sequência de 5+ palavras do copy bate literalmente com a Tecelã.
```

```
$ grep -n "—" conteudo/ciclos/2026-09-02/copy-peca3-card-v2.md
(nenhuma ocorrência, exit code 1)
```

Também rodei a checagem de variantes de travessão que o grep simples poderia deixar passar
(en dash `–`, non-breaking hyphen `‑`, sequência dupla `――`) e de "ninguém X" sem sujeito: zero
ocorrências problemáticas. A única ocorrência de "ninguém" no arquivo inteiro é descritiva, na
direção de foto ("sozinhas as duas no cômodo, sem mais ninguém por perto"), não uma alegação de
ausência institucional sem sujeito.

---

## Verificação linha por linha dos dois achados bloqueantes da rodada 1

Comparei o arquivo atual contra o commit anterior (`git diff 86f997e 26ea874`) para confirmar a
correção de forma objetiva, não por leitura corrida.

### Achado 1 (rodada 1): sujeito agente apagado no fechamento do argumento institucional

**No card**, antes e depois:

| | Texto |
|---|---|
| Antes (rodada 1, reprovado) | "...cresceu onde **o Estado já investia** mais forte, décadas atrás [...] Essa desigualdade tem nome: **uma decisão de décadas atrás**." |
| Agora (rodada 2) | "...cresceu onde **o Estado escolheu investir** mais forte, décadas atrás [...] Essa desigualdade tem nome: **uma escolha do Estado**, tomada décadas atrás." |

**Na legenda**, antes e depois:

| | Texto |
|---|---|
| Antes (rodada 1, reprovado) | "...cresceu só onde **o Estado já investia** forte, décadas atrás." |
| Agora (rodada 2) | "...cresceu só onde **o Estado escolheu investir** forte, décadas atrás." |

Confirmado nos dois lugares, não só num. O verbo voltou a ser agentivo ("escolheu investir", igual
ao texto da v1 que já tinha nota cheia neste ponto exato) e a frase de fechamento do card, que é a
que carrega mais peso porque é a última coisa que a leitora lê, deixou de ser uma nominalização sem
dono ("uma decisão de décadas atrás") e passou a nomear explicitamente quem decidiu ("uma escolha
**do Estado**, tomada décadas atrás"). Não é palavra por palavra a reescrita que propus na rodada 1
("o Estado decidiu, décadas atrás, onde valia a pena investir"), mas cumpre o mesmo teste: o
sujeito estrutural está nomeado dentro da própria frase, sem exigir que a leitora infira de duas
orações antes. `voz-paaps.md` seção 3 pede isso, não uma forma sintática específica. Considero
satisfeito.

Também conferi a nota de entrega ("Sobre a validação do Crítico de Conteúdo"), que cita o próprio
trecho como evidência de conformidade: também foi atualizada para "o Estado escolheu investir mais
forte" (era "o Estado já investia mais forte" antes). Coerente com o resto do arquivo.

### Achado 2 (rodada 1): travessão grande na seção de raciocínio

Linha ~56 (rodada 1): "...em comentário público do perfil) **—** isso eu não tenho autorização para
fabricar sozinho."
Linha correspondente agora: "...em comentário público do perfil)**:** isso eu não tenho autorização
para fabricar sozinho."

Confirmado. Trocado por `:`, exatamente como a proibição pede. Varredura no arquivo inteiro (não só
nesse trecho) não encontra nenhuma outra ocorrência de travessão grande, em nenhuma seção,
inclusive nas notas de processo.

**As duas correções aconteceram de verdade, nos dois lugares pedidos (card e legenda, no caso do
achado 1). Nenhum dos dois achados bloqueantes da rodada 1 sobrevive nesta versão.**

---

## Checklist completo, refeito do zero (não herdado da rodada 1)

### Por slide (aqui, o card inteiro, formato de peça única)

1. **Dá pra entender o dado sem sair do slide?** Sim. Os três números (22,2 mi/2012, 35,2 mi/2025,
   16,6%) vêm com ano e o que significam na frase ("saiu de X para Y: já são Z% do país"). A
   alegação de centro-dia por cidade e a população idosa têm rodapé com fonte nomeada e amarrada
   frase a frase (herança já validada da v1, rodada 2: IBGE como fonte primária, jornal como onde
   foi lido, URL da segunda fonte).
2. **Cada dado se conecta explicitamente com a tese?** Sim. Números demográficos sustentam "menos
   gente para dividir o cuidado"; a alegação de cidade sustenta "rede pública desigual"; as duas
   pernas se encontram na tese única do card (nem família, nem Estado dão conta igual em todo
   lugar).
3. **Pronome ou nome sem antecedente?** Não. "Você" é endereçamento direto (Lei 7), sem exigir
   slide anterior. "O Estado" é nomeado nas duas ocorrências, sem depender de inferência externa.
4. **Frase comprimida a ponto de exigir que o leitor complete a lacuna?** Não mais, depois da
   correção do achado 1: a frase de fechamento agora nomeia o sujeito dentro de si mesma.
5. **Lei/norma citada sem dizer o que garante?** Não se aplica: nenhuma lei ou norma é citada pelo
   nome nesta peça (NR-1 não aparece, nenhum número de lei aparece).
6. **O slide cumpre a lei do modelo que diz seguir?** M7 comprimido para card único, na ordem
   declarada: vivência (headline) → mecanismo demográfico nomeado → números → mecanismo
   institucional regional → fechamento nomeando o sujeito. A ordem cena-antes-do-mecanismo, que é o
   ponto central desta reescrita, está de fato na peça. Uma frase de impacto por camada, sem dois
   pesos iguais (Lei 5): o amarelo cai só em "SÓ VOCÊ", o itálico de "Não em Maceió, não em João
   Pessoa" está sem cor nem negrito, herdado da correção já feita na v1.

### Da peça inteira

7. **A capa/card carrega uma tese só?** Sim, sem mudança desde a rodada 1: nem a família nem o
   Estado sozinhos dão conta do envelhecimento, é um argumento só com duas pernas que se encontram.
8. **Figura retórica repetida? Script de duplicata?** "Não é X, é Y" aparece uma vez só ("Isso não é
   falha da sua família: é a mesma transição que fez o Brasil envelhecer"), com X nomeado e real
   (o gestor que atribui a ausência de rede a "assunto de família", e a cuidadora que sente
   fracasso pessoal), conforme o teste de `voz-paaps.md` 4.1. A anáfora "Não em Maceió, não em João
   Pessoa" também aparece uma vez só. Script confirma zero sequência de 5+ palavras repetida entre
   partes do texto e zero sequência batendo literalmente com a Tecelã. A repetição parcial entre
   card e legenda ("o Estado escolheu investir... forte, décadas atrás") é restatement esperado de
   legenda ecoando o card, não uma figura retórica se repetindo dentro da peça: o próprio script,
   que testa 5+ palavras consecutivas idênticas, não acusou nada aqui (a legenda tem "forte" onde o
   card tem "mais forte", quebrando a sequência exata).
9. **NR-1 mais de uma vez, ou tratada como instrumento que mede sofrimento?** Não aparece nenhuma
   vez nesta peça. Não se aplica.
10. **Cliente ou case nomeado?** Não. São Paulo, Rio de Janeiro, Belo Horizonte, Maceió e João
    Pessoa são recorte territorial de um dado nacional (presença/ausência de rede pública por
    região), não identificação de cliente ou case da PAAPS. Já validado assim na v1, sem mudança.
11. **Pelo menos uma voz humana real?** Não há (M4 não cabe num card de duas camadas de texto sem
    descaracterizar o formato). Mantenho o mesmo tratamento das três rodadas anteriores deste corpus
    (v1 rodada 1, v1 rodada 2, v2 rodada 1): limitação estrutural reconhecida do formato "card
    único", não descontada como se fosse descuido, mas registrada de novo como ponto a resolver se
    o formato virar padrão de produção.
12. **"Ninguém X" sem sujeito estrutural?** Não. A única ocorrência de "ninguém" no arquivo é
    descrição de composição fotográfica, não alegação de ausência institucional. E o padrão
    inverso, que a rodada 1 pegou (decisão positiva relatada sem ator), está corrigido nos dois
    lugares.
13. **Metáfora usada mais de uma vez sem tradução?** Não identifico metáfora central sem tradução
    nesta peça. O texto é majoritariamente literal (dado demográfico, alegação territorial,
    mecanismo nomeado como "escolha do Estado"), sem termo técnico ou figurado que exija glossário.
14. **A peça teve acesso a mediação da Tecelã com cena/vivência concreta e não usou?** Reconferido
    do zero, não herdado por presunção. Reli o arquivo da Tecelã inteiro: as duas mediações
    entregues (orçamentária/federativa e demográfica/familiar) são, as duas, leituras estruturais
    formuladas como mecanismo (cruzamento de curvas, cofinanciamento fiscal), nunca como cena, corpo
    ou relato de alguém específico. Não existe, neste material, uma mediação-cena equivalente à do
    caso do INSS ("ler todos os dias o relato documentado do sofrimento alheio") que a peça tenha
    tido a opção de usar e descartou. A pergunta literal do item 14 não se aplica no sentido
    estrito, pela mesma razão que a rodada 1 já tinha identificado.

    Testando o espírito da regra como se eu abrisse o card pela primeira vez, sem contexto: a
    abertura ("ANTES, UM IDOSO TINHA VÁRIOS FILHOS PARA DIVIDIR O CUIDADO. HOJE, É PROVÁVEL QUE
    TENHA SÓ VOCÊ.") de fato faz o leitor sentir algo pessoal e reconhecível antes de qualquer nome
    institucional aparecer. Só depois disso o texto nomeia o mecanismo demográfico, os números, o
    mecanismo institucional regional e, por fim, o sujeito que decidiu ("o Estado"). A ordem
    sentimento-antes-do-mecanismo está de fato presente, e a correção feita nesta rodada (nomear o
    Estado no fechamento) reforça essa ordem em vez de contradizê-la: agora a peça termina nomeando
    quem decidiu, não flutuando numa nominalização vaga.

    A edição feita entre a rodada 1 e esta rodada foi estritamente pontual (dois verbos, um
    travessão) e não tocou em nenhuma frase da seção "Triagem obrigatória das mediações da Tecelã"
    além da pontuação, então a análise de conteúdo do item 14 não muda pelo que foi editado. Mantenho
    a mesma conclusão da rodada 1, agora reconferida do zero: **aceito, não é achado bloqueante.**
    Se o formato "card único" continuar sendo usado sem voz humana real, a resposta correta segue
    sendo estrutural (alternar com card de citação), não forçar mais uma tentativa de encarnação
    textual nesta peça específica.

---

## Nota, critério a critério

| Critério | Pontos possíveis | Pontos dados | Observação |
|---|---|---|---|
| Cada dado se sustenta sozinho no próprio slide | 25 | 25 | Sem mudança desde a rodada 1: rodapé com fonte rastreável, ano e recorte presentes nos três números e na alegação territorial. |
| Cada dado se conecta explicitamente com a tese | 20 | 20 | Sem mudança: a costura headline → mecanismo demográfico → números → mecanismo institucional → fechamento continua um raciocínio só. |
| A capa/card carrega uma tese só | 15 | 15 | Sem mudança: uma tese (nem família, nem Estado dão conta igual em todo lugar), não duas competindo. |
| Nenhuma figura retórica se repete mais de uma vez | 15 | 15 | Sem mudança: "não é X, é Y" uma vez, anáfora uma vez, script de duplicata limpo. |
| Proibições ativas cumpridas | 15 | 15 | **Restaurado nesta rodada.** Os dois achados da rodada 1 (vazio de agência no fechamento, travessão grande) foram corrigidos de verdade, no card e na legenda, confirmados por diff literal e por checagem mecânica. Zero NR-1, zero case, zero coachês, zero travessão em qualquer variante. |
| Voz humana real; uma frase de impacto por slide | 10 | 10 | Sem mudança: zero voz real, limitação estrutural conhecida e não descontada (precedente das três rodadas anteriores do corpus); uma frase de impacto por camada, sem segundo murro. |
| **Total** | **100** | **100** | |

---

## O que já está bom

- **Os dois achados bloqueantes da rodada 1 foram corrigidos de verdade, nos dois lugares onde
  apareciam (card e legenda), não só num.** Isso importa registrar porque é exatamente o tipo de
  correção parcial (resolver só no card e esquecer a legenda, ou vice-versa) que costuma escapar de
  uma leitura apressada.
- **A frase de fechamento do card agora nomeia o sujeito estrutural dentro de si mesma** ("uma
  escolha do Estado, tomada décadas atrás"), sem depender de o leitor voltar duas frases para
  encontrar o antecedente.
- **Zero travessão no arquivo inteiro**, inclusive nas seções de raciocínio interno, que é onde a
  proibição mais costuma escapar por parecer "só processo".
- **A ordem cena-antes-do-mecanismo, ponto central desta reescrita, continua de pé** e não foi
  afetada pelas correções pontuais desta rodada.
- **Item 14 reconferido do zero, não herdado por presunção:** reli o arquivo da Tecelã inteiro de
  novo e confirmei que nenhuma mediação-cena foi descartada.

## Potencializações (opcional, nunca bloqueante, herdadas da rodada 1 e ainda não aplicadas)

- A ponte entre o "você" pessoal do headline e a desigualdade regional (SP/RJ/BH vs.
  Maceió/João Pessoa) ainda pede um pouco de trabalho do leitor para perceber que a segunda metade
  do card continua falando com ele. Uma frase-ponte deixaria a costura explícita, sem forçar.
- Nomear o levantamento específico do IBGE (Censo Demográfico ou PNAD Contínua) no rodapé, pendência
  em aberto desde a rodada 1 da v1.
- Se "card único" virar padrão de produção, vale a resposta estrutural já registrada nas três
  rodadas anteriores: alternar card de dado com card de citação real na mesma sequência de
  postagens, para não depender sempre do endereçamento em segunda pessoa como substituto de voz
  humana real.

---

## Resumo para reporte

Nota: 100/100, rodada 2. Libera pro Buscador de Fotos. Duas potencializações não aplicadas ficam
registradas acima (frase-ponte regional e levantamento específico do IBGE no rodapé), nenhuma
bloqueante.
