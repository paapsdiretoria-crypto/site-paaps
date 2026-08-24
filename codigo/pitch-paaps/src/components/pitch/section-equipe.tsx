import { Card, FundoDuplo, Slide } from "./ui";

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
      fundo={
        <FundoDuplo
          esquerda="/fotos/14-equipe-a.jpg"
          direita="/fotos/14-equipe-b.jpg"
          veu="veu-forte"
          /* 68% na esquerda: a psicologa fica na borda esquerda do original,
             e o enquadramento precisa empurrar a janela para o centro-direita.
             E o mesmo valor do deck antigo. */
          posicaoEsquerda="68% center"
          posicaoDireita="center center"
          alt={[
            "Roda de equipe conduzida pela PAAPS",
            "Atividade de grupo da PAAPS ao ar livre",
          ]}
        />
      }
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
