import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ankit Kumar Srivastava</h3>
            <p>Software Developer passionate about building scalable backend systems and solving complex problems.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="quick-links">
              <li>
                <a href="#about">
                  <i className="fa fa-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#experience">
                  <i className="fa fa-briefcase"></i>
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects">
                  <i className="fa fa-folder"></i>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#skills">
                  <i className="fa fa-code"></i>
                  <span>Skills</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/ankit-software-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/Lucifer7355" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa fa-github"></i>
              </a>
              <a href="mailto:ankitviddya@gmail.com" aria-label="Email">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://medium.com/@@ankitviddya" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <i className="fa fa-medium"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ankit Kumar Srivastava. All rights reserved.</p>
          <p className="footer-made-with">
            Made with <i className="fa fa-heart" style={{ color: '#ec4899' }}></i> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

