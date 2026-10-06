import React from 'react';

const infoItems = [
  { icon: 'fa-solid fa-user', label: 'Name', value: 'Nowshad Ahmad' },
  { icon: 'fa-solid fa-briefcase', label: 'Role', value: 'Frontend Developer' },
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Karachi, Pakistan' },
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'ssn088691@gmail.com' },
  { icon: 'fa-solid fa-phone', label: 'Phone', value: '+92 331 5200501' },
  { icon: 'fa-regular fa-circle-check', label: 'Status', value: 'Open to work' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
      
        <h2 className="section-title">
          Turning ideas into <span className="text-grad">interfaces</span> that work.
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a frontend developer focused on building responsive, high-performance websites with clean, semantic code. Over the past few years I've worked with startups and small teams to turn designs into fast, accessible interfaces — from marketing pages to full product dashboards.
            </p>
            <p>
              My goal is simple: write code that's easy to maintain, ship products that feel fast, and design details that make people trust the brand behind the screen. I care about the last 10% — the animation timing, the spacing, the empty states — because that's what separates a good site from a forgettable one.
            </p>

            <div className="about-edu">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
              <div>
                <h4>Web Developer</h4>
                <span>IT · 2025 — 2026</span>
              </div>
            </div>

            <a
              href="/Nowshad_Ahmad_CV.pdf"
              download="Nowshad_Ahmad_CV.pdf"
              className="btn btn-outline"
            >
              <i className="fa-solid fa-download"></i> Download CV
            </a>
          </div>

          <div className="about-cards">
            {infoItems.map((item, index) => (
              <div key={index} className="info-card">
                <i className={item.icon} aria-hidden="true"></i>
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
