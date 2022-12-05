import { styled } from "..";

export const Container = styled("section", {
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',

  display: 'grid',
  gap: '0.5rem',
  gridTemplateAreas: "'header header' 'main article' 'footer footer'",

  'header': {
    width: '100%',
    height: '480px',
    gridArea: 'header',
    background: 'yellow',
    borderRadius: 8,

    'img': {
      object: 'contain',
      width: '100%',
      borderRadius: 8,
    }
  },

  'main': {
    width: '45.625rem',
    minHeight: '320px',
    gridArea: 'main',
    padding: '1rem',
    border: '1px solid #E6E6F0',
    borderRadius: 8,

    'h1': {
      marginTop: '1rem',
      marginBottom: '1rem'
    },

    'span': {
      display: 'flex',
      gap: '0 0.5rem',
      marginTop: '0.75rem',
      lineHeight: 1.6,
      alignItems: 'center',
      fontSize: '$sm',
      fontWeight: 700,
      color: 'rgba(76, 87, 108, 1)',

      '&:nth-child(2)': {
        color: '$azure',
      }
    },

    'p': {
      marginTop: '2rem',
      lineHeight: 1.6
    }
  },

  'article': {
    width: '27.125rem',
    position: 'sticky',
    top: '10px',
    height: '200px',
    gridArea: 'article',
    border: '1px solid #E6E6F0',
    padding: '1rem',

    'span': {
      display: 'block',
      marginTop: '1rem'
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