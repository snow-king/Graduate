module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F2F2F2',
      'eveningSea': '#025939',
      'corn': '#F2B705',
      'observatory':'#038C5A',
      'California': '#F29F05',
      'gray': '#CDCDCD',
      'black': '#000000',
      'gumLeaf': '#ABD4BC',
      'edgewater': '#C4E1CF',
      'red': '#FF0000'
    },
    fontFamily: {
      body: ['Roboto']
    }
  },
  plugins: [require("@tailwindcss/forms")],
}
