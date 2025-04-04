/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all components
  theme: {
    extend: {
      backgroundImage: {
        inception: "url('/images/inception.jpg')",
        interstellar: "url('/images/interstellar.jpg')",
        darkknight: "url('/images/darkknight.jpg')",
      },
    },
  },
  plugins: [],
};
