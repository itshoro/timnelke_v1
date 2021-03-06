module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      transitionProperty: {
        spacing: 'margin, padding',
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
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
        },
        'lighter-gray': '#eeeeee',
        'light-gray': '#727272',
        'off-black': '#0e0e0e',
      },
      fontSize: {
        '6xl': '3.5rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'focus'],
    padding: ['responsive', 'hover', 'focus'],
    zIndex: ['responsive'],
  },
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
