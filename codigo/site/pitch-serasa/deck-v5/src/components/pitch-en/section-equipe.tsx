import Image from "next/image";
import { Slide } from "../pitch/ui";

const niveis = [
  {
    classe: "eq__n1",
    pessoas: [
      {
        foto: "/equipe/mallu.jpg",
        nome: "Mallu Vasconcellos",
        skill: "Founder of PAAPS Brasil. Psychology student (PUC-SP and PUC-MG)",
      },
      {
        foto: "/equipe/fabiane.jpg",
        nome: "Fabiane Vasconcellos",
        skill:
          "Founder of DIGGING, partner at PAAPS Brasil. Former Head of Strategic Planning at Grupo Pão de Açúcar. Executive coach and group psychoanalyst, 25 years in management and executive roles and 12 in consulting",
      },
    ],
  },
  {
    classe: "eq__n2",
    pessoas: [
      {
        foto: "/equipe/gustavo.jpg",
        nome: "Gustavo Faria",
        skill:
          "Community and relationship specialist, with a community-led growth strategy",
      },
      {
        foto: "/equipe/luiz.jpg",
        nome: "Luiz Sérgio Barbosa",
        skill:
          "Financial consultant at PAAPS Brasil. Former CFO at FEBRABAN, with 45 years of career in the Brazilian banking system",
      },
    ],
  },
  {
    classe: "eq__n3",
    sup: true,
    pessoas: [
      {
        foto: "/equipe/gabriela.jpg",
        nome: "Psychologist Gabriela Diniz",
        skill: "Supervision on the PAAPS Brasil methodology",
      },
      {
        foto: "/equipe/lucas.jpg",
        nome: "Psychologist Lucas Pimenta",
        skill: "Supervision on the PAAPS Brasil methodology",
      },
    ],
  },
];

const ecos = [
  "roda-escuta-grupo",
  "treino-sala",
  "paaps-vivencia",
  "integracao-agsus",
  "roda-proinape",
  "cuidado-vivencia",
  "treino-horizontal",
  "territorio-2",
];

export function SectionEquipeEn() {
  return (
    <Slide
      rotulo="Team"
      foto="/fotos/14-equipe-a.jpg"
      veu="veu-forte"
      posicao="68% center"
      credito="PAAPS in the field, Minas Gerais and Rio de Janeiro."
    >
      <h2 className="t-afirma font-bold text-center mx-auto max-w-[30ch] text-balance">
        PAAPS&apos;s core skills are already covered by the seed team.
      </h2>

      <div className="eq">
        {niveis.map((n) => (
          <div key={n.classe} className={n.classe}>
            {n.pessoas.map((p) => (
              <div
                key={p.nome}
                className={`eq__p${n.sup ? " eq__p--sup" : ""}`}
              >
                <Image
                  className="eq__foto"
                  src={p.foto}
                  alt={p.nome}
                  width={144}
                  height={144}
                />
                <span className="eq__nome">{p.nome}</span>
                <span className="eq__skill">{p.skill}</span>
              </div>
            ))}
          </div>
        ))}

        <div className="eq__ia">
          <p className="eq__ia__l">
            The team scales with{" "}
            <b>secure use of Artificial Intelligence for operations</b>.
          </p>
        </div>
      </div>

      <div className="ecos">
        <div className="ecos__fotos">
          {ecos.map((f) => (
            <span key={f}>
              <Image src={`/ecos/${f}.jpg`} alt="" fill sizes="14vw" />
            </span>
          ))}
        </div>
        <div className="ecos__d">
          <div className="ecos__i">
            <span className="ecos__n">+120</span>
            <p className="ecos__t">psychologists in the active community</p>
          </div>
          <div className="ecos__i">
            <span className="ecos__n">+500</span>
            <p className="ecos__t">
              professionals trained, served or mobilized by PAAPS&apos;s
              field research
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
