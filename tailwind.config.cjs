/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          navy: '#0f172a',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Work Sans', 'system-ui','sans-serif'],
      },
    },
    plugins: [],
  }
};
