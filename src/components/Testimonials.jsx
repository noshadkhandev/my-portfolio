import React from 'react';

const testimonialsData = [
  {
    quote: 'Nowshad delivered our landing page ahead of schedule and it looked better than what we pitched him. Communication was smooth throughout.',
    author: 'Nouman khan',
    role: 'Founder, Studio Loop',
    img: '/man1.jpg',
  },
  {
    quote: 'Great attention to detail — the animations feel premium without being distracting. Our bounce rate dropped noticeably after launch.',
    author: 'Ali Raza',
    role: 'Product Manager, Nexbyte',
    img: '/man2.jpg',
  },
  {
    quote: 'Very responsive and easy to work with. He explained technical decisions clearly and always hit our deadlines.',
    author: 'Aliyan',
    role: 'Marketing Lead, Brightly',
    img: '/man3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
       
        <h2 className="section-title">
          What clients <span className="text-grad">say</span>.
        </h2>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial-card glass-card">
              <i className="fa-solid fa-quote-left quote-icon" aria-hidden="true"></i>
              <p>{item.quote}</p>
              <div className="testimonial-author">
                <img src={item.img} alt={item.author} loading="lazy" />
                <div>
                  <h4>{item.author}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
