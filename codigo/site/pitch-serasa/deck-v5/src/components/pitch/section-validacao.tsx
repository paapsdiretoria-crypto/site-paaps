import { Dado, Slide } from "./ui";

export function SectionValidacao() {
  return (
    <Slide
      rotulo="Validação de mercado"
      foto="/fotos/06-validacao.jpg"
      veu="veu-forte"
      posicao="center 46%"
      quente
      credito="Roda de Equipe PAAPS."
      fonte="Schwartz Center for Compassionate Healthcare, licenciador; a Point of Care Foundation conduziu o programa de 2009 a 2025 · Diretrizes da OMS sobre saúde mental no trabalho, 2022."
    >
      <h2 className="t-afirma font-bold max-w-[28ch] text-balance">
        <span className="txt-amarelo">
          “Formar gestores, trabalhar a equipe”
        </span>{" "}
        é a única recomendação forte da OMS em saúde mental no trabalho.
      </h2>

      <ol className="grid md:grid-cols-3 gap-4 md:gap-8 mt-6 t-corpo txt-suave list-decimal list-inside max-w-[70ch]">
        <li>Desenvolver Habilidades em Manejo do Estresse</li>
        <li>Reduzir Sofrimento Emocional</li>
        <li>Melhorar a Efetividade do Trabalho</li>
      </ol>
      <p className="t-fonte txt-suave mt-2">(OMS, 2022, p. 44)</p>

      <h3 className="t-afirma font-bold mt-10 max-w-[26ch] text-balance">
        Modelo semelhante já é licenciado no Reino Unido e na Irlanda desde
        2009.
      </h3>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 md:max-w-[62%]">
        <Dado titulo="Escala" numero="200+">
          organizações conduzindo o <u>encontro mensal</u> de equipe.
        </Dado>
        <Dado titulo="Schwartz Center" numero="Boston">
          licencia o modelo anualmente às organizações que o conduzem.
        </Dado>
      </div>
    </Slide>
  );
}
