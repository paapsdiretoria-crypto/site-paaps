import Image from "next/image";
import { Slide } from "../pitch/ui";

const grupos = [
  {
    titulo: "Toward the work",
    praticas:
      "case elaboration · relationship and bond with those being served · the team's collective demands",
  },
  {
    titulo: "Toward the team",
    praticas:
      "collective handling and conflict mediation · communication agreements · peer learning, Social Health and cooperation",
  },
  {
    titulo: "Toward myself",
    praticas:
      "emotional self-regulation · safe sharing · protective professional bond in more serious mental health cases",
  },
];

export function SectionProdutoEn() {
  return (
    <Slide
      rotulo="Product"
      foto="/fotos/05-produto.jpg"
      veu="veu-forte"
      posicao="center 40%"
      credito="PAAPS Experience, Minas Gerais."
    >
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,.62fr)] gap-10 md:gap-14 items-center">
        <div>
          <h2 className="t-afirma font-bold max-w-[22ch] text-balance">
            PAAPS Team Circles have 3 phases.
          </h2>

          <dl className="mt-10 md:mt-12 border-t border-[rgba(245,241,225,.20)]">
            {grupos.map((g) => (
              <div
                key={g.titulo}
                className="py-5 border-b border-[rgba(245,241,225,.20)]"
              >
                <dt className="t-cardtit font-bold">{g.titulo}</dt>
                <dd className="t-corpo txt-suave mt-1.5">{g.praticas}</dd>
              </div>
            ))}
          </dl>

          <p className="t-corpo txt-suave mt-5 max-w-[54ch]">
            The 4th phase is weekly Supervision for PAAPS Psychologists.
            Quality and impact live in the methodology.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          <div>
            <h3 className="t-cardtit font-bold mb-6">PAAPS Client Journey</h3>
            <ol className="caminho-jornada__passos">
              <li className="caminho-jornada__passo">
                <span className="caminho-jornada__pt" />
                <span className="caminho-jornada__t">
                  360<i>°</i> Diagnosis
                </span>
              </li>
              <li className="caminho-jornada__passo">
                <span className="caminho-jornada__pt" />
                <span className="caminho-jornada__t">PAAPS Team Circles</span>
              </li>
              <li className="caminho-jornada__passo">
                <span className="caminho-jornada__pt" />
                <span className="caminho-jornada__t">
                  Support Point
                  <span className="caminho-jornada__sub">
                    app and real-time data
                  </span>
                </span>
              </li>
            </ol>
          </div>

          <div className="relative w-full aspect-square max-h-[36vh] max-w-[320px]">
            <Image
              src="/fotos/05-produto-direita.jpg"
              alt="PAAPS Team Circle outdoors"
              fill
              sizes="(max-width: 768px) 60vw, 24vw"
              quality={92}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
