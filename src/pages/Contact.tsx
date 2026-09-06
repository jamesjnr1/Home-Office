import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, Navigation } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: '128 Health Street, Wellness District, City 45210' },
  { icon: Phone, label: 'Call Us', value: '+1 (555) 240-8800' },
  { icon: Mail, label: 'Email Us', value: 'care@homeoffice-clinic.com' },
  { icon: Clock, label: 'Opening Hours', value: 'Mon – Sun: 8:00 AM – 10:00 PM' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <div className="page-enter">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="We're Here to Help"
            desc="Have a question, need directions, or want to learn more? Reach out — our team responds within one business hour."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className="grid gap-8 lg:grid-cols-2">
            <div className={`reveal ${visible ? 'is-visible' : ''}`}>
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-ink-100 shadow-sm">
                <iframe
                  title="Clinic location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.5%2C-0.1%2C51.52&layer=mapnik"
                  className="h-80 w-full border-0"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </div>

            <div className={`reveal ${visible ? 'is-visible' : ''} rounded-3xl border border-ink-100 bg-white p-6 shadow-lg sm:p-8`}>
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                    <CheckCircle2 className="h-8 w-8 text-brand-600" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Message Sent</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                    Thank you for reaching out. A member of our team will get back to you within one business hour.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border-2 border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink-900">Send a Message</h3>
                    <p className="mt-1 text-sm text-ink-500">Fill out the form and we will get back to you shortly.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">Full Name</label>
                      <input required type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">Phone</label>
                      <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Email</label>
                    <input required type="email" placeholder="jane@example.com" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">How can we help?</label>
                    <select className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                      <option>General question</option>
                      <option>Book an appointment</option>
                      <option>Prescription transfer</option>
                      <option>Insurance question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Message</label>
                    <textarea required rows={5} placeholder="Tell us how we can help..." className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                  <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5">
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
            <MessageCircle className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-ink-900 sm:text-4xl">Need immediate assistance?</h2>
          <p className="mt-4 text-lg text-ink-500">For urgent medical concerns, call us directly. If this is an emergency, call your local emergency services.</p>
          <a href="tel:+15552408800" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5">
            <Phone className="h-5 w-5" />
            +1 (555) 240-8800
          </a>
        </div>
      </section>
    </div>
  );
}
