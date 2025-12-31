/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        salesforce: {
          'blue': '#0176D3',
          'blue-dark': '#032D60',
          'blue-darker': '#001B38',
          'blue-light': '#D8EDFF',
          'blue-lighter': '#EDF6FF',
          'cloud': '#E9F5FA',
          'sky': '#00A1E0',
          'navy': '#16325C',
          'orange': '#FF9A3C',
        },
      },
    },
  },
  plugins: [],
}

