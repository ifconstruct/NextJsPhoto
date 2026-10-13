import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: 'Alexander Volkov — Photographer',
    template: '%s · Alexander Volkov',
  },
  description:
    'Portraits, journeys, and stories in photographs. A demo photography portfolio.',
};
// Browser extensions such as TokenPocket inject attributes on <html> before hydration.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <footer>
          <Link className="brand" href="/">
            ALEXANDER VOLKOV<span>PHOTOGRAPHY</span>
          </Link>
          <p>Observe. Feel. Remember.</p>
          <div>
            <Link href="/contact">Get in touch ↗</Link>
            <small>
              © 2026 · Demo portfolio
              <br />
              Photography:{' '}
              <a href="https://unsplash.com" target="_blank" rel="noreferrer">
                Unsplash
              </a>
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
