import { Dado, Slide } from "../pitch/ui";

export function SectionValidacaoEn() {
  return (
    <Slide
      rotulo="Market validation"
      foto="/fotos/06-validacao.jpg"
      veu="veu-forte"
      posicao="center 46%"
      quente
      credito="PAAPS Team Circle."
      fonte="Schwartz Center for Compassionate Healthcare, licensor; the Point of Care Foundation ran the programme from 2009 to 2025 · WHO Guidelines on mental health at work, 2022."
    >
      <h2 className="t-afirma font-bold max-w-[30ch] text-balance">
        <span className="txt-amarelo">
          &quot;Training managers, working with the team&quot;
        </span>{" "}
        is the WHO&apos;s only strong recommendation on mental health at work.
      </h2>

      <p className="t-corpo txt-suave mt-6 max-w-[70ch]">
        WHO points to universal psychosocial interventions for health,
        humanitarian and emergency workers to:
      </p>
      <ol className="grid md:grid-cols-3 gap-4 md:gap-8 mt-3 t-corpo txt-suave list-decimal list-inside max-w-[70ch]">
        <li>Build Stress Management Skills</li>
        <li>Reduce Emotional Distress</li>
        <li>Improve Work Effectiveness</li>
      </ol>
      <p className="t-fonte txt-suave mt-2">(WHO, 2022, p. 44)</p>

      <h3 className="t-afirma font-bold mt-10 max-w-[28ch] text-balance">
        A similar model has been licensed in the UK and Ireland since 2009.
      </h3>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 md:max-w-[62%]">
        <Dado titulo="Scale" numero="200+">
          organisations running the <u>monthly team session</u>.
        </Dado>
        <Dado titulo="Schwartz Center" numero="Boston">
          licenses the model yearly to the organisations that run it.
        </Dado>
      </div>
    </Slide>
  );
}
