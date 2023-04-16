import React from 'react';
import './Styles/Footer.css'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-icons">
        <a href="https://www.facebook.com/"><FaFacebook className="footer-icon" /></a>
        <a href="https://wa.me/+923318667755"><FaWhatsapp target="_blank" rel="noopener noreferrer" className="header-icon" /></a>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Queen's Palace Marquee. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;