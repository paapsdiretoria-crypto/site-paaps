import { Dado, Slide } from "./ui";

export function SectionModelo() {
  return (
    <Slide
      rotulo="Modelo de negócio"
      foto="/fotos/09-modelo.jpg"
      veu="veu-forte"
      posicao="center 38%"
      credito="PAAPS em campo."
      fonte="Folha calculada sobre salário de R$ 6.000, Simples Nacional, Anexo III, 4ª faixa · Modelo de negócio completo mediante solicitação."
    >
      <span className="font-mono t-num font-bold block">60,1%</span>
      <p className="t-afirma mt-4 max-w-[22ch]">
        de margem de contribuição por Roda.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Preço" numero="R$ 1.100">
          por Roda de Equipe. A Roda que não acontece não é cobrada.
        </Dado>
        <Dado titulo="Custo" numero="R$ 438">
          por Roda, entre folha, supervisão, orquestração e imposto.
        </Dado>
        <Dado titulo="Contrato" numero="R$ 924 mil">
          por ano numa prefeitura de 500 Servidores Públicos: cerca de 70 Rodas
          por mês, mais encontros estratégicos com lideranças e um treinamento
          mensal.
        </Dado>
      </div>

      <p className="t-corpo mt-8 max-w-[70ch]">
        As duas psicólogas moram na cidade ou na região, em CLT. Cerca de{" "}
        <b>R$ 144 mil por ano</b> em salário ficam no próprio município.
      </p>
    </Slide>
  );
}
