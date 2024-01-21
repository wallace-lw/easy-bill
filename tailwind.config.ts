import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '520px',
        xmd: '1024px',
      },
      colors: {
        lava: '#F56E0F',
        grey: '#262626',
        snow: '#FBFBFB',
        background: '#151419',
      },
    },
  },
  plugins: [],
}
export default config
