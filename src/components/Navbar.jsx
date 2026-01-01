import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar-desktop hide-on-small-only">
        <ul className="side-nav fixed">
              <li className="logo">
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} aria-label="Navigate to the beginning of the page">
                  <img src={`${import.meta.env.BASE_URL}assets/images/photu.jpg`} className="profile-pic" alt="Ankit Kumar Srivastava Profile Picture" />
                </a>
              </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} aria-label="Navigate to About section">
              <i className="fa fa-user"></i><span>About</span>
            </a>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} aria-label="Navigate to Experience section">
              <i className="fa fa-briefcase"></i><span>Experience</span>
            </a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} aria-label="Navigate to Projects section">
              <i className="fa fa-folder"></i><span>Projects</span>
            </a>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} aria-label="Navigate to Skills section">
              <i className="fa fa-code"></i><span>Skills</span>
            </a>
          </li>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')} aria-label="Navigate to Education section">
              <i className="fa fa-graduation-cap"></i><span>Education</span>
            </a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} aria-label="Navigate to Contact section">
              <i className="fa fa-envelope"></i><span>Contact</span>
            </a>
          </li>
              <li>
                <a href={`${import.meta.env.BASE_URL}assets/resume/Ankit_Kumar_Srivastava_Backend_Developer.pdf`} target="_blank" rel="noopener noreferrer" aria-label="Open Ankit's Resume in a new tab">
                  <i className="fa fa-file-pdf-o"></i><span>Resume</span>
                </a>
              </li>
        </ul>
      </nav>

      <nav className="navbar-mobile hide-on-large-only">
        <div className="nav-wrapper">
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="name-title">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="teal-text" aria-label="Navigate to the home section">
              Ankit Kumar Srivastava
            </a>
            <span className="black-text">Software Developer</span>
          </div>
        </div>

        <ul className={`side-nav-mobile ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="teal-text">
              <i className="fa fa-user"></i><span>About</span>
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="teal-text">
              <i className="fa fa-briefcase"></i><span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="teal-text">
              <i className="fa fa-folder"></i><span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="teal-text">
              <i className="fa fa-code"></i><span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="teal-text">
              <i className="fa fa-graduation-cap"></i><span>Education</span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="teal-text">
              <i className="fa fa-envelope"></i><span>Contact</span>
            </a>
          </li>
              <li>
                <a href={`${import.meta.env.BASE_URL}assets/resume/Ankit_Kumar_Srivastava_Backend_Developer.pdf`} target="_blank" rel="noopener noreferrer" className="teal-text">
                  <i className="fa fa-file-pdf-o"></i><span>Resume</span>
                </a>
              </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
