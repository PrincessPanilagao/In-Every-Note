/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        taprom: ["Taprom", "system-ui"],
      },
    },
  },
  plugins: [],
};
