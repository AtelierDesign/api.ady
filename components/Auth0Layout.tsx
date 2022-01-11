import React from 'react';
import Head from 'next/head';

import Auth0Navbar from '@components/Auth0Navbar';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';

const Auth0Layout = ({ children }: React.PropsWithChildren<unknown>): React.ReactElement => (
  <>
    <Head>
      <title>Atelier®</title>
    </Head>

    <Auth0Navbar />

    <main>
      <Section size="3" css={{}}>
        <Container size="3" css={{}}>
          {children}
        </Container>
      </Section>
    </main>
  </>
);

export default Auth0Layout;
