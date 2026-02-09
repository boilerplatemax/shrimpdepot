import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <svg className="w-8 h-8 text-red-600" viewBox="0 0 100 100" fill="currentColor">
            <path d="M65 15c-5-3-12-2-16 3-2 3-3 7-2 11l-8 12c-6 3-12 8-16 15-5 9-6 19-3 28 3 8 10 13 18 14h4c8 0 16-3 22-9 7-7 10-16 9-26-1-8-4-15-9-20l3-11c1-4 0-8-2-11-2-4-5-6-9-7zm-8 12c1-3 3-5 6-4 2 1 4 3 4 5s0 5-1 7l-2 5c-3-2-6-3-10-4l3-9zm2 52c-5 5-12 7-19 6-6-1-10-5-12-11-3-7-2-16 2-23 4-6 9-11 15-13 4-1 8-1 11 1 4 2 7 5 9 9 4 8 4 17-1 24-1 2-3 5-5 7z"/>
            <circle cx="54" cy="52" r="3"/>
          </svg>
          <span className="text-ocean-900">Shrimp&nbsp;Yard</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-ocean-600 underline underline-offset-4'
                    : 'text-gray-600 hover:text-ocean-600 transition-colors'
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ocean-400"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium ${
                    isActive ? 'text-ocean-600' : 'text-gray-600'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
