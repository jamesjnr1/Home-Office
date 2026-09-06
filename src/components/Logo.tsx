// Recreation of the Home-Office Pharmacy & Clinic mark: a blue stethoscope
// forming a loop around a red cross, with a green mortar-and-pestle accent —
// same elements and colors as the source logo, redrawn as crisp, scalable SVG.

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = 'h-11 w-11' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Home-Office Pharmacy & Clinic logo"
    >
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#3aa9f3" />
          <stop offset="100%" stopColor="#0570b8" />
        </linearGradient>
      </defs>

      <rect width="100" height="100" rx="26" fill="url(#logoBg)" />

      {/* Stethoscope loop */}
      <path
        d="M28 18 V32 C28 46 37 56 50 56 C63 56 72 46 72 32 V20"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M28 18 H24" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <path d="M72 20 H76" stroke="white" strokeWidth="6" strokeLinecap="round" />
      {/* Chest piece */}
      <circle cx="78" cy="30" r="7" fill="white" />
      <circle cx="78" cy="30" r="2.6" fill="#0570b8" />

      {/* Red cross */}
      <rect x="43.5" y="26" width="13" height="27" rx="3" fill="#e02434" />
      <rect x="36.5" y="33" width="27" height="13" rx="3" fill="#e02434" />

      {/* Mortar & pestle */}
      <path
        d="M20 74 C20 82.5 27 88 35 88 C43 88 50 82.5 50 74 Z"
        fill="#1f8a44"
      />
      <rect x="18" y="71" width="34" height="5" rx="2.5" fill="#166a34" />
      <circle cx="26" cy="65" r="3.2" fill="#2ea656" />
      <circle cx="34" cy="60" r="2.6" fill="#2ea656" />
      <circle cx="41" cy="64" r="2.2" fill="#2ea656" />
    </svg>
  );
}

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ theme = 'light', className = '' }: LogoProps) {
  const nameColor = theme === 'dark' ? 'text-white' : 'text-ink-900';
  const subColor = theme === 'dark' ? 'text-brand-300' : 'text-brand-600';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0" />
      <span
        aria-hidden
        className={`h-8 w-px shrink-0 ${theme === 'dark' ? 'bg-accent-400/60' : 'bg-accent-500/70'}`}
      />
      <div className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${nameColor}`}>
          Home-Office
        </span>
        <span className={`text-[11px] font-semibold tracking-wide ${subColor}`}>
          Pharmacy & Clinic
        </span>
      </div>
    </div>
  );
}

interface LogoTaglineProps {
  className?: string;
}

export function LogoTagline({ className = '' }: LogoTaglineProps) {
  return (
    <p className={`font-tagline italic text-accent-600 ${className}`}>
      Our Care &amp; Medicines are Channels of God&rsquo;s Healing
    </p>
  );
}
