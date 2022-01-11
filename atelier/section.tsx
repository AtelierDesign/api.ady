import { styled } from 'stitches.config';

export const Section = styled('section', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 1,
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  variants: {
    size: {
      1: {
        py: '$3',
      },
      2: {
        py: '$5',
      },
      3: {
        py: '$9',
        px: '0',
        margin: 'auto',
      },
      4: {
        py: '150px',
        px: '10px',
        margin: 'auto',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
});
