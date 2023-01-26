/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunburn' : "url('/assets/bg-1.png')",
        'ankit-tiwari' : "url('/assets/bg2.png')"
      },
      colors: {
        'primary-color': "var(--primary-color)",
        'secondary-color': "var(--secondary-color)",
        'font-color': "var(--font-color)",
        'bg-color' : "var(--bg-color)",
        'heading-color' : "var(--heading-color)",
        'light-color' : "var(--light-color)"
      }
    },
  },
  plugins: [],
}
