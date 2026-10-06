import React from 'react';

const experienceData = [
  {
    date: '2025 — Present',
    title: 'Frontend Developer',
    desc: 'Building responsive websites and landing pages for startups and small businesses.',
  },
  {
    date: '2025 — 2026',
    title: 'Junior Web Developer',
    desc: 'Developed and maintained client websites, fixed cross-browser bugs, improved load speed.',
  },
  {
    date: '2025 — 2026',
    title: 'Intern, Web Development',
    desc: 'Assisted in building UI components and learned production coding workflows.',
  },
];

const educationData = [
  {
    date: '2025 — 2026',
    title: 'Web Developer',
    desc: 'Focused on web technologies, data structures and software engineering fundamentals.',
  },
  {
    date: '2023 — 2025',
    title: 'Intermediate — Pre-Engineering',
    desc: 'Higher secondary education with a strong analytical foundation in physics and mathematics.',
  },
  {
    date: '2023',
    title: 'Matriculation',
    desc: 'Completed secondary education with a focus on science subjects.',
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
     
        <h2 className="section-title">
          Experience &amp; <span className="text-grad">Education</span>.
        </h2>

        <div className="timeline-grid">
          {/* Experience Column */}
          <div className="timeline-col">
            <h3 className="timeline-col-title">
              <i className="fa-solid fa-briefcase" aria-hidden="true"></i> Experience
            </h3>
            <ul className="timeline">
              {experienceData.map((item, index) => (
                <li key={index} className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true"></span>
                  <span className="timeline-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Column */}
          <div className="timeline-col">
            <h3 className="timeline-col-title">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i> Education
            </h3>
            <ul className="timeline">
              {educationData.map((item, index) => (
                <li key={index} className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true"></span>
                  <span className="timeline-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
