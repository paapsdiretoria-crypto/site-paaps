import Image from "next/image";
import { Card, Slide } from "../pitch/ui";

const territorios = [
  {
    lugar: "Desterro do Melo (MG), 2024",
    foto: "/experiencias/desterro.jpg",
    corpo:
      "A full year inside the everyday public network of a small inland city, with health and education fully covered.",
    midia: { texto: "Tô Indo, Globo" },
  },
  {
    lugar: "Complexo da Maré (RJ), 2025",
    foto: "/experiencias/mare.jpg",
    corpo: "Weekly sessions with mothers from a municipal school, over one year.",
    midia: {
      texto: "TV Bandeirantes",
      href: "https://www.youtube.com/live/SmIPYHcYjIQ",
    },
  },
  {
    lugar: "Rio Municipal Network, PROINAPE, 2025",
    foto: "/experiencias/proinape.jpg",
    corpo: "Over 300 hours of psychological on-call support and groups.",
  },
  {
    lugar: "Bela Vista de Minas and Materlândia (MG), 2025",
    foto: "/experiencias/bela-vista.jpg",
    corpo:
      "Over 180 public servants followed, and PAAPS's first public management diagnosis.",
  },
];

function SeloMidia({ texto, href }: { texto: string; href?: string }) {
  const dentro = (
    <>
      <i className="not-italic txt-amarelo">▶</i>
      <span>
        <b className="block txt-suave font-normal">In the media</b>
        {texto}
      </span>
    </>
  );
  const classe =
    "mt-auto pt-3 flex items-center gap-2 t-fonte font-bold text-[var(--bege)]";
  return href ? (
    <a className={classe} href={href} target="_blank" rel="noopener">
      {dentro}
    </a>
  ) : (
    <p className={classe}>{dentro}</p>
  );
}

export function SectionTracaoEn() {
  return (
    <Slide
      rotulo="Where we've been"
      foto="/fotos/07-tracao.jpg"
      veu="veu-forte"
      posicao="center 38%"
    >
      <span className="font-mono t-num font-bold block">+1,150</span>
      <p className="t-afirma mt-3 max-w-[28ch] text-balance">
        people directly impacted by PAAPS&apos;s{" "}
        <span className="txt-amarelo">field research</span>.
      </p>

      <div className="grid md:grid-cols-4 gap-5 md:gap-6 mt-8 md:mt-10">
        {territorios.map((t) => (
          <Card
            key={t.lugar}
            className="items-stretch justify-start text-left !px-0 !pt-0 !pb-4 space-y-0 overflow-hidden"
          >
            <span className="relative block w-full aspect-[16/10]">
              <Image src={t.foto} alt="" fill sizes="24vw" className="object-cover" />
            </span>
            <div className="flex flex-col flex-1 px-5 pt-4">
              <h3 className="t-cardtit font-bold">{t.lugar}</h3>
              <p className="t-corpo txt-suave mt-2">{t.corpo}</p>
              {t.midia ? <SeloMidia {...t.midia} /> : null}
            </div>
          </Card>
        ))}
      </div>

      <p className="t-corpo mt-7 max-w-[86ch]">
        The four field studies were conducted for a symbolic fee, in
        partnership with university research projects, local initiatives and
        community tourism.
      </p>
    </Slide>
  );
}
