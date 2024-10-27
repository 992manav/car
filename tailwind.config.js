/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        worksans: ['"Work Sans"', "sans-serif"],
      },
      colors: {
        aliceblue: "#F0F8FF", // Exact color code for aliceblue
      },
    },
  },
  plugins: [],
};
