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
        'custom-background': 'linear-gradient(to right, #f7f9fc, #ffffff)',
        'custom-gradient2': ' linear-gradient(126deg, rgba(9,138,240,1) 27%, rgba(115,164,246,1) 83%)',
        'custom-gradient3': 'linear-gradient(126deg, rgba(50,190,39,1) 27%, rgba(92,234,127,1) 81%);',
        'custom-gradient4': 'linear-gradient(126deg, rgba(105,39,190,1) 27%, rgba(164,101,241,1) 81%);'
      },
      backgroundPosition: {
        'responsive-left' : 'left'
      }
    },
  },
  plugins: [],
};
