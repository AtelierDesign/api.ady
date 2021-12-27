import React from 'react';
import Head from 'next/head';

import Navigation from './Navigation';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next.js Sample App</title>
    </Head>

    <Navigation />
    <main id="app" className="main" data-testid="layout">
      <div>{children}</div>
    </main>
  </>
);

export default Layout;
