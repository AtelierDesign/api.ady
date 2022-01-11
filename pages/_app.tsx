import React from 'react';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

// STITCHES.DEV
import { css, globalCss } from '../stitches.config';
import { reset } from '@styles/reset';
import { Box, box } from '@atelier/box';

// PROGRESS LOADER
import NextNprogress from 'nextjs-progressbar';
import { CookieBanner } from '@components/Functions/CookieBanner';

// MAIN STYLE IMPORTS
import '@styles/inter.css';
import '@styles/jetbrains.css';
import '@styles/neue-plak.css';
import '@styles/neue-wide.css';
import '../styles.css';

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

export default function App({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  const { user } = pageProps;

  // STITCHES STYLE RESET
  globalCss(reset, {
    body: {
      backgroundColor: '$slate1',
      fontFamily: '$inter',
    },
  });

  return (
    <UserProvider user={user}>
      <Box css={{ backgroundColor: '$slate1' }}>
        <CookieBanner />
        <div
          className={appWrapper({
            display: 'flex',
            flexDirection: 'column',
          })}>
          <div className={box({ flex: 1 })}>
            <NextNprogress
              color="linear-gradient(to right, #b5bdc8 0%,#828c95 36%,#28343b 100%)"
              startPosition={0.3}
              stopDelayMs={300}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </div>
        </div>
      </Box>
    </UserProvider>
  );
}
