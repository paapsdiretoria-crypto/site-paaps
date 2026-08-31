import { Dado, FundoDuplo, Slide } from "../pitch/ui";

export function SectionOportunidadeEn() {
  return (
    <Slide
      rotulo="The opportunity"
      fundo={
        <FundoDuplo
          esquerda="/fotos/13-oportunidade-a.jpg"
          direita="/fotos/13-oportunidade-b.jpg"
          veu="veu-forte"
          alt={["PAAPS Circle participant", "PAAPS Circle participant"]}
        />
      }
      fonte={
        <span className="whitespace-nowrap">
          Serasa Experian, 2026 Default Map · SalaryFits, Financial Health and
          Well-Being of the Brazilian Worker · Ipea, Atlas of the Brazilian
          State · Care error: BMJ, 2022, review of 35 studies.
        </span>
      }
    >
      <h2 className="t-afirma font-bold max-w-[26ch] text-balance">
        Serasa already reaches the public servant through eConsig.
        What&apos;s missing is data on their health.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="eConsig" numero="600+">
          agencies across all three levels of government use Serasa&apos;s
          payroll-loan platform.
        </Dado>
        <Dado titulo="Debt" numero="78%">
          of Brazilians in default earn up to two minimum wages. The
          municipal servant earns R$ 2,640.
        </Dado>
        <Dado titulo="Exhaustion" numero="46%">
          of indebted workers report extreme exhaustion.
        </Dado>
      </div>

      <p className="mt-8 text-[clamp(1.1rem,1.9vw,2rem)] leading-snug max-w-[48ch]">
        <b>Consequence.</b> Twice the chance of a care error when the person
        providing care is <span className="txt-amarelo font-bold">burned out</span>.
      </p>
    </Slide>
  );
}
