import { createStitches } from '@stitches/react'

export const { config, createTheme, css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',

      'darkjunglegreen': '#191F28',
      'azure': '#0097FF'
    },
    
    fontSizes: {
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '3rem',
    },

    fonts: {
      'archivo': 'Archivo, sans-serif',
    }
  }
})