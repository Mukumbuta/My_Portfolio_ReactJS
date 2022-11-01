import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavigationStyles from './NavigationStyles.modules.css';

const NavigationBar = () => {
  const location = useLocation();

  const homeLinkStyle = (pathname) => {
    if (pathname === '/' || pathname === '/home') {
      return `${NavigationStyles.linkStyles} ${NavigationStyles.navLinkBorder}  ${NavigationStyles.active}`;
    }
    return `${NavigationStyles.linkStyles} ${NavigationStyles.navLinkBorder} `;
  };

  const portfolioLinkStyle = (pathname) => {
    if (pathname === '/portfolio') {
      return `${NavigationStyles.linkStyles} ${NavigationStyles.navLinkBorder} ${NavigationStyles.active}`;
    }
    return `${NavigationStyles.linkStyles} ${NavigationStyles.navLinkBorder}`;
  };

  const aboutLinkStyle = (pathname) => {
    if (pathname === '/about') {
      return `${NavigationStyles.linkStyles} ${NavigationStyles.navLinkBorder} ${NavigationStyles.navLinkBorder} ${NavigationStyles.active}`;
    }
    return `${NavigationStyles.linkStyles} ${NavigationStyles.navLinkBorder}`;
  };

  const contactLinkStyle = (pathname) => {
    if (pathname === '/about') {
      return `${NavigationStyles.linkStyles} ${NavigationStyles.marginLeft} ${NavigationStyles.navLinkBorder} ${NavigationStyles.active}`;
    }
    return `${NavigationStyles.linkStyles} ${NavigationStyles.marginLeft}`;
  };

  return (
    <nav className={NavigationStyles.navbar}>
      <div className={NavigationStyles.logo}>
        <h1>Emmanuel Simasiku</h1>
      </div>
      <div className={NavigationStyles.linksCont}>
        <NavLink key={uuidv4()} className={homeLinkStyle(location.pathname)} to="/">
          Home
        </NavLink>
        <NavLink key={uuidv4()} className={portfolioLinkStyle(location.pathname)} to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink key={uuidv4()} className={aboutLinkStyle(location.pathname)} to="/about">
          About
        </NavLink>
        <NavLink key={uuidv4()} className={contactLinkStyle(location.pathname)} to="/contac-us">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
