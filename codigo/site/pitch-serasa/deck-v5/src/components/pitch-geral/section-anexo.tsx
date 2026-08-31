import { Slide } from "../pitch/ui";

/* Versao geral: mesma conta aberta do original (components/pitch/section-anexo.tsx,
   ja com LTV em 4 anos e "Premissas do modelo"), so o fecho troca a menção
   direta a ACE Cortex/Serasa Experian por uma versão que serve a qualquer
   fonte de investimento. */
const contas = [
  {
    chave: "LTV",
    numero: "~R$ 672 mil",
    texto: (
      <>
        Ano 1 (execução própria): R$ 924 mil × 60,1% = R$ 555 mil. Anos 2 a 4
        (licença Base): R$ 64,8 mil × 3 anos × 60,1% = R$ 117 mil.{" "}
        <b>Soma: R$ 672 mil em 4 anos.</b>
      </>
    ),
  },
  {
    chave: "Margem",
    numero: "60%",
    texto: (
      <>
        Uma Roda de Equipe custa R$ 1.100 para a prefeitura e R$ 438 para a
        PAAPS (2 psicólogos CLT, supervisão, orquestração e imposto).{" "}
        <b>R$ 662 de margem: 60,1%.</b>
      </>
    ),
  },
  {
    chave: "Ponto de equilíbrio",
    numero: "0,26",
    texto: (
      <>
        Estrutura fixa da empresa: R$ 12 mil por mês, sem pró-labore no ano 1.
        Margem de um único município: R$ 46,31 mil por mês.{" "}
        <b>R$ 12 mil ÷ R$ 46,31 mil = 0,26 município.</b>
      </>
    ),
  },
  {
    chave: "Premissas do modelo",
    numero: "",
    texto: (
      <>
        Estrutura fixa de R$ 12 mil por mês, crescendo até R$ 150 mil no ano
        5. Pró-labore de R$ 10 mil por mês para a sócia que conduz a PAAPS.
        Saída do Simples Nacional no ano 3.{" "}
        <b>
          Diagnóstico 360° a R$ 10 mil: porta de entrada, contabilizado como
          investimento comercial.
        </b>
      </>
    ),
  },
];

export function SectionAnexoGeral() {
  return (
    <Slide
      rotulo="Anexo"
      foto="/fotos/20-anexo.jpg"
      veu="veu-forte"
      posicao="center 36%"
      credito="PAAPS em campo."
    >
      <h2 className="t-afirma font-bold">Como chegamos nesses números.</h2>

      <div className="metricas metricas--calc mt-6">
        {contas.map((c) => (
          <div key={c.chave} className="metrica">
            <span className="metrica__k">{c.chave}</span>
            {c.numero ? <p className="metrica__n">{c.numero}</p> : null}
            <p className="metrica__l">{c.texto}</p>
          </div>
        ))}
      </div>

      <p className="t-corpo txt-suave text-center mt-10 mx-auto max-w-[56ch]">
        Seguimos abertas a expertise externa para deixar essas projeções
        ainda melhores, e mais precisas.
      </p>
    </Slide>
  );
}
