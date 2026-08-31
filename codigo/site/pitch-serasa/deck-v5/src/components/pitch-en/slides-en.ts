import { SectionAgoraEn } from "@/components/pitch-en/section-agora";
import { SectionAnexoEn } from "@/components/pitch-en/section-anexo";
import { SectionCapaEn } from "@/components/pitch-en/section-capa";
import { SectionCapaCelinaEn } from "@/components/pitch-en/section-capa-celina";
import { SectionDiggingEn } from "@/components/pitch-en/section-digging";
import { SectionEquipeEn } from "@/components/pitch-en/section-equipe";
import { SectionFechoEn } from "@/components/pitch-en/section-fecho";
import { SectionMercadoEn } from "@/components/pitch-en/section-mercado";
import { SectionMetricasEn } from "@/components/pitch-en/section-metricas";
import { SectionModeloEn } from "@/components/pitch-en/section-modelo";
import { SectionOportunidadeEn } from "@/components/pitch-en/section-oportunidade";
import { SectionProblemaEn } from "@/components/pitch-en/section-problema";
import { SectionProjecoesEn } from "@/components/pitch-en/section-projecoes";
import { SectionRoadmapEn } from "@/components/pitch-en/section-roadmap";
import { SectionProdutoEn } from "@/components/pitch-en/section-produto";
import { SectionSolucaoEn } from "@/components/pitch-en/section-solucao";
import { SectionTecnologiaEn } from "@/components/pitch-en/section-tecnologia";
import { SectionTracaoEn } from "@/components/pitch-en/section-tracao";
import { SectionValidacaoEn } from "@/components/pitch-en/section-validacao";

/* Espelho de components/pitch/slides.ts, mesma ordem, versao traduzida. */
export const slidesEn = [
  { nome: "Cover", Componente: SectionCapaCelinaEn },
  { nome: "Title page", Componente: SectionCapaEn },
  { nome: "Problem", Componente: SectionProblemaEn },
  { nome: "Why now", Componente: SectionAgoraEn },
  { nome: "Solution", Componente: SectionSolucaoEn },
  { nome: "Product", Componente: SectionProdutoEn },
  { nome: "Market validation", Componente: SectionValidacaoEn },
  { nome: "Where we've been", Componente: SectionTracaoEn },
  { nome: "Who runs it", Componente: SectionDiggingEn },
  { nome: "Business model", Componente: SectionModeloEn },
  { nome: "Market", Componente: SectionMercadoEn },
  { nome: "Projections", Componente: SectionProjecoesEn },
  { nome: "Projected metrics", Componente: SectionMetricasEn },
  { nome: "Roadmap", Componente: SectionRoadmapEn },
  { nome: "Technology", Componente: SectionTecnologiaEn },
  { nome: "The opportunity", Componente: SectionOportunidadeEn },
  { nome: "Team", Componente: SectionEquipeEn },
  { nome: "Closing", Componente: SectionFechoEn },
  { nome: "Appendix", Componente: SectionAnexoEn },
];
