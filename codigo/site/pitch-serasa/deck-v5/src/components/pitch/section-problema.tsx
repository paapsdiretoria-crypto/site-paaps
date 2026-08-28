import { Dado, Slide } from "./ui";

export function SectionProblema() {
  return (
    <Slide
      rotulo="Problema"
      foto="/fotos/02-problema.jpg"
      veu="veu-denso"
      posicao="center 40%"
      fonte="ANS mai/2026 · CNES/Ministério da Saúde, 2025 · Apeoesp (SP), 2026."
    >
      <h2 className="t-afirma font-bold max-w-[26ch] text-balance">
        O maior sistema de saúde público do mundo{" "}
        <span className="txt-amarelo">sequer mede, quem dirá cuida</span>, da
        saúde mental de quem <u>o sustenta</u>.
      </h2>
      <p className="t-corpo txt-suave mt-5 max-w-[60ch] text-[clamp(1.1rem,1.9vw,2rem)] leading-snug">
        <span className="txt-amarelo font-bold">Três em cada quatro</span>{" "}
        pessoas que fazem o SUS são mulheres.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Sem plano B" numero="76%">
          dos brasileiros dependem do SUS. São 162 milhões de pessoas sem plano
          privado.
        </Dado>
        <Dado titulo="Cuidar é adoecer?" numero="81,1%">
          dos profissionais da saúde ligam o próprio adoecimento ao trabalho.
        </Dado>
        <Dado titulo="Quase 10 em cada 10" numero="97,6%">
          dos profissionais da educação ligam o próprio adoecimento ao
          trabalho.
        </Dado>
      </div>
    </Slide>
  );
}
