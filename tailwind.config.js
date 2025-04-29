// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React
    "./src/**/*.{svelte}" // Svelte
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}