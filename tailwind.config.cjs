module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '640px'},
        'max-lg': {'max': '1024px'},
      },
    },
  },
  plugins: [],
}