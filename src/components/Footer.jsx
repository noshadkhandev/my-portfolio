import React from 'react';

const socialLinks = [
  {
    href: 'https://wa.me/923315200501',
    label: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
  },
  {
    href: 'https://www.linkedin.com/in/nowshad-ahmad-451988420?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    href: 'https://github.com/noshadkhandev',
    label: 'GitHub',
    icon: 'fa-brands fa-github',
  },
  {
    href: 'https://www.facebook.com/nowshad.ahmad.7355',
    label: 'Facebook',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    href: 'tel:+923315200501',
    label: 'Phone Call',
    icon: 'fa-solid fa-phone',
  },
  {
    href: 'mailto:nowshadkhan9901@gmail.com',
    label: 'Email',
    icon: 'fa-solid fa-envelope',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Social Links */}
        <div className="footer-social" aria-label="Social links">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={item.label}
            >
              <i className={item.icon} aria-hidden="true"></i>
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Nowshad Ahmad. All rights reserved.</p>
          <p>
            Designed &amp; Developed by <strong>Nowshad Ahmad</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
