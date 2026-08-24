import { Dado, Slide } from "./ui";

export function SectionProblema() {
  return (
    <Slide
      rotulo="Problema"
      foto="/fotos/02-problema.jpg"
      veu="veu-denso"
      posicao="center 40%"
      fonte="Ministério da Saúde 2025 · ANS mai/2026 · CNES · Apeoesp, São Paulo, 2026."
    >
      <h2 className="t-afirma font-bold max-w-[22ch] text-balance">
        O maior sistema público de saúde do mundo não mede a saúde de quem o
        sustenta.
      </h2>
      <p className="t-corpo txt-suave mt-5 max-w-[46ch]">
        Três em cada quatro pessoas que fazem o SUS são mulheres.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Dependência" numero="76%">
          dos brasileiros dependem do SUS. São 162 milhões de pessoas sem plano
          privado.
        </Dado>
        <Dado titulo="Adoecimento" numero="97,6%">
          dos profissionais da educação ligam o próprio adoecimento ao trabalho.
        </Dado>
        <Dado titulo="Afastamento" numero="60,3%">
          dos profissionais da educação já se afastaram por problemas de saúde.
        </Dado>
      </div>
    </Slide>
  );
}
