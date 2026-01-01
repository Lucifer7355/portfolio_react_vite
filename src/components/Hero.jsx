import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const typingRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const strings = [
    'Backend Engineer',
    'Problem Solver',
    'Code Architect',
    'Tech Enthusiast',
    'Data Engineer',
    'Full Stack Developer',
    'System Designer',
    'Innovative Thinker'
  ];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const type = () => {
      const current = strings[currentStringIndex];
      
      if (!isDeleting) {
        if (typedText.length < current.length) {
          setTypedText(current.substring(0, typedText.length + 1));
          // Variable speed: slower at start, faster in middle, slower at end
          const progress = typedText.length / current.length;
          if (progress < 0.3) {
            setTypingSpeed(150); // Slower at start
          } else if (progress > 0.7) {
            setTypingSpeed(100); // Slower at end
          } else {
            setTypingSpeed(120); // Faster in middle
          }
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(current.substring(0, typedText.length - 1));
          setTypingSpeed(60); // Fast deletion
        } else {
          setIsDeleting(false);
          setTypingSpeed(200); // Pause before next word
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentStringIndex, typingSpeed, strings]);

  return (
    <section id="home" className="hero visible">
      <div className="hero-container">
        <div className="hero-content" >
          <h1 className="hero-title">
            Hi, I'm <span className="teal">Ankit Kumar Srivastava.</span>
          </h1>
          <h5 className="hero-subtitle">
            A <span className="typing">{typedText}<span className="cursor">|</span></span>
          </h5>
          <h5 className="hero-description">
            Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.
          </h5>

          <div id="dil">
            <hr />
            My Profiles :
          </div>

          <div className="social">
            <a href="https://www.linkedin.com/in/ankit-software-dev" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn linkedin" aria-label="LinkedIn Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/linkedIn.png`} alt="LinkedIn" />
              </button>
            </a>
            <a href="https://github.com/Lucifer7355" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn github" aria-label="GitHub Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/github_ny.png`} alt="GitHub" />
              </button>
            </a>
            <a href="https://medium.com/@@ankitviddya" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn medium" aria-label="Medium Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/medium.com.png`} alt="Medium" />
              </button>
            </a>
            <a href="https://auth.geeksforgeeks.org/user/bytepanic/practice/" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn gfg" aria-label="GeeksforGeeks Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/gfg.png`} alt="GeeksforGeeks" />
              </button>
            </a>
            <a href="https://leetcode.com/red_hat7355/" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn leetcode" aria-label="LeetCode Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/leetcode.png`} alt="LeetCode" />
              </button>
            </a>
            <a href="https://codeforces.com/profile/noob_programmer8858?f0a28=1" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn codeforces" aria-label="Codeforces Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/codeforces.png`} alt="Codeforces" />
              </button>
            </a>
            <a href="https://www.codechef.com/users/go_getter7355" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn codechef" aria-label="CodeChef Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/codechef.png`} alt="CodeChef" />
              </button>
            </a>
            <a href="https://www.hackerrank.com/ankitviddya?hr_r=1" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn hackerrank" aria-label="HackerRank Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/hackerrank.png`} alt="HackerRank" />
              </button>
            </a>
            <a href="https://www.hackerearth.com/@ankitviddya" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn hackerearth" aria-label="HackerEarth Profile">
                <img src={`${import.meta.env.BASE_URL}assets/images/HackerEarth_logo.png`} alt="HackerEarth" />
              </button>
            </a>
          </div>

          <div className="buttons">
            <a href="#about" className="readme">Read More</a>
            <a href="#contact" className="contactme">Contact Me</a>
                <a 
                  href={`${import.meta.env.BASE_URL}assets/resume/Ankit_Kumar_Srivastava_Backend_Developer.pdf`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="resume-btn"
                  download
                >
                  <i className="fa fa-download"></i> Download Resume
                </a>
            <hr />
          </div>

          <div className="caption" id="hashtag">
            <p className="mb-5 mt-5">
              <p>
                "Your ability to solve problems and make good decisions is the true measure of your skill as a leader." – Brian Tracy
              </p>
              <i className="fa fa-user"></i> #savvy #motivated #communicative #hard-working #cool-headed #organized #easy-going #funny
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
