'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          document.getElementById('menu-toggle')?.focus();
        }
      }}
    >
      <div className="wrap nav">
        <a href="#inicio" className="logo" aria-label="Bryan, voltar ao início">
          Bryan<span aria-hidden="true">/</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>
        <nav
          id="primary-navigation"
          className={menuOpen ? 'navigation is-open' : 'navigation'}
          aria-label="Navegação principal"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#formacao">Formação</a>
          <a href="#recomendacoes">Recomendações</a>
          <a className="mobile-contact" href="#contato">
            Contato <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <a className="nav-contact" href="#contato">
          Vamos conversar <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
