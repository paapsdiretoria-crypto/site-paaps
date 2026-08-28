import Image from "next/image";
import { Card, Dado, Slide } from "./ui";

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

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10 md:max-w-[70%]">
        <Dado titulo="Preço" numero="R$ 1.100">
          por Roda de Equipe, 1h30.
        </Dado>

        {/* Fora do componente Dado, que centraliza tudo: aqui a premissa entra
            como rotulo no canto superior esquerdo, e o "por ano" precisa ficar
            colado no numero. */}
        <Card className="!items-stretch !justify-start text-left !pt-5 space-y-2">
          <span className="t-fonte txt-suave">
            1 município, 500 Servidores Públicos contemplados
          </span>
          <h2 className="t-cardtit font-bold text-center">Contrato</h2>
          <p className="flex items-baseline justify-center gap-2">
            <span className="font-mono t-cardnum font-bold whitespace-nowrap">
              R$ 924 mil
            </span>
            <span className="t-corpo txt-suave whitespace-nowrap">por ano</span>
          </p>
          <p className="t-corpo txt-suave text-center">R$ 77 mil de MRR</p>
        </Card>
      </div>

      {/* Cabecalho de revista para a metade de baixo. */}
      {/* O PNG do logo traz as bolinhas acima do wordmark, entao a altura total
          precisa ser maior que a da letra para que "paaps" leia do mesmo
          tamanho da palavra ao lado. */}
      <h3 className="t-cardtit font-bold mt-8 md:mt-10 flex items-baseline gap-2">
        Modelo de Negócio
        <Image
          src="/marca/paaps-branco.png"
          alt="PAAPS"
          width={160}
          height={45}
          className="h-[1.75em] w-auto translate-y-[.18em]"
        />
      </h3>

      {/* Duas colunas alinhadas com os cards: Entregaveis ao lado de Escala e
          retencao, Equipe ao lado de Qualidade e impacto. */}
      <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3 mt-3 t-corpo md:max-w-[70%]">
        <p>
          <b>Entregáveis.</b> Uma Roda mensal por equipe, no mínimo, com
          margem para mais; encontros estratégicos com lideranças e um
          treinamento mensal ou rodas extras.
        </p>
        <p>
          <b>Escala e retenção.</b> PAAPS supervisiona, licencia o método.
          Possível progressão de carreira interna da Psicóloga Local.
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
      </div>
    </Slide>
  );
}
