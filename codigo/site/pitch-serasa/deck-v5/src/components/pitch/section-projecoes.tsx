import { Slide } from "./ui";

/* =========================================================================
   As cinco linhas do modelo, ano a ano.
   Toda a aritmetica fica aqui a vista, e nao em numero digitado a mao, para
   que qualquer um confira a conta lendo o arquivo. A fonte de tudo e o
   Degrau 16 de MODELO-PAAPS-COMPLETO.md, e a memoria de calculo esta em
   CALCULO-GRAFICOS-PROJECOES.md.
   ========================================================================= */

/* Municipios ativos em cada ano. A PAAPS opera os primeiros com equipe
   propria; os segundos rodam o metodo com a equipe da propria rede. */
const propria = [1, 3, 5, 6, 8];
const licenciados = [0, 1, 8, 25, 60];
const municipios = propria.map((p, i) => p + licenciados[i]);

/* Premissas por municipio, ao ano. */
const RODAS_ANO = 840; /* 70 Rodas de Equipe por mes */
const SERVIDORES = 500; /* prefeitura de referencia do modelo */
const EVITADO = 28_980; /* 20% de R$ 144.900 de custo de afastamento */

/* Receita em milhoes, do Degrau 16. A parte "propria" e a execucao direta;
   o resto e licenca mais implantacao. */
const receitaPropria = [0.924, 2.77, 4.62, 5.54, 7.39];
const receitaTotal = [0.924, 2.87, 5.48, 8.14, 13.52];

/* A equipe e inteira da PAAPS: nao ha parte licenciada, e a barra acende por
   completo. E justamente esse contraste que faz o slide. */
const equipe = [4, 9, 15, 19, 28];

type Serie = {
  titulo: string;
  destaque: string;
  total: number[];
  paaps: number[];
};

const series: Serie[] = [
  {
    titulo: "Rodas de Equipe realizadas",
    destaque: "57.120",
    total: municipios.map((m) => m * RODAS_ANO),
    paaps: propria.map((m) => m * RODAS_ANO),
  },
  {
    titulo: "Servidores Públicos alcançados",
    destaque: "34.000",
    total: municipios.map((m) => m * SERVIDORES),
    paaps: propria.map((m) => m * SERVIDORES),
  },
  {
    titulo: "Equipe PAAPS",
    destaque: "28",
    total: equipe,
    paaps: equipe,
  },
  {
    titulo: "Receita",
    destaque: "R$ 13,52 mi",
    total: receitaTotal,
    paaps: receitaPropria,
  },
  {
    titulo: "Afastamento evitado, em custo de folha",
    destaque: "R$ 1,97 mi",
    total: municipios.map((m) => m * EVITADO),
    paaps: propria.map((m) => m * EVITADO),
  },
];

/* O ano 1 vale 1,5% do ano 5 em quase todas as linhas. Sem um piso, a barra
   do ano 1 desaparece e o grafico passa a mentir por omissao. */
const PISO = 2.5;

function Mini({ titulo, destaque, total, paaps }: Serie) {
  const teto = Math.max(...total);

  return (
    <div className="mini">
      <span className="mini__n">{destaque}</span>
      <h3 className="mini__t">{titulo}</h3>

      <div className="mini__b">
        {total.map((valor, i) => {
          const altura = Math.max((valor / teto) * 100, PISO);
          const aceso = valor > 0 ? (paaps[i] / valor) * 100 : 100;
          return (
            <div key={i} className="mini__col" style={{ height: `${altura}%` }}>
              <i className="mini__op" style={{ height: `${aceso}%` }} />
            </div>
          );
        })}
      </div>

      <div className="mini__eixo">
        <span>Ano 1</span>
        <span>Ano 5</span>
      </div>
    </div>
  );
}

export function SectionProjecoes() {
  return (
    <Slide
      rotulo="Projeções"
      foto="/fotos/11-projecoes.jpg"
      veu="veu-forte"
      posicao="center 50%"
      credito="Desterro do Melo, Minas Gerais."
      fonte="70 Rodas de Equipe por município ao mês, 840 ao ano, mantidas também nas redes que licenciam o método · 500 Servidores Públicos por prefeitura, que é a prefeitura de referência do modelo, não uma média medida · receita de execução própria a R$ 924 mil por município ao ano, licença Base a R$ 64,8 mil, licença Plena a R$ 130,8 mil e implantação de R$ 30 mil por licença nova · afastamento evitado sobre custo verificado de R$ 14.490 por afastamento (Ipea, Atlas do Estado Brasileiro; INSS), com redução de 20%, que é premissa nossa e não resultado medido. No ano 5, 38% da receita é recorrente e cada pessoa da equipe responde por R$ 483 mil."
    >
      <div className="mini5">
        {series.map((s) => (
          <Mini key={s.titulo} {...s} />
        ))}
      </div>

      <p className="mini5__chave">
        <span className="mini5__amostra mini5__amostra--op" />
        conduzido pela equipe da PAAPS
        <span className="mini5__amostra mini5__amostra--lic ml-3" />
        conduzido pelas redes que licenciam o método
      </p>

      <p className="t-corpo mt-7 max-w-[76ch]">
        A equipe multiplica por 7 e os Servidores Públicos alcançados, por 68.
        Quem abre essa distância é o licenciamento, e é ele que leva a receita
        recorrente de zero a <b>38% no ano 5</b>.
      </p>
    </Slide>
  );
}
