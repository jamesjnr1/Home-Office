import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  HeartHandshake,
  Users,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import { business } from '@/data/business';

const principles = [
  { icon: Target, title: 'Our Mission', desc: "To provide medicines, counselling, and clinical care that serve as channels for God's healing to all who desire lasting solutions to their medical problems." },
  { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted healthcare provider in our community, known for reliability, warmth, and genuine care.' },
  { icon: HeartHandshake, title: 'Compassion First', desc: 'Every patient is treated with empathy, dignity, and respect — no exceptions.' },
  { icon: Users, title: 'Individual & Sensitive', desc: 'We understand that each person is unique, so our services are sensitive to individual needs.' },
];

const milestones = [
  { title: 'Our Foundation', desc: 'Opened as a neighborhood pharmacy and clinic with a vision for accessible, compassionate care.' },
  { title: 'Growing Trust', desc: 'Expanded our services to include lab diagnostics, health education, and home visits.' },
  { title: 'Community Care', desc: 'Began serving schools, churches, and organisations with tailored health programmes.' },
  { title: 'Today', desc: 'Open every day, 8:00 AM to 10:00 PM, with a registered team and a full range of services.' },
];

export default function About() {
  const { ref, visible } = useReveal();
  const { ref: valuesRef, visible: valuesVisible } = useReveal();
  const { ref: storyRef, visible: storyVisible } = useReveal();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="About Us"
        title="A Community Pharmacy & Clinic You Can Trust"
        desc={business.description}
      />

      {/* Our Story */}
      <section className="pb-24 sm:pb-32">
        <div ref={storyRef} className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className={`reveal ${storyVisible ? 'is-visible' : ''} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-ink-100">
                <img
                  src="/images/storefront-1.png"
                  alt="Home-Office Pharmacy & Clinic storefront"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 overflow-hidden rounded-2xl shadow-xl ring-1 ring-ink-100 sm:-right-6">
                <img
                  src="/images/storefront-2.png"
                  alt="Clinic entrance"
                  className="h-32 w-48 object-cover sm:h-40 sm:w-64"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Our Story
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                {business.descriptionExtra}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                Whether that means a quiet consultation at home, a visit to our
                counter at Buduburam, Estate Junction, or a health talk arranged
                for your school, church, or organisation — we meet you where you
                are, with the same care and attention every time.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-ink-600">
                  <ShieldCheck className="h-5 w-5 text-brand-500" />
                  Registered Pharmacy Team
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-600">
                  <Award className="h-5 w-5 text-brand-500" />
                  Quality-Assured Products
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-600">
                  <Sparkles className="h-5 w-5 text-brand-500" />
                  Individual & Sensitive Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline banner */}
      <section className="relative overflow-hidden bg-brand-700 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-300/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="font-tagline text-3xl italic leading-snug text-white sm:text-4xl lg:text-5xl">
            &ldquo;{business.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* What guides us */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Mission, Vision & Values"
          />
          <div ref={valuesRef} className="mt-14 grid gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`reveal ${valuesVisible ? 'is-visible' : ''} group rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Built on Trust, One Visit at a Time"
          />
          <div ref={ref} className="mt-16 grid gap-6 md:grid-cols-4">
            {milestones.map((m, i) => (
              <div
                key={m.title}
                className={`reveal ${visible ? 'is-visible' : ''} relative rounded-2xl border border-ink-100 bg-white p-6`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white shadow-lg">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{m.desc}</p>
                {i < milestones.length - 1 && (
                  <div className="absolute -right-3 top-5 hidden h-px w-6 bg-ink-200 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Visit Us
          </h2>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center gap-3 text-lg text-ink-600">
              <MapPin className="h-5 w-5 text-brand-500" />
              {business.address}
            </div>
            <div className="flex items-center justify-center gap-3 text-lg text-ink-600">
              <Clock className="h-5 w-5 text-brand-500" />
              {business.hours}
            </div>
            <div className="flex items-center justify-center gap-3 text-lg text-ink-600">
              <Phone className="h-5 w-5 text-brand-500" />
              {business.phoneDisplay}
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
