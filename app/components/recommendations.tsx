import { ArrowUpRight } from 'lucide-react';
import { quotes } from '../data/portfolio';

export function Recommendations() {
  return (
    <section id="recomendacoes" data-section="Recomendações" className="section wrap">
      <div className="heading">
        <div>
          <h2>
            Boas parcerias vão mais longe<span className="red">.</span>
          </h2>
        </div>
        <p>Palavras de pessoas que acompanharam minha jornada profissional.</p>
      </div>
      <div className="quote-grid">
        {quotes.map((q) => (
          <figure key={q.name}>
            <figcaption>
              <a href={q.url} target="_blank" rel="noreferrer">
                {q.name.split(' ')[0]} <ArrowUpRight size={14} />
              </a>
              <small>{q.role}</small>
            </figcaption>
            <blockquote>“{q.text}”</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
