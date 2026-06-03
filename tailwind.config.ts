import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vert: '#2D6A4F',
        'vert-clair': '#52B788',
        'vert-pale': '#95D5B2',
        orange: '#F4A261',
        fond: '#FAFAFA',
        'fond-alt': '#F0F4F1',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
