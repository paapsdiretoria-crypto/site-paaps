import { Dado, Slide } from "./ui";

export function SectionMercado() {
  return (
    <Slide
      rotulo="Mercado"
      foto="/fotos/10-mercado.jpg"
      veu="veu-denso"
      posicao="center 52%"
      fonte="Ata de Registro de Preços nº 41/2026, Pregão nº 90.001/2026, Central de Compras do MGI · Municípios: IBGE."
    >
      <span className="font-mono t-num font-bold block">R$ 26,9 mi</span>
      <p className="t-afirma mt-4 max-w-[30ch] text-balance">
        previsto em ata (maio de 2026) para acolher a saúde mental de
        servidores.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="TAM" numero="5.570">
          municípios brasileiros, todos com equipes em saúde, educação e
          assistência.
        </Dado>
        <Dado titulo="SAM" numero="2.550">
          municípios acima de 10 mil habitantes, que comportam contrato direto
          ou licença: cerca de R$ 724 milhões por ano.
        </Dado>
        <Dado titulo="SOM" numero="100">
          municípios em cinco anos, com projeção de R$ 13,5 milhões de receita
          no ano 5.
        </Dado>
      </div>
    </Slide>
  );
}
