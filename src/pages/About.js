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
            <div className="about-hero-wrapper">
              <div className="about-hero-media">
                <img 
                  src="/images/portraits/Headshot_copy.png" 
                  alt="Portrait of Colin Alcorn" 
                  className="about-hero-image"
                />
              </div>
              <div className="about-hero-copy">
                <h1 className="about-hero-title">who i am.</h1>
                <p className="about-hero-lede">I'm a product leader with 12+ years in SaaS, mobile and web apps, and generative AI. I help teams — from startups to enterprise — take products from concept to launch, create go-to-market strategies, and build systems that scale. As Group Product Manager at WMT Digital, I lead multi-product roadmaps, mentor product teams, prototype with AI, and deliver features that drive personalization, retention, and engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Highlights / Stats Section - White Background */}
      <div className="about-section-white">
        <div className="page-content">
          <div className="about-stats-section">
            <h2 className="section-title">Experience at a glance.</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>12+ Years</h3>
                <p>Product & Tech</p>
              </div>
              <div className="stat-item">
                <h3>50+ Launches</h3>
                <p>Mobile apps & web platforms</p>
              </div>
              <div className="stat-item">
                <h3>AI & Automation</h3>
                <p>Strategy + prototyping</p>
              </div>
              <div className="stat-item">
                <h3>Nashville, TN</h3>
                <p>Remote friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What I Do Section - Gray Background */}
      <div className="about-section-gray">
        <div className="page-content">
          <div className="about-skills-section">
            <h2 className="section-title">What I Do</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Product Strategy</h3>
                <p>Roadmaps, prioritization, and measurable outcomes</p>
              </div>
              <div className="skill-card">
                <h3>Automation & AI</h3>
                <p>Prototypes, internal tooling, and workflow acceleration</p>
              </div>
              <div className="skill-card">
                <h3>App Development</h3>
                <p>Mobile + web products for events, brands, and communities</p>
              </div>
              <div className="skill-card">
                <h3>Consulting & Advisory</h3>
                <p>Startup coaching from concept to GTM and scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Breakdown Section - White Background */}
      <div className="about-section-white">
        <div className="page-content">
          <div className="about-skills-breakdown-section">
            <h2 className="section-title">My Skills at a Glance</h2>
            <p className="section-subtitle">Where I spend my time and create the most value.</p>
            <div className="skills-chart">
              <div className="skill-bar">
                <div className="skill-label">
                  <span className="skill-name">Skill 1</span>
                  <span className="skill-percentage">XX%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-label">
                  <span className="skill-name">Skill 2</span>
                  <span className="skill-percentage">XX%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-label">
                  <span className="skill-name">Skill 3</span>
                  <span className="skill-percentage">XX%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-label">
                  <span className="skill-name">Skill 4</span>
                  <span className="skill-percentage">XX%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" style={{width: '55%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-label">
                  <span className="skill-name">Skill 5</span>
                  <span className="skill-percentage">XX%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
            <div className="skills-text-list">
              <p><strong>Accessibility note:</strong> Skills breakdown - Skill 1 (XX%), Skill 2 (XX%), Skill 3 (XX%), Skill 4 (XX%), Skill 5 (XX%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Snapshot Section - Gray Background */}
      <div className="about-section-gray">
        <div className="page-content">
          <div className="about-personal-section">
            <h2 className="section-title">Outside of Work</h2>
            <p className="section-subtitle">A few things I'm into when I'm not shipping products.</p>
            <div className="personal-content">
              <div className="personal-hobbies">
                <ul className="hobbies-list">
                  <li>Running (7 Bridges Half alum; mix of trails & strength training)</li>
                  <li>Building/DIY (shop projects, truck & boat tinkering)</li>
                  <li>Boating & the outdoors (lakes, duck season, early mornings)</li>
                  <li>Traveling with our black Lab (patio expert and co-pilot)</li>
                  <li>Family farm time in Iowa (perfect base for road trips)</li>
                </ul>
              </div>
                          <div className="personal-photos">
              <div className="photo-grid">
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753970035.jpg', '_blank')}>
                  <img src="/images/Photos/250626000753970035.jpg" alt="Personal photo 1" className="personal-photo" />
                </div>
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753960007.jpg', '_blank')}>
                  <img src="/images/Photos/250626000753960007.jpg" alt="Personal photo 2" className="personal-photo" />
                </div>
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753970037.JPG', '_blank')}>
                  <img src="/images/Photos/250626000753970037.JPG" alt="Personal photo 3" className="personal-photo" />
                </div>
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753970071.JPG', '_blank')}>
                  <img src="/images/Photos/250626000753970071.JPG" alt="Personal photo 4" className="personal-photo" />
                </div>
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753960002.jpg', '_blank')}>
                  <img src="/images/Photos/250626000753960002.jpg" alt="Personal photo 5" className="personal-photo" />
                </div>
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753960011.jpg', '_blank')}>
                  <img src="/images/Photos/250626000753960011.jpg" alt="Personal photo 6" className="personal-photo" />
                </div>
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753960017.jpg', '_blank')}>
                  <img src="/images/Photos/250626000753960017.jpg" alt="Personal photo 7" className="personal-photo" />
                </div>
                <div className="photo-item" onClick={() => window.open('/images/Photos/250626000753970006.JPG', '_blank')}>
                  <img src="/images/Photos/250626000753970006.JPG" alt="Personal photo 8" className="personal-photo" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - White Background */}
      <div className="about-section-white">
        <div className="page-content">
          <div className="about-cta-section">
            <h2>Want to collaborate or see more of my work?</h2>
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