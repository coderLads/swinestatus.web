/* eslint-disable */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate:{
        '-35': '-35deg',
      },
      gridTemplateRows: {
        'profile': '3.5rem 1.5fr 1fr'
      },
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
       },
       gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
       },
       gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
