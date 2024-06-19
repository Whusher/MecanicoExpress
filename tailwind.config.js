/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        backgroundNormal: '#1B1A1A',
        buttons: '#00ABFB',
        backgroundRegister: 'EB3E39'
      },
    },
  },
  plugins: [],
}