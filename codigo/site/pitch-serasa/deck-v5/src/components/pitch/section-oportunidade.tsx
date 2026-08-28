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
      fonte={
        <span className="whitespace-nowrap">
          Serasa Experian, Mapa da Inadimplência 2026 · SalaryFits, Saúde
          Financeira e Bem-Estar do Trabalhador Brasileiro · Ipea, Atlas do
          Estado Brasileiro · Erro no atendimento: BMJ, 2022, revisão de 35
          estudos.
        </span>
      }
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
        <Dado titulo="Exaustão" numero="46%">
          dos trabalhadores endividados relatam exaustão extrema.
        </Dado>
      </div>

      <p className="mt-8 text-[clamp(1.1rem,1.9vw,2rem)] leading-snug max-w-[46ch]">
        <b>Consequência.</b> O dobro da chance de erro no atendimento quando
        quem atende está <span className="txt-amarelo font-bold">esgotado</span>.
      </p>
    </Slide>
  );
}
