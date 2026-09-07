import { ButtonLink } from '@/components/Button';

export default function NotFound() {
  return (
    <div className="page-enter flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          404
        </span>
        <h1 className="mt-3 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-500">
          The page you&rsquo;re looking for may have moved or no longer
          exists. Head back home, or reach out if you were expecting
          something here.
        </p>
        <div className="mt-8">
          <ButtonLink to="/" variant="primary">
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
