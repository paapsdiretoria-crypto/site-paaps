---
setor: 6-sistema
tipo: inventario
resumo: Inventário do Notion GTO e o método real de produção destilado de 4 gravações, com a proposta de 9 agentes ainda sem decisão
status: vivo
atualizado: 2026-09-12
---

# Sistema GTO

Fontes (ficam onde estão, dentro de `conteudo/sistema-gto/`, fora do cofre Obsidian):
`conteudo/sistema-gto/00-BASE-DO-PROJETO-GTO.md` e `01-PLANO-DE-ACAO-GTO.md`, ambos de
13/08/2026.

GTO é o Notion que organiza a produção de conteúdo por cliente (hoje: PAAPS Brasil,
Mallu Vasconcellos, Fabi Vasconcellos). Cada cliente tem uma página em duas colunas:
**coluna 1, contexto** (o que todo agente lê, ninguém escreve sem a Mallu: Fluxo do
trabalho, Web-design, Persona, ICP, Diretório de histórias, Biblioteca de referências) e
**coluna 2, produção** (onde os agentes trabalham: Lista de mineração, Canais, Linhas
editoriais, Calendário editorial, Otimização).

## O achado central: contexto de marca vazio, produção viva

Levantamento de 13/08/2026, base por base:

| Base | Estado |
|---|---|
| Fluxo do trabalho | vazio (3 callouts em branco) |
| Persona | vazio (10 campos) |
| ICP | vazio (9 campos, mapa de empatia) |
| Diretório de histórias do especialista | vazio |
| Biblioteca de estudos e referências | 2 linhas, precisava de 20+ |
| Web-design | rico: análise de 22 slides do post Radilson, paleta, tipografia, 7 layouts |
| Lista de mineração | schema pronto, 4 linhas em branco |
| Canais de comunicação | 11 canais cadastrados, nenhum com `Situação` preenchida |
| Linhas editoriais | vivo, 12 linhas em uso real |
| Calendário editorial | base central, 16 peças, mas o corpo de cada página fica em
  branco: o texto do carrossel mora só dentro do Canva, nunca é copiado pro Notion |
| Otimização | schema com só 3 campos, pobre demais pro que o `paaps-brasil` já
  produz de leitura de performance |
| Photo-bank PAAPS | mais de 100 fotos cadastradas, mas `Fonte`, `Licença` e `Crédito`
  vazios na maioria, com casos de duplicidade já sinalizados à mão |

**Padrão nomeado no documento:** o que é planejamento está vivo, o que é contexto de
marca está oco, e é exatamente o contexto de marca (Persona, ICP, histórias) que faz um
agente escrever como PAAPS em vez de escrever como qualquer IA.

## O método real, destilado de 4 gravações de produção ao vivo

- **Busca:** começa no Google Imagens com a fórmula "tema + fotos", abre a página de
  origem antes de decidir qualquer coisa, nunca decide pelo thumbnail. Hierarquia de
  credibilidade observada: órgão oficial → institucional/acadêmico → imprensa
  estabelecida → perfil jornalístico no Instagram como atalho.
- **Foto tem três origens com regras diferentes:** de terceiro (Google, exige crédito
  visível), de sessão própria de produção (Drive, sem crédito), e busca conceitual
  dentro do Canva (só consultada, nunca usada na peça final nas gravações vistas).
- **Crédito tem formato fixo:** `Foto: [Nome da Fonte]`, Helvetica 19-30, canto inferior
  esquerdo, branco ou off-white sobre a área escura da foto, a caixa é duplicada de
  slide pra slide e só o nome muda.
- **Copywriting alterna três modos:** citação literal da fonte quando é serviço público
  (não reescreve, a manchete já é a melhor copy possível), instrução direta ao leitor em
  imperativo, e frase autoral minerada da própria fala num vídeo já gravado. Escreve
  versão longa primeiro, corta até virar tese.
- **Canva é um arquivo único e contínuo** (`modelos PAAPS.BRASIL`, 43 páginas e
  crescendo), não um arquivo por peça. Sistema tipográfico de 4 níveis: Evermore
  minúscula pra frase-conceito, League Spartan caixa alta pra headline, League Spartan
  menor pro corpo, Helvetica pro crédito.
- **Mineração é um padrão real sem agente dono:** um vídeo já gravado da série gera fala
  E foto própria ao mesmo tempo (mesma sessão, mesmo dia), viram carrossel ou arte
  única. O Calendário já tem os campos certos pra isso (`Forma = Mineração`) mas nenhuma
  peça usou essa opção até agora, todas foram lançadas como `Criação`.

## Onde o agente atual diverge do que a gravação mostra

| Ponto | O agente `buscador-fotos` diz | A gravação mostra |
|---|---|---|
| Busca na internet | proibida por padrão | é a porta de entrada principal |
| Fonte primária | PhotoBank do Notion, por Story | Google Imagens e Drive da sessão |
| Foto própria | "~1 por carrossel, nunca o contrário" | foi 100% das peças mineradas |
| Registro | cadastra a foto no PhotoBank | registra a **fonte** na Biblioteca de referências |

As regras do agente que devem sobreviver segundo o próprio documento: licença não
verificada bloqueia publicação, e licença pública não autoriza imagem de pessoa
identificável.

## Uma proposta de arquitetura existe, status não decidido

O documento de 13/08 propõe uma equipe de 9 agentes amarrados diretamente ao Notion
(`radar-fontes`, `minerador`, `pauteiro`, `tecela`, `copywriter`, `pesquisador-foto`,
`designer`, `critico`, `analista`), com o princípio "nenhum agente tem conhecimento
próprio sobre o cliente, todo contexto vem da página do cliente no Notion". Nenhum dos
três agentes novos que a proposta pede (`minerador`, `pauteiro`, `critico`) foi
construído até hoje (12/09/2026), e `buscador-fotos` não foi reescrito como
recomendado. **Se essa proposta ainda vale, foi superada pela árvore de dois troncos
(`Conhecimento/6-sistema/arquitetura-agentes/`), ou precisa de reconciliação com ela, é
uma decisão em aberto, não resolvida nesta compilação.**

## Perguntas que o próprio documento levanta e seguem sem resposta

1. GTO atende PAAPS, Mallu e Fabi como três clientes com equipe igual, ou é uma equipe
   só com três contextos que troca?
2. A peça "Cuidar da ponta, impactar o mundo" (gravação de 11/08) é conteúdo nunca
   registrado no Calendário, ou é a arte de um item que já existe lá com outro nome?
3. Quem é Fabi Vasconcellos no sistema, e qual o serviço contratado (o campo está
   vazio na base Clientes)?

## Ajustes de schema que o documento recomenda, independente da decisão de arquitetura

- `Lista de mineração` › `O que é`: acrescentar "Conteúdo próprio publicado" e "Vídeo
  da série"
- `Calendário` › acrescentar `Fonte minerada` (relation → Lista de mineração)
- `Calendário` › `Pasta do conteúdo`: passar a preencher sempre
- `Photo-bank` › tornar `Fonte`, `Licença`, `Crédito` obrigatórios de fato
- `Clientes` › `Pasta do cliente`: preencher com o caminho em disco
