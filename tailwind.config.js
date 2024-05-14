/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "2px 2px 12px rgba(0, 0, 0, 0.6)",
      },
      screens: {
        rm: '380px',
        tm: '480px',
      }
    },
  },
  plugins: [],
};
