import React from 'react';
import './Styles/Header.css'
import logo from '../images/frontDesk.JPG';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="marquee-logo" />
      </div>
      <div className="header-marquee-name">
        <h1>Queen's Palace Marquee</h1>
      </div>
      <div className="header-social-icons">
        <a href="https://www.facebook.com/queenspalacemarquee/" target="_blank" rel="noopener noreferrer"><FaFacebook className="header-icon" /></a>
        <a href="https://wa.me/+923318667755"><FaWhatsapp target="_blank" rel="noopener noreferrer" className="header-icon" /></a>
      </div>
    </header>
  );
}

export default Header;
