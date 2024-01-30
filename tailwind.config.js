/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '495px',
        md: '805px'
      },
      boxShadow: {
        lg: '4px 4px 15px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      },
      textShadow: {
        sm: '0 2px 6px rgba(255, 255, 255 , 0.7)'
      },
      fontSize: {
        xs: ['12px', '16px']
      }
    },
    fontFamily: {
      heading: ['Geologica', 'sans-serif'],
      body: ['Roboto\\ Flex', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    }
  ]
}
