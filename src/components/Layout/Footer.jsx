import React from 'react';
import { personalInfo } from '../../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              Software Developer and Artificial Intelligence Enthusiast. I create exceptional digital experiences
              through clean code and innovative solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {Object.entries(personalInfo.socialLinks).map(([platform, url]) => {
              const iconMap = {
                github: 'fab fa-github',
                linkedin: 'fab fa-linkedin',
                twitter: 'fab fa-twitter',
                codepen: 'fab fa-codepen'
              };
              
              return (
                <a 
                  key={platform}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className={iconMap[platform]}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;