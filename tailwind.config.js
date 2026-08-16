/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070706',
          900: '#0c0b09',
          800: '#141310',
          700: '#1c1b17',
          600: '#2a2823',
        },
        cream: {
          50: '#f7f3ea',
          100: '#efe7d6',
          200: '#d9cbb0',
          300: '#c4b08a',
        },
        gold: {
          300: '#e8c97a',
          400: '#d4af4a',
          500: '#c49a2c',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        glow: '0 0 80px rgba(212, 175, 74, 0.08)',
      },
    },
  },
  plugins: [],
}
