/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        "infinite-slider": "infiniteSlider 20s linear infinite",
        "float": "floatSlider 2s ease-in-out infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        floatSlider: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      display: ["group-focus"],
      colors: {
        base: "#131221",
        "base-light": "#353D57",
        light: "#A9CAEF",
        primary: "#8181D7",
        secondary: "#0038FF",
        NameColor: "rgba(99, 94, 193, 1)",
        base2: "rgba(29, 29, 43, 1)",
      },
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),require('@kamona/tailwindcss-perspective')],
}
module.exports.colors = module.exports.theme.extend.colors;
