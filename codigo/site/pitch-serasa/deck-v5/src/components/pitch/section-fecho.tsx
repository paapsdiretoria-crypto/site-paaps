import Image from "next/image";
import { Fundo } from "./ui";

const ods = [3, 4, 5, 8, 10, 11, 16, 17];

export function SectionFecho() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/agente-rio-barco.jpg"
        veu="veu-base"
        posicao="72% 42%"
        alt="Agente de saúde rema uma canoa levando uma mãe e quatro crianças pelo rio"
      />

      {/* A fileira de ODS emoldura o slide de cima a baixo. */}
      <div className="ods-lado">
        {ods.map((n) => (
          <span key={n}>
            <Image src={`/ods/SDG-${n}.svg`} alt={`ODS ${n}`} fill sizes="86px" />
          </span>
        ))}
      </div>

      <div className="container min-h-screen relative z-10 flex flex-col justify-end items-center text-center pb-24 md:pb-28 max-w-[min(92%,1500px)]">
        <p className="fecho__frase2">
          Assim nascem as Políticas Públicas à prova de futuro.
        </p>

        <div className="tricolor">
          <i />
          <i />
          <i />
        </div>

        <h2 className="fecho__cta font-bold mt-6">
          <Image
            className="fecho__marca inline-block align-middle mr-3"
            src="/marca/paaps.png"
            alt="PAAPS"
            width={130}
            height={37}
          />
          Cuidar de quem cuida do Brasil <u>hoje</u>.
        </h2>
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
