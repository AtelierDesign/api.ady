import React from 'react';
import Router from 'next/router';
import NextLink from 'next/link';

// Auth0 API
import { useUser } from '@auth0/nextjs-auth0';

// ATELIER® DESIGN SYSTEM
import { Box } from '@atelier/box';
import { Flex } from '@atelier/flex';
import { Text } from '@atelier/text';
import { Link } from '@atelier/link';
import { ThemeSwitch } from '@components/Functions/ThemeSwitch';

const Auth0Navbar = (): React.ReactElement => {
  const { user } = useUser();

  return (
    <>
      <Flex
        as="header"
        css={{
          py: '11px',
          px: '5px',
          jc: 'space-between',
          position: 'fixed',
          margin: '0',
          backgroundColorc: '$light100',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          saturate: '300%',

          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <NextLink href="/atelier" passHref>
          <Box
            as="a"
            css={{
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}>
            <Text
              css={{
                zIndex: '999',
                fontFamily: '$neuewide',
                fontWeight: '800',
                fontSize: '18px',
                color: '$gray12',
                lineHeight: '30px',
                letterSpacing: '-0.03rem',
              }}>
              ATELIER®
            </Text>
            {/*<Image className="logo" alt="logo" src="/butterfly_logo.svg" width={80} height={18} />*/}
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}
        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: '$inter',
            fontSize: '12px',
            '@sm': {
              display: 'none',
            },
          }}>
          <NextLink href="/" passHref>
            <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Home
            </Link>
          </NextLink>

          <NextLink href="/about" passHref>
            <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              About
            </Link>
          </NextLink>

          <NextLink href="/shows" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
              }}>
              Shows
            </Link>
          </NextLink>

          <NextLink href="/profile" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
              }}>
              Profile
            </Link>
          </NextLink>

          <NextLink href="/profile-ssr" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
              }}>
              Profile SSR
            </Link>
          </NextLink>
        </Flex>
        {/* <!-- JSX ELEMENT --> */}

        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: '$inter', fontSize: '12px' }}>
          {/* <!-- THEME SWITCH --> */}
          <ThemeSwitch />
          {/* <!-- JSX ELEMENT --> */}

          {/* <!-- -->*/}

          {user ? (
            <>
              <Link
                href="/api/auth/logout"
                variant="subtle"
                css={{
                  fontSize: '13px',
                  color: '$white',
                  backgroundColor: '$lime9',
                  borderRadius: '6px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  mr: '$3',
                  '@sm': { display: '', mr: '$3' },
                  '&:hover': { cursor: 'pointer' },
                }}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <NextLink href="/api/auth/login" passHref>
                <Link
                  variant="subtle"
                  css={{
                    display: 'none',
                    color: '$gray12',
                    mr: '$3',
                    '@bp2': { display: 'block', mr: '$3' },
                  }}>
                  Login
                </Link>
              </NextLink>

              <Link
                href="/api/auth/login"
                variant="subtle"
                css={{
                  fontSize: '13px',
                  color: '$white',
                  backgroundColor: '$lime9',
                  border: '0px solid $crimson9',
                  borderRadius: '6px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  mr: '$3',
                  '@sm': { display: 'block', mr: '$3' },
                  '&:hover': { cursor: 'pointer' },
                }}>
                Sign up
              </Link>
            </>
          )}

          {/* <!-- -->*/}
        </Flex>
      </Flex>
    </>
  );
};

export default Auth0Navbar;
