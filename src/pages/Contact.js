import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './Pages.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaCompleted(!!token);
  };

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
    
    // Add reCAPTCHA token
    if (recaptchaToken) {
      formData.append('g-recaptcha-response', recaptchaToken);
    }

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
        // Simulate form submission in development
        console.log('Form submission simulated in development:', Object.fromEntries(formData));
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        navigate('/success');
      } else {
        // Production submission
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

  const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';
  const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Contact Me</h1>
        </div>
        <div className="content-section">
          <div className="contact-form">
            {/* Development notice */}
            {isDevelopment && (
              <div className="dev-notice" style={{ 
                padding: '1rem', 
                marginBottom: '1rem', 
                backgroundColor: '#e7f3ff', 
                color: '#0066cc', 
                border: '1px solid #b3d4fc',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                <strong>Development Mode:</strong> Form submission will be simulated. 
                reCAPTCHA {recaptchaSiteKey ? 'is configured' : 'site key not found'}. 
                On production, this will submit to Netlify.
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
              
              {/* Honeypot field - hidden from users */}
              <div style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
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

              {/* reCAPTCHA - only show if site key is available */}
              {recaptchaSiteKey && !isDevelopment && (
                <div className="form-group">
                  <label>Please verify you're human:</label>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    onChange={handleRecaptchaChange}
                    style={{ marginTop: '0.5rem' }}
                  />
                </div>
              )}

              {/* Development reCAPTCHA simulator */}
              {isDevelopment && (
                <div className="form-group">
                  <label>reCAPTCHA (Development Mode):</label>
                  <div style={{ 
                    padding: '1rem', 
                    backgroundColor: '#f8f9fa', 
                    border: '1px solid #dee2e6',
                    borderRadius: '4px',
                    marginTop: '0.5rem'
                  }}>
                    <button 
                      type="button"
                      onClick={() => setRecaptchaCompleted(!recaptchaCompleted)}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: recaptchaCompleted ? '#28a745' : '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      {recaptchaCompleted ? '✓ reCAPTCHA Completed' : 'Simulate reCAPTCHA Complete'}
                    </button>
                  </div>
                </div>
              )}

              {/* Show missing site key warning */}
              {!recaptchaSiteKey && !isDevelopment && (
                <div style={{ 
                  padding: '1rem', 
                  marginBottom: '1rem', 
                  backgroundColor: '#fff3cd', 
                  color: '#856404', 
                  border: '1px solid #ffeaa7',
                  borderRadius: '4px'
                }}>
                  <strong>Warning:</strong> reCAPTCHA site key not found. Please set REACT_APP_RECAPTCHA_SITE_KEY environment variable.
                </div>
              )}
              
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting || (!isDevelopment && !recaptchaCompleted)}
                style={{
                  opacity: (isSubmitting || (!isDevelopment && !recaptchaCompleted)) ? 0.6 : 1,
                  cursor: (isSubmitting || (!isDevelopment && !recaptchaCompleted)) ? 'not-allowed' : 'pointer',
                  padding: '12px 24px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
              >
                {isSubmitting ? 'Sending...' : 
                 (!isDevelopment && !recaptchaCompleted) ? 'Confirm You\'re Human to Send' : 
                 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;