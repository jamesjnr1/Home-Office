/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Poppins', 'system-ui', 'sans-serif'],
        tagline: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Primary blue, taken from the stethoscope in the Home-Office logo.
        brand: {
          50: '#eff8ff',
          100: '#dcefff',
          200: '#b6e0fd',
          300: '#7cc8fb',
          400: '#3aa9f3',
          500: '#128ed9',
          600: '#0570b8',
          700: '#065a95',
          800: '#0b4b7a',
          900: '#0f3f66',
          950: '#092845',
        },
        // Secondary green, taken from the mortar & pestle / tagline in the logo.
        accent: {
          50: '#f1fbf3',
          100: '#dff7e4',
          200: '#c1eecb',
          300: '#8fdda2',
          400: '#56c476',
          500: '#2ea656',
          600: '#1f8a44',
          700: '#1b6f39',
          800: '#1a5931',
          900: '#17492a',
          950: '#082b18',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(11,75,122,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,75,122,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
