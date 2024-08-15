/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Fluid text size for the title
        'title': 'clamp(1.5rem, 2vw + 1rem, 2.5rem)',

        // Fluid text size for the body text
        'body': 'clamp(1rem, 1.5vw + 0.5rem, 1.125rem)',
      },
    },
  },
  plugins: [],
}

