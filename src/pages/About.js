import React from 'react';
import './Pages.css';

const About = () => {
  const scrollToPortfolio = () => {
    window.location.href = '/portfolio';
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="page-container about-page">
      {/* Hero Section - Full Width Background */}
      <div className="hero-background">
        <div className="page-content">
          <div className="about-hero-section">
            <div className="about-hero-content">
              <h1>Hi, I'm Colin Alcorn.<br />I help teams turn ideas into scalable products.</h1>
              <p className="about-hero-subtitle">Product leader, technologist, and builder of tools that connect people with experiences.</p>
              <div className="about-hero-avatar">
                <div className="avatar-image">
                  <img 
                    src="/images/portraits/IMG_2105_circle_web.png" 
                    alt="Colin Alcorn" 
                    className="headshot"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="avatar-fallback" style={{display: 'none'}}>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="60" fill="#e9ecef"/>
                      <circle cx="60" cy="45" r="20" fill="#6c757d"/>
                      <path d="M20 100c0-22.091 17.909-40 40-40s40 17.909 40 40" fill="#6c757d"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Bio Section */}
        <div className="about-bio-section">
          <h2 className="section-title">Who I Am</h2>
          <div className="bio-content">
            <p>I'm a [job title / role placeholder] based in [city]. Over the last [X years], I've helped companies launch [apps / products / platforms] that reach [audience placeholder]. My work blends product strategy, operations, and hands-on technical problem solving.</p>
          </div>
        </div>
      </div>

      {/* Stats Section - Full Width Background */}
      <div className="about-stats-background">
        <div className="page-content">
          <div className="about-stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>10+ Years</h3>
                <p>in Product & Tech</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Mobile Apps & Platforms</p>
              </div>
              <div className="stat-item">
                <h3>Product Strategy</h3>
                <p>Automation, AI</p>
              </div>
              <div className="stat-item">
                <h3>Nashville, TN</h3>
                <p>(Remote Friendly)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Skills Section */}
        <div className="about-skills-section">
          <h2 className="section-title">What I Do</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Product Strategy</h3>
              <p>Helping teams plan and scale smarter</p>
            </div>
            <div className="skill-card">
              <h3>Automation & AI</h3>
              <p>Building tools that save time and unlock insights</p>
            </div>
            <div className="skill-card">
              <h3>App Development</h3>
              <p>Mobile + Web apps for events, communities, and brands</p>
            </div>
            <div className="skill-card">
              <h3>Consulting / Advisory</h3>
              <p>Helping startups turn ideas into real products</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Full Width Background */}
      <div className="about-cta-background">
        <div className="page-content">
          <div className="about-cta-section">
            <h2>Want to collaborate or see more of my work? Check out my portfolio or get in touch.</h2>
            <div className="about-cta-buttons">
              <button className="cta-button primary" onClick={scrollToPortfolio}>
                Portfolio
              </button>
              <button className="cta-button secondary" onClick={scrollToContact}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;