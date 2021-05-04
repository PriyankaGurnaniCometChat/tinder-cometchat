module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      height: ['group-hover'],
      display: ['group-hover'],
      textOverflow: ['group-hover'],
      overflow: ['group-hover'],
      whitespace: ['group-hover'],
      backgroundImage: ['group-hover'],
      inset: ['group-hover'],
      cursor: ['hover'],
    },
  },
  plugins: [],
};
