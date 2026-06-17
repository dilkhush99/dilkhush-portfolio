import React from 'react';
import './About.css'; 
import aboutImg from '../../assets/about_pic.jpeg'; 

const About = () => {
  return (
    <section id="about" className="dk-about-section">
      <div className="dk-about-container">
        
        {/* ROW 1: Dedicated Header Title Block */}
        <div className="dk-section-header">
          <h2 className="dk-section-title">About <span className="dk-gradient-text">Me</span></h2>
          <div className="dk-title-underline"></div>
        </div>

        {/* ROW 2 - LEFT COLUMN: Photo Frame & Resume Button Wrapper */}
        <div className="dk-about-image-column">
          <div className="dk-image-frame">
            <img src={aboutImg} alt="Dilkhush Kumar Profile" className="dk-about-profile-img" />
          </div>
          
          <div className="dk-about-actions">
            <button className="dk-solid-btn-about" onClick={() => window.open(`${import.meta.env.BASE_URL}resume/dilkhush_kumar_java_developer.pdf`, '_blank')}>
              View Resume
              <svg className="dk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* ROW 2 - RIGHT COLUMN: Biography Details & Metrics Dashboard */}
        <div className="dk-about-text-column">
          <h3 className="dk-about-subtitle">Software Engineer</h3>
          
          <p className="dk-about-paragraph">
            I am a results-driven Java Developer with 3.8 years of experience building scalable backend services and microservices. 
            With a proven track record of reducing application crashes by 40%, I specialize in JVM performance tuning, 
            low-latency real-time data exchange via DDS, and modernizing user interfaces.
          </p>
          
          <p className="dk-about-paragraph">
            My background includes 7 months of critical onsite integration support in the United Kingdom, where I successfully 
            bridged gaps between standalone system modules and complex enterprise platforms.
          </p>

          <div className="dk-about-stats-grid">
            <div className="dk-stat-card">
              <span className="dk-stat-number">3.8+</span>
              <span className="dk-stat-label">Years Experience</span>
            </div>
            <div className="dk-stat-card">
              <span className="dk-stat-number">40%</span>
              <span className="dk-stat-label">Crash Reduction</span>
            </div>
            <div className="dk-stat-card">
              <span className="dk-stat-number">7 Months</span>
              <span className="dk-stat-label">Onsite UK</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;