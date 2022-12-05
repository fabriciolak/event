import { styled } from "..";

export const Container = styled("div", {
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',
  marginTop: '100px',
  height: 'calc(69vh - 100px)',

  'h1': {
    maxWidth: '45.5rem',
    fontSize: '$4xl',
    lineHeight: 1.2,
    marginBottom: '1rem',
  },

  'p': {
    fontSize: '$base',
    lineHeight: 1.4,
    marginBottom: '3rem',
  },

  'div': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem'
  },

  'a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '138px',
    height: '38px',
    borderRadius: 8,

    fontSize: '$sm',
    fontWeight: 700,
    lineHeight: '24px',
    textDecoration: 'none',

    color: '$black',
    background: '$white',

    '&:hover': {
      color: '$white',
      background: '$azure',
    }
  }
})