/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'around': '0 0px 15px 5px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'hero-image': "url('/images/header-image.jpg')",
        'white-bg-image': "url('/images/white-bg-img.png')",
        'random-two': "url('/images/random-image-two.jpg')",
        'random-three': "url('/images/random-image-three.jpg')",
      },
      colors: {
        'bgColor': '#111111',
        'paragraph': '#DCDCDB',
        'gold': '#ffcf40',
        'darkerGold': '#ffbf00'
      },
    },
  },
  plugins: [],
}