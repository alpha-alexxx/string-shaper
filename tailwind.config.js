/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1F2937',      // slate-800
        'secondary': '#FFA500',    // orange-400
        'tertiary': '#2563EB'      // blue-600
      },
      borderColor: {
        'primary': '#1F2937',      // slate-800
        'secondary': '#FFA500',    // orange-400
        'tertiary': '#2563EB'      // blue-600
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}