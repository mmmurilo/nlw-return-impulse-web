module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'brand':  '#8257e6',
        'brand-hover': '#996DFF',
        'text-on-brand-color': '#FFFFFF',
        'surface-primary': '#FFFFFF',
        'surface-secondary': '#F4F4F5',
        'surface-secondary-hover': '#E4E4E7',
        'stroke': '#D4D4D8',
        'tooltip': '#27272A',
        'text-primary': '#27272A',
        'text-secondary': '#71718A',
        'text-on-tooltip': '#F4F4F5',
        'dark-surface-primary': '#18181B',
        'dark-surface-secondary': '#27272A',
        'dark-surface-secondary-hover': '#3F3F46',
        'dark-stroke': '#52525B',
        'dark-tooltip': '#F4F4F5',
        'dark-text-primary': '#F4F4F5',
        'dark-text-secondary': '#A1A1AA',
        'dark-text-on-tooltip': '#27272A'
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
