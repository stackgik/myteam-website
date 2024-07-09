import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          'midnight-green': '#014e56',
          'light-coral': '#f67e7e',
          'dark-coral': '#946b6e',
          white: '#fff',
        },
        secondary: {
          'rapture-blue': '#79c8c7',
          'police-blue': '#2c6269',
          'deep-jungle-green': '#004047',
          'sacramento-state-green': '#012f34',
          'dark-green': '#002529',
        },
      },
      width: {
        fluidSection: 'min(100%, 1100px)',
        fluidInnerWrapper: 'min(100%, 1000px)',
      },
      screens: {
        desktop: { max: '90em' },
        miniDesktop: { max: '75em' },
        laptop: { max: '64em' },
        tablet: { max: '52.5em' },
        mobile: { max: '30em' },
      },
    },
  },
  plugins: [],
};
export default config;
