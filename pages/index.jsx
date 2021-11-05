import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

import Hero from '../components/Hero';
import Content from '../components/Content';

import AdyLogin from '../components/AdyLogin';


export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Hero />
        <hr />
        <Content />
      </>
    );
  }
  return (
    <>
    <AdyLogin />
    <Hero />
    </>
  )
};
