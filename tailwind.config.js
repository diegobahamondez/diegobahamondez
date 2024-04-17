/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["lofi", "synthwave", "coffee"],
    darkTheme: "dark",
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}