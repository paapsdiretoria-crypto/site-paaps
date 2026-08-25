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
      <p className="t-afirma mt-4 max-w-[26ch]">
        de margem de contribuição por Roda de Equipe.
      </p>
      <p className="t-corpo txt-suave mt-2 italic">
        Para 1 prefeitura de 500 Servidores Públicos.
      </p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14 md:max-w-[62%]">
        <Dado titulo="Preço" numero="R$ 1.100">
          por Roda de Equipe, 1h30.
        </Dado>
        <Dado titulo="Contrato" numero="R$ 924 mil">
          por ano · R$ 77 mil de MRR, num município com 500 Servidores
          Públicos.
        </Dado>
      </div>

      <div className="t-corpo mt-8 max-w-[70ch] space-y-3">
        <p>
          <b>Entregáveis.</b> 70 Rodas por mês (1 roda mensal por equipe,
          garantida), encontros estratégicos com lideranças e um treinamento
          mensal ou rodas extras.
        </p>
        <p>
          <b>Equipe.</b> 2 psicólogas locais ou da região.{" "}
          <b>~R$ 144 mil por ano</b> em salário, em circulação no próprio
          município.
        </p>
        <p>
          <b>Qualidade e impacto.</b> 1 supervisor clínico para 7 municípios.
          1 customer success para 10.
        </p>
        <p>
          <b>Escala e retenção.</b> PAAPS supervisiona, licencia o método.
          Possível progressão de carreira interna da Psicóloga Local.
        </p>
      </div>
    </Slide>
  );
}
