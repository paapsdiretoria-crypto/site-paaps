import Image from "next/image";
import { Fundo } from "./ui";

/* Slide 0, a capa de verdade. Ate a rescrita de 25/08/2026 esse texto e essa
   foto viviam no Fecho; a Mallu pediu para abrir o deck com a Celina em vez
   de fechar com ela, e o Fecho passou a usar a foto do Hero do site. */
export function SectionCapaCelina() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/16-fecho.jpg"
        veu="veu-base"
        posicao="center 34%"
        prioridade
        alt="Agente Comunitária de Saúde em visita domiciliar"
      />

      {/* Os dois selos de parceiro: aqui e onde o texto ja endereca os dois. */}
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

        <p className="capa0__saud">Serasa Experian e ACE Cortex,</p>
        <p className="capa0__corpo">
          Essa é Celina. Ela é Agente Comunitária de Saúde, e caminha às mais
          remotas casas do Brasil todos os dias, a 2 salários mínimos.
        </p>

        <h2 className="capa0__pedido font-bold">Nos ajudem a cuidar dela?</h2>
      </div>
    </div>
  );
}
