module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sourcesans: ["Source Sans Pro"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "sidebar-text": "#E3E3E3",
        "sidebar-background": "#0C1E2E",
        "sidebar-hover": "#000022",
      },
      screens: {
        tablet: "700px",
      },
    },
  },
  plugins: [],
};
