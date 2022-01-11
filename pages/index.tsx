import React from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import Avatar from 'boring-avatars';

import Auth0Layout from '@components/Auth0Layout';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Grid } from '@atelier/grid';
import { Section } from '@atelier/section';
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
              <Section size="4">
                <Container size="3" css={{ px: '0' }}>
                  <Grid
                    css={{
                      gap: '$3',
                      align: 'center',
                      gridTemplateColumns: '1fr',
                      '@bp1': {
                        gap: '$3',
                        gridTemplateColumns: '1fr 1fr',
                      },
                      '@bp2': {
                        gap: '$3',
                        gridTemplateColumns: '1fr 1fr',
                      },
                    }}>
                    {/* <!-- TWITTER --> */}
                    <Box
                      css={{
                        display: 'flex',

                        alignItems: 'center',

                        margin: 'auto',
                        padding: '5px',
                        // backgroundColor: '$slate6',
                        borderRadius: '12px',
                        width: '100%',
                        height: '100%',
                      }}>
                      {/*  <!-- <Image className="user_image" src={user.picture} height={30} width={30} alt="Image" /> --> */}
                      <Avatar
                        size={40}
                        name={user.name}
                        variant="marble"
                        colors={['#15F31D', '#E9E4BB', '#BFD4B7', '#89A807', '#1A1C27']}
                      />
                      <span>{user.sub}</span>
                      <Heading
                        size="2"
                        css={{
                          marginLeft: '12px',
                          marginRight: '12px',
                          fontFamily: '$neuewide',
                          fontWeight: '800',
                          color: '$gray12',
                          textTransform: 'uppercase',
                          lineHeight: '2',
                        }}>
                        <span>{user.name}</span>
                      </Heading>
                    </Box>

                    <Heading size="2" css={{ fontFamily: '$inter', color: '$gray12' }}>
                      Atelier Design Yield®
                    </Heading>
                  </Grid>
                </Container>
              </Section>

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
