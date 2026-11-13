import { ArrowRight } from 'lucide-react';

// Interlagos track geometry adapted from bacinger/f1-circuits (MIT); see THIRD_PARTY_NOTICES.md.
const interlagosPath =
  'M68.4 255.3 L87 327.1 L92.8 337.1 L97.8 340 L104 339.3 L110.9 333.6 L118 326.4 L123.3 325.4 L135.3 331.6 L146.6 335.5 L155 336.3 L165.4 334.6 L176.2 329.6 L185.5 321.2 L191.3 312.1 L201.3 280.8 L210.5 245.1 L229.9 169.3 L237.5 140.4 L239.5 131.4 L238.3 125.9 L233.4 121 L224.2 118.4 L201.8 114.5 L193.1 115.4 L184.6 119.1 L177.1 124.5 L168.4 134.8 L142.4 170.6 L125.3 194 L116.9 205.5 L111.5 210.1 L103.1 212.1 L92 211.2 L85.3 208.6 L77.3 203.3 L73.8 197.5 L70.8 186.1 L67.7 168.4 L67.4 158.9 L70.4 153.4 L73.3 152.2 L77.8 152.5 L86.7 158.4 L91.4 160.8 L95.6 161.4 L100.8 160 L106.4 154.1 L107.7 148 L106 142.2 L100.7 135.5 L87.1 121.5 L81.6 110.5 L79.1 97.9 L78.9 90.2 L81.4 86.3 L84.8 85.4 L89 86.6 L109.4 109.5 L114.5 113.3 L120.4 115.5 L126.8 116.4 L135.9 115.6 L144.6 111.7 L151.6 104.6 L161.6 89.5 L178.7 61.4 L179.4 57.6 L177.8 53.4 L171.1 49.1 L150.1 41.3 L143.9 40 L130.7 41.8 L112.7 46.2 L99.3 51.9 L84.7 60.4 L77.5 66.9 L71.9 74.5 L67.6 85.2 L61.3 110.7 L55.4 138.4 L50.8 156.6 L50 169.4 L51.4 184.6 L55.8 203.2 L68.4 255.3 Z';

export function Hero() {
  return (
    <div className="intro">
      <section id="inicio" data-section="Início" className="wrap hero">
        <div>
          <h1>
            Bryan<span>/</span>
          </h1>
          <h2>
            Desenvolvedor Full Stack<span className="red">.</span>
          </h2>
          <p>
            Com Angular e TypeScript, transformo necessidades do dia a dia em aplicações web que
            simplificam tarefas e facilitam a vida das pessoas.
          </p>
          <div className="actions">
            <a className="button" href="#projetos">
              Ver projetos <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-label">
            DESENVOLVIMENTO
            <br />
            EM MOVIMENTO ↗
          </div>
          <svg viewBox="20 30 340 230" fill="none">
            <defs>
              <pattern id="finish-checks" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="4" height="4" fill="#fff" />
                <path d="M0 0h2v2H0zM2 2h2v2H2z" fill="#171717" />
              </pattern>
            </defs>
            <g transform="translate(0 290) rotate(-90)">
              <path id="hero-circuit" className="track-edge" d={interlagosPath} />
              <use href="#hero-circuit" className="track-interior" />
              <use href="#hero-circuit" className="track-red" />
              <path
                className="track-pit"
                d="M61 226 C67 229 72 232 74 240 L83 278 C85 286 83 292 80 300"
              />
              <rect
                x="59.4"
                y="252.3"
                width="18"
                height="6"
                fill="url(#finish-checks)"
                transform="rotate(-14 68.4 255.3)"
              />
              <circle cx="142.4" cy="170.6" r="5" className="track-marker" />
            </g>
          </svg>
          <div className="art-bottom">
            FOCO NO DETALHE <span>●</span> SEMPRE EM EVOLUÇÃO
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className="status-strip" aria-label="Disponibilidade profissional">
          <span>
            <b>●</b> ABERTO A OPORTUNIDADES
          </span>
          <span className="status-mark" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
