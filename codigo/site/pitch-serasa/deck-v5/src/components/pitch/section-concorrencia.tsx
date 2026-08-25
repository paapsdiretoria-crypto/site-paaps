import { Slide } from "./ui";

export function SectionConcorrencia() {
  return (
    <Slide
      claro
      rotulo="Concorrência"
      fonte="Ata de Registro de Preços nº 41/2026, Central de Compras do Ministério da Gestão e da Inovação em Serviços Públicos · Diretrizes da OMS sobre saúde mental no trabalho, 2022."
    >
      <h2 className="t-afirma font-bold max-w-[28ch] text-balance">
        Trabalhamos universalmente a equipe, com o gestor dentro do processo,
        sem esperar o afastamento ou a crise para agir.
      </h2>

      <p className="t-corpo txt-suave mt-5 max-w-[70ch]">
        O modelo garante 1 Roda por mês, por equipe{" "}
        <span className="txt-amarelo">+</span> Treinamentos de Lideranças e
        Equipe <span className="txt-amarelo">+</span> Time de Customer
        Success dedicado.
      </p>

      <p className="t-corpo font-bold mt-8 max-w-[60ch]">
        Há margem mensal além das rodas fixas, permitindo:
      </p>
      <ol className="grid md:grid-cols-2 gap-3 md:gap-4 mt-3 t-corpo txt-suave list-decimal list-inside max-w-[70ch]">
        <li>14 rodas extra por mês</li>
        <li>treinamentos para equipes</li>
        <li>integração entre equipes</li>
        <li>treinamento e envolvimento estratégico da gestão</li>
      </ol>
    </Slide>
  );
}
