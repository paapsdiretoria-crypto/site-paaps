import { Dado, Slide } from "./ui";

export function SectionAgora() {
  return (
    <Slide
      rotulo="Por que agora"
      foto="/fotos/03-agora.jpg"
      veu="veu-suave"
      posicao="center 50%"
      fonte="Ministério da Previdência Social · Lei 8.213/1991, art. 60."
    >
      {/* O numerão é o slide. Nada compete com ele. */}
      <span className="font-mono t-num font-bold block">546 mil</span>
      <p className="t-afirma mt-4 max-w-[24ch] text-balance">
        afastamentos por transtorno mental em 2025. O recorde da década.
      </p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14 md:max-w-[62%]">
        <Dado titulo="Custo" numero="R$ 3,5 bi">
          por ano é o que o INSS paga por esses afastamentos.
        </Dado>
        <Dado titulo="Subnotificação" numero="16º dia">
          é quando o afastamento vira registro do INSS. Os quinze primeiros dias
          ficam com o empregador e não entram na estatística.
        </Dado>
      </div>
    </Slide>
  );
}
