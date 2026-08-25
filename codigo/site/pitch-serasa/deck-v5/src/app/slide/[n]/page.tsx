import { slides } from "@/components/pitch/slides";
import { notFound } from "next/navigation";

/* Um slide sozinho, em tela cheia. E o mesmo recurso do `?solo=N` do deck
   antigo: serve para conferir um slide de cada vez e para fotografar slide a
   slide na hora de montar o PDF. */
export function generateStaticParams() {
  return slides.map((_, i) => ({ n: String(i + 1) }));
}

export default function SlideUnico({ params }: { params: { n: string } }) {
  const i = Number(params.n) - 1;
  const slide = slides[i];
  if (!slide) notFound();

  const { Componente } = slide;
  return <Componente />;
}
