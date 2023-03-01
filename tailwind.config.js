/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        right: "right 0.1s ease-in-out infinite",
        left: "left 0.1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-100deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        left: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-500%, -200%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        right: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(500%, -200%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
