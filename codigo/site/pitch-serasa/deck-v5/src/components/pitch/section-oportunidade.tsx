import { Dado, FundoDuplo, Slide } from "./ui";

export function SectionOportunidade() {
  return (
    <Slide
      rotulo="A oportunidade"
      fundo={
        <FundoDuplo
          esquerda="/fotos/13-oportunidade-a.jpg"
          direita="/fotos/13-oportunidade-b.jpg"
          veu="veu-forte"
          alt={[
            "Participante de roda da PAAPS",
            "Participante de roda da PAAPS",
          ]}
        />
      }
      credito="Roda de escuta conduzida pela PAAPS, Minas Gerais."
      fonte="Serasa Experian, Mapa da Inadimplência 2026 · SalaryFits, Saúde Financeira e Bem-Estar do Trabalhador Brasileiro · Ipea, Atlas do Estado Brasileiro · Erro no atendimento: BMJ, 2022, revisão de 35 estudos."
    >
      <h2 className="t-afirma font-bold max-w-[24ch] text-balance">
        A Serasa já alcança o servidor público pelo eConsig. Falta o dado da
        saúde dele.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="eConsig" numero="600+">
          órgãos das três esferas usam a plataforma de consignado da Serasa.
        </Dado>
        <Dado titulo="Dívida" numero="78%">
          dos brasileiros inadimplentes ganham até dois salários mínimos. O
          servidor municipal ganha R$ 2.640.
        </Dado>
        <Dado titulo="Consequência" numero="2×">
          a chance de erro no atendimento quando quem atende está esgotado.
        </Dado>
      </div>

      <p className="t-corpo mt-8">
        46% dos trabalhadores endividados relatam exaustão extrema.
      </p>
    </Slide>
  );
}
