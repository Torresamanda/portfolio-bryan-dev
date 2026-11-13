import { ArrowRight } from 'lucide-react';

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
          <svg viewBox="48 60 510 235" fill="none">
            <defs>
              <pattern id="finish-checks" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="8" height="8" fill="#f5f1e9" />
                <path d="M0 0h4v4H0zM4 4h4v4H4z" fill="#171717" />
              </pattern>
            </defs>
            <path
              id="hero-circuit"
              className="track-edge"
              d="M121 121 C100 130 79 148 72 167 C66 184 76 193 96 190 C118 187 130 195 125 211 C122 225 106 235 107 250 C108 268 125 279 151 279 L420 279 C472 279 516 263 531 237 C541 220 531 204 513 204 C493 204 482 222 464 220 C448 218 443 202 450 190 C459 174 478 166 475 151 C472 139 454 137 440 146 L410 164 C397 172 386 166 389 153 L400 110 C403 96 393 88 381 95 L346 116 C335 123 326 120 322 109 L315 89 C310 75 296 72 285 83 L259 111 C249 121 237 121 227 114 L198 91 C181 78 163 81 157 94 C151 105 141 113 121 121 Z"
            />
            <use href="#hero-circuit" className="track-interior" />
            <path
              className="track-red"
              d="M121 121 C100 130 79 148 72 167 C66 184 76 193 96 190 C118 187 130 195 125 211 C122 225 106 235 107 250 C108 268 125 279 151 279 L420 279 C472 279 516 263 531 237 C541 220 531 204 513 204 C493 204 482 222 464 220 C448 218 443 202 450 190 C459 174 478 166 475 151 C472 139 454 137 440 146 L410 164 C397 172 386 166 389 153 L400 110 C403 96 393 88 381 95 L346 116 C335 123 326 120 322 109 L315 89 C310 75 296 72 285 83 L259 111 C249 121 237 121 227 114 L198 91 C181 78 163 81 157 94 C151 105 141 113 121 121 Z"
            />
            <path className="track-pit" d="M172 260 H295 C306 260 312 267 318 279" />
            <rect x="210" y="268" width="12" height="22" fill="url(#finish-checks)" stroke="none" />
            <circle cx="399" cy="153" r="5" className="track-marker" />
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
