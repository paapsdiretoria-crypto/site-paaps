import { Dado, Slide } from "./ui";

export function SectionAgora() {
  return (
    <Slide
      rotulo="Por que agora"
      foto="/fotos/03-agora.jpg"
      veu="veu-suave"
      posicao="center 50%"
      fonte="Ministério da Previdência Social · Lei 8.213/1991, art. 60 · Ministério da Saúde 2025 · Organização Mundial da Saúde. Diretrizes da OMS sobre saúde mental no trabalho. Genebra: OMS, 2022."
    >
      <p className="t-corpo txt-suave max-w-[40ch]">
        Cuidamos de Funcionários Públicos para Transformar o{" "}
        <u>Cuidado</u> no Brasil.
      </p>

      {/* O numerão é o slide. Nada compete com ele. */}
      <span className="font-mono t-num font-bold block mt-4">~0,5 mi</span>
      <p className="t-afirma mt-4 max-w-[24ch] text-balance">
        afastamentos por transtorno mental em 2025. Recorde da década.
      </p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14 md:max-w-[62%]">
        <Dado titulo="Custo" numero="~R$ 3,5 bi">
          por ano, por esses afastamentos (INSS).
        </Dado>
        <Dado titulo="Subnotificação">
          Agravado por subnotificação e ausência de dados.
        </Dado>
      </div>

      <p className="t-corpo mt-8 max-w-[60ch]">
        O <u>futuro já chegou. Para a OMS,</u>{" "}
        <b>
          &ldquo;Formar gestores e trabalhar a equipe&rdquo; é a única
          recomendação forte, com evidência de impacto em saúde mental no
          trabalho.
        </b>
      </p>
    </Slide>
  );
}
