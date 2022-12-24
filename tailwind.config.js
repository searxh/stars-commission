module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      '2xs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      fontFamily:{
        'nunito':'Nunito Sans',
      },
      keyframes:{
        doubletap:{
          '0%, 30%, 40%, 50%, 100%': { transform: 'scale(1)', opacity: 0 },
          '35%, 45%': { transform: 'scale(2)', opacity: 1 },
        }
      },
      animation:{
        'double-tap': 'doubletap 4s ease-in-out infinite',
        'pulse-slow': 'pulse 5s ease-in-out infinite',
        'spin-slow': 'spin 50s infinite',
        'pulse-ultra-slow': 'pulse 20s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}