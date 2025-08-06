import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo section */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <div className="logo-placeholder">CM</div>
          </Link>
        </div>

        {/* Navigation tabs */}
        <div className="nav-tabs">
          <Link 
            to="/" 
            className={`nav-tab ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-tab ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-tab ${location.pathname === '/portfolio' ? 'active' : ''}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={`nav-tab ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Social media icons */}
        <div className="nav-social">
          <a 
            href="https://www.linkedin.com/in/colinalcorn/" 
            className="social-icon" 
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://www.instagram.com/colin_mark/" 
            className="social-icon" 
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;