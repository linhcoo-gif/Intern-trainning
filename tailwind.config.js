/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-rgb": "rgb(5, 31, 77)",
        "card-bg": "rgb(52, 14, 131)",
        "bg-form": "rgb(237, 221, 255)",
      },
    },
  },
  plugins: [],
}

