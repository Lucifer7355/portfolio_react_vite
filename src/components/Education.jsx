import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-content">
              <h3 className="education-institution">
                <a href="https://galgotiacollege.edu/" target="_blank" rel="noopener noreferrer" className="teal-text hoverline">
                  Galgotias College Of Engineering And Technology, Greater Noida
                </a>
              </h3>
              <p className="education-location">Greater Noida, India</p>
              <p>
                <b>Degree: </b>Bachelor of Technology in Computer Science And Engineering
                <br />
                <b>CGPA: </b>8.76/10
              </p>
              <div className="education-coursework">
                <p><b>Relevant Courseworks:</b></p>
                <ul>
                  <li>Data Structures and Algorithms - Advanced problem-solving and optimization</li>
                  <li>Database Management Systems - SQL, NoSQL, and database design principles</li>
                  <li>Operating Systems - Process management, memory allocation, and concurrency</li>
                  <li>Machine Learning - Neural networks, supervised and unsupervised learning</li>
                  <li>Digital Image Processing - Computer vision and image analysis techniques</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-content">
              <h3 className="education-institution">
                <a target="_blank" rel="noopener noreferrer" className="teal-text hoverline">
                  ISC BOARD
                </a>
              </h3>
              <p className="education-location">India</p>
              <p>
                <b>Senior High School: </b>PCM (Science)
                <br />
                <b>PERCENTAGE: </b>89.25%
                <br />
                <b>Year of Completion: </b>2019
              </p>
              <div className="education-coursework">
                <p><b>Relevant Courseworks:</b></p>
                <ul>
                  <li>Physics - Advanced Mechanics and Thermodynamics</li>
                  <li>Chemistry - Organic and Inorganic Chemistry</li>
                  <li>Mathematics - Calculus, Algebra, and Trigonometry</li>
                  <li>English - Language and Literature</li>
                  <li>Computer Science - Programming Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
