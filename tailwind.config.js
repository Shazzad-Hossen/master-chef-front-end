/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientbg': "url('./src/assets/images/bg/gradient1.png')",
        'chefbannerbg': "url('./src/assets/images/bg/chef-bg.jpg')",
        'subscribe': "url('./src/assets/images/bg/food-banner.png)",
        
      }
    },
    fontFamily: {
      'bruno' : ['Bruno Ace SC', 'cursive'],

    },
  },
  plugins:  [
    require('flowbite/plugin'),
  ],
}

