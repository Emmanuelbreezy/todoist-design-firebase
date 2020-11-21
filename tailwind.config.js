module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors:{
        background:{
          // 'primary': 'white',
          // 'secondary': '#f7fafc'
          // 'primary': '#0d2438',
          // 'secondary': '#102c44',
          // 'ternary': '#1e3951',
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
          accent:    'var(--bg-background-accent)'
        },
        copy:{
          primary: 'var(--text-copy-primary)',
          secondary: 'var(--text-copy-hover)'
        }
        
      }
    },
  },
  variants: {},
  plugins: [],
}
