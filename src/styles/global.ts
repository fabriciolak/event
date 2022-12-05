import { globalCss } from './index'

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
   
  body: {
    backgroundColor: '$white',
    color: '$black',
    '-webkit-font-smoothing': 'antialiased'
  },

  'body, input, textarea, button': {
    fontFamily: '$archivo',
    fontWeight: 400,
  }
})