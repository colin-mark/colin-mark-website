import React from 'react';
import './Pages.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Contact Me</h1>
        </div>
        <div className="content-section">
          <p>Get in touch with me through any of the following methods:</p>
          <br />
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Your City, State</p>
            </div>
          </div>
          <br />
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your message here..." rows="5"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;