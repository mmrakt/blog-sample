module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        dark: {
          black: '#121212',
          gray: '#1E1E1E',
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(380px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(380px, 1fr))',
      },
    },
    screens: {
      pc: '980px',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
