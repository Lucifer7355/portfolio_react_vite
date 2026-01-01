import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay" onClick={() => toggleCard(index)}>
                  <i className="fa fa-info-circle"></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title teal-text hoverline">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              {expandedCard === index && (
                <div className="project-reveal">
                  <div className="project-reveal-header">
                    <span className="project-reveal-title">Accomplishments</span>
                    <button className="close-btn" onClick={() => toggleCard(index)}>×</button>
                  </div>
                  <ul className="project-accomplishments">
                    <li><b>Tools:</b> {project.technologies.join(', ')}</li>
                    {project.accomplishments.map((acc, accIndex) => (
                      <li key={accIndex}>{acc}</li>
                    ))}
                  </ul>
                  {project.github && (
                    <div className="project-action">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                        aria-label={`Visit the GitHub repo for ${project.title}`}
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
