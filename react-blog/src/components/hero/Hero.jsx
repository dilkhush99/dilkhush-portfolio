import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImg from '../../assets/dk.png';

const Hero = () => {
  // 1. State to manage which section is currently active
  const [activeSection, setActiveSection] = useState('home');

  // 2. Intersection Observer to track scrolling automatically
  useEffect(() => {
    // Selects your hero container and all section blocks
    const sections = document.querySelectorAll('#home, section');

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Triggers state change when section hits viewport center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Updates active section state with the matching element ID
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // 3. Array of nav options to map dynamically
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="hero-container" id="home">
      {/* Premium Glassmorphism Header */}
      <header className="header-bar">
        <div className="logo-box">
          <h1 className="logo-text">Dilkhush<span className="accent-dot">.</span></h1>
        </div>
        <nav className="nav-bar">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Hero Section */}
      <section className="hero-body">
        <div className="hero-content">
          <span className="hero-badge">Available for Opportunities</span>
          <h2 className="hero-greeting">Hi, I'm <span className="gradient-text">Dilkhush Kumar</span></h2>
          <h3 className="hero-subtitle">Java & Full-Stack Developer</h3>
          <p className="hero-text">
            Java Developer with 3.8 years of experience specializing in high-performance desktop applications,
            real-time distributed systems, and modern full-stack web applications.
          </p>

          <div className="hero-actions">
            <button
              className="btn solid-btn"
              onClick={() => window.location.href = 'mailto:dilkhushrazz@gmail.com?subject=Job Opportunity - Software Engineer'}
            >
              Hire Me
            </button>
            <button className="btn outline-btn" onClick={() => window.location.href = '#contact'}>
              Let's Talk
            </button>
          </div>

          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
              <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Enhanced Image Area */}
        {/* Cinematic Blended Image Area */}
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Dilkhush Kumar" className="hero-blend-img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;