import { Slide } from "../pitch/ui";

const marcos = [
  {
    lado: "alto",
    titulo: "Break-even on the first contract",
    texto: "one municipality covers 3.9× the fixed structure",
  },
  {
    lado: "baixo",
    titulo: "Local team",
    texto:
      "city-based psychologists trained and continuously supervised. Methodology MVP, ready to license",
  },
  {
    lado: "alto",
    invest: true,
    titulo: "Method written down",
    texto: "the first municipality's MVP becomes a licensable protocol",
  },
  {
    lado: "baixo",
    invest: true,
    titulo: "Support Point",
    texto: "integrated platform, real-time data from client networks",
  },
  {
    lado: "alto",
    titulo: "License 01",
    texto: "first network running with its own team",
  },
  {
    lado: "baixo",
    titulo: "Consortium",
    texto: "one contract, dozens of cities",
  },
  { lado: "alto", titulo: "68 municipalities", texto: "1.2% of Brazil, by year 5" },
  {
    lado: "baixo",
    titulo: "180 municipalities",
    texto: "in Brazil (year 10) + internationalization of the Brazil Case",
  },
];

export function SectionRoadmapEn() {
  return (
    <Slide
      rotulo="Roadmap"
      foto="/fotos/13-roadmap.jpg"
      veu="veu-forte"
      posicao="center 52%"
    >
      <h2 className="t-afirma font-bold max-w-[32ch] text-balance">
        From one network at a time to a national mesh, with practically the
        same fixed structure.
      </h2>

      <div className="trilho">
        <div className="trilho__fila">
          {marcos.map((m) => (
            <div
              key={m.titulo}
              className={`marco marco--${m.lado}${
                m.invest ? " marco--invest" : ""
              }`}
            >
              <span className="marco__txt">
                <b>{m.titulo}</b>
                {m.texto}
              </span>
            </div>
          ))}
        </div>

        <div className="trilho__chave">
          <span className="chave__marca" />
          <span className="chave__rotulo">
            The two main fronts for Smart Money
          </span>
        </div>
      </div>

      <div className="trilho__faixas">
        <span className="faixa-fase faixa-fase--acel">
          The 7-month acceleration
        </span>
        <span className="faixa-fase faixa-fase--exec">2027 to 2031</span>
      </div>
    </Slide>
  );
}
