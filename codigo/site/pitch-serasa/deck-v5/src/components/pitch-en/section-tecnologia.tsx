import Image from "next/image";
import { Slide } from "../pitch/ui";

function FundoDividido() {
  return (
    <div className="absolute inset-0 z-0 grid grid-cols-3">
      <div className="col-span-2 relative overflow-hidden veu veu-denso">
        <Image
          src="/fotos/13-tecnologia.jpg"
          alt="Healthcare professional seen from behind, in a hospital pharmacy corridor"
          fill
          priority
          sizes="66vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: "45% 28%" }}
        />
      </div>
      <div className="relative bg-[var(--bege)]">
        <div className="slide-claro__textura" />
      </div>
    </div>
  );
}

const rodas = [88, 91, 84, 94, 87, 90, 85, 93, 89, 92, 86, 96];

const alertas = [
  { nome: "Absences and leaves", largura: "72%" },
  { nome: "Presenteeism", largura: "58%" },
  { nome: "Loneliness at work", largura: "81%" },
];

const satisfacao = [
  { nome: "Health Network NPS", largura: "76%" },
  { nome: "Social Assistance Network NPS", largura: "68%" },
];

export function SectionTecnologiaEn() {
  return (
    <Slide
      rotulo="Technology"
      fundo={<FundoDividido />}
      fonte={
        <span className="whitespace-nowrap">
          Data handling complies with LGPD and the CFP&apos;s ethical and
          best-practice guidelines.
        </span>
      }
    >
      {/* O "PONTO DE APOIO DO SERVIDOR" em portugues cabe numa linha so dentro
          da coluna escura da foto (2/3 do slide). Em ingles a frase e mais
          longa: sem quebrar E sem limitar a largura, ela avanca para dentro
          da faixa bege do fundo, onde o texto creme fica invisivel sobre
          fundo da mesma cor. Aqui a gente libera a quebra de linha e trava a
          largura na coluna escura, so nesta versao, sem mexer no CSS que a
          peca em portugues usa. */}
      <p
        className="produto"
        style={{ whiteSpace: "normal", flexWrap: "wrap", maxWidth: "62%" }}
      >
        <span className="produto__app">app</span>
        <span className="produto__nome" style={{ whiteSpace: "normal" }}>
          Support Point for Public Servants
        </span>
      </p>

      <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] gap-8 md:gap-14 items-center mt-6">
        <div>
          <div className="flex items-baseline gap-5">
            <span className="font-mono t-num font-bold leading-none">0</span>
            <p className="t-corpo txt-suave max-w-[30ch]">
              national statistics on municipal public servants&apos; illness.
            </p>
          </div>

          <h2 className="t-afirma font-bold mt-10 max-w-[26ch] text-balance">
            PAAPS will be inside the network every month, and every Circle
            becomes a record.
          </h2>
          <p className="t-corpo txt-suave mt-4 max-w-[36ch]">
            Data collected by PAAPS Psychologists, updated monthly, with no
            individual sensitive data.
          </p>
        </div>

        <div className="tec__app">
          <div className="fone" aria-hidden="true">
            <div className="fone__tela">
              <div className="fone__topo">
                <span className="fone__rede">Municipal network</span>
                <span className="fone__periodo">12 months</span>
              </div>

              <div className="fone__abas">
                <span className="fone__aba fone__aba--ativa">
                  <i className="fone__cadeado">🔒</i>Manager area
                </span>
                <span className="fone__aba">
                  <i className="fone__cadeado">🔒</i>Public Servant area
                </span>
              </div>

              <p className="fone__rot">Circles logged per month</p>
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
                  <span className="fone__mini__l">cross-sector cases/month</span>
                </div>
                <div className="fone__mini__i">
                  <span className="fone__mini__n">100%</span>
                  <span className="fone__mini__l">access to referral data</span>
                </div>
              </div>

              <ul className="fone__ind fone__ind--alerta">
                <li className="fone__ind__rot">Network alerts</li>
                {alertas.map((a) => (
                  <li key={a.nome}>
                    <span>{a.nome}</span>
                    <b style={{ width: a.largura }} />
                  </li>
                ))}
              </ul>

              <ul className="fone__ind fone__ind--nps">
                <li className="fone__ind__rot">Satisfaction</li>
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
              Support Point<i>for Public Servants</i>
            </span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
