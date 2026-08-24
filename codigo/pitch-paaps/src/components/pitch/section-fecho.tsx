import Image from "next/image";
import { Fundo } from "./ui";

export function SectionFecho() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/16-fecho.jpg"
        veu="veu-base"
        posicao="center 34%"
        alt="Agente Comunitária de Saúde em visita domiciliar"
      />

      <div className="absolute right-4 md:right-8 top-6 z-20 flex flex-col items-end gap-2">
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

      <div className="container min-h-screen relative z-10 flex flex-col justify-end pb-16 md:pb-20">
        <p className="t-corpo txt-suave">Serasa Experian e ACE Cortex,</p>
        <p className="t-corpo mt-3 max-w-[54ch]">
          Essa é Celina. Ela é Agente Comunitária de Saúde, e caminha às mais
          remotas casas do Brasil todos os dias, a 2 salários mínimos.
        </p>

        <h2 className="t-visao font-bold mt-8 max-w-[16ch] text-balance">
          Nos ajudem a cuidar dela?
        </h2>

        <div className="flex items-center gap-3 mt-10">
          <i className="block w-8 h-[6px] bg-[var(--terracota)]" />
          <i className="block w-8 h-[6px] bg-[var(--amarelo)]" />
          <i className="block w-8 h-[6px] bg-[var(--oliva)]" />
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 t-rotulo">
          <Image
            src="/marca/paaps.png"
            alt="PAAPS Brasil"
            width={160}
            height={46}
            className="w-[110px] md:w-[140px] h-auto"
          />
          <span>
            <b className="txt-suave">Acesse:</b> www.paaps.com.br
          </span>
          <span>
            <b className="txt-suave">Acompanhe:</b> @paaps.brasil
          </span>
          <span>
            <b className="txt-suave">LinkedIn:</b> PAAPS Brasil
          </span>
          <span>
            <b className="txt-suave">E-mail:</b> relacionamento@paaps.com.br
          </span>
        </div>
      </div>
    </div>
  );
}
