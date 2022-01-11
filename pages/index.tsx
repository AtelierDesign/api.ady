import React from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';

import Auth0Layout from '@components/Auth0Layout';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { Paragraph } from '@atelier/paragraph';
import { Separator } from '@atelier/separator';

export default function Home(): React.ReactElement {
  const { user, error, isLoading } = useUser();

  return (
    <Auth0Layout>
      <Container css={{ textAlign: 'left' }}>
        <Heading size="3" css={{ fontFamily: '$inter', color: '$gray12', marginBottom: '20px' }}>
          Next.js and Auth0 Example
        </Heading>

        {isLoading && (
          <Text size="1" css={{ fontFamily: '$inter', color: '$gray12' }}>
            Loading login info...
          </Text>
        )}

        {error && (
          <>
            <Heading size="1" css={{ fontFamily: '$inter', color: '$gray12' }}>
              Error
            </Heading>
            <pre>{error.message}</pre>
          </>
        )}

        {user && (
          <>
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

              <Separator size="2" css={{ backgroundColor: '$gray12' }} />

              <Heading size="1" css={{ fontFamily: '$inter', color: '$gray12' }}>
                Rendered user info on the client
              </Heading>
              <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
            </Container>
          </>
        )}

        {!isLoading && !error && !user && (
          <>
            <Paragraph css={{ fontFamily: '$inter', color: '$gray12' }}>
              To test the login click in <i>Login</i>
            </Paragraph>
            <Paragraph css={{ fontFamily: '$inter', color: '$gray12' }}>
              Once you have logged in you should be able to click in <i>Protected Page</i> and <i>Logout</i>
            </Paragraph>
          </>
        )}
      </Container>
    </Auth0Layout>
  );
}
