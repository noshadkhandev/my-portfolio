import React from 'react';

const projectsData = [
  {
    title: 'MaintainIQ — Asset Maintenance & QR Tracking System',
    desc: 'A responsive maintenance management platform featuring QR-based asset tracking, issue reporting, interactive dashboard, and smooth GSAP animations..',
    img: '/maintain.png',
    alt: 'MaintainIQ maintenance management screenshot',
    liveUrl: 'https://noshadkhandev.github.io/maintainn/',
    githubUrl: 'https://github.com/noshadkhandev',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'WeatherNow — Weather Forecast App',
    desc: 'A modern weather application with real-time forecasts, location search, dynamic weather icons, and smooth UI animations.',
    img: '/weather.jpg',
    alt: 'WeatherNow app screenshot',
    liveUrl: 'https://noshadkhandev.github.io/weather-app/',
    githubUrl: 'https://github.com/noshadkhandev',
    tags: ['JavaScript', 'CSS3', 'REST API'],
  },
  {
    title: 'Student Profile Generator — Student Management System',
    desc: 'A modern student profile generator featuring profile creation, live data updates, responsive design, and smooth user interactions.',
    img: '/student.webp',
    alt: 'Student profile generator screenshot',
    liveUrl: 'https://noshadkhandev.github.io/student-generat-profile/',
    githubUrl: 'https://github.com/noshadkhandev',
    tags: ['HTML5', 'JavaScript', 'CSS3'],
  },
  {
    title: 'MindCare — Psychologist Consultation Website',
    desc: 'A modern psychologist website featuring online appointment booking, therapy services, mental health resources, and a calm, user-friendly interface.',
    img: '/Screenshot 2026-07-15 111310.png',
    alt: 'MindCare psychologist website screenshot',
    liveUrl: 'https://noshadkhandev.github.io/miraj/',
    githubUrl: 'https://github.com/noshadkhandev',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Quiz Heckathon',
    desc: 'A modern quiz application with multiple-choice questions, countdown timer, live score tracking, and a smooth user experience.',
    img: '/quiz.jpg',
    alt: 'Quiz hackathon app screenshot',
    liveUrl: 'https://noshadkhandev.github.io/heckaton/',
    githubUrl: 'https://github.com/noshadkhandev',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Trello clone',
    desc: 'A modern Trello Clone with task creation, board organization, drag-and-drop functionality, and real-time workflow management.',
    img: '/trello.jpg',
    alt: 'Trello clone screenshot',
    liveUrl: 'https://noshadkhandev.github.io/trello/',
    githubUrl: 'https://github.com/noshadkhandev',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
       
        <h2 className="section-title">
          Selected <span className="text-grad">Projects</span>.
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-img">
                <img
                  src={project.img}
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn"
                    aria-label={`View code for ${project.title} on GitHub`}
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i> Code
                  </a>
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
