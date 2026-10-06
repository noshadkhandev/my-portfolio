import React, { useState, useEffect } from 'react';

const typingWords = [
  'responsive websites.',
  'clean UI/UX.',
  'fast web apps.',
  'pixel-perfect designs.',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      setDisplayText(currentWord.substring(0, charIndex));
      if (charIndex === currentWord.length) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else {
        timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 90);
      }
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(currentWord.substring(0, charIndex));
      if (charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 45);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
    

          <h1 className="hero-title">
            <span className="hero-line">Hi, I'm</span>
            <span className="hero-line hero-name">Nowshad Ahmad</span>
          </h1>

          <p className="hero-sub">Frontend Developer</p>

          <p className="hero-typing" aria-live="polite">
            <span className="typing-prefix">I build&nbsp;</span>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </p>

          <p className="hero-desc">
            I craft fast, accessible and beautifully animated web experiences — turning clean code into interfaces people enjoy using.
          </p>

          <div className="hero-actions">
            <a
              href="/Nowshad_Ahmad_CV.pdf"
              download="Nowshad_Ahmad_CV.pdf"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download"></i> Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fa-regular fa-paper-plane"></i> Hire Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <span className="hero-stat-num">23</span>+
              <p>Projects</p>
            </div>
            <div>
              <span className="hero-stat-num">11</span>+
              <p>Clients</p>
            </div>
            <div>
              <span className="hero-stat-num">1</span>+
              <p>Years</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-blob-glow" aria-hidden="true"></div>
          <div className="hero-frame" id="heroFrame">
            <div className="hero-frame-border" aria-hidden="true"></div>
            <img
              src="/ChatGPT Image Jul 14, 2026, 07_43_58 PM.png"
              alt="Nowshad Ahmad — Frontend Developer"
              className="hero-img"
              loading="eager"
            />
            <span className="hero-badge hero-badge-1" title="HTML5" aria-label="HTML5">
              <i className="fa-brands fa-html5"></i>
            </span>
            <span className="hero-badge hero-badge-2" title="CSS3" aria-label="CSS3">
              <i className="fa-brands fa-css3-alt"></i>
            </span>
            <span className="hero-badge hero-badge-3" title="JavaScript" aria-label="JavaScript">
              <i className="fa-brands fa-js"></i>
            </span>
            <span className="hero-badge hero-badge-4" title="Git" aria-label="Git">
              <i className="fa-brands fa-git-alt"></i>
            </span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down to About section">
        <span>Scroll</span>
        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </a>
    </section>
  );
}
