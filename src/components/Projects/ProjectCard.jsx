import React from 'react';

const ProjectCard = ({ project }) => {
  const techColors = {
    React: 'text-blue-600 dark:text-blue-400',
    'Node.js': 'text-green-600 dark:text-green-400',
    MongoDB: 'text-blue-600 dark:text-blue-400',
    Stripe: 'text-purple-600 dark:text-purple-400',
    Tailwind: 'text-cyan-600 dark:text-cyan-400',
    'Socket.io': 'text-yellow-600 dark:text-yellow-400',
    Express: 'text-purple-600 dark:text-purple-400',
    PostgreSQL: 'text-blue-600 dark:text-blue-400',
    Redis: 'text-red-600 dark:text-red-400',
    JavaScript: 'text-yellow-600 dark:text-yellow-400',
    'Chart.js': 'text-blue-600 dark:text-blue-400',
    API: 'text-green-600 dark:text-green-400',
    PWA: 'text-orange-600 dark:text-orange-400',
    TypeScript: 'text-blue-600 dark:text-blue-400',
    GraphQL: 'text-purple-600 dark:text-purple-400',
    'D3.js': 'text-green-600 dark:text-green-400',
    AWS: 'text-yellow-600 dark:text-yellow-400',
    OpenAI: 'text-orange-600 dark:text-orange-400',
    NLP: 'text-purple-600 dark:text-purple-400',
    WebSocket: 'text-yellow-600 dark:text-yellow-400'
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover-lift border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <i className={`${project.icon} text-white text-4xl`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className={`tech-tag px-3 py-1 rounded-full text-xs font-medium ${techColors[tech] || 'text-gray-600 dark:text-gray-400'}`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <i className="fab fa-github mr-2"></i>Code
          </a>
          <a 
            href={project.links.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-primary-500 text-white text-center py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors duration-300"
          >
            <i className="fas fa-external-link-alt mr-2"></i>Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;