import React, { useEffect, useState } from 'react';
import { personalInfo } from '../../data/personal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutSection = () => {
  const [counters, setCounters] = useState({});
  useScrollAnimation();

  useEffect(() => {
    const animateCounter = (target, elementId) => {
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCounters(prev => ({ ...prev, [elementId]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [elementId]: Math.floor(current) }));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          personalInfo.stats.forEach((stat, index) => {
            const target = parseInt(stat.value);
            animateCounter(target, index);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800 section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {personalInfo.profileImage ? (
                    <img 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="w-full h-full flex items-center justify-center" 
                    style={{display: personalInfo.profileImage ? 'none' : 'flex'}}
                  >
                    <i className="fas fa-user text-gray-400 text-8xl"></i>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white rounded-full w-16 h-16 flex items-center justify-center animate-bounce-slow">
                <i className="fas fa-code text-xl"></i>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Building the future, one line of code at a time
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating robust, 
              scalable web applications that deliver exceptional user experiences. My journey began with a 
              curiosity for problem-solving and has evolved into a passion for crafting elegant solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              technologies and best practices. When I'm not coding, you'll find me contributing to 
              open-source projects, mentoring aspiring developers, or exploring new frameworks.
            </p>
            
            {/* Stats */}
            <div id="stats-container" className="grid grid-cols-2 gap-6 mt-8">
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-500">
                    {counters[index] || 0}{stat.value.includes('+') ? '+' : ''}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;