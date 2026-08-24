import { Card, Slide } from "./ui";

export function SectionConcorrencia() {
  return (
    <Slide
      rotulo="Concorrência"
      foto="/fotos/12-concorrencia.jpg"
      veu="veu-forte"
      posicao="center 30%"
      fonte="Ata de Registro de Preços nº 41/2026, Central de Compras do Ministério da Gestão e da Inovação em Serviços Públicos · Diretrizes da OMS sobre saúde mental no trabalho, 2022."
    >
      <h2 className="t-afirma font-bold max-w-[26ch] text-balance">
        O maior comprador do país procurou saúde mental para o serviço público e
        encontrou consulta individual.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">O que o mercado vende</h3>
          <p className="t-corpo txt-suave">
            Consulta individual remota por aplicativo. Alcança quem se reconhece
            mal, agenda sozinho e comparece.
          </p>
        </Card>
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">O que a OMS diz sobre isso</h3>
          <p className="t-corpo txt-suave">
            “Certeza de evidência baixa a muito baixa.”
          </p>
        </Card>
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">O que a PAAPS faz</h3>
          <p className="t-corpo txt-suave">
            Trabalha a equipe inteira, com o gestor dentro do processo, sem
            depender de quem pede ajuda.
          </p>
        </Card>
      </div>

      <p className="t-corpo txt-suave mt-8">
        Treinamentos locais para a rede · Gestores dentro do processo · Time de
        Customer Success dedicado
      </p>
    </Slide>
  );
}
