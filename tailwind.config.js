/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      colors: {
        background: '#1E1E2E', // Deep dark blue-gray
        text: '#E2E8F0', // Light gray for primary text
        primary: '#7C3AED', // Purple for buttons/links
        secondary: '#4B5563', // Muted gray for secondary elements
      },
      fontFamily: {
        sans: ['Poppins', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 8px rgba(124, 58, 237, 0.5)', // Custom glow for hover
      },
  },
  plugins: [],
  
}


}