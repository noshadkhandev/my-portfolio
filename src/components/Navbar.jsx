import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navLinksRef = useRef({});
  const mobileMenuRef = useRef(null);

  // Handle sticky navbar and active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionElements = document.querySelectorAll('section[id]');
      let current = 'home';
      sectionElements.forEach((sec) => {
        const top = sec.offsetTop - 160;
        if (window.scrollY >= top) {
          current = sec.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active indicator position
  useEffect(() => {
    const activeEl = navLinksRef.current[activeSection];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo" aria-label="Nowshad Ahmad Portfolio Home">
            <span className="logo-mark">NA</span>
            <span className="logo-text">Nowshad<em>.</em></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                ref={(el) => (navLinksRef.current[item.href.replace('#', '')] = el)}
                className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <span
              className="nav-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
              aria-hidden="true"
            />
          </nav>

          {/* Right actions: ThemeToggle + CTA + Mobile Hamburger */}
          <div className="nav-right-actions">
            <ThemeToggle />

            <a
              href="https://wa.me/923315200501"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-small btn-primary nav-cta"
            >
              Let's Talk
            </a>

            <button
              type="button"
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
              id="hamburger"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        id="mobileMenu"
        ref={mobileMenuRef}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-menu-inner" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`mobile-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="mobile-cta-wrapper">
          <a
            href="https://wa.me/923315200501"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={closeMenu}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <i className="fa-brands fa-whatsapp"></i> Let's Talk
          </a>
        </div>

        <div className="mobile-socials">
          <a href="https://wa.me/923315200501" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/nowshad-ahmad-451988420?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/noshadkhandev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.facebook.com/nowshad.ahmad.7355" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </>
  );
}
