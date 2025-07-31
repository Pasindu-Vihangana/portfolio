import React from 'react';
import './Skills.css';
import TechMarquee from './TechMarquee';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        {/* <span className="skills-badge">Technologies I Work With</span> */}
      </div>
      <TechMarquee />
    </section>
  );
};

export default Skills; 