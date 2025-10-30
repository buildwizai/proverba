/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#061226',
        secondary: '#0d223d',
        accent: '#5eead4',
        'accent-light': 'rgba(94, 234, 212, 0.18)',
        'accent-glow': 'rgba(94, 234, 212, 0.45)',
        'accent-sky': '#38bdf8',
        text: {
          base: '#f1f7ff',
          muted: '#c7d8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
