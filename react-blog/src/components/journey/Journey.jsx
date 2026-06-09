import React from 'react';
import './Journey.css';

const JourneyCard = ({ title, subtitle, dates, points }) => (
  <div className="dk-journey-card">
    {/* Glowing Timeline Connector Node */}
    <div className="dk-card-timeline-node"></div>
    
    <div className="dk-card-header">
      <span className="dk-card-dates">{dates}</span>
      <h4 className="dk-card-title">{title}</h4>
      <span className="dk-card-subtitle">{subtitle}</span>
    </div>
    
    <ul className="dk-card-bullet-list">
      {points.map((point, index) => (
        <li key={index} className="dk-card-bullet-item">{point}</li>
      ))}
    </ul>
  </div>
);

const Journey = () => {
  const educationData = [
    {
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'Bengal College of Engineering & Technology',
      dates: '2018 - 2022',
      points: [
        'Graduated with an 8.65 CGPA.',
        'Developed foundational skills in multithreading, data structures, and system design patterns.'
      ]
    },
    {
      title: 'Higher Secondary Education (Class 12)',
      subtitle: 'A N College, Patna',
      dates: '2016 - 2018',
      points: [
        'Strong academic foundation in science and mathematics.'
      ]
    }
  ];

  const experienceData = [
    {
      title: 'Java Developer (Software Engineer)',
      subtitle: 'ALTEN India, Bangalore',
      dates: 'Nov 2022 - Present (3.8 Years)',
      points: [
        'Engineered 10+ scalable backend services using Java and Spring Boot, improving system reliability by 25%.',
        'Deployed to the UK client site for 7 months to provide critical onsite integration support.',
        'Diagnosed and resolved critical memory leaks using VisualVM, reducing application crashes by 40%.',
        'Implemented asynchronous communication using DDS for low-latency, real-time data exchange.'
      ]
    }
  ];

  return (
    <section id="journey" className="dk-journey-section">
      <div className="dk-journey-container">
        
        {/* Section Header */}
        <div className="dk-section-header">
          <h2 className="dk-section-title">My <span className="dk-gradient-text">Journey</span></h2>
          <div className="dk-title-underline"></div>
        </div>

        {/* Unified Dual-Timeline Grid */}
        <div className="dk-journey-grid">
          
          {/* Left Track: Education Track */}
          <div className="dk-journey-column">
            <h3 className="dk-column-subtitle">
              <svg className="dk-column-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
              Education
            </h3>
            <div className="dk-journey-cards-container">
              {educationData.map((data, idx) => (
                <JourneyCard key={idx} {...data} />
              ))}
            </div>
          </div>

          {/* Right Track: Experience Track */}
          <div className="dk-journey-column">
            <h3 className="dk-column-subtitle">
              <svg className="dk-column-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Experience
            </h3>
            <div className="dk-journey-cards-container">
              {experienceData.map((data, idx) => (
                <JourneyCard key={idx} {...data} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;