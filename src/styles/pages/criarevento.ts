import { styled } from "..";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '1180px',
  minHeight: 'calc(70vh - 100px)',
  margin: '0 auto',
  marginTop: '100px',

  'h1': {
    marginBottom: '90px'
  },
})

export const Form = styled('form', {
  width: '35rem',
  maxWidth: '100%',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  'label': {
    fontSize: '$xl'
  },

  'input': {
    height: 45,
    fontSize: '$lg',
    padding: '0 0.75rem',
    borderRadius: 8,
    border: '1px solid $darkjunglegreen',
    outline: 'none'
  },

  'button': {
    height: 45,
    fontSize: '$xl',
    borderRadius: 8,
    border: 0,
    outline: 'none',
    cursor: 'pointer',

    '&:hover': {
      background: '$azure',
      color: '$white'
    }
  }
})