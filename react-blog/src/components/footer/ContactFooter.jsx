import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // ADDED: EmailJS import
import './ContactFooter.css';

const ContactFooter = () => {
  const [form, setForm] = useState({ name: '', email: '', number: '', subject: '', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // ADDED: Loading state
  const [submitStatus, setSubmitStatus] = useState(null);  // ADDED: Success/Error state

  // ADDED: The EmailJS submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- YOUR EMAILJS CREDENTIALS GO HERE ---
    const serviceId = 'service_ptp00mj';   // Replace with your actual Service ID
    const templateId = 'template_qyz48f5'; // Replace with your Template ID
    const publicKey = 'vybU9N6EzcXEYNz7R';   // Replace with your Public Key
    // ----------------------------------------

    // Map your React state to the EmailJS template variables
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone_number: form.number,
      subject: form.subject,
      message: form.msg,
    };

    // Send the email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Clear the form after sending
        setForm({ name: '', email: '', number: '', subject: '', msg: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="dk-contact-footer-wrapper">
      <section id="contact" className="dk-contact-section">
        <div className="dk-contact-container">
          
          {/* Isolated Top Header Row */}
          <div className="dk-section-header">
            <h2 className="dk-section-title">Contact <span className="dk-gradient-text">Me!</span></h2>
            <div className="dk-title-underline"></div>
          </div>

          {/* 2-Column Balanced Framework Content Split */}
          <div className="dk-contact-content-split">
            
            {/* Left Column: Premium Dark Mode Map Frame */}
            <div className="dk-contact-map-wrapper">
              <div className="dk-map-frame">
                <iframe 
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.967786444855!2d77.5920159!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Balanced Form Wrapper */}
            <div className="dk-contact-form-wrapper">
              
              {/* UPDATED: Form now triggers the handleSubmit function */}
              <form onSubmit={handleSubmit} className="dk-contact-form">
                <div className="dk-form-vertical-stack">
                  
                  <div className="dk-form-row-twin">
                    {/* UPDATED: Added value={form.X} to all inputs so they clear properly */}
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required 
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})} 
                      className="dk-form-input"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required 
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})} 
                      className="dk-form-input"
                    />
                  </div>
                  
                  <div className="dk-form-row-twin">
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      value={form.number}
                      onChange={e => setForm({...form, number: e.target.value})} 
                      className="dk-form-input"
                    />
                    <input 
                      type="text" 
                      placeholder="Email Subject" 
                      value={form.subject}
                      onChange={e => setForm({...form, subject: e.target.value})} 
                      className="dk-form-input"
                    />
                  </div>

                  <textarea 
                    placeholder="Your Message" 
                    rows="6" 
                    required 
                    value={form.msg}
                    onChange={e => setForm({...form, msg: e.target.value})} 
                    className="dk-form-textarea"
                  ></textarea>
                </div>
                
                {/* UPDATED: Centered Symmetrical Action Button with Loading State */}
                <div className="dk-form-submit-container">
                  <button 
                    type="submit" 
                    className="dk-solid-btn-submit"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {/* ADDED: Status Messages */}
                {submitStatus === 'success' && (
                  <p style={{ color: '#4ade80', textAlign: 'center', marginTop: '1rem', fontWeight: '500' }}>
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p style={{ color: '#f87171', textAlign: 'center', marginTop: '1rem', fontWeight: '500' }}>
                    Failed to send message. Please try again.
                  </p>
                )}
                
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* Synchronized Footer Bar */}
      <footer className="dk-footer-bar">
        <div className="dk-footer-content">
          <p className="dk-copyright-text">
            Copyright © {new Date().getFullYear()} by Dilkhush Kumar | All Rights Reserved
          </p>
          <button 
            className="dk-scroll-top-btn" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            aria-label="Scroll to top"
          >
            <svg className="dk-scroll-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;