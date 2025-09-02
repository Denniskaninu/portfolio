import React, { useEffect } from 'react';

const MobileMenu = ({ isOpen, navLinks, activeSection, onNavClick, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('#mobile-menu') && !e.target.closest('button')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-700">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => onNavClick(e, href)}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              activeSection === href.slice(1)
                ? 'text-primary-500 bg-gray-50 dark:bg-dark-800'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-800'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;