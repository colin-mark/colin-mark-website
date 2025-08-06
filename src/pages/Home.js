import React from 'react';
import './Pages.css';

const Home = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    // For now, scroll to contact section or navigate to contact page
    window.location.href = '/contact';
  };

  return (
    <div className="page-container home-page">
      {/* Hero Section - Full Width Background */}
      <div className="hero-background">
        <div className="page-content">
          <div className="hero-section">
            <h1>Howdy, I'm Colin.</h1>
            
            {/* Split Layout */}
            <div className="hero-split">
              <div className="hero-split-item">
                <h2>Product & Operations Consultant</h2>
              </div>
              <div className="hero-split-item">
                <h2>&lt; Coder &amp; AI Innovator &gt;</h2>
              </div>
            </div>

            {/* Tagline */}
            <div className="hero-tagline">
              <p>Helping teams take products from 0 to infinity, scaling smarter through product strategy, automation, AI, and fully functional AI prototypes.</p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-ctas">
              <button className="cta-button primary" onClick={scrollToPortfolio}>
                View My Work
              </button>
              <button className="cta-button secondary" onClick={scrollToContact}>
                Work With Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Featured Work / Portfolio Preview */}
        <div id="portfolio-preview" className="portfolio-preview-section">
          <h2 className="section-title">Featured Work</h2>
          <div className="portfolio-preview-grid">
            <div className="portfolio-preview-item">
              <h3>Project Name</h3>
              <p>Brief project summary</p>
            </div>
            <div className="portfolio-preview-item">
              <h3>Project Name</h3>
              <p>Brief project summary</p>
            </div>
            <div className="portfolio-preview-item">
              <h3>Project Name</h3>
              <p>Brief project summary</p>
            </div>
          </div>
          <div className="portfolio-preview-cta">
            <button className="cta-button secondary" onClick={() => window.location.href = '/portfolio'}>
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;