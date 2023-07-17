/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2768E3",
        },
        secondary: "#2768E3",
        accent: "#ACACAC",
      },
      font: {
        fontFamily: "Roboto",
      },
    },
  },
  plugins: [],
};
