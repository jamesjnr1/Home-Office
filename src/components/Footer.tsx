import { Link } from 'react-router-dom';
import {
  Plus,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from 'lucide-react';

const footerSections = [
  {
    heading: 'Services',
    links: [
      { label: 'Consultations', path: '/services' },
      { label: 'Pharmacy & Refills', path: '/pharmacy' },
      { label: 'Cardiology', path: '/services' },
      { label: 'Vaccinations', path: '/services' },
      { label: 'Lab Diagnostics', path: '/services' },
    ],
  },
  {
    heading: 'Clinic',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Doctors', path: '/doctors' },
      { label: 'Health Resources', path: '/resources' },
      { label: 'Book Appointment', path: '/book' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Patient Rights', path: '#' },
      { label: 'Accessibility', path: '#' },
    ],
  },
];

const socials = [Facebook, Twitter, Instagram, Linkedin];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/25">
                <Plus className="h-6 w-6 text-white" strokeWidth={3} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">
                  Home-Office
                </span>
                <span className="text-[11px] font-medium tracking-wide text-brand-400">
                  Pharmacy & Clinic
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              Compassionate, comprehensive healthcare for our community since
              1999. Your wellbeing is our lifelong commitment.
            </p>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-ink-400">
                <Phone className="h-4 w-4 text-brand-400" />
                +1 (555) 240-8800
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-400">
                <Mail className="h-4 w-4 text-brand-400" />
                care@homeoffice-clinic.com
              </div>
              <div className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                128 Health Street, Wellness District, City 45210
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-ink-400 transition-all duration-300 hover:bg-brand-600 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-ink-400 transition-colors duration-200 hover:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © 2026 Home-Office Pharmacy & Clinic. All rights reserved.
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full bg-ink-800 px-4 py-2 text-sm font-medium text-ink-300 transition-all duration-300 hover:bg-brand-600 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
