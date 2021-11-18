import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next.js Sample App</title>
    </Head>
    <main id="app" className="main" data-testid="layout">
      <div>{children}</div>
    </main>
  </>
);

export default Layout;
