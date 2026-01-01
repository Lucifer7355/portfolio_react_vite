import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-info">
          <a
            href="tel:+917355385816"
            className="contact-link"
            aria-label="Call Ankit"
          >
            <i className="fa fa-phone"></i>
            <span>+91 7355385816</span>
          </a>
          <a
            href="mailto:ankitviddya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Email Ankit"
          >
            <i className="fa fa-envelope"></i>
            <span>ankitviddya@gmail.com</span>
          </a>
          <a
            href="https://github.com/Lucifer7355"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="View Ankit on GitHub"
          >
            <i className="fa fa-github"></i>
            <span>github.com/Lucifer7355</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-software-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="View Ankit on LinkedIn"
          >
            <i className="fa fa-linkedin"></i>
            <span>linkedin.com/in/ankit-software-dev</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
