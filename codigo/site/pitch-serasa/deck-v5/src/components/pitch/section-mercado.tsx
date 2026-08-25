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
      <h2 className="t-afirma font-bold max-w-[26ch] text-balance">
        O Governo Federal já reservou R$ 26,9 milhões para a saúde mental de
        servidores, e a ata permite adesão de estados e municípios.
      </h2>
      <p className="t-corpo txt-suave mt-5 max-w-[54ch]">
        O SUS chega a 5.570 municípios. Nenhuma outra estrutura pública alcança
        tanto território.
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
        <Dado titulo="SOM" numero="68">
          municípios no ano 5, 1,2% do total: 8 em execução própria e 60 com o
          método licenciado, somando cerca de R$ 13,5 milhões de receita.
        </Dado>
      </div>
    </Slide>
  );
}
