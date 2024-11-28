/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'var(--color-primario-500)',
          400: 'var(--color-primario-400)',
          300: 'var(--color-primario-300)',

        } ,
        secondary: {
          500: 'var(--color-secundario-500)',
          400: 'var(--color-secundario-400)',
        },
        tertiary: {
          500: 'var(--color-terciario-500)',
          400: 'var(--color-terciario-400)',
          300: 'var(--color-terciario-300)',
        },
      },
      
    },
  },
  plugins: [],
}

