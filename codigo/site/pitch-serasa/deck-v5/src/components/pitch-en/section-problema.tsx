import { Dado, Slide } from "../pitch/ui";

export function SectionProblemaEn() {
  return (
    <Slide
      rotulo="Problem"
      foto="/fotos/02-problema.jpg"
      veu="veu-denso"
      posicao="center 40%"
      fonte="ANS, May 2026 · CNES/Ministry of Health, 2025 · Apeoesp (SP), 2026."
    >
      <h2 className="t-afirma font-bold max-w-[32ch] text-balance">
        The world&apos;s largest public health system{" "}
        <span className="txt-amarelo">
          doesn&apos;t even measure, let alone care for
        </span>
        , the mental health of the people who <u>sustain it</u>.
      </h2>
      <p className="t-corpo txt-suave mt-5 max-w-[60ch] text-[clamp(1.1rem,1.9vw,2rem)] leading-snug">
        <span className="txt-amarelo font-bold">Three out of four</span>{" "}
        people who make up SUS are women.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="No plan B" numero="76%">
          of Brazilians depend on SUS. That&apos;s 162 million people with no
          private plan.
        </Dado>
        <Dado titulo="Does caring make you sick?" numero="81.1%">
          of healthcare professionals link their own illness to their work.
        </Dado>
        <Dado titulo="Nearly all of them" numero="97.6%">
          of education professionals link their own illness to their work.
        </Dado>
      </div>
    </Slide>
  );
}
