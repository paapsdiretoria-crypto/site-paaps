import { Fragment } from "react";
import { Dado, Slide } from "./ui";

/* Copiado do slide 15 do pitch antigo, sem mudar um numero. A barra inteira e
   a receita bruta e fica apagada; a parte acesa embaixo e a margem. */
const anos = [
  { ano: "Ano 1", receita: "R$ 0,92 mi", altura: 7, margem: 42, sub: "1 prefeitura" },
  { ano: "Ano 2", receita: "R$ 2,87 mi", altura: 21, margem: 46, sub: "3 + 1 licença" },
  { ano: "Ano 3", receita: "R$ 5,48 mi", altura: 41, margem: 42, sub: "5 + 8 licenças" },
  { ano: "Ano 4", receita: "R$ 8,14 mi", altura: 60, margem: 41, sub: "6 + 25 licenças" },
  { ano: "Ano 5", receita: "R$ 13,52 mi", altura: 100, margem: 42, sub: "8 + 60 licenças" },
];

export function SectionProjecoes() {
  return (
    <Slide
      rotulo="Projeções"
      foto="/fotos/11-projecoes.jpg"
      veu="veu-forte"
      posicao="center 50%"
      credito="Desterro do Melo, Minas Gerais."
      fonte="Projeção com as premissas abertas: R$ 1.100 por Roda de Equipe, prefeitura atendida diretamente a ~R$ 924 mil ao ano, licença anual do método a R$ 64,8 mil e margem de contribuição de 60,1% por município."
    >
      <div className="barras">
        <span className="brot brot--rec">Receita bruta projetada</span>
        <span className="brot brot--mar">Margem</span>
        <span className="brot brot--ano">Tempo</span>
        <span className="brot brot--sub">Projeção</span>

        {anos.map((a, i) => {
          const coluna = { gridColumn: i + 2 };
          return (
            <Fragment key={a.ano}>
              <span className="bv" style={coluna}>
                {a.receita}
              </span>
              <div className="bz" style={coluna}>
                <div
                  className="barra-ano__b"
                  style={{ height: `${a.altura}%` }}
                >
                  <i
                    className="barra-ano__res"
                    style={{ height: `${a.margem}%` }}
                  />
                </div>
              </div>
              <span className="bm" style={coluna}>
                {a.margem}%
              </span>
              <span className="ba" style={coluna}>
                {a.ano}
              </span>
              <span className="bs" style={coluna}>
                {a.sub}
              </span>
            </Fragment>
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8">
        <Dado titulo="Recorrência" numero="38%">
          da receita do ano 5 é recorrente: já contratada antes do ano começar.
        </Dado>
        <Dado titulo="Receita por pessoa" numero="R$ 483 mil">
          por pessoa da equipe no ano 5, contra R$ 231 mil no ano 1.
        </Dado>
        <Dado titulo="Equipe" numero="28 pessoas">
          é a equipe inteira no ano 5, atendendo 68 prefeituras.
        </Dado>
      </div>

      <p className="t-corpo mt-8 max-w-[74ch]">
        O que mais move esse resultado é <b>quantas prefeituras entram por
        ano</b>. Cada prefeitura que entra vira dado de uma rede que ninguém
        ainda conseguiu medir.
      </p>
    </Slide>
  );
}
