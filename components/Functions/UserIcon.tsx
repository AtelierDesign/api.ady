import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

// @BORING AVATARS
import Avatar from 'boring-avatars';

// ATELIER® Design System
import { Text } from '@atelier/text';
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';

// STITCHES PRIMITIVE
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: 'transparent',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$gray12',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const AvatarPrim = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

// Your app...
const Flex = styled('div', { display: 'flex' });

const UserIcon = (): React.ReactElement => {
  const { user, error, isLoading } = useUser();
  // const UserIcon = ({ user }: ProfileProps): React.ReactElement => (
  return (
    <>
      <Container size="4">
        <Flex css={{ gap: 20 }}>
          {isLoading && (
            <>
              <Text size="1" css={{ fontFamily: '$inter', color: '$gray12' }}>
                Loading user info...
              </Text>
            </>
          )}

          {error && (
            <>
              <Text size="1" css={{ fontFamily: '$inter', color: '$gray12' }}>
                Error
              </Text>
              <pre>{error.message}</pre>
            </>
          )}

          {user && (
            <>
              <AvatarPrim>
                <AvatarImage>
                  <Avatar size={40} variant="marble" colors={['#15F31D', '#E9E4BB', '#BFD4B7', '#89A807', '#1A1C27']} />
                  <Text size="1" css={{ color: '$gray12', fontSize: '10px', fontWeight: '600' }}>
                    <span>{user.name}</span>
                  </Text>
                </AvatarImage>
                <AvatarFallback delayMs={600}></AvatarFallback>
              </AvatarPrim>
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
        </Flex>
      </Container>
    </>
  );
};

export default UserIcon;
