import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
      © Copyright 2021 <a href="https://www.ady.world">ADY®</a>
    </p>
  </footer>
);

export default Footer;
