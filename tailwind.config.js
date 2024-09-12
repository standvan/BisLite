/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "c-header": "#e8ebf1",
        "c-blue": "#2aacc7",
        "c-blue-2": "#2aacc8",
        "c-blue-3": "#81e3ed",
      },
      height: {
        header: 500,
        slider: 440,
      },
      width: {
        screen: 1000,
      },
    },
  },
  plugins: [],
};
