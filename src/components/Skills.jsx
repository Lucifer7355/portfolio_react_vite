import React from 'react';
import { skillsData } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="skills-card">
              <div className="skills-content">
                <h4 className="category-title">{category}</h4>
                <div className="skills-grid">
                      {skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <img
                            src={skill.icon.startsWith('http') ? skill.icon : `${import.meta.env.BASE_URL}${skill.icon.replace(/^\//, '')}`}
                            alt={skill.name}
                            className="skill-icon"
                          />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
