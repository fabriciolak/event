import Link from "next/link";
import { styled } from "..";

export const Container = styled("section", {
  width: '100%',
  maxWidth: '1180px',
  height: 'calc(70vh - 100px)',
  margin: '0 auto',
  marginTop: '100px',

  'h1': {
    maxWidth: '45.5rem',
    fontSize: '$2xl',
    lineHeight: 1.2,
    marginBottom: '2.25rem',
  },

  '& .grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem'
  }
})

export const Article = styled("article", {
  'a': {
    display: 'block',
    maxWidth: '264px',
    height: '271px',

    textDecoration: 'none',
    borderRadius: 8,
    outline: '1px solid transparent',
    transition: 'outline 0.2s',

    '&:hover': {
      outline: '1px solid #E6E6F0'
    },
    
    'img': {
      width: '100%',
      borderRadius: 8,
    },

    '& > div': {
      padding: '1rem',

      'span': {
        fontSize: '0.75rem',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        color: '$azure',


        '&:last-child': {
          color: 'rgba(76, 87, 108, 1)'
        }
      },

      'h3': {
        fontSize: '$base',
        fontWeight: 600,
        lineHeight: 1.5,
        color: 'rgb(25, 31, 40)',
        marginTop: 4,
        marginBottom: 8,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '-webkit-box-orient': 'vertical',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
      }
    }
  }
})