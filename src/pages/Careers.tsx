// This page is temporarily removed from the site — no nav link and no
// route in App.tsx point here for now. The component itself is left in
// place so the Careers page can be brought back quickly later: re-add
// the import and <Route path="/careers" .../> in App.tsx, and the nav
// links in Header.tsx / Footer.tsx.
import { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, MessageCircle, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { careerAreas } from '@/data/content';
import { business, buildWhatsAppUrl, submitToFormspree } from '@/data/business';

const applicationTypes = ['Employment', 'Internship'];

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState(applicationTypes[0]);
  const [area, setArea] = useState(careerAreas[0]);
  const [fallbackWhatsAppUrl, setFallbackWhatsAppUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '');
    const phone = String(form.get('phone') || '');
    const email = String(form.get('email') || '');
    const message = String(form.get('message') || '');

    const ok = await submitToFormspree({
      _subject: 'New careers application — Home-Office Pharmacy & Clinic',
      name,
      phone,
      email,
      type,
      area,
      message,
    });

    setSubmitting(false);
    if (ok) {
      setSubmitted(true);
    } else {
      setFallbackWhatsAppUrl(
        buildWhatsAppUrl(
          `Hi, my name is ${name} (${phone}). I'd like to apply for ${type} — ${area}. ${message}`
        )
      );
      setFailed(true);
    }
  };

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Careers"
        title="Work or Intern With Us"
        desc="Interested in joining our pharmacy or clinic team? Tell us a bit about yourself below."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="border-b border-ink-100 pb-6 text-sm leading-relaxed text-ink-500">
            We welcome applications from qualified pharmacists, pharmacy
            technicians, clinical staff, and students seeking internship
            placements. We don&rsquo;t always have an open position for every
            role, but we keep applications on file and reach out when
            something matches.
          </p>

          <div className="mt-8 rounded-3xl border border-ink-100 bg-white p-6 shadow-lg sm:p-8">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50">
                  <CheckCircle2 className="h-10 w-10 text-brand-600" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">Application Received</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                  Thank you for your interest in{' '}
                  <strong className="text-ink-700">{area}</strong>. We will
                  review your application and reach out if there&rsquo;s a
                  match.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 self-start rounded-full border-2 border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  Submit Another Application
                </button>
              </div>
            ) : failed ? (
              <div className="flex min-h-[500px] flex-col justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
                  <AlertCircle className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">Couldn&rsquo;t Send That</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                  Something went wrong on our end. Please send your
                  application on WhatsApp or call us directly instead.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={fallbackWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Apply on WhatsApp
                  </a>
                  <a
                    href={`tel:${business.phoneTel}`}
                    className="flex items-center justify-center gap-2 rounded-full border-2 border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    Call {business.phoneDisplay}
                  </a>
                </div>
                <button
                  onClick={() => setFailed(false)}
                  className="mt-4 self-start text-sm font-semibold text-ink-500 hover:text-brand-700"
                >
                  Try the form again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink-900">Application Details</h3>
                  <p className="mt-1 text-sm text-ink-500">All fields are required unless marked optional.</p>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-ink-700">I&rsquo;m applying for</label>
                  <div className="grid grid-cols-2 gap-2">
                    {applicationTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-200 ${type === t ? 'border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100' : 'border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:bg-brand-50/50'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-ink-700">Area of Interest</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {careerAreas.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setArea(a)}
                        className={`rounded-xl border px-3 py-3 text-left text-xs font-medium transition-all duration-200 ${area === a ? 'border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100' : 'border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:bg-brand-50/50'}`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Full Name</label>
                    <input required name="name" type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Phone Number</label>
                    <input required name="phone" type="tel" placeholder="055 000 0000" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">
                    Email <span className="font-normal text-ink-400">(Optional)</span>
                  </label>
                  <input name="email" type="email" placeholder="jane@example.com" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">
                    Tell us about yourself
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Your qualifications, experience, or what you're studying — a link to your CV is welcome too."
                    className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {submitting ? 'Sending…' : 'Submit Application'}
                  {!submitting && <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
                </button>

                <a
                  href={buildWhatsAppUrl("Hi, I'd like to apply to work or intern at Home-Office Pharmacy & Clinic.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Or apply via WhatsApp — handy if you&rsquo;d rather send your CV directly
                </a>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-100 pt-5">
                  <span className="flex items-center gap-1.5 text-xs text-ink-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-500" />
                    Your information stays private
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-500">
                    <Clock className="h-3.5 w-3.5 text-brand-500" />
                    We review applications on a rolling basis
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
