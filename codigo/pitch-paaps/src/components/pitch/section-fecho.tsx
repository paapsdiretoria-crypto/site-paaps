import Image from "next/image";
import { Fundo } from "./ui";

const ods = [3, 4, 5, 8, 10, 11, 16, 17];

export function SectionFecho() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/16-fecho.jpg"
        veu="veu-base"
        posicao="center 34%"
        alt="Agente Comunitária de Saúde em visita domiciliar"
      />

      {/* Os dois selos de parceiro, empilhados, na mesma faixa do primeiro ODS. */}
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

      {/* A fileira de ODS emoldura o slide de cima a baixo. */}
      <div className="ods-lado">
        {ods.map((n) => (
          <span key={n}>
            <Image src={`/ods/SDG-${n}.svg`} alt={`ODS ${n}`} fill sizes="86px" />
          </span>
        ))}
      </div>

      <div className="container min-h-screen relative z-10 flex flex-col justify-end items-center text-center pb-24 md:pb-28 max-w-[min(92%,1500px)]">
        <Image
          className="fecho__marca"
          src="/marca/paaps.png"
          alt="PAAPS Brasil"
          width={200}
          height={57}
        />

        <p className="fecho__frase t-corpo txt-suave">
          Serasa Experian e ACE Cortex,
        </p>
        <p className="fecho__frase2">
          Essa é Celina. Ela é Agente Comunitária de Saúde, e caminha às mais
          remotas casas do Brasil todos os dias, a 2 salários mínimos.
        </p>

        <h2 className="fecho__cta font-bold mt-6">Nos ajudem a cuidar dela?</h2>

        <div className="tricolor">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="fecho__contato">
        <span>
          <b>Acesse:</b> www.paaps.com.br
        </span>
        <span>
          <b>Acompanhe:</b> @paaps.brasil
        </span>
        <span>
          <b>LinkedIn:</b> PAAPS Brasil
        </span>
        <span>
          <b>Mailto:</b> relacionamento@paaps.com.br
        </span>
      </div>
    </div>
  );
}
