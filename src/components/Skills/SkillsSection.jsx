// src/components/skills/SkillsSection.js
import React from "react";
import { skillsData } from "../../data/skills";
import SkillCard from "./SkillCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const SkillsSection = () => {
  useScrollAnimation();

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-dark-900 section-reveal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(skillsData).map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
