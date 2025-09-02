import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <i className="fas fa-sun dark:hidden text-yellow-500"></i>
      <i className="fas fa-moon hidden dark:block text-blue-400"></i>
    </button>
  );
};

export default ThemeToggle;