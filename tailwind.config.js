module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "sidebar-text": "#E3E3E3",
        "sidebar-background": "#2B2A3D",
        "sidebar-hover": "#000022",
      },
    },
  },
  plugins: [],
};
