import React from 'react';
import './Pages.css';

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Portfolio</h1>
        </div>
        <div className="content-section">
          <p>Showcase your work, projects, and achievements here.</p>
          <br />
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 1</h3>
                <p>Description of your first project goes here.</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 2</h3>
                <p>Description of your second project goes here.</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 3</h3>
                <p>Description of your third project goes here.</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 4</h3>
                <p>Description of your fourth project goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;