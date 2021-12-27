import React from 'react';
// import NextLink from 'next/link';
// import { Box } from '@system/box';
import { Flex } from './Flex';
import { Text } from './Text';
// import { Text } from '@system/text';
// import { Link } from '@system/link';

const Navigation = () => (
  <div>
    <Flex
      as="header"
      css={{
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '5px',
        paddingRight: '5px',
        justifyContent: 'space-between',
        position: 'fixed',
        margin: '0',
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        width: '100vw',
        backdropFilter: 'blur(10px)',
        saturate: '200%',
        borderBottomWidth: '1px',

        zIndex: '9999',
      }}>
      <Text
        css={{
          fontFamily: 'sans-serif',
          fontWeight: '800',
          fontSize: '16px',
          color: '#000',
          lineHeight: '1.5',
          letterSpacing: '-0.05rem',
        }}>
        ATELIER®
      </Text>
    </Flex>
  </div>
);

export default Navigation;
