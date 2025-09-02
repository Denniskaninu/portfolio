import React, { useState, useEffect } from 'react';
import ThemeToggle from '../UI/ThemeToggle';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      let current = '';
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              DK
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === href.slice(1)
                      ? 'text-primary-500 bg-primary-50 dark:bg-dark-800'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-dark-800'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-300"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;