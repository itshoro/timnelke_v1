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
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")
  ],
}
