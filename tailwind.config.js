/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
    "compilerOptions": {
    "types": ["nativewind/types"]
  },
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
