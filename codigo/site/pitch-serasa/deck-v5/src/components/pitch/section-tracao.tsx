import Image from "next/image";
import { Card, Slide } from "./ui";

/* A foto de cada experiencia volta, como estava no slide 06 do pitch antigo,
   com o selo de midia depois do descritivo. */
const territorios = [
  {
    lugar: "Desterro do Melo (MG), 2024",
    foto: "/experiencias/desterro.jpg",
    corpo:
      "Um ano dentro da rotina da rede pública de uma cidade do interior, com saúde e educação completas.",
    midia: { texto: "Programa Tô Indo, Globo" },
  },
  {
    lugar: "Complexo da Maré (RJ), 2025",
    foto: "/experiencias/mare.jpg",
    corpo:
      "Encontros semanais com mães de escola municipal, ao longo de um ano.",
    midia: {
      texto: "TV Bandeirantes",
      href: "https://www.youtube.com/live/SmIPYHcYjIQ",
    },
  },
  {
    lugar: "Rede Municipal do Rio, PROINAPE, 2025",
    foto: "/experiencias/proinape.jpg",
    corpo: "Mais de 300 horas de plantão psicológico e grupos.",
  },
  {
    lugar: "Bela Vista de Minas e Materlândia (MG), 2025",
    foto: "/experiencias/bela-vista.jpg",
    corpo:
      "Mais de 180 servidores acompanhados, e o primeiro diagnóstico de gestão pública.",
  },
];

function SeloMidia({ texto, href }: { texto: string; href?: string }) {
  const dentro = (
    <>
      <i className="not-italic txt-amarelo">▶</i>
      <span>
        <b className="block txt-suave font-normal">Na mídia</b>
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

export function SectionTracao() {
  return (
    <Slide
      rotulo="Onde já estivemos"
      foto="/fotos/07-tracao.jpg"
      veu="veu-forte"
      posicao="center 38%"
    >
      <span className="font-mono t-num font-bold block">+1.150</span>
      <p className="t-afirma mt-3 max-w-[26ch] text-balance">
        pessoas diretamente impactadas pelas{" "}
        <span className="txt-amarelo">pesquisas de campo</span> da PAAPS.
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
        As quatro pesquisas de campo foram conduzidas por valor simbólico, em
        parceria com projetos de pesquisa universitária, projetos locais e
        turismo comunitário.
      </p>
    </Slide>
  );
}
