import React from 'react';

const servicesData = [
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Frontend Development',
    desc: 'Pixel-accurate, performant interfaces built with clean, semantic, maintainable code.',
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Responsive Website Design',
    desc: 'Websites that look and feel native on every screen — mobile, tablet and desktop.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Landing Pages',
    desc: 'High-converting landing pages with clear messaging, motion and strong calls to action.',
  },
  {
    icon: 'fa-solid fa-id-badge',
    title: 'Portfolio Websites',
    desc: 'Personal brand sites that showcase your work with a premium, memorable feel.',
  },
  {
    icon: 'fa-solid fa-arrows-rotate',
    title: 'Website Redesign',
    desc: 'Modernizing outdated sites — better UX, faster load times, refreshed visuals.',
  },
  {
    icon: 'fa-solid fa-bug',
    title: 'Bug Fixing',
    desc: 'Fast, reliable fixes for layout issues, cross-browser bugs and broken interactions.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
      
        <h2 className="section-title">
          Services built around <span className="text-grad">your goals</span>.
        </h2>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <span className="service-icon">
                <i className={service.icon} aria-hidden="true"></i>
              </span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
