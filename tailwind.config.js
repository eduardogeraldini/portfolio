module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
    },
    screens: {
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
