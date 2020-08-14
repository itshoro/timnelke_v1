module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        foxfire: {
          '100': '#fee7eb',
          '200': '#fbb6c4',
          '300': '#f9869d',
          '400': '#f75575',
          '500': '#f4244e',
          '600': '#f20c3a',
          '700': '#db0b34',
          '800': '#aa0829',
          '900': '#79061d',
        }
      }
    },
    fontSize: {
      "sm": "0.75rem",
      "base": "0.875rem",
      "lg": "1rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.5rem"
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")
  ],
}
