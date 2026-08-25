import Image from "next/image";
import { Slide } from "./ui";

/* Hierarquia em tres niveis, copiada do slide 17 do pitch antigo: as duas
   founders no topo, o time no meio, a supervisao clinica embaixo, ligados por
   um travessao e uma espinha. Os fios e os contornos, que la eram amarelos e
   terracota, aqui sao bege. */
const niveis = [
  {
    classe: "eq__n1",
    pessoas: [
      {
        foto: "/equipe/mallu.jpg",
        nome: "Mallu Vasconcellos",
        skill:
          "Founder da PAAPS Brasil. Formanda em psicologia (PUC-SP e PUC-MG)",
      },
      {
        foto: "/equipe/fabiane.jpg",
        nome: "Fabiane Vasconcellos",
        skill:
          "Founder da DIGGING, sócia da PAAPS Brasil. Ex-diretora de planejamento estratégico do Grupo Pão de Açúcar. Executive coach e psicanalista de grupos, 25 anos em gerências e diretorias e 12 de consultoria",
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
          "Especialista em comunidade e relacionamento, com estratégia de community led growth",
      },
      {
        foto: "/equipe/luiz.jpg",
        nome: "Luiz Sérgio Barbosa",
        skill:
          "Consultor financeiro da PAAPS Brasil. Ex-diretor financeiro da FEBRABAN, com 45 anos de carreira no sistema bancário brasileiro",
      },
    ],
  },
  {
    classe: "eq__n3",
    sup: true,
    pessoas: [
      {
        foto: "/equipe/gabriela.jpg",
        nome: "Psicóloga Gabriela Diniz",
        skill: "Supervisão na metodologia PAAPS Brasil",
      },
      {
        foto: "/equipe/lucas.jpg",
        nome: "Psicólogo Lucas Pimenta",
        skill: "Supervisão na metodologia PAAPS Brasil",
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

export function SectionEquipe() {
  return (
    <Slide
      rotulo="Equipe"
      foto="/fotos/14-equipe-a.jpg"
      veu="veu-forte"
      posicao="68% center"
    >
      <h2 className="t-afirma font-bold text-center mx-auto max-w-[28ch] text-balance">
        As core skills da PAAPS já estão cobertas pela equipe semente.
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
            A escala conta com{" "}
            <b>uso seguro de Inteligência Artificial para operações</b>.
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
            <p className="ecos__t">psicólogos na comunidade ativa</p>
          </div>
          <div className="ecos__i">
            <span className="ecos__n">+500</span>
            <p className="ecos__t">
              profissionais formados, atendidos ou mobilizados pelas pesquisas
              de campo da PAAPS
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
