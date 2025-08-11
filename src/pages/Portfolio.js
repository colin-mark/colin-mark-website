import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Portfolio = () => {
  const navigate = useNavigate();

  // Sample project data that matches ProjectSummary component
  const projects = [
    {
      id: 'ai-product-strategy',
      title: 'AI-Powered Product Strategy Platform',
      description: 'Comprehensive AI-driven platform for product teams to prioritize features and optimize roadmaps.'
    },
    {
      id: 'mobile-event-app',
      title: 'Event Management Mobile App',
      description: 'Full-featured mobile application for event management with real-time engagement features.'
    },
    {
      id: 'startup-automation',
      title: 'Startup Operations Automation Suite',
      description: 'Integrated automation platform that streamlines startup operations from onboarding to reporting.'
    },
    {
      id: 'coming-soon-1',
      title: 'E-commerce Analytics Dashboard',
      description: 'Coming soon - Advanced analytics platform for e-commerce optimization.',
      comingSoon: true
    }
  ];

  const handleProjectClick = (projectId) => {
    if (projectId.startsWith('coming-soon')) {
      // For coming soon projects, don't navigate
      return;
    }
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Portfolio</h1>
          <p>A selection of projects showcasing product strategy, development, and automation expertise.</p>
        </div>
        <div className="content-section">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`portfolio-item ${project.comingSoon ? 'coming-soon' : 'clickable'}`}
                onClick={() => handleProjectClick(project.id)}
                style={{ cursor: project.comingSoon ? 'default' : 'pointer' }}
              >
                <div className="portfolio-placeholder">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {!project.comingSoon && (
                    <div className="portfolio-cta">
                      <span className="view-project-text">View Project →</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;