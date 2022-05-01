module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        hindsiliguri: ["Hind Siliguri", "sans-serif"],
      },
      colors: {
        "sidebar-text": "#E3E3E3",
        "sidebar-background": "#0C1E2E",
        "sidebar-hover": "#000022",
      },
      screens: {
        vsm: "400px",
        lgphone: "550px",
        tablet: "750px",
        lgtablet: "900px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
