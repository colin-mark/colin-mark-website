import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>&copy; 2025 Colin Alcorn</p>
        </div>
        <nav className="footer-nav">
          <Link to="/about" className="footer-link">about</Link>
          <Link to="/portfolio" className="footer-link">portfolio</Link>
          <Link to="/contact" className="footer-link">contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
