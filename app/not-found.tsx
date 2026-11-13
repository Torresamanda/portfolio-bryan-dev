import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-page-inner">
        <Link href="/" className="logo" aria-label="Bryan, voltar ao início">
          Bryan<span aria-hidden="true">/</span>
        </Link>
        <div className="error-content">
          <span className="error-code">404</span>
          <h1>
            Esta página não foi encontrada<span className="red">.</span>
          </h1>
          <p>O endereço pode estar incorreto ou a página pode ter mudado de lugar.</p>
          <Link className="button" href="/">
            <ArrowLeft size={18} aria-hidden="true" /> Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
