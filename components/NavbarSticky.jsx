import NextLink from 'next/link';
import { Box } from './Box';
import { Flex } from './Flex';
import { Link } from './Link';
import { ArrowRightIcon } from '@radix-ui/react-icons';


import Image from 'next/image';



export const NavbarSticky = () => {
  return (
    <Flex
      as="header"
      css={{
        py: '$3',
        px: '5px',
        jc: 'space-between',
        position: 'relative',
        m: '0',
        zIndex: '100',
        bc: 'transparent',
        width: '100vw'
      }}>
      {/* LOGO SECTION */}
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            ml: '$2',
            color: 'transparent',
            display: 'inline-flex',
            textDecoration: 'none',
            '&:focus': {
              boxShadow: 'none'
            },
            '@bp2': { ml: '$2' }
          }}>
          <Image className="logo" alt="logo" src="/butterfly_logo.svg" width={90} height={18} />
        </Box>
      </NextLink>

      {/* NAVIGATION SECTION */}
      <Flex as="nav" css={{ ai: 'center', px: '0px' }}>

        <NextLink href="/shop" passHref>
          <Link variant="subtle" css={{ mr: '$3', '@bp2': { mr: '$5' } }}>
            Shop <ArrowRightIcon />
          </Link>
        </NextLink>

        <NextLink href="https://docs.ady.world" passHref>
          <Link variant="subtle" css={{ display: 'none', mr: '$3', '@bp2': { display: 'block', mr: '$3' } }}>
            Documentaion
          </Link>
        </NextLink>

        <NextLink href="https://api.ady.world" passHref>
          <Link variant="subtle" css={{ display: 'none', mr: '$3', '@bp2': { display: 'block', mr: '$3' } }}>
            Resources
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};
