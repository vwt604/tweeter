module.exports = {
  content: ['./app/index.html', './app/src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      cursive: ['Pacifico', 'cursive'],
    },
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}
