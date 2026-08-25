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
      <p className="t-corpo txt-suave italic max-w-[54ch]">
        Conectamos Equipes do Serviço Público, com Psicóloga treinada no
        Método PAAPS. <u>Psicologia de Qualidade</u> presente para cuidar das
        equipes das Políticas Públicas do Futuro.
      </p>

      <h2 className="t-afirma font-bold mt-6 max-w-[26ch] text-balance">
        <u>Roda de Equipe PAAPS:</u> Cuidar da ponta, impactar o mundo.
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
    </Slide>
  );
}
