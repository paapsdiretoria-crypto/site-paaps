import Image from "next/image";
import { Slide } from "./ui";

/* A serie historica: 12 barras, uma por mes. Sao proporcoes de desenho, nao
   dado de cliente: o mockup nao imprime numero nenhum. Valores copiados do
   deck antigo. */
const rodas = [88, 91, 84, 94, 87, 90, 85, 93, 89, 92, 86, 96];

const alertas = [
  { nome: "Faltas e afastamentos", largura: "72%" },
  { nome: "Presenteísmo", largura: "58%" },
  { nome: "Solidão no trabalho", largura: "81%" },
];

const satisfacao = [
  { nome: "NPS da Rede de Saúde", largura: "76%" },
  { nome: "NPS da Rede de Assistência", largura: "68%" },
];

export function SectionTecnologia() {
  return (
    <Slide
      rotulo="Tecnologia"
      foto="/fotos/13-tecnologia.jpg"
      veu="veu-denso"
      posicao="center 42%"
      fonte="O afastamento só vira registro do INSS a partir do 16º dia, Lei 8.213/1991, art. 60 · A literatura acadêmica registra a pesquisa nessa população como escassa · O tratamento de informações e dados se adequa à LGPD e às diretrizes éticas e de boas práticas do CFP."
    >
      <p className="produto">
        <span className="produto__app">app</span>
        <span className="produto__nome">Ponto de Apoio do Servidor</span>
      </p>

      <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] gap-8 md:gap-14 items-center mt-6">
        <div>
          {/* O zero e a legenda dele formam um bloco so: soltos, o numero
              ficava boiando longe do que ele conta. */}
          <div className="flex items-baseline gap-5">
            <span className="font-mono t-num font-bold leading-none">0</span>
            <p className="t-corpo txt-suave max-w-[24ch]">
              estatísticas nacionais sobre o adoecimento do servidor municipal.
            </p>
          </div>

          <h2 className="t-afirma font-bold mt-10 max-w-[24ch] text-balance">
            A PAAPS vai estar dentro da rede todo mês, e cada Roda vira
            registro.
          </h2>
        </div>

        {/* O mockup do app, trazido do deck antigo sem redesenho. */}
        <div className="tec__app">
          <div className="fone" aria-hidden="true">
            <div className="fone__tela">
              <div className="fone__topo">
                <span className="fone__rede">Rede municipal</span>
                <span className="fone__periodo">12 meses</span>
              </div>

              <div className="fone__abas">
                <span className="fone__aba fone__aba--ativa">
                  <i className="fone__cadeado">🔒</i>Área do gestor
                </span>
                <span className="fone__aba">
                  <i className="fone__cadeado">🔒</i>Área do servidor
                </span>
              </div>

              <p className="fone__rot">Rodas registradas por mês</p>
              <div className="fone__serie">
                {rodas.map((altura, i) => (
                  <i
                    key={i}
                    className={i === rodas.length - 1 ? "fone__hoje" : undefined}
                    style={{ height: `${altura}%` }}
                  />
                ))}
              </div>

              <div className="fone__mini">
                <div className="fone__mini__i">
                  <span className="fone__mini__n">8</span>
                  <span className="fone__mini__l">casos intersetoriais/mês</span>
                </div>
                <div className="fone__mini__i">
                  <span className="fone__mini__n">100%</span>
                  <span className="fone__mini__l">
                    acesso aos dados do encaminhamento
                  </span>
                </div>
              </div>

              <ul className="fone__ind fone__ind--alerta">
                <li className="fone__ind__rot">Alertas da rede</li>
                {alertas.map((a) => (
                  <li key={a.nome}>
                    <span>{a.nome}</span>
                    <b style={{ width: a.largura }} />
                  </li>
                ))}
              </ul>

              <ul className="fone__ind fone__ind--nps">
                <li className="fone__ind__rot">Satisfação</li>
                {satisfacao.map((a) => (
                  <li key={a.nome}>
                    <span>{a.nome}</span>
                    <b style={{ width: a.largura }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="app__cab">
            <span className="app__icone">
              <Image
                src="/marca/icone-app.png"
                alt="PAAPS"
                width={90}
                height={90}
              />
            </span>
            <span className="app__nome">
              Ponto de Apoio<i>do Servidor</i>
            </span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
