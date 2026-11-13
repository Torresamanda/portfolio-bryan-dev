import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Experience } from './components/experience';
import { Education } from './components/education';
import { Recommendations } from './components/recommendations';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
