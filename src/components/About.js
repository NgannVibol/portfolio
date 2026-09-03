import React from 'react';
import '../styles/global.css';
import profileImage from '../asset/vibol.jpg';

const About = () => {
  const experiences = [
    { 
      id: 1, 
      title: 'Senior Web Developer', 
      company: 'Tech Solutions Inc.', 
      period: '2022 – Present', 
      description: 'Leading React development, mentoring juniors, and architecting scalable frontend solutions.' 
    },
    { 
      id: 2, 
      title: 'Full Stack Developer', 
      company: 'Digital Agency Co.', 
      period: '2020 – 2022', 
      description: 'Built SPAs with React + Node.js, REST APIs, and implemented CI/CD pipelines.' 
    },
    { 
      id: 3, 
      title: 'Junior Web Developer', 
      company: 'Startup Hub', 
      period: '2018 – 2020', 
      description: 'Developed landing pages, fixed bugs, and optimized website performance.' 
    },
  ];

  const skills = [
    { name: 'React', percentage: 90, color: '#61DAFB' },
    { name: 'JavaScript', percentage: 88, color: '#F7DF1E' },
    { name: 'HTML5/CSS3', percentage: 92, color: '#E34F26' },
    { name: 'Node.js', percentage: 75, color: '#68A063' },
  ];

  return (
    <section id="about" className="about">
      <div className="container about-container">
        {/* Left - Profile Image */}
        <div className="about-image-wrapper scroll-animate-left">
          <div className="about-image-container">
            <img 
              src={profileImage} 
              alt="Ngann Vibol" 
              className="about-profile-image" 
            />
            <div className="about-image-ring"></div>
          </div>
          <div className="about-quote">
            <p>"Building digital experiences, one line of code at a time."</p>
            <span>Mr. Ngann Vibol</span>
          </div>
        </div>

        {/* Right - Content */}
        <div className="about-content scroll-animate-right">
          <div className="about-header">
            <span className="about-label">About Me</span>
            <h2>Passionate Developer Creating Digital Solutions</h2>
          </div>
          
          <p className="about-bio">
            I'm a passionate Web Developer with <strong>3+ years</strong> of experience building 
            responsive, user-friendly web applications. I specialize in <strong>React</strong> and modern 
            JavaScript, with a keen eye for UI/UX design and performance optimization.
          </p>

          {/* Experience */}
          <div className="about-experience">
            <h3>Experience</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="experience-item scroll-animate" 
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="experience-dot"></div>
                  <div className="experience-content">
                    <h4>{exp.title}</h4>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="skill-item scroll-animate" 
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ 
                        width: `${skill.percentage}%`, 
                        backgroundColor: skill.color 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;