import Image from "next/image";
import { Slide } from "./ui";

/* As nove praticas da Roda, agrupadas por objeto. Nenhuma foi descartada:
   elas ganharam ordem, e a ordem e que mostra que existe metodo. */
const grupos = [
  {
    titulo: "Sobre o caso",
    praticas:
      "elaboração de casos · relação e vínculo com quem é atendido · demandas coletivas da equipe",
  },
  {
    titulo: "Sobre a equipe",
    praticas:
      "manejo coletivo e mediação de conflitos · acordos de comunicação · aprendizagem entre pares",
  },
  {
    titulo: "Sobre a pessoa",
    praticas:
      "autorregulação emocional · compartilhamento seguro · vínculo profissional protetivo",
  },
];

export function SectionProduto() {
  return (
    <Slide
      rotulo="Produto"
      foto="/fotos/05-produto.jpg"
      veu="veu-forte"
      posicao="center 40%"
      credito="Vivência PAAPS, Minas Gerais."
      fonte="A supervisão semanal está na metodologia."
    >
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,.82fr)] gap-10 md:gap-16 items-center">
        {/* Esquerda: o texto empilhado, sem moldura, so as regras finas. */}
        <div>
          <h2 className="t-afirma font-bold max-w-[20ch] text-balance">
            A equipe elabora as cenas do próprio trabalho, junto.
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
        </div>

        {/* Direita: o abraco, grande e nitido, na frente do veu. */}
        <div className="relative w-full aspect-[3/4] max-h-[76vh] justify-self-end">
          <Image
            src="/fotos/05-abraco.jpg"
            alt="Duas mulheres se abraçando ao fim de uma vivência da PAAPS"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            quality={92}
            className="object-cover"
          />
        </div>
      </div>
    </Slide>
  );
}
