import Image from "next/image";
import { Fundo } from "../pitch/ui";

/* Versao geral (fora do Impulsiona/Serasa), para outras fontes de
   investidores. Diferenca do original em components/pitch/section-capa-celina.tsx:
   sem os selos de parceiro (Serasa Experian, ACE Cortex) e sem o endereçamento
   direto a eles na saudação, ja que este deck circula fora dessa inscrição. */
export function SectionCapaCelinaGeral() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/16-fecho.jpg"
        veu="veu-base"
        posicao="center 34%"
        prioridade
        alt="Agente Comunitária de Saúde em visita domiciliar"
      />

      <div className="container min-h-screen relative z-10 flex flex-col justify-end items-center text-center pb-24 md:pb-28 max-w-[min(92%,1500px)]">
        <Image
          className="fecho__marca"
          src="/marca/paaps.png"
          alt="PAAPS Brasil"
          width={200}
          height={57}
        />

        <p className="capa0__corpo">
          Essa é Celina. Ela é Agente Comunitária de Saúde, e caminha às mais
          remotas casas do Brasil todos os dias, a 2 salários mínimos.
        </p>

        <h2 className="capa0__pedido font-bold">Nos ajudem a cuidar dela?</h2>
      </div>
    </div>
  );
}
