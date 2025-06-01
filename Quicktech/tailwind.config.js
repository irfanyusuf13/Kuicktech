/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Atur font default
      },
      colors: { // Contoh palet warna yang lebih segar
        'brand-primary': '#0062FF', // Biru yang kuat
        'brand-secondary': '#FFD100', // Kuning yang cerah
        'brand-dark': '#0D1B2A',
        'brand-light': '#F8F9FA',
        'brand-accent': '#E63946', // Aksen merah (gunakan dengan hati-hati)
      }
    },
  },
  plugins: [],
}