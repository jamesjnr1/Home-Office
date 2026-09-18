import type { ComponentType } from 'react';
import {
  Pill,
  Sparkles,
  ShieldCheck,
  Thermometer,
  Wind,
  Droplet,
  Leaf,
  Phone,
  Info,
  ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { stockCategories, products } from '@/data/products';
import { business } from '@/data/business';

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Pill,
  Sparkles,
  ShieldCheck,
  Thermometer,
  Wind,
  Droplet,
  Leaf,
};

const tintClasses: Record<string, { chip: string; hover: string }> = {
  brand: { chip: 'bg-brand-50 text-brand-600', hover: 'group-hover:bg-brand-600 group-hover:text-white' },
  accent: { chip: 'bg-accent-50 text-accent-700', hover: 'group-hover:bg-accent-600 group-hover:text-white' },
  amber: { chip: 'bg-amber-50 text-amber-600', hover: 'group-hover:bg-amber-500 group-hover:text-white' },
  rose: { chip: 'bg-rose-50 text-rose-600', hover: 'group-hover:bg-rose-500 group-hover:text-white' },
};

export default function Shop() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Shop"
        title="Browse What We Stock"
        desc="A guide to what you'll find on our shelves, organised by category — for browsing only. Call or visit us to buy."
      />

      {/* Honest notice — no online ordering, no delivery, no cart */}
      <div className="border-b border-ink-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-5 py-6 sm:px-8">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <p className="text-sm leading-relaxed text-ink-600">
            We don&rsquo;t offer online ordering, delivery, or payment through
            this site. Prices shown are a guide — please confirm current
            price and availability by calling{' '}
            <a
              href={`tel:${business.phoneTel}`}
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              {business.phoneDisplay}
            </a>{' '}
            or visiting us in store.
          </p>
        </div>
      </div>

      {/* Category grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Shop by Category"
            desc="Jump to a category to see what's available."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stockCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Pill;
              const tint = tintClasses[cat.tint] || tintClasses.brand;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${tint.chip} ${tint.hover}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <p className="flex-1 font-semibold text-ink-900">{cat.label}</p>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand-600" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products by category */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Full Range" title="Products by Category" />
          <div className="mt-14 space-y-16">
            {stockCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Pill;
              const tint = tintClasses[cat.tint] || tintClasses.brand;
              const items = products.filter((p) => p.category === cat.id);
              return (
                <div key={cat.id} id={cat.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tint.chip}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink-900">{cat.label}</h3>
                  </div>

                  {items.length > 0 ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((p) => (
                        <div key={p.name} className="rounded-2xl border border-ink-100 bg-white p-5">
                          <p className="font-semibold text-ink-900">{p.name}</p>
                          {p.unit && <p className="mt-0.5 text-xs text-ink-400">{p.unit}</p>}
                          <p className="mt-2 text-base font-bold text-brand-600">{p.price}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-2xl border border-dashed border-ink-200 bg-white/60 p-6">
                      <p className="text-sm text-ink-500">
                        Individual items and pricing for this category are
                        being added. Ask our pharmacy team in store for
                        what&rsquo;s currently available.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-600 px-8 py-14 sm:px-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Ready to pick something up?
                </h2>
                <p className="mt-3 text-brand-100">
                  Walk in anytime we&rsquo;re open, or call ahead to check stock.
                </p>
              </div>
              <a
                href={`tel:${business.phoneTel}`}
                className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
