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
          <div className="mt-12 grid border-l border-t border-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            {stockCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Pill;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="group flex items-center gap-4 border-b border-r border-ink-200 bg-white p-5 transition-colors duration-300 hover:bg-brand-50/40"
                >
                  <Icon className="h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.75} />
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
              const items = products.filter((p) => p.category === cat.id);
              return (
                <div key={cat.id} id={cat.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-brand-600" strokeWidth={1.75} />
                    <h3 className="font-display text-xl font-bold text-ink-900">{cat.label}</h3>
                  </div>

                  {items.length > 0 ? (
                    <div className="mt-6 grid border-l border-t border-ink-200 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((p) => (
                        <div key={p.name} className="border-b border-r border-ink-200 bg-white p-5">
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
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink-950 px-8 py-14 sm:flex-row sm:items-center sm:px-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to pick something up?
              </h2>
              <p className="mt-3 text-ink-300">
                Walk in anytime we&rsquo;re open, or call ahead to check stock.
              </p>
            </div>
            <a
              href={`tel:${business.phoneTel}`}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-400"
            >
              <Phone className="h-4 w-4" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
