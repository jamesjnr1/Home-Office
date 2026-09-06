import { Link } from 'react-router-dom';
import { Linkedin, Calendar, ArrowRight, Award, GraduationCap, Clock, Search } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { doctors } from '@/data/content';

export default function Doctors() {
  const { ref, visible } = useReveal();
  const [search, setSearch] = useState('');
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-enter">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Meet Our Team"
            title="Experienced Doctors Who Care"
            desc="Our board-certified physicians and pharmacists bring decades of combined experience and a shared dedication to your wellbeing."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctors or specialties..."
                className="w-full rounded-full border border-ink-200 bg-white py-3 pl-12 pr-5 text-sm text-ink-800 shadow-sm outline-none transition-all focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
              />
            </div>
          </div>

          <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map((doc, i) => (
              <div
                key={doc.id}
                className={`reveal ${visible ? 'is-visible' : ''} group overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-200">{doc.specialty}</p>
                      <h3 className="mt-1 font-display text-xl font-bold text-white">
                        {doc.name}
                      </h3>
                    </div>
                    <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link
                        to="/book"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                        aria-label="Book appointment"
                      >
                        <Calendar className="h-4 w-4" />
                      </Link>
                      <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-600 transition-colors hover:bg-ink-700 hover:text-white"
                        aria-label="LinkedIn profile"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-brand-600">{doc.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{doc.bio}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-ink-100 pt-4">
                    <div className="flex items-center gap-2 text-xs text-ink-500">
                      <Clock className="h-4 w-4 text-brand-500" />
                      {doc.experience}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink-500">
                      <GraduationCap className="h-4 w-4 text-brand-500" />
                      {doc.education.split(',')[0]}
                    </div>
                  </div>
                  <Link
                    to="/book"
                    className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Book with {doc.name.split(' ')[1]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="py-20 text-center">
              <Award className="mx-auto h-10 w-10 text-ink-300" />
              <p className="mt-4 text-ink-500">No doctors match your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
            <Award className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            The Care You Deserve
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Our doctors take time to listen, explain, and involve you in every
            decision about your health. That is the Home-Office difference.
          </p>
          <Link
            to="/book"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
          >
            Find Your Doctor
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
