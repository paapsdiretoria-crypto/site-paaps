import { Card, Slide } from "./ui";

const etapas = [
  {
    momento: "Hoje",
    corpo:
      "Quatro territórios, todos por convite e relação local. Nenhum canal ativo.",
  },
  {
    momento: "Nos 7 meses de aceleração",
    corpo:
      "Prospecção construída: método, time e as primeiras prefeituras entrando por canal próprio.",
  },
  {
    momento: "Na saída",
    corpo:
      "Licença 01: a primeira rede executando com a própria equipe formada.",
  },
];

export function SectionPedido() {
  return (
    <Slide
      rotulo="O pedido"
      foto="/fotos/18-pedido.jpg"
      veu="veu-forte"
      posicao="center 30%"
    >
      <h2 className="t-afirma font-bold max-w-[26ch] text-balance">
        Entramos no programa para sair dele com o canal de prospecção construído
        e a primeira licença assinada.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        {etapas.map((e) => (
          <Card key={e.momento} className="items-start justify-start text-left">
            <h3 className="t-cardtit font-bold">{e.momento}</h3>
            <p className="t-corpo txt-suave">{e.corpo}</p>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
