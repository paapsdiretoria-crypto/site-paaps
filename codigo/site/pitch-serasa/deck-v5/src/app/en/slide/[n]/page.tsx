import { slidesEn } from "@/components/pitch-en/slides-en";
import { notFound } from "next/navigation";

/* Espelho de app/slide/[n]/page.tsx, versao em ingles. Um slide sozinho, em
   tela cheia, para conferir slide a slide e fotografar na hora do PDF. */
export function generateStaticParams() {
  return slidesEn.map((_, i) => ({ n: String(i + 1) }));
}

export default function SlideUnicoEn({ params }: { params: { n: string } }) {
  const i = Number(params.n) - 1;
  const slide = slidesEn[i];
  if (!slide) notFound();

  const { Componente } = slide;
  return <Componente />;
}
