/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        titan: ['"Titan One"', 'sans-serif'],
      },
      dropShadow: {
        'glow': '0 0 10px rgba(0, 0, 0, 0.3)',
        'xl': '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 180s linear infinite',
      },
    },
  },
  plugins: [],
}