module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        darkNavy: '#020c1b',
        lightNavy: '#112240',
        lightestNavy: '#233554',
        navyShadow: 'rgba(2, 12, 27, 0.7)',
        darkSlate: '#495670',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        blueWhite: '#e6f1ff',
        green: '#64ffda',
        greenTint: 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily: {
        SFMono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono'],
      },
      transitionTimingFunction: {
        transition: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
