/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        small: '10px',
        large: '20px',
      },
      colors: {
        base_black: '#242424',
        base_white: '#FCFAF4',
        node: '#8DD39C',
        selected_white: '#FFF9E9',
        connection: '#4362B1',
        blue: '4362B1',
      },
      fontFamily: {
        code: [
          'source-code-pro',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
};
