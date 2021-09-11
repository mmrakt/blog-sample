module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    width: {
      640: '640px',
      768: '768px',
      1024: '1024px',
      1280: '1280px',
      1536: '1536px',
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
