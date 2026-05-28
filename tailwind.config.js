/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Space Grotesk', 'sans-serif'],
      accent: ['Cormorant Garamond', 'serif'],
    },
    extend: {
      colors: {
        background: '#0a0800',
        foreground: '#f5e6c0',
        gold: {
          DEFAULT: '#c9a84c',
          light: '#f0d080',
          dark: '#8b6914',
          muted: '#6b5a30',
        },
        surface: '#120f02',
        'surface-2': '#1a1508',
        'muted-fg': '#8a7a5a',
      },
      backgroundImage: {
        'nebula': 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.03) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(100,60,10,0.1) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
