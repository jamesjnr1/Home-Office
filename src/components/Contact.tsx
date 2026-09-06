import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '128 Health Street, Wellness District, City 45210',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (555) 240-8800',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'care@medicare-clinic.com',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Mon – Sun: 8:00 AM – 10:00 PM',
  },
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Get In Touch
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            We're Here to Help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Have a question or need directions? Reach out — our team responds
            within one business hour.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact info cards */}
          <div className={`reveal ${visible ? 'is-visible' : ''} grid gap-4 sm:grid-cols-2`}>
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:border-brand-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{c.label}</p>
                  <p className="mt-1 text-sm text-ink-500">{c.value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
              <iframe
                title="Clinic location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.5%2C-0.1%2C51.52&layer=mapnik"
                className="h-56 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`reveal ${visible ? 'is-visible' : ''} rounded-3xl border border-ink-100 bg-white p-6 shadow-lg sm:p-8`}
          >
            <h3 className="text-xl font-bold text-ink-900">Send a Message</h3>
            <p className="mt-1 text-sm text-ink-500">
              Fill out the form and we'll get back to you shortly.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
