import Image from "next/image";
import { Fundo } from "../pitch/ui";

/* Traducao literal de components/pitch/section-capa-celina.tsx, mesma
   estrutura e classes CSS. So o texto muda. */
export function SectionCapaCelinaEn() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/16-fecho.jpg"
        veu="veu-base"
        posicao="center 34%"
        prioridade
        alt="Community Health Worker on a home visit"
      />

      <div className="selos-parceiros">
        <span className="selo-serasa">
          <Image
            src="/marca/serasa.webp"
            alt="Serasa Experian"
            width={120}
            height={28}
          />
        </span>
        <span className="selo-cortex">
          <Image
            src="/marca/ace-cortex.svg"
            alt="ACE Cortex"
            width={100}
            height={24}
          />
        </span>
      </div>

      <div className="container min-h-screen relative z-10 flex flex-col justify-end items-center text-center pb-24 md:pb-28 max-w-[min(92%,1500px)]">
        <Image
          className="fecho__marca"
          src="/marca/paaps.png"
          alt="PAAPS Brasil"
          width={200}
          height={57}
        />

        <p className="capa0__saud">Serasa Experian and ACE Cortex,</p>
        <p className="capa0__corpo">
          This is Celina. She&apos;s a Community Health Worker, and she walks
          to Brazil&apos;s most remote homes every day, earning 2 minimum
          wages.
        </p>

        <h2 className="capa0__pedido font-bold">
          Will you help us take care of her?
        </h2>
      </div>
    </div>
  );
}
