const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        night: "#0c001c",
      },
    },
    fontFamily: {
      sans: ["Libre Franklin", "sans"],
      display: ["DM Sans", "sans"],
      writing: ["Antic", "sans"],
      mono: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
