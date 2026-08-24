import { Card, Slide } from "./ui";

const rodas = [88, 91, 84, 94, 87, 90, 85, 93, 89, 92, 86, 96];

const alertas = [
  { nome: "Faltas e afastamentos", v: 72 },
  { nome: "Presenteísmo", v: 58 },
  { nome: "Solidão no trabalho", v: 81 },
];

const satisfacao = [
  { nome: "NPS da Rede de Saúde", v: 76 },
  { nome: "NPS da Rede de Assistência", v: 68 },
];

function Barra({ nome, v }: { nome: string; v: number }) {
  return (
    <li className="flex items-center gap-3">
      <span className="t-fonte txt-suave w-[46%] shrink-0">{nome}</span>
      <span className="h-[6px] flex-1 bg-[rgba(245,241,225,.12)]">
        <span
          className="block h-full bg-[var(--amarelo)]"
          style={{ width: `${v}%` }}
        />
      </span>
    </li>
  );
}

export function SectionTecnologia() {
  return (
    <Slide
      rotulo="Tecnologia"
      foto="/fotos/12-tecnologia.jpg"
      veu="veu-denso"
      posicao="center 42%"
      fonte="O afastamento só vira registro do INSS a partir do 16º dia, Lei 8.213/1991, art. 60 · A literatura acadêmica registra a pesquisa nessa população como escassa · O tratamento de informações e dados se adequa à LGPD e às diretrizes éticas e de boas práticas do CFP."
    >
      <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] gap-8 md:gap-14 items-center">
        <div>
          <span className="font-mono t-num font-bold block">0</span>
          <p className="t-corpo txt-suave mt-4 max-w-[38ch]">
            estatísticas nacionais sobre o adoecimento do servidor municipal.
          </p>

          <h2 className="t-afirma font-bold mt-10 max-w-[24ch] text-balance">
            A PAAPS vai estar dentro da rede todo mês, e cada Roda vira
            registro.
          </h2>
        </div>

        {/* app Ponto de Apoio do Servidor */}
        <Card className="items-stretch justify-start text-left w-full">
          <div className="flex items-baseline justify-between w-full">
            <h3 className="t-cardtit font-bold">Ponto de Apoio do Servidor</h3>
            <span className="t-fonte txt-suave">12 meses</span>
          </div>

          <p className="t-fonte txt-suave">Rodas registradas por mês</p>
          <div className="flex items-end gap-[3px] h-[64px] w-full">
            {rodas.map((h, i) => (
              <i
                key={i}
                className="flex-1 bg-[rgba(245,241,225,.34)] last:bg-[var(--amarelo)]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <p className="t-fonte txt-suave pt-2">Alertas da rede</p>
          <ul className="space-y-2 w-full">
            {alertas.map((a) => (
              <Barra key={a.nome} {...a} />
            ))}
          </ul>

          <p className="t-fonte txt-suave pt-2">Satisfação</p>
          <ul className="space-y-2 w-full">
            {satisfacao.map((a) => (
              <Barra key={a.nome} {...a} />
            ))}
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
