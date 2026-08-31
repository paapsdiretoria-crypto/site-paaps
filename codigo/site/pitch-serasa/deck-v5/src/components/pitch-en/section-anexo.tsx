import { Slide } from "../pitch/ui";

const contas = [
  {
    chave: "LTV",
    numero: "~R$ 672k",
    texto: (
      <>
        Year 1 (direct delivery): R$ 924k × 60.1% = R$ 555k. Years 2 to 4
        (Base license): R$ 64.8k × 3 years × 60.1% = R$ 117k.{" "}
        <b>Total: R$ 672k over 4 years.</b>
      </>
    ),
  },
  {
    chave: "Margin",
    numero: "60%",
    texto: (
      <>
        A Team Circle costs the municipality R$ 1,100 and costs PAAPS R$ 438
        (2 CLT-employed psychologists, supervision, orchestration and tax).{" "}
        <b>R$ 662 margin: 60.1%.</b>
      </>
    ),
  },
  {
    chave: "Break-even",
    numero: "0.26",
    texto: (
      <>
        The company&apos;s fixed structure: R$ 12k a month, with no partner
        pay in year 1. Margin from a single municipality: R$ 46.31k a month.{" "}
        <b>R$ 12k ÷ R$ 46.31k = 0.26 of a municipality.</b>
      </>
    ),
  },
  {
    chave: "Model assumptions",
    numero: "",
    texto: (
      <>
        Fixed structure of R$ 12k a month, growing to R$ 150k by year 5. R$
        10k a month in partner pay for the partner running PAAPS. Exit from
        Simples Nacional in year 3.{" "}
        <b>
          360° Diagnosis at R$ 10k: the entry point, booked as a commercial
          investment.
        </b>
      </>
    ),
  },
];

export function SectionAnexoEn() {
  return (
    <Slide
      rotulo="Appendix"
      foto="/fotos/20-anexo.jpg"
      veu="veu-forte"
      posicao="center 36%"
      credito="PAAPS in the field."
    >
      <h2 className="t-afirma font-bold">How we got to these numbers.</h2>

      <div className="metricas metricas--calc mt-6">
        {contas.map((c) => (
          <div key={c.chave} className="metrica">
            <span className="metrica__k">{c.chave}</span>
            {c.numero ? <p className="metrica__n">{c.numero}</p> : null}
            <p className="metrica__l">{c.texto}</p>
          </div>
        ))}
      </div>

      <p className="t-corpo txt-suave text-center mt-10 mx-auto max-w-[56ch]">
        We&apos;re looking for ACE Cortex&apos;s and Serasa Experian&apos;s
        deep expertise to make our projections even better, and more
        precise.
      </p>
    </Slide>
  );
}
