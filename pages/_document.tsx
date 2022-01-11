import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class CustomDocument extends Document<unknown> {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="amphtml" href="https://ady.world/" />
          <link rel="canonical" href="https://api.ady.world/" />
          <meta name="googlebot" content="follow, index, noarchive" />
          <meta name="robots" content="follow, index, noarchive" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="description" content="East Coast based design label." />

          <meta property="og:title" content="Atelier Design Yield®" />
          <meta property="og:url" content="https://api.ady.world/" />
          <meta property="og:image" content="https://cdn.ady.systems/assets/social.jpg" />
          <meta property="og:image:secure_url" content="https://cdn.ady.systems/assets/social.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1600" />
          <meta property="og:image:height" content="900" />
          <meta property="og:image:alt" content="Social Share Image with Logo" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#F2F2F2" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@_adyworld" />
          <meta name="twitter:site" content="@_adyworld" />
          <meta property="og:locale" content="en_us" />
          <meta property="og:site_name" content="Atelier" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://api.ady.world/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
