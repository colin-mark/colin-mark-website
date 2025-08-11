import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Pages.css';

const ProjectSummary = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Sample project data - in a real app, this would come from props, context, or API
  const sampleProjects = {
      'self-serve-platform': {
    title: 'Self-Serve Mobile App Builder Platform For Events',
    headerImage: '/images/projects/mobile_app_builder.jpeg',
      summary: 'Led the full rebuild of our mobile app platform into a scalable, self-serve app builder, transforming the way internal teams and clients create, configure, and launch mobile experiences. The new platform provided a centralized CMS with real-time previews, drag-and-drop configuration, and automated deployment pipelines. This shift reduced manual app setup time from weeks to hours, empowered clients to manage their own content and features without relying on engineering, and enabled our internal team to focus on higher-impact product innovation. It also expanded client engagement opportunities — allowing them to connect with users year-round instead of just during the single weekend their event takes place. The rebuild introduced consistent design systems, modular architecture, and robust permissions management, supporting both small events and enterprise-scale clients.',
      impact: {
        company: 'Increased product scalability, reduced cost of delivery, and positioned the platform for new revenue opportunities.',
        team: 'Freed engineering and operations from repetitive setup work, enabling focus on strategic product development.',
        clients: 'Provided immediate control over their apps, faster launch timelines, and the flexibility to adapt content in real time without dev intervention — expanding their ability to engage users year-round rather than only during the single weekend their event takes place.'
      },
      technologies: ['React & React Hooks', 'JavaScript (ES6+)', 'AWS (Cognito, AppSync, S3, CloudFront)', 'GraphQL', 'CSS3 / Flexbox / Grid', 'Netlify', 'Fastlane', 'Bitrise'],
      links: [
        { label: 'Visit Aloompa', url: 'https://aloompa.com/', type: 'external' }
      ]
    },
    'white-label-ticketing': {
      title: 'White Label Ticketing Platform (Aloompa Reservations)',
      headerImage: '/images/projects/Reservations-Examples-Image-CMS-1024x654.png',
      summary: 'Directed the development and launch of Aloompa Reservations, a fully white-labeled ticketing platform that enables clients to sell tickets directly under their own brand while integrating seamlessly with our mobile app ecosystem. The platform includes a customizable CMS for event setup, ticket management, and real-time reporting, along with a mobile-optimized ticket store and support for passwordless login using phone and email verification. The system was designed to be flexible for small events yet powerful enough for enterprise clients, supporting Apple Pay, Google Pay, and multi-device access. Deep integration with the Dragonfly CMS and mobile apps ensures clients can manage tickets, access sales analytics, and control the attendee experience from a single environment. On its first deployment, the platform successfully processed approximately 120,000 tickets for the BET Experience in 2024, demonstrating its ability to handle large-scale, high-demand events without performance degradation. This approach gave clients full control of their ticketing operations without relying on third-party branding, reduced costs compared to external ticketing providers, and unlocked additional cross-platform engagement opportunities.',
      summaryWithLinks: (
        <>
          Directed the development and launch of Aloompa Reservations, a fully white-labeled ticketing platform that enables clients to sell tickets directly under their own brand while integrating seamlessly with our mobile app ecosystem. The platform includes a customizable CMS for event setup, ticket management, and real-time reporting, along with a mobile-optimized ticket store and support for passwordless login using phone and email verification.
          <br /><br />
          The system was designed to be flexible for small events yet powerful enough for enterprise clients, supporting Apple Pay, Google Pay, and multi-device access. Deep integration with the Dragonfly CMS and mobile apps ensures clients can manage tickets, access sales analytics, and control the attendee experience from a single environment.
          <br /><br />
          On its first deployment, the platform successfully processed approximately 120,000 tickets for the <a href="https://www.bet.com/bet-experience" target="_blank" rel="noopener noreferrer" style={{color: '#4f46e5', textDecoration: 'underline'}}>BET Experience</a> in 2024, demonstrating its ability to handle large-scale, high-demand events without performance degradation.
          <br /><br />
          This approach gave clients full control of their ticketing operations without relying on third-party branding, reduced costs compared to external ticketing providers, and unlocked additional cross-platform engagement opportunities.
        </>
      ),
      impact: {
        company: 'Expanded product offering into ticketing, opening new revenue streams and increasing customer retention through platform stickiness.',
        team: 'Streamlined ticketing workflows into a single, maintainable codebase, reducing dependency on multiple third-party integrations.',
        clients: 'Delivered a branded, fully controlled ticketing experience with secure, passwordless authentication and modern payment support, empowering them to own the entire ticketing journey.'
      },
      technologies: ['React (CMS)', 'JavaScript (ES6+)', 'AWS (Cognito, AppSync, S3, CloudFront, DynamoDB, Serverless)', 'GraphQL'],
      links: [
        { label: 'Visit Aloompa Reservations', url: 'https://aloompa.com/reservations-ticketing/', type: 'external' }
      ]
    },
    'cma-connect-app': {
      title: 'CMA Connect App + SSO & Schedule Sharing',
      headerImage: '/images/projects/CMA App Plus Schedule Sharing.jpg',
      summary: 'A modern mobile app experience designed for the CMA Connect platform, integrating Single Sign-On (SSO) and innovative schedule sharing functionality. The app allows users to log in once and seamlessly access all CMA Connect features without re-authenticating across multiple services. The Schedule Sharing feature enables attendees to share their personal event schedules via short links, allowing friends to view them in a browser or subscribe directly within the app. The project emphasized secure authentication, seamless user experience, and scalable backend architecture, while delivering a visually engaging and user-friendly interface for CMA Fest attendees.',
      technologies: ['Flutter', 'AWS Cognito', 'GraphQL', 'React', 'Firebase', 'Google Cloud'],
      links: [
        { label: 'Download on App Store', url: 'https://apps.apple.com/us/app/cma-connect/id6448734637', type: 'external' },
        { label: 'Learn More About CMA Fest', url: 'https://cmafest.com/', type: 'external' }
      ]
    },
    'mobile-event-app': {
      title: 'Project 2',
      headerImage: '/images/projects/event-app-header.jpg',
      summary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      links: [
        { label: 'View App Store', url: 'https://apps.apple.com/app/example', type: 'external' },
        { label: 'View Google Play', url: 'https://play.google.com/store/apps/example', type: 'external' },
        { label: 'Product Demo', url: '/demo/event-app', type: 'internal' }
      ]
    },
    'startup-automation': {
      title: 'Project 3',
      headerImage: '/images/projects/automation-header.jpg',
      summary: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      technologies: ['Next.js', 'TypeScript', 'Postgres', 'Zapier API'],
      links: [
        { label: 'View Platform', url: 'https://automation-platform.com', type: 'external' },
        { label: 'Technical Documentation', url: '/docs/automation-suite', type: 'internal' },
        { label: 'Client Testimonials', url: '/testimonials/automation', type: 'internal' }
      ]
    },
    'colin-mark-website': {
      title: 'Personal Portfolio Website',
      headerImage: '/images/projects/Personal website screenshot.png',
      summary: 'A modern, responsive portfolio website built with React to showcase AI-powered product leadership and development expertise. The site features a clean, professional design with interactive carousels, responsive navigation, and optimized performance. Built as a demonstration of modern web development practices including component-based architecture, CSS Grid/Flexbox layouts, and mobile-first responsive design. The website serves as both a portfolio showcase and a testament to technical capabilities in frontend development.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Netlify'],
      links: [
        { label: 'Visit Live Site', url: 'https://www.colin-mark.com/', type: 'external' },
        { label: 'View GitHub Repository', url: 'https://github.com/colin-mark/colin-mark-website', type: 'external' },
        { label: 'View Source Code', url: 'https://github.com/colin-mark/colin-mark-website/tree/main/src', type: 'external' }
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
      {/* Header Image Section with Floating Back Button */}
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
          {/* Floating Back Navigation */}
          <div className="project-back-nav-floating">
                      <button className="back-button-floating" onClick={handleBack}>
            ← Go Back
          </button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content-section">
        <div className="page-content">
          
          {/* Project Title */}
          <div className="project-title-section">
            <h1 className="project-title">{project.title}</h1>
          </div>
          
          {/* Summary Section */}
          <div className="project-summary-section">
            <h2 className="section-title">Project Overview</h2>
            <div className="project-summary-content">
              {project.summaryWithLinks ? (
                <div className="project-summary-text">{project.summaryWithLinks}</div>
              ) : (
                <p className="project-summary-text">{project.summary}</p>
              )}
            </div>
          </div>

          {/* Impact Section - Only for projects that have impact data */}
          {project.impact && (
            <div className="project-impact-section">
              <h2 className="section-title">Impact</h2>
              <div className="impact-content">
                <div className="impact-item">
                  <h4 className="impact-category">For the Company:</h4>
                  <p className="impact-text">{project.impact.company}</p>
                </div>
                <div className="impact-item">
                  <h4 className="impact-category">For the Internal Team:</h4>
                  <p className="impact-text">{project.impact.team}</p>
                </div>
                <div className="impact-item">
                  <h4 className="impact-category">For Clients:</h4>
                  <p className="impact-text">{project.impact.clients}</p>
                </div>
              </div>
            </div>
          )}

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
