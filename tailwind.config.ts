import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      background:'#f5f9fe',
      'navbar':'#22295d',
      'hero-bg':"#363d71",


    },
  },
  plugins: [],
}
}
export default config
