import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
// import { Box } from '../system/Box'
import Link from 'next/link';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100%',
  backgroundColor: 'rgba(240, 240, 240, 0.3)',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  opacity: '0.9',
  backdropFilter: 'invert(10%) blur(10px)',
  saturate: '300%',
});

const TextBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

export const DefaultButton = styled('button', {
  backgroundColor: '#f2f2f2',
  color: '#231f20',
  paddingLeft: '25px',
  paddingRight: '25px',
  py: '4px',
  height: '35px',
  borderRadius: '10px',
  border: '2px solid',
  borderColor: 'black',
  lineHeight: '1',
  width: 'auto',

  fontFamily: 'Helvetica',
  fontWeight: '700',
  fontSize: '14px',

  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
  },
});

export default function Atelier() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <p>Youre Logged in</p>
      </>
    );
  }
  return (
    <>
      <CoverBox>
        <TextBox>
          <Link href="/api/auth/login" passHref>
            <DefaultButton>LOGIN</DefaultButton>
          </Link>
          <Link href="/api/auth/signup" passHref>
            <DefaultButton>Or Sign up</DefaultButton>
          </Link>
        </TextBox>
      </CoverBox>
    </>
  );
}
