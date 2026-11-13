import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { getProjects } from '../lib/projects';

export async function Projects() {
  const { projects, reason } = await getProjects();
  return (
    <section id="projetos" data-section="Projetos" className="section projects">
      <div className="wrap">
        <div className="heading">
          <div>
            <h2>
              Projetos que colocam ideias na pista<span className="red">.</span>
            </h2>
          </div>
          <p>Uma seleção de projetos pessoais e estudos que fazem parte da minha jornada.</p>
        </div>
        {reason === 'unavailable' && (
          <div className="projects-notice" role="status">
            <strong>Não foi possível atualizar os projetos agora.</strong>
            <p>
              A conexão com o GitHub está indisponível no momento. Veja abaixo uma seleção salva de
              projetos ou acesse meu perfil no GitHub.
            </p>
          </div>
        )}
        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="card" key={p.github ?? p.title}>
              <div className="preview">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Tela da aplicação ${p.title}`}
                    width={867}
                    height={883}
                    sizes="(max-width: 540px) 100vw, (max-width: 1000px) 50vw, 25vw"
                  />
                ) : (
                  <div className="project-art" aria-hidden="true">
                    <span className="project-art-number">{String(i + 1).padStart(2, '0')}</span>
                    <strong>{p.title}</strong>
                    <span className="project-art-tags">{p.tags.join(' · ')}</span>
                  </div>
                )}
              </div>
              <div className="card-heading">
                <h3>{p.title}</h3>
                {p.kind === 'fox' && <span className="project-status">Em andamento</span>}
              </div>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="links">
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver aplicação ${p.title} (abre em nova aba)`}
                  >
                    Ver aplicação <ArrowUpRight size={15} />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver código de ${p.title} no GitHub (abre em nova aba)`}
                  >
                    GitHub <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <a
          className="all-projects"
          href="https://github.com/Bryan-OLima?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Explorar meu GitHub <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
