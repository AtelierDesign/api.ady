import React from 'react';
import Head from 'next/head';

import Auth0Navbar from '@components/Auth0Navbar';

const Layout = ({ children }: React.PropsWithChildren<unknown>): React.ReactElement => (
  <>
    <Head>
      <title>Next.js with Auth0</title>
    </Head>

    <Auth0Navbar />

    <main>
      <div className="container">{children}</div>
    </main>

    <style jsx>{`
      .container {
        max-width: 42rem;
        margin: 1.5rem auto;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, 'Segoe UI';
      }
    `}</style>
  </>
);

export default Layout;
