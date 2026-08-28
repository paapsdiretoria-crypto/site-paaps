import { Slide } from "./ui";

/* Os numeros direto sobre a foto, sem cartao: a fotografia e o assunto tanto
   quanto o numero. Copiado do slide 16 do pitch antigo. */
const metricas = [
  {
    chave: "LTV",
    numero: "~R$ 711 mil",
    texto: (
      <>
        de <b>margem acumulada</b> por prefeitura, ao longo de cinco anos
      </>
    ),
  },
  {
    chave: "Margem",
    numero: "60%",
    texto: (
      <>
        de <b>margem de contribuição</b> em cada Roda de Equipe PAAPS
      </>
    ),
  },
  {
    chave: "Ponto de equilíbrio",
    numero: "0,26",
    texto: <>de uma única prefeitura já paga a estrutura inteira da empresa</>,
  },
  {
    chave: "Prospecção",
    numero: "a construir",
    texto: (
      <>
        anúncios pagos, e-mail marketing com IA, marketing e branding, viagens
        de visita e assinatura, materiais físicos
      </>
    ),
  },
];

export function SectionMetricas() {
  return (
    <Slide
      rotulo="Métricas projetadas"
      foto="/fotos/12-metricas.jpg"
      veu="veu-forte"
      posicao="center 42%"
      fonte={
        <span className="whitespace-nowrap">
          LTV em margem bruta sobre cinco anos, com atendimento direto no ano
          1 e licença nos anos 2 a 5.
        </span>
      }
    >
      <div className="metricas">
        {metricas.map((m) => (
          <div key={m.chave} className="metrica">
            <span className="metrica__k">{m.chave}</span>
            <p className="metrica__n">{m.numero}</p>
            <p className="metrica__l">{m.texto}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
