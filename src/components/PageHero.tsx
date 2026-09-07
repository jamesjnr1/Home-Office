import { useReveal } from '@/hooks/useReveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  desc?: string;
}

export default function PageHero({ eyebrow, title, desc }: PageHeroProps) {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-50/50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent-200/20 blur-3xl" />
      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-7xl px-5 sm:px-8`}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {desc && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
