import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaFigma,
  FaPython,
  FaPhp,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiRedux, 
  SiLaravel,
  SiVercel,
  SiRender,
  SiMysql
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { DiSqllite } from 'react-icons/di'; // Note: DiSqllite (double 'l')
import '../styles/global.css';

const skillsList = [
  // Frontend
  { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', category: 'Frontend' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC', category: 'Frontend' },
  
  // Backend
  { name: 'PHP', icon: <FaPhp />, color: '#777BB4', category: 'Backend' },
  { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20', category: 'Backend' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB', category: 'Backend' },
  
  // Database
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', category: 'Database' },
  { name: 'SQL', icon: <FaDatabase />, color: '#00758F', category: 'Database' },
  { name: 'SQLite', icon: <DiSqllite />, color: '#003B57', category: 'Database' }, // Fixed: DiSqllite
  
  // Tools & Platforms
  { name: 'VS Code', icon: <VscCode />, color: '#007ACC', category: 'Tools' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032', category: 'Tools' },
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E', category: 'Tools' },
  { name: 'Vercel', icon: <SiVercel />, color: '#000000', category: 'Tools' },
  { name: 'Render', icon: <SiRender />, color: '#46E3B7', category: 'Tools' },
];

const Skills = () => {
  // Group skills by category
  const categories = [...new Set(skillsList.map(skill => skill.category))];

  return (
    <section id="skills" className="skills">
      <div className="container skills-container">
        <h2 className="scroll-animate">Skills & Tools</h2>
        <p className="skills-subtitle scroll-animate" style={{ transitionDelay: '0.1s' }}>
          Technologies and tools I work with to build amazing digital experiences
        </p>
        
        {categories.map((category, catIndex) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title scroll-animate" style={{ transitionDelay: `${catIndex * 0.1}s` }}>
              {category}
            </h3>
            <div className="skills-grid">
              {skillsList
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="skill-card scroll-animate" 
                    style={{ transitionDelay: `${(catIndex * 0.1) + (index * 0.03)}s` }}
                  >
                    <div style={{ color: skill.color, fontSize: '3rem' }}>{skill.icon}</div>
                    <p>{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;