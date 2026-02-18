import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        neon: {
          blue: '#00d4ff',
          purple: '#7b2fff',
          cyan: '#0ff',
          pink: '#ff2d78',
        },
        dark: {
          base: '#020408',
          surface: '#080d16',
          card: '#0d1526',
          border: '#1a2540',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, #00d4ff 0%, #7b2fff 100%)',
        'gradient-hero': 'linear-gradient(180deg, #020408 0%, #080d16 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px #00d4ff, 0 0 20px #00d4ff40' },
          '50%': { boxShadow: '0 0 20px #00d4ff, 0 0 60px #00d4ff60, 0 0 100px #00d4ff20' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(123, 47, 255, 0.5)',
        'neon-strong': '0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(123, 47, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}

export default config
