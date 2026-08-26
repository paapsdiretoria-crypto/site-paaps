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
      <p className="absolute left-4 right-4 md:left-[8%] md:right-[8%] top-[15%] md:top-[16%] z-20 text-center font-mono uppercase font-bold text-[clamp(1.35rem,3.3vw,3.3rem)] leading-[1.08] text-[var(--bege)]">
        Cuidamos de <span className="txt-amarelo">Funcionários Públicos</span>{" "}
        para Transformar o <u>Cuidado</u> no Brasil.
      </p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 md:max-w-[84%]">
        <div>
          <span className="font-mono t-num font-bold block">~0,5 mi</span>
          <p className="t-afirma mt-4 max-w-[22ch] text-balance">
            afastamentos por transtorno mental em 2025. Recorde da década.
          </p>
        </div>
        <div>
          <span className="font-mono t-num font-bold block">~R$ 3,5 bi</span>
          <p className="t-afirma mt-4 max-w-[26ch] text-balance">
            Custo por ano com afastamentos (INSS).
          </p>
        </div>
      </div>

      <p className="t-corpo txt-suave mt-8 max-w-[54ch]">
        O futuro já chegou: agravado por subnotificação e ausência de dados.
      </p>
    </Slide>
  );
}
