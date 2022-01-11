import React from 'react';

import Auth0Layout from '@components/Auth0Layout';
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';

export default function About(): React.ReactElement {
  return (
    <Auth0Layout>
      <Container>
        <Heading size="3" css={{ fontFamily: '$inter', color: '$gray12', marginBottom: '20px' }}>
          About
        </Heading>
        <Paragraph css={{ fontFamily: '$inter', color: '$gray12' }}>
          This is the about page, navigating between this page and <i>Home</i> is always pretty fast. However, when you
          navigate to the <i>Profile</i> page it takes more time because it uses SSR to fetch the user first;
        </Paragraph>
      </Container>
    </Auth0Layout>
  );
}
