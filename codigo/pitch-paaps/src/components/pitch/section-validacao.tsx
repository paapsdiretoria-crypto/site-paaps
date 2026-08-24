import { Dado, Slide } from "./ui";

export function SectionValidacao() {
  return (
    <Slide
      rotulo="Validação de mercado"
      foto="/fotos/06-validacao.jpg"
      veu="veu-forte"
      posicao="center 40%"
      fonte="Schwartz Center for Compassionate Healthcare, licenciador; a Point of Care Foundation conduziu o programa de 2009 a 2025 · Diretrizes da OMS sobre saúde mental no trabalho, 2022."
    >
      <h2 className="t-afirma font-bold max-w-[24ch] text-balance">
        O método já é licenciado no Reino Unido e na Irlanda desde 2009.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Escala" numero="200+">
          organizações conduzindo o encontro mensal de equipe.
        </Dado>
        <Dado titulo="Schwartz Center" numero="Boston">
          licencia o método anualmente às organizações que o conduzem.
        </Dado>
        <Dado titulo="A alternativa">
          “Certeza de evidência baixa a muito baixa” é o que a OMS atribui à
          consulta individual remota por aplicativo.
        </Dado>
      </div>
    </Slide>
  );
}
