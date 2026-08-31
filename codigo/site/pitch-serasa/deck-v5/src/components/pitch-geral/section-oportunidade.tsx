import { Dado, FundoDuplo, Slide } from "../pitch/ui";

/* Versao geral: tira a caixa do eConsig (produto proprio da Serasa) e a marca
   dela do titulo, para que o slide sirva a qualquer fonte de investimento,
   nao so a Serasa. Fica so Divida + Exaustao, dado publico (Mapa da
   Inadimplencia), com o argumento de que a PAAPS soma o dado de saude que
   falta a esse quadro. Titulo escolhido por Mallu em 31/08/2026 entre 4
   opcoes. */
export function SectionOportunidadeGeral() {
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
      <h2 className="t-afirma font-bold max-w-[26ch] text-balance">
        A dívida do servidor público já tem dado. A saúde dele, a PAAPS ajuda
        a medir.
      </h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14 md:max-w-[70%]">
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
