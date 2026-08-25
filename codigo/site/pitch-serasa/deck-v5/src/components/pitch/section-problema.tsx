import { Dado, Slide } from "./ui";

export function SectionProblema() {
  return (
    <Slide
      rotulo="Problema"
      foto="/fotos/02-problema.jpg"
      veu="veu-denso"
      posicao="center 40%"
      fonte="ANS mai/2026 · CNES · Apeoesp, São Paulo, 2026."
    >
      <h2 className="t-afirma font-bold max-w-[24ch] text-balance">
        O maior sistema de saúde público do mundo sequer mede, quem dirá
        cuida, da saúde mental de quem o sustenta.
      </h2>
      <p className="t-corpo txt-suave mt-5 max-w-[46ch] font-bold">
        Três em cada quatro pessoas que fazem o SUS são mulheres.
      </p>
      <p className="t-corpo txt-suave mt-2 max-w-[46ch]">Cuidar é adoecer?</p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        <Dado titulo="Sem plano B" numero="76%">
          dos brasileiros dependem do SUS. São 162 milhões de pessoas sem plano
          privado.
        </Dado>
        <Dado titulo="Adoecimento" numero="81,1%">
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
