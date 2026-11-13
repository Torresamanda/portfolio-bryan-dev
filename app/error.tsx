'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Erro ao carregar o portfólio:', error);
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-page-inner">
        <Link href="/" className="logo" aria-label="Bryan, voltar ao início">
          Bryan<span aria-hidden="true">/</span>
        </Link>
        <div className="error-content" role="alert">
          <h1>
            Algo não saiu como esperado<span className="red">.</span>
          </h1>
          <p>Não foi possível carregar esta página. Tente novamente em alguns instantes.</p>
          <div className="error-actions">
            <button className="button" type="button" onClick={reset}>
              Tentar novamente
            </button>
            <Link className="error-home" href="/">
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
