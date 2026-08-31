import { Dado, Slide } from "../pitch/ui";

export function SectionMercadoEn() {
  return (
    <Slide
      rotulo="Market"
      foto="/fotos/10-mercado.jpg"
      veu="veu-denso"
      posicao="center 52%"
      fonte="Price Registry Record No. 41/2026, Tender No. 90.001/2026, Brazil's Federal Procurement Office (MGI) · Municipalities: IBGE."
    >
      <span className="font-mono t-num font-bold block">R$ 26.9 mi</span>
      <p className="t-afirma mt-4 max-w-[32ch] text-balance">
        forecast in the record (May 2026) to cover public servants&apos;
        mental health.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="TAM" numero="5,570">
          Brazilian municipalities, all with health, education and social
          assistance teams.
        </Dado>
        <Dado titulo="SAM" numero="2,550">
          municipalities above 10,000 residents, which support a direct
          contract or license: about R$ 724 million a year.
        </Dado>
        <Dado titulo="SOM" numero="100">
          municipalities in five years, with a projected R$ 13.5 million in
          year-5 revenue.
        </Dado>
      </div>
    </Slide>
  );
}
