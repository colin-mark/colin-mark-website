import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Portfolio = () => {
  const navigate = useNavigate();
  const myWorkCarouselRef = useRef(null);
  const aiPrototypesCarouselRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // My Work projects
  const myWorkProjects = [
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
      id: 'cma-connect-app',
      title: 'CMA Connect App + SSO & Schedule Sharing',
      description: 'Modern mobile app with Single Sign-On and schedule sharing for CMA Fest attendees.',
      headerImage: '/images/projects/CMA App Plus Schedule Sharing.jpg'
    }
  ];

  // AI Prototypes & Personal Projects
  const aiPrototypesProjects = [
    {
      id: 'colin-mark-website',
      title: 'Personal Portfolio Website',
      description: 'Modern React-based portfolio showcasing AI-powered product leadership and development expertise.',
      headerImage: '/images/projects/Personal website screenshot.png'
    },
    {
      id: 'ai-prototype-2',
      title: 'Project 5',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      headerImage: '/images/projects/ai-prototype-2.jpg'
    },
    {
      id: 'personal-project-1',
      title: 'Project 6',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.',
      headerImage: '/images/projects/personal-project-1.jpg'
    }
  ];

  const handleProjectClick = (projectId) => {
    // Only navigate for existing projects
    if (['self-serve-platform', 'white-label-ticketing', 'cma-connect-app', 'colin-mark-website'].includes(projectId)) {
      navigate(`/project/${projectId}`);
    }
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

  const CarouselSection = ({ title, projects, carouselRef, onSeeAll }) => (
    <div className="carousel-section">
      <div className="carousel-header">
        <h2 className="carousel-title">{title}</h2>
        <button className="carousel-see-all" onClick={onSeeAll}>
          See All
        </button>
      </div>
      <div className="carousel-container">
        <button 
          className="carousel-arrow carousel-arrow-left"
          onClick={() => scrollCarousel(carouselRef, 'left')}
          aria-label="Scroll left"
        >
          ←
        </button>
        <div className="carousel-track" ref={carouselRef}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
            />
          ))}
        </div>
        <button 
          className="carousel-arrow carousel-arrow-right"
          onClick={() => scrollCarousel(carouselRef, 'right')}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );

  const handleSeeAllMyWork = () => {
    // Could navigate to a filtered view or show all projects
    console.log('See all my work');
  };

  const handleSeeAllAIPrototypes = () => {
    // Could navigate to AI prototypes section
    console.log('See all AI prototypes');
  };

  return (
    <div className="page-container portfolio-page">
      <div className="page-content">
        {/* Header */}
        <div className="page-header">
          <h1>Portfolio</h1>
          <p>Browse selected work and experiments.</p>
        </div>

        {/* My Work Carousel */}
        <CarouselSection
          title="My Work"
          projects={myWorkProjects}
          carouselRef={myWorkCarouselRef}
          onSeeAll={handleSeeAllMyWork}
        />

        {/* Spacer */}
        <div className="carousel-spacer"></div>

        {/* AI Prototypes & Personal Projects Carousel */}
        <CarouselSection
          title="AI Prototypes & Personal Projects"
          projects={aiPrototypesProjects}
          carouselRef={aiPrototypesCarouselRef}
          onSeeAll={handleSeeAllAIPrototypes}
        />

        {/* Footer note */}
        <div className="portfolio-footer">
          <p>More projects coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;