import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const contactEmail: string | null = 'bryanosoriolima@gmail.com';

export function Contact() {
  return (
    <section id="contato" data-section="Contato" className="section dark contact">
      <div className="wrap contact-inner">
        <div>
          <h2>
            Vamos construir algo juntos<span className="red">?</span>
          </h2>
          <p>
            Aberto a oportunidades CLT, projetos freelance e boas conversas sobre desenvolvimento.
          </p>
        </div>
        <div>
          <div className="contact-links">
            {contactEmail ? (
              <a className="email-link" href={`mailto:${contactEmail}`}>
                <Mail size={18} /> Enviar e-mail <ArrowUpRight size={16} />
              </a>
            ) : (
              <button className="email-link" type="button" disabled>
                <Mail size={18} /> E-mail em breve
              </button>
            )}
            <a href="https://www.linkedin.com/in/bryanolima/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
            </a>
            <a href="https://github.com/Bryan-OLima" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
