/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, rgba(13,79,169,1) 19%, rgba(98,173,240,1) 98%)',
        'custom-gradient': 'linear-gradient(180deg, rgba(150,191,248,1) 19%, rgba(16,106,187,1) 98%)',
        'custom-background': 'linear-gradient(to right, #f7f9fc, #ffffff)'
      },
      backgroundPosition: {
        'responsive-left' : 'left'
      }
    },
  },
  plugins: [],
};
