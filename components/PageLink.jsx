import React from 'react';
import Link from 'next/link';

import NavBarItem from './NavBarItem';

const PageLink = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
      <a href={href}>
        <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
          {children}
        </NavBarItem>
      </a>
  );
};

export default PageLink;
