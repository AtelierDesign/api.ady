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

import UserIcon from '@components/Functions/UserIcon';

// props => ['name', 'picture', 'updated_at', 'nickname', 'sub(provider)']

export default function Test(): React.ReactElement {
  return (
    <Auth0Layout>
      <Container css={{ textAlign: 'left', color: '$gray12', backgroundColor: 'transparent' }}>
        <UserIcon />
      </Container>
    </Auth0Layout>
  );
}
