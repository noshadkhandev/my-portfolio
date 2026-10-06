import React from 'react';

const statsData = [
  { count: 23, label: 'Projects Completed' },
  { count: 11, label: 'Happy Clients' },
  { count: 1, label: 'Years Learning' },
  { count: 290, label: 'Coffee Cups' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Key statistics">
      <div className="container stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-num">{stat.count}</span>
            <span className="stat-plus">+</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
