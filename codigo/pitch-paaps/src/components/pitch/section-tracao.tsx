import { Card, Slide } from "./ui";

const territorios = [
  {
    lugar: "Desterro do Melo (MG), 2024",
    corpo:
      "Um ano dentro da rotina da rede pública de uma cidade do interior, com saúde e educação completas.",
    midia: "Na mídia: Programa Tô Indo, Globo.",
  },
  {
    lugar: "Complexo da Maré (RJ), 2025",
    corpo:
      "Encontros semanais com mães de escola municipal, ao longo de um ano.",
    midia: "Na mídia: TV Bandeirantes.",
  },
  {
    lugar: "Rede Municipal do Rio, PROINAPE, 2025",
    corpo: "Mais de 300 horas de plantão psicológico e grupos.",
  },
  {
    lugar: "Bela Vista de Minas e Materlândia (MG), 2025",
    corpo:
      "Mais de 180 servidores acompanhados, e o primeiro diagnóstico de gestão pública.",
  },
];

export function SectionTracao() {
  return (
    <Slide
      rotulo="Onde já estivemos"
      foto="/fotos/07-tracao.jpg"
      veu="veu-forte"
      posicao="center 40%"
      fonte="Contagem interna da PAAPS, somando as quatro pesquisas de campo."
    >
      <span className="font-mono t-num font-bold block">+1.150</span>
      <p className="t-afirma mt-4 max-w-[26ch] text-balance">
        pessoas diretamente impactadas pelas pesquisas de campo da PAAPS.
      </p>

      <div className="grid md:grid-cols-4 gap-5 md:gap-6 mt-10 md:mt-12">
        {territorios.map((t) => (
          <Card key={t.lugar} className="items-start justify-start text-left">
            <h3 className="t-cardtit font-bold">{t.lugar}</h3>
            <p className="t-corpo txt-suave">{t.corpo}</p>
            {t.midia ? (
              <p className="t-fonte txt-amarelo mt-auto">{t.midia}</p>
            ) : null}
          </Card>
        ))}
      </div>

      <p className="t-corpo mt-8">Os quatro territórios vieram por convite.</p>
    </Slide>
  );
}
