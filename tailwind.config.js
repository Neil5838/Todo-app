/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Fluid title size
        'fluid-title': 'clamp(1.25rem, 2vw + 1rem, 2.5rem)',
        // Fluid body size
        'fluid-body': 'clamp(1rem, 1.5vw + 0.5rem, 1.125rem)',
      },
    },
  },
  plugins: [],
}

