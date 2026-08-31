import { Slide } from "../pitch/ui";

const metricas = [
  {
    chave: "LTV",
    numero: "~R$ 672k",
    texto: (
      <>
        in <b>accumulated margin</b> per municipality, over four years
      </>
    ),
  },
  {
    chave: "Margin",
    numero: "60%",
    texto: (
      <>
        <b>contribution margin</b> on every PAAPS Team Circle
      </>
    ),
  },
  {
    chave: "Break-even",
    numero: "0.26",
    texto: <>of a single municipality already covers the entire company&apos;s fixed structure</>,
  },
  {
    chave: "CAC",
    numero: "to be built",
    texto: (
      <>
        paid ads, AI-driven email marketing, marketing and branding, visit
        and signing trips, physical materials
      </>
    ),
  },
];

export function SectionMetricasEn() {
  return (
    <Slide
      rotulo="Projected metrics"
      foto="/fotos/12-metricas.jpg"
      veu="veu-forte"
      posicao="center 42%"
      fonte={
        <span className="whitespace-nowrap">
          LTV in gross margin over four years, with direct service in year 1
          and licensing in years 2 to 4.
        </span>
      }
    >
      <div className="metricas">
        {metricas.map((m) => (
          <div key={m.chave} className="metrica">
            <span className="metrica__k">{m.chave}</span>
            <p className="metrica__n">{m.numero}</p>
            <p className="metrica__l">{m.texto}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
