import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class CustomDocument extends Document<unknown> {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
