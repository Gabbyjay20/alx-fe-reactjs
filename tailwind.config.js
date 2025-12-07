const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}

if (typeof module !== 'undefined') {
  module.exports = config
}

export default config
