import React from 'react';
import { experienceData } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-content">
                <div className="experience-logo">
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                    <div className="logo-wrapper">
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    </div>
                  </a>
                </div>
                <div className="experience-details">
                  <h3 className="experience-title">
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="teal-text hoverline">
                      {exp.company}
                    </a>
                  </h3>
                  <p className="experience-role">{exp.title}</p>
                  <ul className="experience-tasks">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                  <p className="experience-tech">
                    <strong>Tech Stack:</strong> {exp.techStack.join(', ')}
                  </p>
                </div>
              </div>
              <div className="experience-footer">
                <span className="experience-date">{exp.date} | {exp.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
