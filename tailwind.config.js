/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Arimo", "sans-serif"],
      cursive: ["Dancing Script", "cursive"],
    },
    extend: {
      boxShadow: {
        glow: "0 0 8px 0 white",
      },
      keyframes: {
        snow: {
          "0%": {
            transform: "translateY(-10vh)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(95vh)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
