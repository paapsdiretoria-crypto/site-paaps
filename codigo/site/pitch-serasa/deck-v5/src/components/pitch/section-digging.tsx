import { Card, Slide } from "./ui";

export function SectionDigging() {
  return (
    <Slide
      rotulo="Digging no Mercado Corporativo, PAAPS nas Políticas Públicas"
      foto="/fotos/08-digging.jpg"
      veu="veu-forte"
      posicao="center 42%"
      credito="DIGGING no mercado corporativo."
    >
      <div className="grid md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-8 md:gap-14 items-end">
        <div>
          <span className="font-mono t-num font-bold block">R$ 1,16 mi</span>
          <p className="t-corpo txt-suave mt-4 max-w-[34ch]">
            faturados pela DIGGING nos quatro exercícios fechados, de 2022 a
            2025.
          </p>
        </div>
        <h2 className="t-afirma font-bold max-w-[30ch] text-balance">
          A tecnologia de desenvolvimento de lideranças e equipes que grandes
          empresas compram desde 2003 nunca tinha chegado a uma prefeitura. É
          isso que a PAAPS leva.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Serviços</h3>
          <p className="t-corpo txt-suave">
            Consultoria em Desenvolvimento Organizacional, Facilitação de
            Diálogo e Comunicação Não Violenta, Mediação de Conflitos, Projetos
            de Cultura, Educação Corporativa.
          </p>
        </Card>
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Sociedade</h3>
          <p className="t-corpo txt-suave">
            Fundada e liderada por duas mulheres.{" "}
            <b className="text-[var(--bege)]">
              Ex-diretoria de planejamento estratégico do{" "}
              <span className="txt-amarelo">Grupo Pão de Açúcar</span>
            </b>{" "}
            e{" "}
            <b className="text-[var(--bege)]">
              ex-diretoria financeira da{" "}
              <span className="txt-amarelo">FEBRABAN</span>
            </b>
            , sócias do mesmo CNPJ.
          </p>
        </Card>
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Situação</h3>
          <p className="t-corpo txt-suave">
            CNPJ ativo desde 2003. Atende poucos clientes por vez.
          </p>
        </Card>
      </div>
    </Slide>
  );
}
