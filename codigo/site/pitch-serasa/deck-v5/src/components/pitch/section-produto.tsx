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
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,.62fr)] gap-10 md:gap-14 items-center">
        {/* Esquerda: o texto empilhado, sem moldura, so as regras finas. */}
        <div>
          <h2 className="t-afirma font-bold max-w-[22ch] text-balance">
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

        {/* Direita: a jornada primeiro, maior, e a foto recortada embaixo. */}
        <div className="flex flex-col gap-8 md:gap-10">
          <div>
            <h3 className="t-cardtit font-bold mb-6">
              Jornada do Cliente da PAAPS
            </h3>
            <ol className="caminho-jornada__passos">
              <li className="caminho-jornada__passo">
                <span className="caminho-jornada__pt" />
                <span className="caminho-jornada__t">
                  Diagnóstico 360<i>°</i>
                </span>
              </li>
              <li className="caminho-jornada__passo">
                <span className="caminho-jornada__pt" />
                <span className="caminho-jornada__t">
                  Rodas de Equipe PAAPS
                </span>
              </li>
              <li className="caminho-jornada__passo">
                <span className="caminho-jornada__pt" />
                <span className="caminho-jornada__t">
                  Ponto de Apoio
                  <span className="caminho-jornada__sub">
                    app e dados em tempo real
                  </span>
                </span>
              </li>
            </ol>
          </div>

          <div className="relative w-full aspect-square max-h-[36vh] max-w-[320px]">
            <Image
              src="/fotos/05-produto-direita.jpg"
              alt="Roda de equipe da PAAPS ao ar livre"
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
