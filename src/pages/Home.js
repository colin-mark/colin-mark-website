import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      id: 'self-serve-platform',
      title: 'Self-Serve Mobile App Builder Platform For Events',
      description: 'Led the full rebuild of our mobile app platform into a scalable, self-serve app builder for clients.',
      headerImage: '/images/projects/mobile_app_builder.jpeg'
    },
    {
      id: 'white-label-ticketing',
      title: 'White Label Ticketing Platform (Aloompa Reservations)',
      description: 'Fully white-labeled ticketing platform enabling clients to sell tickets under their own brand.',
      headerImage: '/images/projects/Reservations-Examples-Image-CMS-1024x654.png'
    },
    {
      id: 'colin-mark-website',
      title: 'Personal Portfolio Website',
      description: 'Modern React-based portfolio showcasing AI-powered product leadership and development expertise.',
      headerImage: '/images/projects/Personal website screenshot.png'
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
                className="portfolio-card clickable"
                onClick={() => handleProjectClick(project.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="portfolio-card-image">
                  <img 
                    src={project.headerImage} 
                    alt={project.title}
                    onError={(e) => {
                      // Fallback to a placeholder color block
                      e.target.style.display = 'none';
                      e.target.parentNode.style.backgroundColor = '#f3f4f6';
                    }}
                  />
                </div>
                <div className="portfolio-card-body">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-description">{project.description}</p>
                  <div className="portfolio-card-cta">
                    <span>View Details →</span>
                  </div>
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