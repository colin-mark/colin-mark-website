import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Pages.css';

const ProjectSummary = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Sample project data - in a real app, this would come from props, context, or API
  const sampleProjects = {
    'ai-product-strategy': {
      title: 'AI-Powered Product Strategy Platform',
      headerImage: '/images/projects/ai-strategy-header.jpg',
      summary: 'Developed a comprehensive AI-driven platform that helps product teams prioritize features, predict market trends, and optimize roadmaps. The platform increased decision-making speed by 40% and improved feature success rates by 65% across multiple client organizations.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      links: [
        { label: 'View Live Project', url: 'https://example.com/project', type: 'external' },
        { label: 'View on GitHub', url: 'https://github.com/username/project', type: 'external' },
        { label: 'Read Case Study', url: '/case-study/ai-strategy', type: 'internal' }
      ]
    },
    'mobile-event-app': {
      title: 'Event Management Mobile App',
      headerImage: '/images/projects/event-app-header.jpg',
      summary: 'Led the product development of a comprehensive event management mobile application that streamlined attendee check-ins, networking, and real-time engagement. Launched across 50+ events with 95% user satisfaction and 300% increase in attendee engagement.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      links: [
        { label: 'View App Store', url: 'https://apps.apple.com/app/example', type: 'external' },
        { label: 'View Google Play', url: 'https://play.google.com/store/apps/example', type: 'external' },
        { label: 'Product Demo', url: '/demo/event-app', type: 'internal' }
      ]
    },
    'startup-automation': {
      title: 'Startup Operations Automation Suite',
      headerImage: '/images/projects/automation-header.jpg',
      summary: 'Created an integrated automation platform that streamlines startup operations from customer onboarding to financial reporting. Reduced operational overhead by 60% and enabled teams to scale from 10 to 100+ customers without additional operational staff.',
      technologies: ['Next.js', 'TypeScript', 'Postgres', 'Zapier API'],
      links: [
        { label: 'View Platform', url: 'https://automation-platform.com', type: 'external' },
        { label: 'Technical Documentation', url: '/docs/automation-suite', type: 'internal' },
        { label: 'Client Testimonials', url: '/testimonials/automation', type: 'internal' }
      ]
    }
  };

  const project = sampleProjects[projectId];

  // Handle back navigation
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  // If project doesn't exist, show not found
  if (!project) {
    return (
      <div className="page-container">
        <div className="page-content">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <button className="cta-button primary" onClick={handleBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container project-summary-page">
      {/* Back Navigation */}
      <div className="project-back-nav">
        <div className="page-content">
          <button className="back-button" onClick={handleBack}>
            ← Back to Portfolio
          </button>
        </div>
      </div>

      {/* Header Image Section */}
      <div className="project-header-section">
        <div className="project-header-image-container">
          <img 
            src={project.headerImage} 
            alt={`${project.title} header`} 
            className="project-header-image"
            onError={(e) => {
              // Fallback to a placeholder or default image
              e.target.src = '/images/projects/default-project-header.jpg';
            }}
          />
          <div className="project-header-overlay">
            <div className="page-content">
              <h1 className="project-header-title">{project.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content-section">
        <div className="page-content">
          
          {/* Summary Section */}
          <div className="project-summary-section">
            <h2 className="section-title">Project Overview</h2>
            <div className="project-summary-content">
              <p className="project-summary-text">{project.summary}</p>
            </div>
          </div>

          {/* Technologies Section */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies-section">
              <h3 className="subsection-title">Technologies Used</h3>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links Section */}
          <div className="project-links-section">
            <h3 className="subsection-title">Project Links</h3>
            <div className="project-links-grid">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="project-link-item"
                  target={link.type === 'external' ? '_blank' : '_self'}
                  rel={link.type === 'external' ? 'noopener noreferrer' : ''}
                >
                  <span className="project-link-label">{link.label}</span>
                  {link.type === 'external' && (
                    <span className="external-link-icon">↗</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="project-cta-section">
            <h3>Interested in similar work?</h3>
            <div className="project-cta-buttons">
              <button 
                className="cta-button primary" 
                onClick={() => navigate('/portfolio')}
              >
                View More Projects
              </button>
              <button 
                className="cta-button secondary" 
                onClick={() => navigate('/contact')}
              >
                Let's Work Together
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
