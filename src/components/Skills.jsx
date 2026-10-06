import React from 'react';

const skillsData = [
  {
    name: 'HTML5',
    icon: 'fa-brands fa-html5',
    color: '#e34f26',
  },
  {
    name: 'CSS3',
    icon: 'fa-brands fa-css3-alt',
    color: '#1572b6',
  },
  {
    name: 'JavaScript',
    icon: 'fa-brands fa-js',
    color: '#f59e0b',
  },
  {
    name: 'Responsive Design',
    icon: 'fa-solid fa-mobile-screen-button',
    color: 'var(--cyan)',
  },
  {
    name: 'Bootstrap',
    icon: 'fa-brands fa-bootstrap',
    color: '#7952b3',
  },
  {
    name: 'Git',
    icon: 'fa-brands fa-git-alt',
    color: '#f05032',
  },
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    color: 'var(--text)',
  },
  {
    name: 'React.js',
    icon: 'fa-brands fa-react',
    color: '#00b4d8',
  },
  {
    name: 'Node.js',
    icon: 'fa-brands fa-node-js',
    color: '#22c55e',
  },
  {
    name: 'Express.js',
    icon: 'fa-solid fa-server',
    color: 'var(--violet-2)',
  },
  {
    name: 'MongoDB',
    icon: 'fa-solid fa-database',
    color: '#10b981',
  },
];

const toolsData = [
  { name: 'VS Code', icon: 'fa-solid fa-code' },
  { name: 'Figma', icon: 'fa-brands fa-figma' },
  { name: 'Netlify', icon: 'fa-solid fa-n' },
  { name: 'Vercel', icon: 'fa-solid fa-angles-up' },
  { name: 'NPM', icon: 'fa-brands fa-npm' },
  { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
     
        <h2 className="section-title">
          Tools I use to <span className="text-grad">build things</span>.
        </h2>

        <div className="skills-grid">
          {/* Skills Column */}
          <div className="skills-col">
           

            <div className="skills-cards-grid">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-card">
                  <span
                    className="skill-icon-box"
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  >
                    <i className={skill.icon}></i>
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div className="skills-col">
            <h3 className="skills-col-title">
              <i className="fa-solid fa-toolbox" aria-hidden="true"></i> Tools
            </h3>

            <div className="tool-grid">
              {toolsData.map((tool, index) => (
                <div key={index} className="tool-card">
                  <i className={tool.icon} aria-hidden="true"></i>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>

            <div className="skills-note">
              <i className="fa-regular fa-lightbulb" aria-hidden="true"></i>
              <p>
                I keep learning new tools every quarter — the stack above is what I ship with today, not where I stop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
