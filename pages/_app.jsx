import React from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { UserProvider } from '@auth0/nextjs-auth0';


import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.scss';


initFontAwesome();

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
