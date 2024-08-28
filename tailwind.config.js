/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        solid: '-12px 12px 0px 0px var(--tw-shadow-color)',
      },
      colors: {
        royal: {
          400: '#4169E1',
          500: '#365AC3',
          600: '#2B4AA4',
          700: '#203A85',
          800: '#152A66',
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1000ms ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
