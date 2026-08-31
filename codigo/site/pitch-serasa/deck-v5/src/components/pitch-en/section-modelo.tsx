import Image from "next/image";
import { Card, Dado, Slide } from "../pitch/ui";

export function SectionModeloEn() {
  return (
    <Slide
      rotulo="Business model"
      foto="/fotos/09-modelo.jpg"
      veu="veu-forte"
      posicao="center 38%"
      credito="PAAPS in the field."
      fonte="Payroll calculated on a R$ 6,000 salary, Simples Nacional, Annex III, 4th bracket · Full business model available on request."
    >
      <span className="font-mono t-num font-bold block">60.1%</span>
      <p className="t-afirma mt-4 max-w-[26ch]">
        contribution margin per Team Circle.
      </p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10 md:max-w-[70%]">
        <Dado titulo="Price" numero="R$ 1,100">
          per Team Circle, 1h30.
        </Dado>

        <Card className="!items-stretch !justify-start text-left !pt-5 space-y-2">
          <span className="t-fonte txt-suave">
            1 municipality, 500 Public Servants covered
          </span>
          <h2 className="t-cardtit font-bold text-center">Contract</h2>
          <p className="flex items-baseline justify-center gap-2">
            <span className="font-mono t-cardnum font-bold whitespace-nowrap">
              R$ 924k
            </span>
            <span className="t-corpo txt-suave whitespace-nowrap">per year</span>
          </p>
          <p className="t-corpo txt-suave text-center">R$ 77k MRR</p>
        </Card>
      </div>

      <h3 className="t-cardtit font-bold mt-8 md:mt-10 flex items-baseline gap-2">
        Business Model
        <Image
          src="/marca/paaps-branco.png"
          alt="PAAPS"
          width={160}
          height={45}
          className="h-[1.75em] w-auto translate-y-[.18em]"
        />
      </h3>

      <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3 mt-3 t-corpo md:max-w-[70%]">
        <p>
          <b>Deliverables.</b> At least one monthly Circle per team, with
          room for more; strategic sessions with leadership and one monthly
          training or extra circles.
        </p>
        <p>
          <b>Scale and retention.</b> PAAPS supervises, licenses the method.
          Local Psychologists have a possible internal career path.
        </p>
        <p>
          <b>Team.</b> 2 local or regional psychologists.{" "}
          <b>~R$ 144k a year</b> in salary, circulating within the
          municipality itself.
        </p>
        <p>
          <b>Quality and impact.</b> 1 clinical supervisor per 7
          municipalities. 1 customer success manager per 10.
        </p>
      </div>
    </Slide>
  );
}
