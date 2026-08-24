import { Card, Slide } from "./ui";

const pessoas = [
  {
    nome: "Mallu Vasconcellos",
    corpo: "Founder da PAAPS Brasil. Formanda em psicologia, PUC-SP e PUC-MG.",
  },
  {
    nome: "Fabiane Vasconcellos",
    corpo:
      "Founder da DIGGING e sócia da PAAPS Brasil. Ex-diretora de planejamento estratégico do Grupo Pão de Açúcar. Executive coach e psicanalista de grupos.",
  },
  {
    nome: "Luiz Sérgio Barbosa",
    corpo:
      "Consultor financeiro. Ex-diretor financeiro da FEBRABAN, 45 anos no sistema bancário brasileiro.",
  },
  {
    nome: "Gustavo Faria",
    corpo:
      "Comunidade e relacionamento, com estratégia de community led growth.",
  },
  {
    nome: "Gabriela Diniz e Lucas Pimenta",
    corpo: "Supervisão na metodologia PAAPS Brasil.",
  },
];

export function SectionEquipe() {
  return (
    <Slide
      rotulo="Equipe"
      foto="/fotos/14-equipe.jpg"
      veu="veu-forte"
      posicao="center 34%"
    >
      <h2 className="t-afirma font-bold max-w-[24ch] text-balance">
        As core skills da PAAPS já estão cobertas pela equipe semente.
      </h2>

      <div className="grid md:grid-cols-5 gap-5 md:gap-6 mt-10 md:mt-14">
        {pessoas.map((p) => (
          <Card key={p.nome} className="items-start justify-start text-left">
            <h3 className="t-cardtit font-bold">{p.nome}</h3>
            <p className="t-corpo txt-suave">{p.corpo}</p>
          </Card>
        ))}
      </div>

      <p className="t-corpo mt-8">+120 psicólogos na comunidade ativa.</p>
    </Slide>
  );
}
