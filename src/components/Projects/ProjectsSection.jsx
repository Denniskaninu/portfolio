import React from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectsSection = () => {
  useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800 section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/denniskaninu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;