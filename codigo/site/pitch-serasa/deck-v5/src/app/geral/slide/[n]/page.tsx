import { slidesGeral } from "@/components/pitch-geral/slides-geral";
import { notFound } from "next/navigation";

/* Espelho de app/slide/[n]/page.tsx, versao geral (fora do Impulsiona
   Startups/Serasa). Um slide sozinho, em tela cheia, para conferir slide a
   slide e fotografar na hora do PDF. */
export function generateStaticParams() {
  return slidesGeral.map((_, i) => ({ n: String(i + 1) }));
}

export default function SlideUnicoGeral({ params }: { params: { n: string } }) {
  const i = Number(params.n) - 1;
  const slide = slidesGeral[i];
  if (!slide) notFound();

  const { Componente } = slide;
  return <Componente />;
}
