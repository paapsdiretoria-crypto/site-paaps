import { SectionAgora } from "@/components/pitch/section-agora";
import { SectionCapa } from "@/components/pitch/section-capa";
import { SectionConcorrencia } from "@/components/pitch/section-concorrencia";
import { SectionDigging } from "@/components/pitch/section-digging";
import { SectionEquipe } from "@/components/pitch/section-equipe";
import { SectionFecho } from "@/components/pitch/section-fecho";
import { SectionMercado } from "@/components/pitch/section-mercado";
import { SectionModelo } from "@/components/pitch/section-modelo";
import { SectionOportunidade } from "@/components/pitch/section-oportunidade";
import { SectionPedido } from "@/components/pitch/section-pedido";
import { SectionProblema } from "@/components/pitch/section-problema";
import { SectionProjecoes } from "@/components/pitch/section-projecoes";
import { SectionProduto } from "@/components/pitch/section-produto";
import { SectionSolucao } from "@/components/pitch/section-solucao";
import { SectionTecnologia } from "@/components/pitch/section-tecnologia";
import { SectionTracao } from "@/components/pitch/section-tracao";
import { SectionValidacao } from "@/components/pitch/section-validacao";

/* A ordem do deck. Uma lista so, lida pelo carrossel e pela rota /slide/[n],
   para que as duas nunca saiam de sincronia. */
export const slides = [
  { nome: "Capa", Componente: SectionCapa },
  { nome: "Problema", Componente: SectionProblema },
  { nome: "Por que agora", Componente: SectionAgora },
  { nome: "Solucao", Componente: SectionSolucao },
  { nome: "Produto", Componente: SectionProduto },
  { nome: "Validacao de mercado", Componente: SectionValidacao },
  { nome: "Onde ja estivemos", Componente: SectionTracao },
  { nome: "Quem opera", Componente: SectionDigging },
  { nome: "Modelo de negocio", Componente: SectionModelo },
  { nome: "Mercado", Componente: SectionMercado },
  { nome: "Projecoes", Componente: SectionProjecoes },
  { nome: "Concorrencia", Componente: SectionConcorrencia },
  { nome: "Tecnologia", Componente: SectionTecnologia },
  { nome: "A oportunidade", Componente: SectionOportunidade },
  { nome: "Equipe", Componente: SectionEquipe },
  { nome: "O pedido", Componente: SectionPedido },
  { nome: "Fecho", Componente: SectionFecho },
];
