import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { useEffect } from 'react'

import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.scss';


initFontAwesome();

export default function App({ Component, pageProps }) {
  useEffect(() => {
  import('bootstrap/dist/js/bootstrap')
}, [])

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
