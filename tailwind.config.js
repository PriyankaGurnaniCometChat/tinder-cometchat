module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      huge: "9rem",
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
