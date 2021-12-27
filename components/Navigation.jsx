import React from 'react';
// import NextLink from 'next/link';
// import { Box } from '@system/box';
import { Flex } from '../system/flex';
import { Text } from '../system/text';
// import { Text } from '@system/text';
// import { Link } from '@system/link';

const Navigation = () => (
  <div>
    <Flex
      as="header"
      css={{
        py: '12px',
        px: '5px',
        jc: 'space-between',
        position: 'fixed',
        m: '0',
        bc: '$light100',
        width: '100vw',
        backdropFilter: 'blur(10px)',
        saturate: '200%',
        borderBottomWidth: '1px',
        brc: '$lime9',

        zIndex: '9999',
      }}>
      <Text
        css={{
          fontWeight: '800',
          fontSize: '16px',
          color: '$gray12',
          lineHeight: '1.5',
          letterSpacing: '-0.05rem',
        }}>
        Atelier Design®
      </Text>
    </Flex>
  </div>
);

export default Navigation;
