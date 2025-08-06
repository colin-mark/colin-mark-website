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
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 1</h3>
                <p>Coming soon, partner.</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 2</h3>
                <p>Coming soon, partner.</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 3</h3>
                <p>Coming soon, partner.</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">
                <h3>Project 4</h3>
                <p>Coming soon, partner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;