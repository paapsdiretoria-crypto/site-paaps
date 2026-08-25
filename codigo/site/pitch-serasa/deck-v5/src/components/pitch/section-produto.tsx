import Image from "next/image";
import { Slide } from "./ui";

/* As nove praticas da Roda, agrupadas por objeto. Nenhuma foi descartada:
   elas ganharam ordem, e a ordem e que mostra que existe metodo. */
const grupos = [
  {
    titulo: "Ao trabalho",
    praticas:
      "elaboração de casos · relação e vínculo com quem é atendido · demandas coletivas da equipe",
  },
  {
    titulo: "À equipe",
    praticas:
      "manejo coletivo e mediação de conflitos · acordos de comunicação · aprendizagem entre pares, Saúde Social e cooperação",
  },
  {
    titulo: "À mim",
    praticas:
      "autorregulação emocional · compartilhamento seguro · vínculo profissional protetivo em casos mais graves de saúde mental",
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
    >
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] gap-10 md:gap-14 items-center">
        {/* Esquerda: o texto empilhado, sem moldura, so as regras finas. */}
        <div>
          {/* O caminho em miniatura, trazido do slide 04 para o slide 05,
              exatamente como estava no pitch antigo. */}
          <ol className="mini-caminho">
            <li className="mini-caminho__passo">
              <span className="mini-caminho__pt" />
              <span className="mini-caminho__t">
                Diagnóstico 360<i>°</i>
              </span>
            </li>
            <li className="mini-caminho__passo">
              <span className="mini-caminho__pt" />
              <span className="mini-caminho__t">Rodas de Equipe PAAPS</span>
            </li>
            <li className="mini-caminho__passo">
              <span className="mini-caminho__pt" />
              <span className="mini-caminho__t">
                Ponto de Apoio
                <span className="mini-caminho__sub">
                  app e dados em tempo real
                </span>
              </span>
            </li>
          </ol>

          <h2 className="t-afirma font-bold mt-6 max-w-[22ch] text-balance">
            Rodas de equipe PAAPS possuem 3 fases.
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

          <p className="t-corpo txt-suave mt-5 max-w-[52ch]">
            A 4ª fase é a Supervisão semanal para as Psicólogas PAAPS. A
            qualidade e impacto estão na metodologia.
          </p>
        </div>

        {/* Direita: o abraco, grande e nitido, na frente do veu. */}
        <div className="relative w-full aspect-[4/3] max-h-[70vh] justify-self-end">
          <Image
            src="/fotos/05-produto-direita.jpg"
            alt="Atividade de grupo da PAAPS ao ar livre"
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
