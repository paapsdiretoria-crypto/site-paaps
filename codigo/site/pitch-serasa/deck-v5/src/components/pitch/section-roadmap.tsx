import { Slide } from "./ui";

/* Os oito marcos alternando acima e abaixo da linha do tempo. Copiado do
   slide 14 do pitch antigo. Os dois marcos que a aceleracao constroi ficam
   acesos e sao recolhidos por uma chave, porque estao em lados opostos da
   linha e sozinhos nao leriam como par. */
const marcos = [
  {
    lado: "alto",
    titulo: "Ponto de equilíbrio no primeiro contrato",
    texto: "uma prefeitura cobre 3,9× a estrutura fixa",
  },
  {
    lado: "baixo",
    titulo: "Equipe local",
    texto:
      "psicólogas da cidade formadas e continuadamente supervisionadas. MVP da metodologia para licença",
  },
  {
    lado: "alto",
    invest: true,
    titulo: "Método escrito",
    texto: "o MVP da primeira prefeitura vira protocolo para licenciar",
  },
  {
    lado: "baixo",
    invest: true,
    titulo: "Ponto de Apoio",
    texto: "plataforma integrada, dados em tempo real das redes clientes",
  },
  {
    lado: "alto",
    titulo: "Licença 01",
    texto: "primeira rede executando com a própria equipe",
  },
  {
    lado: "baixo",
    titulo: "Consórcio",
    texto: "um contrato, dezenas de cidades",
  },
  { lado: "alto", titulo: "68 municípios", texto: "1,2% do Brasil, no ano 5" },
  {
    lado: "baixo",
    titulo: "180 municípios",
    texto: "no Brasil (ano 10) + internacionalização do Case Brasil",
  },
];

export function SectionRoadmap() {
  return (
    <Slide
      rotulo="Roadmap"
      foto="/fotos/13-roadmap.jpg"
      veu="veu-forte"
      posicao="center 52%"
    >
      <h2 className="t-afirma font-bold max-w-[30ch] text-balance">
        De uma rede por vez a uma malha nacional, com praticamente a mesma
        estrutura fixa.
      </h2>

      <div className="trilho">
        <div className="trilho__fila">
          {marcos.map((m) => (
            <div
              key={m.titulo}
              className={`marco marco--${m.lado}${
                m.invest ? " marco--invest" : ""
              }`}
            >
              <span className="marco__txt">
                <b>{m.titulo}</b>
                {m.texto}
              </span>
            </div>
          ))}
        </div>

        <div className="trilho__chave">
          <span className="chave__marca" />
          <span className="chave__rotulo">
            As duas frentes principais para Smart Money
          </span>
        </div>
      </div>

      <div className="trilho__faixas">
        <span className="faixa-fase faixa-fase--acel">
          Os 7 meses de aceleração
        </span>
        <span className="faixa-fase faixa-fase--exec">2027 a 2031</span>
      </div>
    </Slide>
  );
}
