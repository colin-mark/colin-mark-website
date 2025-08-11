import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  const navigate = useNavigate();

  const scrollToPortfolio = () => {
    document.getElementById('portfolio-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    // For now, scroll to contact section or navigate to contact page
    window.location.href = '/contact';
  };

  // Featured projects data
  const featuredProjects = [
    {
      id: 'ai-product-strategy',
      title: 'AI Product Strategy Platform',
      description: 'AI-driven platform that increased decision-making speed by 40% across multiple organizations.'
    },
    {
      id: 'mobile-event-app',
      title: 'Event Management App',
      description: 'Mobile app launched across 50+ events with 95% user satisfaction and 300% engagement increase.'
    },
    {
      id: 'startup-automation',
      title: 'Operations Automation Suite',
      description: 'Automation platform that reduced operational overhead by 60% for scaling startups.'
    }
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="page-container home-page">
      {/* Hero Section - Full Width Background */}
      <div className="hero-background">
        <div className="page-content">
          <div className="hero-section">
            <h1>Hi, I'm Colin.</h1>
            
            {/* Three Column Layout with Centered Headshot */}
            <div className="hero-split">
              <div className="hero-split-item">
                <h2>AI Powered<br />Product Leader</h2>
              </div>
              <div className="hero-headshot">
                <img 
                  src="/images/portraits/Headshot_copy.png" 
                  alt="Colin Alcorn" 
                  className="hero-headshot-image"
                  onError={(e) => {
                    console.error('Failed to load headshot image');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="hero-split-item">
                <h2>&lt; Coder &gt; &amp;<br />Startup Operations Consultant</h2>
              </div>
            </div>

            {/* Tagline */}
            <div className="hero-tagline">
              <p>Turning ideas into scalable products with smart strategy, streamlined operations, AI innovation, and functional AI prototypes.</p>
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
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="portfolio-preview-item clickable"
                onClick={() => handleProjectClick(project.id)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-preview-cta">
                  <span className="view-project-text">View Details →</span>
                </div>
              </div>
            ))}
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