import Image from "next/image";
import { Card, Slide } from "../pitch/ui";

const clientes = [
  "carrefour",
  "boticario",
  "raizen",
  "cosan",
  "desterro-do-melo",
  "motiva",
  "signify-philips",
  "boehringer",
  "beneficencia",
  "rodobens",
  "jive",
  "spventures",
];

export function SectionDiggingEn() {
  return (
    <Slide
      rotulo="Traction in the Corporate Consulting Market"
      foto="/fotos/08-digging.jpg"
      veu="veu-forte"
      posicao="center 42%"
      fonte="CNPJ (Brazilian company registry) 05.983.700/0001-67"
    >
      <div className="grid md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-8 md:gap-12 items-end">
        <div>
          <span className="font-mono t-num font-bold block">R$ 1.16 mi</span>
          <p className="t-corpo txt-suave mt-4 max-w-[34ch]">
            billed by DIGGING over the last four years.
          </p>
        </div>
        <h2 className="t-afirma font-bold max-w-[32ch] text-balance">
          The leadership and team-development technology that large companies
          have been buying since 2003 had never reached a municipality
          before. That&apos;s what PAAPS brings.
        </h2>
      </div>

      <p className="t-corpo txt-suave mt-6 max-w-[92ch]">
        In 2026, the 3 partners are beginning a related diversification
        phase, and are about to scale the new revenue engine. There&apos;s
        solid demonstrated interest following the end of public spending
        restrictions during election periods.
      </p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Services</h3>
          <p className="t-corpo txt-suave">
            Organizational Development Consulting, Dialogue Facilitation and
            Nonviolent Communication, Conflict Mediation, Culture Projects
            (Barrett), Corporate Education, Team Building, Executive
            Mentoring and Coaching.
          </p>
        </Card>
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Ownership</h3>
          <p className="t-corpo txt-suave">
            Founded and led by two women.{" "}
            <b className="text-[var(--bege)]">
              Former Head of Strategic Planning at{" "}
              <span className="txt-amarelo">Grupo Pão de Açúcar</span>
            </b>{" "}
            and{" "}
            <b className="text-[var(--bege)]">
              former CFO at <span className="txt-amarelo">FEBRABAN</span>
            </b>
            , partners in the same company.
          </p>
        </Card>
      </div>

      <p className="t-corpo mt-6 max-w-[92ch]">
        Digging is the consultancy of choice for leadership and team
        development at companies including:
      </p>

      <div className="mt-3 grid grid-cols-4 md:grid-cols-12 gap-x-3 gap-y-3 md:gap-x-4 items-center rounded bg-[var(--bege)] px-4 py-3 md:px-6 md:py-4 shadow-[0_6px_30px_rgba(20,9,2,.55)]">
        {clientes.map((c) => (
          <span key={c} className="relative block w-full aspect-[3/2]">
            <Image
              src={`/clientes/${c}.png`}
              alt=""
              fill
              sizes="8vw"
              className="object-contain"
            />
          </span>
        ))}
      </div>
    </Slide>
  );
}
