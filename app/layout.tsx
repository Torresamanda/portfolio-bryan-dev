import type { Metadata } from 'next';
import './globals.css';
import { RaceProgress } from './components/race-progress';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: 'Bryan Lima | Desenvolvedor Full Stack',
  description:
    'Portfólio de Bryan, desenvolvedor full stack com conhecimentos em Angular, Java e Node.js.',
  openGraph: {
    title: 'Bryan Lima | Desenvolvedor Full Stack',
    description: 'Projetos, experiência e formação em desenvolvimento web.',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Lima | Desenvolvedor Full Stack',
    description: 'Projetos, experiência e formação em desenvolvimento web.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <RaceProgress />
        {children}
      </body>
    </html>
  );
}
