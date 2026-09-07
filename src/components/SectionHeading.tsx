import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'left',
}: SectionHeadingProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-lg leading-relaxed text-ink-500">{desc}</p>
      )}
    </div>
  );
}
