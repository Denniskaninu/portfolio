import React, { useEffect, useState } from 'react';
import { personalInfo } from '../../data/personal';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.title;

  useEffect(() => {
    let index = 0;
    const typeChar = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeChar, 100);
      }
    };
    
    setTimeout(typeChar, 1000);
  }, [fullText]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dennis_Kaninu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (href) => {
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-200 dark:bg-secondary-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
            <span className="block gradient-text">{personalInfo.name}</span>
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-16">
            <span className="typing-text">{typedText}</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => handleNavClick('#projects')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-glow"
            >
              View My Work
            </button>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </button>
            <button 
              onClick={downloadResume}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
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
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-300 text-2xl hover:scale-110 transform"
                >
                  <i className={iconMap[platform] || 'fas fa-envelope'}></i>
                </a>
              );
            })}
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-300 text-2xl hover:scale-110 transform"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => handleNavClick('#about')}
          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-300"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;