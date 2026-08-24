import { Dado, Slide } from "./ui";

export function SectionSolucao() {
  return (
    <Slide
      rotulo="Solução"
      foto="/fotos/04-solucao.jpg"
      veu="veu-denso"
      posicao="center 38%"
      fonte="Organização Mundial da Saúde. Diretrizes da OMS sobre saúde mental no trabalho. Genebra: OMS, 2022."
    >
      <h2 className="t-afirma font-bold max-w-[24ch] text-balance">
        “Formar gestores e trabalhar a equipe” é a única recomendação forte da
        OMS em saúde mental no trabalho.
      </h2>
      <p className="t-corpo txt-suave mt-5 max-w-[52ch]">
        É o que a PAAPS faz. A Roda de Equipe é conduzida por psicóloga formada
        no método.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Frequência" numero="1h">
          por mês, com cada equipe da rede municipal.
        </Dado>
        <Dado titulo="Alcance" numero="10">
          Servidores Públicos por hora de psicóloga.
        </Dado>
        <Dado titulo="Cascata">
          O cuidado prestado à população melhora junto, e isso é mensurável.
        </Dado>
      </div>
    </Slide>
  );
}
