import { styled } from "..";

export const Header = styled("header", {
  width: '100%',
  maxWidth: '1180px',
  height: '5.625rem',
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'span': {
    fontSize: '$xl',
    fontWeight: 700
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

export const Footer = styled("footer", {
  width: '100%',
  height: '100px',
  margin: '0 auto',
  marginTop: '100px',
  padding: '1rem 1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gridArea: 'footer'
})