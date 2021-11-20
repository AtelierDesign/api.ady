import React from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { UserProvider } from '@auth0/nextjs-auth0';


import Layout from '../components/Layout';


export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <IdProvider>
      <Layout>
        <Component {...pageProps} />
        </Layout>
      </IdProvider>
    </UserProvider>
  );
}
