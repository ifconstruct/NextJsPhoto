'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link className="brand" href="/">
        ALEXANDER VOLKOV<span>PHOTOGRAPHY</span>
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Open menu"
      >
        {open ? 'Close' : 'Menu'} ☰
      </button>
      <nav className={open ? 'open' : ''}>
        {[
          ['/', 'Home'],
          ['/portfolio', 'Portfolio'],
          ['/about', 'About'],
          ['/journal', 'Journal'],
        ].map(([url, label]) => (
          <Link
            onClick={() => setOpen(false)}
            className={path === url ? 'active' : ''}
            href={url}
            key={url}
          >
            {label}
          </Link>
        ))}
        <Link
          onClick={() => setOpen(false)}
          className="nav-contact"
          href="/contact"
        >
          Let’s talk <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
