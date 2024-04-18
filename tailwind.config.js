/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["night",{
      "lofi": {
        ...require("daisyui/src/theming/themes")["lofi"],
        "base-100": "#FAF7F5",
        "base-200":"#EFEAE6",
        "base-300": "#E7E2DF",
        "--rounded-box": "0rem",
        "--rounded-btn": "0rem",
        "--rounded-badge": "0rem",
      },
    }, "synthwave", "coffee"],
    darkTheme: "dark",
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}