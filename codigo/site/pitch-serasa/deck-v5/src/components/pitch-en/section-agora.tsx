import { Slide } from "../pitch/ui";

export function SectionAgoraEn() {
  return (
    <Slide
      rotulo="Why now"
      foto="/fotos/03-agora.jpg"
      veu="veu-suave"
      posicao="center 16%"
      fonte="Ministry of Social Security · Law 8.213/1991, art. 60 · Ministry of Health, 2025."
    >
      <p className="absolute left-4 right-4 md:left-[8%] md:right-[8%] top-[9%] md:top-[10%] z-20 text-center font-mono uppercase font-bold text-[clamp(1.2rem,3vw,3rem)] leading-[1.08] text-[var(--bege)]">
        We Care for <span className="txt-amarelo">Public Servants</span> to
        Transform <u>Care</u> in Brazil.
      </p>

      <div className="mt-28 md:mt-36 max-w-[30ch]">
        <span className="font-mono font-bold block whitespace-nowrap text-[clamp(2rem,4.2vw,4.6rem)]">
          ~0.5 mi
        </span>
        <p className="t-corpo mt-2 text-balance">
          medical leaves for mental disorders in 2025. A decade record.
        </p>
      </div>

      <div className="mt-6 max-w-[30ch]">
        <span className="font-mono font-bold block whitespace-nowrap text-[clamp(2rem,4.2vw,4.6rem)]">
          ~R$ 3.5 bn
        </span>
        <p className="t-corpo mt-2 text-balance">
          Yearly cost of medical leaves (INSS).
        </p>
      </div>

      <p className="t-corpo txt-suave mt-6 max-w-[54ch]">
        Worsened by underreporting and a lack of data.
      </p>

      <p className="t-afirma font-bold mt-6 max-w-[30ch] text-balance">
        The future has already arrived.
      </p>
    </Slide>
  );
}
