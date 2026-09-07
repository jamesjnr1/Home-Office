import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { ButtonLink, ButtonAnchor } from '@/components/Button';
import { business } from '@/data/business';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pharmacy', path: '/pharmacy' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-500 ${
        scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-700'
                      : 'text-ink-600 hover:text-brand-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <ButtonAnchor
              href={`tel:${business.phoneTel}`}
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </ButtonAnchor>
            <ButtonLink to="/book" variant="primary" size="sm" className="hidden sm:inline-flex">
              <Stethoscope className="h-4 w-4" />
              Book Appointment
            </ButtonLink>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 transition-colors hover:bg-ink-100 xl:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-ink-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-700 hover:bg-brand-50 hover:text-brand-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border-2 border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <Link
              to="/book"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <Stethoscope className="h-4 w-4" />
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
