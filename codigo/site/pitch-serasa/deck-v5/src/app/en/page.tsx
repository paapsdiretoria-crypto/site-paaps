"use client";

import { PitchCarusel } from "@/components/pitch/pitch-carousel";
import { slidesEn } from "@/components/pitch-en/slides-en";

export default function PitchEn() {
  return <PitchCarusel slides={slidesEn} />;
}
