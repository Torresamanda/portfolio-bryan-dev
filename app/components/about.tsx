export function About() {
  return (
    <section id="sobre" data-section="Sobre" className="section wrap about">
      <div className="about-copy">
        <h2>
          Mais do que código<span className="red">.</span>
        </h2>
        <p>
          Sou Bryan, desenvolvedor full stack com conhecimentos em{' '}
          <strong>Angular, TypeScript, Java e Node.js.</strong> Tenho experiência em aplicações
          corporativas, desenvolvimento de funcionalidades front-end e integração com APIs REST.
        </p>
        <p>
          Gosto de resolver problemas com aplicações web que facilitem o dia a dia. Estou
          aprofundando meus conhecimentos em Angular 22 e busco oportunidades para contribuir e
          evoluir em equipe.
        </p>
      </div>
      <div className="about-details" aria-label="Tecnologias e idiomas">
        <div>
          <small>TECNOLOGIAS</small>Angular · TypeScript · Java · Node.js
        </div>
        <div>
          <small>IDIOMAS</small>Inglês intermediário
        </div>
      </div>
    </section>
  );
}
