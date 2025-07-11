import React, { useState, useEffect } from 'react';
import '../assets/styles.css';
import staticHeadshot from '../assets/images/memoji.png';
import waveHeadshot  from '../assets/images/wavememoji.png';
import InfoCard     from '../components/infocard';

const skills = [
  'JavaScript','TypeScript','HTML','CSS','React',
  'Node.js','MySQL','MongoDB',
  'Python','Java','Git','Figma','Adobe '
];

const AboutMe = () => {
  const fullName = 'Rocky Road';
  const fullRole = 'Nail Technician & Web Dev Student';

  const [displayName, setDisplayName] = useState('');
  const [displayRole, setDisplayRole]   = useState('');
  const [isHovered, setIsHovered]       = useState(false);
  const [showButtons, setShowButtons]   = useState(false);

  useEffect(() => {
    let idx = 0;
    const nameInterval = setInterval(() => {
      setDisplayName(fullName.slice(0, idx + 1));
      idx++;
      if (idx === fullName.length) {
        clearInterval(nameInterval);
        let ridx = 0;
        const roleInterval = setInterval(() => {
          setDisplayRole(fullRole.slice(0, ridx + 1));
          ridx++;
          if (ridx === fullRole.length) {
            clearInterval(roleInterval);
            setShowButtons(true);
          }
        }, 150);
      }
    }, 150);
    return () => clearInterval(nameInterval);
  }, []);

  return (
    <main className="about-card-section">
      <InfoCard
        imageSrc={isHovered ? waveHeadshot : staticHeadshot}
        name={displayName}
        role={displayRole}
        onHoverToggle={setIsHovered}
      />

      {showButtons && (
        <div className="about-card-buttons">
          <button className="btn btn-left">View Projects</button>
          <button className="btn btn-right">Contact Me</button>
        </div>
      )}

      <section className="about-da-rock-section">
        <div className="about-panel">
          <h2>Skills</h2>
          <div className="skills-container">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
          <button className="btn btn-download">Download Resume</button>
        </div>

        <div className="bio-panel">
          <h2>Bio</h2>
          <p>I balance creativity behind the nail table with coding on the screen. By day, I help clients express themselves through bespoke nail art; by night, I architect and build interactive web applications using React, Vue.js, and Bootstrap. I thrive on solving complex problems—whether it’s perfecting a free-hand design or debugging a stubborn CSS layout. When I’m not immersed in code or polish, you’ll find me exploring new JavaScript libraries, tinkering with side projects, or binge-watching sci-fi with five very opinionated cats perched nearby. Let’s connect and combine beauty with technology on your next project!</p>
        </div>
        
      </section>
    </main>
  );
};

export default AboutMe;
