import React from 'react';
import CookieConsent from 'react-cookie-consent';

import { light100 } from 'stitches.config';

export const CookieBanner = () => {
  return (
    <CookieConsent
      debug={true}
      location="bottom"
      buttonText="Accept"
      cookieName="AtelierCookie001"
      style={{
        background: 'rgba(240, 240, 240, 0.5)',
        color: '#231f20',
      }}
      buttonStyle={{ backgroundColor: '#94e522', color: '#FFFFFF', fontSize: '13px', borderRadius: '6px' }}
      expires={150}>
      A Cookies Policy is used to inform your site's visitors that you're using cookies on your website, web app, or
      mobile app.
    </CookieConsent>
  );
};
