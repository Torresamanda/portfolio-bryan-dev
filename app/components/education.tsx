export function Education() {
  return (
    <section id="formacao" className="section education-section">
      <div className="wrap">
        <div className="heading">
          <div>
            <h2>
              Aprender faz parte do percurso<span className="red">.</span>
            </h2>
          </div>
          <p>Uma base em tecnologia e aprendizado contínuo para construir soluções web.</p>
        </div>
        <div className="education-list">
          <article>
            <span className="education-date">EM ANDAMENTO</span>
            <h3>Pós-graduação em Desenvolvimento Full Stack</h3>
            <p>Descomplica</p>
          </article>
          <article>
            <span className="education-date">JAN. 2020 — DEZ. 2023</span>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>
              <a href="https://www.linkedin.com/school/1192508/" target="_blank" rel="noreferrer">
                UNIASSELVI ↗
              </a>
            </p>
            <div className="tags">
              <span>TypeScript</span>
              <span>JavaScript</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
