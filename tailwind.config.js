/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Primary
        'Red-input-errors': '#ff5252',
        // Neural
        'Light-grayish-violet': '#dedddf',
        'Dark-grayish-violet': '#8e8593',
        'Very-dark-violet': '#21092f',
      },
      fontFamily: {
        'SpaceGrotesk': ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}

