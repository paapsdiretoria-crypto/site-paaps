"use client";

import { slides } from "@/components/pitch/slides";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { CarouselToolbar } from "./carousel-toolbar";

// Contador de visualizacoes fixo. Na versao original da Midday esse numero vinha
// de um banco de dados (Redis). Aqui e so um placeholder: manter maior que zero,
// porque e ele que faz a barra de controles aparecer na parte de baixo da tela.
const VIEWS = 18000;

export function PitchCarusel() {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="w-full min-h-full relative" setApi={setApi}>
      <CarouselContent>
        {slides.map(({ nome, Componente }) => (
          <CarouselItem key={nome}>
            <Componente />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselToolbar views={VIEWS} />
    </Carousel>
  );
}
