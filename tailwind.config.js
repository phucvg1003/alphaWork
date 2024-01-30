/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "SVN-DIN Next",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}

