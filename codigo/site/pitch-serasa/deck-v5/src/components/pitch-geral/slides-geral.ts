import { SectionAgora } from "@/components/pitch/section-agora";
import { SectionAnexoGeral } from "@/components/pitch-geral/section-anexo";
import { SectionDiggingGeral } from "@/components/pitch-geral/section-digging";
import { SectionEquipe } from "@/components/pitch/section-equipe";
import { SectionFecho } from "@/components/pitch/section-fecho";
import { SectionMercado } from "@/components/pitch/section-mercado";
import { SectionMetricas } from "@/components/pitch/section-metricas";
import { SectionModelo } from "@/components/pitch/section-modelo";
import { SectionOportunidadeGeral } from "@/components/pitch-geral/section-oportunidade";
import { SectionProblema } from "@/components/pitch/section-problema";
import { SectionProjecoes } from "@/components/pitch/section-projecoes";
import { SectionRoadmap } from "@/components/pitch/section-roadmap";
import { SectionProduto } from "@/components/pitch/section-produto";
import { SectionSolucao } from "@/components/pitch/section-solucao";
import { SectionCapaGeral } from "@/components/pitch-geral/section-capa";
import { SectionCapaCelinaGeral } from "@/components/pitch-geral/section-capa-celina";
import { SectionTecnologia } from "@/components/pitch/section-tecnologia";
import { SectionTracao } from "@/components/pitch/section-tracao";
import { SectionValidacao } from "@/components/pitch/section-validacao";

/* Espelho de components/pitch/slides.ts, versao geral (fora do Impulsiona
   Startups/Serasa), para outras fontes de investimento da PAAPS (ex.:
   SEBRAE). So 4 slides mudam (capa, contra-capa, quem opera, oportunidade);
   os outros 15 sao os mesmos componentes do deck original PT, importados
   direto, sem duplicar. */
export const slidesGeral = [
  { nome: "Capa", Componente: SectionCapaCelinaGeral },
  { nome: "Contra-capa", Componente: SectionCapaGeral },
  { nome: "Problema", Componente: SectionProblema },
  { nome: "Por que agora", Componente: SectionAgora },
  { nome: "Solucao", Componente: SectionSolucao },
  { nome: "Produto", Componente: SectionProduto },
  { nome: "Validacao de mercado", Componente: SectionValidacao },
  { nome: "Onde ja estivemos", Componente: SectionTracao },
  { nome: "Quem opera", Componente: SectionDiggingGeral },
  { nome: "Modelo de negocio", Componente: SectionModelo },
  { nome: "Mercado", Componente: SectionMercado },
  { nome: "Projecoes", Componente: SectionProjecoes },
  { nome: "Metricas projetadas", Componente: SectionMetricas },
  { nome: "Roadmap", Componente: SectionRoadmap },
  { nome: "Tecnologia", Componente: SectionTecnologia },
  { nome: "A oportunidade", Componente: SectionOportunidadeGeral },
  { nome: "Equipe", Componente: SectionEquipe },
  { nome: "Fecho", Componente: SectionFecho },
  { nome: "Anexo", Componente: SectionAnexoGeral },
];
