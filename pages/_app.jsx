import React from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <IdProvider>
        <Layout>
          <NextNprogress
            color="linear-gradient(90deg, rgba(58,107,180,1) 0%, rgba(29,253,117,1) 43%, rgba(252,116,69,1) 100%)"
            startPosition={0.3}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </Layout>
      </IdProvider>
    </UserProvider>
  );
}
