import Image from "next/image";
import { Fundo } from "../pitch/ui";

export function SectionCapaEn() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/01-capa.jpg"
        veu="veu-capa"
        posicao="center 52%"
        prioridade
        alt="Dirt road in the countryside"
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

      <div className="absolute right-4 md:right-8 top-6 z-20 flex flex-col items-end gap-3 max-w-[46vw]">
        <p className="t-rotulo txt-suave text-right leading-snug">
          Application to the <b className="text-[var(--bege)]">Impulsiona Startups</b>,
          <br className="hidden md:block" /> Health Innovation track, 2026 to 2027.
        </p>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center bg-[var(--bege)] px-2 py-1">
            <Image
              src="/marca/serasa.webp"
              alt="Serasa Experian"
              width={120}
              height={28}
              className="h-[18px] md:h-[22px] w-auto"
            />
          </span>
          <span className="inline-flex items-center bg-[var(--bege)] px-2 py-1">
            <Image
              src="/marca/ace-cortex.svg"
              alt="ACE Cortex"
              width={100}
              height={24}
              className="h-[14px] md:h-[17px] w-auto"
            />
          </span>
        </div>
      </div>

      <div className="container min-h-screen relative z-10 flex flex-col justify-end pb-16 md:pb-20">
        <h1 className="t-capa font-bold max-w-[21ch] text-balance">
          The <span className="txt-amarelo">Mental Health</span> Network for
          the Public Policy of the future.
        </h1>
        <p className="t-rotulo txt-suave mt-6">
          Built on <u className="italic">evidence</u>.
        </p>
      </div>
    </div>
  );
}
