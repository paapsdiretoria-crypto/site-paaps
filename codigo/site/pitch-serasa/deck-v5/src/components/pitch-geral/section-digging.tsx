import Image from "next/image";
import { Card, Slide } from "../pitch/ui";

const clientes = [
  "carrefour",
  "boticario",
  "raizen",
  "cosan",
  "desterro-do-melo",
  "motiva",
  "signify-philips",
  "boehringer",
  "beneficencia",
  "rodobens",
  "jive",
  "spventures",
];

/* Versao geral: corrige o card "Sociedade", que no original atribuia a
   ex-diretoria financeira da FEBRABAN (Luiz Sergio Barbosa, homem, consultor
   financeiro, nao socio de Digging) as "duas mulheres, socias do mesmo CNPJ".
   As duas socias sao Fabiane (ex-Pao de Acucar) e Mallu (formanda em
   psicologia, fundadora da metodologia PAAPS): mantida "formanda", nao
   "psicóloga formada", porque o titulo e regulado pelo CFP e ela ainda esta
   se formando (ver equipe semente, calibrado 22/08/2026). */
export function SectionDiggingGeral() {
  return (
    <Slide
      rotulo="Tração no Mercado de Consultoria Corporativo"
      foto="/fotos/08-digging.jpg"
      veu="veu-forte"
      posicao="center 42%"
      fonte="CNPJ 05.983.700/0001-67"
    >
      <div className="grid md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-8 md:gap-12 items-end">
        <div>
          <span className="font-mono t-num font-bold block">R$ 1,16 mi</span>
          <p className="t-corpo txt-suave mt-4 max-w-[34ch]">
            faturados pela DIGGING nos últimos quatro anos.
          </p>
        </div>
        <h2 className="t-afirma font-bold max-w-[30ch] text-balance">
          A tecnologia de desenvolvimento de lideranças e equipes que grandes
          empresas compram desde 2003 nunca tinha chegado a uma prefeitura. É
          isso que a PAAPS leva.
        </h2>
      </div>

      <p className="t-corpo txt-suave mt-6 max-w-[92ch]">
        Em 2026, os 03 sócios iniciam fase de diversificação relacionada, e
        estão prestes a escalar o novo motor de receita. Há demonstrações
        sólidas de interesse após fim da restrição de gastos públicos em
        períodos eleitorais.
      </p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Serviços</h3>
          <p className="t-corpo txt-suave">
            Consultoria em Desenvolvimento Organizacional, Facilitação de
            Diálogo e Comunicação Não Violenta, Mediação de Conflitos, Projetos
            de Cultura (Barrett), Educação Corporativa, Teambuildings,
            Mentoring e Coaching Executivo.
          </p>
        </Card>
        <Card className="items-start justify-start text-left">
          <h3 className="t-cardtit font-bold">Sociedade</h3>
          <p className="t-corpo txt-suave">
            Fundada e liderada por duas mulheres.{" "}
            <b className="text-[var(--bege)]">
              Ex-diretora de planejamento estratégico do{" "}
              <span className="txt-amarelo">Grupo Pão de Açúcar</span>
            </b>{" "}
            e sua sócia,{" "}
            <b className="text-[var(--bege)]">
              formanda em psicologia, fundadora da{" "}
              <span className="txt-amarelo">metodologia PAAPS</span>
            </b>
            . Sócias do mesmo CNPJ.
          </p>
        </Card>
      </div>

      <p className="t-corpo mt-6 max-w-[92ch]">
        A Digging é a consultoria escolhida para desenvolver líderes e seus
        times, em empresas como:
      </p>

      <div className="mt-3 grid grid-cols-4 md:grid-cols-12 gap-x-3 gap-y-3 md:gap-x-4 items-center rounded bg-[var(--bege)] px-4 py-3 md:px-6 md:py-4 shadow-[0_6px_30px_rgba(20,9,2,.55)]">
        {clientes.map((c) => (
          <span key={c} className="relative block w-full aspect-[3/2]">
            <Image
              src={`/clientes/${c}.png`}
              alt=""
              fill
              sizes="8vw"
              className="object-contain"
            />
          </span>
        ))}
      </div>
    </Slide>
  );
}
