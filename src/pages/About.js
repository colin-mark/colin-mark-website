import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>About Me</h1>
        </div>
        <div className="content-section">
          <p>This is the About page. Here you can share your background, experience, and what makes you unique.</p>
          <br />
          <p>Add your personal story, professional journey, skills, and interests here.</p>
          <br />
          <div className="placeholder-content">
            <h3>Background</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <h3>Skills</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h3>Interests</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;