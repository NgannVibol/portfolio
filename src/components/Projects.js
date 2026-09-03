import React from 'react';
import { projectsData } from '../data/projectsData';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import '../styles/global.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="scroll-animate">Projects</h2>
        <p className="projects-subtitle scroll-animate" style={{ transitionDelay: '0.1s' }}>
          Here are some of my recent projects that showcase my skills and experience
        </p>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card scroll-animate"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200/667eea/ffffff?text=Project+Image';
                  }}
                />
                <div className="project-overlay">
                  <span className="project-id">#{String(project.id).padStart(2, '0')}</span>
                  <span className="project-star"><FaStar /></span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;