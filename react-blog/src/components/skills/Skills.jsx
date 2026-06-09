import React from 'react';
import './Skills.css';

const SkillBar = ({ name, percentage }) => (
  <div className="dk-skill-bar-wrapper">
    <div className="dk-skill-info">
      <span className="dk-skill-name">{name}</span>
      <span className="dk-skill-percentage">{percentage}%</span>
    </div>
    <div className="dk-skill-bar-outer">
      <div className="dk-skill-bar-inner" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    { name: 'Java & JVM Internals', percentage: 95 },
    { name: 'Spring Boot & Microservices', percentage: 90 },
    { name: 'ReactJS', percentage: 75 },
    { name: 'JPA / Hibernate / SQL', percentage: 85 },
  ];

  return (
    <section id="skills" className="dk-skills-section">
      <div className="dk-skills-container">
        
        {/* Section Header */}
        <div className="dk-section-header">
          <h2 className="dk-section-title">Skills & <span className="dk-gradient-text">Projects</span></h2>
          <div className="dk-title-underline"></div>
        </div>

        {/* Dynamic Split Layout */}
        <div className="dk-skills-grid">
          
          {/* Left Column: Technical Proficiency Progress Bars */}
          <div className="dk-skills-column">
            <h3 className="dk-column-subtitle">
              <svg className="dk-column-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Technical Proficiency
            </h3>
            <div className="dk-skills-list">
              {technicalSkills.map((skill, idx) => (
                <SkillBar key={idx} {...skill} />
              ))}
            </div>
          </div>

          {/* Right Column: Featured Cards Track */}
          <div className="dk-skills-column">
            <h3 className="dk-column-subtitle">
              <svg className="dk-column-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Featured Projects
            </h3>
            <div className="dk-projects-list">
              
              {/* Project Card 1 */}
              <div className="dk-project-card">
                <div className="dk-project-header">
                  <h4 className="dk-project-name">Integrated Anti-Submarine Warfare Defence Suite (IADS)</h4>
                </div>
                <p className="dk-project-desc">
                  Architected desktop application and test framework using JavaFX and Spring Boot, reducing response times by 35% for mission-critical logic.
                </p>
              </div>
              
              {/* Project Card 2 */}
              <div className="dk-project-card">
                <div className="dk-project-header">
                  <div className="dk-project-badge">1st Place Techathon</div>
                  <h4 className="dk-project-name">SkillMitra (Employee Platform)</h4>
                </div>
                <p className="dk-project-desc">
                  Secured 1st place in company techathon. Developed microservices platform using Spring Boot and Eureka Service Discovery.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;