export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <a href="#inicio" className="logo">
          Bryan<span>/</span>
        </a>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Bryan Lima. Todos os direitos reservados.
        </p>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>
  );
}
