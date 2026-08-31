import Image from "next/image";
import { Fundo } from "../pitch/ui";

/* Versao geral: sem o bloco "Inscrição para o Impulsiona Startups" e sem os
   selos Serasa/ACE Cortex do canto superior direito, ja que este deck nao e
   mais dessa inscrição especifica. Cabecalho fica so com a marca PAAPS. */
export function SectionCapaGeral() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/01-capa.jpg"
        veu="veu-capa"
        posicao="center 52%"
        prioridade
        alt="Estrada de terra no interior"
      />

      <div className="absolute left-4 md:left-8 top-6 z-20">
        <Image
          src="/marca/paaps.png"
          alt="PAAPS"
          width={190}
          height={54}
          priority
          className="w-[120px] md:w-[170px] h-auto"
        />
      </div>

      <div className="container min-h-screen relative z-10 flex flex-col justify-end pb-16 md:pb-20">
        <h1 className="t-capa font-bold max-w-[17ch] text-balance">
          A Rede de <span className="txt-amarelo">Saúde Mental</span> para as
          Políticas Públicas do futuro.
        </h1>
        <p className="t-rotulo txt-suave mt-6">
          Baseado em <u className="italic">evidências</u>.
        </p>
      </div>
    </div>
  );
}
