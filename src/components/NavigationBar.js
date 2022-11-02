import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavigationStyles from './NavigationStyles.module.css';

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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="About">Emmanuel Simasiku</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink key={uuidv4()} className={`${homeLinkStyle(location.pathname)} nav-link`} to="/">
              Home
            </NavLink>
            <NavLink key={uuidv4()} className={`${aboutLinkStyle(location.pathname)} nav-link`} to="/about">
              About
            </NavLink>
            <NavLink key={uuidv4()} className={`${portfolioLinkStyle(location.pathname)} nav-link`} to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink key={uuidv4()} className={`${contactLinkStyle(location.pathname)} nav-link`} to="/contact-us">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
