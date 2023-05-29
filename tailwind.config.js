module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_700: "#666666",
        gray_700_59: "#66666659",
        gray_900: "#111111",
        blue_A200: "#3b82f6",
        blue_gray_900: "#333333",
        white_A700: "#ffffff",
        gray_700_3f: "#6666663f",
        indigo_800: "#1e3a8a",
        gray_700_cc: "#666666cc",
      },
      fontFamily: { poppins: "Poppins", avenir: "Avenir" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
