import React, { useEffect, useRef } from 'react';
import '../styles/global.css';
import profileImage from '../asset/vibol.jpg'; // Your profile image

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const roles = [
      'Web Developer',
      'Mobile App Developer',
      'React Specialist',
      'Problem Solver'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let timeoutId = null;

    const typeEffect = () => {
      const fullText = roles[roleIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (textRef.current) {
        textRef.current.textContent = currentText;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === fullText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
      }

      timeoutId = setTimeout(typeEffect, speed);
    };

    typeEffect();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        {/* Left Side - Profile Image */}
        <div className="hero-image-wrapper scroll-animate-left">
          <div className="hero-image-container">
            <img 
              src={profileImage} 
              alt="Ngann Vibol - Profile" 
              className="hero-profile-image"
            />
            <div className="hero-image-ring"></div>
            <div className="hero-image-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="hero-image-badge">
            <span className="badge-dot"></span>
            Available for Freelance
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="hero-content scroll-animate-right">
          <div className="hero-badge">👋 Welcome to my portfolio</div>
          
          <h1>
            Hello, I'm <span className="highlight">Ngann Vibol</span>
          </h1>
          
          <h2>
            I'm a <span ref={textRef} className="typing-text"></span>
            <span className="cursor-blink">|</span>
          </h2>
          
          <p className="hero-description">
            Building responsive, user-friendly web applications with modern technologies.
            Passionate about creating exceptional digital experiences.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/NgannVibol" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/ngannvibol" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:ngannvibol@email.com" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-1.023.9-1.838 1.636-1.838h20.727c.904 0 1.636.904 1.636 1.838zM4.91 6.455L12 10.91l7.09-4.455V4.91H4.91v1.545z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;