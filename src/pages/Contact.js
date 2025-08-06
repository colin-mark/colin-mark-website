import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're in development or production
    const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';
    
    if (!isDevelopment) {
      // In production, set up reCAPTCHA callbacks
      window.netlifyRecaptchaCallback = () => {
        setRecaptchaCompleted(true);
      };
      
      window.netlifyRecaptchaExpiredCallback = () => {
        setRecaptchaCompleted(false);
      };
      
      setRecaptchaLoaded(true);
    } else {
      // In development, always allow submission
      setRecaptchaCompleted(true);
      setRecaptchaLoaded(true);
    }
    
    return () => {
      // Cleanup
      if (window.netlifyRecaptchaCallback) {
        delete window.netlifyRecaptchaCallback;
      }
      if (window.netlifyRecaptchaExpiredCallback) {
        delete window.netlifyRecaptchaExpiredCallback;
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);
    
    // Check honeypot field - if filled, it's likely a bot
    if (formData.get('bot-field')) {
      console.log('Bot detected via honeypot field');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    // Add the form-name field required by Netlify
    formData.append('form-name', 'contact');

    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

    // In production, check if reCAPTCHA is completed
    if (!isDevelopment && !recaptchaCompleted) {
      setSubmitStatus('recaptcha-required');
      setIsSubmitting(false);
      return;
    }

    try {
      if (isDevelopment) {
        // In development, simulate successful submission
        console.log('Development mode: Simulating form submission');
        console.log('Form data:', Object.fromEntries(formData));
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Redirect to success page
        navigate('/success');
      } else {
        // In production, submit to Netlify
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
          // Redirect to success page
          navigate('/success');
        } else {
          setSubmitStatus('error');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Contact Me</h1>
        </div>
        <div className="content-section">
          <div className="contact-form">
            {(process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost') && (
              <div className="dev-notice" style={{ 
                padding: '1rem', 
                marginBottom: '1rem', 
                backgroundColor: '#d1ecf1', 
                color: '#0c5460', 
                border: '1px solid #bee5eb',
                borderRadius: '4px'
              }}>
                <strong>Development Mode:</strong> Form submissions are simulated locally. Deploy to Netlify to test real form submissions.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message" style={{ 
                padding: '1rem', 
                marginBottom: '1rem', 
                backgroundColor: '#f8d7da', 
                color: '#721c24', 
                border: '1px solid #f5c6cb',
                borderRadius: '4px'
              }}>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            {submitStatus === 'recaptcha-required' && (
              <div className="error-message" style={{ 
                padding: '1rem', 
                marginBottom: '1rem', 
                backgroundColor: '#f8d7da', 
                color: '#721c24', 
                border: '1px solid #f5c6cb',
                borderRadius: '4px'
              }}>
                Please complete the reCAPTCHA verification before submitting.
              </div>
            )}
            
            <form name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field - hidden from users but visible to bots */}
              <div style={{ display: 'none' }}>
                <label htmlFor="bot-field">Don't fill this out if you're human:</label>
                <input type="text" id="bot-field" name="bot-field" />
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (Optional):</label>
                <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your message here..." rows="5" required></textarea>
              </div>
              
              {/* reCAPTCHA (only shown in production) */}
              {(process.env.NODE_ENV !== 'development' && window.location.hostname !== 'localhost') && (
                <div className="form-group">
                  <div data-netlify-recaptcha="true"></div>
                </div>
              )}
              
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting || !recaptchaCompleted}
                style={{
                  opacity: (!recaptchaCompleted || isSubmitting) ? 0.6 : 1,
                  cursor: (!recaptchaCompleted || isSubmitting) ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 
                 !recaptchaCompleted && process.env.NODE_ENV !== 'development' && window.location.hostname !== 'localhost' 
                   ? 'Complete reCAPTCHA to Send' 
                   : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;