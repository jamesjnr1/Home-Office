import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowUp, MessageCircle } from 'lucide-react';
import Logo, { LogoTagline } from '@/components/Logo';
import { business } from '@/data/business';

const footerSections = [
  {
    heading: 'Explore',
    links: [
      { label: 'Services', path: '/services' },
      { label: 'Pharmacy', path: '/pharmacy' },
      { label: 'About Us', path: '/about' },
      { label: 'Book Appointment', path: '/book' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link to="/">
              <Logo theme="dark" />
            </Link>
            <LogoTagline className="mt-4 max-w-sm text-base" />

            <div className="mt-6 space-y-2.5">
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-400" />
                {business.phoneDisplay}
              </a>
              <div className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {business.address}
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-400">
                <Clock className="h-4 w-4 text-brand-400" />
                {business.hours}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center gap-2 rounded-full bg-ink-800 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-600"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#25D366]/15 px-4 py-2.5 text-sm font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading} className="lg:col-span-1">
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

          {/* Visit us */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Visit Us
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Open every day of the week — walk-ins are always welcome, no
              appointment required for pharmacy visits.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} Home-Office Pharmacy & Clinic. All
            rights reserved.
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
