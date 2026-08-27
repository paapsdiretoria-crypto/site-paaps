import { Dado, Slide } from "./ui";

export function SectionSolucao() {
  return (
    <Slide
      rotulo="Solução"
      foto="/fotos/04-solucao.jpg"
      veu="veu-denso"
      posicao="center 38%"
      credito="PAAPS em campo, Minas Gerais."
    >
      <h2 className="t-afirma font-bold max-w-[28ch] text-balance">
        Conectamos equipes do serviço público com psicólogas treinadas no
        método PAAPS.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Frequência" numero="1h30">
          por mês, com cada equipe da rede pública.
        </Dado>
        <Dado titulo="Aproveitamento" numero="~10">
          Servidores Públicos por hora da psicóloga.
        </Dado>
        <Dado titulo="Cascata">
          O cuidado prestado à população melhora junto, e isso é mensurável.
        </Dado>
      </div>

      <p className="t-afirma font-bold mt-10 md:mt-14 text-center text-balance">
        Cuidar da ponta, impactar o mundo:{" "}
        <u>Psicologia de Qualidade</u> presente para cuidar e integrar as
        equipes.
      </p>
    </Slide>
  );
}
