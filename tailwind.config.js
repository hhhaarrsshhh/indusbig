/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(40, 40, 40, 1)',      },
        customFontColor: "rgba(37, 43, 66, 1)",
        customBgCreamcolor:"rgb(254, 232, 174)"
    },
  },
  plugins: [],
}