import Image from "next/image";
import { Fundo } from "../pitch/ui";

const ods = [3, 4, 5, 8, 10, 11, 16, 17];

export function SectionFechoEn() {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <Fundo
        src="/fotos/agente-rio-barco.jpg"
        veu="veu-base"
        posicao="72% 42%"
        alt="Health worker rows a canoe carrying a mother and four children down the river"
      />

      <div className="ods-lado">
        {ods.map((n) => (
          <span key={n}>
            <Image src={`/ods/SDG-${n}.svg`} alt={`SDG ${n}`} fill sizes="86px" />
          </span>
        ))}
      </div>

      <div className="container min-h-screen relative z-10 flex flex-col justify-end items-center text-center pb-24 md:pb-28 max-w-[min(92%,1500px)]">
        <p className="fecho__frase2">
          This is how future-proof Public Policy is born.
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
          Caring for the people who care for Brazil, <u>today</u>.
        </h2>
      </div>

      <div className="fecho__contato">
        <span>
          <b>Visit:</b> www.paaps.com.br
        </span>
        <span>
          <b>Follow:</b> @paaps.brasil
        </span>
        <span>
          <b>LinkedIn:</b> PAAPS Brasil
        </span>
        <span>
          <b>Email:</b> relacionamento@paaps.com.br
        </span>
      </div>
    </div>
  );
}
