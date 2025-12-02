// tailwind.config.js
const theme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#f8f8f8",
        "primary-dark": "#191919",
        pinkish: {
          100: "#edb5f5",
          200: "#eb7ad4",
          300: "#e86ed0",
        },
        blueish: {
          100: "#e6f8f9",
          200: "#b1e8ed",
        },
        // Yeni eklenen parlak lacivert-mor renkler
        gradient: {
          purple: "#8E2DE2",
          blue: "#4A00E0",
          start: "#667eea",
          end: "#764ba2",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#e86ed8",
              "&:hover": {
                color: "#edb5f5",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.pink.400"),
              "&:hover": {
                color: theme("colors.pink.300"),
              },
            },
          },
        },
      }),
      // Arka plan gradient için custom backgroundImage
      backgroundImage: {
        "purple-blue": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "deep-purple": "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)",
        "vibrant-mix": "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
