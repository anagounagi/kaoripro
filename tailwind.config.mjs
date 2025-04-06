/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // JIT モードを有効化
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}', // `node_modules` を除外
    './components/**/*.{astro,html,js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a237e',
          light: '#534bae',
          dark: '#000051',
        },
        secondary: {
          DEFAULT: '#00796b',
          light: '#48a999',
          dark: '#004c40',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
