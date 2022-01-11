import React from 'react';
import Image from 'next/image';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Auth0Layout from '@components/Auth0Layout';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <Auth0Layout>
      <Container>
        <Box css={{ width: '50px', height: '50px', padding: '5px' }}>
          <Image className="user_image" src={user.picture} height={30} width={30} alt="Image" />
        </Box>
        <Heading
          size="2"
          css={{
            fontFamily: '$neuewide',
            fontWeight: '800',
            color: '$gray12',
            textTransform: 'uppercase',
            lineHeight: '2',
          }}
        >
          <span>{user.name}</span>,
        </Heading>

        <Heading size="2" css={{ fontFamily: '$inter', color: '$gray12' }}>
          This is your space®.
        </Heading>
      </Container>

      <Section>
        <Heading size="1" css={{ fontFamily: '$inter', color: '$gray12' }}>
          User Information
        </Heading>
        <Container css={{ color: '$gray12' }}>
          <Text data-testid="profile" css={{ fontSize: '12px', lineHeight: '1rem' }}>
            {JSON.stringify(user, null, 2)}
          </Text>
        </Container>
      </Section>
    </Auth0Layout>
  );
});
