import React from 'react';
import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Auth0Layout from '@components/Auth0Layout';
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';

type ProfileProps = { user: UserProfile };

export default function Profile({ user }: ProfileProps): React.ReactElement {
  return (
    <Auth0Layout>
      <Heading size="2" css={{ fontFamily: '$inter', color: '$gray12' }}>
        <span>{user.name}</span>
      </Heading>

      <Container>
        <Heading size="2" css={{ fontFamily: '$inter', color: '$gray12' }}>
          Profile (server rendered)
        </Heading>
        <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
      </Container>
    </Auth0Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
