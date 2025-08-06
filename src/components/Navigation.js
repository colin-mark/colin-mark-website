import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo section */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img 
              src="/images/icons/icon_black_light_background.png" 
              alt="CMA Logo" 
              className="logo-image"
            />
          </Link>
        </div>

        {/* Navigation tabs - Desktop */}
        <div className="nav-tabs desktop-nav">
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

        {/* Hamburger Menu Button - Mobile */}
        <button 
          className="hamburger-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

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
          <a 
            href="https://github.com/colin-mark" 
            className="social-icon" 
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          <Link 
            to="/" 
            className={`mobile-nav-tab ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`mobile-nav-tab ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            to="/portfolio" 
            className={`mobile-nav-tab ${location.pathname === '/portfolio' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-nav-tab ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          
          {/* Social media icons in mobile menu */}
          <div className="mobile-nav-social">
            <a 
              href="https://www.linkedin.com/in/colinalcorn/" 
              className="mobile-social-icon" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/colin_mark/" 
              className="mobile-social-icon" 
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://github.com/colin-mark" 
              className="mobile-social-icon" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;