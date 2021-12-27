import Link from 'next/link';

import React, { useState } from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import ProfileImage from '/public/svg/profile.svg';
import { NavItem } from 'reactstrap';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const { user, isLoading } = useUser();

  return (
    <nav className="navbar fixed-top navbar-light bg-blur">
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="/">
          ATELIER DESIGN YIELD®
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="menu-icon">
            <Image src="/svg/menu.svg" alt="Menu" width={20} height={30} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link href="/open">
                <a className="nav-link" aria-expanded="false">
                  About
                </a>
              </Link>
              <Link href="#">
                <a className="nav-link" aria-expanded="false">
                  Privacy
                </a>
              </Link>
              {user && (
                <div>
                  <NavItem>
                    <PageLink
                      href="/csr"
                      className="nav-link"
                      testId="navbar-csr">
                      Client Side Render
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink
                      href="/ssr"
                      className="nav-link"
                      testId="navbar-ssr">
                      Server Side
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink
                      href="/external"
                      className="nav-link"
                      testId="navbar-external">
                      External API
                    </PageLink>
                  </NavItem>
                </div>
              )}
              {!isLoading && !user && (
                <div>
                  <NavItem>
                    <AnchorLink
                      href="/api/auth/login"
                      className="nav-link nav-link-main"
                      tabIndex={0}
                      testId="navbar-login-mobile">
                      Log in
                    </AnchorLink>
                  </NavItem>
                  <NavItem>
                    <AnchorLink
                      href="/api/signup"
                      className="nav-link nav-link-main"
                      tabIndex={0}
                      testId="navbar-login-mobile">
                      Sign Up
                    </AnchorLink>
                  </NavItem>
                  <NavItem>
                    <AnchorLink
                      href="/api/ady-login"
                      className="nav-link nav-link-main"
                      tabIndex={0}
                      testId="navbar-login-mobile">
                      ADY LOGIN
                    </AnchorLink>
                  </NavItem>
                </div>
              )}
              {user && (
                <div>
                  <NavItem>
                    <span className="user-info">
                      <Image
                        src={ProfileImage}
                        alt="Profile"
                        className="prof"
                        width={30}
                        height={30}
                        decode="async"
                        data-testid="navbar-picture-desktop"
                      />
                      <h6
                        className="d-inline-block"
                        data-testid="navbar-user-mobile">
                        {user.name}
                      </h6>
                    </span>
                  </NavItem>
                  <NavItem>
                    <PageLink
                      href="/profile"
                      icon="user"
                      testId="navbar-profile-mobile">
                      Profile
                    </PageLink>
                  </NavItem>
                  <NavItem id="qsLogoutBtn">
                    <AnchorLink
                      href="/api/auth/logout"
                      className="btn btn-link p-0"
                      icon="power-off"
                      testId="navbar-logout-mobile">
                      Log out
                    </AnchorLink>
                  </NavItem>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
