/** @type {import('tailwindcss').Config} */
/**
 * - screen sizes for laptops
 * - look into spacing
 * - look into sizing (icon size), sizing constants, padding, border size
 * - look into responsive design
 */
const X = 1;
module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
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
        text_box: '2rem',
        tab: '4rem',
      },
      fontSize: {
        title: '38px',
        header_1: '30px',
        header_2: '25px',
        header_3: '20px', //also using for toolbar buttons
        text: '12px',
      },
      colors: {
        base_black: '#424245',
        base_white: '#FEF9EF',
        node: '#8DD39C',
        selected_white: '#FFF9E9',
        connection: '#4362B1',
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
