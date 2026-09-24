/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swasthiq: {
          bg: '#F6F9F8',
          card: '#FFFFFF',
          text: '#092A4A',
          teal: '#0FAE9B',
          tealHover: '#0D9887',
          blue: '#3B82A0',
          insight: '#E7F7F3',
          border: '#DCEAE7',
          muted: '#627D98',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(9, 42, 74, 0.06), 0 2px 6px -1px rgba(9, 42, 74, 0.04)',
        'card': '0 8px 32px -4px rgba(9, 42, 74, 0.08), 0 4px 12px -2px rgba(9, 42, 74, 0.03)',
        'floating': '0 20px 48px -8px rgba(15, 174, 155, 0.18), 0 8px 24px -4px rgba(9, 42, 74, 0.08)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      transitionDuration: { '600': '600ms' },
      keyframes: {
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.02)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px) translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateX(0) translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'screen-enter': {
          '0%': { opacity: '0', transform: 'translateX(8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'scale-check': {
          '0%': { opacity: '0', transform: 'scale(0.75)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'attention-cue': {
          '0%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-3px)' },
          '70%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-subtle': 'float-subtle 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 8s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-down': 'fade-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'screen-enter': 'screen-enter 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'modal-in': 'modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-check': 'scale-check 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'attention-cue': 'attention-cue 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
