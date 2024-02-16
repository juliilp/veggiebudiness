/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aleo: "'Aleo', serif;",
        bevan: "'Bevan', serif;",
        inriaSerif: "'Inria Serif', serif;",
        inter: "'Inter', sans-serif;",
        lobsterTwo: "'Lobster Two', sans-serif;",
        playfairDisplay: "'Playfair Display', serif;",
        lato: "Lato, serif",
        paprika: "paprika, serif",
      },
    },
  },
  plugins: [],
};
