import { Slide } from "../pitch/ui";

/* Mesma aritmetica de components/pitch/section-projecoes.tsx, intocada. So
   os rotulos de exibicao mudam (traduzidos, numero em formato en-US). */

const propria = [1, 3, 5, 6, 8];
const licenciados = [0, 1, 8, 25, 60];
const municipios = propria.map((p, i) => p + licenciados[i]);

const RODAS_ANO = 840;
const SERVIDORES = 500;
const EVITADO = 28_980;

const receitaPropria = [0.924, 2.77, 4.62, 5.54, 7.39];
const receitaTotal = [0.924, 2.87, 5.48, 8.14, 13.52];

const equipe = [4, 9, 15, 19, 28];

type Serie = {
  titulo: string;
  destaque: string;
  total: number[];
  paaps: number[];
};

const series: Serie[] = [
  {
    titulo: "Team Circles held",
    destaque: "57,120",
    total: municipios.map((m) => m * RODAS_ANO),
    paaps: propria.map((m) => m * RODAS_ANO),
  },
  {
    titulo: "Public Servants reached",
    destaque: "34,000",
    total: municipios.map((m) => m * SERVIDORES),
    paaps: propria.map((m) => m * SERVIDORES),
  },
  {
    titulo: "PAAPS team",
    destaque: "28",
    total: equipe,
    paaps: equipe,
  },
  {
    titulo: "Revenue",
    destaque: "R$ 13.52 mi",
    total: receitaTotal,
    paaps: receitaPropria,
  },
  {
    titulo: "Medical leave avoided, in payroll cost",
    destaque: "R$ 1.97 mi",
    total: municipios.map((m) => m * EVITADO),
    paaps: propria.map((m) => m * EVITADO),
  },
];

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
        <span>Year 1</span>
        <span>Year 5</span>
      </div>
    </div>
  );
}

export function SectionProjecoesEn() {
  return (
    <Slide
      rotulo="Projections"
      foto="/fotos/11-projecoes.jpg"
      veu="veu-forte"
      posicao="center 50%"
      credito="Desterro do Melo, Minas Gerais."
    >
      <div className="mini5">
        {series.map((s) => (
          <Mini key={s.titulo} {...s} />
        ))}
      </div>

      <p className="mini5__chave">
        <span className="mini5__amostra mini5__amostra--op" />
        run by the PAAPS team
        <span className="mini5__amostra mini5__amostra--lic ml-3" />
        run by the networks that license the method
      </p>
    </Slide>
  );
}
