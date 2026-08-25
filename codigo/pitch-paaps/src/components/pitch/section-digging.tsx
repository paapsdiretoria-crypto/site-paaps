import { Card, Slide } from "./ui";

export function SectionDigging() {
  return (
    <Slide
      rotulo="Quem opera"
      foto="/fotos/08-digging.jpg"
      veu="veu-forte"
      posicao="center 42%"
      fonte="DREs e balanços dos exercícios de 2022 a 2025 · Certidão de Inteiro Teor da 8ª alteração contratual, JUCESP, 27/04/2026."
    >
      <div className="grid md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-8 md:gap-14 items-end">
        <div>
          <span className="font-mono t-num font-bold block">R$ 1,16 mi</span>
          <p className="t-corpo txt-suave mt-4 max-w-[34ch]">
            faturados pela DIGGING nos quatro exercícios fechados, de 2022 a
            2025.
          </p>
        </div>
        <h2 className="t-afirma font-bold max-w-[26ch] text-balance">
          A PAAPS é a transposição para a rede pública de um método que a
          DIGGING opera no mercado corporativo desde 2003.
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
            Fundada e liderada por duas mulheres. Ex-diretoria de planejamento
            estratégico do Grupo Pão de Açúcar e ex-diretoria financeira da
            FEBRABAN, sócias do mesmo CNPJ.
          </p>
        </Card>
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Situação</h3>
          <p className="t-corpo txt-suave">
            CNPJ ativo desde 2003. Atende poucos clientes por vez.
          </p>
        </Card>
      </div>

      <p className="t-corpo mt-8 max-w-[62ch]">
        O método que essas empresas compram há vinte e três anos nunca chegou a
        uma prefeitura.
      </p>
    </Slide>
  );
}
