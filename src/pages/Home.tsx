import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/content';
import { business } from '@/data/business';

export default function Home() {
  const { ref: servicesRef, visible: servicesVisible } = useReveal();
  const { ref: whyRef, visible: whyVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  return (
    <div className="page-enter">
      {/* ===== HERO — full-height photo, text pinned to the bottom ===== */}
      <section id="home" className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-20">
        <img
          src="/images/storefront-1.png"
          alt="Home-Office Pharmacy & Clinic storefront at Buduburam, Estate Junction"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <h1 className="max-w-2xl text-balance font-display text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Care &amp; Medicines are Channels of God&rsquo;s Healing
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            {business.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/book"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
            >
              Book an Appointment
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Medicines, Counselling & Clinical Care"
            desc="Services that meet you where you are — medically and physically."
          />
          <div ref={servicesRef} className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to="/services"
                className={`reveal ${servicesVisible ? 'is-visible' : ''} border-b-2 border-transparent py-4 transition-colors duration-300 hover:border-brand-600`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <h3 className="text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Healthcare That Puts You First"
            desc="Every person is unique, and our services are sensitive to individual needs."
          />
          <div ref={whyRef} className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: 'Registered Pharmacy Team', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
              { title: 'Open Every Day', desc: `Open ${business.hours.toLowerCase()} — no need to rush before closing time.` },
              { title: 'Individual & Sensitive', desc: 'We understand that each person is unique, so our care is sensitive to your individual needs.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal ${whyVisible ? 'is-visible' : ''} border-t-2 border-brand-600 pt-4`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 sm:py-32">
        <div ref={ctaRef} className={`reveal ${ctaVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-5 sm:px-8`}>
          <div className="rounded-3xl bg-brand-700 px-8 py-14 sm:px-16 sm:py-16">
            <h2 className="max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Take the Next Step for Your Health?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-brand-100">
              Book an appointment today, or call us — we are here to help.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/book"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50 sm:w-auto"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
