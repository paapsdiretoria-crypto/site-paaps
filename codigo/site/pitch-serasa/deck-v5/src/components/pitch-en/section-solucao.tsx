import { Dado, Slide } from "../pitch/ui";

export function SectionSolucaoEn() {
  return (
    <Slide
      rotulo="Solution"
      foto="/fotos/04-solucao.jpg"
      veu="veu-denso"
      posicao="center 38%"
      credito="PAAPS in the field, Minas Gerais."
    >
      <h2 className="t-afirma font-bold max-w-[30ch] text-balance">
        We connect public service teams with psychologists trained in the
        PAAPS method.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Frequency" numero="1h30">
          per month, with each team in the public network.
        </Dado>
        <Dado titulo="Reach" numero="~10">
          Public Servants per hour of the psychologist&apos;s work.
        </Dado>
        <Dado titulo="Cascade">
          Care for the population improves along with it, and it&apos;s
          measurable.
        </Dado>
      </div>

      <p className="t-afirma font-bold mt-10 md:mt-14 text-center text-balance">
        Caring for the front line, impacting the world:{" "}
        <u>Quality Psychology</u> present to care for and integrate teams.
      </p>
    </Slide>
  );
}
