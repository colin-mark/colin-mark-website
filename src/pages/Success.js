import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Success = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Thank You!</h1>
        </div>
        <div className="content-section">
          <div className="success-content" style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '8px',
            margin: '2rem 0'
          }}>
            <h2 style={{ color: '#155724', marginBottom: '1rem' }}>
              Message Sent Successfully!
            </h2>
            <p style={{ color: '#155724', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Thank you for reaching out. I've received your message and will get back to you as soon as possible.
            </p>
            <Link 
              to="/" 
              className="submit-btn" 
              style={{
                textDecoration: 'none',
                display: 'inline-block',
                padding: '0.75rem 2rem'
              }}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;