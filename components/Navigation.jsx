import React from 'react';
import { styled } from '@stitches/react';

const Navigation = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  width: '100vw',
  height: '45px',
  padding: '0',

  backgroundColor: 'rgba(240,240,240,0.8)',
  margin: '0',
  backdropFilter: 'blur(10px)',
  saturate: '200%',
  boxShadow: 'none',

  borderBottom: '1px solid #000',
  zIndex: '9999',
});

const NavBar = () => {
  return <Navigation></Navigation>;
};

export default Navigation;
