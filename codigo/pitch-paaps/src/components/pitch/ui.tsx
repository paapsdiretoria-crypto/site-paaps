import { cn } from "@/lib/utils";
import Image from "next/image";

/* =========================================================================
   Card
   Mesma geometria da Midday: flex coluna, centrado, px-6 pt-8 pb-6,
   space-y-4, canto vivo. O que muda e a superficie. La o card e #121212
   sobre #0C0C0C, 2,4% de diferenca, e quem desenha a caixa e a borda de
   1px. Aqui vale a mesma regra sobre a foto: preenchimento de 4% e uma
   borda fina. Quem legibiliza e o veu marrom, nao o painel.
   ========================================================================= */
export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 pt-8 pb-6 space-y-4",
        "border border-[rgba(245,241,225,.20)] bg-[rgba(245,241,225,.04)]",
        // h-full mantem a altura igual entre os cards da mesma linha, que e o
        // que da o ar de sistema. A Midday resolve isso com min-h fixo.
        "backdrop-blur-[6px] h-full",
        className
      )}
    >
      {children}
    </div>
  );
}

/* Card de dado: titulo em Helvetica, corpo em Helvetica, numero em League
   Spartan colado no pe da caixa. E a forma do slide de tracao da Midday. */
export function Dado({
  titulo,
  numero,
  children,
  className,
}: {
  titulo: string;
  numero?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={className}>
      <h2 className="t-cardtit font-bold">{titulo}</h2>
      {children ? (
        <p className="t-corpo text-center txt-suave">{children}</p>
      ) : null}
      {numero ? (
        <span className="mt-auto font-mono t-cardnum font-bold">{numero}</span>
      ) : null}
    </Card>
  );
}

/* =========================================================================
   Fundo
   A foto ocupa o slide inteiro e o veu marrom da casa entra por cima.
   ========================================================================= */
export function Fundo({
  src,
  veu = "veu-denso",
  posicao,
  alt = "",
  prioridade = false,
  quente = false,
}: {
  src: string;
  veu?: "veu-denso" | "veu-base" | "veu-capa" | "veu-forte" | "veu-suave";
  posicao?: string;
  alt?: string;
  prioridade?: boolean;
  /* Viragem quente: leva a foto fria para o mesmo marrom da foto do slide
     "Onde ja estivemos", que e quente por natureza. */
  quente?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden veu",
        veu,
        quente && "foto-quente"
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={prioridade}
        sizes="100vw"
        quality={90}
        className="object-cover"
        style={posicao ? { objectPosition: posicao } : undefined}
      />
    </div>
  );
}

/* Tela dividida entre duas fotos, com o fio de 2px em bege no meio. E o
   `.slide__foto--dupla` do deck antigo, mesma medida e mesma cor de fio.
   Em tela estreita as duas empilham, como la. */
export function FundoDuplo({
  esquerda,
  direita,
  veu = "veu-denso",
  posicaoEsquerda,
  posicaoDireita,
  alt = ["", ""],
  prioridade = false,
}: {
  esquerda: string;
  direita: string;
  veu?: "veu-denso" | "veu-base" | "veu-capa" | "veu-forte" | "veu-suave";
  posicaoEsquerda?: string;
  posicaoDireita?: string;
  alt?: [string, string];
  prioridade?: boolean;
}) {
  const metades: [string, string | undefined, string][] = [
    [esquerda, posicaoEsquerda, alt[0]],
    [direita, posicaoDireita, alt[1]],
  ];

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden veu", veu)}>
      <div className="absolute inset-0 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-[2px] bg-[rgba(245,241,225,.22)]">
        {metades.map(([foto, posicao, textoAlt], i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={foto}
              alt={textoAlt}
              fill
              priority={prioridade}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover"
              style={posicao ? { objectPosition: posicao } : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   Slide
   O chrome da Midday, medida por medida: rotulo no canto superior esquerdo,
   endereco no direito, conteudo centrado na vertical dentro do container.
   ========================================================================= */
export function Slide({
  rotulo,
  foto,
  fundo,
  quente,
  veu,
  posicao,
  prioridade,
  children,
  fonte,
}: {
  rotulo: string;
  foto?: string;
  fundo?: React.ReactNode;
  quente?: boolean;
  veu?: "veu-denso" | "veu-base" | "veu-capa" | "veu-forte" | "veu-suave";
  posicao?: string;
  prioridade?: boolean;
  children: React.ReactNode;
  fonte?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      {/* Slide sem foto definida fica no marrom do veu, liso. */}
      {fundo ??
        (foto ? (
          <Fundo
            src={foto}
            veu={veu}
            posicao={posicao}
            prioridade={prioridade}
            quente={quente}
          />
        ) : null)}

      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between t-rotulo z-20 font-mono uppercase tracking-wide">
        <span>{rotulo}</span>
        <span className="txt-suave normal-case tracking-normal">
          paaps.com.br
        </span>
      </div>

      <div className="flex flex-col min-h-screen justify-center container relative z-10 py-24">
        {children}
      </div>

      {fonte ? (
        <p className="absolute left-4 right-4 md:left-8 md:right-8 bottom-16 md:bottom-6 t-fonte txt-suave z-20 max-w-[78ch]">
          {fonte}
        </p>
      ) : null}
    </div>
  );
}

/* Grade estrutural da Midday: seis colunas e cinco reguas que a pessoa quase
   nao ve. Sobre foto ela entra ainda mais fraca do que sobre o preto. */
export function Grid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] flex justify-center">
      <div className="h-full w-full grid-cols-6 gap-3.5 px-4 grid">
        <div className="border-r-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-r-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-r-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-r-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-r-[1px] border-[rgba(245,241,225,.06)]" />
      </div>
      <div className="h-full w-full absolute flex justify-between flex-col">
        <div className="border-t-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-t-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-t-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-t-[1px] border-[rgba(245,241,225,.06)]" />
        <div className="border-t-[1px] border-[rgba(245,241,225,.06)]" />
      </div>
    </div>
  );
}
