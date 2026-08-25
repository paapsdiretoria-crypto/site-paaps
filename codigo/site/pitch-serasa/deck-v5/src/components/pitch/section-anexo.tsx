import { Slide } from "./ui";

/* A conta aberta de cada metrica. Copiado do slide 19 do pitch antigo, sem
   mudar um numero. */
const contas = [
  {
    chave: "LTV",
    numero: "~R$ 711 mil",
    texto: (
      <>
        Ano 1 (execução própria): R$ 924 mil × 60,1% = R$ 555 mil. Anos 2 a 5
        (licença Base): R$ 64,8 mil × 4 anos × 60,1% = R$ 156 mil.{" "}
        <b>Soma: R$ 711 mil em 5 anos.</b>
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
    chave: "Prospecção",
    numero: "A construir",
    texto: (
      <>
        Anúncios pagos, e-mail marketing com IA, marketing e branding, viagens
        de visita e assinatura, materiais físicos. Os 4 territórios vieram por
        convite e relação local.{" "}
        <b>É esse canal que a aceleração ajuda a construir.</b>
      </>
    ),
  },
];

export function SectionAnexo() {
  return (
    <Slide
      rotulo="Anexo"
      foto="/fotos/20-anexo.jpg"
      veu="veu-forte"
      posicao="center 36%"
      credito="PAAPS em campo."
      fonte="Premissas do modelo: estrutura fixa de R$ 12 mil por mês, crescendo até R$ 150 mil no ano 5 · pró-labore de R$ 10 mil por mês para a sócia que conduz a PAAPS · saída do Simples Nacional no ano 3 · o Diagnóstico 360° a R$ 10 mil é porta de entrada, contabilizada como investimento comercial · Modelo de negócio completo mediante solicitação."
    >
      <h2 className="t-afirma font-bold">Como chegamos nesses números.</h2>

      <div className="metricas metricas--calc mt-6">
        {contas.map((c) => (
          <div key={c.chave} className="metrica">
            <span className="metrica__k">{c.chave}</span>
            <p className="metrica__n">{c.numero}</p>
            <p className="metrica__l">{c.texto}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
