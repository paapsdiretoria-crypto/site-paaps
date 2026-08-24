import { Card, Slide } from "./ui";

/* As nove práticas da Roda, agrupadas por objeto. Nenhuma foi descartada:
   elas ganharam ordem, e a ordem é que mostra que existe método. */
const grupos = [
  {
    titulo: "Sobre o caso",
    praticas: [
      "elaboração de casos",
      "relação e vínculo com quem é atendido",
      "demandas coletivas da equipe",
    ],
  },
  {
    titulo: "Sobre a equipe",
    praticas: [
      "manejo coletivo e mediação de conflitos",
      "acordos de comunicação",
      "aprendizagem entre pares",
    ],
  },
  {
    titulo: "Sobre a pessoa",
    praticas: [
      "autorregulação emocional",
      "compartilhamento seguro",
      "vínculo profissional protetivo",
    ],
  },
];

export function SectionProduto() {
  return (
    <Slide
      rotulo="Produto"
      foto="/fotos/05-produto.jpg"
      veu="veu-forte"
      posicao="center 36%"
      fonte="A supervisão semanal está na metodologia."
    >
      <h2 className="t-afirma font-bold max-w-[22ch] text-balance">
        A equipe elabora as cenas do próprio trabalho, junto.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        {grupos.map((g) => (
          <Card key={g.titulo} className="items-start justify-start">
            <h3 className="t-cardtit font-bold">{g.titulo}</h3>
            <ul className="t-corpo txt-suave space-y-2 w-full">
              {g.praticas.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
