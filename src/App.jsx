import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import SkillsSection from './components/Skills/SkillsSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Layout/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  useTheme();

  return (
    <Router>
      <div className="bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;