import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  const navigate = useNavigate();
  const featuredWorkCarouselRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Scroll to top and trigger animations when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Show content after hero animation completes (1.5s total)
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1600);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
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

  const scrollCarousel = (carouselRef, direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = 320; // Card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const ProjectCard = ({ project, onClick }) => (
    <div 
      className="portfolio-card"
      onClick={() => onClick(project.id)}
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
  );

  return (
    <div className="page-container home-page">
      {/* Hero Section - Full Width Background */}
      <div className="hero-background">
        <div className="page-content">
          <div className="hero-section">
            <h1 className={`${isLoaded ? 'fade-in-down' : 'fade-start-down'}`}>Hi, I'm Colin.</h1>
            
            {/* Three Column Layout with Centered Headshot */}
            <div className="hero-split">
              <div className={`hero-split-item ${isLoaded ? 'slide-in-left' : 'slide-start-left'}`}>
                <h2>AI Powered<br />Product Leader</h2>
              </div>
              <div className={`hero-headshot ${isLoaded ? 'slide-in-up' : 'slide-start-up'}`}>
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
              <div className={`hero-split-item ${isLoaded ? 'slide-in-right' : 'slide-start-right'}`}>
                <h2>&lt; Coder &gt; &amp;<br />Startup Operations Consultant</h2>
              </div>
            </div>

            {/* Tagline */}
            <div className={`hero-tagline ${isLoaded ? 'fade-in-up' : 'fade-start-up'}`}>
              <p>Turning ideas into scalable products with smart strategy, streamlined operations, AI innovation, and functional AI prototypes.</p>
            </div>

            {/* CTA Buttons */}
            <div className={`hero-ctas ${isLoaded ? 'fade-in-up-staggered' : 'fade-start-up'}`}>
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
        <div id="portfolio-preview" className={`portfolio-preview-section ${showContent ? 'content-fade-in' : 'content-hidden'}`}>
          <h2 className="section-title">Featured Work</h2>
          
          {/* Desktop Grid Layout */}
          <div className="portfolio-preview-grid desktop-only">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={handleProjectClick}
              />
            ))}
          </div>

          {/* Mobile Carousel Layout */}
          <div className="mobile-only">
            <div className="carousel-container">
              <button 
                className="carousel-arrow carousel-arrow-left"
                onClick={() => scrollCarousel(featuredWorkCarouselRef, 'left')}
                aria-label="Scroll left"
              >
                ←
              </button>
              <div className="carousel-track" ref={featuredWorkCarouselRef}>
                {featuredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={handleProjectClick}
                  />
                ))}
              </div>
              <button 
                className="carousel-arrow carousel-arrow-right"
                onClick={() => scrollCarousel(featuredWorkCarouselRef, 'right')}
                aria-label="Scroll right"
              >
                →
              </button>
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