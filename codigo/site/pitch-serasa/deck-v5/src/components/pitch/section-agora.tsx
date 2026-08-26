import { Slide } from "./ui";

export function SectionAgora() {
  return (
    <Slide
      rotulo="Por que agora"
      foto="/fotos/03-agora.jpg"
      veu="veu-suave"
      posicao="center 16%"
      fonte="Ministério da Previdência Social · Lei 8.213/1991, art. 60 · Ministério da Saúde 2025."
    >
      {/* Na altura da lampada do corredor, acima dos dois profissionais. */}
      <p className="absolute left-4 right-4 md:left-[8%] md:right-[8%] top-[9%] md:top-[10%] z-20 text-center font-mono uppercase font-bold text-[clamp(1.35rem,3.3vw,3.3rem)] leading-[1.08] text-[var(--bege)]">
        Cuidamos de <span className="txt-amarelo">Funcionários Públicos</span>{" "}
        para Transformar o <u>Cuidado</u> no Brasil.
      </p>

      {/* Uma coluna so, a esquerda: a foto respira do lado direito, onde
          estao os dois profissionais. */}
      <div className="mt-28 md:mt-36 max-w-[30ch]">
        <span className="font-mono font-bold block whitespace-nowrap text-[clamp(2rem,4.2vw,4.6rem)]">
          ~0,5 mi
        </span>
        <p className="t-corpo mt-2 text-balance">
          afastamentos por transtorno mental em 2025. Recorde da década.
        </p>
      </div>

      <div className="mt-6 max-w-[30ch]">
        <span className="font-mono font-bold block whitespace-nowrap text-[clamp(2rem,4.2vw,4.6rem)]">
          ~R$ 3,5 bi
        </span>
        <p className="t-corpo mt-2 text-balance">
          Custo por ano com afastamentos (INSS).
        </p>
      </div>

      <p className="t-corpo txt-suave mt-6 max-w-[54ch]">
        Agravado por subnotificação e ausência de dados.
      </p>

      {/* O fecho do slide: maior que a nota acima, para fechar com peso. */}
      <p className="t-afirma font-bold mt-6 max-w-[30ch] text-balance">
        O futuro já chegou.
      </p>
    </Slide>
  );
}
